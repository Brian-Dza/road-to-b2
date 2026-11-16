import { z } from "zod";

const NonEmptyIdSchema = z
  .string()
  .trim()
  .min(2)
  .regex(/^[a-zA-Z0-9_-]+$/, "ID must contain only alphanumeric, underscore, or hyphen characters");

const KebabSlugSchema = z
  .string()
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Must be a lowercase kebab-case slug");

export const CefrLevelSchema = z.enum(["A1", "A2", "B1", "B2"]);
export type CefrLevel = z.infer<typeof CefrLevelSchema>;

export const ItepSkillSchema = z.enum(["grammar", "listening", "reading", "writing", "speaking"]);
export type ItepSkill = z.infer<typeof ItepSkillSchema>;

export const StudyStatusSchema = z.enum(["pending", "in_review", "mastered"]);
export type StudyStatus = z.infer<typeof StudyStatusSchema>;

export const ChoiceIdSchema = z.enum(["A", "B", "C", "D"]);
export type ChoiceId = z.infer<typeof ChoiceIdSchema>;

export const ChoiceOptionSchema = z.strictObject({
  id: ChoiceIdSchema,
  text: z.string().trim().min(1),
  explanationEs: z.string().trim().min(15),
});
export type ChoiceOption = z.infer<typeof ChoiceOptionSchema>;

const FourChoicesSchema = z
  .array(ChoiceOptionSchema)
  .length(4)
  .refine(
    (options) =>
      options[0]?.id === "A" &&
      options[1]?.id === "B" &&
      options[2]?.id === "C" &&
      options[3]?.id === "D",
    {
      message: "Options must have exact ordered IDs: A, B, C, D",
    },
  );

export const NeuralVoiceIdSchema = z.enum([
  "en-US-AndrewMultilingualNeural",
  "en-US-AvaMultilingualNeural",
  "en-US-GuyNeural",
  "en-US-JennyNeural",
  "en-GB-RyanNeural",
  "en-GB-SoniaNeural",
]);
export type NeuralVoiceId = z.infer<typeof NeuralVoiceIdSchema>;

export const AudioTurnSchema = z.strictObject({
  speakerLabel: z.string().trim().min(1),
  voice: NeuralVoiceIdSchema,
  text: z.string().trim().min(2),
  pauseAfterMs: z.number().int().min(150).max(2000).default(450),
});
export type AudioTurn = z.infer<typeof AudioTurnSchema>;

export const AudioTrackSpecSchema = z
  .strictObject({
    trackId: KebabSlugSchema,
    audioUrl: z.string().trim().min(8),
    contextSetup: z.string().trim().min(5),
    turns: z.array(AudioTurnSchema).min(1),
  })
  .refine((spec) => spec.audioUrl === `/audio/${spec.trackId}.mp3`, {
    message: "audioUrl must strictly match /audio/<trackId>.mp3",
    path: ["audioUrl"],
  });
export type AudioTrackSpec = z.infer<typeof AudioTrackSpecSchema>;

export const GrammarPart1QuestionSchema = z.strictObject({
  part: z.literal("part1_fill_blank"),
  id: NonEmptyIdSchema,
  cefrLevel: CefrLevelSchema,
  grammarTopic: z.string().trim().min(3),
  sentenceWithBlank: z
    .string()
    .trim()
    .min(10)
    .refine((sentence) => sentence.includes("_____"), {
      message: 'sentenceWithBlank must contain the placeholder "_____"',
    }),
  options: FourChoicesSchema,
  correctOptionId: ChoiceIdSchema,
  strategyTipEs: z.string().trim().min(10),
});
export type GrammarPart1Question = z.infer<typeof GrammarPart1QuestionSchema>;

function hasValidMarkedSegments(sentence: string): boolean {
  const orderedPattern =
    /\[A\]\{[^}]+\}[\s\S]*\[B\]\{[^}]+\}[\s\S]*\[C\]\{[^}]+\}[\s\S]*\[D\]\{[^}]+\}/;
  if (!orderedPattern.test(sentence)) {
    return false;
  }
  const allMarkers = sentence.match(/\[[ABCD]\]\{[^}]+\}/g);
  return allMarkers !== null && allMarkers.length === 4;
}

export const GrammarPart2QuestionSchema = z.strictObject({
  part: z.literal("part2_error_identification"),
  id: NonEmptyIdSchema,
  cefrLevel: CefrLevelSchema,
  grammarTopic: z.string().trim().min(3),
  sentenceWithMarkedSegments: z.string().trim().min(20).refine(hasValidMarkedSegments, {
    message:
      "sentenceWithMarkedSegments must contain exact ordered markers [A]{...} [B]{...} [C]{...} [D]{...}",
  }),
  correctedSegment: z.string().trim().min(1),
  options: FourChoicesSchema,
  correctOptionId: ChoiceIdSchema,
  strategyTipEs: z.string().trim().min(10),
});
export type GrammarPart2Question = z.infer<typeof GrammarPart2QuestionSchema>;

export const GrammarQuestionSchema = z.discriminatedUnion("part", [
  GrammarPart1QuestionSchema,
  GrammarPart2QuestionSchema,
]);
export type GrammarQuestion = z.infer<typeof GrammarQuestionSchema>;

export const GrammarSectionSchema = z.strictObject({
  skill: z.literal("grammar"),
  cefrLevel: z.literal("B2"),
  title: z.string().trim().min(3),
  estimatedMinutes: z.number().int().positive(),
  timeLimitSeconds: z.number().int().positive(),
  focusSummaryEs: z.string().trim().min(15),
  questions: z.array(GrammarQuestionSchema).min(8),
});
export type GrammarSection = z.infer<typeof GrammarSectionSchema>;

export const ListeningQuestionSchema = z.strictObject({
  id: NonEmptyIdSchema,
  prompt: z.string().trim().min(5),
  options: FourChoicesSchema,
  correctOptionId: ChoiceIdSchema,
});
export type ListeningQuestion = z.infer<typeof ListeningQuestionSchema>;

export const ListeningPartItemSchema = z.strictObject({
  part: z.enum(["part1_short_dialogue", "part2_conversation", "part3_lecture"]),
  id: NonEmptyIdSchema,
  title: z.string().trim().min(3),
  cefrLevel: z.literal("B2"),
  audio: AudioTrackSpecSchema,
  questions: z.array(ListeningQuestionSchema).min(1),
  keyTakeawayEs: z.string().trim().min(15),
});
export type ListeningPartItem = z.infer<typeof ListeningPartItemSchema>;

export const ListeningSectionSchema = z.strictObject({
  skill: z.literal("listening"),
  cefrLevel: z.literal("B2"),
  title: z.string().trim().min(3),
  estimatedMinutes: z.number().int().positive(),
  timeLimitSeconds: z.number().int().positive(),
  focusSummaryEs: z.string().trim().min(15),
  items: z.array(ListeningPartItemSchema).min(1),
});
export type ListeningSection = z.infer<typeof ListeningSectionSchema>;

export const ReadingQuestionTypeSchema = z.enum([
  "main_idea",
  "detail",
  "vocabulary_in_context",
  "inference",
  "rhetorical_purpose",
  "sentence_insertion",
  "synthesis",
]);
export type ReadingQuestionType = z.infer<typeof ReadingQuestionTypeSchema>;

export const ReadingQuestionSchema = z
  .strictObject({
    id: NonEmptyIdSchema,
    questionType: ReadingQuestionTypeSchema,
    prompt: z.string().trim().min(5),
    sentenceToInsert: z.string().trim().min(10).optional(),
    options: FourChoicesSchema,
    correctOptionId: ChoiceIdSchema,
  })
  .refine(
    (question) =>
      question.questionType === "sentence_insertion" ? Boolean(question.sentenceToInsert) : true,
    {
      message: 'sentenceToInsert is required when questionType is "sentence_insertion"',
      path: ["sentenceToInsert"],
    },
  );
export type ReadingQuestion = z.infer<typeof ReadingQuestionSchema>;

export const ReadingPassageSchema = z
  .strictObject({
    part: z.enum(["part1_intermediate", "part2_academic"]),
    id: NonEmptyIdSchema,
    title: z.string().trim().min(3),
    cefrLevel: z.literal("B2"),
    topicDomain: z.string().trim().min(3),
    paragraphs: z.array(z.string().trim().min(20)).min(2),
    questions: z.array(ReadingQuestionSchema).min(4),
  })
  .superRefine((passage, ctx) => {
    if (passage.part === "part2_academic") {
      const fullText = passage.paragraphs.join("\n\n");
      const requiredMarkers = ["[A]", "[B]", "[C]", "[D]"] as const;
      for (const marker of requiredMarkers) {
        if (!fullText.includes(marker)) {
          ctx.addIssue({
            code: "custom",
            path: ["paragraphs"],
            message: `Academic passage (${passage.id}) must include insertion marker ${marker}`,
          });
        }
      }
      const hasInsertionQuestion = passage.questions.some(
        (q) => q.questionType === "sentence_insertion",
      );
      if (!hasInsertionQuestion) {
        ctx.addIssue({
          code: "custom",
          path: ["questions"],
          message: `Academic passage (${passage.id}) must include at least one "sentence_insertion" question`,
        });
      }
    }
  });
export type ReadingPassage = z.infer<typeof ReadingPassageSchema>;

export const ReadingSectionSchema = z.strictObject({
  skill: z.literal("reading"),
  cefrLevel: z.literal("B2"),
  title: z.string().trim().min(3),
  estimatedMinutes: z.number().int().positive(),
  timeLimitSeconds: z.number().int().positive(),
  focusSummaryEs: z.string().trim().min(15),
  passages: z.array(ReadingPassageSchema).min(1),
});
export type ReadingSection = z.infer<typeof ReadingSectionSchema>;

export const WritingTaskItemSchema = z
  .strictObject({
    part: z.enum(["part1_note", "part2_essay"]),
    id: NonEmptyIdSchema,
    cefrLevel: z.literal("B2"),
    title: z.string().trim().min(3),
    prompt: z.string().trim().min(20),
    timeLimitSeconds: z.number().int().positive(),
    minWords: z.number().int().positive(),
    maxWords: z.number().int().positive(),
    strategyGuideEs: z.string().trim().min(20),
    recommendedConnectors: z.array(z.string().trim().min(2)).min(3),
    b2RubricChecklistEs: z.array(z.string().trim().min(10)).min(4),
    modelAnswerB2: z.string().trim().min(30),
  })
  .refine((task) => task.maxWords > task.minWords, {
    message: "maxWords must be greater than minWords",
    path: ["maxWords"],
  });
export type WritingTaskItem = z.infer<typeof WritingTaskItemSchema>;

export const WritingSectionSchema = z.strictObject({
  skill: z.literal("writing"),
  cefrLevel: z.literal("B2"),
  title: z.string().trim().min(3),
  estimatedMinutes: z.number().int().positive(),
  timeLimitSeconds: z.number().int().positive(),
  focusSummaryEs: z.string().trim().min(15),
  tasks: z.array(WritingTaskItemSchema).min(1),
});
export type WritingSection = z.infer<typeof WritingSectionSchema>;

export const SpeakingTaskItemSchema = z
  .strictObject({
    part: z.enum(["part1_personal", "part2_opinion"]),
    id: NonEmptyIdSchema,
    cefrLevel: z.literal("B2"),
    title: z.string().trim().min(3),
    prompt: z.string().trim().min(15),
    audioPrompt: AudioTrackSpecSchema.optional(),
    prepSeconds: z.number().int().positive(),
    recordSeconds: z.number().int().positive(),
    structureTemplate: z.array(z.string().trim().min(5)).min(3),
    keyPhrasesB2: z.array(z.string().trim().min(3)).min(3),
    selfRubricChecklistEs: z.array(z.string().trim().min(10)).min(4),
    modelTranscriptB2: z.string().trim().min(30),
  })
  .refine((task) => (task.part === "part2_opinion" ? Boolean(task.audioPrompt) : true), {
    message: 'audioPrompt is required when Speaking part is "part2_opinion"',
    path: ["audioPrompt"],
  });
export type SpeakingTaskItem = z.infer<typeof SpeakingTaskItemSchema>;

export const SpeakingSectionSchema = z.strictObject({
  skill: z.literal("speaking"),
  cefrLevel: z.literal("B2"),
  title: z.string().trim().min(3),
  estimatedMinutes: z.number().int().positive(),
  timeLimitSeconds: z.number().int().positive(),
  focusSummaryEs: z.string().trim().min(15),
  tasks: z.array(SpeakingTaskItemSchema).min(1),
});
export type SpeakingSection = z.infer<typeof SpeakingSectionSchema>;

export const MockExamIdSchema = z.enum(["mock-mid-day08", "mock-final-day14"]);
export type MockExamId = z.infer<typeof MockExamIdSchema>;

export const RoadmapDaySchema = z
  .strictObject({
    dayNumber: z.number().int().min(1).max(15),
    sprintNumber: z.union([z.literal(1), z.literal(2), z.literal(3)]),
    cefrLevel: z.literal("B2"),
    title: z.string().trim().min(5),
    subtitleEs: z.string().trim().min(5),
    b2FocusSummaryEs: z.string().trim().min(20),
    estimatedMinutes: z.number().int().min(120).max(180),
    isMockExamDay: z.boolean(),
    mockExamId: MockExamIdSchema.optional(),
    sections: z.strictObject({
      grammar: GrammarSectionSchema,
      listening: ListeningSectionSchema,
      reading: ReadingSectionSchema,
      writing: WritingSectionSchema,
      speaking: SpeakingSectionSchema,
    }),
    dailyChecklistEs: z.array(z.string().trim().min(8)).min(3),
  })
  .refine((day) => (day.isMockExamDay ? Boolean(day.mockExamId) : day.mockExamId === undefined), {
    message: "mockExamId must be set if and only if isMockExamDay is true",
    path: ["mockExamId"],
  });
export type RoadmapDay = z.infer<typeof RoadmapDaySchema>;

export const FoundationModuleIdSchema = z.enum([
  "a1-core-structures",
  "a1-nouns-articles-quantifiers",
  "a2-past-future-narration",
  "a2-modals-comparisons",
  "b1-perfect-tenses-passive",
  "b1-conditionals-relatives-connectors",
]);
export type FoundationModuleId = z.infer<typeof FoundationModuleIdSchema>;

export const DiagnosticQuestionSchema = z.strictObject({
  id: NonEmptyIdSchema,
  cefrLevel: z.enum(["A1", "A2", "B1"]),
  skill: ItepSkillSchema,
  remediationModuleId: FoundationModuleIdSchema,
  prompt: z.string().trim().min(8),
  options: FourChoicesSchema,
  correctOptionId: ChoiceIdSchema,
});
export type DiagnosticQuestion = z.infer<typeof DiagnosticQuestionSchema>;

export const DiagnosticTestSchema = z
  .strictObject({
    id: NonEmptyIdSchema,
    title: z.string().trim().min(5),
    subtitleEs: z.string().trim().min(10),
    instructionsEs: z.string().trim().min(15),
    estimatedMinutes: z.number().int().min(10).max(45),
    passingThresholdPercent: z.number().int().min(60).max(95),
    questions: z.array(DiagnosticQuestionSchema).length(30),
  })
  .superRefine((test, ctx) => {
    const counts = { A1: 0, A2: 0, B1: 0 };
    for (const q of test.questions) {
      counts[q.cefrLevel] += 1;
    }
    if (counts.A1 !== 10 || counts.A2 !== 10 || counts.B1 !== 10) {
      ctx.addIssue({
        code: "custom",
        path: ["questions"],
        message: `DiagnosticTest must contain exactly 10 A1, 10 A2, and 10 B1 questions (received A1=${counts.A1}, A2=${counts.A2}, B1=${counts.B1})`,
      });
    }
  });
export type DiagnosticTest = z.infer<typeof DiagnosticTestSchema>;

export const FoundationContrastRowSchema = z.strictObject({
  conceptEs: z.string().trim().min(3),
  incorrectExample: z.string().trim().min(3),
  correctExample: z.string().trim().min(3),
  whyItMattersEs: z.string().trim().min(10),
});
export type FoundationContrastRow = z.infer<typeof FoundationContrastRowSchema>;

export const FoundationPracticeQuestionSchema = z.strictObject({
  id: NonEmptyIdSchema,
  prompt: z.string().trim().min(8),
  options: FourChoicesSchema,
  correctOptionId: ChoiceIdSchema,
});
export type FoundationPracticeQuestion = z.infer<typeof FoundationPracticeQuestionSchema>;

export const FoundationModuleSchema = z.strictObject({
  id: FoundationModuleIdSchema,
  cefrLevel: z.enum(["A1", "A2", "B1"]),
  skill: ItepSkillSchema,
  title: z.string().trim().min(5),
  subtitleEs: z.string().trim().min(10),
  estimatedMinutes: z.number().int().min(10).max(45),
  coreRuleSummaryEs: z.string().trim().min(30),
  itepBridgeTipEs: z.string().trim().min(20),
  contrastTable: z.array(FoundationContrastRowSchema).min(3),
  microCheckQuestions: z.array(FoundationPracticeQuestionSchema).min(4),
});
export type FoundationModule = z.infer<typeof FoundationModuleSchema>;

export const AudioManifestEntrySchema = z.strictObject({
  trackId: KebabSlugSchema,
  audioUrl: z.string().startsWith("/audio/").endsWith(".mp3"),
  sha256: z.string().regex(/^[a-f0-9]{64}$/, "sha256 must be 64 lowercase hex characters"),
  durationSeconds: z.number().positive(),
});
export type AudioManifestEntry = z.infer<typeof AudioManifestEntrySchema>;

export const AudioManifestSchema = z.record(z.string(), AudioManifestEntrySchema);
export type AudioManifest = z.infer<typeof AudioManifestSchema>;
