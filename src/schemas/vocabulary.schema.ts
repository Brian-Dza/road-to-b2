import { z } from "zod";
import { AudioTrackSpecSchema, ItepSkillSchema, StudyStatusSchema } from "./curriculum.schema.ts";

export const VocabCefrLevelSchema = z.enum(["A1", "A2", "B1", "B2", "C1", "C2"]);
export type VocabCefrLevel = z.infer<typeof VocabCefrLevelSchema>;

export const PartOfSpeechSchema = z.enum([
  "noun",
  "verb",
  "adjective",
  "adverb",
  "connector",
  "collocation",
]);
export type PartOfSpeech = z.infer<typeof PartOfSpeechSchema>;

const LinkedDayNumberSchema = z.number().int().min(1).max(15);

const SafeVocabRecordKeySchema = z
  .string()
  .min(1)
  .max(128)
  .refine(
    (key) => key !== "__proto__" && key !== "constructor" && key !== "prototype",
    "Invalid reserved object key",
  );

export const CuratedVocabularyItemSchema = z.strictObject({
  id: z
    .string()
    .regex(
      /^vocab-[a-z0-9]+(?:-[a-z0-9]+)*$/,
      'Curated vocabulary ID must start with "vocab-" followed by lowercase kebab-case',
    ),
  source: z.literal("curated"),
  term: z.string().trim().min(2),
  ipa: z.string().trim().min(3),
  partOfSpeech: PartOfSpeechSchema,
  cefrLevel: VocabCefrLevelSchema,
  meaningEs: z.string().trim().min(10),
  exampleEn: z.string().trim().min(15),
  exampleTranslationEs: z.string().trim().min(10),
  b1SynonymOrTrap: z.string().trim().min(10),
  collocations: z.array(z.string().trim().min(3)).min(2).max(4),
  linkedDayNumbers: z.array(LinkedDayNumberSchema).min(1),
  primarySkill: ItepSkillSchema,
  audio: AudioTrackSpecSchema,
});
export type CuratedVocabularyItem = z.infer<typeof CuratedVocabularyItemSchema>;

export const CustomVocabularyItemSchema = z.strictObject({
  id: z
    .string()
    .trim()
    .min(4)
    .regex(/^[a-zA-Z0-9_-]+$/, "Custom vocabulary ID must be alphanumeric, underscore, or hyphen"),
  source: z.literal("custom"),
  createdAtIso: z.string().min(1),
  updatedAtIso: z.string().min(1),
  term: z.string().trim().min(1),
  ipa: z.string().trim().optional(),
  partOfSpeech: PartOfSpeechSchema,
  cefrLevel: VocabCefrLevelSchema,
  meaningEs: z.string().trim().min(2),
  exampleEn: z.string().trim().min(5),
  exampleTranslationEs: z.string().trim().optional(),
  b1SynonymOrTrap: z.string().trim().optional(),
  collocations: z.array(z.string().trim().min(2)),
  linkedDayNumbers: z.array(LinkedDayNumberSchema),
});
export type CustomVocabularyItem = z.infer<typeof CustomVocabularyItemSchema>;

export const VocabularyItemSchema = z.discriminatedUnion("source", [
  CuratedVocabularyItemSchema,
  CustomVocabularyItemSchema,
]);
export type VocabularyItem = z.infer<typeof VocabularyItemSchema>;

export const SrsRatingSchema = z.enum(["again", "hard", "good", "easy"]);
export type SrsRating = z.infer<typeof SrsRatingSchema>;

export const VocabularySrsRecordSchema = z.strictObject({
  itemId: z.string().min(1),
  status: StudyStatusSchema,
  repetitions: z.number().int().nonnegative(),
  intervalDays: z.number().nonnegative(),
  easeFactor: z.number().min(1.3).max(4),
  dueAtIso: z.string().min(1),
  lastReviewedAtIso: z.string().min(1),
  reviewCount: z.number().int().positive(),
  lapseCount: z.number().int().nonnegative(),
});
export type VocabularySrsRecord = z.infer<typeof VocabularySrsRecordSchema>;

export const GeminiVocabularySuggestionSchema = z.strictObject({
  ipa: z.string().trim().min(2),
  partOfSpeech: PartOfSpeechSchema,
  cefrLevel: VocabCefrLevelSchema,
  meaningEs: z.string().trim().min(5),
  exampleEn: z.string().trim().min(10),
  exampleTranslationEs: z.string().trim().min(5),
  b1SynonymOrTrap: z.string().trim().min(5),
  collocations: z.array(z.string().trim().min(2)).min(1).max(5),
});
export type GeminiVocabularySuggestion = z.infer<typeof GeminiVocabularySuggestionSchema>;

export const UserVocabularyStateSchema = z.strictObject({
  customItems: z.array(CustomVocabularyItemSchema),
  srsRecords: z.record(SafeVocabRecordKeySchema, VocabularySrsRecordSchema),
});
export type UserVocabularyState = z.infer<typeof UserVocabularyStateSchema>;
