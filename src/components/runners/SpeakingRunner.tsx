import {
  CheckCircle2,
  Clock,
  Download,
  FastForward,
  FileText,
  Mic,
  MicOff,
  Play,
  RotateCcw,
  Square,
  Volume2,
} from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge.tsx";
import { useProgress } from "@/context/progress-context.tsx";
import { curriculumRegistry } from "@/data/curriculum-registry.ts";
import { formatSecondsMmSs } from "@/lib/text-parsers.ts";
import { cn, resolvePublicAssetUrl } from "@/lib/utils.ts";
import type { SpeakingSection, SpeakingTaskItem } from "@/schemas/curriculum.schema.ts";

export interface SpeakingRunnerProps {
  readonly section: SpeakingSection;
  readonly mode?: "study" | "mock" | "mock_review";
  readonly onTaskRecorded?: (taskId: string) => void;
  readonly onCriteriaChange?: (taskId: string, checkedIndexes: readonly number[]) => void;
}

type SpeakingPhase = "idle" | "preparing" | "recording" | "review";
type MicHardwareStatus = "ready" | "permission_prompt" | "active" | "fallback_timer";

function selectSupportedMimeType(): string {
  if (typeof MediaRecorder === "undefined" || typeof MediaRecorder.isTypeSupported !== "function") {
    return "";
  }
  const candidates = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4", "audio/ogg;codecs=opus"];
  for (const mime of candidates) {
    if (MediaRecorder.isTypeSupported(mime)) {
      return mime;
    }
  }
  return "";
}

interface SpeakingTaskCardProps {
  readonly task: SpeakingTaskItem;
  readonly mode: "study" | "mock" | "mock_review";
  readonly onTaskRecorded?: (taskId: string) => void;
  readonly onCriteriaChange?: (taskId: string, checkedIndexes: readonly number[]) => void;
}

function SpeakingTaskCard({ task, mode, onTaskRecorded, onCriteriaChange }: SpeakingTaskCardProps) {
  const notesInputId = useId();
  const { progress, saveSpeakingSelfScore } = useProgress();
  const savedScore = progress.speakingSelfScores[task.id];

  const [phase, setPhase] = useState<SpeakingPhase>(() =>
    mode === "mock_review" ? "review" : "idle",
  );
  const [countdownSeconds, setCountdownSeconds] = useState<number>(task.prepSeconds);
  const [micStatus, setMicStatus] = useState<MicHardwareStatus>("ready");
  const [recordedAudioUrl, setRecordedAudioUrl] = useState<string | null>(null);
  const [notes, setNotes] = useState<string>(() => savedScore?.notes ?? "");
  const [checkedIndexes, setCheckedIndexes] = useState<number[]>(
    () => savedScore?.checkedCriteriaIndexes ?? [],
  );

  const mediaStreamRef = useRef<MediaStream | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const recordedUrlRef = useRef<string | null>(null);
  const attemptSeqRef = useRef<number>(0);
  const onTaskRecordedRef = useRef(onTaskRecorded);

  useEffect(() => {
    onTaskRecordedRef.current = onTaskRecorded;
  }, [onTaskRecorded]);

  const releaseMediaTracks = useCallback(() => {
    if (mediaStreamRef.current) {
      for (const track of mediaStreamRef.current.getTracks()) {
        track.stop();
      }
      mediaStreamRef.current = null;
    }
  }, []);

  const stopActiveRecorder = useCallback(() => {
    attemptSeqRef.current += 1;
    const recorder = mediaRecorderRef.current;
    if (recorder && recorder.state !== "inactive") {
      try {
        recorder.stop();
      } catch {
        releaseMediaTracks();
      }
    } else {
      releaseMediaTracks();
    }
  }, [releaseMediaTracks]);

  useEffect(() => {
    return () => {
      stopActiveRecorder();
      releaseMediaTracks();
      if (recordedUrlRef.current) {
        URL.revokeObjectURL(recordedUrlRef.current);
        recordedUrlRef.current = null;
      }
    };
  }, [releaseMediaTracks, stopActiveRecorder]);

  const startRecordingPhase = useCallback(async () => {
    attemptSeqRef.current += 1;
    const currentAttempt = attemptSeqRef.current;
    setPhase("recording");
    setCountdownSeconds(task.recordSeconds);

    if (recordedUrlRef.current) {
      URL.revokeObjectURL(recordedUrlRef.current);
      recordedUrlRef.current = null;
      setRecordedAudioUrl(null);
    }

    if (
      typeof navigator === "undefined" ||
      !navigator.mediaDevices ||
      typeof navigator.mediaDevices.getUserMedia !== "function" ||
      typeof MediaRecorder === "undefined"
    ) {
      setMicStatus("fallback_timer");
      onTaskRecordedRef.current?.(task.id);
      return;
    }

    setMicStatus("permission_prompt");

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      if (attemptSeqRef.current !== currentAttempt) {
        for (const track of stream.getTracks()) {
          track.stop();
        }
        return;
      }
      mediaStreamRef.current = stream;
      audioChunksRef.current = [];

      const mimeType = selectSupportedMimeType();
      const recorder = mimeType
        ? new MediaRecorder(stream, { mimeType })
        : new MediaRecorder(stream);

      recorder.ondataavailable = (event: BlobEvent) => {
        if (event.data && event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      recorder.onstop = () => {
        const effectiveMime = recorder.mimeType || mimeType || "audio/webm";
        if (audioChunksRef.current.length > 0) {
          const blob = new Blob(audioChunksRef.current, { type: effectiveMime });
          const nextUrl = URL.createObjectURL(blob);
          recordedUrlRef.current = nextUrl;
          setRecordedAudioUrl(nextUrl);
        }
        releaseMediaTracks();
        onTaskRecordedRef.current?.(task.id);
      };

      recorder.onerror = () => {
        releaseMediaTracks();
        setMicStatus("fallback_timer");
      };

      mediaRecorderRef.current = recorder;
      recorder.start(250);
      setMicStatus("active");
    } catch {
      releaseMediaTracks();
      setMicStatus("fallback_timer");
      onTaskRecordedRef.current?.(task.id);
    }
  }, [releaseMediaTracks, task.id, task.recordSeconds]);

  const finishRecordingToReview = useCallback(() => {
    stopActiveRecorder();
    setPhase("review");
    setCountdownSeconds(0);
    if (micStatus === "fallback_timer") {
      onTaskRecordedRef.current?.(task.id);
    }
  }, [micStatus, stopActiveRecorder, task.id]);

  useEffect(() => {
    if (phase !== "preparing" && phase !== "recording") {
      return;
    }

    const timerId = window.setInterval(() => {
      setCountdownSeconds((prev) => {
        if (prev <= 1) {
          window.clearInterval(timerId);
          if (phase === "preparing") {
            window.setTimeout(() => {
              void startRecordingPhase();
            }, 0);
          } else {
            window.setTimeout(() => {
              finishRecordingToReview();
            }, 0);
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      window.clearInterval(timerId);
    };
  }, [finishRecordingToReview, phase, startRecordingPhase]);

  const handleStartPreparation = () => {
    setPhase("preparing");
    setCountdownSeconds(task.prepSeconds);
  };

  const handleCancelFlow = () => {
    stopActiveRecorder();
    releaseMediaTracks();
    setPhase("idle");
    setCountdownSeconds(task.prepSeconds);
  };

  const persistSelfScore = (nextChecked: number[], nextNotes: string) => {
    saveSpeakingSelfScore({
      taskId: task.id,
      checkedCriteriaIndexes: nextChecked,
      notes: nextNotes,
      completedAtIso: new Date().toISOString(),
    });
    onCriteriaChange?.(task.id, nextChecked);
  };

  const handleToggleCriterion = (idx: number, isChecked: boolean) => {
    const next = isChecked
      ? Array.from(new Set([...checkedIndexes, idx])).sort((a, b) => a - b)
      : checkedIndexes.filter((item) => item !== idx);
    setCheckedIndexes(next);
    persistSelfScore(next, notes);
  };

  const handleNotesChange = (value: string) => {
    setNotes(value);
    persistSelfScore(checkedIndexes, value);
  };

  const audioPromptDuration = task.audioPrompt
    ? curriculumRegistry.audioManifest[task.audioPrompt.trackId]?.durationSeconds
    : undefined;

  return (
    <section className="rounded-2xl border border-line bg-card p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="default">
            {task.part === "part1_personal"
              ? `Part 1 · Experiencia Académica (${task.prepSeconds}s prep · ${task.recordSeconds}s grabación)`
              : `Part 2 · Postura Académica Dual (${task.prepSeconds}s prep · ${task.recordSeconds}s grabación)`}
          </Badge>
          {checkedIndexes.length > 0 ? (
            <Badge variant="success" className="tabular-nums">
              Rúbrica B2: {checkedIndexes.length} / {task.selfRubricChecklistEs.length}
            </Badge>
          ) : null}
        </div>
        <span className="text-xs font-semibold text-ink-muted tabular-nums">
          Prep {task.prepSeconds}s → Voz {task.recordSeconds}s
        </span>
      </div>

      <h3 lang="en" className="mt-3 text-base font-bold text-ink">
        {task.title}
      </h3>

      {/* Prompt auditivo en Part 2 */}
      {task.audioPrompt ? (
        <div className="mt-3 rounded-xl border border-info-border/40 bg-info-bg p-3.5 text-info-fg">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold">
            <span className="inline-flex items-center gap-1.5">
              <Volume2 className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Enunciado auditivo del examinador (Speaking Part 2)</span>
            </span>
            {audioPromptDuration ? (
              <span className="font-mono tabular-nums">
                {formatSecondsMmSs(Math.round(audioPromptDuration))}
              </span>
            ) : null}
          </div>
          {/* biome-ignore lint/a11y/useMediaCaption: Full verbatim prompt text is displayed immediately below */}
          <audio
            controls
            src={resolvePublicAssetUrl(task.audioPrompt.audioUrl)}
            preload="metadata"
            aria-label={`Audio del enunciado: ${task.title}`}
            className="mt-2 w-full"
          />
        </div>
      ) : null}

      <div
        lang="en"
        className="mt-3 rounded-xl border border-line bg-canvas p-4 text-sm leading-relaxed text-ink"
      >
        {task.prompt}
      </div>

      {/* Guía estructural rápida */}
      {mode !== "mock" ? (
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-line bg-muted/60 p-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wide text-ink">
              Arquitectura temporal recomendada
            </h4>
            <ol
              lang="en"
              className="mt-2 list-decimal space-y-1 pl-4 text-xs leading-relaxed text-ink"
            >
              {task.structureTemplate.map((step) => (
                <li key={`${task.id}-tpl-${step}`}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="rounded-xl border border-line bg-muted/60 p-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wide text-ink">
              Fórmulas de arranque y cohesión B2
            </h4>
            <ul
              lang="en"
              className="mt-2 list-disc space-y-1 pl-4 text-xs leading-relaxed text-ink"
            >
              {task.keyPhrasesB2.map((phrase) => (
                <li key={`${task.id}-kp-${phrase}`}>{phrase}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}

      {/* Máquina de estados interactiva: idle -> preparing -> recording -> review */}
      <div className="mt-4 rounded-2xl border border-line-strong/60 bg-canvas p-4">
        {phase === "idle" ? (
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs leading-relaxed text-ink-muted">
              Al iniciar tendrás <strong>{task.prepSeconds} segundos</strong> de preparación con
              notas breves y la grabación de <strong>{task.recordSeconds} segundos</strong>{" "}
              comenzará automáticamente.
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={handleStartPreparation}
                className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-brand px-4 py-2 text-xs font-semibold text-on-brand transition-colors hover:bg-brand-hover"
              >
                <Play className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Iniciar preparación ({task.prepSeconds}s)</span>
              </button>
              {savedScore ? (
                <button
                  type="button"
                  onClick={() => setPhase("review")}
                  className="inline-flex min-h-11 items-center gap-1.5 rounded-xl border border-line bg-card px-3.5 py-2 text-xs font-semibold text-ink hover:border-line-strong"
                >
                  <span>Ver rúbrica guardada</span>
                </button>
              ) : null}
            </div>
          </div>
        ) : null}

        {phase === "preparing" ? (
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-warn-border/70 bg-warn-bg px-4 py-2.5 text-warn-fg">
              <div className="flex items-center gap-2 text-xs font-bold">
                <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Fase 1/2 · Preparación activa (organiza 3 bloques clave)</span>
              </div>
              <span className="font-mono text-xl font-bold tabular-nums">
                {formatSecondsMmSs(countdownSeconds)}
              </span>
            </div>

            <div>
              <label htmlFor={notesInputId} className="block text-xs font-bold text-ink">
                Notas rápidas de preparación (3 ideas o conectores, no oraciones completas)
              </label>
              <textarea
                id={notesInputId}
                rows={2}
                value={notes}
                onChange={(e) => handleNotesChange(e.target.value)}
                placeholder="1. Tesis directa · 2. Concesión + contraste · 3. Ejemplo concreto..."
                className="mt-1 w-full rounded-xl border border-line-strong bg-card p-3 text-xs text-ink"
              />
            </div>

            <div className="flex flex-wrap justify-end gap-2">
              <button
                type="button"
                onClick={handleCancelFlow}
                className="inline-flex min-h-10 items-center rounded-xl border border-line bg-card px-3.5 py-1.5 text-xs font-semibold text-ink"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={() => void startRecordingPhase()}
                className="inline-flex min-h-10 items-center gap-1.5 rounded-xl bg-brand px-4 py-1.5 text-xs font-semibold text-on-brand hover:bg-brand-hover"
              >
                <FastForward className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                <span>Adelantar y grabar ahora ({task.recordSeconds}s)</span>
              </button>
            </div>
          </div>
        ) : null}

        {phase === "recording" ? (
          <div className="space-y-3">
            <div
              className={cn(
                "flex flex-wrap items-center justify-between gap-3 rounded-xl border px-4 py-3",
                micStatus === "active"
                  ? "border-err-border bg-err-bg text-err-fg"
                  : micStatus === "permission_prompt"
                    ? "border-info-border bg-info-bg text-info-fg"
                    : "border-warn-border bg-warn-bg text-warn-fg",
              )}
            >
              <div className="flex items-center gap-2 text-xs font-bold">
                {micStatus === "active" ? (
                  <>
                    <Mic className="h-4 w-4 shrink-0 animate-pulse" aria-hidden="true" />
                    <span>Fase 2/2 · Grabando respuesta oficial en navegador…</span>
                  </>
                ) : micStatus === "permission_prompt" ? (
                  <>
                    <Mic className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>Fase 2/2 · Solicitando acceso al micrófono…</span>
                  </>
                ) : (
                  <>
                    <MicOff className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>
                      Fase 2/2 · Cronómetro oficial activo (modo práctica sin micrófono detectado)
                    </span>
                  </>
                )}
              </div>
              <span className="font-mono text-xl font-bold tabular-nums">
                {formatSecondsMmSs(countdownSeconds)}
              </span>
            </div>

            {notes.trim().length > 0 ? (
              <div className="rounded-xl border border-line bg-card p-3 text-xs text-ink">
                <span className="font-bold text-ink-muted">Tus notas de apoyo: </span>
                <span>{notes}</span>
              </div>
            ) : null}

            <div className="flex flex-wrap justify-end gap-2">
              <button
                type="button"
                onClick={finishRecordingToReview}
                className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-brand px-4 py-2 text-xs font-semibold text-on-brand hover:bg-brand-hover"
              >
                <Square className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                <span>Detener y revisar respuesta</span>
              </button>
            </div>
          </div>
        ) : null}

        {phase === "review" ? (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-xs font-bold text-ok-fg">
                <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Auto-escucha y auditoría de criterios B2</span>
              </div>

              {mode !== "mock_review" ? (
                <button
                  type="button"
                  onClick={handleStartPreparation}
                  className="inline-flex min-h-9 items-center gap-1.5 rounded-xl border border-line-strong bg-card px-3 py-1.5 text-xs font-semibold text-ink hover:bg-muted"
                >
                  <RotateCcw className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <span>
                    Volver a grabar ({task.prepSeconds}s + {task.recordSeconds}s)
                  </span>
                </button>
              ) : null}
            </div>

            {recordedAudioUrl ? (
              <div className="space-y-2 rounded-xl border border-line bg-card p-3.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-bold text-ink">Tu grabación capturada:</span>
                  <a
                    href={recordedAudioUrl}
                    download={`${task.id}-speaking.webm`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-brand underline underline-offset-2"
                  >
                    <Download className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Descargar audio</span>
                  </a>
                </div>
                {/* biome-ignore lint/a11y/useMediaCaption: User-recorded live speaking practice audio */}
                <audio
                  controls
                  src={recordedAudioUrl}
                  aria-label={`Reproducción de tu respuesta grabada en ${task.title}`}
                  className="w-full"
                />
              </div>
            ) : micStatus === "fallback_timer" ? (
              <p className="rounded-xl border border-warn-border/60 bg-warn-bg px-3.5 py-2.5 text-xs text-warn-fg">
                Práctica completada en modo cronómetro sin captura de micrófono. Evalúa tu desempeño
                con la rúbrica oficial B2 a continuación.
              </p>
            ) : null}

            {/* Rúbrica de autoevaluación persistente en speakingSelfScores */}
            <div className="rounded-xl border border-line bg-card p-4">
              <h4 className="text-xs font-bold uppercase tracking-wide text-ink">
                Rúbrica oficial de autoevaluación iTEP Speaking B2
              </h4>
              <div className="mt-2.5 space-y-2">
                {task.selfRubricChecklistEs.map((criterion, idx) => {
                  const checkId = `${notesInputId}-crit-${idx}`;
                  const isChecked = checkedIndexes.includes(idx);
                  return (
                    <div key={checkId} className="flex items-start gap-2.5">
                      <input
                        id={checkId}
                        type="checkbox"
                        checked={isChecked}
                        onChange={(e) => handleToggleCriterion(idx, e.target.checked)}
                        className="mt-0.5 h-4 w-4 shrink-0 rounded border-line-strong"
                      />
                      <label
                        htmlFor={checkId}
                        className="cursor-pointer text-xs leading-relaxed text-ink"
                      >
                        {criterion}
                      </label>
                    </div>
                  );
                })}
              </div>

              <div className="mt-3">
                <label
                  htmlFor={`${notesInputId}-review`}
                  className="block text-xs font-bold text-ink"
                >
                  Notas de autoevaluación (muletillas detectadas, conectores usados, cierre a
                  tiempo)
                </label>
                <textarea
                  id={`${notesInputId}-review`}
                  rows={2}
                  value={notes}
                  onChange={(e) => handleNotesChange(e.target.value)}
                  placeholder="Anota qué mejorarás en tu próxima toma..."
                  className="mt-1 w-full rounded-xl border border-line bg-canvas p-2.5 text-xs text-ink"
                />
              </div>
            </div>

            {mode !== "mock" ? (
              <details className="rounded-xl border border-line bg-muted/50 p-4">
                <summary className="cursor-pointer text-xs font-bold text-ink">
                  <span className="inline-flex items-center gap-2">
                    <FileText className="h-4 w-4 text-brand" aria-hidden="true" />
                    <span>Ver transcripción modelo nivel B2 sólido</span>
                  </span>
                </summary>
                <div
                  lang="en"
                  className="mt-3 rounded-lg border border-line bg-card p-4 text-sm leading-relaxed text-ink"
                >
                  {task.modelTranscriptB2}
                </div>
              </details>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function SpeakingRunner({
  section,
  mode = "study",
  onTaskRecorded,
  onCriteriaChange,
}: SpeakingRunnerProps) {
  return (
    <div className="space-y-6">
      {section.tasks.map((task) => (
        <SpeakingTaskCard
          key={task.id}
          task={task}
          mode={mode}
          onTaskRecorded={onTaskRecorded}
          onCriteriaChange={onCriteriaChange}
        />
      ))}
    </div>
  );
}
