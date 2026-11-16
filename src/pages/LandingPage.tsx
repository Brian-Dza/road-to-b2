import {
  ArrowRight,
  Award,
  BookMarked,
  BookOpenCheck,
  CheckCircle2,
  Cloud,
  Compass,
  Headphones,
  KeyRound,
  Layers,
  Lock,
  Mic,
  Monitor,
  Moon,
  PenTool,
  ShieldCheck,
  Sparkles,
  Sun,
  Timer,
  UserCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge.tsx";
import { type ThemePreference, useThemePreference } from "@/lib/theme.ts";
import { cn } from "@/lib/utils.ts";

const ITEP_SECTIONS_SHOWCASE = [
  {
    code: "G",
    titleEn: "Grammar",
    duration: "10 min · 25 reactivos",
    summaryEs:
      "Part 1 de estructura sintáctica compleja y Part 2 de detección quirúrgica del segmento subrayado erróneo [A]–[D] con retroalimentación diagnóstica.",
    Icon: Compass,
  },
  {
    code: "L",
    titleEn: "Listening",
    duration: "20 min · 1/1 reproducción",
    summaryEs:
      "Diálogos universitarios y clases magistrales con audio neuronal multi-voz real (.mp3) y bloqueo estricto de una sola escucha en modo examen.",
    Icon: Headphones,
  },
  {
    code: "R",
    titleEn: "Reading",
    duration: "20 min · 2 pasajes académicos",
    summaryEs:
      "Lecturas calibradas (~250 y ~450 palabras) con inserción coherente en marcadores [A][B][C][D], inferencia pragmática y síntesis global.",
    Icon: BookOpenCheck,
  },
  {
    code: "W",
    titleEn: "Writing",
    duration: "25 min · Sin autocorrector",
    summaryEs:
      "Nota formal (50–75 palabras) y ensayo argumentativo B2 (175–225 palabras) con contador en vivo y evaluación opcional con tu propia clave Gemini.",
    Icon: PenTool,
  },
  {
    code: "S",
    titleEn: "Speaking",
    duration: "5 min · MediaRecorder real",
    summaryEs:
      "Cronómetros encadenados oficiales (30s/45s y 45s/60s), grabación real en navegador, auto-escucha inmediata y rúbrica oficial B2.",
    Icon: Mic,
  },
] as const;

const SPRINTS_OVERVIEW = [
  {
    sprint: "Sprint 1 · Días 1–5",
    titleEs: "Arquitectura Sintáctica B2 y Cohesión",
    detailEs:
      "Subordinación avanzada, voz pasiva académica, condicionales mixtos, inversión formal y conectores contrastivos de alto puntaje.",
  },
  {
    sprint: "Sprint 2 · Días 6–10",
    titleEs: "Resistencia Auditiva/Lectora + Simulacro #1",
    detailEs:
      "Cláusulas participiales, colocaciones universitarias, inferencia rápida bajo presión y Simulacro Oficial completo de 80 min en el Día 8.",
  },
  {
    sprint: "Sprint 3 · Días 11–15",
    titleEs: "Pulido Quirúrgico + Simulacro Final #2",
    detailEs:
      "Oraciones hendidas, precisión léxica C1 puente, Simulacro Oficial #2 en el Día 14 y consolidación final para asegurar >= 3.8 / 6.0.",
  },
] as const;

export function LandingPage() {
  const { preference, setThemePreference } = useThemePreference();

  const cycleTheme = () => {
    const order: readonly ThemePreference[] = ["system", "light", "dark"];
    const idx = order.indexOf(preference);
    const next = order[(idx + 1) % order.length] ?? "system";
    setThemePreference(next);
  };

  const ThemeIcon = preference === "dark" ? Moon : preference === "light" ? Sun : Monitor;
  const themeLabel =
    preference === "dark" ? "Tema oscuro" : preference === "light" ? "Tema claro" : "Tema sistema";

  return (
    <div className="min-h-dvh bg-canvas text-ink">
      <a
        href="#main-content"
        className="visually-hidden focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-xl focus:bg-brand focus:px-4 focus:py-2.5 focus:text-sm focus:font-bold focus:text-on-brand focus:shadow-lg"
      >
        Saltar al contenido principal
      </a>

      {/* Public Header */}
      <header className="sticky top-0 z-30 border-b border-line bg-card/95 backdrop-blur-xs">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <a
            href="#/"
            className="inline-flex min-h-11 items-center gap-2.5 rounded-xl px-1.5 py-1 text-ink transition-colors hover:text-brand"
          >
            <BookOpenCheck className="h-6 w-6 shrink-0 text-brand" aria-hidden="true" />
            <div>
              <span className="block text-base font-bold tracking-tight leading-tight">
                Road to B2
              </span>
              <span className="block text-[11px] font-medium text-ink-muted">
                iTEP Academic-Plus · 15-Day Bootcamp
              </span>
            </div>
          </a>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={cycleTheme}
              aria-label={`Cambiar apariencia (${themeLabel})`}
              className="inline-flex min-h-11 items-center gap-1.5 rounded-xl border border-line bg-muted px-3 py-2 text-xs font-semibold text-ink transition-colors hover:border-line-strong"
            >
              <ThemeIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="hidden sm:inline">{themeLabel}</span>
            </button>

            <a
              href="#/login"
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-line-strong bg-card px-4 py-2 text-xs font-semibold text-ink transition-colors hover:bg-muted"
            >
              Iniciar sesión
            </a>

            <a
              href="#/signup"
              className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-xl bg-brand px-4 py-2 text-xs font-bold text-on-brand shadow-xs transition-colors hover:bg-brand-hover"
            >
              <span>Crear cuenta gratis</span>
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>

      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        {/* Hero Above-the-Fold */}
        <section className="border-b border-line bg-card/60">
          <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:py-16">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="default">Bootcamp Cerrado · 15 Días</Badge>
                <Badge variant="success">Meta Oficial MCER B2 (&gt;= 3.5 / 6.0)</Badge>
                <Badge variant="neutral">Cuentas Personales en la Nube</Badge>
              </div>

              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-[2.65rem] lg:leading-[1.13]">
                Pasa de <span className="text-brand">B1 a B2</span> en el examen{" "}
                <span lang="en">iTEP Academic-Plus</span> con un plan quirúrgico de 15 días
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
                Entrena bajo las reglas exactas del examen oficial de 80 minutos: audios neuronales
                de reproducción única, lecturas universitarias con inserción{" "}
                <span className="font-mono font-semibold text-ink">[A][B][C][D]</span>, redacción
                sin corrector y práctica oral cronometrada. Cada estudiante guarda su propio
                progreso, vocabulario SRS y claves cifradas de forma 100% independiente.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="#/signup"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-bold text-on-brand shadow-sm transition-colors hover:bg-brand-hover"
                >
                  <span>Comenzar mi Bootcamp B2</span>
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </a>

                <a
                  href="#/login"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-line-strong bg-card px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-muted"
                >
                  <UserCheck className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  <span>Ya tengo cuenta · Entrar</span>
                </a>
              </div>

              <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="rounded-xl border border-line bg-card p-3.5">
                  <dt className="text-[11px] font-semibold text-ink-muted">Horizonte</dt>
                  <dd className="mt-0.5 text-lg font-extrabold text-ink tabular-nums">15 Días</dd>
                </div>
                <div className="rounded-xl border border-line bg-card p-3.5">
                  <dt className="text-[11px] font-semibold text-ink-muted">Habilidades iTEP</dt>
                  <dd className="mt-0.5 text-lg font-extrabold text-ink tabular-nums">
                    75 Bloques
                  </dd>
                </div>
                <div className="rounded-xl border border-line bg-card p-3.5">
                  <dt className="text-[11px] font-semibold text-ink-muted">Simulacros Reales</dt>
                  <dd className="mt-0.5 text-lg font-extrabold text-ink tabular-nums">
                    2 × 80 min
                  </dd>
                </div>
                <div className="rounded-xl border border-line bg-card p-3.5">
                  <dt className="text-[11px] font-semibold text-ink-muted">Rango Seguro B2</dt>
                  <dd className="mt-0.5 text-lg font-extrabold text-ok-fg tabular-nums">
                    3.8 – 4.4
                  </dd>
                </div>
              </dl>
            </div>

            {/* Right Interactive Preview Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-line-strong/60 bg-card p-5 shadow-md sm:p-6">
                <div className="flex items-center justify-between gap-2 border-b border-line pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-info-bg text-sm font-extrabold text-info-fg">
                      BD
                    </span>
                    <div>
                      <p className="text-sm font-bold text-ink">Espacio Personal Sincronizado</p>
                      <p className="text-xs text-ink-muted">
                        Progreso independiente · Multi-dispositivo
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full border border-ok-border/70 bg-ok-bg px-2.5 py-1 text-[11px] font-bold text-ok-fg">
                    <Cloud className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>RLS Activo</span>
                  </span>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="rounded-xl border border-line bg-muted/60 p-3.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-ink" lang="en">
                        Day 4 · Unreal Conditionals & Academic Hedging
                      </span>
                      <span className="font-semibold text-ok-fg tabular-nums">145 min</span>
                    </div>
                    <div className="mt-2.5 grid grid-cols-5 gap-1.5 text-center text-[11px] font-bold">
                      {(["G", "L", "R", "W", "S"] as const).map((code, index) => (
                        <div
                          key={code}
                          className={cn(
                            "flex items-center justify-center gap-1 rounded-lg border py-1.5",
                            index < 3
                              ? "border-ok-border/70 bg-ok-bg text-ok-fg"
                              : "border-info-border/70 bg-info-bg text-info-fg",
                          )}
                        >
                          <CheckCircle2 className="h-3 w-3 shrink-0" aria-hidden="true" />
                          <span>{code}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-2.5 sm:grid-cols-2">
                    <div className="rounded-xl border border-line bg-canvas p-3">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-ink">
                        <Lock className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                        <span>Clave Gemini AES-GCM</span>
                      </div>
                      <p className="mt-1 text-[11px] leading-relaxed text-ink-muted">
                        Cifrada con tu contraseña mediante PBKDF2-SHA256. Nadie más puede leerla.
                      </p>
                    </div>

                    <div className="rounded-xl border border-line bg-canvas p-3">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-ink">
                        <BookMarked className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                        <span>Byme Lenguage SRS</span>
                      </div>
                      <p className="mt-1 text-[11px] leading-relaxed text-ink-muted">
                        60 términos académicos con audio IPA + tus propias tarjetas con algoritmo
                        SM-2.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-info-border/60 bg-info-bg px-3.5 py-2.5 text-xs text-info-fg">
                    <span className="font-semibold">
                      Diagnóstico A1–B1 + 6 cápsulas de nivelación incluidas
                    </span>
                    <Award className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Below the fold #1: 5 Official iTEP Sections */}
        <section className="landing-deferred-section mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-extrabold tracking-tight text-ink">
              Entrenamiento fiel a las 5 secciones del examen oficial (80 min)
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              Cero ejercicios infantiles o relleno genérico: cada bloque replica los formatos,
              tiempos límite y distractores reales de <span lang="en">iTEP Academic-Plus</span>.
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {ITEP_SECTIONS_SHOWCASE.map(({ code, titleEn, duration, summaryEs, Icon }) => (
              <article
                key={code}
                className="flex flex-col rounded-2xl border border-line bg-card p-5 shadow-xs"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-info-bg text-info-fg">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="rounded-lg border border-line bg-muted px-2 py-0.5 font-mono text-[11px] font-bold text-ink tabular-nums">
                    {duration}
                  </span>
                </div>
                <h3 className="mt-3.5 text-base font-bold text-ink" lang="en">
                  {titleEn}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-muted">{summaryEs}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Below the fold #2: 3 Sprints + Ecosystem + Security */}
        <section className="landing-deferred-section border-t border-line bg-card/50">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                  Arquitectura de 3 Sprints intensivos (120–160 min/día)
                </h2>
                <p className="mt-2 text-sm text-ink-muted">
                  Progresión cerrada diseñada para estudiantes que ya tienen base B1 y necesitan
                  asegurar el puntaje B2 en dos semanas.
                </p>

                <div className="mt-5 space-y-3.5">
                  {SPRINTS_OVERVIEW.map((item) => (
                    <div
                      key={item.sprint}
                      className="rounded-2xl border border-line bg-card p-4 shadow-2xs"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-extrabold uppercase tracking-wide text-brand">
                          {item.sprint}
                        </span>
                        <Timer className="h-4 w-4 text-ink-muted" aria-hidden="true" />
                      </div>
                      <h3 className="mt-1 text-base font-bold text-ink">{item.titleEs}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-ink-muted">{item.detailEs}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-between gap-4 lg:col-span-5">
                <div className="rounded-2xl border border-line bg-card p-5">
                  <div className="flex items-center gap-2 text-sm font-bold text-ink">
                    <ShieldCheck className="h-5 w-5 text-ok-fg" aria-hidden="true" />
                    <span>Privacidad e independencia total por cuenta</span>
                  </div>
                  <ul className="mt-3.5 space-y-2.5 text-xs leading-relaxed text-ink-muted">
                    <li className="flex items-start gap-2">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-ok-fg"
                        aria-hidden="true"
                      />
                      <span>
                        <strong>Perfil personalizable:</strong> configura tu nombre, nivel inicial,
                        puntaje meta iTEP, fecha de examen y apariencia preferida.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <KeyRound className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                      <span>
                        <strong>Claves cifradas extremo a extremo:</strong> tu Gemini API Key se
                        cifra en el navegador con AES-GCM-256 antes de guardarse en tu cuenta.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Layers className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                      <span>
                        <strong>Cimientos A1–B1 + Byme Lenguage:</strong> detecta lagunas con el
                        Test Diagnóstico de 30 reactivos y domina vocabulario académico con SRS.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                      <span>
                        <strong> Portabilidad garantizada:</strong> sincronización automática en
                        Supabase PostgreSQL (RLS) + exportación/importación JSON en un clic.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-brand/40 bg-info-bg p-5 text-info-fg">
                  <h3 className="text-base font-extrabold">
                    ¿Listo para iniciar el Día 1 de tu Bootcamp?
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed">
                    Crea tu cuenta gratuita en menos de 30 segundos y guarda tu progreso desde tu
                    computadora o celular.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    <a
                      href="#/signup"
                      className="inline-flex min-h-11 items-center gap-1.5 rounded-xl bg-brand px-4 py-2 text-xs font-bold text-on-brand transition-colors hover:bg-brand-hover"
                    >
                      <span>Crear mi cuenta ahora</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                    <a
                      href="#/login"
                      className="inline-flex min-h-11 items-center rounded-xl border border-info-border/60 bg-card px-4 py-2 text-xs font-semibold text-ink transition-colors hover:bg-muted"
                    >
                      Iniciar sesión
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-card py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 text-xs text-ink-muted sm:px-6 lg:px-8">
          <span>
            Road to B2 · Bootcamp Intensivo de 15 Días para iTEP Academic-Plus (Meta MCER B2 &gt;=
            3.5 / 6.0)
          </span>
          <span>Cuentas sincronizadas con RLS · Bóveda personal AES-GCM-256</span>
        </div>
      </footer>
    </div>
  );
}
