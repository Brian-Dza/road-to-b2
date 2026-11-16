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

const USER_PROGRESS_STORAGE_KEY = "road-to-b2:user-progress:v1";

export interface StorageLoadResult {
  readonly progress: UserProgress;
  readonly recoveredFromCorruption: boolean;
}

export function loadUserProgress(): StorageLoadResult {
  if (typeof window === "undefined") {
    return { progress: createInitialUserProgress(), recoveredFromCorruption: false };
  }

  try {
    const raw = window.localStorage.getItem(USER_PROGRESS_STORAGE_KEY);
    if (!raw) {
      return { progress: createInitialUserProgress(), recoveredFromCorruption: false };
    }
    const parsedJson: unknown = JSON.parse(raw);
    const validated = UserProgressSchema.safeParse(parsedJson);
    if (!validated.success) {
      const fresh = createInitialUserProgress();
      window.localStorage.setItem(USER_PROGRESS_STORAGE_KEY, JSON.stringify(fresh));
      return { progress: fresh, recoveredFromCorruption: true };
    }
    return { progress: validated.data, recoveredFromCorruption: false };
  } catch {
    return { progress: createInitialUserProgress(), recoveredFromCorruption: true };
  }
}

export function saveUserProgress(progress: UserProgress): void {
  const validated = UserProgressSchema.parse(progress);
  if (typeof window === "undefined") {
    return;
  }
  try {
    window.localStorage.setItem(USER_PROGRESS_STORAGE_KEY, JSON.stringify(validated));
  } catch {
    // Ignore storage quota errors in restricted browsing modes
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
