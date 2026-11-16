import {
  AlertTriangle,
  CheckCircle2,
  FileText,
  Headphones,
  HelpCircle,
  Lightbulb,
  Lock,
  Play,
  Volume2,
  XCircle,
} from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge.tsx";
import { ExamTimer } from "@/components/ui/exam-timer.tsx";
import { useProgress } from "@/context/progress-context.tsx";
import { curriculumRegistry } from "@/data/curriculum-registry.ts";
import { formatSecondsMmSs } from "@/lib/text-parsers.ts";
import { cn } from "@/lib/utils.ts";
import type { ChoiceId, ListeningPartItem, ListeningSection } from "@/schemas/curriculum.schema.ts";

export interface ListeningRunnerProps {
  readonly section: ListeningSection;
  readonly mode?: "study" | "mock" | "mock_review";
  readonly externalAnswers?: Readonly<Record<string, ChoiceId>>;
  readonly onAnswerSelect?: (questionId: string, choiceId: ChoiceId) => void;
}

const PART_LABELS: Readonly<Record<ListeningPartItem["part"], string>> = {
  part1_short_dialogue: "Part 1 · Diálogo Universitario Breve",
  part2_conversation: "Part 2 · Conversación Académica Extendida",
  part3_lecture: "Part 3 · Clase Magistral Universitaria",
};

interface ListeningTrackCardProps {
  readonly item: ListeningPartItem;
  readonly mode: "study" | "mock" | "mock_review";
  readonly answers: Readonly<Record<string, ChoiceId>>;
  readonly isSubmitted: boolean;
  readonly onSelect: (questionId: string, choiceId: ChoiceId) => void;
  readonly onSubmitBlock: () => void;
}

function ListeningTrackCard({
  item,
  mode,
  answers,
  isSubmitted,
  onSelect,
  onSubmitBlock,
}: ListeningTrackCardProps) {
  const { isAudioPlayed, markAudioPlayed } = useProgress();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const transcriptId = `transcript-${item.audio.trackId}`;

  const manifestEntry = curriculumRegistry.audioManifest[item.audio.trackId];
  const manifestDuration = manifestEntry?.durationSeconds ?? 0;

  const [playState, setPlayState] = useState<"ready" | "playing" | "finished" | "error">("ready");
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [loadedDuration, setLoadedDuration] = useState<number>(manifestDuration);

  const alreadyConsumedInStorage = isAudioPlayed(item.audio.trackId);
  const isExamLocked =
    !isSubmitted &&
    ((alreadyConsumedInStorage && playState !== "playing") || playState === "finished");

  const effectiveDuration = loadedDuration > 0 ? loadedDuration : manifestDuration;

  const handleStartExamPlayback = async () => {
    if (isExamLocked || playState === "playing") {
      return;
    }
    const audioEl = audioRef.current;
    if (!audioEl) {
      return;
    }

    try {
      await audioEl.play();
    } catch {
      setPlayState("error");
    }
  };

  const answeredInItemCount = item.questions.filter((q) => answers[q.id] !== undefined).length;
  const correctInItemCount = item.questions.filter(
    (q) => answers[q.id] === q.correctOptionId,
  ).length;

  return (
    <section className="rounded-2xl border border-line bg-card p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="default">{PART_LABELS[item.part]}</Badge>
          <Badge variant="neutral" className="tabular-nums">
            Duración: {formatSecondsMmSs(Math.round(effectiveDuration))}
          </Badge>
        </div>
        <span className="text-xs font-semibold text-ink-muted tabular-nums">
          {answeredInItemCount} / {item.questions.length} respondidas
        </span>
      </div>

      <h3 lang="en" className="mt-3 text-base font-bold text-ink">
        {item.title}
      </h3>
      <p lang="en" className="mt-1 text-sm italic text-ink-muted">
        {item.audio.contextSetup}
      </p>

      {/* Reproductor .mp3 real */}
      <div className="mt-4 rounded-xl border border-line bg-canvas p-4">
        {/* biome-ignore lint/a11y/useMediaCaption: Verbatim multi-speaker transcript is linked via aria-details={transcriptId} */}
        <audio
          ref={audioRef}
          src={item.audio.audioUrl}
          preload="metadata"
          aria-details={transcriptId}
          onLoadedMetadata={(e) => {
            const dur = e.currentTarget.duration;
            if (Number.isFinite(dur) && dur > 0) {
              setLoadedDuration(dur);
            }
          }}
          onPlay={() => {
            setPlayState("playing");
            markAudioPlayed(item.audio.trackId);
          }}
          onTimeUpdate={(e) => {
            setCurrentTime(e.currentTarget.currentTime);
          }}
          onEnded={() => {
            setPlayState("finished");
          }}
          onError={() => {
            setPlayState("error");
          }}
        />

        {!isSubmitted ? (
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-ink">
                <Headphones className="h-4 w-4 text-brand" aria-hidden="true" />
                <span>Modo Examen Oficial · Toma única sin retroceso</span>
              </div>

              <span className="font-mono text-xs font-semibold tabular-nums text-ink-muted">
                {formatSecondsMmSs(currentTime)} /{" "}
                {formatSecondsMmSs(Math.round(effectiveDuration))}
              </span>
            </div>

            <progress
              value={effectiveDuration > 0 ? Math.min(currentTime, effectiveDuration) : 0}
              max={effectiveDuration > 0 ? effectiveDuration : 1}
              aria-label={`Progreso de audio ${item.title}`}
              className="h-2 w-full overflow-hidden rounded-full"
            />

            <div className="flex flex-wrap items-center justify-between gap-3">
              {isExamLocked ? (
                <button
                  type="button"
                  disabled
                  className="inline-flex min-h-11 cursor-not-allowed items-center gap-2 rounded-xl border border-warn-border/60 bg-warn-bg px-4 py-2 text-xs font-semibold text-warn-fg"
                >
                  <Lock className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>1/1 reproducción consumida — condición real iTEP</span>
                </button>
              ) : playState === "playing" ? (
                <button
                  type="button"
                  disabled
                  className="inline-flex min-h-11 cursor-wait items-center gap-2 rounded-xl bg-brand px-4 py-2 text-xs font-semibold text-on-brand opacity-90"
                >
                  <Volume2 className="h-4 w-4 shrink-0 animate-pulse" aria-hidden="true" />
                  <span>Reproduciendo pista oficial (1 sola toma en curso)…</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleStartExamPlayback}
                  className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-brand px-4 py-2 text-xs font-semibold text-on-brand transition-colors hover:bg-brand-hover"
                >
                  <Play className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Reproducir audio oficial (1 sola toma)</span>
                </button>
              )}

              <span className="text-xs text-ink-muted">
                Toma apuntes breves mientras escuchas; la barra de adelanto está deshabilitada.
              </span>
            </div>

            {playState === "error" ? (
              <p
                role="alert"
                className="flex items-center gap-2 rounded-lg border border-err-border/60 bg-err-bg px-3 py-2 text-xs font-medium text-err-fg"
              >
                <AlertTriangle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>
                  No fue posible reproducir {item.audio.audioUrl}. Verifica que los archivos MP3
                  locales estén disponibles.
                </span>
              </p>
            ) : null}
          </div>
        ) : (
          <div className="space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-ok-fg">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Modo Estudio Analítico desbloqueado (re-escucha con controles libres)</span>
              </span>
            </div>
            {/* biome-ignore lint/a11y/useMediaCaption: Full multi-speaker verbatim transcript is linked immediately below via transcriptId */}
            <audio
              controls
              src={item.audio.audioUrl}
              preload="metadata"
              aria-label={`Re-escucha analítica: ${item.title}`}
              className="mt-1 w-full"
            />
          </div>
        )}
      </div>

      {/* Transcripción vinculada por aria-details */}
      {!isSubmitted ? (
        <div
          id={transcriptId}
          className="mt-3 flex items-center gap-2 rounded-xl border border-line bg-muted px-3.5 py-2.5 text-xs text-ink-muted"
        >
          <Lock className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>
            Transcripción multi-locutor bloqueada durante Modo Examen. Envía tus respuestas de este
            bloque para desbloquearla.
          </span>
        </div>
      ) : (
        <details
          id={transcriptId}
          open
          className="mt-3 rounded-xl border border-info-border/40 bg-muted/50 p-4"
        >
          <summary className="cursor-pointer text-xs font-bold text-ink">
            <span className="inline-flex items-center gap-1.5">
              <FileText className="h-4 w-4 text-brand" aria-hidden="true" />
              <span>
                Transcripción completa multi-locutor ({item.audio.turns.length} intervenciones)
              </span>
            </span>
          </summary>
          <div className="mt-3 space-y-2.5 border-t border-line pt-3">
            {item.audio.turns.map((turn) => (
              <div
                key={`${item.id}-${turn.speakerLabel}-${turn.text.slice(0, 32)}`}
                className="rounded-lg border border-line bg-card px-3.5 py-2.5 text-sm"
              >
                <span className="text-xs font-bold uppercase tracking-wide text-brand">
                  {turn.speakerLabel}:
                </span>
                <p lang="en" className="mt-1 leading-relaxed text-ink">
                  {turn.text}
                </p>
              </div>
            ))}
          </div>
        </details>
      )}

      {/* Preguntas del audio */}
      <div className="mt-5 space-y-4">
        {item.questions.map((q, qIdx) => {
          const selectedChoice = answers[q.id];
          const isCorrect = selectedChoice === q.correctOptionId;

          return (
            <div key={q.id} className="rounded-xl border border-line bg-canvas p-4">
              <p lang="en" className="text-sm font-semibold leading-relaxed text-ink">
                <span className="mr-2 font-mono text-xs font-bold text-brand">Q{qIdx + 1}.</span>
                {q.prompt}
              </p>

              <fieldset className="mt-3 grid gap-2">
                <legend className="visually-hidden">
                  Opciones para {item.title} pregunta {qIdx + 1}
                </legend>
                {q.options.map((opt) => {
                  const isChosen = selectedChoice === opt.id;
                  const isRight = opt.id === q.correctOptionId;

                  let optClass =
                    "border-line bg-card text-ink hover:border-line-strong hover:bg-muted/60";
                  if (isSubmitted) {
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
                        "flex min-h-11 items-start gap-2.5 rounded-xl border px-3.5 py-2 text-left text-sm transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brand",
                        isSubmitted ? "cursor-default" : "cursor-pointer",
                        optClass,
                      )}
                    >
                      <input
                        type="radio"
                        name={`listening-${q.id}`}
                        value={opt.id}
                        checked={isChosen}
                        disabled={isSubmitted}
                        onChange={() => onSelect(q.id, opt.id)}
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

              {isSubmitted ? (
                <div className="mt-3 space-y-2 rounded-lg border border-line bg-card p-3">
                  {selectedChoice === undefined ? (
                    <p className="inline-flex items-center gap-1.5 text-xs font-bold text-warn-fg">
                      <HelpCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>Sin responder · Opción correcta: {q.correctOptionId}</span>
                    </p>
                  ) : isCorrect ? (
                    <p className="inline-flex items-center gap-1.5 text-xs font-bold text-ok-fg">
                      <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>Respuesta correcta ({q.correctOptionId})</span>
                    </p>
                  ) : (
                    <p className="inline-flex items-center gap-1.5 text-xs font-bold text-err-fg">
                      <XCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>
                        Elegiste {selectedChoice} · Respuesta correcta: {q.correctOptionId}
                      </span>
                    </p>
                  )}

                  <div className="space-y-1.5">
                    {q.options.map((opt) => (
                      <div
                        key={opt.id}
                        className={cn(
                          "rounded-md border px-2.5 py-1.5 text-xs leading-relaxed",
                          opt.id === q.correctOptionId
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
            </div>
          );
        })}
      </div>

      {/* Pie del bloque Listening */}
      {mode === "study" ? (
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
          {isSubmitted ? (
            <div className="w-full space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <Badge
                  variant={
                    correctInItemCount / item.questions.length >= 0.7 ? "success" : "warning"
                  }
                >
                  Calificación de la pista: {correctInItemCount} / {item.questions.length}
                </Badge>
              </div>
              <div className="flex items-start gap-2 rounded-xl border border-info-border/40 bg-info-bg p-3 text-xs leading-relaxed text-info-fg">
                <Lightbulb className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <p>
                  <strong className="font-bold">Clave estratégica B2: </strong>
                  {item.keyTakeawayEs}
                </p>
              </div>
            </div>
          ) : (
            <>
              <span className="text-xs text-ink-muted">
                Envía tus respuestas de esta pista para calificar y desbloquear la transcripción.
              </span>
              <button
                type="button"
                onClick={onSubmitBlock}
                className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-brand px-4 py-2 text-xs font-semibold text-on-brand transition-colors hover:bg-brand-hover"
              >
                <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                <span>Enviar respuestas y ver transcripción</span>
              </button>
            </>
          )}
        </div>
      ) : mode === "mock_review" ? (
        <div className="mt-4 flex items-start gap-2 rounded-xl border border-info-border/40 bg-info-bg p-3 text-xs leading-relaxed text-info-fg">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <p>
            <strong className="font-bold">Clave estratégica B2: </strong>
            {item.keyTakeawayEs}
          </p>
        </div>
      ) : null}
    </section>
  );
}

export function ListeningRunner({
  section,
  mode = "study",
  externalAnswers,
  onAnswerSelect,
}: ListeningRunnerProps) {
  const [localAnswers, setLocalAnswers] = useState<Record<string, ChoiceId>>({});
  const [submittedItemIds, setSubmittedItemIds] = useState<Record<string, boolean>>({});

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
    () => section.items.reduce((acc, item) => acc + item.questions.length, 0),
    [section.items],
  );

  const answeredCount = useMemo(
    () =>
      section.items.reduce(
        (acc, item) => acc + item.questions.filter((q) => answers[q.id] !== undefined).length,
        0,
      ),
    [answers, section.items],
  );

  const handleSubmitAllItems = () => {
    const next: Record<string, boolean> = {};
    for (const item of section.items) {
      next[item.id] = true;
    }
    setSubmittedItemIds(next);
  };

  return (
    <div className="space-y-6">
      {mode === "study" ? (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <ExamTimer
            durationSeconds={section.timeLimitSeconds}
            label="Cronómetro Listening"
            mode="study"
            className="flex-1"
          />
          <div className="flex items-center gap-2 rounded-xl border border-line bg-card px-4 py-2.5 text-xs font-semibold tabular-nums">
            <span>
              Respondidas: {answeredCount} / {totalQuestions}
            </span>
          </div>
        </div>
      ) : null}

      <div className="space-y-6">
        {section.items.map((item) => (
          <ListeningTrackCard
            key={item.id}
            item={item}
            mode={mode}
            answers={answers}
            isSubmitted={mode === "mock_review" || Boolean(submittedItemIds[item.id])}
            onSelect={handleSelect}
            onSubmitBlock={() =>
              setSubmittedItemIds((prev) => ({
                ...prev,
                [item.id]: true,
              }))
            }
          />
        ))}
      </div>

      {mode === "study" && section.items.some((item) => !submittedItemIds[item.id]) ? (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line bg-card p-4">
          <span className="text-xs text-ink-muted">
            ¿Completaste las {section.items.length} pistas de audio? Califica toda la sección de una
            vez.
          </span>
          <button
            type="button"
            onClick={handleSubmitAllItems}
            className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-brand px-4 py-2 text-xs font-semibold text-on-brand transition-colors hover:bg-brand-hover"
          >
            <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
            <span>Enviar toda la sección Listening</span>
          </button>
        </div>
      ) : null}
    </div>
  );
}
