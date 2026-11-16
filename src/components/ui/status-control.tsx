import {
  BookOpen,
  CheckCircle2,
  Circle,
  FilePenLine,
  Headphones,
  type LucideIcon,
  Mic,
  RotateCcw,
  SpellCheck2,
} from "lucide-react";
import { useId } from "react";
import { cn } from "@/lib/utils.ts";
import {
  type ItepSkill,
  type StudyStatus,
  StudyStatusSchema,
} from "@/schemas/curriculum.schema.ts";

export interface StudyStatusVisualMeta {
  readonly status: StudyStatus;
  readonly labelEs: "Pendiente" | "En repaso" | "Dominado";
  readonly Icon: LucideIcon;
  readonly pillClassName: string;
  readonly activeBtnClassName: string;
}

export const STUDY_STATUS_META: Readonly<Record<StudyStatus, StudyStatusVisualMeta>> = {
  pending: {
    status: "pending",
    labelEs: "Pendiente",
    Icon: Circle,
    pillClassName: "border-line bg-muted text-ink-muted",
    activeBtnClassName: "border-line-strong bg-muted text-ink font-semibold",
  },
  in_review: {
    status: "in_review",
    labelEs: "En repaso",
    Icon: RotateCcw,
    pillClassName: "border-warn-border/60 bg-warn-bg text-warn-fg",
    activeBtnClassName: "border-warn-border bg-warn-bg text-warn-fg font-semibold",
  },
  mastered: {
    status: "mastered",
    labelEs: "Dominado",
    Icon: CheckCircle2,
    pillClassName: "border-ok-border/60 bg-ok-bg text-ok-fg",
    activeBtnClassName: "border-ok-border bg-ok-bg text-ok-fg font-semibold",
  },
};

const STUDY_STATUS_ORDER: readonly StudyStatus[] = ["pending", "in_review", "mastered"];

export interface ItepSkillMeta {
  readonly skill: ItepSkill;
  readonly shortCode: "G" | "L" | "R" | "W" | "S";
  readonly label: string;
  readonly officialMinutes: number;
  readonly Icon: LucideIcon;
}

export const ITEP_SKILLS_META: readonly ItepSkillMeta[] = [
  {
    skill: "grammar",
    shortCode: "G",
    label: "Grammar",
    officialMinutes: 10,
    Icon: SpellCheck2,
  },
  {
    skill: "listening",
    shortCode: "L",
    label: "Listening",
    officialMinutes: 20,
    Icon: Headphones,
  },
  {
    skill: "reading",
    shortCode: "R",
    label: "Reading",
    officialMinutes: 20,
    Icon: BookOpen,
  },
  {
    skill: "writing",
    shortCode: "W",
    label: "Writing",
    officialMinutes: 25,
    Icon: FilePenLine,
  },
  {
    skill: "speaking",
    shortCode: "S",
    label: "Speaking",
    officialMinutes: 5,
    Icon: Mic,
  },
];

export function StatusBadge({
  status,
  className,
}: {
  readonly status: StudyStatus;
  readonly className?: string;
}) {
  const meta = STUDY_STATUS_META[status];
  const { Icon } = meta;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold",
        meta.pillClassName,
        className,
      )}
    >
      <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      <span>{meta.labelEs}</span>
    </span>
  );
}

export function StatusSelectControl({
  value,
  onChange,
  ariaLabel,
  className,
}: {
  readonly value: StudyStatus;
  readonly onChange: (next: StudyStatus) => void;
  readonly ariaLabel: string;
  readonly className?: string;
}) {
  const selectId = useId();
  const meta = STUDY_STATUS_META[value];
  const { Icon } = meta;

  return (
    <div
      className={cn(
        "inline-flex min-h-10 items-center gap-1.5 rounded-xl border px-2.5 py-1 text-xs font-semibold transition-colors",
        meta.pillClassName,
        className,
      )}
    >
      <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      <label htmlFor={selectId} className="visually-hidden">
        {ariaLabel}
      </label>
      <select
        id={selectId}
        value={value}
        onChange={(e) => {
          const parsed = StudyStatusSchema.safeParse(e.target.value);
          if (parsed.success) {
            onChange(parsed.data);
          }
        }}
        className="min-h-8 cursor-pointer bg-transparent pr-1 text-xs font-semibold text-current focus:outline-none"
      >
        {STUDY_STATUS_ORDER.map((st) => (
          <option key={st} value={st} className="bg-card text-ink">
            {STUDY_STATUS_META[st].labelEs}
          </option>
        ))}
      </select>
    </div>
  );
}

export function StatusSegmentedControl({
  value,
  onChange,
  groupLabel,
  className,
}: {
  readonly value: StudyStatus;
  readonly onChange: (next: StudyStatus) => void;
  readonly groupLabel: string;
  readonly className?: string;
}) {
  return (
    <fieldset
      aria-label={groupLabel}
      className={cn(
        "inline-flex flex-wrap items-center gap-1 rounded-xl border border-line bg-card p-1",
        className,
      )}
    >
      {STUDY_STATUS_ORDER.map((st) => {
        const meta = STUDY_STATUS_META[st];
        const { Icon } = meta;
        const isSelected = value === st;
        return (
          <button
            key={st}
            type="button"
            aria-pressed={isSelected}
            onClick={() => onChange(st)}
            className={cn(
              "inline-flex min-h-9 items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs transition-colors",
              isSelected
                ? meta.activeBtnClassName
                : "border-transparent bg-transparent text-ink-muted hover:bg-muted hover:text-ink",
            )}
          >
            <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span>{meta.labelEs}</span>
          </button>
        );
      })}
    </fieldset>
  );
}
