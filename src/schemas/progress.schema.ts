import { z } from "zod";
import {
  CefrLevelSchema,
  ChoiceIdSchema,
  FoundationModuleIdSchema,
  MockExamIdSchema,
  StudyStatusSchema,
} from "./curriculum.schema.ts";
import { UserVocabularyStateSchema } from "./vocabulary.schema.ts";

const SafeProgressRecordKeySchema = z
  .string()
  .min(1)
  .max(128)
  .refine(
    (key) => key !== "__proto__" && key !== "constructor" && key !== "prototype",
    "Invalid reserved object key",
  );

export const GeminiGrammarCorrectionSchema = z.strictObject({
  original: z.string().trim().min(1),
  corrected: z.string().trim().min(1),
  explanationEs: z.string().trim().min(1),
});
export type GeminiGrammarCorrection = z.infer<typeof GeminiGrammarCorrectionSchema>;

export const GeminiEvaluationSchema = z.strictObject({
  estimatedItepScore: z.number().min(0).max(6),
  cefrEstimate: z.string().trim().min(1),
  strengthsEs: z.array(z.string().trim().min(1)),
  grammarCorrections: z.array(GeminiGrammarCorrectionSchema),
  vocabularyUpgradesB2: z.array(z.string().trim().min(1)),
  overallFeedbackEs: z.string().trim().min(1),
});
export type GeminiEvaluation = z.infer<typeof GeminiEvaluationSchema>;

export const DiagnosticAttemptSchema = z.strictObject({
  completedAtIso: z.string().min(1),
  answers: z.record(SafeProgressRecordKeySchema, ChoiceIdSchema),
  scorePercent: z.number().min(0).max(100),
  levelBreakdown: z.strictObject({
    A1: z.strictObject({
      correct: z.number().int().nonnegative(),
      total: z.number().int().positive(),
    }),
    A2: z.strictObject({
      correct: z.number().int().nonnegative(),
      total: z.number().int().positive(),
    }),
    B1: z.strictObject({
      correct: z.number().int().nonnegative(),
      total: z.number().int().positive(),
    }),
  }),
  recommendedModuleIds: z.array(FoundationModuleIdSchema),
});
export type DiagnosticAttempt = z.infer<typeof DiagnosticAttemptSchema>;

export const WritingDraftSchema = z.strictObject({
  taskId: z.string().min(1),
  text: z.string(),
  wordCount: z.number().int().nonnegative(),
  elapsedSeconds: z.number().int().nonnegative(),
  updatedAtIso: z.string().min(1),
  lastEvaluation: GeminiEvaluationSchema.optional(),
});
export type WritingDraft = z.infer<typeof WritingDraftSchema>;

export const SpeakingSelfScoreSchema = z.strictObject({
  taskId: z.string().min(1),
  checkedCriteriaIndexes: z.array(z.number().int().nonnegative()),
  notes: z.string().default(""),
  completedAtIso: z.string().min(1),
});
export type SpeakingSelfScore = z.infer<typeof SpeakingSelfScoreSchema>;

export const MockAttemptSchema = z.strictObject({
  mockExamId: MockExamIdSchema,
  completedAtIso: z.string().min(1),
  estimatedItepScore: z.number().min(0).max(6),
  estimatedCefr: CefrLevelSchema,
  sectionScores: z.strictObject({
    grammar: z.number().min(0).max(6),
    listening: z.number().min(0).max(6),
    reading: z.number().min(0).max(6),
    writing: z.number().min(0).max(6),
    speaking: z.number().min(0).max(6),
  }),
  totalElapsedSeconds: z.number().int().nonnegative(),
});
export type MockAttempt = z.infer<typeof MockAttemptSchema>;

export const UserSettingsSchema = z.strictObject({
  geminiApiKey: z.string().optional(),
});
export type UserSettings = z.infer<typeof UserSettingsSchema>;

export const UserProgressSchema = z.strictObject({
  schemaVersion: z.literal(1),
  dayStatuses: z.record(SafeProgressRecordKeySchema, StudyStatusSchema),
  sectionStatuses: z.record(SafeProgressRecordKeySchema, StudyStatusSchema),
  diagnosticAttempt: DiagnosticAttemptSchema.nullable(),
  foundationStatuses: z.record(SafeProgressRecordKeySchema, StudyStatusSchema),
  playedAudioIds: z.array(z.string().min(1)),
  writingDrafts: z.record(SafeProgressRecordKeySchema, WritingDraftSchema),
  speakingSelfScores: z.record(SafeProgressRecordKeySchema, SpeakingSelfScoreSchema),
  mockAttempts: z.array(MockAttemptSchema),
  vocabulary: UserVocabularyStateSchema.default({
    customItems: [],
    srsRecords: {},
  }),
  settings: UserSettingsSchema,
});
export type UserProgress = z.infer<typeof UserProgressSchema>;

export function createInitialUserProgress(): UserProgress {
  return {
    schemaVersion: 1,
    dayStatuses: {},
    sectionStatuses: {},
    diagnosticAttempt: null,
    foundationStatuses: {},
    playedAudioIds: [],
    writingDrafts: {},
    speakingSelfScores: {},
    mockAttempts: [],
    vocabulary: {
      customItems: [],
      srsRecords: {},
    },
    settings: {},
  };
}
