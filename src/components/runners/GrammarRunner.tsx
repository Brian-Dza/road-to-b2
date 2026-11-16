import { CheckCircle2, HelpCircle, Lightbulb, Sparkles, XCircle } from "lucide-react";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge.tsx";
import { ExamTimer } from "@/components/ui/exam-timer.tsx";
import { parseGrammarMarkedSegments } from "@/lib/text-parsers.ts";
import { cn } from "@/lib/utils.ts";
import type { ChoiceId, GrammarQuestion, GrammarSection } from "@/schemas/curriculum.schema.ts";

export interface GrammarRunnerProps {
  readonly section: GrammarSection;
  readonly mode?: "study" | "mock" | "mock_review";
  readonly externalAnswers?: Readonly<Record<string, ChoiceId>>;
  readonly onAnswerSelect?: (questionId: string, choiceId: ChoiceId) => void;
}

export function GrammarRunner({
  section,
  mode = "study",
  externalAnswers,
  onAnswerSelect,
}: GrammarRunnerProps) {
  const [localAnswers, setLocalAnswers] = useState<Record<string, ChoiceId>>({});
  const [checkedQuestionIds, setCheckedQuestionIds] = useState<Record<string, boolean>>({});
  const [allChecked, setAllChecked] = useState<boolean>(false);

  const answers = externalAnswers ?? localAnswers;

  const handleSelect = (questionId: string, choiceId: ChoiceId) => {
    if (mode === "mock_review") {
      return;
    }
    if (onAnswerSelect) {
      onAnswerSelect(questionId, choiceId);
    } else {
      setLocalAnswers((prev) => ({ ...prev, [questionId]: choiceId }));
    }
  };

  const handleCheckSingle = (questionId: string) => {
    setCheckedQuestionIds((prev) => ({ ...prev, [questionId]: true }));
  };

  const handleCheckAll = () => {
    setAllChecked(true);
  };

  const handleResetStudy = () => {
    setLocalAnswers({});
    setCheckedQuestionIds({});
    setAllChecked(false);
  };

  const answeredCount = useMemo(
    () => section.questions.filter((q) => answers[q.id] !== undefined).length,
    [answers, section.questions],
  );

  const correctCount = useMemo(
    () => section.questions.filter((q) => answers[q.id] === q.correctOptionId).length,
    [answers, section.questions],
  );

  const part1Questions = useMemo(
    () => section.questions.filter((q) => q.part === "part1_fill_blank"),
    [section.questions],
  );
  const part2Questions = useMemo(
    () => section.questions.filter((q) => q.part === "part2_error_identification"),
    [section.questions],
  );

  const renderQuestionCard = (question: GrammarQuestion, globalIndex: number) => {
    const selectedChoice = answers[question.id];
    const isRevealed =
      mode === "mock_review" ||
      (mode === "study" && (allChecked || Boolean(checkedQuestionIds[question.id])));
    const isCorrect = selectedChoice === question.correctOptionId;

    return (
      <article key={question.id} className="rounded-2xl border border-line bg-card p-5 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-lg bg-muted px-2 text-xs font-bold tabular-nums text-ink">
              #{globalIndex + 1}
            </span>
            <Badge variant="default">{question.cefrLevel}</Badge>
            <Badge variant="neutral">
              {question.part === "part1_fill_blank"
                ? "Part 1 · Completar estructura"
                : "Part 2 · Identificar segmento erróneo"}
            </Badge>
          </div>
          <span lang="en" className="text-xs font-medium text-ink-muted">
            {question.grammarTopic}
          </span>
        </div>

        {/* Enunciado en inglés */}
        <div
          lang="en"
          className="mt-4 rounded-xl border border-line bg-canvas p-4 text-base leading-relaxed text-ink"
        >
          {question.part === "part1_fill_blank" ? (
            (() => {
              const parts = question.sentenceWithBlank.split("_____");
              const chosenText = question.options.find((o) => o.id === selectedChoice)?.text;
              return (
                <p>
                  {parts[0]}
                  <span
                    className={cn(
                      "mx-1 inline-block min-w-20 rounded-md border-b-2 px-2 py-0.5 text-center font-semibold",
                      chosenText
                        ? "border-brand bg-info-bg text-info-fg"
                        : "border-line-strong bg-muted text-ink-muted",
                    )}
                  >
                    {chosenText ?? "_____"}
                  </span>
                  {parts.slice(1).join("_____")}
                </p>
              );
            })()
          ) : (
            <p>
              {parseGrammarMarkedSegments(question.sentenceWithMarkedSegments).map((token) => {
                if (token.type === "text") {
                  return <span key={`${question.id}-t-${token.startOffset}`}>{token.value}</span>;
                }
                const isSelectedSeg = selectedChoice === token.choiceId;
                return (
                  <button
                    key={`${question.id}-seg-${token.choiceId}`}
                    type="button"
                    disabled={mode === "mock_review"}
                    onClick={() => handleSelect(question.id, token.choiceId)}
                    className={cn(
                      "mx-0.5 inline items-baseline rounded-md px-1.5 py-0.5 text-left transition-colors",
                      isSelectedSeg
                        ? "bg-info-bg font-semibold text-info-fg ring-1 ring-brand"
                        : "hover:bg-muted",
                    )}
                  >
                    <span className="mr-1 rounded bg-muted px-1 py-0.5 font-mono text-xs font-bold text-ink">
                      [{token.choiceId}]
                    </span>
                    <span className="underline decoration-2 underline-offset-4">{token.value}</span>
                  </button>
                );
              })}
            </p>
          )}
        </div>

        {/* Opciones A-D */}
        <fieldset className="mt-4 grid gap-2.5 sm:grid-cols-2">
          <legend className="visually-hidden">Opciones para pregunta {globalIndex + 1}</legend>
          {question.options.map((opt) => {
            const isChosen = selectedChoice === opt.id;
            const isRightOption = opt.id === question.correctOptionId;

            let optionStyle =
              "border-line bg-card text-ink hover:border-line-strong hover:bg-muted/60";
            if (isRevealed) {
              if (isRightOption) {
                optionStyle = "border-ok-border bg-ok-bg text-ok-fg font-semibold";
              } else if (isChosen && !isRightOption) {
                optionStyle = "border-err-border bg-err-bg text-err-fg";
              }
            } else if (isChosen) {
              optionStyle = "border-brand bg-info-bg text-info-fg font-semibold ring-1 ring-brand";
            }

            return (
              <label
                key={opt.id}
                className={cn(
                  "flex min-h-11 items-start gap-2.5 rounded-xl border px-3.5 py-2.5 text-left text-sm transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brand",
                  mode === "mock_review" ? "cursor-default" : "cursor-pointer",
                  optionStyle,
                )}
              >
                <input
                  type="radio"
                  name={`grammar-${question.id}`}
                  value={opt.id}
                  checked={isChosen}
                  disabled={mode === "mock_review"}
                  onChange={() => handleSelect(question.id, opt.id)}
                  className="visually-hidden"
                />
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-current/30 font-mono text-xs font-bold">
                  {opt.id}
                </span>
                <span lang="en" className="leading-snug">
                  {opt.text}
                </span>
              </label>
            );
          })}
        </fieldset>

        {/* Botón individual en modo estudio */}
        {mode === "study" && !isRevealed ? (
          <div className="mt-4 flex justify-end">
            <button
              type="button"
              disabled={!selectedChoice}
              onClick={() => handleCheckSingle(question.id)}
              className="inline-flex min-h-10 items-center gap-1.5 rounded-xl border border-line-strong bg-muted px-3.5 py-1.5 text-xs font-semibold text-ink transition-colors hover:bg-canvas disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Sparkles className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
              <span>Comprobar respuesta</span>
            </button>
          </div>
        ) : null}

        {/* Retroalimentación diagnóstica en español */}
        {isRevealed ? (
          <div className="mt-4 space-y-3 rounded-xl border border-line bg-muted/60 p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              {selectedChoice === undefined ? (
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-warn-fg">
                  <HelpCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Sin responder · Opción correcta: {question.correctOptionId}</span>
                </span>
              ) : isCorrect ? (
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-ok-fg">
                  <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Respuesta correcta ({question.correctOptionId})</span>
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-err-fg">
                  <XCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>
                    Elegiste {selectedChoice} · Respuesta correcta: {question.correctOptionId}
                  </span>
                </span>
              )}

              {question.part === "part2_error_identification" ? (
                <div className="rounded-lg border border-ok-border/50 bg-ok-bg px-2.5 py-1 text-xs text-ok-fg">
                  <span className="font-semibold">Corrección B2: </span>
                  <span lang="en" className="font-mono font-bold">
                    {question.correctedSegment}
                  </span>
                </div>
              ) : null}
            </div>

            <div className="flex items-start gap-2 rounded-lg border border-info-border/40 bg-info-bg p-3 text-xs leading-relaxed text-info-fg">
              <Lightbulb className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <p>
                <strong className="font-bold">Estrategia iTEP: </strong>
                {question.strategyTipEs}
              </p>
            </div>

            <div className="space-y-1.5">
              <p className="text-xs font-bold text-ink">
                Análisis diagnóstico de las 4 opciones (A–D):
              </p>
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
                      {isUser && !isRight ? <Badge variant="danger">Tu elección</Badge> : null}
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
  };

  return (
    <div className="space-y-6">
      {mode === "study" ? (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <ExamTimer
            durationSeconds={section.timeLimitSeconds}
            label="Cronómetro Grammar"
            mode="study"
            className="flex-1"
          />
          <div className="flex items-center gap-2 rounded-xl border border-line bg-card px-4 py-2.5 text-xs font-semibold tabular-nums">
            <span>
              Respondidas: {answeredCount} / {section.questions.length}
            </span>
            {allChecked ? (
              <Badge
                variant={correctCount / section.questions.length >= 0.7 ? "success" : "warning"}
              >
                Aciertos: {correctCount} / {section.questions.length}
              </Badge>
            ) : null}
          </div>
        </div>
      ) : null}

      {part1Questions.length > 0 ? (
        <section className="space-y-4">
          <div className="border-b border-line pb-2">
            <h3 className="text-sm font-bold uppercase tracking-wide text-ink">
              Part 1 — Completar Estructura Sintáctica ({part1Questions.length} reactivos)
            </h3>
            <p className="text-xs text-ink-muted">
              Selecciona la opción que completa con precisión morfosintáctica B2 el espacio en
              blanco.
            </p>
          </div>
          <div className="space-y-4">
            {part1Questions.map((q) =>
              renderQuestionCard(
                q,
                section.questions.findIndex((item) => item.id === q.id),
              ),
            )}
          </div>
        </section>
      ) : null}

      {part2Questions.length > 0 ? (
        <section className="space-y-4">
          <div className="border-b border-line pb-2">
            <h3 className="text-sm font-bold uppercase tracking-wide text-ink">
              Part 2 — Identificación del Segmento Subrayado Erróneo ({part2Questions.length}{" "}
              reactivos)
            </h3>
            <p className="text-xs text-ink-muted">
              Haz clic directamente sobre el segmento subrayado <code>[A]</code>–<code>[D]</code>{" "}
              que contiene el error gramatical o elige la letra debajo.
            </p>
          </div>
          <div className="space-y-4">
            {part2Questions.map((q) =>
              renderQuestionCard(
                q,
                section.questions.findIndex((item) => item.id === q.id),
              ),
            )}
          </div>
        </section>
      ) : null}

      {mode === "study" ? (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line bg-card p-4">
          <div className="text-xs text-ink-muted tabular-nums">
            Progreso del bloque: <strong>{answeredCount}</strong> de{" "}
            <strong>{section.questions.length}</strong> preguntas respondidas.
          </div>
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={handleResetStudy}
              className="inline-flex min-h-11 items-center rounded-xl border border-line bg-muted px-4 py-2 text-xs font-semibold text-ink hover:border-line-strong"
            >
              Limpiar intento
            </button>
            <button
              type="button"
              onClick={handleCheckAll}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-brand px-4 py-2 text-xs font-semibold text-on-brand transition-colors hover:bg-brand-hover"
            >
              <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
              <span>Comprobar bloque Grammar completo</span>
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
