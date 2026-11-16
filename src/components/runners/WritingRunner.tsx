import {
  AlertTriangle,
  Bot,
  Check,
  CheckCircle2,
  Circle,
  ClipboardCopy,
  FileText,
  KeyRound,
  Lightbulb,
  Loader2,
  Sparkles,
} from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge.tsx";
import { ExamTimer } from "@/components/ui/exam-timer.tsx";
import { useProgress } from "@/context/progress-context.tsx";
import { buildWritingAiPrompt, countWords, evaluateWritingWithGemini } from "@/lib/ai-evaluator.ts";
import { cn } from "@/lib/utils.ts";
import type { WritingSection, WritingTaskItem } from "@/schemas/curriculum.schema.ts";
import type { GeminiEvaluation } from "@/schemas/progress.schema.ts";

export interface WritingRunnerProps {
  readonly section: WritingSection;
  readonly mode?: "study" | "mock" | "mock_review";
  readonly externalTexts?: Readonly<Record<string, string>>;
  readonly onExternalTextChange?: (taskId: string, text: string) => void;
  readonly onOpenSettings?: () => void;
}

interface WritingTaskCardProps {
  readonly task: WritingTaskItem;
  readonly mode: "study" | "mock" | "mock_review";
  readonly externalText?: string;
  readonly onExternalTextChange?: (taskId: string, text: string) => void;
  readonly onOpenSettings?: () => void;
}

async function copyTextToClipboard(text: string): Promise<boolean> {
  if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fallback below
    }
  }
  if (typeof document === "undefined") {
    return false;
  }
  try {
    const helper = document.createElement("textarea");
    helper.value = text;
    helper.style.position = "fixed";
    helper.style.opacity = "0";
    document.body.appendChild(helper);
    helper.select();
    const ok = document.execCommand("copy");
    helper.remove();
    return ok;
  } catch {
    return false;
  }
}

function WritingTaskCard({
  task,
  mode,
  externalText,
  onExternalTextChange,
  onOpenSettings,
}: WritingTaskCardProps) {
  const textareaId = useId();
  const { progress, summary, saveWritingDraft } = useProgress();
  const existingDraft = progress.writingDrafts[task.id];

  const [text, setText] = useState<string>(() => externalText ?? existingDraft?.text ?? "");
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(
    () => existingDraft?.elapsedSeconds ?? 0,
  );
  const [autoStartSignal, setAutoStartSignal] = useState<number>(0);
  const [checkedRubricIndexes, setCheckedRubricIndexes] = useState<Record<number, boolean>>({});
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");
  const [aiStatus, setAiStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [aiError, setAiError] = useState<string>("");
  const [evaluation, setEvaluation] = useState<GeminiEvaluation | undefined>(
    () => existingDraft?.lastEvaluation,
  );

  const latestTextRef = useRef<string>(text);
  const latestEvalRef = useRef<GeminiEvaluation | undefined>(evaluation);

  useEffect(() => {
    latestTextRef.current = text;
    latestEvalRef.current = evaluation;
  }, [evaluation, text]);

  const wordCount = countWords(text);
  const modelWordCount = countWords(task.modelAnswerB2);

  const persistDraft = (
    nextText: string,
    nextElapsed: number,
    nextEval: GeminiEvaluation | undefined,
  ) => {
    saveWritingDraft({
      taskId: task.id,
      text: nextText,
      wordCount: countWords(nextText),
      elapsedSeconds: Math.max(0, Math.floor(nextElapsed)),
      updatedAtIso: new Date().toISOString(),
      ...(nextEval ? { lastEvaluation: nextEval } : {}),
    });
  };

  const handleTextChange = (nextValue: string) => {
    if (mode === "mock_review") {
      return;
    }
    setText(nextValue);
    if (mode === "study") {
      setAutoStartSignal((prev) => prev + 1);
    }
    onExternalTextChange?.(task.id, nextValue);
    persistDraft(nextValue, elapsedSeconds, evaluation);
  };

  const handleElapsedUpdate = (nextElapsed: number) => {
    setElapsedSeconds(nextElapsed);
    if (nextElapsed % 5 === 0 || nextElapsed === task.timeLimitSeconds) {
      persistDraft(latestTextRef.current, nextElapsed, latestEvalRef.current);
    }
  };

  const handleCopyPrompt = async () => {
    const promptPayload = buildWritingAiPrompt(task, text, wordCount);
    const copied = await copyTextToClipboard(promptPayload);
    setCopyStatus(copied ? "copied" : "error");
    window.setTimeout(() => {
      setCopyStatus("idle");
    }, 3500);
  };

  const handleGeminiEvaluate = async () => {
    const apiKey = progress.settings.geminiApiKey;
    if (!apiKey || !summary.hasGeminiKey) {
      onOpenSettings?.();
      return;
    }
    setAiStatus("loading");
    setAiError("");
    try {
      const result = await evaluateWritingWithGemini(apiKey, task, text);
      setEvaluation(result);
      setAiStatus("success");
      persistDraft(text, elapsedSeconds, result);
    } catch (err) {
      setAiStatus("error");
      setAiError(
        err instanceof Error ? err.message : "No fue posible completar la evaluación con Gemini.",
      );
    }
  };

  const isOptimalWords = wordCount >= task.minWords && wordCount <= task.maxWords;
  const isUnderWords = wordCount > 0 && wordCount < task.minWords;
  const isOverWords = wordCount > task.maxWords;

  let wordRangeLabelEs = `Sin iniciar (meta oficial: ${task.minWords}–${task.maxWords} palabras)`;
  let WordIcon = Circle;
  let wordBadgeClass = "border-line bg-muted text-ink-muted";

  if (isOptimalWords) {
    wordRangeLabelEs = `En zona óptima B2 (${task.minWords}–${task.maxWords} palabras)`;
    WordIcon = CheckCircle2;
    wordBadgeClass = "border-ok-border/70 bg-ok-bg text-ok-fg";
  } else if (isUnderWords) {
    wordRangeLabelEs = `Bajo el mínimo (${task.minWords - wordCount} palabras para ${task.minWords})`;
    WordIcon = AlertTriangle;
    wordBadgeClass = "border-warn-border/70 bg-warn-bg text-warn-fg";
  } else if (isOverWords) {
    wordRangeLabelEs = `Sobre el rango recomendado (máx. sugerido ${task.maxWords})`;
    WordIcon = AlertTriangle;
    wordBadgeClass = "border-warn-border/70 bg-warn-bg text-warn-fg";
  }

  return (
    <section className="rounded-2xl border border-line bg-card p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="default">
            {task.part === "part1_note"
              ? "Part 1 · Nota Formal Breve (05:00 · 50–75 palabras)"
              : "Part 2 · Ensayo Argumentativo Académico (20:00 · 175–225 palabras)"}
          </Badge>
          <Badge variant="neutral">Sin corrector ortográfico</Badge>
        </div>
        <span className="text-xs font-semibold text-ink-muted tabular-nums">
          Meta: {task.minWords}–{task.maxWords} palabras
        </span>
      </div>

      <h3 lang="en" className="mt-3 text-base font-bold text-ink">
        {task.title}
      </h3>

      <div
        lang="en"
        className="mt-2.5 rounded-xl border border-line bg-canvas p-4 text-sm leading-relaxed text-ink"
      >
        {task.prompt}
      </div>

      {mode === "study" ? (
        <div className="mt-4 space-y-3">
          <ExamTimer
            durationSeconds={task.timeLimitSeconds}
            label={
              task.part === "part1_note"
                ? "Reloj Writing Part 1 (05:00)"
                : "Reloj Writing Part 2 (20:00)"
            }
            mode="study"
            externalAutoStartSignal={autoStartSignal}
            initialElapsedSeconds={Math.min(elapsedSeconds, task.timeLimitSeconds - 1)}
            onElapsedChange={handleElapsedUpdate}
          />

          <div className="rounded-xl border border-info-border/40 bg-info-bg p-3.5 text-xs leading-relaxed text-info-fg">
            <div className="flex items-start gap-2">
              <Lightbulb className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <p>
                <strong className="font-bold">Estrategia B2: </strong>
                {task.strategyGuideEs}
              </p>
            </div>
            <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
              <span className="font-bold">Conectores sugeridos:</span>
              {task.recommendedConnectors.map((connector) => (
                <span
                  key={connector}
                  lang="en"
                  className="rounded-md border border-info-border/40 bg-card px-2 py-0.5 font-mono text-xs font-semibold text-ink"
                >
                  {connector}
                </span>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      {/* Editor realista sin autocorrector */}
      <div className="mt-4">
        <label htmlFor={textareaId} className="block text-xs font-bold text-ink">
          {task.part === "part1_note"
            ? "Redacción oficial Writing Part 1 (inglés sin corrector)"
            : "Redacción oficial Writing Part 2 (inglés sin corrector)"}
        </label>
        <textarea
          id={textareaId}
          lang="en"
          value={text}
          readOnly={mode === "mock_review"}
          onFocus={() => {
            if (mode === "study") {
              setAutoStartSignal((prev) => prev + 1);
            }
          }}
          onChange={(e) => handleTextChange(e.target.value)}
          spellCheck={false}
          autoCorrect="off"
          autoCapitalize="off"
          autoComplete="off"
          data-gramm="false"
          data-gramm_editor="false"
          data-enable-grammarly="false"
          rows={task.part === "part1_note" ? 6 : 12}
          placeholder="Write your response here under real iTEP exam conditions (spellcheck disabled)..."
          className="mt-1.5 w-full rounded-xl border border-line-strong bg-canvas p-4 text-sm leading-relaxed text-ink focus:border-brand"
        />

        {/* Barra inferior fija de conteo de palabras en vivo */}
        <div className="mt-2 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-line bg-muted px-3.5 py-2.5">
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm font-bold tabular-nums text-ink">
              {wordCount} {wordCount === 1 ? "palabra" : "palabras"}
            </span>
            <span
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold tabular-nums",
                wordBadgeClass,
              )}
            >
              <WordIcon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>{wordRangeLabelEs}</span>
            </span>
          </div>
          <span className="text-xs text-ink-muted">Borrador guardado automáticamente</span>
        </div>
      </div>

      {/* Herramientas de autoevaluación, IA y respuesta modelo (solo en estudio o revisión post-mock) */}
      {mode !== "mock" ? (
        <div className="mt-5 space-y-4 border-t border-line pt-4">
          {/* Acciones de Evaluación IA */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={handleCopyPrompt}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-brand px-4 py-2 text-xs font-semibold text-on-brand transition-colors hover:bg-brand-hover"
            >
              {copyStatus === "copied" ? (
                <>
                  <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>¡Copiado con rúbrica B2!</span>
                </>
              ) : (
                <>
                  <ClipboardCopy className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Copiar para evaluar con IA</span>
                </>
              )}
            </button>

            {summary.hasGeminiKey ? (
              <button
                type="button"
                disabled={aiStatus === "loading"}
                onClick={handleGeminiEvaluate}
                className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-brand bg-info-bg px-4 py-2 text-xs font-semibold text-info-fg transition-colors hover:bg-card disabled:opacity-60"
              >
                {aiStatus === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 shrink-0 animate-spin" aria-hidden="true" />
                    <span>Evaluando con Gemini 2.5 Flash…</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>Evaluar con Gemini B2</span>
                  </>
                )}
              </button>
            ) : (
              <button
                type="button"
                onClick={() => onOpenSettings?.()}
                className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-line-strong bg-muted px-3.5 py-2 text-xs font-semibold text-ink transition-colors hover:bg-canvas"
              >
                <KeyRound className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span>Evaluar con Gemini B2 (configurar API Key)</span>
              </button>
            )}

            {copyStatus === "copied" ? (
              <output className="text-xs font-semibold text-ok-fg">
                Prompt estructurado copiado al portapapeles. Pégalo en ChatGPT, Claude o Gemini.
              </output>
            ) : null}
            {copyStatus === "error" ? (
              <p role="alert" className="text-xs font-semibold text-err-fg">
                Tu navegador bloqueó el acceso directo al portapapeles.
              </p>
            ) : null}
          </div>

          {aiStatus === "error" && aiError ? (
            <div
              role="alert"
              className="flex items-start gap-2 rounded-xl border border-err-border/70 bg-err-bg p-3.5 text-xs font-medium text-err-fg"
            >
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{aiError}</span>
            </div>
          ) : null}

          {/* Reporte estructurado de Gemini */}
          {evaluation ? (
            <div className="space-y-3 rounded-xl border border-info-border/50 bg-muted/60 p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Bot className="h-4 w-4 text-brand" aria-hidden="true" />
                  <h4 className="text-sm font-bold text-ink">
                    Dictamen Diagnóstico Gemini iTEP Writing
                  </h4>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant={evaluation.estimatedItepScore >= 3.5 ? "success" : "warning"}
                    className="tabular-nums"
                  >
                    Puntaje estimado: {evaluation.estimatedItepScore.toFixed(1)} / 6.0
                  </Badge>
                  <Badge variant="default">{evaluation.cefrEstimate}</Badge>
                </div>
              </div>

              <p className="text-xs leading-relaxed text-ink">{evaluation.overallFeedbackEs}</p>

              {evaluation.strengthsEs.length > 0 ? (
                <div>
                  <p className="text-xs font-bold text-ok-fg">Fortalezas detectadas:</p>
                  <ul className="mt-1 list-disc space-y-1 pl-5 text-xs text-ink">
                    {evaluation.strengthsEs.map((s) => (
                      <li key={`${task.id}-str-${s}`}>{s}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {evaluation.grammarCorrections.length > 0 ? (
                <div>
                  <p className="text-xs font-bold text-err-fg">
                    Correcciones gramaticales y ortográficas:
                  </p>
                  <div className="mt-1.5 space-y-2">
                    {evaluation.grammarCorrections.map((corr) => (
                      <div
                        key={`${task.id}-corr-${corr.original}-${corr.corrected}`}
                        className="rounded-lg border border-line bg-card p-2.5 text-xs"
                      >
                        <p>
                          <span lang="en" className="line-through text-err-fg">
                            {corr.original}
                          </span>{" "}
                          →{" "}
                          <strong lang="en" className="text-ok-fg">
                            {corr.corrected}
                          </strong>
                        </p>
                        <p className="mt-1 text-ink-muted">{corr.explanationEs}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {evaluation.vocabularyUpgradesB2.length > 0 ? (
                <div>
                  <p className="text-xs font-bold text-info-fg">
                    Mejoras léxicas y sintácticas B2:
                  </p>
                  <ul className="mt-1 list-disc space-y-1 pl-5 text-xs text-ink">
                    {evaluation.vocabularyUpgradesB2.map((up) => (
                      <li key={`${task.id}-up-${up}`}>{up}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          ) : null}

          {/* Checklist de autoevaluación B2 */}
          <div className="rounded-xl border border-line bg-canvas p-4">
            <h4 className="text-xs font-bold uppercase tracking-wide text-ink">
              Rúbrica de autoverificación B2 antes de cerrar la tarea
            </h4>
            <div className="mt-2.5 space-y-2">
              {task.b2RubricChecklistEs.map((criterion, idx) => {
                const critId = `${textareaId}-rubric-${idx}`;
                const checked = Boolean(checkedRubricIndexes[idx]);
                return (
                  <div key={critId} className="flex items-start gap-2.5">
                    <input
                      id={critId}
                      type="checkbox"
                      checked={checked}
                      onChange={(e) =>
                        setCheckedRubricIndexes((prev) => ({
                          ...prev,
                          [idx]: e.target.checked,
                        }))
                      }
                      className="mt-0.5 h-4 w-4 shrink-0 rounded border-line-strong"
                    />
                    <label
                      htmlFor={critId}
                      className="cursor-pointer text-xs leading-relaxed text-ink"
                    >
                      {criterion}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Respuesta modelo B2 desplegable */}
          <details className="rounded-xl border border-line bg-muted/50 p-4">
            <summary className="cursor-pointer text-xs font-bold text-ink">
              <span className="inline-flex items-center gap-2">
                <FileText className="h-4 w-4 text-brand" aria-hidden="true" />
                <span>Ver respuesta modelo calibrada MCER B2 ({modelWordCount} palabras)</span>
              </span>
            </summary>
            <div
              lang="en"
              className="mt-3 whitespace-pre-line rounded-lg border border-line bg-card p-4 text-sm leading-relaxed text-ink"
            >
              {task.modelAnswerB2}
            </div>
          </details>
        </div>
      ) : null}
    </section>
  );
}

export function WritingRunner({
  section,
  mode = "study",
  externalTexts,
  onExternalTextChange,
  onOpenSettings,
}: WritingRunnerProps) {
  return (
    <div className="space-y-6">
      {section.tasks.map((task) => (
        <WritingTaskCard
          key={task.id}
          task={task}
          mode={mode}
          externalText={externalTexts?.[task.id]}
          onExternalTextChange={onExternalTextChange}
          onOpenSettings={onOpenSettings}
        />
      ))}
    </div>
  );
}
