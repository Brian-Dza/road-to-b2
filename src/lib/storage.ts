import { z } from "zod";
import {
  createInitialUserProgress,
  type DiagnosticAttempt,
  DiagnosticAttemptSchema,
  type GeminiEvaluation,
  GeminiEvaluationSchema,
  type GeminiGrammarCorrection,
  GeminiGrammarCorrectionSchema,
  type MockAttempt,
  MockAttemptSchema,
  type SpeakingSelfScore,
  SpeakingSelfScoreSchema,
  type UserProgress,
  UserProgressSchema,
  type UserSettings,
  UserSettingsSchema,
  type WritingDraft,
  WritingDraftSchema,
} from "@/schemas/progress.schema.ts";
import {
  type UserVocabularyState,
  UserVocabularyStateSchema,
} from "@/schemas/vocabulary.schema.ts";

const LEGACY_ANONYMOUS_STORAGE_KEY = "road-to-b2:user-progress:v1";
const SCOPED_PROGRESS_PREFIX = "road-to-b2:user-progress:v2:";

const ScopedProgressEnvelopeSchema = z.strictObject({
  updatedAtMs: z.number().int().nonnegative(),
  syncedAtMs: z.number().int().nonnegative(),
  progress: UserProgressSchema,
});

export function buildScopedProgressStorageKey(userId: string): string {
  return `${SCOPED_PROGRESS_PREFIX}${userId}`;
}

export function sanitizeProgressForPersistence(progress: UserProgress): UserProgress {
  return UserProgressSchema.parse({
    ...progress,
    settings: {},
  });
}

function isProgressMeaningfullyPopulated(progress: UserProgress): boolean {
  return (
    Object.keys(progress.dayStatuses).length > 0 ||
    Object.keys(progress.sectionStatuses).length > 0 ||
    progress.diagnosticAttempt !== null ||
    Object.keys(progress.foundationStatuses).length > 0 ||
    progress.playedAudioIds.length > 0 ||
    Object.keys(progress.writingDrafts).length > 0 ||
    Object.keys(progress.speakingSelfScores).length > 0 ||
    progress.mockAttempts.length > 0 ||
    progress.vocabulary.customItems.length > 0 ||
    Object.keys(progress.vocabulary.srsRecords).length > 0
  );
}

export interface ScopedStorageLoadResult {
  readonly progress: UserProgress;
  readonly updatedAtMs: number;
  readonly syncedAtMs: number;
  readonly hasCachedEntry: boolean;
  readonly recoveredFromCorruption: boolean;
}

export function loadScopedUserProgressCache(userId: string): ScopedStorageLoadResult {
  if (typeof window === "undefined") {
    return {
      progress: createInitialUserProgress(),
      updatedAtMs: 0,
      syncedAtMs: 0,
      hasCachedEntry: false,
      recoveredFromCorruption: false,
    };
  }

  const key = buildScopedProgressStorageKey(userId);
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) {
      return {
        progress: createInitialUserProgress(),
        updatedAtMs: 0,
        syncedAtMs: 0,
        hasCachedEntry: false,
        recoveredFromCorruption: false,
      };
    }
    const parsedJson: unknown = JSON.parse(raw);
    const validated = ScopedProgressEnvelopeSchema.safeParse(parsedJson);
    if (!validated.success) {
      const fresh = createInitialUserProgress();
      const freshEnvelope = {
        updatedAtMs: 0,
        syncedAtMs: 0,
        progress: fresh,
      };
      window.localStorage.setItem(key, JSON.stringify(freshEnvelope));
      return {
        progress: fresh,
        updatedAtMs: 0,
        syncedAtMs: 0,
        hasCachedEntry: false,
        recoveredFromCorruption: true,
      };
    }

    return {
      progress: sanitizeProgressForPersistence(validated.data.progress),
      updatedAtMs: validated.data.updatedAtMs,
      syncedAtMs: validated.data.syncedAtMs,
      hasCachedEntry: true,
      recoveredFromCorruption: false,
    };
  } catch {
    return {
      progress: createInitialUserProgress(),
      updatedAtMs: 0,
      syncedAtMs: 0,
      hasCachedEntry: false,
      recoveredFromCorruption: true,
    };
  }
}

export function saveScopedUserProgressCache(
  userId: string,
  progress: UserProgress,
  timestamps: { readonly updatedAtMs: number; readonly syncedAtMs: number },
): void {
  const sanitized = sanitizeProgressForPersistence(progress);
  if (typeof window === "undefined") {
    return;
  }
  try {
    const envelope = ScopedProgressEnvelopeSchema.parse({
      updatedAtMs: timestamps.updatedAtMs,
      syncedAtMs: timestamps.syncedAtMs,
      progress: sanitized,
    });
    window.localStorage.setItem(buildScopedProgressStorageKey(userId), JSON.stringify(envelope));
  } catch {
    // Ignore storage quota errors in restricted browsing modes
  }
}

export function parseCloudProgressPayload(rawPayload: unknown): {
  readonly progress: UserProgress;
  readonly isEmptyObject: boolean;
  readonly hadSchemaError: boolean;
} {
  if (
    typeof rawPayload === "object" &&
    rawPayload !== null &&
    !Array.isArray(rawPayload) &&
    Object.keys(rawPayload).length === 0
  ) {
    return {
      progress: createInitialUserProgress(),
      isEmptyObject: true,
      hadSchemaError: false,
    };
  }

  const validated = UserProgressSchema.safeParse(rawPayload);
  if (!validated.success) {
    return {
      progress: createInitialUserProgress(),
      isEmptyObject: false,
      hadSchemaError: true,
    };
  }

  return {
    progress: sanitizeProgressForPersistence(validated.data),
    isEmptyObject: false,
    hadSchemaError: false,
  };
}

export function loadLegacyAnonymousProgress(): UserProgress | null {
  if (typeof window === "undefined") {
    return null;
  }
  try {
    const raw = window.localStorage.getItem(LEGACY_ANONYMOUS_STORAGE_KEY);
    if (!raw) {
      return null;
    }
    const parsed: unknown = JSON.parse(raw);
    const validated = UserProgressSchema.safeParse(parsed);
    if (!validated.success) {
      return null;
    }
    const sanitized = sanitizeProgressForPersistence(validated.data);
    return isProgressMeaningfullyPopulated(sanitized) ? sanitized : null;
  } catch {
    return null;
  }
}

export function clearLegacyAnonymousProgress(): void {
  if (typeof window === "undefined") {
    return;
  }
  try {
    window.localStorage.removeItem(LEGACY_ANONYMOUS_STORAGE_KEY);
  } catch {
    // Ignore storage access errors
  }
}

export function clearAllScopedProgressCaches(): void {
  if (typeof window === "undefined") {
    return;
  }
  try {
    const keysToDelete: string[] = [];
    for (let i = 0; i < window.localStorage.length; i += 1) {
      const k = window.localStorage.key(i);
      if (k?.startsWith(SCOPED_PROGRESS_PREFIX)) {
        keysToDelete.push(k);
      }
    }
    for (const k of keysToDelete) {
      window.localStorage.removeItem(k);
    }
  } catch {
    // Ignore storage access errors
  }
}

export function parseGeminiEvaluationPayload(raw: unknown): GeminiEvaluation | null {
  const result = GeminiEvaluationSchema.safeParse(raw);
  if (!result.success) {
    return null;
  }
  const verifiedCorrections: GeminiGrammarCorrection[] = result.data.grammarCorrections.map((c) =>
    GeminiGrammarCorrectionSchema.parse(c),
  );
  return {
    ...result.data,
    grammarCorrections: verifiedCorrections,
  };
}

export interface ProgressSelectorsSummary {
  readonly completedDiagnostic: DiagnosticAttempt | null;
  readonly draftCount: number;
  readonly speakingEvaluatedCount: number;
  readonly mockCount: number;
  readonly customVocabCount: number;
  readonly reviewedVocabCount: number;
  readonly hasGeminiKey: boolean;
}

export function summarizeProgressState(progress: UserProgress): ProgressSelectorsSummary {
  const settings: UserSettings = UserSettingsSchema.parse(progress.settings);
  const drafts: WritingDraft[] = Object.values(progress.writingDrafts).map((d) =>
    WritingDraftSchema.parse(d),
  );
  const speakingScores: SpeakingSelfScore[] = Object.values(progress.speakingSelfScores).map((s) =>
    SpeakingSelfScoreSchema.parse(s),
  );
  const mocks: MockAttempt[] = progress.mockAttempts.map((m) => MockAttemptSchema.parse(m));
  const completedDiagnostic: DiagnosticAttempt | null = progress.diagnosticAttempt
    ? DiagnosticAttemptSchema.parse(progress.diagnosticAttempt)
    : null;
  const vocabState: UserVocabularyState = UserVocabularyStateSchema.parse(progress.vocabulary);

  return {
    completedDiagnostic,
    draftCount: drafts.length,
    speakingEvaluatedCount: speakingScores.length,
    mockCount: mocks.length,
    customVocabCount: vocabState.customItems.length,
    reviewedVocabCount: Object.keys(vocabState.srsRecords).length,
    hasGeminiKey: Boolean(settings.geminiApiKey && settings.geminiApiKey.trim().length > 0),
  };
}
