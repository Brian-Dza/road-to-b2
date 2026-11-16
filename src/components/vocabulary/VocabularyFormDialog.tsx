import {
  AlertTriangle,
  CheckCircle2,
  ClipboardCopy,
  Loader2,
  Settings,
  Sparkles,
  X,
} from "lucide-react";
import { type FormEvent, type RefObject, useEffect, useId, useRef, useState } from "react";
import { PART_OF_SPEECH_LABELS_ES } from "@/components/vocabulary/VocabularyFlashcardDeck.tsx";
import { useProgress } from "@/context/progress-context.tsx";
import { cn } from "@/lib/utils.ts";
import {
  buildVocabularyAiPromptForClipboard,
  generateVocabularyCardWithGemini,
} from "@/lib/vocabulary-ai.ts";
import {
  type CustomVocabularyItem,
  CustomVocabularyItemSchema,
  type PartOfSpeech,
  PartOfSpeechSchema,
  type VocabCefrLevel,
  VocabCefrLevelSchema,
} from "@/schemas/vocabulary.schema.ts";

export interface VocabularyFormDialogProps {
  readonly dialogRef: RefObject<HTMLDialogElement | null>;
  readonly editingItem: CustomVocabularyItem | null;
  readonly defaultDayNumber?: number;
  readonly onOpenSettings: () => void;
}

interface FieldErrors {
  term?: string;
  meaningEs?: string;
  exampleEn?: string;
}

const ALL_DAYS: readonly number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function buildCustomItemId(term: string): string {
  const slug = term
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 28);
  const suffix = Date.now().toString(36);
  return `custom-${slug || "term"}-${suffix}`;
}

export function VocabularyFormDialog({
  dialogRef,
  editingItem,
  defaultDayNumber,
  onOpenSettings,
}: VocabularyFormDialogProps) {
  const titleId = useId();
  const termId = useId();
  const termErrId = useId();
  const ipaId = useId();
  const cefrId = useId();
  const posId = useId();
  const meaningId = useId();
  const meaningErrId = useId();
  const exampleId = useId();
  const exampleErrId = useId();
  const translationId = useId();
  const trapId = useId();
  const collocationsId = useId();

  const termInputRef = useRef<HTMLInputElement | null>(null);
  const meaningTextareaRef = useRef<HTMLTextAreaElement | null>(null);
  const exampleTextareaRef = useRef<HTMLTextAreaElement | null>(null);

  const { progress, summary, addCustomVocabularyItem, updateCustomVocabularyItem } = useProgress();

  const [term, setTerm] = useState<string>("");
  const [ipa, setIpa] = useState<string>("");
  const [cefrLevel, setCefrLevel] = useState<VocabCefrLevel>("B2");
  const [partOfSpeech, setPartOfSpeech] = useState<PartOfSpeech>("verb");
  const [meaningEs, setMeaningEs] = useState<string>("");
  const [exampleEn, setExampleEn] = useState<string>("");
  const [exampleTranslationEs, setExampleTranslationEs] = useState<string>("");
  const [b1SynonymOrTrap, setB1SynonymOrTrap] = useState<string>("");
  const [collocationsRaw, setCollocationsRaw] = useState<string>("");
  const [selectedDays, setSelectedDays] = useState<readonly number[]>([]);

  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [aiStatus, setAiStatus] = useState<{
    readonly kind: "idle" | "loading" | "success" | "error";
    readonly messageEs?: string;
  }>({ kind: "idle" });
  const [copiedPrompt, setCopiedPrompt] = useState<boolean>(false);

  // Sincroniza valores al editar o cambiar el día predeterminado
  useEffect(() => {
    if (editingItem) {
      setTerm(editingItem.term);
      setIpa(editingItem.ipa ?? "");
      setCefrLevel(editingItem.cefrLevel);
      setPartOfSpeech(editingItem.partOfSpeech);
      setMeaningEs(editingItem.meaningEs);
      setExampleEn(editingItem.exampleEn);
      setExampleTranslationEs(editingItem.exampleTranslationEs ?? "");
      setB1SynonymOrTrap(editingItem.b1SynonymOrTrap ?? "");
      setCollocationsRaw(editingItem.collocations.join(", "));
      setSelectedDays(editingItem.linkedDayNumbers);
    } else {
      setTerm("");
      setIpa("");
      setCefrLevel("B2");
      setPartOfSpeech("verb");
      setMeaningEs("");
      setExampleEn("");
      setExampleTranslationEs("");
      setB1SynonymOrTrap("");
      setCollocationsRaw("");
      setSelectedDays(defaultDayNumber ? [defaultDayNumber] : []);
    }
    setFieldErrors({});
    setAiStatus({ kind: "idle" });
    setCopiedPrompt(false);
  }, [defaultDayNumber, editingItem]);

  useEffect(() => {
    const dialogEl = dialogRef.current;
    if (!dialogEl) {
      return;
    }

    const handleClose = () => {
      dialogEl.returnValue = "";
      setFieldErrors({});
      setAiStatus({ kind: "idle" });
      setCopiedPrompt(false);
    };

    dialogEl.addEventListener("close", handleClose);
    return () => {
      dialogEl.removeEventListener("close", handleClose);
    };
  }, [dialogRef]);

  const validateSingleField = (field: keyof FieldErrors, value: string): string | undefined => {
    const trimmed = value.trim();
    if (field === "term" && trimmed.length < 1) {
      return "Ingresa la palabra, conector o colocación en inglés.";
    }
    if (field === "meaningEs" && trimmed.length < 2) {
      return "Escribe una definición breve en español para tu repaso.";
    }
    if (field === "exampleEn" && trimmed.length < 5) {
      return "Incluye una oración de ejemplo en inglés (mínimo 5 caracteres).";
    }
    return undefined;
  };

  const handleBlurField = (field: keyof FieldErrors, value: string) => {
    if (value.length === 0) {
      return;
    }
    const err = validateSingleField(field, value);
    setFieldErrors((prev) => ({ ...prev, [field]: err }));
  };

  const handleToggleDay = (dayNumber: number) => {
    setSelectedDays((prev) =>
      prev.includes(dayNumber)
        ? prev.filter((d) => d !== dayNumber)
        : [...prev, dayNumber].sort((a, b) => a - b),
    );
  };

  const handleAiAutocomplete = async () => {
    const cleanTerm = term.trim();
    if (cleanTerm.length < 2) {
      setFieldErrors((prev) => ({
        ...prev,
        term: "Escribe al menos 2 letras en el término en inglés antes de autocompletar con IA.",
      }));
      termInputRef.current?.focus();
      return;
    }

    const apiKey = progress.settings.geminiApiKey ?? "";
    if (!summary.hasGeminiKey || !apiKey.trim()) {
      setAiStatus({
        kind: "error",
        messageEs:
          "Aún no tienes una Gemini API Key configurada. Configúrala en Ajustes o usa 'Copiar prompt IA'.",
      });
      return;
    }

    setAiStatus({ kind: "loading" });
    try {
      const suggestion = await generateVocabularyCardWithGemini(
        apiKey,
        cleanTerm,
        selectedDays[0] ?? defaultDayNumber,
      );
      setIpa(suggestion.ipa);
      setPartOfSpeech(suggestion.partOfSpeech);
      setCefrLevel(suggestion.cefrLevel);
      setMeaningEs(suggestion.meaningEs);
      setExampleEn(suggestion.exampleEn);
      setExampleTranslationEs(suggestion.exampleTranslationEs);
      setB1SynonymOrTrap(suggestion.b1SynonymOrTrap);
      setCollocationsRaw(suggestion.collocations.join(", "));
      setFieldErrors({});
      setAiStatus({
        kind: "success",
        messageEs: "Ficha léxica autocompletada con Gemini IA. Revisa y guarda tu tarjeta.",
      });
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Error inesperado al consultar Gemini IA.";
      setAiStatus({ kind: "error", messageEs: msg });
    }
  };

  const handleCopyAiPrompt = async () => {
    const promptText = buildVocabularyAiPromptForClipboard(
      term,
      selectedDays[0] ?? defaultDayNumber,
    );
    try {
      await navigator.clipboard.writeText(promptText);
      setCopiedPrompt(true);
      window.setTimeout(() => setCopiedPrompt(false), 2500);
    } catch {
      setAiStatus({
        kind: "error",
        messageEs: "No se pudo acceder al portapapeles de este navegador.",
      });
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const termErr = validateSingleField("term", term);
    const meaningErr = validateSingleField("meaningEs", meaningEs);
    const exampleErr = validateSingleField("exampleEn", exampleEn);

    const nextErrors: FieldErrors = {
      term: termErr,
      meaningEs: meaningErr,
      exampleEn: exampleErr,
    };
    setFieldErrors(nextErrors);

    if (termErr) {
      termInputRef.current?.focus();
      return;
    }
    if (meaningErr) {
      meaningTextareaRef.current?.focus();
      return;
    }
    if (exampleErr) {
      exampleTextareaRef.current?.focus();
      return;
    }

    const nowIso = new Date().toISOString();
    const parsedCollocations = collocationsRaw
      .split(",")
      .map((entry) => entry.trim())
      .filter((entry) => entry.length >= 2);

    const candidate: CustomVocabularyItem = CustomVocabularyItemSchema.parse({
      id: editingItem ? editingItem.id : buildCustomItemId(term),
      source: "custom",
      createdAtIso: editingItem ? editingItem.createdAtIso : nowIso,
      updatedAtIso: nowIso,
      term: term.trim(),
      ipa: ipa.trim() ? ipa.trim() : undefined,
      partOfSpeech,
      cefrLevel,
      meaningEs: meaningEs.trim(),
      exampleEn: exampleEn.trim(),
      exampleTranslationEs: exampleTranslationEs.trim() ? exampleTranslationEs.trim() : undefined,
      b1SynonymOrTrap: b1SynonymOrTrap.trim() ? b1SynonymOrTrap.trim() : undefined,
      collocations: parsedCollocations,
      linkedDayNumbers: [...selectedDays],
    });

    if (editingItem) {
      updateCustomVocabularyItem(candidate);
    } else {
      addCustomVocabularyItem(candidate);
    }

    if (!editingItem) {
      setTerm("");
      setIpa("");
      setMeaningEs("");
      setExampleEn("");
      setExampleTranslationEs("");
      setB1SynonymOrTrap("");
      setCollocationsRaw("");
    }

    dialogRef.current?.close("saved");
  };

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      className="m-auto w-[min(95dvw,42rem)] rounded-2xl border border-line bg-card p-0 text-ink shadow-xl"
    >
      <div className="max-h-[90dvh] overflow-y-auto p-6">
        <div className="flex items-start justify-between gap-4 border-b border-line pb-4">
          <div>
            <h2 id={titleId} className="text-lg font-bold tracking-tight">
              {editingItem
                ? "Editar palabra personalizada · Byme Lenguage"
                : "Agregar palabra a Mi Banco · Byme Lenguage"}
            </h2>
            <p className="mt-1 text-xs leading-relaxed text-ink-muted">
              Crea una tarjeta léxica manual o autocomplétala con Gemini IA para integrarla en tus
              sesiones de Repetición Espaciada (SRS).
            </p>
          </div>

          <form method="dialog">
            <button
              type="submit"
              value="close"
              aria-label="Cerrar formulario de vocabulario"
              className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-xl border border-line bg-muted text-ink transition-colors hover:border-line-strong"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
        </div>

        {aiStatus.kind !== "idle" && aiStatus.messageEs ? (
          <div
            role={aiStatus.kind === "error" ? "alert" : "status"}
            className={cn(
              "mt-4 flex flex-wrap items-center justify-between gap-2 rounded-xl border px-3.5 py-2.5 text-xs font-medium",
              aiStatus.kind === "error"
                ? "border-err-border/70 bg-err-bg text-err-fg"
                : "border-ok-border/70 bg-ok-bg text-ok-fg",
            )}
          >
            <span className="inline-flex items-center gap-2">
              {aiStatus.kind === "error" ? (
                <AlertTriangle className="h-4 w-4 shrink-0" aria-hidden="true" />
              ) : (
                <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
              )}
              <span>{aiStatus.messageEs}</span>
            </span>

            {aiStatus.kind === "error" && !summary.hasGeminiKey ? (
              <button
                type="button"
                onClick={() => {
                  dialogRef.current?.close("settings");
                  onOpenSettings();
                }}
                className="inline-flex min-h-8 items-center gap-1 rounded-lg border border-line-strong bg-card px-2.5 py-1 text-[11px] font-semibold text-ink hover:bg-muted"
              >
                <Settings className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Abrir Ajustes</span>
              </button>
            ) : null}
          </div>
        ) : null}

        <form noValidate onSubmit={handleSubmit} className="mt-5 space-y-4">
          {/* Término + Asistente Híbrido IA */}
          <div>
            <label htmlFor={termId} className="block text-xs font-bold text-ink">
              Término, phrasal verb o colocación en inglés <span aria-hidden="true">*</span>
            </label>
            <div className="mt-1.5 flex flex-wrap gap-2">
              <input
                ref={termInputRef}
                id={termId}
                name="term"
                type="text"
                required
                lang="en"
                autoCorrect="off"
                autoCapitalize="none"
                spellCheck={false}
                value={term}
                aria-invalid={Boolean(fieldErrors.term)}
                aria-describedby={fieldErrors.term ? termErrId : undefined}
                onChange={(e) => {
                  setTerm(e.target.value);
                  if (fieldErrors.term) {
                    setFieldErrors((prev) => ({ ...prev, term: undefined }));
                  }
                }}
                onBlur={(e) => handleBlurField("term", e.target.value)}
                placeholder="Ej. corroborate, stem from, albeit..."
                className="min-h-11 min-w-52 flex-1 rounded-xl border border-line-strong bg-canvas px-3.5 py-2 text-sm text-ink"
              />

              <button
                type="button"
                disabled={aiStatus.kind === "loading"}
                onClick={handleAiAutocomplete}
                className="inline-flex min-h-11 items-center gap-1.5 rounded-xl border border-brand bg-info-bg px-3.5 py-2 text-xs font-semibold text-info-fg transition-colors hover:bg-card disabled:opacity-60"
              >
                {aiStatus.kind === "loading" ? (
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                ) : (
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                )}
                <span>
                  {aiStatus.kind === "loading" ? "Generando ficha…" : "Autocompletar con Gemini IA"}
                </span>
              </button>

              <button
                type="button"
                onClick={handleCopyAiPrompt}
                className="inline-flex min-h-11 items-center gap-1.5 rounded-xl border border-line-strong bg-muted px-3 py-2 text-xs font-semibold text-ink transition-colors hover:bg-canvas"
              >
                <ClipboardCopy className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{copiedPrompt ? "¡Prompt copiado!" : "Copiar prompt IA"}</span>
              </button>
            </div>
            {fieldErrors.term ? (
              <p id={termErrId} className="mt-1 text-xs font-semibold text-err-fg">
                {fieldErrors.term}
              </p>
            ) : null}
          </div>

          {/* Nivel MCER + Categoría + IPA */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div>
              <label htmlFor={cefrId} className="block text-xs font-bold text-ink">
                Nivel MCER
              </label>
              <select
                id={cefrId}
                name="cefrLevel"
                value={cefrLevel}
                onChange={(e) => setCefrLevel(VocabCefrLevelSchema.parse(e.target.value))}
                className="mt-1 min-h-11 w-full rounded-xl border border-line-strong bg-canvas px-3 py-2 text-xs font-semibold text-ink"
              >
                {VocabCefrLevelSchema.options.map((lvl) => (
                  <option key={lvl} value={lvl}>
                    Nivel {lvl}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor={posId} className="block text-xs font-bold text-ink">
                Categoría gramatical
              </label>
              <select
                id={posId}
                name="partOfSpeech"
                value={partOfSpeech}
                onChange={(e) => setPartOfSpeech(PartOfSpeechSchema.parse(e.target.value))}
                className="mt-1 min-h-11 w-full rounded-xl border border-line-strong bg-canvas px-3 py-2 text-xs font-semibold text-ink"
              >
                {PartOfSpeechSchema.options.map((pos) => (
                  <option key={pos} value={pos}>
                    {PART_OF_SPEECH_LABELS_ES[pos]}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor={ipaId} className="block text-xs font-bold text-ink">
                Fonética IPA (opcional)
              </label>
              <input
                id={ipaId}
                name="ipa"
                type="text"
                lang="en"
                autoCorrect="off"
                autoCapitalize="none"
                spellCheck={false}
                value={ipa}
                onChange={(e) => setIpa(e.target.value)}
                placeholder="/kəˈrɒb.ə.reɪt/"
                className="mt-1 min-h-11 w-full rounded-xl border border-line-strong bg-canvas px-3 py-2 font-mono text-xs text-ink"
              />
            </div>
          </div>

          {/* Significado en español */}
          <div>
            <label htmlFor={meaningId} className="block text-xs font-bold text-ink">
              Significado preciso en español <span aria-hidden="true">*</span>
            </label>
            <textarea
              ref={meaningTextareaRef}
              id={meaningId}
              name="meaningEs"
              rows={2}
              required
              value={meaningEs}
              aria-invalid={Boolean(fieldErrors.meaningEs)}
              aria-describedby={fieldErrors.meaningEs ? meaningErrId : undefined}
              onChange={(e) => {
                setMeaningEs(e.target.value);
                if (fieldErrors.meaningEs) {
                  setFieldErrors((prev) => ({ ...prev, meaningEs: undefined }));
                }
              }}
              onBlur={(e) => handleBlurField("meaningEs", e.target.value)}
              placeholder="Ej. Corroborar o confirmar una hipótesis mediante evidencia empírica..."
              className="mt-1 w-full rounded-xl border border-line-strong bg-canvas px-3.5 py-2 text-sm text-ink"
            />
            {fieldErrors.meaningEs ? (
              <p id={meaningErrId} className="mt-1 text-xs font-semibold text-err-fg">
                {fieldErrors.meaningEs}
              </p>
            ) : null}
          </div>

          {/* Oración académica en inglés */}
          <div>
            <label htmlFor={exampleId} className="block text-xs font-bold text-ink">
              Oración académica en contexto (inglés) <span aria-hidden="true">*</span>
            </label>
            <textarea
              ref={exampleTextareaRef}
              id={exampleId}
              name="exampleEn"
              rows={2}
              required
              lang="en"
              value={exampleEn}
              aria-invalid={Boolean(fieldErrors.exampleEn)}
              aria-describedby={fieldErrors.exampleEn ? exampleErrId : undefined}
              onChange={(e) => {
                setExampleEn(e.target.value);
                if (fieldErrors.exampleEn) {
                  setFieldErrors((prev) => ({ ...prev, exampleEn: undefined }));
                }
              }}
              onBlur={(e) => handleBlurField("exampleEn", e.target.value)}
              placeholder="Ej. Independent clinical trials corroborated the initial efficacy results."
              className="mt-1 w-full rounded-xl border border-line-strong bg-canvas px-3.5 py-2 text-sm text-ink"
            />
            {fieldErrors.exampleEn ? (
              <p id={exampleErrId} className="mt-1 text-xs font-semibold text-err-fg">
                {fieldErrors.exampleEn}
              </p>
            ) : null}
          </div>

          {/* Campos enriquecidos opcionales */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label htmlFor={translationId} className="block text-xs font-bold text-ink">
                Traducción del ejemplo (opcional)
              </label>
              <input
                id={translationId}
                name="exampleTranslationEs"
                type="text"
                value={exampleTranslationEs}
                onChange={(e) => setExampleTranslationEs(e.target.value)}
                placeholder="Traducción breve de apoyo..."
                className="mt-1 min-h-11 w-full rounded-xl border border-line-strong bg-canvas px-3 py-2 text-xs text-ink"
              />
            </div>

            <div>
              <label htmlFor={collocationsId} className="block text-xs font-bold text-ink">
                Colocaciones separadas por coma (opcional)
              </label>
              <input
                id={collocationsId}
                name="collocations"
                type="text"
                lang="en"
                autoCorrect="off"
                autoCapitalize="none"
                spellCheck={false}
                value={collocationsRaw}
                onChange={(e) => setCollocationsRaw(e.target.value)}
                placeholder="corroborate a claim, empirical corroboration"
                className="mt-1 min-h-11 w-full rounded-xl border border-line-strong bg-canvas px-3 py-2 text-xs text-ink"
              />
            </div>
          </div>

          <div>
            <label htmlFor={trapId} className="block text-xs font-bold text-ink">
              Puente B1 → B2 o alerta de falso amigo (opcional)
            </label>
            <input
              id={trapId}
              name="b1SynonymOrTrap"
              type="text"
              value={b1SynonymOrTrap}
              onChange={(e) => setB1SynonymOrTrap(e.target.value)}
              placeholder="Ej. Reemplaza 'prove'; evita confundir con 'collaborate'."
              className="mt-1 min-h-11 w-full rounded-xl border border-line-strong bg-canvas px-3 py-2 text-xs text-ink"
            />
          </div>

          {/* Asociación opcional a Días 1-15 */}
          <fieldset className="rounded-xl border border-line bg-muted/40 p-3.5">
            <legend className="px-1 text-xs font-bold text-ink">
              Vincular a sesiones del Bootcamp (opcional, Días 1–15)
            </legend>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {ALL_DAYS.map((dayNum) => {
                const checked = selectedDays.includes(dayNum);
                const chkId = `${titleId}-day-${dayNum}`;
                return (
                  <span key={dayNum} className="inline-flex items-center">
                    <input
                      id={chkId}
                      name="linkedDays"
                      type="checkbox"
                      checked={checked}
                      onChange={() => handleToggleDay(dayNum)}
                      className="h-4 w-4 rounded border-line-strong"
                    />
                    <label
                      htmlFor={chkId}
                      className="cursor-pointer pl-1 pr-2 py-1 text-xs font-semibold tabular-nums text-ink"
                    >
                      D{dayNum}
                    </label>
                  </span>
                );
              })}
            </div>
          </fieldset>

          <div className="flex flex-wrap justify-end gap-2.5 border-t border-line pt-4">
            <button
              type="button"
              onClick={() => dialogRef.current?.close("cancel")}
              className="inline-flex min-h-11 items-center rounded-xl border border-line-strong bg-muted px-4 py-2 text-xs font-semibold text-ink hover:bg-canvas"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="inline-flex min-h-11 items-center justify-center rounded-xl bg-brand px-5 py-2 text-xs font-semibold text-on-brand transition-colors hover:bg-brand-hover"
            >
              {editingItem ? "Guardar cambios" : "Guardar en Mi Banco"}
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
