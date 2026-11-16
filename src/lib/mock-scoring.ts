import { countWords } from "@/lib/ai-evaluator.ts";
import type {
  CefrLevel,
  ChoiceId,
  MockExamId,
  RoadmapDay,
  SpeakingTaskItem,
  WritingTaskItem,
} from "@/schemas/curriculum.schema.ts";
import type { MockAttempt, WritingDraft } from "@/schemas/progress.schema.ts";

const B2_SYNTACTIC_MARKERS: readonly RegExp[] = [
  /\bwhether\b/i,
  /\bwhereas\b/i,
  /\bnevertheless\b/i,
  /\bfurthermore\b/i,
  /\bmoreover\b/i,
  /\balthough\b/i,
  /\bdespite\b/i,
  /\btherefore\b/i,
  /\bconsequently\b/i,
  /\badmittedly\b/i,
  /\bin which\b/i,
  /\bby which\b/i,
  /\brather than\b/i,
  /\bnot only\b/i,
  /\bprovided that\b/i,
];

function roundOneDecimal(value: number): number {
  const clamped = Math.max(0, Math.min(6, value));
  return Math.round(clamped * 10) / 10;
}

function scoreToCefrLevel(score: number): CefrLevel {
  if (score >= 3.5) {
    return "B2";
  }
  if (score >= 2.5) {
    return "B1";
  }
  if (score >= 2.0) {
    return "A2";
  }
  return "A1";
}

function scoreSingleWritingTask(
  task: WritingTaskItem,
  rawText: string,
  draft?: WritingDraft,
): number {
  if (draft?.lastEvaluation) {
    return roundOneDecimal(draft.lastEvaluation.estimatedItepScore);
  }

  const words = countWords(rawText);
  if (words === 0) {
    return 0;
  }

  const minRatio = words / task.minWords;
  let lengthScore = 0;
  if (words >= task.minWords && words <= Math.ceil(task.maxWords * 1.15)) {
    lengthScore = 2.6;
  } else if (minRatio >= 0.7) {
    lengthScore = 1.9;
  } else if (minRatio >= 0.35) {
    lengthScore = 1.1;
  } else {
    lengthScore = 0.5;
  }

  let markerMatches = 0;
  for (const marker of B2_SYNTACTIC_MARKERS) {
    if (marker.test(rawText)) {
      markerMatches += 1;
    }
  }
  const cohesionScore = Math.min(1.6, markerMatches * 0.4);

  const uniqueTokens = new Set(
    rawText
      .toLowerCase()
      .replace(/[^a-z\s]/g, " ")
      .split(/\s+/)
      .filter((w) => w.length >= 4),
  );
  const lexicalScore = Math.min(1.2, uniqueTokens.size / (task.part === "part1_note" ? 18 : 48));

  return roundOneDecimal(lengthScore + cohesionScore + lexicalScore);
}

function scoreSingleSpeakingTask(
  task: SpeakingTaskItem,
  recordedTaskIds: ReadonlySet<string>,
  checkedIndexes: readonly number[],
): number {
  const hasRecording = recordedTaskIds.has(task.id);
  const totalCriteria = task.selfRubricChecklistEs.length;
  const checkedRatio = totalCriteria > 0 ? Math.min(1, checkedIndexes.length / totalCriteria) : 0;

  if (!hasRecording && checkedIndexes.length === 0) {
    return 0;
  }

  const baseDelivery = hasRecording ? 2.2 : 1.2;
  const rubricContribution = checkedRatio * 2.8;
  return roundOneDecimal(baseDelivery + rubricContribution);
}

export interface MockExamSubmissionInput {
  readonly mockExamId: MockExamId;
  readonly day: RoadmapDay;
  readonly grammarAnswers: Readonly<Record<string, ChoiceId>>;
  readonly listeningAnswers: Readonly<Record<string, ChoiceId>>;
  readonly readingAnswers: Readonly<Record<string, ChoiceId>>;
  readonly writingTexts: Readonly<Record<string, string>>;
  readonly writingDrafts: Readonly<Record<string, WritingDraft>>;
  readonly recordedSpeakingTaskIds: ReadonlySet<string>;
  readonly speakingCheckedCriteria: Readonly<Record<string, readonly number[]>>;
  readonly totalElapsedSeconds: number;
}

export function computeMockExamAttempt(input: MockExamSubmissionInput): MockAttempt {
  const { day } = input;

  // 1. Grammar
  const grammarTotal = day.sections.grammar.questions.length;
  let grammarCorrect = 0;
  for (const q of day.sections.grammar.questions) {
    if (input.grammarAnswers[q.id] === q.correctOptionId) {
      grammarCorrect += 1;
    }
  }
  const grammarScore = grammarTotal > 0 ? roundOneDecimal((grammarCorrect / grammarTotal) * 6) : 0;

  // 2. Listening
  let listeningTotal = 0;
  let listeningCorrect = 0;
  for (const item of day.sections.listening.items) {
    for (const q of item.questions) {
      listeningTotal += 1;
      if (input.listeningAnswers[q.id] === q.correctOptionId) {
        listeningCorrect += 1;
      }
    }
  }
  const listeningScore =
    listeningTotal > 0 ? roundOneDecimal((listeningCorrect / listeningTotal) * 6) : 0;

  // 3. Reading
  let readingTotal = 0;
  let readingCorrect = 0;
  for (const passage of day.sections.reading.passages) {
    for (const q of passage.questions) {
      readingTotal += 1;
      if (input.readingAnswers[q.id] === q.correctOptionId) {
        readingCorrect += 1;
      }
    }
  }
  const readingScore = readingTotal > 0 ? roundOneDecimal((readingCorrect / readingTotal) * 6) : 0;

  // 4. Writing (Part 1 carries 35% weight, Part 2 essay carries 65% weight)
  let writingWeightedSum = 0;
  let writingWeightTotal = 0;
  for (const task of day.sections.writing.tasks) {
    const weight = task.part === "part2_essay" ? 0.65 : 0.35;
    const text = input.writingTexts[task.id] ?? input.writingDrafts[task.id]?.text ?? "";
    const taskScore = scoreSingleWritingTask(task, text, input.writingDrafts[task.id]);
    writingWeightedSum += taskScore * weight;
    writingWeightTotal += weight;
  }
  const writingScore =
    writingWeightTotal > 0 ? roundOneDecimal(writingWeightedSum / writingWeightTotal) : 0;

  // 5. Speaking (Part 1 carries 40% weight, Part 2 opinion carries 60% weight)
  let speakingWeightedSum = 0;
  let speakingWeightTotal = 0;
  for (const task of day.sections.speaking.tasks) {
    const weight = task.part === "part2_opinion" ? 0.6 : 0.4;
    const criteria = input.speakingCheckedCriteria[task.id] ?? [];
    const taskScore = scoreSingleSpeakingTask(task, input.recordedSpeakingTaskIds, criteria);
    speakingWeightedSum += taskScore * weight;
    speakingWeightTotal += weight;
  }
  const speakingScore =
    speakingWeightTotal > 0 ? roundOneDecimal(speakingWeightedSum / speakingWeightTotal) : 0;

  const overallScore = roundOneDecimal(
    (grammarScore + listeningScore + readingScore + writingScore + speakingScore) / 5,
  );

  return {
    mockExamId: input.mockExamId,
    completedAtIso: new Date().toISOString(),
    estimatedItepScore: overallScore,
    estimatedCefr: scoreToCefrLevel(overallScore),
    sectionScores: {
      grammar: grammarScore,
      listening: listeningScore,
      reading: readingScore,
      writing: writingScore,
      speaking: speakingScore,
    },
    totalElapsedSeconds: Math.max(0, Math.floor(input.totalElapsedSeconds)),
  };
}
