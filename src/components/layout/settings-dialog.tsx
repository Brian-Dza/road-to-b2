import {
  AlertTriangle,
  CheckCircle2,
  Download,
  Eye,
  EyeOff,
  KeyRound,
  Lock,
  LogOut,
  Monitor,
  Moon,
  RotateCcw,
  ShieldCheck,
  Sun,
  Unlock,
  Upload,
  UserCog,
  X,
} from "lucide-react";
import {
  type ChangeEvent,
  type FormEvent,
  type RefObject,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { useAuth } from "@/context/auth-context.tsx";
import { useProgress } from "@/context/progress-context.tsx";
import { type ThemePreference, useThemePreference } from "@/lib/theme.ts";
import { cn } from "@/lib/utils.ts";
import type { CefrLevel } from "@/schemas/curriculum.schema.ts";

export interface SettingsDialogProps {
  readonly dialogRef: RefObject<HTMLDialogElement | null>;
}

const CEFR_OPTIONS: readonly CefrLevel[] = ["A1", "A2", "B1", "B2"];
const TARGET_SCORE_CHOICES: readonly number[] = [3.5, 3.8, 4.2, 4.5];
const DAILY_MINUTES_CHOICES: readonly number[] = [120, 140, 160, 180];

export function SettingsDialog({ dialogRef }: SettingsDialogProps) {
  const titleId = useId();
  const profileNameId = useId();
  const examDateId = useId();
  const bioGoalId = useId();
  const apiKeyId = useId();
  const apiKeyHintId = useId();
  const unlockPwdId = useId();
  const currentPwdId = useId();
  const newPwdId = useId();
  const importInputId = useId();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const {
    profile,
    vaultStatus,
    decryptedGeminiApiKey,
    updateProfile,
    updateAccountTheme,
    saveEncryptedGeminiKey,
    unlockGeminiVault,
    changePassword,
    signOut,
  } = useAuth();

  const {
    summary,
    hasLegacyBrowserProgress,
    exportBackupJson,
    importBackupJsonText,
    importLegacyBrowserProgress,
    resetAllProgress,
  } = useProgress();

  const { preference, systemIsDark, setThemePreference } = useThemePreference();

  // Profile form state
  const [displayNameDraft, setDisplayNameDraft] = useState<string>(profile?.displayName ?? "");
  const [currentCefrDraft, setCurrentCefrDraft] = useState<CefrLevel>(profile?.currentCefr ?? "B1");
  const [targetScoreDraft, setTargetScoreDraft] = useState<number>(profile?.targetItepScore ?? 3.8);
  const [examDateDraft, setExamDateDraft] = useState<string>(profile?.examDate ?? "");
  const [dailyMinutesDraft, setDailyMinutesDraft] = useState<number>(
    profile?.dailyGoalMinutes ?? 140,
  );
  const [bioGoalDraft, setBioGoalDraft] = useState<string>(profile?.bioGoal ?? "");
  const [isSavingProfile, setIsSavingProfile] = useState<boolean>(false);

  // Encrypted Gemini API key vault state
  const [apiKeyDraft, setApiKeyDraft] = useState<string>(decryptedGeminiApiKey ?? "");
  const [showApiKey, setShowApiKey] = useState<boolean>(false);
  const [vaultPasswordDraft, setVaultPasswordDraft] = useState<string>("");
  const [isSavingKey, setIsSavingKey] = useState<boolean>(false);

  // Password change state
  const [currentPasswordDraft, setCurrentPasswordDraft] = useState<string>("");
  const [newPasswordDraft, setNewPasswordDraft] = useState<string>("");
  const [isChangingPassword, setIsChangingPassword] = useState<boolean>(false);

  // Backup & reset state
  const [confirmingReset, setConfirmingReset] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<{
    readonly tone: "success" | "error";
    readonly text: string;
  } | null>(null);

  useEffect(() => {
    if (!profile) {
      return;
    }
    setDisplayNameDraft(profile.displayName);
    setCurrentCefrDraft(profile.currentCefr);
    setTargetScoreDraft(profile.targetItepScore);
    setExamDateDraft(profile.examDate ?? "");
    setDailyMinutesDraft(profile.dailyGoalMinutes);
    setBioGoalDraft(profile.bioGoal);
  }, [profile]);

  useEffect(() => {
    setApiKeyDraft(decryptedGeminiApiKey ?? "");
  }, [decryptedGeminiApiKey]);

  useEffect(() => {
    const dialogEl = dialogRef.current;
    if (!dialogEl) {
      return;
    }

    const handleClose = () => {
      dialogEl.returnValue = "";
      setConfirmingReset(false);
      setVaultPasswordDraft("");
      setCurrentPasswordDraft("");
      setNewPasswordDraft("");
      setFeedback(null);
    };

    dialogEl.addEventListener("close", handleClose);
    return () => {
      dialogEl.removeEventListener("close", handleClose);
    };
  }, [dialogRef]);

  const handleSaveProfile = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSavingProfile) {
      return;
    }
    setIsSavingProfile(true);
    try {
      const res = await updateProfile({
        displayName: displayNameDraft,
        currentCefr: currentCefrDraft,
        targetItepScore: targetScoreDraft,
        examDate: examDateDraft.trim().length > 0 ? examDateDraft.trim() : null,
        dailyGoalMinutes: dailyMinutesDraft,
        bioGoal: bioGoalDraft,
      });
      if (res.ok) {
        setFeedback({
          tone: "success",
          text: res.messageEs ?? "Perfil actualizado correctamente.",
        });
      } else {
        setFeedback({ tone: "error", text: res.errorEs });
      }
    } finally {
      setIsSavingProfile(false);
    }
  };

  const handleSelectTheme = (next: ThemePreference) => {
    setThemePreference(next);
    void updateAccountTheme(next);
  };

  const handleSaveApiKey = async () => {
    if (isSavingKey) {
      return;
    }
    setIsSavingKey(true);
    try {
      const res = await saveEncryptedGeminiKey(apiKeyDraft, vaultPasswordDraft);
      if (res.ok) {
        setVaultPasswordDraft("");
        setFeedback({
          tone: "success",
          text:
            res.messageEs ??
            (apiKeyDraft.trim().length > 0
              ? "Gemini API Key cifrada con AES-GCM y guardada en tu cuenta."
              : "Gemini API Key eliminada de tu cuenta."),
        });
      } else {
        setFeedback({ tone: "error", text: res.errorEs });
      }
    } finally {
      setIsSavingKey(false);
    }
  };

  const handleClearApiKey = async () => {
    if (isSavingKey) {
      return;
    }
    setIsSavingKey(true);
    try {
      const res = await saveEncryptedGeminiKey("");
      setApiKeyDraft("");
      setVaultPasswordDraft("");
      if (res.ok) {
        setFeedback({
          tone: "success",
          text: res.messageEs ?? "Gemini API Key eliminada correctamente.",
        });
      } else {
        setFeedback({ tone: "error", text: res.errorEs });
      }
    } finally {
      setIsSavingKey(false);
    }
  };

  const handleUnlockVault = async () => {
    if (isSavingKey) {
      return;
    }
    setIsSavingKey(true);
    try {
      const res = await unlockGeminiVault(vaultPasswordDraft);
      if (res.ok) {
        setVaultPasswordDraft("");
        setFeedback({
          tone: "success",
          text: res.messageEs ?? "Clave Gemini desbloqueada para esta sesión.",
        });
      } else {
        setFeedback({ tone: "error", text: res.errorEs });
      }
    } finally {
      setIsSavingKey(false);
    }
  };

  const handlePasswordChangeSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isChangingPassword) {
      return;
    }
    setIsChangingPassword(true);
    try {
      const res = await changePassword(currentPasswordDraft, newPasswordDraft);
      if (res.ok) {
        setCurrentPasswordDraft("");
        setNewPasswordDraft("");
        setFeedback({
          tone: "success",
          text: res.messageEs ?? "Contraseña actualizada correctamente.",
        });
      } else {
        setFeedback({ tone: "error", text: res.errorEs });
      }
    } finally {
      setIsChangingPassword(false);
    }
  };

  const handleExport = () => {
    exportBackupJson();
    setFeedback({
      tone: "success",
      text: "Descarga iniciada: road-to-b2-backup.json",
    });
  };

  const handleImportFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    event.target.value = "";
    if (!selectedFile) {
      return;
    }

    if (selectedFile.size > 2 * 1024 * 1024) {
      setFeedback({
        tone: "error",
        text: "El archivo JSON supera el límite máximo permitido de 2 MB.",
      });
      return;
    }

    try {
      const rawText = await selectedFile.text();
      const result = importBackupJsonText(rawText);
      if (result.ok) {
        setFeedback({ tone: "success", text: result.messageEs });
      } else {
        setFeedback({ tone: "error", text: result.errorEs });
      }
    } catch {
      setFeedback({
        tone: "error",
        text: "No se pudo leer el archivo seleccionado. Verifica los permisos del archivo.",
      });
    }
  };

  const handleImportLegacy = () => {
    const res = importLegacyBrowserProgress();
    if (res.ok) {
      setFeedback({ tone: "success", text: res.messageEs });
    } else {
      setFeedback({ tone: "error", text: res.errorEs });
    }
  };

  const handleConfirmReset = () => {
    resetAllProgress();
    setConfirmingReset(false);
    setFeedback({
      tone: "success",
      text: "Todo el progreso local fue reiniciado a su estado inicial limpio.",
    });
  };

  const handleSignOutFromDialog = async () => {
    dialogRef.current?.close();
    await signOut();
  };

  const themeOptions: readonly {
    readonly id: ThemePreference;
    readonly label: string;
    readonly Icon: typeof Monitor;
  }[] = [
    {
      id: "system",
      label: `Sistema (actual: ${systemIsDark ? "oscuro" : "claro"})`,
      Icon: Monitor,
    },
    { id: "light", label: "Claro", Icon: Sun },
    { id: "dark", label: "Oscuro", Icon: Moon },
  ];

  const vaultStatusLabel =
    vaultStatus === "unlocked"
      ? "Cifrada y activa (AES-GCM)"
      : vaultStatus === "locked"
        ? "Cifrada · Desbloqueo pendiente"
        : "Sin configurar";

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      className="m-auto w-[min(95dvw,42rem)] rounded-2xl border border-line bg-card p-0 text-ink shadow-xl"
    >
      <div className="max-h-[88dvh] overflow-y-auto p-6">
        <div className="flex items-start justify-between gap-4 border-b border-line pb-4">
          <div>
            <h2 id={titleId} className="text-lg font-bold tracking-tight">
              Perfil Personal, Claves y Respaldo
            </h2>
            <p className="mt-1 text-xs leading-relaxed text-ink-muted">
              Cuenta activa:{" "}
              <span className="font-semibold text-ink">{profile?.email ?? "Sesión activa"}</span> ·
              Todo tu progreso y tus claves están aislados para tu usuario.
            </p>
          </div>
          <form method="dialog">
            <button
              type="submit"
              value="close"
              aria-label="Cerrar ventana de ajustes"
              className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-xl border border-line bg-muted text-ink transition-colors hover:border-line-strong"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
        </div>

        {feedback ? (
          <div
            role={feedback.tone === "error" ? "alert" : "status"}
            className={cn(
              "mt-4 flex items-start gap-2.5 rounded-xl border px-3.5 py-2.5 text-xs font-medium",
              feedback.tone === "error"
                ? "border-err-border/70 bg-err-bg text-err-fg"
                : "border-ok-border/70 bg-ok-bg text-ok-fg",
            )}
          >
            {feedback.tone === "error" ? (
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            ) : (
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            )}
            <span>{feedback.text}</span>
          </div>
        ) : null}

        {/* 1. Perfil Personal del Estudiante */}
        <section className="mt-5">
          <div className="flex items-center justify-between gap-2">
            <h3 className="flex items-center gap-1.5 text-sm font-bold">
              <UserCog className="h-4 w-4 text-brand" aria-hidden="true" />
              <span>Datos básicos de tu perfil</span>
            </h3>
            <span className="text-[11px] font-semibold text-ok-fg">Sincronizado en la nube</span>
          </div>

          <form onSubmit={handleSaveProfile} className="mt-3 space-y-3.5">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="flex flex-col gap-1">
                <label htmlFor={profileNameId} className="text-xs font-semibold text-ink">
                  Nombre visible <span aria-hidden="true">*</span>
                </label>
                <input
                  id={profileNameId}
                  name="displayName"
                  type="text"
                  autoComplete="name"
                  required
                  maxLength={80}
                  value={displayNameDraft}
                  onChange={(e) => setDisplayNameDraft(e.target.value)}
                  className="min-h-11 rounded-xl border border-line-strong bg-canvas px-3 py-2 text-xs text-ink"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor={examDateId} className="text-xs font-semibold text-ink">
                  Fecha estimada de tu examen iTEP (opcional)
                </label>
                <input
                  id={examDateId}
                  name="examDate"
                  type="date"
                  value={examDateDraft}
                  onChange={(e) => setExamDateDraft(e.target.value)}
                  className="min-h-11 rounded-xl border border-line-strong bg-canvas px-3 py-2 text-xs text-ink tabular-nums"
                />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <fieldset>
                <legend className="text-xs font-semibold text-ink">Nivel base MCER</legend>
                <div className="mt-1 grid grid-cols-4 gap-1">
                  {CEFR_OPTIONS.map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      aria-pressed={currentCefrDraft === lvl}
                      onClick={() => setCurrentCefrDraft(lvl)}
                      className={cn(
                        "min-h-10 rounded-lg border px-2 py-1.5 text-xs font-bold transition-colors",
                        currentCefrDraft === lvl
                          ? "border-brand bg-info-bg text-info-fg"
                          : "border-line bg-muted text-ink hover:border-line-strong",
                      )}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className="text-xs font-semibold text-ink">Puntaje meta iTEP</legend>
                <div className="mt-1 grid grid-cols-4 gap-1">
                  {TARGET_SCORE_CHOICES.map((sc) => (
                    <button
                      key={sc}
                      type="button"
                      aria-pressed={targetScoreDraft === sc}
                      onClick={() => setTargetScoreDraft(sc)}
                      className={cn(
                        "min-h-10 rounded-lg border px-1.5 py-1.5 text-xs font-bold tabular-nums transition-colors",
                        targetScoreDraft === sc
                          ? "border-brand bg-info-bg text-info-fg"
                          : "border-line bg-muted text-ink hover:border-line-strong",
                      )}
                    >
                      {sc.toFixed(1)}
                    </button>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className="text-xs font-semibold text-ink">Meta diaria (min)</legend>
                <div className="mt-1 grid grid-cols-4 gap-1">
                  {DAILY_MINUTES_CHOICES.map((mins) => (
                    <button
                      key={mins}
                      type="button"
                      aria-pressed={dailyMinutesDraft === mins}
                      onClick={() => setDailyMinutesDraft(mins)}
                      className={cn(
                        "min-h-10 rounded-lg border px-1 py-1.5 text-[11px] font-bold tabular-nums transition-colors",
                        dailyMinutesDraft === mins
                          ? "border-brand bg-info-bg text-info-fg"
                          : "border-line bg-muted text-ink hover:border-line-strong",
                      )}
                    >
                      {mins}
                    </button>
                  ))}
                </div>
              </fieldset>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor={bioGoalId} className="text-xs font-semibold text-ink">
                Objetivo académico o profesional (opcional)
              </label>
              <input
                id={bioGoalId}
                name="bioGoal"
                type="text"
                maxLength={240}
                value={bioGoalDraft}
                onChange={(e) => setBioGoalDraft(e.target.value)}
                placeholder="Ej. Requisito de graduación universitaria / Beca internacional B2"
                className="min-h-11 rounded-xl border border-line-strong bg-canvas px-3 py-2 text-xs text-ink"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSavingProfile}
                className="inline-flex min-h-11 items-center justify-center rounded-xl bg-brand px-4 py-2 text-xs font-bold text-on-brand transition-colors hover:bg-brand-hover disabled:opacity-60"
              >
                {isSavingProfile ? "Guardando perfil..." : "Guardar perfil"}
              </button>
            </div>
          </form>
        </section>

        {/* 2. Selector de Tema por Cuenta */}
        <section className="mt-6 border-t border-line pt-5">
          <h3 className="text-sm font-bold">Apariencia y contraste</h3>
          <p className="mt-1 text-xs text-ink-muted">
            Tu preferencia visual se guarda en tu cuenta para aplicarse automáticamente al iniciar
            sesión.
          </p>
          <fieldset
            aria-label="Preferencia de esquema de color"
            className="mt-3 grid gap-2 sm:grid-cols-3"
          >
            {themeOptions.map(({ id, label, Icon }) => {
              const active = preference === id;
              return (
                <button
                  key={id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => handleSelectTheme(id)}
                  className={cn(
                    "flex min-h-11 items-center gap-2 rounded-xl border px-3 py-2 text-left text-xs transition-colors",
                    active
                      ? "border-brand bg-info-bg font-semibold text-info-fg"
                      : "border-line bg-muted text-ink hover:border-line-strong",
                  )}
                >
                  <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{label}</span>
                </button>
              );
            })}
          </fieldset>
        </section>

        {/* 3. Gemini API Key Cifrada E2E con AES-GCM */}
        <section className="mt-6 border-t border-line pt-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="flex items-center gap-1.5 text-sm font-bold">
              <KeyRound className="h-4 w-4 text-brand" aria-hidden="true" />
              <span>Gemini API Key (Cifrada con AES-GCM por cuenta)</span>
            </h3>
            <span
              className={cn(
                "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-bold",
                vaultStatus === "unlocked"
                  ? "border-ok-border/70 bg-ok-bg text-ok-fg"
                  : vaultStatus === "locked"
                    ? "border-warn-border/70 bg-warn-bg text-warn-fg"
                    : "border-line bg-muted text-ink-muted",
              )}
            >
              {vaultStatus === "unlocked" ? (
                <Unlock className="h-3 w-3" aria-hidden="true" />
              ) : (
                <Lock className="h-3 w-3" aria-hidden="true" />
              )}
              <span>{vaultStatusLabel}</span>
            </span>
          </div>

          {vaultStatus === "locked" ? (
            <div className="mt-3 rounded-xl border border-warn-border/70 bg-warn-bg p-3.5 text-xs text-warn-fg">
              <p className="font-semibold">
                Tienes una Gemini API Key cifrada en tu cuenta. Ingresa tu contraseña para
                descifrarla en esta sesión:
              </p>
              <div className="mt-2.5 flex flex-wrap gap-2">
                <label htmlFor={unlockPwdId} className="visually-hidden">
                  Contraseña de tu cuenta para desbloquear tu Gemini API Key
                </label>
                <input
                  id={unlockPwdId}
                  type="password"
                  autoComplete="current-password"
                  value={vaultPasswordDraft}
                  onChange={(e) => setVaultPasswordDraft(e.target.value)}
                  placeholder="Tu contraseña de cuenta..."
                  className="min-h-10 flex-1 rounded-lg border border-warn-border bg-card px-3 py-1.5 text-xs text-ink"
                />
                <button
                  type="button"
                  disabled={isSavingKey}
                  onClick={() => {
                    void handleUnlockVault();
                  }}
                  className="inline-flex min-h-10 items-center gap-1.5 rounded-lg bg-brand px-3.5 py-1.5 text-xs font-bold text-on-brand hover:bg-brand-hover disabled:opacity-60"
                >
                  <Unlock className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Desbloquear clave</span>
                </button>
              </div>
            </div>
          ) : null}

          <label htmlFor={apiKeyId} className="mt-3 block text-xs font-semibold text-ink">
            Clave personal de Google AI Studio
          </label>
          <p id={apiKeyHintId} className="mt-0.5 text-xs text-ink-muted">
            Se cifra localmente con <code>PBKDF2-SHA256 + AES-GCM-256</code> usando tu contraseña
            antes de sincronizarse en tu cuenta privada. Nunca se guarda en texto plano.
          </p>

          <div className="mt-2.5 flex flex-wrap gap-2">
            <div className="relative min-w-56 flex-1">
              <input
                id={apiKeyId}
                type={showApiKey ? "text" : "password"}
                value={apiKeyDraft}
                onChange={(e) => setApiKeyDraft(e.target.value)}
                aria-describedby={apiKeyHintId}
                autoComplete="off"
                spellCheck={false}
                placeholder="AIzaSy..."
                className="min-h-11 w-full rounded-xl border border-line-strong bg-canvas px-3 py-2 pr-11 font-mono text-xs text-ink"
              />
              <button
                type="button"
                onClick={() => setShowApiKey((prev) => !prev)}
                aria-label={showApiKey ? "Ocultar Gemini API Key" : "Mostrar Gemini API Key"}
                className="absolute inset-y-1 right-1 inline-flex w-9 items-center justify-center rounded-lg text-ink-muted hover:bg-muted hover:text-ink"
              >
                {showApiKey ? (
                  <EyeOff className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Eye className="h-4 w-4" aria-hidden="true" />
                )}
              </button>
            </div>
            <button
              type="button"
              disabled={isSavingKey}
              onClick={() => {
                void handleSaveApiKey();
              }}
              className="inline-flex min-h-11 items-center justify-center rounded-xl bg-brand px-4 py-2 text-xs font-semibold text-on-brand transition-colors hover:bg-brand-hover disabled:opacity-60"
            >
              Guardar clave
            </button>
            {summary.hasGeminiKey || vaultStatus !== "empty" ? (
              <button
                type="button"
                disabled={isSavingKey}
                onClick={() => {
                  void handleClearApiKey();
                }}
                className="inline-flex min-h-11 items-center justify-center rounded-xl border border-line bg-muted px-3 py-2 text-xs font-semibold text-ink hover:border-line-strong disabled:opacity-60"
              >
                Borrar clave
              </button>
            ) : null}
          </div>
        </section>

        {/* 4. Seguridad de Cuenta y Cambio de Contraseña */}
        <section className="mt-6 border-t border-line pt-5">
          <h3 className="flex items-center gap-1.5 text-sm font-bold">
            <ShieldCheck className="h-4 w-4 text-brand" aria-hidden="true" />
            <span>Seguridad y sesión de cuenta</span>
          </h3>
          <p className="mt-1 text-xs text-ink-muted">
            Si cambias tu contraseña, tu Gemini API Key cifrada se re-cifrará automáticamente con la
            nueva clave.
          </p>

          <form onSubmit={handlePasswordChangeSubmit} className="mt-3 grid gap-2.5 sm:grid-cols-3">
            <div className="flex flex-col gap-1">
              <label htmlFor={currentPwdId} className="text-[11px] font-semibold text-ink">
                Contraseña actual
              </label>
              <input
                id={currentPwdId}
                type="password"
                autoComplete="current-password"
                required
                value={currentPasswordDraft}
                onChange={(e) => setCurrentPasswordDraft(e.target.value)}
                className="min-h-10 rounded-xl border border-line-strong bg-canvas px-3 py-1.5 text-xs text-ink"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor={newPwdId} className="text-[11px] font-semibold text-ink">
                Nueva contraseña (mín. 8)
              </label>
              <input
                id={newPwdId}
                type="password"
                autoComplete="new-password"
                required
                minLength={8}
                maxLength={128}
                value={newPasswordDraft}
                onChange={(e) => setNewPasswordDraft(e.target.value)}
                className="min-h-10 rounded-xl border border-line-strong bg-canvas px-3 py-1.5 text-xs text-ink"
              />
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                disabled={isChangingPassword}
                className="inline-flex min-h-10 w-full items-center justify-center rounded-xl border border-line-strong bg-muted px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:bg-canvas disabled:opacity-60"
              >
                {isChangingPassword ? "Actualizando..." : "Cambiar contraseña"}
              </button>
            </div>
          </form>

          <div className="mt-3">
            <button
              type="button"
              onClick={() => {
                void handleSignOutFromDialog();
              }}
              className="inline-flex min-h-10 items-center gap-1.5 rounded-xl border border-line-strong bg-card px-3.5 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-err-border hover:bg-err-bg hover:text-err-fg"
            >
              <LogOut className="h-4 w-4" aria-hidden="true" />
              <span>Cerrar sesión de esta cuenta</span>
            </button>
          </div>
        </section>

        {/* 5. Respaldo JSON y Reinicio */}
        <section className="mt-6 border-t border-line pt-5">
          <h3 className="text-sm font-bold">Respaldo portátil (.json) y reinicio</h3>
          <p className="mt-1 text-xs text-ink-muted">
            Descarga una copia portátil del avance de esta cuenta (tu Gemini API Key se omite del
            archivo por seguridad) o restaura un respaldo validado con Zod.
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={handleExport}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-line-strong bg-muted px-3.5 py-2 text-xs font-semibold text-ink transition-colors hover:bg-canvas"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              <span>Exportar JSON</span>
            </button>

            <input
              ref={fileInputRef}
              id={importInputId}
              type="file"
              accept=".json,application/json"
              aria-label="Seleccionar archivo JSON de respaldo"
              tabIndex={-1}
              onChange={handleImportFile}
              className="visually-hidden"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-line-strong bg-muted px-3.5 py-2 text-xs font-semibold text-ink transition-colors hover:bg-canvas"
            >
              <Upload className="h-4 w-4" aria-hidden="true" />
              <span>Importar JSON</span>
            </button>

            {hasLegacyBrowserProgress ? (
              <button
                type="button"
                onClick={handleImportLegacy}
                className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-brand bg-info-bg px-3.5 py-2 text-xs font-semibold text-info-fg transition-colors hover:bg-card"
              >
                <Upload className="h-4 w-4" aria-hidden="true" />
                <span>Vincular progreso previo del navegador</span>
              </button>
            ) : null}

            <button
              type="button"
              onClick={() => setConfirmingReset(true)}
              disabled={confirmingReset}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-err-border/70 bg-err-bg px-3.5 py-2 text-xs font-semibold text-err-fg transition-colors hover:border-err-border disabled:opacity-50"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              <span>Reiniciar progreso</span>
            </button>
          </div>

          {confirmingReset ? (
            <div
              role="alert"
              className="mt-3 rounded-xl border border-err-border bg-err-bg p-3.5 text-xs text-err-fg"
            >
              <p className="font-semibold">
                ¿Confirmas que deseas reiniciar todo el progreso de tu cuenta actual (estados,
                diagnóstico, audios consumidos, borradores y simulacros)?
              </p>
              <div className="mt-2.5 flex flex-wrap justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setConfirmingReset(false)}
                  className="inline-flex min-h-10 items-center rounded-lg border border-line-strong bg-card px-3 py-1.5 text-xs font-semibold text-ink"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  onClick={handleConfirmReset}
                  className="inline-flex min-h-10 items-center rounded-lg border border-err-border bg-card px-3 py-1.5 text-xs font-bold text-err-fg hover:bg-muted"
                >
                  Confirmar reinicio total
                </button>
              </div>
            </div>
          ) : null}
        </section>

        <div className="mt-6 flex justify-end border-t border-line pt-4">
          <form method="dialog">
            <button
              type="submit"
              value="done"
              className="inline-flex min-h-11 items-center rounded-xl border border-line-strong bg-muted px-4 py-2 text-xs font-semibold text-ink hover:bg-canvas"
            >
              Cerrar ajustes
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
