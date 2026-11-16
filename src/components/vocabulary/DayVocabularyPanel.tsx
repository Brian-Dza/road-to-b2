import { ArrowRight, BookMarked, Layers, Pencil, Plus, Sparkles, Trash2 } from "lucide-react";
import { useCallback, useMemo, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge.tsx";
import { StatusBadge } from "@/components/ui/status-control.tsx";
import { VocabularyAudioButton } from "@/components/vocabulary/VocabularyAudioButton.tsx";
import {
  PART_OF_SPEECH_LABELS_ES,
  VocabularyFlashcardDeck,
} from "@/components/vocabulary/VocabularyFlashcardDeck.tsx";
import { VocabularyFormDialog } from "@/components/vocabulary/VocabularyFormDialog.tsx";
import { useProgress } from "@/context/progress-context.tsx";
import { curriculumRegistry } from "@/data/curriculum-registry.ts";
import { formatDueRelativeEs, getVocabularyItemStatus, isVocabularyRecordDue } from "@/lib/srs.ts";
import { cn } from "@/lib/utils.ts";
import type { RoadmapDay } from "@/schemas/curriculum.schema.ts";
import type { CustomVocabularyItem, VocabularyItem } from "@/schemas/vocabulary.schema.ts";

export interface DayVocabularyPanelProps {
  readonly day: RoadmapDay;
  readonly onOpenSettings: () => void;
}

export function DayVocabularyPanel({ day, onOpenSettings }: DayVocabularyPanelProps) {
  const formDialogRef = useRef<HTMLDialogElement | null>(null);
  const { progress, getVocabularySrsRecord, deleteCustomVocabularyItem } = useProgress();

  const [subView, setSubView] = useState<"flashcards" | "list">("flashcards");
  const [editingItem, setEditingItem] = useState<CustomVocabularyItem | null>(null);

  const dayItems = useMemo<readonly VocabularyItem[]>(() => {
    const customForDay = progress.vocabulary.customItems.filter((item) =>
      item.linkedDayNumbers.includes(day.dayNumber),
    );
    const curatedForDay = curriculumRegistry.coreVocabulary.filter((item) =>
      item.linkedDayNumbers.includes(day.dayNumber),
    );
    return [...customForDay, ...curatedForDay];
  }, [day.dayNumber, progress.vocabulary.customItems]);

  const stats = useMemo(() => {
    let mastered = 0;
    let dueNow = 0;
    for (const item of dayItems) {
      const rec = getVocabularySrsRecord(item.id);
      if (getVocabularyItemStatus(rec) === "mastered") {
        mastered += 1;
      }
      if (isVocabularyRecordDue(rec)) {
        dueNow += 1;
      }
    }
    return { mastered, dueNow, total: dayItems.length };
  }, [dayItems, getVocabularySrsRecord]);

  const handleOpenCreate = useCallback(() => {
    setEditingItem(null);
    const dialogEl = formDialogRef.current;
    if (dialogEl && !dialogEl.open) {
      dialogEl.showModal();
    }
  }, []);

  const handleOpenEdit = useCallback((item: CustomVocabularyItem) => {
    setEditingItem(item);
    const dialogEl = formDialogRef.current;
    if (dialogEl && !dialogEl.open) {
      dialogEl.showModal();
    }
  }, []);

  return (
    <div className="space-y-6">
      {/* Cabecera del módulo opcional del día */}
      <section className="rounded-2xl border border-line bg-card p-5 shadow-xs">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-[66ch]">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="default">
                <BookMarked className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                <span>Vocabulario Inteligente · Byme Lenguage</span>
              </Badge>
              <Badge variant="neutral">Pestaña Opcional · Día {day.dayNumber}</Badge>
              <Badge variant="success" className="tabular-nums">
                {stats.mastered} / {stats.total} dominadas
              </Badge>
              <Badge variant="warning" className="tabular-nums">
                {stats.dueNow} para hoy
              </Badge>
            </div>

            <h2 className="mt-2.5 text-lg font-bold text-ink">
              Refuerzo Léxico en Contexto y Repetición Espaciada (Día {day.dayNumber})
            </h2>
            <p className="mt-1 text-xs leading-relaxed text-ink-muted sm:text-sm">
              Practica con flashcards SRS los términos y colocaciones académicas clave vinculados a{" "}
              <strong lang="en" className="text-ink">
                {day.title}
              </strong>
              , o captura expresiones nuevas detectadas en Reading, Listening y Writing sin afectar
              el progreso oficial de tus 5 habilidades iTEP.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handleOpenCreate}
              className="inline-flex min-h-10 items-center gap-1.5 rounded-xl bg-brand px-3.5 py-2 text-xs font-semibold text-on-brand transition-colors hover:bg-brand-hover"
            >
              <Plus className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Agregar palabra al Día {day.dayNumber}</span>
            </button>

            <a
              href={`#/vocabulary/day/${day.dayNumber}`}
              className="inline-flex min-h-10 items-center gap-1.5 rounded-xl border border-line-strong bg-muted px-3.5 py-2 text-xs font-semibold text-ink transition-colors hover:bg-canvas"
            >
              <span>Abrir banco global A1–C2</span>
              <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Selector interno entre Flashcards del Día y Lista de Tarjetas */}
        <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-line pt-4">
          <button
            type="button"
            aria-pressed={subView === "flashcards"}
            onClick={() => setSubView("flashcards")}
            className={cn(
              "inline-flex min-h-10 items-center gap-1.5 rounded-xl border px-3.5 py-1.5 text-xs font-semibold transition-colors",
              subView === "flashcards"
                ? "border-brand bg-info-bg text-info-fg"
                : "border-line bg-muted text-ink hover:border-line-strong",
            )}
          >
            <BookMarked className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span className="tabular-nums">Sesión Flashcards SRS ({dayItems.length})</span>
          </button>

          <button
            type="button"
            aria-pressed={subView === "list"}
            onClick={() => setSubView("list")}
            className={cn(
              "inline-flex min-h-10 items-center gap-1.5 rounded-xl border px-3.5 py-1.5 text-xs font-semibold transition-colors",
              subView === "list"
                ? "border-brand bg-info-bg text-info-fg"
                : "border-line bg-muted text-ink hover:border-line-strong",
            )}
          >
            <Layers className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span className="tabular-nums">Ver fichas completas ({dayItems.length})</span>
          </button>
        </div>
      </section>

      {subView === "flashcards" ? (
        <VocabularyFlashcardDeck
          items={dayItems}
          deckScopeKey={`day-${day.dayNumber}`}
          emptyMessageEs={`Todavía no hay tarjetas asignadas al Día ${day.dayNumber}. Agrega tu primera palabra personalizada.`}
          onOpenAddModal={handleOpenCreate}
        />
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {dayItems.map((item) => {
            const rec = getVocabularySrsRecord(item.id);
            const st = getVocabularyItemStatus(rec);
            return (
              <article
                key={item.id}
                aria-labelledby={`day-vocab-card-${item.id}`}
                className="flex min-w-0 flex-col justify-between rounded-2xl border border-line bg-card p-5 shadow-xs"
              >
                <div className="min-w-0 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <Badge variant="default">MCER {item.cefrLevel}</Badge>
                      <Badge variant="neutral">{PART_OF_SPEECH_LABELS_ES[item.partOfSpeech]}</Badge>
                      {item.source === "custom" ? (
                        <Badge variant="default">
                          <Sparkles className="h-3 w-3 shrink-0" aria-hidden="true" />
                          <span>Mi Palabra</span>
                        </Badge>
                      ) : null}
                    </div>
                    <StatusBadge status={st} />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="min-w-0">
                      <h3
                        id={`day-vocab-card-${item.id}`}
                        lang="en"
                        className="text-lg font-bold text-ink"
                      >
                        {item.term}
                      </h3>
                      {item.ipa ? (
                        <span lang="en" className="font-mono text-xs text-ink-muted">
                          {item.ipa}
                        </span>
                      ) : null}
                    </div>

                    {item.source === "curated" ? (
                      <VocabularyAudioButton
                        audioUrl={item.audio.audioUrl}
                        term={item.term}
                        compact
                      />
                    ) : null}
                  </div>

                  <p className="text-xs font-semibold leading-relaxed text-ink">{item.meaningEs}</p>

                  <div className="rounded-xl border border-line bg-muted/50 p-3 text-xs leading-relaxed">
                    <p lang="en" className="font-medium text-ink">
                      “{item.exampleEn}”
                    </p>
                    {item.exampleTranslationEs ? (
                      <p className="mt-1 text-ink-muted">{item.exampleTranslationEs}</p>
                    ) : null}
                  </div>

                  {item.b1SynonymOrTrap ? (
                    <p className="text-[11px] leading-relaxed text-ink-muted">
                      <strong className="text-ink">Nota B2:</strong> {item.b1SynonymOrTrap}
                    </p>
                  ) : null}
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-line pt-3">
                  <span className="text-[11px] font-semibold tabular-nums text-ink-muted">
                    {formatDueRelativeEs(rec)}
                  </span>

                  {item.source === "custom" ? (
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => handleOpenEdit(item)}
                        className="inline-flex min-h-8 items-center gap-1 rounded-lg border border-line-strong bg-muted px-2.5 py-1 text-[11px] font-semibold text-ink hover:bg-canvas"
                      >
                        <Pencil className="h-3 w-3" aria-hidden="true" />
                        <span>Editar</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => deleteCustomVocabularyItem(item.id)}
                        className="inline-flex min-h-8 items-center gap-1 rounded-lg border border-err-border/70 bg-err-bg px-2.5 py-1 text-[11px] font-semibold text-err-fg hover:border-err-border"
                      >
                        <Trash2 className="h-3 w-3" aria-hidden="true" />
                        <span>Eliminar</span>
                      </button>
                    </div>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      )}

      <VocabularyFormDialog
        dialogRef={formDialogRef}
        editingItem={editingItem}
        defaultDayNumber={day.dayNumber}
        onOpenSettings={onOpenSettings}
      />
    </div>
  );
}
