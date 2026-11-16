import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Layers,
  Lightbulb,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  XCircle,
} from "lucide-react";
import { type KeyboardEvent, useEffect, useId, useMemo, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge.tsx";
import { StatusBadge, StatusSegmentedControl } from "@/components/ui/status-control.tsx";
import { useProgress } from "@/context/progress-context.tsx";
import { curriculumRegistry } from "@/data/curriculum-registry.ts";
import { cn } from "@/lib/utils.ts";
import type {
  ChoiceId,
  FoundationModule,
  FoundationModuleId,
} from "@/schemas/curriculum.schema.ts";
import type { DiagnosticAttempt } from "@/schemas/progress.schema.ts";

export interface FoundationsPageProps {
  readonly initialModuleId?: FoundationModuleId;
}

type FoundationsTab = "diagnostic" | "capsules";
type LevelFilter = "ALL" | "A1" | "A2" | "B1";

const diagnosticTest = curriculumRegistry.diagnosticTest;
const modules = curriculumRegistry.foundationModules;

export function FoundationsPage({ initialModuleId }: FoundationsPageProps) {
  const diagTabId = useId();
  const capsulesTabId = useId();
  const tableCaptionId = useId();
  const resultsCardRef = useRef<HTMLDivElement | null>(null);

  const { progress, saveDiagnosticAttempt, getFoundationStatus, setFoundationStatus } =
    useProgress();

  const [activeTab, setActiveTab] = useState<FoundationsTab>(() =>
    initialModuleId ? "capsules" : "diagnostic",
  );
  const [selectedModuleId, setSelectedModuleId] = useState<FoundationModuleId>(
    () => initialModuleId ?? modules[0]?.id ?? "a1-core-structures",
  );

  useEffect(() => {
    if (initialModuleId) {
      setSelectedModuleId(initialModuleId);
      setActiveTab("capsules");
    }
  }, [initialModuleId]);

  // Estado del Test Diagnóstico (30 reactivos: 10 A1, 10 A2, 10 B1)
  const [diagAnswers, setDiagAnswers] = useState<Record<string, ChoiceId>>(
    () => progress.diagnosticAttempt?.answers ?? {},
  );
  const [levelFilter, setLevelFilter] = useState<LevelFilter>("ALL");

  // Estado del mini-quiz por cápsula
  const [capsuleQuizAnswers, setCapsuleQuizAnswers] = useState<
    Record<string, Record<string, ChoiceId>>
  >({});
  const [capsuleQuizChecked, setCapsuleQuizChecked] = useState<Record<string, boolean>>({});

  const moduleTitleById = useMemo(() => {
    const map = new Map<FoundationModuleId, FoundationModule>();
    for (const mod of modules) {
      map.set(mod.id, mod);
    }
    return map;
  }, []);

  const filteredDiagQuestions = useMemo(() => {
    if (!diagnosticTest) {
      return [];
    }
    if (levelFilter === "ALL") {
      return diagnosticTest.questions;
    }
    return diagnosticTest.questions.filter((q) => q.cefrLevel === levelFilter);
  }, [levelFilter]);

  const answeredDiagCount = useMemo(() => {
    if (!diagnosticTest) {
      return 0;
    }
    return diagnosticTest.questions.filter((q) => diagAnswers[q.id] !== undefined).length;
  }, [diagAnswers]);

  const handleSelectDiagAnswer = (questionId: string, choiceId: ChoiceId) => {
    setDiagAnswers((prev) => ({
      ...prev,
      [questionId]: choiceId,
    }));
  };

  const handleCalculateDiagnostic = () => {
    if (!diagnosticTest) {
      return;
    }

    const breakdown = {
      A1: { correct: 0, total: 10 },
      A2: { correct: 0, total: 10 },
      B1: { correct: 0, total: 10 },
    };

    const perModuleStats = new Map<
      FoundationModuleId,
      { answered: number; correct: number; total: number; wrongCount: number }
    >();

    for (const mod of modules) {
      perModuleStats.set(mod.id, { answered: 0, correct: 0, total: 0, wrongCount: 0 });
    }

    let totalAnswered = 0;
    let totalCorrect = 0;

    for (const q of diagnosticTest.questions) {
      const modStat = perModuleStats.get(q.remediationModuleId);
      if (modStat) {
        modStat.total += 1;
      }

      const chosen = diagAnswers[q.id];
      if (chosen !== undefined) {
        totalAnswered += 1;
        if (modStat) {
          modStat.answered += 1;
        }
        if (chosen === q.correctOptionId) {
          totalCorrect += 1;
          breakdown[q.cefrLevel].correct += 1;
          if (modStat) {
            modStat.correct += 1;
          }
        } else if (modStat) {
          modStat.wrongCount += 1;
        }
      }
    }

    const denominator =
      totalAnswered === diagnosticTest.questions.length
        ? diagnosticTest.questions.length
        : Math.max(1, totalAnswered);
    const scorePercent = Math.round((totalCorrect / denominator) * 100);

    const recommendedModuleIds: FoundationModuleId[] = [];
    for (const mod of modules) {
      const stat = perModuleStats.get(mod.id);
      if (!stat) {
        continue;
      }
      const hasExplicitError = stat.wrongCount > 0;
      const failedFullCheck =
        totalAnswered === diagnosticTest.questions.length &&
        stat.total > 0 &&
        (stat.correct / stat.total) * 100 < diagnosticTest.passingThresholdPercent;

      if (hasExplicitError || failedFullCheck) {
        recommendedModuleIds.push(mod.id);
      }
    }

    const attempt: DiagnosticAttempt = {
      completedAtIso: new Date().toISOString(),
      answers: diagAnswers,
      scorePercent,
      levelBreakdown: {
        A1: {
          correct: breakdown.A1.correct,
          total: breakdown.A1.total,
        },
        A2: {
          correct: breakdown.A2.correct,
          total: breakdown.A2.total,
        },
        B1: {
          correct: breakdown.B1.correct,
          total: breakdown.B1.total,
        },
      },
      recommendedModuleIds,
    };

    saveDiagnosticAttempt(attempt);
    window.setTimeout(() => {
      resultsCardRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 50);
  };

  const handleResetDiagnostic = () => {
    setDiagAnswers({});
  };

  const handleOpenCapsule = (modId: FoundationModuleId) => {
    setSelectedModuleId(modId);
    setActiveTab("capsules");
    window.location.hash = `#/foundations/${modId}`;
  };

  const handleTabKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      event.preventDefault();
      setActiveTab((prev) => (prev === "diagnostic" ? "capsules" : "diagnostic"));
    }
  };

  const activeModule = modules.find((m) => m.id === selectedModuleId) ?? modules[0];
  const savedAttempt = progress.diagnosticAttempt;
  const recommendedSet = useMemo(
    () => new Set(savedAttempt?.recommendedModuleIds ?? []),
    [savedAttempt?.recommendedModuleIds],
  );

  return (
    <div className="space-y-6">
      {/* Encabezado de Cimientos A1–B1 */}
      <section className="rounded-2xl border border-line bg-card p-6 shadow-xs">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-[70ch]">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="default">Módulo Secundario Independiente</Badge>
              <Badge variant="neutral">Niveles MCER A1 · A2 · B1</Badge>
            </div>
            <h1 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Cimientos Estructurales y Diagnóstico Calibrado
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              Detecta con precisión quirúrgica cualquier laguna gramatical previa al nivel B2
              mediante 30 reactivos calibrados y sella únicamente los módulos recomendados sin
              contaminar tu entrenamiento diario iTEP.
            </p>
          </div>

          <a
            href="#/dashboard"
            className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-line-strong bg-muted px-4 py-2 text-xs font-semibold text-ink hover:bg-canvas"
          >
            <span>Volver al Roadmap 15 Días B2</span>
            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </a>
        </div>

        {/* Pestañas accesibles de Cimientos */}
        <div
          role="tablist"
          aria-label="Secciones de Cimientos A1 a B1"
          onKeyDown={handleTabKeyDown}
          className="mt-6 flex overflow-x-auto border-b border-line"
        >
          <button
            id={diagTabId}
            type="button"
            role="tab"
            aria-selected={activeTab === "diagnostic"}
            tabIndex={activeTab === "diagnostic" ? 0 : -1}
            onClick={() => setActiveTab("diagnostic")}
            className="inline-flex min-h-11 shrink-0 items-center gap-2 px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-muted/60"
          >
            <ClipboardCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Test Diagnóstico (30 reactivos)</span>
          </button>

          <button
            id={capsulesTabId}
            type="button"
            role="tab"
            aria-selected={activeTab === "capsules"}
            tabIndex={activeTab === "capsules" ? 0 : -1}
            onClick={() => setActiveTab("capsules")}
            className="inline-flex min-h-11 shrink-0 items-center gap-2 px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-muted/60"
          >
            <Layers className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>6 Cápsulas de Remediación A1–B1</span>
            {recommendedSet.size > 0 ? (
              <Badge variant="warning" className="tabular-nums">
                {recommendedSet.size} sugeridas
              </Badge>
            ) : null}
          </button>
        </div>
      </section>

      {/* PANEL 1: TEST DIAGNÓSTICO CALIBRADO */}
      <div role="tabpanel" aria-labelledby={diagTabId} hidden={activeTab !== "diagnostic"}>
        {diagnosticTest ? (
          <div className="space-y-6">
            {/* Resultado Diagnóstico Persistido */}
            {savedAttempt ? (
              <div
                ref={resultsCardRef}
                className="rounded-2xl border border-info-border/60 bg-card p-5 shadow-xs"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-3">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-brand" aria-hidden="true" />
                    <h2 className="text-base font-bold text-ink">Resultado Diagnóstico Guardado</h2>
                  </div>
                  <Badge
                    variant={
                      savedAttempt.scorePercent >= diagnosticTest.passingThresholdPercent
                        ? "success"
                        : "warning"
                    }
                    className="tabular-nums"
                  >
                    Puntaje: {savedAttempt.scorePercent}% (Umbral base:{" "}
                    {diagnosticTest.passingThresholdPercent}%)
                  </Badge>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {(["A1", "A2", "B1"] as const).map((lvl) => {
                    const info = savedAttempt.levelBreakdown[lvl];
                    const pct = Math.round((info.correct / info.total) * 100);
                    return (
                      <div key={lvl} className="rounded-xl border border-line bg-muted/60 p-3.5">
                        <div className="flex items-center justify-between text-xs font-bold">
                          <span>Nivel MCER {lvl}</span>
                          <span className="tabular-nums">
                            {info.correct} / {info.total} ({pct}%)
                          </span>
                        </div>
                        <progress
                          value={info.correct}
                          max={info.total}
                          aria-label={`Precisión diagnóstica nivel ${lvl}`}
                          className="mt-2 h-2 w-full overflow-hidden rounded-full"
                        />
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4">
                  <h3 className="text-xs font-bold uppercase tracking-wide text-ink">
                    Cápsulas de remediación recomendadas según tus respuestas:
                  </h3>
                  {savedAttempt.recommendedModuleIds.length > 0 ? (
                    <div className="mt-2 grid gap-2.5 sm:grid-cols-2">
                      {savedAttempt.recommendedModuleIds.map((modId) => {
                        const mod = moduleTitleById.get(modId);
                        if (!mod) {
                          return null;
                        }
                        return (
                          <button
                            key={mod.id}
                            type="button"
                            onClick={() => handleOpenCapsule(mod.id)}
                            className="flex items-center justify-between gap-2 rounded-xl border border-warn-border/60 bg-warn-bg px-3.5 py-2.5 text-left text-xs text-warn-fg transition-colors hover:bg-card hover:text-ink"
                          >
                            <div>
                              <span className="font-bold">{mod.cefrLevel} · </span>
                              <span lang="en" className="font-semibold">
                                {mod.title}
                              </span>
                            </div>
                            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="mt-2 rounded-xl border border-ok-border/50 bg-ok-bg px-3.5 py-2.5 text-xs font-semibold text-ok-fg">
                      ¡Excelente control estructural en las preguntas evaluadas! Puedes avanzar
                      directamente al Roadmap B2 o explorar cualquier cápsula por cuenta propia.
                    </p>
                  )}
                </div>
              </div>
            ) : null}

            {/* Barra de control y filtro de nivel */}
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line bg-card p-4">
              <div className="space-y-1">
                <h2 lang="en" className="text-sm font-bold text-ink">
                  {diagnosticTest.title}
                </h2>
                <p className="text-xs text-ink-muted">{diagnosticTest.instructionsEs}</p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <fieldset
                  aria-label="Filtrar preguntas diagnósticas por nivel"
                  className="inline-flex rounded-xl border border-line bg-muted p-1"
                >
                  {(
                    [
                      { id: "ALL", label: "Todos (30)" },
                      { id: "A1", label: "A1 (10)" },
                      { id: "A2", label: "A2 (10)" },
                      { id: "B1", label: "B1 (10)" },
                    ] as const
                  ).map((f) => (
                    <button
                      key={f.id}
                      type="button"
                      aria-pressed={levelFilter === f.id}
                      onClick={() => setLevelFilter(f.id)}
                      className={cn(
                        "min-h-9 rounded-lg px-2.5 py-1 text-xs font-semibold tabular-nums transition-colors",
                        levelFilter === f.id
                          ? "bg-card text-brand shadow-2xs"
                          : "text-ink-muted hover:text-ink",
                      )}
                    >
                      {f.label}
                    </button>
                  ))}
                </fieldset>

                <button
                  type="button"
                  disabled={answeredDiagCount === 0}
                  onClick={handleCalculateDiagnostic}
                  className="inline-flex min-h-10 items-center gap-1.5 rounded-xl bg-brand px-3.5 py-2 text-xs font-semibold tabular-nums text-on-brand transition-colors hover:bg-brand-hover disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <Sparkles className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <span>Calcular y guardar diagnóstico ({answeredDiagCount}/30)</span>
                </button>
              </div>
            </div>

            {/* Listado de preguntas diagnósticas con retroalimentación inmediata */}
            <div className="space-y-4">
              {filteredDiagQuestions.map((question) => {
                const globalIndex = diagnosticTest.questions.findIndex(
                  (item) => item.id === question.id,
                );
                const selectedChoice = diagAnswers[question.id];
                const isAnswered = selectedChoice !== undefined;
                const isCorrect = selectedChoice === question.correctOptionId;
                const linkedModule = moduleTitleById.get(question.remediationModuleId);

                return (
                  <article
                    key={question.id}
                    className="rounded-2xl border border-line bg-card p-5 shadow-xs"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-lg bg-muted px-2 font-mono text-xs font-bold tabular-nums text-ink">
                          #{globalIndex + 1}
                        </span>
                        <Badge variant="default">Nivel {question.cefrLevel}</Badge>
                        {linkedModule ? (
                          <Badge variant="neutral" lang="en">
                            {linkedModule.title}
                          </Badge>
                        ) : null}
                      </div>
                    </div>

                    <p
                      lang="en"
                      className="mt-3 rounded-xl border border-line bg-canvas p-4 text-sm font-medium leading-relaxed text-ink"
                    >
                      {question.prompt}
                    </p>

                    <fieldset className="mt-3 grid gap-2 sm:grid-cols-2">
                      <legend className="visually-hidden">
                        Opciones de diagnóstico pregunta {globalIndex + 1}
                      </legend>
                      {question.options.map((opt) => {
                        const isChosen = selectedChoice === opt.id;
                        const isRight = opt.id === question.correctOptionId;

                        let optClass =
                          "border-line bg-card text-ink hover:border-line-strong hover:bg-muted/60";
                        if (isAnswered) {
                          if (isRight) {
                            optClass = "border-ok-border bg-ok-bg text-ok-fg font-semibold";
                          } else if (isChosen && !isRight) {
                            optClass = "border-err-border bg-err-bg text-err-fg";
                          }
                        }

                        return (
                          <label
                            key={opt.id}
                            className={cn(
                              "flex min-h-11 cursor-pointer items-start gap-2.5 rounded-xl border px-3.5 py-2 text-left text-sm transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brand",
                              optClass,
                            )}
                          >
                            <input
                              type="radio"
                              name={`diag-${question.id}`}
                              value={opt.id}
                              checked={isChosen}
                              onChange={() => handleSelectDiagAnswer(question.id, opt.id)}
                              className="visually-hidden"
                            />
                            <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-current/30 font-mono text-xs font-bold">
                              {opt.id}
                            </span>
                            <span lang="en">{opt.text}</span>
                          </label>
                        );
                      })}
                    </fieldset>

                    {/* Explicación diagnóstica inmediata de las 4 opciones A–D */}
                    {isAnswered ? (
                      <div className="mt-4 space-y-2.5 rounded-xl border border-line bg-muted/60 p-4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          {isCorrect ? (
                            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-ok-fg">
                              <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                              <span>Respuesta correcta ({question.correctOptionId})</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-err-fg">
                              <XCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                              <span>
                                Elegiste {selectedChoice} · Respuesta correcta:{" "}
                                {question.correctOptionId}
                              </span>
                            </span>
                          )}

                          {!isCorrect && linkedModule ? (
                            <button
                              type="button"
                              onClick={() => handleOpenCapsule(linkedModule.id)}
                              className="inline-flex items-center gap-1 rounded-lg border border-warn-border/60 bg-warn-bg px-2.5 py-1 text-xs font-semibold text-warn-fg hover:bg-card"
                            >
                              <span>Repasar cápsula {linkedModule.cefrLevel}</span>
                              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                            </button>
                          ) : null}
                        </div>

                        <div className="space-y-1.5">
                          {question.options.map((opt) => {
                            const isRight = opt.id === question.correctOptionId;
                            const isUser = opt.id === selectedChoice;
                            return (
                              <div
                                key={opt.id}
                                className={cn(
                                  "rounded-lg border px-3 py-2 text-xs leading-relaxed",
                                  isRight
                                    ? "border-ok-border/50 bg-ok-bg text-ok-fg"
                                    : isUser
                                      ? "border-err-border/50 bg-err-bg text-err-fg"
                                      : "border-line bg-card text-ink-muted",
                                )}
                              >
                                <div className="flex flex-wrap items-center gap-1.5 font-semibold text-ink">
                                  <span className="font-mono">[{opt.id}]</span>
                                  <span lang="en">{opt.text}</span>
                                  {isRight ? <Badge variant="success">Correcta</Badge> : null}
                                  {isUser && !isRight ? (
                                    <Badge variant="danger">Tu elección</Badge>
                                  ) : null}
                                </div>
                                <p className="mt-1">{opt.explanationEs}</p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ) : null}
                  </article>
                );
              })}
            </div>

            {/* Pie del Test Diagnóstico */}
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line bg-card p-4">
              <span className="text-xs text-ink-muted tabular-nums">
                Has respondido <strong>{answeredDiagCount}</strong> de <strong>30</strong> preguntas
                calibradas.
              </span>
              <div className="flex flex-wrap gap-2.5">
                <button
                  type="button"
                  onClick={handleResetDiagnostic}
                  className="inline-flex min-h-11 items-center gap-1.5 rounded-xl border border-line bg-muted px-4 py-2 text-xs font-semibold text-ink hover:border-line-strong"
                >
                  <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Limpiar respuestas</span>
                </button>
                <button
                  type="button"
                  disabled={answeredDiagCount === 0}
                  onClick={handleCalculateDiagnostic}
                  className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-brand px-5 py-2 text-xs font-semibold tabular-nums text-on-brand transition-colors hover:bg-brand-hover disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  <span>Finalizar y guardar diagnóstico ({answeredDiagCount}/30)</span>
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {/* PANEL 2: VISOR DE LAS 6 CÁPSULAS DE REMEDIACIÓN */}
      <div role="tabpanel" aria-labelledby={capsulesTabId} hidden={activeTab !== "capsules"}>
        <div className="space-y-6">
          {/* Selector de las 6 cápsulas */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((mod) => {
              const modStatus = getFoundationStatus(mod.id);
              const isSelected = activeModule?.id === mod.id;
              const isRecommended = recommendedSet.has(mod.id);

              return (
                <button
                  key={mod.id}
                  type="button"
                  onClick={() => handleOpenCapsule(mod.id)}
                  className={cn(
                    "flex flex-col justify-between rounded-2xl border p-4 text-left transition-colors",
                    isSelected
                      ? "border-brand bg-info-bg/50 ring-1 ring-brand"
                      : "border-line bg-card hover:border-line-strong",
                  )}
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-1.5">
                      <div className="flex items-center gap-1.5">
                        <Badge variant="default">{mod.cefrLevel}</Badge>
                        {isRecommended ? <Badge variant="warning">Recomendada</Badge> : null}
                      </div>
                      <StatusBadge status={modStatus} />
                    </div>
                    <h2 lang="en" className="mt-2.5 text-sm font-bold text-ink">
                      {mod.title}
                    </h2>
                    <p className="mt-1 text-xs leading-snug text-ink-muted">{mod.subtitleEs}</p>
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-brand tabular-nums">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{mod.estimatedMinutes} min de estudio focalizado</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detalle de la cápsula activa */}
          {activeModule ? (
            <article className="space-y-6 rounded-2xl border border-line bg-card p-6 shadow-xs">
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-line pb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="default">Cápsula Nivel {activeModule.cefrLevel}</Badge>
                    <Badge variant="neutral" className="tabular-nums">
                      {activeModule.estimatedMinutes} min
                    </Badge>
                    {recommendedSet.has(activeModule.id) ? (
                      <Badge variant="warning">Prioridad por Diagnóstico</Badge>
                    ) : null}
                  </div>
                  <h2 lang="en" className="mt-2 text-xl font-bold text-ink">
                    {activeModule.title}
                  </h2>
                  <p className="mt-1 text-sm text-ink-muted">{activeModule.subtitleEs}</p>
                </div>

                <div className="space-y-1">
                  <span className="block text-xs font-bold text-ink-muted">
                    Estado de esta cápsula:
                  </span>
                  <StatusSegmentedControl
                    value={getFoundationStatus(activeModule.id)}
                    onChange={(next) => setFoundationStatus(activeModule.id, next)}
                    groupLabel={`Estado de dominio para ${activeModule.title}`}
                  />
                </div>
              </div>

              {/* Regla central y puente hacia iTEP B2 */}
              <div className="grid gap-4 lg:grid-cols-2">
                <div className="rounded-xl border border-line bg-canvas p-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-brand">
                    <BookOpen className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>Síntesis estructural del módulo</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink">
                    {activeModule.coreRuleSummaryEs}
                  </p>
                </div>

                <div className="rounded-xl border border-info-border/50 bg-info-bg p-4 text-info-fg">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide">
                    <Lightbulb className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>Puente directo hacia iTEP Nivel B2</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed">{activeModule.itepBridgeTipEs}</p>
                </div>
              </div>

              {/* Tabla semántica accesible de contraste */}
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-ink">
                  Contraste de errores frecuentes frente al estándar universitario iTEP
                </h3>
                <section
                  aria-labelledby={tableCaptionId}
                  className="foundation-table-wrapper rounded-xl border border-line"
                >
                  <table className="text-left text-xs sm:text-sm">
                    <caption
                      id={tableCaptionId}
                      className="border-b border-line bg-muted px-4 py-2.5 text-left text-xs font-bold text-ink"
                    >
                      Contraste gramatical y pragmático —{" "}
                      <span lang="en">{activeModule.title}</span>
                    </caption>
                    <thead className="bg-muted text-xs uppercase tracking-wide text-ink-muted">
                      <tr>
                        <th scope="col" className="border-b border-line px-4 py-3 font-bold">
                          Concepto clave
                        </th>
                        <th scope="col" className="border-b border-line px-4 py-3 font-bold">
                          Estructura errónea (Evitar)
                        </th>
                        <th scope="col" className="border-b border-line px-4 py-3 font-bold">
                          Estructura correcta iTEP
                        </th>
                        <th scope="col" className="border-b border-line px-4 py-3 font-bold">
                          Impacto en el examen
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-line bg-card">
                      {activeModule.contrastTable.map((row) => (
                        <tr key={`${activeModule.id}-${row.conceptEs}`}>
                          <th scope="row" className="px-4 py-3 font-semibold text-ink align-top">
                            {row.conceptEs}
                          </th>
                          <td lang="en" className="px-4 py-3 font-medium text-err-fg align-top">
                            {row.incorrectExample}
                          </td>
                          <td lang="en" className="px-4 py-3 font-semibold text-ok-fg align-top">
                            {row.correctExample}
                          </td>
                          <td className="px-4 py-3 leading-relaxed text-ink-muted align-top">
                            {row.whyItMattersEs}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </section>
              </div>

              {/* Micro-verificación interactiva de 5 preguntas */}
              <div className="space-y-4 border-t border-line pt-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-base font-bold text-ink">
                      Micro-verificación práctica ({activeModule.microCheckQuestions.length}{" "}
                      reactivos)
                    </h3>
                    <p className="text-xs text-ink-muted">
                      Responde para comprobar el dominio de la cápsula y revisar la explicación de
                      cada opción.
                    </p>
                  </div>
                </div>

                {(() => {
                  const modAnswers = capsuleQuizAnswers[activeModule.id] ?? {};
                  const isModQuizChecked = Boolean(capsuleQuizChecked[activeModule.id]);
                  const modCorrectCount = activeModule.microCheckQuestions.filter(
                    (q) => modAnswers[q.id] === q.correctOptionId,
                  ).length;

                  return (
                    <>
                      <div className="space-y-4">
                        {activeModule.microCheckQuestions.map((mq, qIdx) => {
                          const selected = modAnswers[mq.id];
                          const showFeedback = isModQuizChecked || selected !== undefined;
                          const isRightChoice = selected === mq.correctOptionId;

                          return (
                            <div
                              key={mq.id}
                              className="rounded-xl border border-line bg-canvas p-4"
                            >
                              <p
                                lang="en"
                                className="text-sm font-semibold leading-relaxed text-ink"
                              >
                                <span className="mr-2 font-mono text-xs font-bold text-brand">
                                  #{qIdx + 1}
                                </span>
                                {mq.prompt}
                              </p>

                              <fieldset className="mt-3 grid gap-2 sm:grid-cols-2">
                                <legend className="visually-hidden">
                                  Micro-verificación pregunta {qIdx + 1}
                                </legend>
                                {mq.options.map((opt) => {
                                  const isChosen = selected === opt.id;
                                  const isRight = opt.id === mq.correctOptionId;

                                  let optStyle =
                                    "border-line bg-card text-ink hover:border-line-strong";
                                  if (showFeedback && selected !== undefined) {
                                    if (isRight) {
                                      optStyle =
                                        "border-ok-border bg-ok-bg text-ok-fg font-semibold";
                                    } else if (isChosen && !isRight) {
                                      optStyle = "border-err-border bg-err-bg text-err-fg";
                                    }
                                  }

                                  return (
                                    <label
                                      key={opt.id}
                                      className={cn(
                                        "flex min-h-11 cursor-pointer items-start gap-2.5 rounded-xl border px-3 py-2 text-left text-sm transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brand",
                                        optStyle,
                                      )}
                                    >
                                      <input
                                        type="radio"
                                        name={`capsule-${activeModule.id}-${mq.id}`}
                                        value={opt.id}
                                        checked={isChosen}
                                        onChange={() =>
                                          setCapsuleQuizAnswers((prev) => ({
                                            ...prev,
                                            [activeModule.id]: {
                                              ...(prev[activeModule.id] ?? {}),
                                              [mq.id]: opt.id,
                                            },
                                          }))
                                        }
                                        className="visually-hidden"
                                      />
                                      <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-current/30 font-mono text-xs font-bold">
                                        {opt.id}
                                      </span>
                                      <span lang="en">{opt.text}</span>
                                    </label>
                                  );
                                })}
                              </fieldset>

                              {showFeedback && selected !== undefined ? (
                                <div className="mt-3 space-y-1.5 rounded-lg border border-line bg-card p-3">
                                  <p
                                    className={cn(
                                      "inline-flex items-center gap-1.5 text-xs font-bold",
                                      isRightChoice ? "text-ok-fg" : "text-err-fg",
                                    )}
                                  >
                                    {isRightChoice ? (
                                      <>
                                        <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                                        <span>Correcto ({mq.correctOptionId})</span>
                                      </>
                                    ) : (
                                      <>
                                        <XCircle className="h-4 w-4" aria-hidden="true" />
                                        <span>
                                          Elegiste {selected} · Correcta: {mq.correctOptionId}
                                        </span>
                                      </>
                                    )}
                                  </p>
                                  {mq.options.map((opt) => (
                                    <div
                                      key={opt.id}
                                      className={cn(
                                        "rounded-md border px-2.5 py-1.5 text-xs leading-relaxed",
                                        opt.id === mq.correctOptionId
                                          ? "border-ok-border/50 bg-ok-bg text-ok-fg"
                                          : opt.id === selected
                                            ? "border-err-border/50 bg-err-bg text-err-fg"
                                            : "border-line bg-muted/40 text-ink-muted",
                                      )}
                                    >
                                      <strong className="font-mono">[{opt.id}] </strong>
                                      <span>{opt.explanationEs}</span>
                                    </div>
                                  ))}
                                </div>
                              ) : null}
                            </div>
                          );
                        })}
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-line bg-muted/60 p-4">
                        <div className="text-xs font-semibold tabular-nums text-ink">
                          Resultado actual: {modCorrectCount} /{" "}
                          {activeModule.microCheckQuestions.length} aciertos
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <button
                            type="button"
                            onClick={() =>
                              setCapsuleQuizChecked((prev) => ({
                                ...prev,
                                [activeModule.id]: true,
                              }))
                            }
                            className="inline-flex min-h-10 items-center gap-1.5 rounded-xl border border-line-strong bg-card px-3.5 py-2 text-xs font-semibold text-ink hover:bg-canvas"
                          >
                            <span>Comprobar micro-verificación</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setFoundationStatus(activeModule.id, "mastered")}
                            className="inline-flex min-h-10 items-center gap-1.5 rounded-xl bg-brand px-4 py-2 text-xs font-semibold text-on-brand transition-colors hover:bg-brand-hover"
                          >
                            <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                            <span>Marcar cápsula como Dominado</span>
                          </button>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </div>
            </article>
          ) : null}
        </div>
      </div>
    </div>
  );
}
