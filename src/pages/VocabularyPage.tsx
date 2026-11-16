import {
  BookMarked,
  CheckCircle2,
  Clock,
  Layers,
  Pencil,
  Plus,
  RotateCcw,
  Search,
  Sparkles,
  Trash2,
} from "lucide-react";
import {
  type KeyboardEvent,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
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
import type { StudyStatus } from "@/schemas/curriculum.schema.ts";
import {
  type CustomVocabularyItem,
  type VocabCefrLevel,
  VocabCefrLevelSchema,
  type VocabularyItem,
} from "@/schemas/vocabulary.schema.ts";

type VocabularyHubTab = "srs_session" | "bank_explorer";
type DeckScopePreset = "due_today" | "all" | "custom_only" | "by_cefr" | "by_day";

const HUB_TABS: readonly {
  readonly id: VocabularyHubTab;
  readonly labelEs: string;
  readonly Icon: typeof BookMarked;
}[] = [
  { id: "srs_session", labelEs: "Sesión Activa Flashcards SRS", Icon: BookMarked },
  { id: "bank_explorer", labelEs: "Explorador y Gestión del Banco", Icon: Layers },
];

const ALL_DAYS: readonly number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

export interface VocabularyPageProps {
  readonly initialDayFilter?: number;
  readonly onOpenSettings: () => void;
}

export function VocabularyPage({ initialDayFilter, onOpenSettings }: VocabularyPageProps) {
  const baseTabId = useId();
  const searchInputId = useId();
  const cefrFilterId = useId();
  const statusFilterId = useId();
  const originFilterId = useId();
  const dayFilterId = useId();
  const deckPresetId = useId();
  const deckCefrId = useId();
  const deckDayId = useId();

  const formDialogRef = useRef<HTMLDialogElement | null>(null);
  const tabButtonRefs = useRef<Record<VocabularyHubTab, HTMLButtonElement | null>>({
    srs_session: null,
    bank_explorer: null,
  });

  const {
    progress,
    getVocabularySrsRecord,
    recordVocabularySrsReview,
    deleteCustomVocabularyItem,
  } = useProgress();

  const [activeTab, setActiveTab] = useState<VocabularyHubTab>("srs_session");
  const [editingItem, setEditingItem] = useState<CustomVocabularyItem | null>(null);

  // Controles de alcance para la Sesión SRS
  const [deckPreset, setDeckPreset] = useState<DeckScopePreset>(() =>
    initialDayFilter ? "by_day" : "due_today",
  );
  const [deckCefr, setDeckCefr] = useState<VocabCefrLevel>("B2");
  const [deckDay, setDeckDay] = useState<number>(() => initialDayFilter ?? 1);

  // Controles de búsqueda y filtrado del Explorador
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [cefrFilter, setCefrFilter] = useState<"ALL" | VocabCefrLevel>("ALL");
  const [statusFilter, setStatusFilter] = useState<"ALL" | StudyStatus>("ALL");
  const [originFilter, setOriginFilter] = useState<"ALL" | "curated" | "custom">("ALL");
  const [dayFilter, setDayFilter] = useState<number>(initialDayFilter ?? 0);

  useEffect(() => {
    if (initialDayFilter && initialDayFilter >= 1 && initialDayFilter <= 15) {
      setDeckPreset("by_day");
      setDeckDay(initialDayFilter);
      setDayFilter(initialDayFilter);
    }
  }, [initialDayFilter]);

  useEffect(() => {
    tabButtonRefs.current[activeTab]?.scrollIntoView({
      block: "nearest",
      inline: "nearest",
    });
  }, [activeTab]);

  const allVocabularyItems = useMemo<readonly VocabularyItem[]>(() => {
    return [...progress.vocabulary.customItems, ...curriculumRegistry.coreVocabulary];
  }, [progress.vocabulary.customItems]);

  const metrics = useMemo(() => {
    let dueCount = 0;
    let inReviewCount = 0;
    let masteredCount = 0;
    const nowMs = Date.now();

    for (const item of allVocabularyItems) {
      const rec = getVocabularySrsRecord(item.id);
      const st = getVocabularyItemStatus(rec);
      if (st === "mastered") {
        masteredCount += 1;
      } else if (st === "in_review") {
        inReviewCount += 1;
      }
      if (isVocabularyRecordDue(rec, nowMs)) {
        dueCount += 1;
      }
    }

    return {
      totalCount: allVocabularyItems.length,
      customCount: progress.vocabulary.customItems.length,
      dueCount,
      inReviewCount,
      masteredCount,
    };
  }, [allVocabularyItems, getVocabularySrsRecord, progress.vocabulary.customItems.length]);

  const sessionDeckItems = useMemo<readonly VocabularyItem[]>(() => {
    switch (deckPreset) {
      case "due_today": {
        const due = allVocabularyItems.filter((item) =>
          isVocabularyRecordDue(getVocabularySrsRecord(item.id)),
        );
        return due.length > 0 ? due : allVocabularyItems;
      }
      case "all":
        return allVocabularyItems;
      case "custom_only":
        return allVocabularyItems.filter((item) => item.source === "custom");
      case "by_cefr":
        return allVocabularyItems.filter((item) => item.cefrLevel === deckCefr);
      case "by_day":
        return allVocabularyItems.filter((item) => item.linkedDayNumbers.includes(deckDay));
    }
  }, [allVocabularyItems, deckCefr, deckDay, deckPreset, getVocabularySrsRecord]);

  const filteredExplorerItems = useMemo<readonly VocabularyItem[]>(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    return allVocabularyItems.filter((item) => {
      if (cefrFilter !== "ALL" && item.cefrLevel !== cefrFilter) {
        return false;
      }
      if (originFilter !== "ALL" && item.source !== originFilter) {
        return false;
      }
      if (dayFilter > 0 && !item.linkedDayNumbers.includes(dayFilter)) {
        return false;
      }
      if (statusFilter !== "ALL") {
        const st = getVocabularyItemStatus(getVocabularySrsRecord(item.id));
        if (st !== statusFilter) {
          return false;
        }
      }
      if (normalizedQuery.length > 0) {
        const haystack = [item.term, item.meaningEs, item.exampleEn, ...item.collocations]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(normalizedQuery)) {
          return false;
        }
      }
      return true;
    });
  }, [
    allVocabularyItems,
    cefrFilter,
    dayFilter,
    getVocabularySrsRecord,
    originFilter,
    searchQuery,
    statusFilter,
  ]);

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

  const handleTabKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const currentIndex = HUB_TABS.findIndex((t) => t.id === activeTab);
    if (currentIndex === -1) {
      return;
    }

    let nextIndex = currentIndex;
    if (event.key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % HUB_TABS.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (currentIndex - 1 + HUB_TABS.length) % HUB_TABS.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = HUB_TABS.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    const targetTab = HUB_TABS[nextIndex];
    if (targetTab) {
      setActiveTab(targetTab.id);
      tabButtonRefs.current[targetTab.id]?.focus();
    }
  };

  const deckScopeKey = `${deckPreset}-${deckCefr}-${deckDay}`;

  return (
    <div className="space-y-6">
      {/* Encabezado Principal de Vocabulario Inteligente · Byme Lenguage */}
      <header className="rounded-2xl border border-line bg-card p-6 shadow-xs">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-[68ch]">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="default">
                <BookMarked className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                <span>Byme Lenguage · Repetición Espaciada (SRS)</span>
              </Badge>
              <Badge variant="success">Escala Completa MCER A1–C2</Badge>
              <Badge variant="neutral">Audio Neural Local (.mp3) + IPA</Badge>
            </div>

            <h1 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Vocabulario Inteligente · Byme Lenguage
            </h1>
            <p className="mt-1.5 text-xs leading-relaxed text-ink-muted sm:text-sm">
              Consolida léxico académico de alto rendimiento para iTEP Academic-Plus mediante
              flashcards activas con intervalos inteligentes, pronunciación neuronal y tu propio
              banco personal asistido por IA.
            </p>
          </div>

          <button
            type="button"
            onClick={handleOpenCreate}
            className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-xs font-semibold text-on-brand shadow-xs transition-colors hover:bg-brand-hover"
          >
            <Plus className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Agregar Palabra Propia</span>
          </button>
        </div>

        {/* Franja de 4 métricas SRS */}
        <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
          <div className="rounded-xl border border-line bg-muted/60 p-3.5">
            <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-ink-muted">
              <Layers className="h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
              <span>Total en Banco</span>
            </div>
            <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{metrics.totalCount}</p>
            <p className="mt-0.5 text-[11px] tabular-nums text-ink-muted">
              60 base iTEP · {metrics.customCount} propias
            </p>
          </div>

          <div className="rounded-xl border border-line bg-muted/60 p-3.5">
            <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-ink-muted">
              <Clock className="h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
              <span>Para Repasar Hoy</span>
            </div>
            <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{metrics.dueCount}</p>
            <p className="mt-0.5 text-[11px] text-ink-muted">
              Tarjetas vencidas o nuevas pendientes
            </p>
          </div>

          <div className="rounded-xl border border-line bg-muted/60 p-3.5">
            <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-ink-muted">
              <RotateCcw className="h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
              <span>En Repaso Activo</span>
            </div>
            <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{metrics.inReviewCount}</p>
            <p className="mt-0.5 text-[11px] text-ink-muted">Intervalo corto de consolidación</p>
          </div>

          <div className="rounded-xl border border-line bg-muted/60 p-3.5">
            <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-ink-muted">
              <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
              <span>Dominadas SRS</span>
            </div>
            <p className="mt-1 text-2xl font-bold tabular-nums text-ink">
              {metrics.masteredCount} / {metrics.totalCount}
            </p>
            <p className="mt-0.5 text-[11px] text-ink-muted">Retención de mediano y largo plazo</p>
          </div>
        </div>

        {/* Pestañas principales del Hub */}
        <div
          role="tablist"
          aria-label="Modos de Vocabulario Inteligente Byme Lenguage"
          onKeyDown={handleTabKeyDown}
          className="mt-5 flex snap-x snap-proximity overflow-x-auto border-b border-line"
        >
          {HUB_TABS.map((tab) => {
            const isSelected = activeTab === tab.id;
            const Icon = tab.Icon;
            const tabDomId = `${baseTabId}-tab-${tab.id}`;
            return (
              <button
                key={tab.id}
                ref={(el) => {
                  tabButtonRefs.current[tab.id] = el;
                }}
                id={tabDomId}
                type="button"
                role="tab"
                aria-selected={isSelected}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => setActiveTab(tab.id)}
                className="inline-flex min-h-12 shrink-0 snap-start items-center gap-2 px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-muted/60"
              >
                <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{tab.labelEs}</span>
                {tab.id === "bank_explorer" ? (
                  <Badge variant="neutral" className="tabular-nums">
                    {allVocabularyItems.length}
                  </Badge>
                ) : null}
              </button>
            );
          })}
        </div>
      </header>

      {/* Panel Activo */}
      <div role="tabpanel" aria-labelledby={`${baseTabId}-tab-${activeTab}`} className="space-y-5">
        {activeTab === "srs_session" ? (
          <>
            {/* Configurador de tanda SRS */}
            <section className="rounded-2xl border border-line bg-card p-4 shadow-xs sm:p-5">
              <div className="flex flex-wrap items-end gap-3">
                <div className="min-w-52 flex-1">
                  <label htmlFor={deckPresetId} className="block text-xs font-bold text-ink">
                    Alcance del mazo de estudio SRS
                  </label>
                  <select
                    id={deckPresetId}
                    value={deckPreset}
                    onChange={(e) => setDeckPreset(e.target.value as DeckScopePreset)}
                    className="mt-1 min-h-11 w-full rounded-xl border border-line-strong bg-canvas px-3 py-2 text-xs font-semibold text-ink"
                  >
                    <option value="due_today">
                      Cola inteligente de hoy (vencidas + nuevas pendientes)
                    </option>
                    <option value="all">Todo el banco completo (A1–C2)</option>
                    <option value="by_day">Filtrar por Día del Bootcamp (Días 1–15)</option>
                    <option value="by_cefr">Filtrar por Nivel MCER (A1 a C2)</option>
                    <option value="custom_only">
                      Solo Mis Palabras Personalizadas ({metrics.customCount})
                    </option>
                  </select>
                </div>

                {deckPreset === "by_cefr" ? (
                  <div className="min-w-40">
                    <label htmlFor={deckCefrId} className="block text-xs font-bold text-ink">
                      Nivel MCER objetivo
                    </label>
                    <select
                      id={deckCefrId}
                      value={deckCefr}
                      onChange={(e) => setDeckCefr(VocabCefrLevelSchema.parse(e.target.value))}
                      className="mt-1 min-h-11 w-full rounded-xl border border-line-strong bg-canvas px-3 py-2 text-xs font-semibold text-ink"
                    >
                      {VocabCefrLevelSchema.options.map((lvl) => (
                        <option key={lvl} value={lvl}>
                          Nivel {lvl}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : null}

                {deckPreset === "by_day" ? (
                  <div className="min-w-48">
                    <label htmlFor={deckDayId} className="block text-xs font-bold text-ink">
                      Sesión del Bootcamp
                    </label>
                    <select
                      id={deckDayId}
                      value={deckDay}
                      onChange={(e) => setDeckDay(Number.parseInt(e.target.value, 10))}
                      className="mt-1 min-h-11 w-full rounded-xl border border-line-strong bg-canvas px-3 py-2 text-xs font-semibold tabular-nums text-ink"
                    >
                      {ALL_DAYS.map((dayNum) => (
                        <option key={dayNum} value={dayNum}>
                          Día {dayNum} del Roadmap B2
                        </option>
                      ))}
                    </select>
                  </div>
                ) : null}

                <Badge variant="default" className="min-h-11 px-3.5 text-xs tabular-nums">
                  {sessionDeckItems.length}{" "}
                  {sessionDeckItems.length === 1
                    ? "tarjeta seleccionada"
                    : "tarjetas seleccionadas"}
                </Badge>
              </div>
            </section>

            <VocabularyFlashcardDeck
              items={sessionDeckItems}
              deckScopeKey={deckScopeKey}
              emptyMessageEs={
                deckPreset === "custom_only"
                  ? "Aún no has creado palabras personalizadas en Byme Lenguage. Pulsa el botón inferior para agregar tu primera tarjeta."
                  : "No hay tarjetas disponibles para este filtro actualmente."
              }
              onOpenAddModal={handleOpenCreate}
            />
          </>
        ) : (
          <>
            {/* Buscador y Filtros semánticos (<search>) */}
            <search className="rounded-2xl border border-line bg-card p-4 shadow-xs sm:p-5">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
                <div className="sm:col-span-2 lg:col-span-1">
                  <label htmlFor={searchInputId} className="block text-xs font-bold text-ink">
                    Buscar término o contexto
                  </label>
                  <div className="relative mt-1">
                    <Search
                      className="pointer-events-none absolute top-3.5 left-3 h-4 w-4 text-ink-muted"
                      aria-hidden="true"
                    />
                    <input
                      id={searchInputId}
                      type="search"
                      value={searchQuery}
                      autoCorrect="off"
                      autoCapitalize="none"
                      spellCheck={false}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Ej. corroborate, falso amigo..."
                      className="min-h-11 w-full rounded-xl border border-line-strong bg-canvas py-2 pr-3 pl-9 text-xs text-ink"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor={cefrFilterId} className="block text-xs font-bold text-ink">
                    Nivel MCER
                  </label>
                  <select
                    id={cefrFilterId}
                    value={cefrFilter}
                    onChange={(e) =>
                      setCefrFilter(
                        e.target.value === "ALL"
                          ? "ALL"
                          : VocabCefrLevelSchema.parse(e.target.value),
                      )
                    }
                    className="mt-1 min-h-11 w-full rounded-xl border border-line-strong bg-canvas px-3 py-2 text-xs font-semibold text-ink"
                  >
                    <option value="ALL">Todos (A1–C2)</option>
                    {VocabCefrLevelSchema.options.map((lvl) => (
                      <option key={lvl} value={lvl}>
                        Nivel {lvl}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor={statusFilterId} className="block text-xs font-bold text-ink">
                    Estado SRS
                  </label>
                  <select
                    id={statusFilterId}
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value as "ALL" | StudyStatus)}
                    className="mt-1 min-h-11 w-full rounded-xl border border-line-strong bg-canvas px-3 py-2 text-xs font-semibold text-ink"
                  >
                    <option value="ALL">Todos los estados</option>
                    <option value="pending">Pendiente</option>
                    <option value="in_review">En repaso</option>
                    <option value="mastered">Dominado</option>
                  </select>
                </div>

                <div>
                  <label htmlFor={originFilterId} className="block text-xs font-bold text-ink">
                    Origen
                  </label>
                  <select
                    id={originFilterId}
                    value={originFilter}
                    onChange={(e) =>
                      setOriginFilter(e.target.value as "ALL" | "curated" | "custom")
                    }
                    className="mt-1 min-h-11 w-full rounded-xl border border-line-strong bg-canvas px-3 py-2 text-xs font-semibold text-ink"
                  >
                    <option value="ALL">Todo el banco</option>
                    <option value="curated">Banco Académico iTEP (60)</option>
                    <option value="custom">Mis Palabras ({metrics.customCount})</option>
                  </select>
                </div>

                <div>
                  <label htmlFor={dayFilterId} className="block text-xs font-bold text-ink">
                    Día vinculado
                  </label>
                  <select
                    id={dayFilterId}
                    value={dayFilter}
                    onChange={(e) => setDayFilter(Number.parseInt(e.target.value, 10))}
                    className="mt-1 min-h-11 w-full rounded-xl border border-line-strong bg-canvas px-3 py-2 text-xs font-semibold tabular-nums text-ink"
                  >
                    <option value={0}>Cualquier día (1–15)</option>
                    {ALL_DAYS.map((dayNum) => (
                      <option key={dayNum} value={dayNum}>
                        Día {dayNum}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-line pt-3 text-xs text-ink-muted">
                <span className="tabular-nums">
                  Mostrando <strong className="text-ink">{filteredExplorerItems.length}</strong> de{" "}
                  {allVocabularyItems.length} tarjetas léxicas.
                </span>

                {searchQuery ||
                cefrFilter !== "ALL" ||
                statusFilter !== "ALL" ||
                originFilter !== "ALL" ||
                dayFilter > 0 ? (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      setCefrFilter("ALL");
                      setStatusFilter("ALL");
                      setOriginFilter("ALL");
                      setDayFilter(0);
                    }}
                    className="rounded-lg border border-line px-2.5 py-1 text-[11px] font-semibold text-ink hover:bg-muted"
                  >
                    Limpiar filtros
                  </button>
                ) : null}
              </div>
            </search>

            {/* Cuadrícula de Tarjetas del Explorador */}
            {filteredExplorerItems.length === 0 ? (
              <section className="rounded-2xl border border-dashed border-line-strong bg-card p-8 text-center">
                <p className="text-sm font-medium text-ink-muted">
                  Ninguna tarjeta coincide con los filtros actuales.
                </p>
              </section>
            ) : (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {filteredExplorerItems.map((item) => {
                  const rec = getVocabularySrsRecord(item.id);
                  const status = getVocabularyItemStatus(rec);

                  return (
                    <article
                      key={item.id}
                      aria-labelledby={`explorer-vocab-${item.id}`}
                      className="flex min-w-0 flex-col justify-between rounded-2xl border border-line bg-card p-5 shadow-xs"
                    >
                      <div className="min-w-0 space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <Badge variant="default">MCER {item.cefrLevel}</Badge>
                            <Badge variant="neutral">
                              {PART_OF_SPEECH_LABELS_ES[item.partOfSpeech]}
                            </Badge>
                            {item.source === "custom" ? (
                              <Badge variant="default">
                                <Sparkles className="h-3 w-3 shrink-0" aria-hidden="true" />
                                <span>Mi Palabra</span>
                              </Badge>
                            ) : null}
                            {item.linkedDayNumbers.map((dNum) => (
                              <a
                                key={dNum}
                                href={`#/day/${dNum}`}
                                className="inline-flex items-center rounded-full border border-line bg-muted px-2 py-0.5 text-[11px] font-semibold tabular-nums text-ink hover:border-brand"
                              >
                                Día {dNum}
                              </a>
                            ))}
                          </div>

                          <StatusBadge status={status} />
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="min-w-0">
                            <h2
                              id={`explorer-vocab-${item.id}`}
                              lang="en"
                              className="text-lg font-bold text-ink"
                            >
                              {item.term}
                            </h2>
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

                        <p className="text-xs font-semibold leading-relaxed text-ink">
                          {item.meaningEs}
                        </p>

                        <div className="rounded-xl border border-line bg-muted/50 p-3 text-xs leading-relaxed">
                          <p lang="en" className="font-medium text-ink">
                            “{item.exampleEn}”
                          </p>
                          {item.exampleTranslationEs ? (
                            <p className="mt-1 text-ink-muted">{item.exampleTranslationEs}</p>
                          ) : null}
                        </div>

                        {item.collocations.length > 0 ? (
                          <div className="flex flex-wrap gap-1.5">
                            {item.collocations.map((col) => (
                              <span
                                key={col}
                                lang="en"
                                className="rounded-md border border-line bg-canvas px-2 py-0.5 text-[11px] font-medium text-ink-muted"
                              >
                                {col}
                              </span>
                            ))}
                          </div>
                        ) : null}

                        {item.b1SynonymOrTrap ? (
                          <p className="text-[11px] leading-relaxed text-ink-muted">
                            <strong className="text-ink">Puente B2:</strong> {item.b1SynonymOrTrap}
                          </p>
                        ) : null}
                      </div>

                      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-line pt-3">
                        <span className="text-[11px] font-semibold tabular-nums text-ink-muted">
                          {formatDueRelativeEs(rec)}
                        </span>

                        <div className="flex flex-wrap items-center gap-1.5">
                          {status !== "mastered" ? (
                            <button
                              type="button"
                              onClick={() => recordVocabularySrsReview(item.id, "easy")}
                              className="inline-flex min-h-8 items-center gap-1 rounded-lg border border-ok-border/60 bg-ok-bg px-2.5 py-1 text-[11px] font-semibold text-ok-fg hover:border-ok-border"
                            >
                              <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
                              <span>Dominada</span>
                            </button>
                          ) : (
                            <button
                              type="button"
                              onClick={() => recordVocabularySrsReview(item.id, "again")}
                              className="inline-flex min-h-8 items-center gap-1 rounded-lg border border-line bg-muted px-2.5 py-1 text-[11px] font-semibold text-ink hover:border-line-strong"
                            >
                              <RotateCcw className="h-3 w-3" aria-hidden="true" />
                              <span>Reprogramar hoy</span>
                            </button>
                          )}

                          {item.source === "custom" ? (
                            <>
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
                            </>
                          ) : null}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>

      <VocabularyFormDialog
        dialogRef={formDialogRef}
        editingItem={editingItem}
        defaultDayNumber={dayFilter > 0 ? dayFilter : undefined}
        onOpenSettings={onOpenSettings}
      />
    </div>
  );
}
