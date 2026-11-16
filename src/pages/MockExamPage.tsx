import {
  ArrowLeft,
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  Play,
  ShieldCheck,
  Timer,
} from "lucide-react";
import { useCallback, useId, useMemo, useRef, useState } from "react";
import { GrammarRunner } from "@/components/runners/GrammarRunner.tsx";
import { ListeningRunner } from "@/components/runners/ListeningRunner.tsx";
import { ReadingRunner } from "@/components/runners/ReadingRunner.tsx";
import { SpeakingRunner } from "@/components/runners/SpeakingRunner.tsx";
import { WritingRunner } from "@/components/runners/WritingRunner.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { ExamTimer } from "@/components/ui/exam-timer.tsx";
import { ITEP_SKILLS_META } from "@/components/ui/status-control.tsx";
import { useProgress } from "@/context/progress-context.tsx";
import { curriculumRegistry } from "@/data/curriculum-registry.ts";
import { countWords } from "@/lib/ai-evaluator.ts";
import { computeMockExamAttempt } from "@/lib/mock-scoring.ts";
import { formatSecondsMmSs } from "@/lib/text-parsers.ts";
import { cn } from "@/lib/utils.ts";
import type { ChoiceId, ItepSkill, MockExamId, RoadmapDay } from "@/schemas/curriculum.schema.ts";
import type { MockAttempt } from "@/schemas/progress.schema.ts";

export interface MockExamPageProps {
  readonly activeMockExamId?: MockExamId;
  readonly onOpenSettings: () => void;
}

const OFFICIAL_MOCK_SPECS: readonly {
  readonly id: MockExamId;
  readonly dayNumber: 8 | 14;
  readonly labelEs: string;
  readonly descriptionEs: string;
}[] = [
  {
    id: "mock-mid-day08",
    dayNumber: 8,
    labelEs: "Simulacro Oficial Intermedio #1 (Día 8)",
    descriptionEs:
      "Diagnóstico de mitad de Bootcamp bajo condiciones estrictas de 80 minutos continuos para detectar brechas sintácticas, auditivas y de ritmo antes del Sprint 3.",
  },
  {
    id: "mock-final-day14",
    dayNumber: 14,
    labelEs: "Simulacro Oficial Final #2 (Día 14)",
    descriptionEs:
      "Ensayo general definitivo previo al examen real iTEP Academic-Plus para validar un margen seguro MCER B2 (puntaje >= 3.8 / 6.0).",
  },
];

const OFFICIAL_SECTION_SECONDS: Readonly<Record<ItepSkill, number>> = {
  grammar: 600,
  listening: 1200,
  reading: 1200,
  writing: 1500,
  speaking: 300,
};

function MockExamRunnerSession({
  mockExamId,
  day,
  labelEs,
  onOpenSettings,
}: {
  readonly mockExamId: MockExamId;
  readonly day: RoadmapDay;
  readonly labelEs: string;
  readonly onOpenSettings: () => void;
}) {
  const reviewTabBaseId = useId();
  const { progress, recordMockAttempt, saveWritingDraft } = useProgress();

  const [sessionPhase, setSessionPhase] = useState<"briefing" | "in_progress" | "completed">(
    "briefing",
  );
  const [sectionIndex, setSectionIndex] = useState<number>(0);

  const [grammarAnswers, setGrammarAnswers] = useState<Record<string, ChoiceId>>({});
  const [listeningAnswers, setListeningAnswers] = useState<Record<string, ChoiceId>>({});
  const [readingAnswers, setReadingAnswers] = useState<Record<string, ChoiceId>>({});
  const [writingTexts, setWritingTexts] = useState<Record<string, string>>(() => {
    const init: Record<string, string> = {};
    for (const t of day.sections.writing.tasks) {
      init[t.id] = progress.writingDrafts[t.id]?.text ?? "";
    }
    return init;
  });
  const [recordedSpeakingIds, setRecordedSpeakingIds] = useState<Set<string>>(() => new Set());
  const [speakingCriteria, setSpeakingCriteria] = useState<Record<string, readonly number[]>>(
    () => {
      const init: Record<string, readonly number[]> = {};
      for (const t of day.sections.speaking.tasks) {
        const saved = progress.speakingSelfScores[t.id];
        if (saved) {
          init[t.id] = saved.checkedCriteriaIndexes;
        }
      }
      return init;
    },
  );

  const sectionElapsedRef = useRef<Record<ItepSkill, number>>({
    grammar: 0,
    listening: 0,
    reading: 0,
    writing: 0,
    speaking: 0,
  });

  const [completedAttempt, setCompletedAttempt] = useState<MockAttempt | null>(null);
  const [reviewSkill, setReviewSkill] = useState<ItepSkill>("grammar");

  const activeSkillMeta = ITEP_SKILLS_META[sectionIndex] ?? ITEP_SKILLS_META[0];
  const nextSkillMeta = ITEP_SKILLS_META[sectionIndex + 1];

  const finalizeMockExam = useCallback(() => {
    for (const task of day.sections.writing.tasks) {
      const txt = writingTexts[task.id] ?? "";
      const existing = progress.writingDrafts[task.id];
      saveWritingDraft({
        taskId: task.id,
        text: txt,
        wordCount: countWords(txt),
        elapsedSeconds: sectionElapsedRef.current.writing,
        updatedAtIso: new Date().toISOString(),
        ...(existing?.lastEvaluation ? { lastEvaluation: existing.lastEvaluation } : {}),
      });
    }

    const totalElapsed = Object.values(sectionElapsedRef.current).reduce(
      (sum, val) => sum + val,
      0,
    );

    const attempt = computeMockExamAttempt({
      mockExamId,
      day,
      grammarAnswers,
      listeningAnswers,
      readingAnswers,
      writingTexts,
      writingDrafts: progress.writingDrafts,
      recordedSpeakingTaskIds: recordedSpeakingIds,
      speakingCheckedCriteria: speakingCriteria,
      totalElapsedSeconds: totalElapsed,
    });

    recordMockAttempt(attempt);
    setCompletedAttempt(attempt);
    setSessionPhase("completed");
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [
    day,
    grammarAnswers,
    listeningAnswers,
    mockExamId,
    progress.writingDrafts,
    readingAnswers,
    recordMockAttempt,
    recordedSpeakingIds,
    saveWritingDraft,
    speakingCriteria,
    writingTexts,
  ]);

  const handleAdvanceSection = useCallback(() => {
    if (sectionIndex < ITEP_SKILLS_META.length - 1) {
      setSectionIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      finalizeMockExam();
    }
  }, [finalizeMockExam, sectionIndex]);

  if (!activeSkillMeta) {
    return null;
  }

  if (sessionPhase === "briefing") {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between gap-2">
          <a
            href="#/mocks"
            className="inline-flex min-h-10 items-center gap-1.5 rounded-xl border border-line bg-card px-3.5 py-1.5 text-xs font-semibold text-ink hover:border-line-strong"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Volver al Centro de Simulacros</span>
          </a>
        </div>

        <section className="rounded-2xl border border-brand/60 bg-card p-6 shadow-xs">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="default">Modo Examen Continuo Oficial</Badge>
            <Badge variant="warning" className="tabular-nums">
              80 minutos exactos · Sin explicaciones durante el examen
            </Badge>
          </div>

          <h1 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">{labelEs}</h1>
          <p lang="en" className="mt-1 text-sm font-semibold text-ink-muted">
            {day.title}
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-5">
            {ITEP_SKILLS_META.map((sk, idx) => {
              const Icon = sk.Icon;
              return (
                <div
                  key={sk.skill}
                  className="rounded-xl border border-line bg-muted/60 p-3.5 text-xs"
                >
                  <div className="flex items-center gap-1.5 font-bold text-brand">
                    <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>
                      {idx + 1}. {sk.label}
                    </span>
                  </div>
                  <p className="mt-1.5 font-mono text-sm font-bold tabular-nums text-ink">
                    {sk.officialMinutes}:00 min
                  </p>
                </div>
              );
            })}
          </div>

          <ul className="mt-5 list-disc space-y-1.5 pl-5 text-xs sm:text-sm leading-relaxed text-ink-muted">
            <li>
              El reloj oficial de cada sección corre de forma continua y avanza automáticamente al
              agotarse el tiempo.
            </li>
            <li>
              En <strong>Listening</strong> dispones estrictamente de{" "}
              <strong>1 sola reproducción</strong> por pista sin barra de adelanto.
            </li>
            <li>
              En <strong>Writing</strong> el corrector ortográfico permanece desactivado tal como en
              el navegador seguro de iTEP.
            </li>
            <li>
              Al finalizar la sección 5 (Speaking), recibirás tu{" "}
              <strong>Reporte Oficial Estimado (0.0–6.0)</strong> y se desbloqueará la auditoría
              diagnóstica completa.
            </li>
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setSessionPhase("in_progress")}
              className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-bold text-on-brand transition-colors hover:bg-brand-hover"
            >
              <Play className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Comenzar Simulacro Cronometrado (80:00)</span>
            </button>

            <a
              href={`#/day/${day.dayNumber}`}
              className="inline-flex min-h-12 items-center rounded-xl border border-line bg-muted px-4 py-3 text-xs font-semibold text-ink hover:border-line-strong"
            >
              Estudiar Día {day.dayNumber} en modo guiado
            </a>
          </div>
        </section>
      </div>
    );
  }

  if (sessionPhase === "in_progress") {
    const currentSkill = activeSkillMeta.skill;
    const currentDuration = OFFICIAL_SECTION_SECONDS[currentSkill];

    return (
      <div className="space-y-6">
        {/* Barra fija de control del examen continuo */}
        <section className="sticky top-16 z-20 rounded-2xl border border-brand/70 bg-card/95 p-4 shadow-md backdrop-blur-xs">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="default" className="tabular-nums">
                  Sección {sectionIndex + 1} de 5 · {activeSkillMeta.label}
                </Badge>
                <span className="text-xs font-semibold text-ink-muted">{labelEs}</span>
              </div>
              <div className="flex flex-wrap items-center gap-1.5">
                {ITEP_SKILLS_META.map((sk, idx) => (
                  <span
                    key={sk.skill}
                    className={cn(
                      "rounded-md px-2 py-0.5 text-[11px] font-bold",
                      idx === sectionIndex
                        ? "bg-brand text-on-brand"
                        : idx < sectionIndex
                          ? "bg-ok-bg text-ok-fg"
                          : "bg-muted text-ink-muted",
                    )}
                  >
                    {idx + 1}. {sk.shortCode}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <ExamTimer
                key={`${mockExamId}-${currentSkill}`}
                durationSeconds={currentDuration}
                label={`Sección ${activeSkillMeta.label}`}
                mode="mock"
                onElapsedChange={(elapsed) => {
                  sectionElapsedRef.current[currentSkill] = elapsed;
                }}
                onExpire={handleAdvanceSection}
              />

              <button
                type="button"
                onClick={handleAdvanceSection}
                className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-brand px-4 py-2 text-xs font-bold text-on-brand transition-colors hover:bg-brand-hover"
              >
                <span>
                  {nextSkillMeta
                    ? `Avanzar a ${nextSkillMeta.label}`
                    : "Finalizar Simulacro y Calificar"}
                </span>
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>

        {/* Sección activa sin revelar respuestas */}
        {currentSkill === "grammar" ? (
          <GrammarRunner
            section={day.sections.grammar}
            mode="mock"
            externalAnswers={grammarAnswers}
            onAnswerSelect={(qId, cId) => setGrammarAnswers((prev) => ({ ...prev, [qId]: cId }))}
          />
        ) : null}

        {currentSkill === "listening" ? (
          <ListeningRunner
            section={day.sections.listening}
            mode="mock"
            externalAnswers={listeningAnswers}
            onAnswerSelect={(qId, cId) => setListeningAnswers((prev) => ({ ...prev, [qId]: cId }))}
          />
        ) : null}

        {currentSkill === "reading" ? (
          <ReadingRunner
            section={day.sections.reading}
            mode="mock"
            externalAnswers={readingAnswers}
            onAnswerSelect={(qId, cId) => setReadingAnswers((prev) => ({ ...prev, [qId]: cId }))}
          />
        ) : null}

        {currentSkill === "writing" ? (
          <WritingRunner
            section={day.sections.writing}
            mode="mock"
            externalTexts={writingTexts}
            onExternalTextChange={(taskId, val) =>
              setWritingTexts((prev) => ({ ...prev, [taskId]: val }))
            }
          />
        ) : null}

        {currentSkill === "speaking" ? (
          <SpeakingRunner
            section={day.sections.speaking}
            mode="mock"
            onTaskRecorded={(taskId) =>
              setRecordedSpeakingIds((prev) => {
                const next = new Set(prev);
                next.add(taskId);
                return next;
              })
            }
            onCriteriaChange={(taskId, idxs) =>
              setSpeakingCriteria((prev) => ({ ...prev, [taskId]: idxs }))
            }
          />
        ) : null}
      </div>
    );
  }

  // Fase 3: Reporte Oficial 0.0–6.0 + Revisión Detallada Post-Examen
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <a
          href="#/mocks"
          className="inline-flex min-h-10 items-center gap-1.5 rounded-xl border border-line bg-card px-3.5 py-1.5 text-xs font-semibold text-ink hover:border-line-strong"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Volver al Centro de Simulacros</span>
        </a>
        <a
          href={`#/day/${day.dayNumber}`}
          className="inline-flex min-h-10 items-center gap-1.5 rounded-xl border border-line bg-card px-3.5 py-1.5 text-xs font-semibold text-ink hover:border-line-strong"
        >
          <span>Ir al Día {day.dayNumber}</span>
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>

      {completedAttempt ? (
        <section className="rounded-2xl border border-brand/70 bg-card p-6 shadow-xs">
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-line pb-5">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="default">Reporte Oficial Estimado iTEP Academic-Plus</Badge>
                <Badge variant="neutral" className="tabular-nums">
                  Tiempo empleado: {formatSecondsMmSs(completedAttempt.totalElapsedSeconds)}
                </Badge>
              </div>
              <h1 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                Resultado Global: {completedAttempt.estimatedItepScore.toFixed(1)} / 6.0
              </h1>
              <p className="mt-1 text-sm text-ink-muted">
                {completedAttempt.estimatedItepScore >= 3.5
                  ? "¡Superaste el umbral oficial MCER B2 (>= 3.5)! Revisa los reactivos debajo para consolidar el rango seguro 3.8–4.4."
                  : `Nivel actual estimado: ${completedAttempt.estimatedCefr}. Analiza tus errores en la revisión detallada debajo para alcanzar >= 3.5.`}
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-2xl border border-line bg-muted px-5 py-3">
              <Award className="h-7 w-7 text-brand" aria-hidden="true" />
              <div>
                <span className="block text-xs font-bold uppercase text-ink-muted">
                  Nivel MCER Estimado
                </span>
                <span className="text-xl font-bold text-ink">
                  {completedAttempt.estimatedCefr}{" "}
                  {completedAttempt.estimatedItepScore >= 3.5 ? "(Meta B2)" : ""}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {ITEP_SKILLS_META.map((sk) => {
              const score = completedAttempt.sectionScores[sk.skill];
              const Icon = sk.Icon;
              return (
                <div key={sk.skill} className="rounded-xl border border-line bg-muted/60 p-3.5">
                  <div className="flex items-center justify-between text-xs font-bold text-ink">
                    <span className="inline-flex items-center gap-1.5">
                      <Icon className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                      <span>{sk.label}</span>
                    </span>
                    <span className="font-mono tabular-nums">{score.toFixed(1)} / 6.0</span>
                  </div>
                  <progress
                    value={score}
                    max={6}
                    aria-label={`Puntaje en ${sk.label}`}
                    className="mt-2 h-2 w-full overflow-hidden rounded-full"
                  />
                </div>
              );
            })}
          </div>
        </section>
      ) : null}

      {/* Revisión detallada post-examen */}
      <section className="space-y-4">
        <div className="rounded-2xl border border-line bg-card p-5 shadow-xs">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-brand" aria-hidden="true" />
            <h2 className="text-lg font-bold text-ink">
              Auditoría Diagnóstica Post-Examen (Respuestas, Explicaciones y Transcripciones)
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Secciones de revisión post-examen"
            className="mt-4 flex overflow-x-auto border-b border-line"
          >
            {ITEP_SKILLS_META.map((sk) => {
              const selected = reviewSkill === sk.skill;
              const Icon = sk.Icon;
              return (
                <button
                  key={sk.skill}
                  id={`${reviewTabBaseId}-${sk.skill}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setReviewSkill(sk.skill)}
                  className="inline-flex min-h-11 shrink-0 items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-ink hover:bg-muted/60"
                >
                  <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{sk.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div role="tabpanel" aria-labelledby={`${reviewTabBaseId}-${reviewSkill}`}>
          {reviewSkill === "grammar" ? (
            <GrammarRunner
              section={day.sections.grammar}
              mode="mock_review"
              externalAnswers={grammarAnswers}
            />
          ) : null}
          {reviewSkill === "listening" ? (
            <ListeningRunner
              section={day.sections.listening}
              mode="mock_review"
              externalAnswers={listeningAnswers}
            />
          ) : null}
          {reviewSkill === "reading" ? (
            <ReadingRunner
              section={day.sections.reading}
              mode="mock_review"
              externalAnswers={readingAnswers}
            />
          ) : null}
          {reviewSkill === "writing" ? (
            <WritingRunner
              section={day.sections.writing}
              mode="mock_review"
              externalTexts={writingTexts}
              onOpenSettings={onOpenSettings}
            />
          ) : null}
          {reviewSkill === "speaking" ? (
            <SpeakingRunner section={day.sections.speaking} mode="mock_review" />
          ) : null}
        </div>
      </section>
    </div>
  );
}

const days = curriculumRegistry.roadmapDays;

export function MockExamPage({ activeMockExamId, onOpenSettings }: MockExamPageProps) {
  const { progress } = useProgress();

  const activeSpec = useMemo(
    () => OFFICIAL_MOCK_SPECS.find((item) => item.id === activeMockExamId),
    [activeMockExamId],
  );

  const activeDay = useMemo(
    () => (activeSpec ? days.find((d) => d.dayNumber === activeSpec.dayNumber) : undefined),
    [activeSpec],
  );

  if (activeSpec && activeDay) {
    return (
      <MockExamRunnerSession
        key={activeSpec.id}
        mockExamId={activeSpec.id}
        day={activeDay}
        labelEs={activeSpec.labelEs}
        onOpenSettings={onOpenSettings}
      />
    );
  }

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-line bg-card p-6 shadow-xs">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="default">Evaluación Cronometrada Realista</Badge>
          <Badge variant="success">Escala Oficial iTEP 0.0 – 6.0 (Meta B2 &gt;= 3.5)</Badge>
        </div>
        <h1 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          Centro de Simulacros Oficiales iTEP (80 Minutos)
        </h1>
        <p className="mt-2 max-w-[72ch] text-sm leading-relaxed text-ink-muted">
          Replica de principio a fin las condiciones reales del examen iTEP Academic-Plus: 5
          secciones consecutivas con reloj ininterrumpido, audio de toma única sin retroceso y
          redacción sin corrector ortográfico.
        </p>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {OFFICIAL_MOCK_SPECS.map((spec) => {
            const specDay = days.find((d) => d.dayNumber === spec.dayNumber);
            const attemptsForMock = progress.mockAttempts.filter((a) => a.mockExamId === spec.id);
            const bestScore =
              attemptsForMock.length > 0
                ? Math.max(...attemptsForMock.map((a) => a.estimatedItepScore))
                : null;

            return (
              <article
                key={spec.id}
                className="flex flex-col justify-between rounded-2xl border border-line bg-canvas p-5"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <Badge variant="default">Día {spec.dayNumber} · 80 min</Badge>
                    {bestScore !== null ? (
                      <Badge
                        variant={bestScore >= 3.5 ? "success" : "warning"}
                        className="tabular-nums"
                      >
                        Mejor puntaje: {bestScore.toFixed(1)} / 6.0
                      </Badge>
                    ) : (
                      <Badge variant="neutral">Pendiente de realizar</Badge>
                    )}
                  </div>

                  <h2 className="mt-3 text-lg font-bold text-ink">{spec.labelEs}</h2>
                  {specDay ? (
                    <p lang="en" className="mt-0.5 text-xs font-semibold text-brand">
                      {specDay.title}
                    </p>
                  ) : null}
                  <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                    {spec.descriptionEs}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5 text-[11px] font-semibold text-ink-muted tabular-nums">
                    <span className="rounded-md border border-line bg-card px-2 py-1">
                      Grammar 10m
                    </span>
                    <span className="rounded-md border border-line bg-card px-2 py-1">
                      Listening 20m (1x)
                    </span>
                    <span className="rounded-md border border-line bg-card px-2 py-1">
                      Reading 20m
                    </span>
                    <span className="rounded-md border border-line bg-card px-2 py-1">
                      Writing 25m
                    </span>
                    <span className="rounded-md border border-line bg-card px-2 py-1">
                      Speaking 5m
                    </span>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-2.5 border-t border-line pt-4">
                  <a
                    href={`#/mock/${spec.id}`}
                    className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-xs font-bold text-on-brand transition-colors hover:bg-brand-hover"
                  >
                    <Timer className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>Iniciar Simulacro (80 min)</span>
                  </a>
                  <a
                    href={`#/day/${spec.dayNumber}`}
                    className="inline-flex min-h-11 items-center justify-center rounded-xl border border-line bg-card px-3.5 py-2.5 text-xs font-semibold text-ink hover:border-line-strong"
                  >
                    Ver Día {spec.dayNumber}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Historial de simulacros guardados */}
      <section className="rounded-2xl border border-line bg-card p-6 shadow-xs">
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-brand" aria-hidden="true" />
          <h2 className="text-base font-bold text-ink">
            Historial de Simulacros Registrados ({progress.mockAttempts.length})
          </h2>
        </div>

        {progress.mockAttempts.length === 0 ? (
          <p className="mt-3 text-xs text-ink-muted">
            Aún no has finalizado ningún simulacro oficial. Tus puntajes estimados (0.0–6.0) y
            desgloses por habilidad quedarán guardados aquí automáticamente.
          </p>
        ) : (
          <div className="mt-4 space-y-3">
            {[...progress.mockAttempts].reverse().map((attempt) => {
              const spec = OFFICIAL_MOCK_SPECS.find((s) => s.id === attempt.mockExamId);
              const formattedDate = new Date(attempt.completedAtIso).toLocaleString("es-ES", {
                dateStyle: "medium",
                timeStyle: "short",
              });

              return (
                <div
                  key={`${attempt.mockExamId}-${attempt.completedAtIso}`}
                  className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-line bg-canvas p-4"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-bold text-ink">
                        {spec?.labelEs ?? attempt.mockExamId}
                      </span>
                      <Badge
                        variant={attempt.estimatedItepScore >= 3.5 ? "success" : "warning"}
                        className="tabular-nums"
                      >
                        {attempt.estimatedItepScore.toFixed(1)} / 6.0 · MCER {attempt.estimatedCefr}
                      </Badge>
                    </div>
                    <p className="mt-1 text-xs text-ink-muted tabular-nums">
                      Completado: {formattedDate} · Tiempo:{" "}
                      {formatSecondsMmSs(attempt.totalElapsedSeconds)}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono font-semibold tabular-nums">
                    <span className="rounded-lg border border-line bg-card px-2.5 py-1">
                      G: {attempt.sectionScores.grammar.toFixed(1)}
                    </span>
                    <span className="rounded-lg border border-line bg-card px-2.5 py-1">
                      L: {attempt.sectionScores.listening.toFixed(1)}
                    </span>
                    <span className="rounded-lg border border-line bg-card px-2.5 py-1">
                      R: {attempt.sectionScores.reading.toFixed(1)}
                    </span>
                    <span className="rounded-lg border border-line bg-card px-2.5 py-1">
                      W: {attempt.sectionScores.writing.toFixed(1)}
                    </span>
                    <span className="rounded-lg border border-line bg-card px-2.5 py-1">
                      S: {attempt.sectionScores.speaking.toFixed(1)}
                    </span>
                    {attempt.estimatedItepScore >= 3.5 ? (
                      <CheckCircle2 className="ml-1 h-4 w-4 text-ok-fg" aria-hidden="true" />
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
