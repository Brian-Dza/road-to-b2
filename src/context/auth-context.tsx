import type { User as SupabaseUser } from "@supabase/supabase-js";
import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  clearSessionVaultKeys,
  decryptSecretWithRawKey,
  deriveVaultKeyBytes,
  encryptSecretWithRawKey,
  generateVaultSaltB64,
  loadSessionVaultKey,
  saveSessionVaultKey,
} from "@/lib/crypto-vault.ts";
import {
  loadScopedUserProgressCache,
  parseCloudProgressPayload,
  saveScopedUserProgressCache,
} from "@/lib/storage.ts";
import { registerAccountViaEdge, supabase } from "@/lib/supabase.ts";
import { applyThemePreferenceImperatively, type ThemePreference } from "@/lib/theme.ts";
import {
  type EncryptedSecretEnvelope,
  EncryptedSecretEnvelopeSchema,
  ThemePreferenceSchema,
  type UserProfile,
  UserProfileSchema,
  type UserProfileUpdateInput,
  UserProfileUpdateInputSchema,
} from "@/schemas/account.schema.ts";
import { type CefrLevel, CefrLevelSchema } from "@/schemas/curriculum.schema.ts";
import { createInitialUserProgress, type UserProgress } from "@/schemas/progress.schema.ts";

export type AuthStatus = "loading" | "unauthenticated" | "authenticated";
type VaultStatus = "empty" | "unlocked" | "locked";
export type CloudSyncState = "synced" | "syncing" | "offline";

export type AuthActionResult =
  | { readonly ok: true; readonly messageEs?: string }
  | { readonly ok: false; readonly errorEs: string };

export interface SignUpFormPayload {
  readonly displayName: string;
  readonly email: string;
  readonly password: string;
  readonly currentCefr: CefrLevel;
  readonly targetItepScore: number;
}

interface HydratedAccountBundle {
  readonly profile: UserProfile;
  readonly initialProgress: UserProgress;
  readonly hasUnsyncedLocalChanges: boolean;
  readonly recoveredFromCorruption: boolean;
  readonly decryptedGeminiKey: string | null;
}

interface AuthContextValue {
  readonly status: AuthStatus;
  readonly profile: UserProfile | null;
  readonly initialProgress: UserProgress;
  readonly hasUnsyncedLocalChangesOnBoot: boolean;
  readonly recoveredFromCorruption: boolean;
  readonly decryptedGeminiApiKey: string | null;
  readonly vaultStatus: VaultStatus;
  readonly cloudSyncState: CloudSyncState;
  readonly setCloudSyncState: (state: CloudSyncState) => void;
  readonly signIn: (email: string, password: string) => Promise<AuthActionResult>;
  readonly signUp: (payload: SignUpFormPayload) => Promise<AuthActionResult>;
  readonly signOut: () => Promise<void>;
  readonly updateProfile: (input: UserProfileUpdateInput) => Promise<AuthActionResult>;
  readonly updateAccountTheme: (theme: ThemePreference) => Promise<void>;
  readonly saveEncryptedGeminiKey: (
    plainKey: string,
    passwordIfLocked?: string,
  ) => Promise<AuthActionResult>;
  readonly unlockGeminiVault: (password: string) => Promise<AuthActionResult>;
  readonly changePassword: (
    currentPassword: string,
    newPassword: string,
  ) => Promise<AuthActionResult>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

function buildFallbackDisplayName(user: SupabaseUser): string {
  const metaName = user.user_metadata?.display_name;
  if (typeof metaName === "string" && metaName.trim().length > 0) {
    return metaName.trim().slice(0, 80);
  }
  const emailPrefix = user.email?.split("@")[0]?.trim();
  if (emailPrefix && emailPrefix.length > 0) {
    return emailPrefix.slice(0, 80);
  }
  return "Estudiante iTEP";
}

function parseProfileRow(row: Record<string, unknown> | null, user: SupabaseUser): UserProfile {
  const fallbackName = buildFallbackDisplayName(user);
  const rawName = typeof row?.display_name === "string" ? row.display_name.trim() : "";
  const displayName = rawName.length > 0 ? rawName.slice(0, 80) : fallbackName;

  const parsedCefr = CefrLevelSchema.safeParse(row?.current_cefr);
  const currentCefr: CefrLevel = parsedCefr.success ? parsedCefr.data : "B1";

  const numericScore =
    typeof row?.target_itep_score === "number"
      ? row.target_itep_score
      : typeof row?.target_itep_score === "string"
        ? Number.parseFloat(row.target_itep_score)
        : 3.8;
  const targetItepScore =
    Number.isFinite(numericScore) && numericScore >= 3.5 && numericScore <= 6.0
      ? Math.round(numericScore * 10) / 10
      : 3.8;

  const examDate =
    typeof row?.exam_date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(row.exam_date)
      ? row.exam_date
      : null;

  const rawDaily = typeof row?.daily_goal_minutes === "number" ? row.daily_goal_minutes : 140;
  const dailyGoalMinutes =
    Number.isInteger(rawDaily) && rawDaily >= 60 && rawDaily <= 300 ? rawDaily : 140;

  const parsedTheme = ThemePreferenceSchema.safeParse(row?.theme_preference);
  const themePreference: ThemePreference = parsedTheme.success ? parsedTheme.data : "system";

  const bioGoal = typeof row?.bio_goal === "string" ? row.bio_goal.slice(0, 240) : "";

  const vaultSalt =
    typeof row?.vault_salt === "string" && row.vault_salt.length >= 16 ? row.vault_salt : null;

  let encryptedGeminiKey: EncryptedSecretEnvelope | null = null;
  if (row?.encrypted_gemini_key !== null && row?.encrypted_gemini_key !== undefined) {
    const parsedEnvelope = EncryptedSecretEnvelopeSchema.safeParse(row.encrypted_gemini_key);
    if (parsedEnvelope.success) {
      encryptedGeminiKey = parsedEnvelope.data;
    }
  }

  return UserProfileSchema.parse({
    userId: user.id,
    email: user.email ?? "estudiante@roadtob2.app",
    displayName,
    currentCefr,
    targetItepScore,
    examDate,
    dailyGoalMinutes,
    themePreference,
    bioGoal,
    vaultSalt,
    encryptedGeminiKey,
  });
}

function translateAuthErrorEs(rawMessage: string): string {
  const lower = rawMessage.toLowerCase();
  if (lower.includes("invalid login credentials")) {
    return "Correo electrónico o contraseña incorrectos. Verifica tus credenciales.";
  }
  if (lower.includes("email not confirmed")) {
    return "Tu correo aún no está confirmado.";
  }
  if (lower.includes("rate limit") || lower.includes("too many requests")) {
    return "Demasiados intentos seguidos. Espera unos segundos antes de volver a intentar.";
  }
  if (lower.includes("network") || lower.includes("fetch")) {
    return "Error de conexión a internet. Verifica tu red e inténtalo de nuevo.";
  }
  return "No se pudo completar la autenticación. Verifica tus datos e inténtalo de nuevo.";
}

export function AuthProvider({ children }: { readonly children: ReactNode }) {
  const [status, setStatus] = useState<AuthStatus>("loading");
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [initialProgress, setInitialProgress] = useState<UserProgress>(() =>
    createInitialUserProgress(),
  );
  const [hasUnsyncedLocalChangesOnBoot, setHasUnsyncedLocalChangesOnBoot] =
    useState<boolean>(false);
  const [recoveredFromCorruption, setRecoveredFromCorruption] = useState<boolean>(false);
  const [decryptedGeminiApiKey, setDecryptedGeminiApiKey] = useState<string | null>(null);
  const [cloudSyncState, setCloudSyncState] = useState<CloudSyncState>("synced");

  const rawVaultKeyRef = useRef<Uint8Array<ArrayBuffer> | null>(null);
  const activeUserIdRef = useRef<string | null>(null);
  const manualAuthInFlightRef = useRef<boolean>(false);

  const hydrateUserFromCloud = useCallback(
    async (user: SupabaseUser, passwordIfJustEntered?: string): Promise<HydratedAccountBundle> => {
      const localCache = loadScopedUserProgressCache(user.id);

      const [profileRes, progressRes] = await Promise.all([
        supabase.from("user_profiles").select("*").eq("user_id", user.id).maybeSingle(),
        supabase
          .from("user_study_progress")
          .select("progress_payload, updated_at")
          .eq("user_id", user.id)
          .maybeSingle(),
      ]);

      let resolvedProfile = parseProfileRow(
        (profileRes.data as Record<string, unknown> | null) ?? null,
        user,
      );

      if (!profileRes.data && !profileRes.error) {
        const freshSalt = generateVaultSaltB64();
        await supabase.from("user_profiles").upsert(
          {
            user_id: user.id,
            display_name: resolvedProfile.displayName,
            current_cefr: resolvedProfile.currentCefr,
            target_itep_score: resolvedProfile.targetItepScore,
            vault_salt: freshSalt,
          },
          { onConflict: "user_id" },
        );
        resolvedProfile = { ...resolvedProfile, vaultSalt: freshSalt };
      }

      let resolvedVaultKey: Uint8Array<ArrayBuffer> | null = loadSessionVaultKey(user.id);

      if (passwordIfJustEntered) {
        const targetSalt =
          resolvedProfile.encryptedGeminiKey?.saltB64 ??
          resolvedProfile.vaultSalt ??
          generateVaultSaltB64();

        if (!resolvedProfile.vaultSalt) {
          await supabase
            .from("user_profiles")
            .update({ vault_salt: targetSalt })
            .eq("user_id", user.id);
          resolvedProfile = { ...resolvedProfile, vaultSalt: targetSalt };
        }

        const iterations = resolvedProfile.encryptedGeminiKey?.iterations;
        resolvedVaultKey = await deriveVaultKeyBytes(passwordIfJustEntered, targetSalt, iterations);
        saveSessionVaultKey(user.id, resolvedVaultKey);
      }

      rawVaultKeyRef.current = resolvedVaultKey;

      let decryptedKey: string | null = null;
      if (resolvedProfile.encryptedGeminiKey && resolvedVaultKey) {
        try {
          decryptedKey = await decryptSecretWithRawKey(
            resolvedProfile.encryptedGeminiKey,
            resolvedVaultKey,
          );
        } catch {
          decryptedKey = null;
        }
      }

      let resolvedProgress = localCache.progress;
      let hasUnsynced = false;
      let hadCorruption = localCache.recoveredFromCorruption;

      if (localCache.hasCachedEntry && localCache.updatedAtMs > localCache.syncedAtMs) {
        resolvedProgress = localCache.progress;
        hasUnsynced = true;
      } else if (progressRes.data) {
        const cloudParsed = parseCloudProgressPayload(progressRes.data.progress_payload);
        if (cloudParsed.hadSchemaError) {
          hadCorruption = true;
        }
        if (!cloudParsed.isEmptyObject && !cloudParsed.hadSchemaError) {
          resolvedProgress = cloudParsed.progress;
          const nowMs = Date.now();
          saveScopedUserProgressCache(user.id, resolvedProgress, {
            updatedAtMs: nowMs,
            syncedAtMs: nowMs,
          });
        } else if (!localCache.hasCachedEntry) {
          resolvedProgress = createInitialUserProgress();
        }
      } else if (!progressRes.error && !progressRes.data) {
        await supabase.from("user_study_progress").upsert(
          {
            user_id: user.id,
            schema_version: 1,
            progress_payload: {},
          },
          { onConflict: "user_id" },
        );
      }

      if (profileRes.error || progressRes.error) {
        setCloudSyncState("offline");
      } else {
        setCloudSyncState("synced");
      }

      return {
        profile: resolvedProfile,
        initialProgress: resolvedProgress,
        hasUnsyncedLocalChanges: hasUnsynced,
        recoveredFromCorruption: hadCorruption,
        decryptedGeminiKey: decryptedKey,
      };
    },
    [],
  );

  const applyHydratedBundle = useCallback((bundle: HydratedAccountBundle) => {
    activeUserIdRef.current = bundle.profile.userId;
    setProfile(bundle.profile);
    setInitialProgress(bundle.initialProgress);
    setHasUnsyncedLocalChangesOnBoot(bundle.hasUnsyncedLocalChanges);
    setRecoveredFromCorruption(bundle.recoveredFromCorruption);
    setDecryptedGeminiApiKey(bundle.decryptedGeminiKey);
    applyThemePreferenceImperatively(bundle.profile.themePreference);
    setStatus("authenticated");
  }, []);

  const clearAuthState = useCallback(() => {
    activeUserIdRef.current = null;
    rawVaultKeyRef.current = null;
    clearSessionVaultKeys();
    setProfile(null);
    setInitialProgress(createInitialUserProgress());
    setHasUnsyncedLocalChangesOnBoot(false);
    setRecoveredFromCorruption(false);
    setDecryptedGeminiApiKey(null);
    setStatus("unauthenticated");
  }, []);

  useEffect(() => {
    let cancelled = false;

    const bootstrapSession = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (cancelled) {
          return;
        }

        if (!session?.user) {
          setStatus("unauthenticated");
          return;
        }

        const bundle = await hydrateUserFromCloud(session.user);
        if (!cancelled) {
          applyHydratedBundle(bundle);
        }
      } catch {
        if (!cancelled) {
          setStatus("unauthenticated");
        }
      }
    };

    void bootstrapSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (manualAuthInFlightRef.current) {
        return;
      }
      if (event === "SIGNED_OUT" || !session?.user) {
        if (!cancelled) {
          clearAuthState();
        }
        return;
      }
      if (event === "SIGNED_IN" && activeUserIdRef.current !== session.user.id) {
        const nextUser = session.user;
        queueMicrotask(() => {
          void hydrateUserFromCloud(nextUser).then((bundle) => {
            if (!cancelled) {
              applyHydratedBundle(bundle);
            }
          });
        });
      }
    });

    return () => {
      cancelled = true;
      subscription.unsubscribe();
    };
  }, [applyHydratedBundle, clearAuthState, hydrateUserFromCloud]);

  const signIn = useCallback(
    async (email: string, password: string): Promise<AuthActionResult> => {
      const normalizedEmail = email.trim().toLowerCase();
      if (!normalizedEmail || !password) {
        return {
          ok: false,
          errorEs: "Ingresa tu correo electrónico y tu contraseña.",
        };
      }

      manualAuthInFlightRef.current = true;
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: normalizedEmail,
          password,
        });

        if (error || !data.user) {
          return {
            ok: false,
            errorEs: translateAuthErrorEs(error?.message ?? ""),
          };
        }

        const bundle = await hydrateUserFromCloud(data.user, password);
        applyHydratedBundle(bundle);
        return { ok: true };
      } finally {
        manualAuthInFlightRef.current = false;
      }
    },
    [applyHydratedBundle, hydrateUserFromCloud],
  );

  const signUp = useCallback(
    async (payload: SignUpFormPayload): Promise<AuthActionResult> => {
      const displayName = payload.displayName.trim();
      const email = payload.email.trim().toLowerCase();
      const password = payload.password;

      if (displayName.length < 1 || displayName.length > 80) {
        return { ok: false, errorEs: "Ingresa tu nombre o alias (1 a 80 caracteres)." };
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
        return { ok: false, errorEs: "Ingresa un correo electrónico válido." };
      }
      if (password.length < 8 || password.length > 128) {
        return { ok: false, errorEs: "La contraseña debe tener al menos 8 caracteres." };
      }

      const vaultSalt = generateVaultSaltB64();

      manualAuthInFlightRef.current = true;
      try {
        const registerRes = await registerAccountViaEdge({
          email,
          password,
          displayName,
          currentCefr: payload.currentCefr,
          targetItepScore: payload.targetItepScore,
          vaultSalt,
        });

        if (!registerRes.ok) {
          return { ok: false, errorEs: registerRes.messageEs };
        }

        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error || !data.user) {
          return {
            ok: false,
            errorEs: translateAuthErrorEs(error?.message ?? ""),
          };
        }

        const bundle = await hydrateUserFromCloud(data.user, password);
        applyHydratedBundle(bundle);
        return { ok: true };
      } finally {
        manualAuthInFlightRef.current = false;
      }
    },
    [applyHydratedBundle, hydrateUserFromCloud],
  );

  const signOut = useCallback(async (): Promise<void> => {
    manualAuthInFlightRef.current = true;
    try {
      await supabase.auth.signOut();
    } finally {
      if (typeof window !== "undefined") {
        window.location.hash = "#/";
      }
      clearAuthState();
      manualAuthInFlightRef.current = false;
    }
  }, [clearAuthState]);

  const updateProfile = useCallback(
    async (input: UserProfileUpdateInput): Promise<AuthActionResult> => {
      if (!profile) {
        return { ok: false, errorEs: "No hay una sesión activa." };
      }

      const validated = UserProfileUpdateInputSchema.safeParse(input);
      if (!validated.success) {
        const msg = validated.error.issues[0]?.message ?? "Revisa los campos de tu perfil.";
        return { ok: false, errorEs: msg };
      }

      setCloudSyncState("syncing");
      const { error } = await supabase
        .from("user_profiles")
        .update({
          display_name: validated.data.displayName,
          current_cefr: validated.data.currentCefr,
          target_itep_score: validated.data.targetItepScore,
          exam_date: validated.data.examDate,
          daily_goal_minutes: validated.data.dailyGoalMinutes,
          bio_goal: validated.data.bioGoal,
        })
        .eq("user_id", profile.userId);

      if (error) {
        setCloudSyncState("offline");
        return {
          ok: false,
          errorEs: "No se pudo guardar el perfil en la nube. Verifica tu conexión.",
        };
      }

      setCloudSyncState("synced");
      setProfile((prev) =>
        prev
          ? {
              ...prev,
              displayName: validated.data.displayName,
              currentCefr: validated.data.currentCefr,
              targetItepScore: validated.data.targetItepScore,
              examDate: validated.data.examDate,
              dailyGoalMinutes: validated.data.dailyGoalMinutes,
              bioGoal: validated.data.bioGoal,
            }
          : null,
      );

      return {
        ok: true,
        messageEs: "Perfil personal actualizado y sincronizado en tu cuenta.",
      };
    },
    [profile],
  );

  const updateAccountTheme = useCallback(
    async (theme: ThemePreference): Promise<void> => {
      applyThemePreferenceImperatively(theme);
      if (!profile) {
        return;
      }
      setProfile((prev) => (prev ? { ...prev, themePreference: theme } : null));
      const { error } = await supabase
        .from("user_profiles")
        .update({ theme_preference: theme })
        .eq("user_id", profile.userId);
      if (error) {
        setCloudSyncState("offline");
      } else {
        setCloudSyncState("synced");
      }
    },
    [profile],
  );

  const saveEncryptedGeminiKey = useCallback(
    async (plainKey: string, passwordIfLocked?: string): Promise<AuthActionResult> => {
      if (!profile) {
        return { ok: false, errorEs: "No hay una sesión activa." };
      }

      const trimmed = plainKey.trim();
      if (trimmed.length === 0) {
        setCloudSyncState("syncing");
        const { error } = await supabase
          .from("user_profiles")
          .update({ encrypted_gemini_key: null })
          .eq("user_id", profile.userId);

        if (error) {
          setCloudSyncState("offline");
          return {
            ok: false,
            errorEs: "No se pudo eliminar la clave cifrada en la nube. Intenta de nuevo.",
          };
        }

        setCloudSyncState("synced");
        setDecryptedGeminiApiKey(null);
        setProfile((prev) => (prev ? { ...prev, encryptedGeminiKey: null } : null));
        return {
          ok: true,
          messageEs: "Tu Gemini API Key cifrada fue eliminada de esta cuenta.",
        };
      }

      if (trimmed.length < 16 || trimmed.length > 256 || !/^[!-~]+$/.test(trimmed)) {
        return {
          ok: false,
          errorEs:
            "Formato de Gemini API Key inválido. Pega tu clave de Google AI Studio sin espacios.",
        };
      }

      let rawKey = rawVaultKeyRef.current ?? loadSessionVaultKey(profile.userId);
      let effectiveSalt =
        profile.encryptedGeminiKey?.saltB64 ?? profile.vaultSalt ?? generateVaultSaltB64();

      if (!rawKey) {
        if (!passwordIfLocked || passwordIfLocked.length === 0) {
          return {
            ok: false,
            errorEs: "Confirma tu contraseña de cuenta para cifrar tu clave personal con AES-GCM.",
          };
        }

        manualAuthInFlightRef.current = true;
        try {
          const { error: verifyErr } = await supabase.auth.signInWithPassword({
            email: profile.email,
            password: passwordIfLocked,
          });
          if (verifyErr) {
            return {
              ok: false,
              errorEs: "La contraseña ingresada no coincide con tu cuenta.",
            };
          }
        } finally {
          manualAuthInFlightRef.current = false;
        }

        effectiveSalt = profile.vaultSalt ?? generateVaultSaltB64();
        rawKey = await deriveVaultKeyBytes(passwordIfLocked, effectiveSalt);
        rawVaultKeyRef.current = rawKey;
        saveSessionVaultKey(profile.userId, rawKey);
      }

      const envelope = await encryptSecretWithRawKey(trimmed, rawKey, effectiveSalt);

      setCloudSyncState("syncing");
      const { error } = await supabase
        .from("user_profiles")
        .update({
          vault_salt: effectiveSalt,
          encrypted_gemini_key: envelope,
        })
        .eq("user_id", profile.userId);

      if (error) {
        setCloudSyncState("offline");
        return {
          ok: false,
          errorEs: "No se pudo sincronizar la clave cifrada con la nube.",
        };
      }

      setCloudSyncState("synced");
      setDecryptedGeminiApiKey(trimmed);
      setProfile((prev) =>
        prev
          ? {
              ...prev,
              vaultSalt: effectiveSalt,
              encryptedGeminiKey: envelope,
            }
          : null,
      );

      return {
        ok: true,
        messageEs:
          "Gemini API Key cifrada con AES-GCM-256 y vinculada de forma privada a tu cuenta.",
      };
    },
    [profile],
  );

  const unlockGeminiVault = useCallback(
    async (password: string): Promise<AuthActionResult> => {
      if (!profile?.encryptedGeminiKey) {
        return { ok: false, errorEs: "No hay ninguna clave cifrada guardada en tu cuenta." };
      }
      if (!password) {
        return { ok: false, errorEs: "Ingresa tu contraseña para desbloquear tu clave." };
      }

      try {
        const rawKey = await deriveVaultKeyBytes(
          password,
          profile.encryptedGeminiKey.saltB64,
          profile.encryptedGeminiKey.iterations,
        );
        const plain = await decryptSecretWithRawKey(profile.encryptedGeminiKey, rawKey);
        rawVaultKeyRef.current = rawKey;
        saveSessionVaultKey(profile.userId, rawKey);
        setDecryptedGeminiApiKey(plain);
        return {
          ok: true,
          messageEs: "Bóveda AES-GCM desbloqueada para esta sesión.",
        };
      } catch {
        return {
          ok: false,
          errorEs: "Contraseña incorrecta. No se pudo descifrar tu Gemini API Key.",
        };
      }
    },
    [profile],
  );

  const changePassword = useCallback(
    async (currentPassword: string, newPassword: string): Promise<AuthActionResult> => {
      if (!profile) {
        return { ok: false, errorEs: "No hay una sesión activa." };
      }
      if (newPassword.length < 8 || newPassword.length > 128) {
        return {
          ok: false,
          errorEs: "La nueva contraseña debe tener entre 8 y 128 caracteres.",
        };
      }

      manualAuthInFlightRef.current = true;
      try {
        const { error: verifyErr } = await supabase.auth.signInWithPassword({
          email: profile.email,
          password: currentPassword,
        });
        if (verifyErr) {
          return {
            ok: false,
            errorEs: "La contraseña actual es incorrecta.",
          };
        }

        let plainGeminiToReencrypt: string | null = decryptedGeminiApiKey;
        if (!plainGeminiToReencrypt && profile.encryptedGeminiKey) {
          const oldRawKey = await deriveVaultKeyBytes(
            currentPassword,
            profile.encryptedGeminiKey.saltB64,
            profile.encryptedGeminiKey.iterations,
          );
          plainGeminiToReencrypt = await decryptSecretWithRawKey(
            profile.encryptedGeminiKey,
            oldRawKey,
          );
        }

        const newSalt = generateVaultSaltB64();
        const newRawKey = await deriveVaultKeyBytes(newPassword, newSalt);
        const newEnvelope: EncryptedSecretEnvelope | null = plainGeminiToReencrypt
          ? await encryptSecretWithRawKey(plainGeminiToReencrypt, newRawKey, newSalt)
          : null;

        const { error: updateAuthErr } = await supabase.auth.updateUser({
          password: newPassword,
        });
        if (updateAuthErr) {
          return {
            ok: false,
            errorEs: "No se pudo actualizar la contraseña. Elige una contraseña distinta y segura.",
          };
        }

        const { error: profileErr } = await supabase
          .from("user_profiles")
          .update({
            vault_salt: newSalt,
            encrypted_gemini_key: newEnvelope,
          })
          .eq("user_id", profile.userId);

        if (profileErr) {
          setCloudSyncState("offline");
        } else {
          setCloudSyncState("synced");
        }

        rawVaultKeyRef.current = newRawKey;
        saveSessionVaultKey(profile.userId, newRawKey);
        if (plainGeminiToReencrypt) {
          setDecryptedGeminiApiKey(plainGeminiToReencrypt);
        }
        setProfile((prev) =>
          prev
            ? {
                ...prev,
                vaultSalt: newSalt,
                encryptedGeminiKey: newEnvelope,
              }
            : null,
        );

        return {
          ok: true,
          messageEs:
            "Contraseña actualizada correctamente y bóveda AES-GCM re-cifrada con tu nueva clave.",
        };
      } catch {
        return {
          ok: false,
          errorEs: "Ocurrió un error al re-cifrar tus credenciales. Tu contraseña no fue cambiada.",
        };
      } finally {
        manualAuthInFlightRef.current = false;
      }
    },
    [decryptedGeminiApiKey, profile],
  );

  const vaultStatus: VaultStatus = useMemo(() => {
    if (!profile?.encryptedGeminiKey) {
      return "empty";
    }
    return decryptedGeminiApiKey ? "unlocked" : "locked";
  }, [decryptedGeminiApiKey, profile?.encryptedGeminiKey]);

  const value: AuthContextValue = useMemo(
    () => ({
      status,
      profile,
      initialProgress,
      hasUnsyncedLocalChangesOnBoot,
      recoveredFromCorruption,
      decryptedGeminiApiKey,
      vaultStatus,
      cloudSyncState,
      setCloudSyncState,
      signIn,
      signUp,
      signOut,
      updateProfile,
      updateAccountTheme,
      saveEncryptedGeminiKey,
      unlockGeminiVault,
      changePassword,
    }),
    [
      changePassword,
      cloudSyncState,
      decryptedGeminiApiKey,
      hasUnsyncedLocalChangesOnBoot,
      initialProgress,
      profile,
      recoveredFromCorruption,
      saveEncryptedGeminiKey,
      signIn,
      signOut,
      signUp,
      status,
      unlockGeminiVault,
      updateAccountTheme,
      updateProfile,
      vaultStatus,
    ],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be called inside <AuthProvider>");
  }
  return ctx;
}
