import { BookOpen, CheckCircle2, HelpCircle, Quote, Sparkles, XCircle } from "lucide-react";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge.tsx";
import { ExamTimer } from "@/components/ui/exam-timer.tsx";
import { parseReadingInsertionTokens } from "@/lib/text-parsers.ts";
import { cn } from "@/lib/utils.ts";
import type {
  ChoiceId,
  ReadingPassage,
  ReadingQuestionType,
  ReadingSection,
} from "@/schemas/curriculum.schema.ts";

export interface ReadingRunnerProps {
  readonly section: ReadingSection;
  readonly mode?: "study" | "mock" | "mock_review";
  readonly externalAnswers?: Readonly<Record<string, ChoiceId>>;
  readonly onAnswerSelect?: (questionId: string, choiceId: ChoiceId) => void;
}

const QUESTION_TYPE_LABELS: Readonly<Record<ReadingQuestionType, string>> = {
  main_idea: "Idea principal",
  detail: "Detalle factual",
  vocabulary_in_context: "Vocabulario en contexto",
  inference: "Inferencia académica",
  rhetorical_purpose: "Propósito retórico",
  sentence_insertion: "Inserción cohesiva [A]–[D]",
  synthesis: "Síntesis global",
};

export function ReadingRunner({
  section,
  mode = "study",
  externalAnswers,
  onAnswerSelect,
}: ReadingRunnerProps) {
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

  const totalQuestions = useMemo(
    () => section.passages.reduce((acc, p) => acc + p.questions.length, 0),
    [section.passages],
  );

  const answeredCount = useMemo(
    () =>
      section.passages.reduce(
        (acc, p) => acc + p.questions.filter((q) => answers[q.id] !== undefined).length,
        0,
      ),
    [answers, section.passages],
  );

  const correctCount = useMemo(
    () =>
      section.passages.reduce(
        (acc, p) => acc + p.questions.filter((q) => answers[q.id] === q.correctOptionId).length,
        0,
      ),
    [answers, section.passages],
  );

  const renderPassageBlock = (passage: ReadingPassage, passageIdx: number) => {
    const insertionQuestion = passage.questions.find(
      (q) => q.questionType === "sentence_insertion",
    );
    const selectedInsertionMarker = insertionQuestion ? answers[insertionQuestion.id] : undefined;

    return (
      <section
        key={passage.id}
        id={`reading-passage-${passage.id}`}
        className="rounded-2xl border border-line bg-card p-5 shadow-xs"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-3">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="default">
              {passage.part === "part1_intermediate"
                ? `Pasaje ${passageIdx + 1} · Part 1 Intermedio (~250 palabras)`
                : `Pasaje ${passageIdx + 1} · Part 2 Académico Superior (~450 palabras)`}
            </Badge>
            <Badge variant="neutral" lang="en">
              {passage.topicDomain}
            </Badge>
          </div>
          <span className="text-xs font-semibold text-ink-muted tabular-nums">
            {passage.questions.filter((q) => answers[q.id] !== undefined).length} /{" "}
            {passage.questions.length} respondidas
          </span>
        </div>

        <div className="mt-5 grid gap-6 lg:grid-cols-12 lg:items-start">
          {/* Columna izquierda: Pasaje de lectura con medida controlada max-w-[65ch] */}
          <div className="rounded-xl border border-line bg-canvas p-5 lg:sticky lg:top-20 lg:col-span-7 lg:max-h-[78dvh] lg:overflow-y-auto">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-brand">
              <BookOpen className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Texto Académico iTEP</span>
            </div>
            <h3 lang="en" className="mt-2 max-w-[65ch] text-lg font-bold leading-snug text-ink">
              {passage.title}
            </h3>

            <div
              lang="en"
              className="mt-4 max-w-[65ch] space-y-4 text-[15px] leading-relaxed text-ink"
            >
              {passage.paragraphs.map((paragraph, pIdx) => {
                const tokens =
                  passage.part === "part2_academic"
                    ? parseReadingInsertionTokens(paragraph)
                    : [{ type: "text" as const, value: paragraph, startOffset: 0 }];

                return (
                  <p key={`${passage.id}-${paragraph.slice(0, 32)}`}>
                    <span
                      lang="es"
                      className="mr-2 inline-block rounded bg-muted px-1.5 py-0.5 font-mono text-xs font-bold text-ink-muted"
                    >
                      P{pIdx + 1}
                    </span>
                    {tokens.map((token) => {
                      if (token.type === "text") {
                        return (
                          <span key={`${passage.id}-t-${token.startOffset}`}>{token.value}</span>
                        );
                      }
                      const isMarkerSelected = selectedInsertionMarker === token.choiceId;
                      return (
                        <button
                          key={`${passage.id}-marker-${token.choiceId}`}
                          type="button"
                          disabled={mode === "mock_review" || !insertionQuestion}
                          onClick={() => {
                            if (insertionQuestion) {
                              handleSelect(insertionQuestion.id, token.choiceId);
                            }
                          }}
                          aria-label={`Seleccionar posición de inserción [${token.choiceId}]`}
                          className={cn(
                            "mx-1 inline-flex items-center justify-center rounded-md border px-1.5 py-0.5 font-mono text-xs font-bold transition-colors",
                            isMarkerSelected
                              ? "border-brand bg-brand text-on-brand shadow-xs"
                              : "border-info-border bg-info-bg text-info-fg hover:border-brand",
                          )}
                        >
                          [{token.choiceId}]
                        </button>
                      );
                    })}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Columna derecha: Reactivos del pasaje */}
          <div className="space-y-4 lg:col-span-5">
            {passage.questions.map((question, qIdx) => {
              const selectedChoice = answers[question.id];
              const isRevealed =
                mode === "mock_review" ||
                (mode === "study" && (allChecked || Boolean(checkedQuestionIds[question.id])));
              const isCorrect = selectedChoice === question.correctOptionId;

              return (
                <article key={question.id} className="rounded-xl border border-line bg-canvas p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-xs font-bold text-brand">
                      Pregunta {qIdx + 1}
                    </span>
                    <Badge variant="neutral">{QUESTION_TYPE_LABELS[question.questionType]}</Badge>
                  </div>

                  <p lang="en" className="mt-2 text-sm font-semibold leading-relaxed text-ink">
                    {question.prompt}
                  </p>

                  {question.sentenceToInsert ? (
                    <div className="mt-3 rounded-xl border border-info-border/50 bg-info-bg p-3 text-info-fg">
                      <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide">
                        <Quote className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>Oración a insertar en [A], [B], [C] o [D]:</span>
                      </div>
                      <blockquote lang="en" className="mt-1.5 text-sm font-semibold leading-snug">
                        “{question.sentenceToInsert}”
                      </blockquote>
                    </div>
                  ) : null}

                  <fieldset className="mt-3 grid gap-2">
                    <legend className="visually-hidden">
                      Opciones para {passage.title} pregunta {qIdx + 1}
                    </legend>
                    {question.options.map((opt) => {
                      const isChosen = selectedChoice === opt.id;
                      const isRight = opt.id === question.correctOptionId;

                      let optClass =
                        "border-line bg-card text-ink hover:border-line-strong hover:bg-muted/60";
                      if (isRevealed) {
                        if (isRight) {
                          optClass = "border-ok-border bg-ok-bg text-ok-fg font-semibold";
                        } else if (isChosen && !isRight) {
                          optClass = "border-err-border bg-err-bg text-err-fg";
                        }
                      } else if (isChosen) {
                        optClass =
                          "border-brand bg-info-bg text-info-fg font-semibold ring-1 ring-brand";
                      }

                      return (
                        <label
                          key={opt.id}
                          className={cn(
                            "flex min-h-11 items-start gap-2.5 rounded-xl border px-3 py-2 text-left text-xs sm:text-sm transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brand",
                            mode === "mock_review" ? "cursor-default" : "cursor-pointer",
                            optClass,
                          )}
                        >
                          <input
                            type="radio"
                            name={`reading-${question.id}`}
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

                  {mode === "study" && !isRevealed ? (
                    <div className="mt-3 flex justify-end">
                      <button
                        type="button"
                        disabled={!selectedChoice}
                        onClick={() =>
                          setCheckedQuestionIds((prev) => ({ ...prev, [question.id]: true }))
                        }
                        className="inline-flex min-h-9 items-center gap-1.5 rounded-lg border border-line-strong bg-card px-3 py-1 text-xs font-semibold text-ink hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <Sparkles className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                        <span>Comprobar respuesta</span>
                      </button>
                    </div>
                  ) : null}

                  {isRevealed ? (
                    <div className="mt-3 space-y-2 rounded-lg border border-line bg-card p-3">
                      {selectedChoice === undefined ? (
                        <p className="inline-flex items-center gap-1.5 text-xs font-bold text-warn-fg">
                          <HelpCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                          <span>Sin responder · Respuesta oficial: {question.correctOptionId}</span>
                        </p>
                      ) : isCorrect ? (
                        <p className="inline-flex items-center gap-1.5 text-xs font-bold text-ok-fg">
                          <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                          <span>Respuesta correcta ({question.correctOptionId})</span>
                        </p>
                      ) : (
                        <p className="inline-flex items-center gap-1.5 text-xs font-bold text-err-fg">
                          <XCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                          <span>
                            Elegiste {selectedChoice} · Respuesta oficial:{" "}
                            {question.correctOptionId}
                          </span>
                        </p>
                      )}

                      <div className="space-y-1.5">
                        {question.options.map((opt) => (
                          <div
                            key={opt.id}
                            className={cn(
                              "rounded-md border px-2.5 py-1.5 text-xs leading-relaxed",
                              opt.id === question.correctOptionId
                                ? "border-ok-border/50 bg-ok-bg text-ok-fg"
                                : opt.id === selectedChoice
                                  ? "border-err-border/50 bg-err-bg text-err-fg"
                                  : "border-line bg-muted/40 text-ink-muted",
                            )}
                          >
                            <strong className="font-mono">[{opt.id}] </strong>
                            <span>{opt.explanationEs}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="space-y-6">
      {mode === "study" ? (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <ExamTimer
            durationSeconds={section.timeLimitSeconds}
            label="Cronómetro Reading"
            mode="study"
            className="flex-1"
          />
          <div className="flex items-center gap-2 rounded-xl border border-line bg-card px-4 py-2.5 text-xs font-semibold tabular-nums">
            <span>
              Respondidas: {answeredCount} / {totalQuestions}
            </span>
            {allChecked ? (
              <Badge variant={correctCount / totalQuestions >= 0.7 ? "success" : "warning"}>
                Aciertos: {correctCount} / {totalQuestions}
              </Badge>
            ) : null}
          </div>
        </div>
      ) : null}

      <div className="space-y-6">
        {section.passages.map((passage, idx) => renderPassageBlock(passage, idx))}
      </div>

      {mode === "study" ? (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line bg-card p-4">
          <span className="text-xs text-ink-muted tabular-nums">
            Progreso de lectura: <strong>{answeredCount}</strong> de{" "}
            <strong>{totalQuestions}</strong> preguntas respondidas.
          </span>
          <div className="flex flex-wrap gap-2.5">
            <button
              type="button"
              onClick={() => {
                setLocalAnswers({});
                setCheckedQuestionIds({});
                setAllChecked(false);
              }}
              className="inline-flex min-h-11 items-center rounded-xl border border-line bg-muted px-4 py-2 text-xs font-semibold text-ink hover:border-line-strong"
            >
              Limpiar respuestas
            </button>
            <button
              type="button"
              onClick={() => setAllChecked(true)}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-brand px-4 py-2 text-xs font-semibold text-on-brand transition-colors hover:bg-brand-hover"
            >
              <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
              <span>Comprobar Reading completo</span>
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
