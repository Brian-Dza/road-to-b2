import type { StudyStatus } from "@/schemas/curriculum.schema.ts";
import {
  type SrsRating,
  SrsRatingSchema,
  type VocabularyItem,
  type VocabularySrsRecord,
  VocabularySrsRecordSchema,
} from "@/schemas/vocabulary.schema.ts";

const TEN_MINUTES_MS = 10 * 60 * 1000;
const ONE_DAY_MS = 24 * 60 * 60 * 1000;
const DEFAULT_EASE_FACTOR = 2.5;
const MIN_EASE_FACTOR = 1.3;
const MAX_EASE_FACTOR = 4.0;

function clampEaseFactor(value: number): number {
  return Number(Math.min(MAX_EASE_FACTOR, Math.max(MIN_EASE_FACTOR, value)).toFixed(2));
}

export function getVocabularyItemStatus(record: VocabularySrsRecord | undefined): StudyStatus {
  return record ? record.status : "pending";
}

export function isVocabularyRecordDue(
  record: VocabularySrsRecord | undefined,
  nowMs: number = Date.now(),
): boolean {
  if (!record) {
    return true;
  }
  const dueMs = Date.parse(record.dueAtIso);
  if (Number.isNaN(dueMs)) {
    return true;
  }
  return dueMs <= nowMs;
}

export function computeNextSrsRecord(
  prev: VocabularySrsRecord | undefined,
  itemId: string,
  rawRating: SrsRating,
  nowMs: number = Date.now(),
): VocabularySrsRecord {
  const rating = SrsRatingSchema.parse(rawRating);
  const prevRepetitions = prev?.repetitions ?? 0;
  const prevIntervalDays = prev?.intervalDays ?? 0;
  const prevEase = prev?.easeFactor ?? DEFAULT_EASE_FACTOR;
  const prevReviews = prev?.reviewCount ?? 0;
  const prevLapses = prev?.lapseCount ?? 0;

  let nextRepetitions = prevRepetitions;
  let nextIntervalDays = 0;
  let nextEase = prevEase;
  let nextStatus: StudyStatus = "in_review";
  let nextLapses = prevLapses;
  let dueMs = nowMs;

  switch (rating) {
    case "again": {
      nextRepetitions = 0;
      nextIntervalDays = 0;
      nextEase = clampEaseFactor(prevEase - 0.2);
      nextStatus = "in_review";
      nextLapses = prevLapses + 1;
      dueMs = nowMs + TEN_MINUTES_MS;
      break;
    }
    case "hard": {
      nextRepetitions = prevRepetitions === 0 ? 1 : prevRepetitions;
      nextIntervalDays =
        prevIntervalDays <= 0 ? 1 : Math.max(1, Math.round(prevIntervalDays * 1.2));
      nextEase = clampEaseFactor(prevEase - 0.15);
      nextStatus = "in_review";
      dueMs = nowMs + nextIntervalDays * ONE_DAY_MS;
      break;
    }
    case "good": {
      nextRepetitions = prevRepetitions + 1;
      if (prevRepetitions === 0) {
        nextIntervalDays = 1;
      } else if (prevRepetitions === 1) {
        nextIntervalDays = 3;
      } else {
        nextIntervalDays = Math.max(3, Math.round(prevIntervalDays * prevEase));
      }
      nextEase = clampEaseFactor(prevEase);
      nextStatus = nextRepetitions >= 2 || nextIntervalDays >= 3 ? "mastered" : "in_review";
      dueMs = nowMs + nextIntervalDays * ONE_DAY_MS;
      break;
    }
    case "easy": {
      nextRepetitions = prevRepetitions + 1;
      if (prevRepetitions === 0) {
        nextIntervalDays = 4;
      } else if (prevRepetitions === 1) {
        nextIntervalDays = 6;
      } else {
        nextIntervalDays = Math.max(6, Math.round(prevIntervalDays * prevEase * 1.3));
      }
      nextEase = clampEaseFactor(prevEase + 0.15);
      nextStatus = "mastered";
      dueMs = nowMs + nextIntervalDays * ONE_DAY_MS;
      break;
    }
  }

  return VocabularySrsRecordSchema.parse({
    itemId,
    status: nextStatus,
    repetitions: nextRepetitions,
    intervalDays: nextIntervalDays,
    easeFactor: nextEase,
    dueAtIso: new Date(dueMs).toISOString(),
    lastReviewedAtIso: new Date(nowMs).toISOString(),
    reviewCount: prevReviews + 1,
    lapseCount: nextLapses,
  });
}

export function formatIntervalPreviewEs(
  rating: SrsRating,
  prev: VocabularySrsRecord | undefined,
): string {
  const simulated = computeNextSrsRecord(prev, prev?.itemId ?? "preview", rating, 0);
  if (simulated.intervalDays === 0) {
    return "10 min";
  }
  if (simulated.intervalDays === 1) {
    return "1 día";
  }
  return `${simulated.intervalDays} días`;
}

export function formatDueRelativeEs(
  record: VocabularySrsRecord | undefined,
  nowMs: number = Date.now(),
): string {
  if (!record) {
    return "Nueva · lista hoy";
  }
  const dueMs = Date.parse(record.dueAtIso);
  if (Number.isNaN(dueMs) || dueMs <= nowMs) {
    return "Para repasar hoy";
  }
  const diffHours = Math.max(1, Math.round((dueMs - nowMs) / (60 * 60 * 1000)));
  if (diffHours < 24) {
    return `Próximo en ${diffHours} h`;
  }
  const diffDays = Math.max(1, Math.round((dueMs - nowMs) / ONE_DAY_MS));
  return diffDays === 1 ? "Próximo en 1 día" : `Próximo en ${diffDays} días`;
}

export function buildSrsStudyQueue(
  items: readonly VocabularyItem[],
  srsRecords: Readonly<Record<string, VocabularySrsRecord>>,
  nowMs: number = Date.now(),
): VocabularyItem[] {
  const dueReviewed: { readonly item: VocabularyItem; readonly dueMs: number }[] = [];
  const pendingNew: VocabularyItem[] = [];
  const futureReview: { readonly item: VocabularyItem; readonly dueMs: number }[] = [];

  for (const item of items) {
    const rec = srsRecords[item.id];
    if (!rec) {
      pendingNew.push(item);
      continue;
    }
    const parsedDue = Date.parse(rec.dueAtIso);
    const dueMs = Number.isNaN(parsedDue) ? 0 : parsedDue;
    if (dueMs <= nowMs) {
      dueReviewed.push({ item, dueMs });
    } else {
      futureReview.push({ item, dueMs });
    }
  }

  dueReviewed.sort((a, b) => a.dueMs - b.dueMs);
  futureReview.sort((a, b) => a.dueMs - b.dueMs);

  const urgentQueue = [...dueReviewed.map((entry) => entry.item), ...pendingNew];
  if (urgentQueue.length > 0) {
    return urgentQueue;
  }

  return futureReview.map((entry) => entry.item);
}
