import {
  AlertTriangle,
  ArrowLeft,
  BookOpenCheck,
  CheckCircle2,
  Eye,
  EyeOff,
  Lock,
  LogIn,
  ShieldCheck,
  UserPlus,
} from "lucide-react";
import { type FormEvent, useId, useRef, useState } from "react";
import { useAuth } from "@/context/auth-context.tsx";
import type { AuthScreenMode } from "@/lib/router.ts";
import { cn } from "@/lib/utils.ts";
import type { CefrLevel } from "@/schemas/curriculum.schema.ts";

export interface AuthPageProps {
  readonly mode: AuthScreenMode;
  readonly onSwitchMode: (nextMode: AuthScreenMode) => void;
  readonly onAuthenticated: () => void;
}

const STARTING_CEFR_OPTIONS: readonly {
  readonly value: CefrLevel;
  readonly label: string;
}[] = [
  { value: "A2", label: "A2 · Pre-intermedio" },
  { value: "B1", label: "B1 · Intermedio (Base)" },
  { value: "B2", label: "B2 · Consolidación" },
];

const TARGET_SCORE_OPTIONS: readonly {
  readonly value: number;
  readonly label: string;
}[] = [
  { value: 3.5, label: "3.5 · B2 Mínimo" },
  { value: 3.8, label: "3.8 · B2 Seguro" },
  { value: 4.2, label: "4.2 · B2 Competitivo" },
];

function validateEmailFormat(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed) {
    return "Ingresa tu correo electrónico.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmed)) {
    return "Ingresa un formato de correo válido (ejemplo: nombre@dominio.com).";
  }
  return null;
}

export function AuthPage({ mode, onSwitchMode, onAuthenticated }: AuthPageProps) {
  const { signIn, signUp } = useAuth();

  const headingId = useId();
  const passwordHintId = useId();
  const toggleWarningId = useId();
  const errorBannerRef = useRef<HTMLDivElement | null>(null);
  const signInEmailRef = useRef<HTMLInputElement | null>(null);
  const signInPasswordRef = useRef<HTMLInputElement | null>(null);
  const signUpNameRef = useRef<HTMLInputElement | null>(null);
  const signUpEmailRef = useRef<HTMLInputElement | null>(null);
  const signUpPasswordRef = useRef<HTMLInputElement | null>(null);

  // Sign-in state
  const [signInEmail, setSignInEmail] = useState<string>("");
  const [signInPassword, setSignInPassword] = useState<string>("");
  const [showSignInPassword, setShowSignInPassword] = useState<boolean>(false);
  const [signInFieldErrors, setSignInFieldErrors] = useState<{
    readonly email?: string;
    readonly password?: string;
  }>({});

  // Sign-up state
  const [signUpName, setSignUpName] = useState<string>("");
  const [signUpEmail, setSignUpEmail] = useState<string>("");
  const [signUpPassword, setSignUpPassword] = useState<string>("");
  const [showSignUpPassword, setShowSignUpPassword] = useState<boolean>(false);
  const [currentCefr, setCurrentCefr] = useState<CefrLevel>("B1");
  const [targetScore, setTargetScore] = useState<number>(3.8);
  const [signUpFieldErrors, setSignUpFieldErrors] = useState<{
    readonly name?: string;
    readonly email?: string;
    readonly password?: string;
  }>({});

  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const switchModeCleanly = (nextMode: AuthScreenMode) => {
    setFormError(null);
    onSwitchMode(nextMode);
  };

  const handleSignInSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) {
      return;
    }

    const emailErr = validateEmailFormat(signInEmail);
    const pwdErr = signInPassword.length === 0 ? "Ingresa tu contraseña." : undefined;

    if (emailErr || pwdErr) {
      setSignInFieldErrors({
        email: emailErr ?? undefined,
        password: pwdErr,
      });
      if (emailErr) {
        signInEmailRef.current?.focus();
      } else {
        signInPasswordRef.current?.focus();
      }
      return;
    }

    setFormError(null);
    setIsSubmitting(true);
    try {
      const result = await signIn(signInEmail, signInPassword);
      if (!result.ok) {
        setFormError(result.errorEs);
        errorBannerRef.current?.focus();
        return;
      }
      onAuthenticated();
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSignUpSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) {
      return;
    }

    const trimmedName = signUpName.trim();
    const nameErr =
      trimmedName.length === 0
        ? "Ingresa tu nombre o cómo prefieres que te llamemos."
        : trimmedName.length > 80
          ? "El nombre no debe exceder 80 caracteres."
          : undefined;
    const emailErr = validateEmailFormat(signUpEmail) ?? undefined;
    const pwdErr =
      signUpPassword.length < 8
        ? "Usa una contraseña de al menos 8 caracteres."
        : signUpPassword.length > 128
          ? "La contraseña no debe exceder 128 caracteres."
          : undefined;

    if (nameErr || emailErr || pwdErr) {
      setSignUpFieldErrors({
        name: nameErr,
        email: emailErr,
        password: pwdErr,
      });
      if (nameErr) {
        signUpNameRef.current?.focus();
      } else if (emailErr) {
        signUpEmailRef.current?.focus();
      } else {
        signUpPasswordRef.current?.focus();
      }
      return;
    }

    setFormError(null);
    setIsSubmitting(true);
    try {
      const result = await signUp({
        displayName: trimmedName,
        email: signUpEmail,
        password: signUpPassword,
        currentCefr,
        targetItepScore: targetScore,
      });

      if (!result.ok) {
        setFormError(result.errorEs);
        errorBannerRef.current?.focus();
        return;
      }
      onAuthenticated();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-dvh bg-canvas text-ink">
      <header className="border-b border-line bg-card">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a
            href="#/"
            className="inline-flex min-h-11 items-center gap-2 rounded-xl px-2 py-1 text-xs font-semibold text-ink-muted transition-colors hover:bg-muted hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Volver a la presentación</span>
          </a>

          <div className="inline-flex items-center gap-2 text-ink">
            <BookOpenCheck className="h-5 w-5 text-brand" aria-hidden="true" />
            <span className="text-sm font-bold tracking-tight">Road to B2 · iTEP</span>
          </div>
        </div>
      </header>

      <main
        id="main-content"
        tabIndex={-1}
        className="mx-auto grid max-w-5xl items-start gap-8 px-4 py-8 focus:outline-none sm:px-6 lg:grid-cols-12 lg:py-12"
      >
        {/* Primary Form Card First in DOM & Upper Viewport for Mobile Keyboard Ergonomics */}
        <section className="rounded-2xl border border-line bg-card p-6 shadow-sm sm:p-7 lg:col-span-7">
          {/* Mode Switcher */}
          <div
            role="tablist"
            aria-label="Modo de acceso a tu cuenta"
            className="grid grid-cols-2 gap-1 rounded-xl border border-line bg-muted p-1"
          >
            <button
              type="button"
              role="tab"
              aria-selected={mode === "signin"}
              onClick={() => switchModeCleanly("signin")}
              className={cn(
                "inline-flex min-h-11 items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-xs font-bold transition-colors",
                mode === "signin"
                  ? "bg-card text-brand shadow-2xs"
                  : "text-ink-muted hover:text-ink",
              )}
            >
              <LogIn className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Iniciar sesión</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={mode === "signup"}
              onClick={() => switchModeCleanly("signup")}
              className={cn(
                "inline-flex min-h-11 items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-xs font-bold transition-colors",
                mode === "signup"
                  ? "bg-card text-brand shadow-2xs"
                  : "text-ink-muted hover:text-ink",
              )}
            >
              <UserPlus className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Crear cuenta</span>
            </button>
          </div>

          <div className="mt-5">
            <h1 id={headingId} className="text-xl font-extrabold tracking-tight text-ink">
              {mode === "signin"
                ? "Inicia sesión en tu Bootcamp personal"
                : "Crea tu cuenta personal Road to B2"}
            </h1>
            <p className="mt-1 text-xs leading-relaxed text-ink-muted">
              {mode === "signin"
                ? "Recupera al instante tu progreso de los 15 días, Cimientos, Byme Lenguage y tus ajustes privados."
                : "Tu progreso, tus borradores y tu Gemini API Key cifrada quedan aislados exclusivamente para ti."}
            </p>
          </div>

          {formError ? (
            <div
              ref={errorBannerRef}
              role="alert"
              tabIndex={-1}
              className="mt-4 flex items-start gap-2.5 rounded-xl border border-err-border/70 bg-err-bg px-3.5 py-3 text-xs font-semibold text-err-fg"
            >
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{formError}</span>
            </div>
          ) : null}

          <span id={toggleWarningId} className="visually-hidden">
            Atención: mostrar la contraseña la hará visible en la pantalla.
          </span>

          {mode === "signin" ? (
            <form
              method="post"
              action="#/login"
              aria-labelledby={headingId}
              noValidate
              onSubmit={handleSignInSubmit}
              className="mt-5 space-y-4"
            >
              <div className="flex flex-col gap-1">
                <label htmlFor="signin-email" className="text-xs font-bold text-ink">
                  Correo electrónico <span aria-hidden="true">*</span>
                </label>
                <input
                  ref={signInEmailRef}
                  id="signin-email"
                  name="email"
                  type="email"
                  autoComplete="username"
                  spellCheck={false}
                  required
                  enterKeyHint="next"
                  value={signInEmail}
                  aria-invalid={signInFieldErrors.email ? "true" : undefined}
                  aria-describedby={signInFieldErrors.email ? "signin-email-error" : undefined}
                  onChange={(e) => {
                    setSignInEmail(e.target.value);
                    if (signInFieldErrors.email) {
                      setSignInFieldErrors((prev) => ({ ...prev, email: undefined }));
                    }
                  }}
                  onBlur={() => {
                    if (signInEmail.length > 0) {
                      const err = validateEmailFormat(signInEmail);
                      setSignInFieldErrors((prev) => ({ ...prev, email: err ?? undefined }));
                    }
                  }}
                  placeholder="tu.correo@ejemplo.com"
                  className="min-h-12 w-full rounded-xl border border-line-strong bg-canvas px-3.5 py-2.5 text-base text-ink"
                />
                {signInFieldErrors.email ? (
                  <p id="signin-email-error" className="text-xs font-semibold text-err-fg">
                    {signInFieldErrors.email}
                  </p>
                ) : null}
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="signin-password" className="text-xs font-bold text-ink">
                  Contraseña <span aria-hidden="true">*</span>
                </label>
                <div className="relative">
                  <input
                    ref={signInPasswordRef}
                    id="signin-password"
                    name="password"
                    type={showSignInPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    minLength={8}
                    enterKeyHint="done"
                    value={signInPassword}
                    aria-invalid={signInFieldErrors.password ? "true" : undefined}
                    aria-describedby={
                      signInFieldErrors.password ? "signin-password-error" : undefined
                    }
                    onChange={(e) => {
                      setSignInPassword(e.target.value);
                      if (signInFieldErrors.password) {
                        setSignInFieldErrors((prev) => ({ ...prev, password: undefined }));
                      }
                    }}
                    className="min-h-12 w-full rounded-xl border border-line-strong bg-canvas px-3.5 py-2.5 pr-12 text-base text-ink"
                  />
                  <button
                    type="button"
                    aria-pressed={showSignInPassword}
                    aria-label={showSignInPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                    aria-describedby={toggleWarningId}
                    onClick={() => setShowSignInPassword((prev) => !prev)}
                    className="absolute inset-y-1 right-1 inline-flex w-10 items-center justify-center rounded-lg text-ink-muted hover:bg-muted hover:text-ink"
                  >
                    {showSignInPassword ? (
                      <EyeOff className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <Eye className="h-4 w-4" aria-hidden="true" />
                    )}
                  </button>
                </div>
                {signInFieldErrors.password ? (
                  <p id="signin-password-error" className="text-xs font-semibold text-err-fg">
                    {signInFieldErrors.password}
                  </p>
                ) : null}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-bold text-on-brand transition-colors hover:bg-brand-hover disabled:opacity-60"
              >
                <LogIn className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{isSubmitting ? "Iniciando sesión..." : "Iniciar sesión"}</span>
              </button>

              <p className="text-center text-xs text-ink-muted">
                ¿Aún no tienes cuenta?{" "}
                <button
                  type="button"
                  onClick={() => switchModeCleanly("signup")}
                  className="font-bold text-brand underline underline-offset-2 hover:text-brand-hover"
                >
                  Crear una cuenta nueva
                </button>
              </p>
            </form>
          ) : (
            <form
              method="post"
              action="#/signup"
              aria-labelledby={headingId}
              noValidate
              onSubmit={handleSignUpSubmit}
              className="mt-5 space-y-4"
            >
              <div className="flex flex-col gap-1">
                <label htmlFor="signup-name" className="text-xs font-bold text-ink">
                  Tu nombre o alias <span aria-hidden="true">*</span>
                </label>
                <input
                  ref={signUpNameRef}
                  id="signup-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  maxLength={80}
                  enterKeyHint="next"
                  value={signUpName}
                  aria-invalid={signUpFieldErrors.name ? "true" : undefined}
                  aria-describedby={signUpFieldErrors.name ? "signup-name-error" : undefined}
                  onChange={(e) => {
                    setSignUpName(e.target.value);
                    if (signUpFieldErrors.name) {
                      setSignUpFieldErrors((prev) => ({ ...prev, name: undefined }));
                    }
                  }}
                  onBlur={() => {
                    if (signUpName.length > 0 && signUpName.trim().length === 0) {
                      setSignUpFieldErrors((prev) => ({
                        ...prev,
                        name: "Ingresa tu nombre visible.",
                      }));
                    }
                  }}
                  placeholder="Ej. Ana Sofía Morales"
                  className="min-h-12 w-full rounded-xl border border-line-strong bg-canvas px-3.5 py-2.5 text-base text-ink"
                />
                {signUpFieldErrors.name ? (
                  <p id="signup-name-error" className="text-xs font-semibold text-err-fg">
                    {signUpFieldErrors.name}
                  </p>
                ) : null}
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="signup-email" className="text-xs font-bold text-ink">
                  Correo electrónico <span aria-hidden="true">*</span>
                </label>
                <input
                  ref={signUpEmailRef}
                  id="signup-email"
                  name="email"
                  type="email"
                  autoComplete="username"
                  spellCheck={false}
                  required
                  enterKeyHint="next"
                  value={signUpEmail}
                  aria-invalid={signUpFieldErrors.email ? "true" : undefined}
                  aria-describedby={signUpFieldErrors.email ? "signup-email-error" : undefined}
                  onChange={(e) => {
                    setSignUpEmail(e.target.value);
                    if (signUpFieldErrors.email) {
                      setSignUpFieldErrors((prev) => ({ ...prev, email: undefined }));
                    }
                  }}
                  onBlur={() => {
                    if (signUpEmail.length > 0) {
                      const err = validateEmailFormat(signUpEmail);
                      setSignUpFieldErrors((prev) => ({ ...prev, email: err ?? undefined }));
                    }
                  }}
                  placeholder="tu.correo@ejemplo.com"
                  className="min-h-12 w-full rounded-xl border border-line-strong bg-canvas px-3.5 py-2.5 text-base text-ink"
                />
                {signUpFieldErrors.email ? (
                  <p id="signup-email-error" className="text-xs font-semibold text-err-fg">
                    {signUpFieldErrors.email}
                  </p>
                ) : null}
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="signup-password" className="text-xs font-bold text-ink">
                  Contraseña <span aria-hidden="true">*</span>
                </label>
                <div className="relative">
                  <input
                    ref={signUpPasswordRef}
                    id="signup-password"
                    name="new-password"
                    type={showSignUpPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    minLength={8}
                    maxLength={128}
                    enterKeyHint="done"
                    value={signUpPassword}
                    aria-invalid={signUpFieldErrors.password ? "true" : undefined}
                    aria-describedby={
                      signUpFieldErrors.password
                        ? `${passwordHintId} signup-password-error`
                        : passwordHintId
                    }
                    onChange={(e) => {
                      setSignUpPassword(e.target.value);
                      if (signUpFieldErrors.password) {
                        setSignUpFieldErrors((prev) => ({ ...prev, password: undefined }));
                      }
                    }}
                    onBlur={() => {
                      if (signUpPassword.length > 0 && signUpPassword.length < 8) {
                        setSignUpFieldErrors((prev) => ({
                          ...prev,
                          password: "Usa al menos 8 caracteres.",
                        }));
                      }
                    }}
                    className="min-h-12 w-full rounded-xl border border-line-strong bg-canvas px-3.5 py-2.5 pr-12 text-base text-ink"
                  />
                  <button
                    type="button"
                    aria-pressed={showSignUpPassword}
                    aria-label={showSignUpPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                    aria-describedby={toggleWarningId}
                    onClick={() => setShowSignUpPassword((prev) => !prev)}
                    className="absolute inset-y-1 right-1 inline-flex w-10 items-center justify-center rounded-lg text-ink-muted hover:bg-muted hover:text-ink"
                  >
                    {showSignUpPassword ? (
                      <EyeOff className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <Eye className="h-4 w-4" aria-hidden="true" />
                    )}
                  </button>
                </div>
                <p id={passwordHintId} className="text-[11px] text-ink-muted">
                  Mínimo 8 caracteres. También protege tu Gemini API Key mediante cifrado AES-GCM.
                </p>
                {signUpFieldErrors.password ? (
                  <p id="signup-password-error" className="text-xs font-semibold text-err-fg">
                    {signUpFieldErrors.password}
                  </p>
                ) : null}
              </div>

              <fieldset className="rounded-xl border border-line bg-muted/40 p-3">
                <legend className="px-1 text-xs font-bold text-ink">
                  Tu punto de partida actual
                </legend>
                <div className="mt-1.5 grid gap-2 sm:grid-cols-3">
                  {STARTING_CEFR_OPTIONS.map((opt) => (
                    <label
                      key={opt.value}
                      className={cn(
                        "flex min-h-11 cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-xs font-semibold transition-colors",
                        currentCefr === opt.value
                          ? "border-brand bg-info-bg text-info-fg"
                          : "border-line bg-card text-ink hover:border-line-strong",
                      )}
                    >
                      <input
                        type="radio"
                        name="currentCefr"
                        value={opt.value}
                        checked={currentCefr === opt.value}
                        onChange={() => setCurrentCefr(opt.value)}
                        className="h-4 w-4 shrink-0"
                      />
                      <span>{opt.label}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset className="rounded-xl border border-line bg-muted/40 p-3">
                <legend className="px-1 text-xs font-bold text-ink">
                  Puntaje meta en iTEP Academic-Plus
                </legend>
                <div className="mt-1.5 grid gap-2 sm:grid-cols-3">
                  {TARGET_SCORE_OPTIONS.map((opt) => (
                    <label
                      key={opt.value}
                      className={cn(
                        "flex min-h-11 cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-xs font-semibold tabular-nums transition-colors",
                        targetScore === opt.value
                          ? "border-brand bg-info-bg text-info-fg"
                          : "border-line bg-card text-ink hover:border-line-strong",
                      )}
                    >
                      <input
                        type="radio"
                        name="targetScore"
                        value={String(opt.value)}
                        checked={targetScore === opt.value}
                        onChange={() => setTargetScore(opt.value)}
                        className="h-4 w-4 shrink-0"
                      />
                      <span>{opt.label}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-bold text-on-brand transition-colors hover:bg-brand-hover disabled:opacity-60"
              >
                <UserPlus className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>
                  {isSubmitting
                    ? "Creando tu cuenta personal..."
                    : "Crear cuenta y comenzar Bootcamp"}
                </span>
              </button>

              <p className="text-center text-xs text-ink-muted">
                ¿Ya tienes una cuenta?{" "}
                <button
                  type="button"
                  onClick={() => switchModeCleanly("signin")}
                  className="font-bold text-brand underline underline-offset-2 hover:text-brand-hover"
                >
                  Inicia sesión aquí
                </button>
              </p>
            </form>
          )}
        </section>

        {/* Side Security & Isolation Summary */}
        <aside className="space-y-4 lg:col-span-5">
          <div className="rounded-2xl border border-line bg-card p-5">
            <div className="flex items-center gap-2 text-sm font-bold text-ink">
              <ShieldCheck className="h-5 w-5 text-ok-fg" aria-hidden="true" />
              <span>Todo tu estudio aislado en tu propia cuenta</span>
            </div>
            <ul className="mt-3.5 space-y-3 text-xs leading-relaxed text-ink-muted">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-ok-fg" aria-hidden="true" />
                <span>
                  <strong>Progreso individual multi-dispositivo:</strong> tus 15 días B2, tus
                  cápsulas A1–B1, borradores de Writing, autoevaluaciones de Speaking y vocabulario
                  SRS se guardan bajo políticas estrictas Row Level Security.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Lock className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span>
                  <strong>Gemini API Key cifrada (Zero-Knowledge):</strong> si configuras una clave
                  de Google AI Studio en Ajustes, se cifra localmente con{" "}
                  <code>AES-GCM-256 + PBKDF2</code> usando tu contraseña antes de sincronizarse.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-ok-fg" aria-hidden="true" />
                <span>
                  <strong>Ajustes personalizados:</strong> edita tu nombre, fecha estimada de
                  examen, puntaje objetivo y preferencia de tema claro/oscuro en cualquier momento.
                </span>
              </li>
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
}
