import {
  ArrowRight,
  Award,
  BookMarked,
  BookOpenCheck,
  Clock,
  Layers,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Timer,
} from "lucide-react";
import { useMemo } from "react";
import { Badge } from "@/components/ui/badge.tsx";
import {
  ITEP_SKILLS_META,
  STUDY_STATUS_META,
  StatusBadge,
  StatusSelectControl,
} from "@/components/ui/status-control.tsx";
import { useAuth } from "@/context/auth-context.tsx";
import { useProgress } from "@/context/progress-context.tsx";
import { curriculumRegistry } from "@/data/curriculum-registry.ts";
import { getVocabularyItemStatus, isVocabularyRecordDue } from "@/lib/srs.ts";
import { cn } from "@/lib/utils.ts";
import type { RoadmapDay } from "@/schemas/curriculum.schema.ts";

const SPRINT_METADATA: Readonly<
  Record<1 | 2 | 3, { readonly title: string; readonly descriptionEs: string }>
> = {
  1: {
    title: "Sprint 1 (Días 1–5) · Arquitectura Sintáctica B2 y Precisión Académica",
    descriptionEs:
      "Cláusulas complejas, voz pasiva institucional, condicionales irreales e inversión sintáctica.",
  },
  2: {
    title: "Sprint 2 (Días 6–10) · Resistencia Analítica y Simulacro Intermedio #1",
    descriptionEs:
      "Participios, colocaciones, inferencia lectora y Simulacro Oficial de 80 min en el Día 8.",
  },
  3: {
    title: "Sprint 3 (Días 11–15) · Refinamiento Quirúrgico, Simulacro Final #2 y Meta Segura",
    descriptionEs:
      "Oraciones hendidas, velocidad extrema y validación >= 3.8 en el Simulacro Oficial del Día 14.",
  },
};

const days = curriculumRegistry.roadmapDays;
const foundations = curriculumRegistry.foundationModules;
const coreVocab = curriculumRegistry.coreVocabulary;

export function DashboardPage() {
  const { profile } = useAuth();
  const {
    progress,
    getDayStatus,
    setDayStatus,
    getSectionStatus,
    getFoundationStatus,
    getVocabularySrsRecord,
  } = useProgress();

  const daysUntilExam = useMemo(() => {
    if (!profile?.examDate) {
      return null;
    }
    const targetMs = Date.parse(`${profile.examDate}T12:00:00`);
    if (!Number.isFinite(targetMs)) {
      return null;
    }
    const diffDays = Math.ceil((targetMs - Date.now()) / (1000 * 60 * 60 * 24));
    return diffDays;
  }, [profile?.examDate]);

  const metrics = useMemo(() => {
    let masteredDays = 0;
    let inReviewDays = 0;
    let masteredSections = 0;
    let completedMinutes = 0;
    let totalMinutes = 0;

    for (const day of days) {
      totalMinutes += day.estimatedMinutes;
      const dStatus = getDayStatus(day.dayNumber);
      if (dStatus === "mastered") {
        masteredDays += 1;
      } else if (dStatus === "in_review") {
        inReviewDays += 1;
      }

      let daySectionMinutes = 0;
      for (const skillMeta of ITEP_SKILLS_META) {
        const sStatus = getSectionStatus(day.dayNumber, skillMeta.skill);
        if (sStatus === "mastered") {
          masteredSections += 1;
          daySectionMinutes += day.sections[skillMeta.skill].estimatedMinutes;
        }
      }

      if (dStatus === "mastered") {
        completedMinutes += day.estimatedMinutes;
      } else {
        completedMinutes += Math.min(day.estimatedMinutes, daySectionMinutes);
      }
    }

    const masteredFoundations = foundations.filter(
      (mod) => getFoundationStatus(mod.id) === "mastered",
    ).length;

    const latestMock =
      progress.mockAttempts.length > 0
        ? progress.mockAttempts[progress.mockAttempts.length - 1]
        : undefined;

    const recommendedDay =
      days.find((day) => {
        const st = getDayStatus(day.dayNumber);
        return st === "pending" || st === "in_review";
      }) ?? days[0];

    const allVocab = [...coreVocab, ...progress.vocabulary.customItems];
    const nowMs = Date.now();
    let vocabMastered = 0;
    let vocabDue = 0;
    for (const item of allVocab) {
      const rec = getVocabularySrsRecord(item.id);
      if (getVocabularyItemStatus(rec) === "mastered") {
        vocabMastered += 1;
      }
      if (isVocabularyRecordDue(rec, nowMs)) {
        vocabDue += 1;
      }
    }

    return {
      masteredDays,
      inReviewDays,
      masteredSections,
      completedMinutes,
      totalMinutes,
      masteredFoundations,
      latestMock,
      recommendedDay,
      vocabMastered,
      vocabDue,
      vocabTotal: allVocab.length,
      customVocabCount: progress.vocabulary.customItems.length,
    };
  }, [
    getDayStatus,
    getFoundationStatus,
    getSectionStatus,
    getVocabularySrsRecord,
    progress.mockAttempts,
    progress.vocabulary.customItems,
  ]);

  const sprints: readonly (1 | 2 | 3)[] = [1, 2, 3];
  const diagnostic = progress.diagnosticAttempt;
  const heroDay = metrics.recommendedDay;
  const allDaysMastered = metrics.masteredDays === days.length;

  const renderCompactDayCard = (day: RoadmapDay) => {
    const dayStatus = getDayStatus(day.dayNumber);
    const headingId = `dashboard-day-title-${day.dayNumber}`;
    const isRecommended = !allDaysMastered && heroDay?.dayNumber === day.dayNumber;

    return (
      <article
        key={day.dayNumber}
        aria-labelledby={headingId}
        className={cn(
          "flex min-w-0 flex-col justify-between rounded-xl border bg-card p-3 shadow-xs transition-colors",
          day.isMockExamDay
            ? "border-brand/70"
            : isRecommended
              ? "border-line-strong"
              : "border-line",
        )}
      >
        <div className="min-w-0">
          <div className="flex flex-wrap items-center justify-between gap-1">
            <div className="flex items-center gap-1">
              <span className="inline-flex items-center rounded-md bg-brand px-2 py-0.5 text-[11px] font-bold tabular-nums text-on-brand">
                Día {day.dayNumber}
              </span>
              <Badge variant="default" className="px-1.5 py-0.5 text-[10px]">
                {day.cefrLevel}
              </Badge>
            </div>
            <span className="inline-flex items-center gap-0.5 text-[11px] font-medium tabular-nums text-ink-muted">
              <Clock className="h-3 w-3 shrink-0" aria-hidden="true" />
              <span>{day.estimatedMinutes} min</span>
            </span>
          </div>

          {day.isMockExamDay ? (
            <div className="mt-1.5">
              <Badge variant="warning" className="w-full justify-center px-1.5 py-0.5 text-[10px]">
                <Timer className="h-3 w-3 shrink-0" aria-hidden="true" />
                <span>Simulacro 80 min</span>
              </Badge>
            </div>
          ) : null}

          <h3
            id={headingId}
            lang="en"
            className="mt-2 line-clamp-3 text-xs font-bold leading-snug text-ink"
          >
            {day.title}
          </h3>
        </div>

        <div className="mt-2.5 space-y-2 border-t border-line pt-2.5">
          {/* 5 indicadores G / L / R / W / S accesibles (icono + código + etiqueta SR) */}
          <div className="grid grid-cols-5 gap-1">
            {ITEP_SKILLS_META.map((sk) => {
              const st = getSectionStatus(day.dayNumber, sk.skill);
              const stMeta = STUDY_STATUS_META[st];
              const StIcon = stMeta.Icon;
              return (
                <div
                  key={sk.skill}
                  className={cn(
                    "flex flex-col items-center justify-center gap-0.5 rounded-md border py-1 text-[10px] font-bold leading-none",
                    stMeta.pillClassName,
                  )}
                >
                  <StIcon className="h-2.5 w-2.5 shrink-0" aria-hidden="true" />
                  <span>{sk.shortCode}</span>
                  <span className="visually-hidden">
                    {sk.label}: {stMeta.labelEs}
                  </span>
                </div>
              );
            })}
          </div>

          <StatusSelectControl
            value={dayStatus}
            onChange={(next) => setDayStatus(day.dayNumber, next)}
            ariaLabel={`Estado de dominio del Día ${day.dayNumber}`}
            className="min-h-9 w-full justify-between rounded-lg px-2 py-0.5 text-[11px]"
          />

          <div className="flex flex-col gap-1.5">
            <a
              href={`#/day/${day.dayNumber}`}
              className="inline-flex min-h-9 w-full items-center justify-center gap-1 rounded-lg bg-brand px-2.5 py-1.5 text-[11px] font-semibold text-on-brand transition-colors hover:bg-brand-hover"
            >
              <span>Estudiar Día {day.dayNumber}</span>
              <ArrowRight className="h-3 w-3 shrink-0" aria-hidden="true" />
            </a>

            {day.isMockExamDay && day.mockExamId ? (
              <a
                href={`#/mock/${day.mockExamId}`}
                className="inline-flex min-h-8 w-full items-center justify-center gap-1 rounded-lg border border-brand bg-info-bg px-2 py-1 text-[11px] font-semibold text-info-fg transition-colors hover:bg-card"
              >
                <Timer className="h-3 w-3 shrink-0" aria-hidden="true" />
                <span>Abrir Simulacro</span>
              </a>
            ) : null}
          </div>
        </div>
      </article>
    );
  };

  return (
    <div className="space-y-5">
      {/* Encabezado Compacto de Página */}
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="default">Bootcamp Intensivo 15 Días</Badge>
            <Badge variant="success">
              Meta Personal B2 &gt;= {(profile?.targetItepScore ?? 3.8).toFixed(1)} / 6.0
            </Badge>
            {profile ? (
              <Badge variant="neutral">
                Base {profile.currentCefr} · {profile.dailyGoalMinutes} min/día
              </Badge>
            ) : null}
            {daysUntilExam !== null ? (
              <Badge variant={daysUntilExam <= 5 ? "warning" : "default"} className="tabular-nums">
                {daysUntilExam > 0
                  ? `Examen en ${daysUntilExam} días (${profile?.examDate})`
                  : daysUntilExam === 0
                    ? "Examen hoy"
                    : `Fecha objetivo: ${profile?.examDate}`}
              </Badge>
            ) : null}
          </div>
          <h1 className="mt-2 text-xl font-bold tracking-tight text-ink sm:text-2xl">
            Panel Estratégico Road to B2
          </h1>
          {profile ? (
            <p className="mt-1 text-xs font-medium text-ink-muted">
              Hola, <strong className="text-ink">{profile.displayName}</strong>
              {profile.bioGoal.trim().length > 0 ? ` · Objetivo: ${profile.bioGoal}` : ""}
            </p>
          ) : null}
        </div>
        <p className="max-w-[52ch] text-xs leading-relaxed text-ink-muted">
          Entrenamiento diario de 120 a 160 min en las 5 secciones oficiales: Grammar (10m),
          Listening toma única (20m), Reading (20m), Writing sin corrector (25m) y Speaking (5m).
        </p>
      </header>

      {/* Arquitectura Bento Grid Asimétrica: Columna Principal (8) + Rail Derecho (4) */}
      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
        {/* ================================================================= */}
        {/* COLUMNA PRINCIPAL IZQUIERDA (lg:col-span-8)                       */}
        {/* ================================================================= */}
        <div className="min-w-0 space-y-6 lg:col-span-8">
          {/* Tarjeta Hero Superior: Siguiente Sesión Recomendada */}
          {heroDay ? (
            <article
              aria-labelledby="hero-next-session-heading"
              className="rounded-2xl border border-brand/50 bg-card p-5 shadow-xs sm:p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="default">
                    <Sparkles className="h-3 w-3 shrink-0" aria-hidden="true" />
                    <span>
                      {allDaysMastered
                        ? "Bootcamp Completado · Repaso"
                        : "Siguiente Sesión Recomendada"}
                    </span>
                  </Badge>
                  <span className="inline-flex items-center rounded-lg bg-brand px-2.5 py-1 text-xs font-bold tabular-nums text-on-brand">
                    Día {heroDay.dayNumber}
                  </span>
                  <Badge variant="default">{heroDay.cefrLevel}</Badge>
                  <Badge variant="neutral" className="tabular-nums">
                    <Clock className="h-3 w-3 shrink-0" aria-hidden="true" />
                    <span>{heroDay.estimatedMinutes} min</span>
                  </Badge>
                  {heroDay.isMockExamDay ? <Badge variant="warning">Simulacro 80 min</Badge> : null}
                </div>

                <StatusBadge status={getDayStatus(heroDay.dayNumber)} />
              </div>

              <div className="mt-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div className="min-w-0 max-w-[60ch]">
                  <h2
                    id="hero-next-session-heading"
                    lang="en"
                    className="text-lg font-bold leading-snug text-ink sm:text-xl"
                  >
                    {heroDay.title}
                  </h2>
                  <p className="mt-1.5 text-xs leading-relaxed text-ink-muted sm:text-sm">
                    {heroDay.subtitleEs}
                  </p>
                </div>

                <div className="flex shrink-0 flex-wrap items-center gap-2">
                  <a
                    href={`#/day/${heroDay.dayNumber}`}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-on-brand shadow-xs transition-colors hover:bg-brand-hover"
                  >
                    <span>Continuar Día {heroDay.dayNumber}</span>
                    <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </a>

                  {heroDay.isMockExamDay && heroDay.mockExamId ? (
                    <a
                      href={`#/mock/${heroDay.mockExamId}`}
                      className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-xl border border-brand bg-info-bg px-4 py-2.5 text-xs font-semibold text-info-fg transition-colors hover:bg-card"
                    >
                      <Timer className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>Iniciar Simulacro 80m</span>
                    </a>
                  ) : null}
                </div>
              </div>

              {/* Estado detallado de las 5 secciones del día recomendado */}
              <div className="mt-5 border-t border-line pt-4">
                <span className="text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
                  Estado de las 5 secciones oficiales (Día {heroDay.dayNumber}):
                </span>
                <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-5">
                  {ITEP_SKILLS_META.map((sk) => {
                    const st = getSectionStatus(heroDay.dayNumber, sk.skill);
                    const stMeta = STUDY_STATUS_META[st];
                    const StIcon = stMeta.Icon;
                    return (
                      <div
                        key={sk.skill}
                        className={cn(
                          "flex items-center justify-between gap-1.5 rounded-xl border px-2.5 py-1.5 text-xs font-semibold",
                          stMeta.pillClassName,
                        )}
                      >
                        <span className="inline-flex items-center gap-1.5">
                          <StIcon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span lang="en">{sk.shortCode}</span>
                        </span>
                        <span className="truncate text-[11px]">{stMeta.labelEs}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </article>
          ) : null}

          {/* Mapa Completo de 15 Días (3 filas horizontales de 5 tarjetas por Sprint) */}
          <div className="space-y-5">
            {sprints.map((sprintNum) => {
              const sprintInfo = SPRINT_METADATA[sprintNum];
              const sprintDays = days.filter((d) => d.sprintNumber === sprintNum);
              const sprintMastered = sprintDays.filter(
                (d) => getDayStatus(d.dayNumber) === "mastered",
              ).length;

              return (
                <section key={sprintNum} className="space-y-3">
                  <div className="flex flex-wrap items-end justify-between gap-2 border-b border-line pb-2">
                    <div className="min-w-0">
                      <h2 className="text-sm font-bold tracking-tight text-ink sm:text-base">
                        {sprintInfo.title}
                      </h2>
                      <p className="mt-0.5 text-xs text-ink-muted">{sprintInfo.descriptionEs}</p>
                    </div>
                    <Badge
                      variant={sprintMastered === sprintDays.length ? "success" : "neutral"}
                      className="tabular-nums"
                    >
                      {sprintMastered} / {sprintDays.length} días dominados
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    {sprintDays.map((day) => renderCompactDayCard(day))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>

        {/* ================================================================= */}
        {/* RAIL DERECHO (lg:col-span-4, sticky en escritorio)                */}
        {/* ================================================================= */}
        <aside
          aria-label="Progreso global y módulos complementarios"
          className="min-w-0 space-y-4 lg:col-span-4 lg:sticky lg:top-24"
        >
          {/* Card 1 — Progreso Global B2 (Cuadrícula compacta 2x2) */}
          <article className="rounded-2xl border border-line bg-card p-4 shadow-xs">
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-sm font-bold text-ink">Progreso Global B2</h2>
              <Badge variant="success" className="tabular-nums">
                Meta &gt;= 3.5
              </Badge>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2.5">
              <div className="min-w-0 rounded-xl border border-line bg-muted/60 p-3">
                <div className="flex items-start gap-1.5 text-[10px] font-bold uppercase leading-tight tracking-wide text-ink-muted">
                  <BookOpenCheck
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand"
                    aria-hidden="true"
                  />
                  <span>Días B2 Dominados</span>
                </div>
                <p className="mt-1.5 text-xl font-bold tabular-nums text-ink">
                  {metrics.masteredDays} / 15
                </p>
                <progress
                  value={metrics.masteredDays}
                  max={15}
                  aria-label="Progreso de días dominados"
                  className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full"
                />
                <p className="mt-1 text-[11px] leading-snug tabular-nums text-ink-muted">
                  {metrics.inReviewDays} en repaso ·{" "}
                  {15 - metrics.masteredDays - metrics.inReviewDays} pendientes
                </p>
              </div>

              <div className="min-w-0 rounded-xl border border-line bg-muted/60 p-3">
                <div className="flex items-start gap-1.5 text-[10px] font-bold uppercase leading-tight tracking-wide text-ink-muted">
                  <Layers className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
                  <span>Habilidades Dominadas</span>
                </div>
                <p className="mt-1.5 text-xl font-bold tabular-nums text-ink">
                  {metrics.masteredSections} / 75
                </p>
                <progress
                  value={metrics.masteredSections}
                  max={75}
                  aria-label="Progreso de bloques de habilidad dominados"
                  className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full"
                />
                <p className="mt-1 text-[11px] leading-snug tabular-nums text-ink-muted">
                  5 secciones oficiales × 15 días
                </p>
              </div>

              <div className="min-w-0 rounded-xl border border-line bg-muted/60 p-3">
                <div className="flex items-start gap-1.5 text-[10px] font-bold uppercase leading-tight tracking-wide text-ink-muted">
                  <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
                  <span>Tiempo de Estudio B2</span>
                </div>
                <p className="mt-1.5 text-xl font-bold tabular-nums text-ink">
                  {(metrics.completedMinutes / 60).toFixed(1)} h
                </p>
                <progress
                  value={metrics.completedMinutes}
                  max={metrics.totalMinutes}
                  aria-label="Minutos de estudio completados"
                  className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full"
                />
                <p className="mt-1 text-[11px] leading-snug tabular-nums text-ink-muted">
                  {metrics.completedMinutes} / {metrics.totalMinutes} min acumulados
                </p>
              </div>

              <div className="min-w-0 rounded-xl border border-line bg-muted/60 p-3">
                <div className="flex items-start gap-1.5 text-[10px] font-bold uppercase leading-tight tracking-wide text-ink-muted">
                  <Award className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
                  <span>Último Simulacro Oficial</span>
                </div>
                {metrics.latestMock ? (
                  <>
                    <div className="mt-1.5 flex flex-wrap items-baseline gap-1.5">
                      <span className="text-xl font-bold tabular-nums text-ink">
                        {metrics.latestMock.estimatedItepScore.toFixed(1)} / 6.0
                      </span>
                      <Badge
                        variant={
                          metrics.latestMock.estimatedItepScore >= 3.5 ? "success" : "warning"
                        }
                        className="px-1.5 py-0.5 text-[10px]"
                      >
                        MCER {metrics.latestMock.estimatedCefr}
                      </Badge>
                    </div>
                    <p className="mt-1 text-[11px] leading-snug tabular-nums text-ink-muted">
                      {progress.mockAttempts.length}{" "}
                      {progress.mockAttempts.length === 1
                        ? "simulacro completado"
                        : "simulacros completados"}
                    </p>
                  </>
                ) : (
                  <>
                    <p className="mt-1.5 text-base font-bold text-ink">Pendiente</p>
                    <p className="mt-1 text-[11px] leading-snug text-ink-muted">
                      Día 8 (Intermedio) y Día 14 (Final).
                    </p>
                  </>
                )}
              </div>
            </div>
          </article>

          {/* Card 2 — Módulo Secundario: Cimientos Estructurales (A1 a B1) */}
          <article className="rounded-2xl border border-info-border/50 bg-info-bg p-4 text-info-fg shadow-xs">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                {diagnostic ? (
                  <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
                ) : (
                  <ShieldAlert className="h-4 w-4 shrink-0" aria-hidden="true" />
                )}
                <h2 className="text-sm font-bold leading-snug">
                  Cimientos Estructurales (A1 a B1)
                </h2>
              </div>
              <Badge variant="neutral" className="shrink-0 tabular-nums">
                {metrics.masteredFoundations} / 6 cápsulas dominadas
              </Badge>
            </div>

            {diagnostic ? (
              <div className="mt-2.5 space-y-2 text-xs leading-relaxed">
                <p className="tabular-nums">
                  Último Test Diagnóstico: <strong>{diagnostic.scorePercent}%</strong> global (A1:{" "}
                  {diagnostic.levelBreakdown.A1.correct}/{diagnostic.levelBreakdown.A1.total} · A2:{" "}
                  {diagnostic.levelBreakdown.A2.correct}/{diagnostic.levelBreakdown.A2.total} · B1:{" "}
                  {diagnostic.levelBreakdown.B1.correct}/{diagnostic.levelBreakdown.B1.total}).
                </p>
                {diagnostic.recommendedModuleIds.length > 0 ? (
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="font-bold">Cápsulas prioritarias:</span>
                    {diagnostic.recommendedModuleIds.map((modId) => {
                      const modObj = foundations.find((m) => m.id === modId);
                      return (
                        <a
                          key={modId}
                          href={`#/foundations/${modId}`}
                          className="rounded-lg border border-info-border/50 bg-card px-2 py-0.5 text-[11px] font-semibold text-ink underline-offset-2 hover:underline"
                        >
                          {modObj ? `${modObj.cefrLevel}: ${modObj.title}` : modId}
                        </a>
                      );
                    })}
                  </div>
                ) : (
                  <p className="font-semibold">
                    ¡Base A1–B1 sólida! Sin lagunas estructurales críticas detectadas.
                  </p>
                )}
              </div>
            ) : (
              <p className="mt-2 text-xs leading-relaxed">
                Verifica con el Test Diagnóstico calibrado de 30 preguntas si tienes lagunas en
                artículos, tiempos base, modales o condicionales B1 sin desviar tu ritmo B2.
              </p>
            )}

            <a
              href="#/foundations"
              className="mt-3 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl bg-card px-3.5 py-2 text-xs font-bold text-ink shadow-xs transition-colors hover:bg-muted"
            >
              <span>
                {diagnostic
                  ? "Revisar Diagnóstico y Cápsulas A1–B1"
                  : "Iniciar Test Diagnóstico A1–B1"}
              </span>
              <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            </a>
          </article>

          {/* Card 3 — Centro de Simulacros (80 min) */}
          <article className="rounded-2xl border border-line bg-card p-4 shadow-xs">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Timer className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <h2 className="text-sm font-bold text-ink">Centro de Simulacros (80 min)</h2>
              </div>
              <Badge variant="neutral" className="tabular-nums">
                2 oficiales
              </Badge>
            </div>

            <p className="mt-2 text-xs leading-relaxed text-ink-muted">
              Réplica continua de las 5 secciones cronometradas sin pistas durante el examen y
              reporte estimado en escala oficial 0.0–6.0.
            </p>

            <div className="mt-3 space-y-1.5 text-xs">
              <div className="flex items-center justify-between rounded-lg border border-line bg-muted/50 px-2.5 py-1.5">
                <span className="font-semibold text-ink">Día 8 · Simulacro Intermedio #1</span>
                <span className="tabular-nums text-[11px] text-ink-muted">80 min</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-line bg-muted/50 px-2.5 py-1.5">
                <span className="font-semibold text-ink">Día 14 · Simulacro Final #2</span>
                <span className="tabular-nums text-[11px] text-ink-muted">80 min</span>
              </div>
            </div>

            <a
              href="#/mocks"
              className="mt-3 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl border border-line-strong bg-muted px-3.5 py-2 text-xs font-semibold text-ink transition-colors hover:bg-canvas"
            >
              <span>Ir al Centro de Simulacros</span>
              <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            </a>
          </article>

          {/* Card 4 — Módulo Complementario: Vocabulario Inteligente · Byme Lenguage */}
          <article className="rounded-2xl border border-line bg-card p-4 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <BookMarked className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <h2 className="text-sm font-bold text-ink">
                  Vocabulario Inteligente · Byme Lenguage
                </h2>
              </div>
              <Badge variant="default">MCER A1–C2 · SRS</Badge>
            </div>

            <p className="mt-2 text-xs leading-relaxed text-ink-muted">
              Banco híbrido con audio neural repetible, IPA, oraciones académicas en contexto y
              tarjetas propias con Repetición Espaciada (SM-2).
            </p>

            <div className="mt-3 grid grid-cols-2 gap-2 rounded-xl border border-line bg-canvas p-2.5 text-xs">
              <div>
                <p className="font-semibold text-ink-muted">Dominadas SRS</p>
                <p className="mt-0.5 font-bold tabular-nums text-ink">
                  {metrics.vocabMastered} / {metrics.vocabTotal} tarjetas
                </p>
              </div>
              <div>
                <p className="font-semibold text-ink-muted">Cola activa hoy</p>
                <p className="mt-0.5 font-bold tabular-nums text-brand">
                  {metrics.vocabDue} por repasar
                </p>
              </div>
            </div>

            <p className="mt-2 text-[11px] font-medium tabular-nums text-ink-muted">
              {coreVocab.length} base académica iTEP · {metrics.customVocabCount} palabras propias
            </p>

            <a
              href="#/vocabulary"
              className="mt-3 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl border border-line-strong bg-muted px-3.5 py-2 text-xs font-semibold text-ink transition-colors hover:bg-canvas"
            >
              <span>Abrir Byme Lenguage</span>
              <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            </a>
          </article>
        </aside>
      </div>
    </div>
  );
}
