import { CheckCircle2, Eye, Flame, Plus, RotateCcw, Sparkles, Zap } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge.tsx";
import { StatusBadge } from "@/components/ui/status-control.tsx";
import { VocabularyAudioButton } from "@/components/vocabulary/VocabularyAudioButton.tsx";
import { useProgress } from "@/context/progress-context.tsx";
import {
  buildSrsStudyQueue,
  formatDueRelativeEs,
  formatIntervalPreviewEs,
  getVocabularyItemStatus,
} from "@/lib/srs.ts";
import { cn } from "@/lib/utils.ts";
import type { PartOfSpeech, SrsRating, VocabularyItem } from "@/schemas/vocabulary.schema.ts";

export const PART_OF_SPEECH_LABELS_ES: Readonly<Record<PartOfSpeech, string>> = {
  noun: "Sustantivo",
  verb: "Verbo",
  adjective: "Adjetivo",
  adverb: "Adverbio",
  connector: "Conector",
  collocation: "Colocación",
};

function maskTermInSentence(sentence: string, term: string): string {
  const cleanTerm = term.trim();
  if (!cleanTerm || cleanTerm.length > 100) {
    return sentence;
  }
  const escaped = cleanTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`\\b${escaped}(?:s|es|ed|ing|d)?\\b`, "gi");
  const masked = sentence.replace(regex, "[ _____ ]");
  return masked === sentence ? sentence : masked;
}

const SRS_RATING_OPTIONS: readonly {
  readonly rating: SrsRating;
  readonly keyHint: string;
  readonly labelEs: string;
  readonly helperEs: string;
  readonly Icon: typeof RotateCcw;
  readonly buttonClassName: string;
}[] = [
  {
    rating: "again",
    keyHint: "1",
    labelEs: "Otra vez",
    helperEs: "Olvidada",
    Icon: RotateCcw,
    buttonClassName: "border-err-border/70 bg-err-bg text-err-fg hover:border-err-border",
  },
  {
    rating: "hard",
    keyHint: "2",
    labelEs: "Difícil",
    helperEs: "Con duda",
    Icon: Flame,
    buttonClassName: "border-warn-border/70 bg-warn-bg text-warn-fg hover:border-warn-border",
  },
  {
    rating: "good",
    keyHint: "3",
    labelEs: "Bien",
    helperEs: "Recordada",
    Icon: CheckCircle2,
    buttonClassName: "border-info-border/70 bg-info-bg text-info-fg hover:border-info-border",
  },
  {
    rating: "easy",
    keyHint: "4",
    labelEs: "Fácil",
    helperEs: "Dominio fluido",
    Icon: Zap,
    buttonClassName: "border-ok-border/70 bg-ok-bg text-ok-fg hover:border-ok-border",
  },
];

export interface VocabularyFlashcardDeckProps {
  readonly items: readonly VocabularyItem[];
  readonly deckScopeKey: string;
  readonly emptyMessageEs: string;
  readonly onOpenAddModal?: () => void;
}

export function VocabularyFlashcardDeck({
  items,
  deckScopeKey,
  emptyMessageEs,
  onOpenAddModal,
}: VocabularyFlashcardDeckProps) {
  const { progress, getVocabularySrsRecord, recordVocabularySrsReview } = useProgress();

  const itemMap = useMemo(() => {
    const map = new Map<string, VocabularyItem>();
    for (const item of items) {
      map.set(item.id, item);
    }
    return map;
  }, [items]);

  const [sessionQueueIds, setSessionQueueIds] = useState<readonly string[]>(() =>
    buildSrsStudyQueue(items, progress.vocabulary.srsRecords).map((item) => item.id),
  );
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isRevealed, setIsRevealed] = useState<boolean>(false);
  const [requeuedOnceIds, setRequeuedOnceIds] = useState<ReadonlySet<string>>(
    () => new Set<string>(),
  );
  const [reviewedCountInSession, setReviewedCountInSession] = useState<number>(0);

  // Reinicia la cola cuando cambia el alcance del mazo o se agregan/eliminan tarjetas del filtro
  const itemsSignature = useMemo(() => items.map((i) => i.id).join("|"), [items]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: intentional reset only when scope or item list changes, not on every SRS rating update
  useEffect(() => {
    const ordered = buildSrsStudyQueue(items, progress.vocabulary.srsRecords).map(
      (item) => item.id,
    );
    setSessionQueueIds(ordered);
    setCurrentIndex(0);
    setIsRevealed(false);
    setRequeuedOnceIds(new Set<string>());
    setReviewedCountInSession(0);
  }, [deckScopeKey, itemsSignature]);

  const handleRestartSession = useCallback(() => {
    const ordered = buildSrsStudyQueue(items, progress.vocabulary.srsRecords).map(
      (item) => item.id,
    );
    setSessionQueueIds(ordered);
    setCurrentIndex(0);
    setIsRevealed(false);
    setRequeuedOnceIds(new Set<string>());
    setReviewedCountInSession(0);
  }, [items, progress.vocabulary.srsRecords]);

  const activeItemId = sessionQueueIds[currentIndex];
  const activeItem = activeItemId ? itemMap.get(activeItemId) : undefined;
  const isSessionComplete = sessionQueueIds.length > 0 && currentIndex >= sessionQueueIds.length;

  const handleRateCard = useCallback(
    (rating: SrsRating) => {
      if (!activeItem) {
        return;
      }
      recordVocabularySrsReview(activeItem.id, rating);
      setReviewedCountInSession((prev) => prev + 1);
      setIsRevealed(false);

      if (rating === "again" && !requeuedOnceIds.has(activeItem.id)) {
        setRequeuedOnceIds((prev) => {
          const next = new Set(prev);
          next.add(activeItem.id);
          return next;
        });
        setSessionQueueIds((prev) => [...prev, activeItem.id]);
      }

      setCurrentIndex((prev) => prev + 1);
    },
    [activeItem, recordVocabularySrsReview, requeuedOnceIds],
  );

  useEffect(() => {
    if (!activeItem || isSessionComplete) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.isComposing || event.metaKey || event.ctrlKey || event.altKey) {
        return;
      }
      if (typeof document !== "undefined" && document.querySelector("dialog[open]")) {
        return;
      }

      const target = event.target as HTMLElement | null;
      const tagName = target?.tagName;
      if (
        tagName === "INPUT" ||
        tagName === "TEXTAREA" ||
        tagName === "SELECT" ||
        target?.isContentEditable
      ) {
        return;
      }

      if (event.code === "Space" && !isRevealed && tagName !== "BUTTON" && tagName !== "A") {
        event.preventDefault();
        setIsRevealed(true);
        return;
      }

      if (isRevealed) {
        if (event.key === "1") {
          event.preventDefault();
          handleRateCard("again");
        } else if (event.key === "2") {
          event.preventDefault();
          handleRateCard("hard");
        } else if (event.key === "3") {
          event.preventDefault();
          handleRateCard("good");
        } else if (event.key === "4") {
          event.preventDefault();
          handleRateCard("easy");
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeItem, handleRateCard, isRevealed, isSessionComplete]);

  if (items.length === 0) {
    return (
      <section className="rounded-2xl border border-dashed border-line-strong bg-card p-8 text-center">
        <p className="mx-auto max-w-[54ch] text-sm font-medium text-ink-muted">{emptyMessageEs}</p>
        {onOpenAddModal ? (
          <button
            type="button"
            onClick={onOpenAddModal}
            className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-xl bg-brand px-4 py-2 text-xs font-semibold text-on-brand transition-colors hover:bg-brand-hover"
          >
            <Plus className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Agregar palabra personalizada</span>
          </button>
        ) : null}
      </section>
    );
  }

  if (isSessionComplete || !activeItem) {
    return (
      <section className="rounded-2xl border border-ok-border/60 bg-ok-bg p-6 text-ok-fg shadow-xs sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden="true" />
              <h3 className="text-lg font-bold">¡Tanda de Repetición Espaciada completada!</h3>
            </div>
            <p className="max-w-[60ch] text-xs leading-relaxed sm:text-sm">
              Has evaluado <strong className="tabular-nums">{reviewedCountInSession}</strong>{" "}
              {reviewedCountInSession === 1 ? "intervención" : "intervenciones"} en esta sesión. Tus
              próximos intervalos quedaron guardados automáticamente en este navegador.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handleRestartSession}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-brand px-4 py-2 text-xs font-semibold text-on-brand transition-colors hover:bg-brand-hover"
            >
              <RotateCcw className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="tabular-nums">Repasar tanda nuevamente ({items.length})</span>
            </button>
            {onOpenAddModal ? (
              <button
                type="button"
                onClick={onOpenAddModal}
                className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-line-strong bg-card px-4 py-2 text-xs font-semibold text-ink transition-colors hover:bg-muted"
              >
                <Plus className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Agregar palabra propia</span>
              </button>
            ) : null}
          </div>
        </div>
      </section>
    );
  }

  const currentRecord = getVocabularySrsRecord(activeItem.id);
  const currentStatus = getVocabularyItemStatus(currentRecord);
  const clozeSentence = maskTermInSentence(activeItem.exampleEn, activeItem.term);

  return (
    <div className="space-y-4">
      {/* Barra de avance de la sesión SRS */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-line bg-card px-4 py-3">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold tabular-nums text-ink">
            Tarjeta {currentIndex + 1} de {sessionQueueIds.length}
          </span>
          <progress
            value={currentIndex + 1}
            max={sessionQueueIds.length}
            aria-label="Avance de la tanda actual de flashcards"
            className="h-2 w-28 overflow-hidden rounded-full sm:w-44"
          />
        </div>

        <span className="text-[11px] font-medium text-ink-muted">
          Atajos: <kbd className="rounded border border-line px-1.5 py-0.5 font-mono">Espacio</kbd>{" "}
          revelar · <kbd className="rounded border border-line px-1.5 py-0.5 font-mono">1–4</kbd>{" "}
          calificar
        </span>
      </div>

      {/* Tarjeta Flashcard Principal */}
      <article
        aria-labelledby={`flashcard-term-${activeItem.id}`}
        className="rounded-2xl border border-line-strong bg-card p-5 shadow-xs sm:p-7"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="default">MCER {activeItem.cefrLevel}</Badge>
            <Badge variant="neutral">{PART_OF_SPEECH_LABELS_ES[activeItem.partOfSpeech]}</Badge>
            {activeItem.source === "custom" ? (
              <Badge variant="default">
                <Sparkles className="h-3 w-3 shrink-0" aria-hidden="true" />
                <span>Mi Palabra</span>
              </Badge>
            ) : (
              <Badge variant="neutral">Banco Académico iTEP</Badge>
            )}
            {activeItem.linkedDayNumbers.map((dayNum) => (
              <Badge key={dayNum} variant="neutral" className="tabular-nums">
                Día {dayNum}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-semibold tabular-nums text-ink-muted">
              {formatDueRelativeEs(currentRecord)}
            </span>
            <StatusBadge status={currentStatus} />
          </div>
        </div>

        {/* Frente de la Flashcard */}
        <div className="mt-5 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="min-w-0">
              <h3
                id={`flashcard-term-${activeItem.id}`}
                lang="en"
                className="text-2xl font-bold tracking-tight text-ink sm:text-3xl"
              >
                {activeItem.term}
              </h3>
              {activeItem.ipa ? (
                <p lang="en" className="mt-1 font-mono text-sm text-ink-muted">
                  {activeItem.ipa}
                </p>
              ) : null}
            </div>

            {activeItem.source === "curated" ? (
              <VocabularyAudioButton audioUrl={activeItem.audio.audioUrl} term={activeItem.term} />
            ) : null}
          </div>

          {!isRevealed ? (
            <div className="rounded-xl border border-line bg-muted/60 p-4">
              <span className="text-[11px] font-bold uppercase tracking-wide text-ink-muted">
                Contexto académico de recuerdo activo:
              </span>
              <p lang="en" className="mt-1.5 max-w-[65ch] text-sm leading-relaxed text-ink">
                “{clozeSentence}”
              </p>
            </div>
          ) : null}
        </div>

        {/* Acción de revelar o Reverso completo con botones SRS */}
        {!isRevealed ? (
          <div className="mt-6 border-t border-line pt-5">
            <button
              type="button"
              onClick={() => setIsRevealed(true)}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-on-brand shadow-xs transition-colors hover:bg-brand-hover"
            >
              <Eye className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Mostrar significado y contexto</span>
            </button>
          </div>
        ) : (
          <div className="mt-6 space-y-4 border-t border-line pt-5">
            <div className="rounded-xl border border-info-border/40 bg-info-bg p-4 text-info-fg">
              <span className="text-[11px] font-bold uppercase tracking-wide">
                Significado y registro en español:
              </span>
              <p className="mt-1 text-sm font-semibold leading-relaxed">{activeItem.meaningEs}</p>
            </div>

            <div className="rounded-xl border border-line bg-muted/50 p-4">
              <span className="text-[11px] font-bold uppercase tracking-wide text-ink-muted">
                Oración académica en contexto iTEP:
              </span>
              <p
                lang="en"
                className="mt-1.5 max-w-[65ch] text-sm font-medium leading-relaxed text-ink"
              >
                “{activeItem.exampleEn}”
              </p>
              {activeItem.exampleTranslationEs ? (
                <p className="mt-1.5 max-w-[65ch] text-xs leading-relaxed text-ink-muted">
                  {activeItem.exampleTranslationEs}
                </p>
              ) : null}
            </div>

            {activeItem.collocations.length > 0 ? (
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wide text-ink-muted">
                  Colocaciones listas para Writing y Speaking:
                </span>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {activeItem.collocations.map((colloc) => (
                    <span
                      key={colloc}
                      lang="en"
                      className="rounded-lg border border-line-strong bg-canvas px-2.5 py-1 text-xs font-semibold text-ink"
                    >
                      {colloc}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            {activeItem.b1SynonymOrTrap ? (
              <div className="rounded-xl border border-warn-border/50 bg-warn-bg px-4 py-3 text-xs leading-relaxed text-warn-fg">
                <strong className="font-bold">Puente B1 → B2 / Alerta iTEP: </strong>
                {activeItem.b1SynonymOrTrap}
              </div>
            ) : null}

            <div className="border-t border-line pt-4">
              <p className="text-xs font-bold text-ink">
                ¿Qué tan sólido fue tu recuerdo activo? Programa el próximo repaso SRS:
              </p>
              <div className="mt-2.5 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {SRS_RATING_OPTIONS.map((opt) => {
                  const Icon = opt.Icon;
                  const nextIntervalLabel = formatIntervalPreviewEs(opt.rating, currentRecord);
                  return (
                    <button
                      key={opt.rating}
                      type="button"
                      onClick={() => handleRateCard(opt.rating)}
                      className={cn(
                        "flex min-h-14 flex-col items-center justify-center gap-0.5 rounded-xl border px-3 py-2 text-center transition-colors",
                        opt.buttonClassName,
                      )}
                    >
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold">
                        <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>{opt.labelEs}</span>
                      </span>
                      <span className="text-[11px] font-semibold tabular-nums">
                        {nextIntervalLabel} · {opt.helperEs}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
