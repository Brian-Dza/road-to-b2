import {
  ArrowLeft,
  ArrowRight,
  BookMarked,
  CheckCircle2,
  ClipboardList,
  Clock,
  Timer,
} from "lucide-react";
import { type KeyboardEvent, useEffect, useId, useMemo, useRef, useState } from "react";
import { GrammarRunner } from "@/components/runners/GrammarRunner.tsx";
import { ListeningRunner } from "@/components/runners/ListeningRunner.tsx";
import { ReadingRunner } from "@/components/runners/ReadingRunner.tsx";
import { SpeakingRunner } from "@/components/runners/SpeakingRunner.tsx";
import { WritingRunner } from "@/components/runners/WritingRunner.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import {
  ITEP_SKILLS_META,
  STUDY_STATUS_META,
  StatusSegmentedControl,
} from "@/components/ui/status-control.tsx";
import { DayVocabularyPanel } from "@/components/vocabulary/DayVocabularyPanel.tsx";
import { useProgress } from "@/context/progress-context.tsx";
import { curriculumRegistry } from "@/data/curriculum-registry.ts";
import { getVocabularyItemStatus } from "@/lib/srs.ts";
import { cn } from "@/lib/utils.ts";
import type { ItepSkill } from "@/schemas/curriculum.schema.ts";

export interface DayStudyPageProps {
  readonly dayNumber: number;
  readonly onOpenSettings: () => void;
}

type DayStudyTab = ItepSkill | "vocabulary";

const DAY_TAB_ORDER: readonly DayStudyTab[] = [
  "grammar",
  "listening",
  "reading",
  "writing",
  "speaking",
  "vocabulary",
];

export function DayStudyPage({ dayNumber, onOpenSettings }: DayStudyPageProps) {
  const baseTabId = useId();
  const daySwitcherId = useId();
  const tabButtonRefs = useRef<Record<DayStudyTab, HTMLButtonElement | null>>({
    grammar: null,
    listening: null,
    reading: null,
    writing: null,
    speaking: null,
    vocabulary: null,
  });

  const {
    progress,
    getDayStatus,
    setDayStatus,
    getSectionStatus,
    setSectionStatus,
    getVocabularySrsRecord,
  } = useProgress();

  const days = curriculumRegistry.roadmapDays;
  const day = days.find((d) => d.dayNumber === dayNumber) ?? days[0];

  const [activeTab, setActiveTab] = useState<DayStudyTab>("grammar");
  const [checkedDailyItems, setCheckedDailyItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const btn = tabButtonRefs.current[activeTab];
    btn?.scrollIntoView({ block: "nearest", inline: "nearest" });
  }, [activeTab]);

  const dayVocabSummary = useMemo(() => {
    const targetDayNum = day?.dayNumber ?? 1;
    const curatedForDay = curriculumRegistry.coreVocabulary.filter((item) =>
      item.linkedDayNumbers.includes(targetDayNum),
    );
    const customForDay = progress.vocabulary.customItems.filter((item) =>
      item.linkedDayNumbers.includes(targetDayNum),
    );
    const allForDay = [...curatedForDay, ...customForDay];
    let mastered = 0;
    for (const item of allForDay) {
      if (getVocabularyItemStatus(getVocabularySrsRecord(item.id)) === "mastered") {
        mastered += 1;
      }
    }
    return {
      mastered,
      total: allForDay.length,
    };
  }, [day?.dayNumber, getVocabularySrsRecord, progress.vocabulary.customItems]);

  if (!day) {
    return null;
  }

  const dayStatus = getDayStatus(day.dayNumber);

  const handleTabKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const currentIndex = DAY_TAB_ORDER.indexOf(activeTab);
    if (currentIndex === -1) {
      return;
    }

    let nextIndex = currentIndex;
    if (event.key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % DAY_TAB_ORDER.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (currentIndex - 1 + DAY_TAB_ORDER.length) % DAY_TAB_ORDER.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = DAY_TAB_ORDER.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    const nextTab = DAY_TAB_ORDER[nextIndex];
    if (nextTab) {
      setActiveTab(nextTab);
      tabButtonRefs.current[nextTab]?.focus();
    }
  };

  return (
    <div className="space-y-6">
      {/* Barra superior de navegación rápida entre los 15 días */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line bg-card px-4 py-3 shadow-xs">
        <a
          href="#/dashboard"
          className="inline-flex min-h-10 items-center gap-1.5 rounded-xl border border-line bg-muted px-3 py-1.5 text-xs font-semibold text-ink hover:border-line-strong"
        >
          <ArrowLeft className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span>Volver al Roadmap 15 Días</span>
        </a>

        <div className="flex flex-wrap items-center gap-2">
          {day.dayNumber > 1 ? (
            <a
              href={`#/day/${day.dayNumber - 1}`}
              className="inline-flex min-h-10 items-center gap-1 rounded-xl border border-line bg-muted px-3 py-1.5 text-xs font-semibold text-ink hover:border-line-strong"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Día {day.dayNumber - 1}</span>
            </a>
          ) : null}

          <div className="inline-flex items-center">
            <label htmlFor={daySwitcherId} className="visually-hidden">
              Cambiar rápidamente de día del Bootcamp
            </label>
            <select
              id={daySwitcherId}
              value={day.dayNumber}
              onChange={(e) => {
                const nextDay = Number.parseInt(e.target.value, 10);
                if (Number.isInteger(nextDay) && nextDay >= 1 && nextDay <= 15) {
                  window.location.hash = `#/day/${nextDay}`;
                }
              }}
              className="min-h-10 cursor-pointer rounded-xl border border-line-strong bg-canvas px-3 py-1.5 text-xs font-bold tabular-nums text-ink"
            >
              {days.map((d) => (
                <option key={d.dayNumber} value={d.dayNumber}>
                  Día {d.dayNumber} — {d.title}
                </option>
              ))}
            </select>
          </div>

          {day.dayNumber < 15 ? (
            <a
              href={`#/day/${day.dayNumber + 1}`}
              className="inline-flex min-h-10 items-center gap-1 rounded-xl border border-line bg-muted px-3 py-1.5 text-xs font-semibold text-ink hover:border-line-strong"
            >
              <span>Día {day.dayNumber + 1}</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>

      {/* Encabezado Principal del Día */}
      <section className="rounded-2xl border border-line bg-card p-6 shadow-xs">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-[70ch]">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="default">
                Sprint {day.sprintNumber} · Nivel {day.cefrLevel}
              </Badge>
              <Badge variant="neutral" className="tabular-nums">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{day.estimatedMinutes} min estimados</span>
              </Badge>
              {day.isMockExamDay ? (
                <Badge variant="warning">Jornada de Simulacro Oficial 80 min</Badge>
              ) : null}
            </div>

            <h1 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Día {day.dayNumber}: <span lang="en">{day.title}</span>
            </h1>
            <p className="mt-1.5 text-sm font-medium text-ink-muted">{day.subtitleEs}</p>
          </div>

          <div className="space-y-1.5">
            <span className="block text-xs font-bold text-ink-muted">
              Estado global del Día {day.dayNumber}:
            </span>
            <StatusSegmentedControl
              value={dayStatus}
              onChange={(next) => setDayStatus(day.dayNumber, next)}
              groupLabel={`Estado de dominio del Día ${day.dayNumber}`}
            />
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-info-border/40 bg-info-bg p-4 text-xs sm:text-sm leading-relaxed text-info-fg">
          <strong className="font-bold">Foco Estratégico B2 del Día: </strong>
          {day.b2FocusSummaryEs}
        </div>

        {day.isMockExamDay && day.mockExamId ? (
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-brand bg-muted p-4">
            <div className="space-y-0.5">
              <p className="text-sm font-bold text-ink">
                ¿Listo para rendir el Simulacro Continuo de 80 minutos?
              </p>
              <p className="text-xs text-ink-muted">
                Ejecuta las 5 secciones sin pausas ni respuestas reveladas para obtener tu puntaje
                estimado 0.0–6.0.
              </p>
            </div>
            <a
              href={`#/mock/${day.mockExamId}`}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-brand px-4 py-2 text-xs font-semibold text-on-brand transition-colors hover:bg-brand-hover"
            >
              <Timer className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Abrir Simulador Oficial de 80 min</span>
            </a>
          </div>
        ) : null}

        {/* Pestañas de las 5 secciones oficiales iTEP + 6.ª pestaña opcional de Vocabulario */}
        <div
          role="tablist"
          aria-label="Las 5 secciones oficiales de iTEP Academic-Plus y vocabulario opcional del día"
          onKeyDown={handleTabKeyDown}
          className="mt-6 flex snap-x snap-proximity overflow-x-auto border-b border-line"
        >
          {ITEP_SKILLS_META.map((meta) => {
            const isSelected = activeTab === meta.skill;
            const secStatus = getSectionStatus(day.dayNumber, meta.skill);
            const secStatusMeta = STUDY_STATUS_META[secStatus];
            const SkillIcon = meta.Icon;
            const StatusIcon = secStatusMeta.Icon;
            const tabId = `${baseTabId}-tab-${meta.skill}`;

            return (
              <button
                key={meta.skill}
                ref={(el) => {
                  tabButtonRefs.current[meta.skill] = el;
                }}
                id={tabId}
                type="button"
                role="tab"
                aria-selected={isSelected}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => setActiveTab(meta.skill)}
                className="inline-flex min-h-12 shrink-0 snap-start items-center gap-2 px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-muted/60"
              >
                <SkillIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{meta.label}</span>
                <span
                  className={cn(
                    "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-semibold",
                    secStatusMeta.pillClassName,
                  )}
                >
                  <StatusIcon className="h-3 w-3 shrink-0" aria-hidden="true" />
                  <span>{secStatusMeta.labelEs}</span>
                </span>
              </button>
            );
          })}

          {/* 6.ª Pestaña Opcional: Vocabulario · Byme */}
          <button
            ref={(el) => {
              tabButtonRefs.current.vocabulary = el;
            }}
            id={`${baseTabId}-tab-vocabulary`}
            type="button"
            role="tab"
            aria-selected={activeTab === "vocabulary"}
            tabIndex={activeTab === "vocabulary" ? 0 : -1}
            onClick={() => setActiveTab("vocabulary")}
            className="inline-flex min-h-12 shrink-0 snap-start items-center gap-2 px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-muted/60"
          >
            <BookMarked className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
            <span>Vocabulario · Byme</span>
            <span
              className={cn(
                "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-semibold tabular-nums",
                dayVocabSummary.total > 0 && dayVocabSummary.mastered === dayVocabSummary.total
                  ? "border-ok-border/70 bg-ok-bg text-ok-fg"
                  : "border-info-border/50 bg-info-bg text-info-fg",
              )}
            >
              <span>
                Opcional · {dayVocabSummary.mastered}/{dayVocabSummary.total}
              </span>
            </span>
          </button>
        </div>
      </section>

      {/* Panel de la pestaña activa */}
      <div role="tabpanel" aria-labelledby={`${baseTabId}-tab-${activeTab}`} className="space-y-6">
        {activeTab === "vocabulary" ? (
          <DayVocabularyPanel
            key={`${day.dayNumber}-vocabulary`}
            day={day}
            onOpenSettings={onOpenSettings}
          />
        ) : (
          <>
            {/* Cabecera y estado de la sección oficial activa */}
            <section className="rounded-2xl border border-line bg-card p-5 shadow-xs">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="max-w-[68ch]">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="default">
                      Sección {ITEP_SKILLS_META.find((m) => m.skill === activeTab)?.label}
                    </Badge>
                    <Badge variant="neutral" className="tabular-nums">
                      {day.sections[activeTab].estimatedMinutes} min de práctica
                    </Badge>
                  </div>
                  <h2 lang="en" className="mt-2 text-lg font-bold text-ink">
                    {day.sections[activeTab].title}
                  </h2>
                  <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-ink-muted">
                    {day.sections[activeTab].focusSummaryEs}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="block text-xs font-bold text-ink-muted">
                    Estado de esta habilidad:
                  </span>
                  <StatusSegmentedControl
                    value={getSectionStatus(day.dayNumber, activeTab)}
                    onChange={(next) => setSectionStatus(day.dayNumber, activeTab, next)}
                    groupLabel={`Estado de dominio en ${activeTab} del Día ${day.dayNumber}`}
                  />
                </div>
              </div>
            </section>

            {/* Runner interactivo correspondiente */}
            {activeTab === "grammar" ? (
              <GrammarRunner
                key={`${day.dayNumber}-grammar`}
                section={day.sections.grammar}
                mode="study"
              />
            ) : null}

            {activeTab === "listening" ? (
              <ListeningRunner
                key={`${day.dayNumber}-listening`}
                section={day.sections.listening}
                mode="study"
              />
            ) : null}

            {activeTab === "reading" ? (
              <ReadingRunner
                key={`${day.dayNumber}-reading`}
                section={day.sections.reading}
                mode="study"
              />
            ) : null}

            {activeTab === "writing" ? (
              <WritingRunner
                key={`${day.dayNumber}-writing`}
                section={day.sections.writing}
                mode="study"
                onOpenSettings={onOpenSettings}
              />
            ) : null}

            {activeTab === "speaking" ? (
              <SpeakingRunner
                key={`${day.dayNumber}-speaking`}
                section={day.sections.speaking}
                mode="study"
              />
            ) : null}
          </>
        )}
      </div>

      {/* Checklist de cierre diario */}
      <section className="rounded-2xl border border-line bg-card p-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-3">
          <div className="flex items-center gap-2">
            <ClipboardList className="h-5 w-5 text-brand" aria-hidden="true" />
            <h2 className="text-base font-bold text-ink">
              Lista de Verificación del Día {day.dayNumber}
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setDayStatus(day.dayNumber, "mastered")}
            className="inline-flex min-h-10 items-center gap-1.5 rounded-xl bg-brand px-4 py-2 text-xs font-semibold text-on-brand transition-colors hover:bg-brand-hover"
          >
            <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Marcar Día {day.dayNumber} como Dominado</span>
          </button>
        </div>

        <div className="mt-4 space-y-2.5">
          {day.dailyChecklistEs.map((itemText, idx) => {
            const checkKey = `${day.dayNumber}-chk-${idx}`;
            const isChecked = Boolean(checkedDailyItems[checkKey]);
            return (
              <div key={checkKey} className="flex items-start gap-2.5">
                <input
                  id={checkKey}
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) =>
                    setCheckedDailyItems((prev) => ({
                      ...prev,
                      [checkKey]: e.target.checked,
                    }))
                  }
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-line-strong"
                />
                <label
                  htmlFor={checkKey}
                  className={cn(
                    "cursor-pointer text-xs sm:text-sm leading-relaxed",
                    isChecked ? "line-through text-ink-muted" : "text-ink",
                  )}
                >
                  {itemText}
                </label>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
