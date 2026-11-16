import { existsSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import {
  collectCurriculumAudioTracks,
  curriculumRegistry,
} from "../src/data/curriculum-registry.ts";
import {
  type AudioManifest,
  type AudioManifestEntry,
  AudioManifestEntrySchema,
  AudioManifestSchema,
  type AudioTrackSpec,
  AudioTrackSpecSchema,
  type AudioTurn,
  AudioTurnSchema,
  type CefrLevel,
  CefrLevelSchema,
  type ChoiceId,
  ChoiceIdSchema,
  type ChoiceOption,
  ChoiceOptionSchema,
  type DiagnosticQuestion,
  DiagnosticQuestionSchema,
  type DiagnosticTest,
  DiagnosticTestSchema,
  type FoundationContrastRow,
  FoundationContrastRowSchema,
  type FoundationModule,
  type FoundationModuleId,
  FoundationModuleIdSchema,
  FoundationModuleSchema,
  type FoundationPracticeQuestion,
  FoundationPracticeQuestionSchema,
  type GrammarPart1Question,
  GrammarPart1QuestionSchema,
  type GrammarPart2Question,
  GrammarPart2QuestionSchema,
  type GrammarQuestion,
  GrammarQuestionSchema,
  type GrammarSection,
  GrammarSectionSchema,
  type ItepSkill,
  ItepSkillSchema,
  type ListeningPartItem,
  ListeningPartItemSchema,
  type ListeningQuestion,
  ListeningQuestionSchema,
  type ListeningSection,
  ListeningSectionSchema,
  type MockExamId,
  MockExamIdSchema,
  type NeuralVoiceId,
  NeuralVoiceIdSchema,
  type ReadingPassage,
  ReadingPassageSchema,
  type ReadingQuestion,
  ReadingQuestionSchema,
  type ReadingQuestionType,
  ReadingQuestionTypeSchema,
  type ReadingSection,
  ReadingSectionSchema,
  type RoadmapDay,
  RoadmapDaySchema,
  type SpeakingSection,
  SpeakingSectionSchema,
  type SpeakingTaskItem,
  SpeakingTaskItemSchema,
  type StudyStatus,
  StudyStatusSchema,
  type WritingSection,
  WritingSectionSchema,
  type WritingTaskItem,
  WritingTaskItemSchema,
} from "../src/schemas/curriculum.schema.ts";
import {
  type CuratedVocabularyItem,
  CuratedVocabularyItemSchema,
  type PartOfSpeech,
  PartOfSpeechSchema,
  type VocabCefrLevel,
  VocabCefrLevelSchema,
  VocabularyItemSchema,
} from "../src/schemas/vocabulary.schema.ts";
import { computeAudioSpecSha256 } from "./export-audio-tracks.ts";

const ROOT_DIR = resolve(import.meta.dirname, "..");
const PUBLIC_DIR = resolve(ROOT_DIR, "public");
const MANIFEST_FILE = resolve(ROOT_DIR, "src/data/generated/audio-manifest.json");

type ValidationMode = "full" | "seed-only" | "allow-empty";

interface CliOptions {
  readonly mode: ValidationMode;
  readonly exportAudioSpecsPath: string | null;
}

function parseCliArgs(argv: readonly string[]): CliOptions {
  let mode: ValidationMode = "full";
  let exportAudioSpecsPath: string | null = null;

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--seed-only") {
      mode = "seed-only";
    } else if (arg === "--allow-empty") {
      mode = "allow-empty";
    } else if (arg === "--export-audio-specs") {
      const next = argv[i + 1];
      if (!next) {
        throw new Error("Missing path argument after --export-audio-specs");
      }
      exportAudioSpecsPath = resolve(next);
      i += 1;
    }
  }

  return { mode, exportAudioSpecsPath };
}

export function countEnglishWords(rawText: string): number {
  const cleaned = rawText
    .replace(/\[[ABCD]\]/g, " ")
    .replace(/[—–]/g, " ")
    .trim();
  if (!cleaned) {
    return 0;
  }
  return cleaned.split(/\s+/).filter((token) => /[a-zA-Z0-9]/.test(token)).length;
}

const FORBIDDEN_PLACEHOLDER_PATTERNS: readonly RegExp[] = [
  /\blorem\s+ipsum\b/i,
  /\bTODO\b/,
  /\bFIXME\b/,
  /\bEjemplo\s+1\b/i,
];

function checkNoForbiddenPlaceholders(label: string, text: string, errors: string[]): void {
  for (const pattern of FORBIDDEN_PLACEHOLDER_PATTERNS) {
    if (pattern.test(text)) {
      errors.push(`${label}: contains forbidden placeholder matching ${pattern}`);
    }
  }
}

function verifySchemaPrimitivesSelfCheck(errors: string[]): void {
  const levelCheck: CefrLevel = CefrLevelSchema.parse("B2");
  const skillCheck: ItepSkill = ItepSkillSchema.parse("grammar");
  const statusCheck: StudyStatus = StudyStatusSchema.parse("pending");
  const choiceCheck: ChoiceId = ChoiceIdSchema.parse("A");
  const voiceCheck: NeuralVoiceId = NeuralVoiceIdSchema.parse("en-US-AndrewMultilingualNeural");
  const readingTypeCheck: ReadingQuestionType =
    ReadingQuestionTypeSchema.parse("sentence_insertion");
  const mockIdCheck: MockExamId = MockExamIdSchema.parse("mock-mid-day08");
  const foundationIdCheck: FoundationModuleId =
    FoundationModuleIdSchema.parse("a1-core-structures");

  const sampleOption: ChoiceOption = ChoiceOptionSchema.parse({
    id: choiceCheck,
    text: "Sample academic choice",
    explanationEs: "Explicación diagnóstica válida de prueba interna.",
  });
  const sampleTurn: AudioTurn = AudioTurnSchema.parse({
    speakerLabel: "Narrator",
    voice: voiceCheck,
    text: "Academic verification check.",
    pauseAfterMs: 450,
  });

  if (
    !levelCheck ||
    !skillCheck ||
    !statusCheck ||
    !readingTypeCheck ||
    !mockIdCheck ||
    !foundationIdCheck ||
    !sampleOption.id ||
    !sampleTurn.voice
  ) {
    errors.push("Internal schema primitive self-check failed");
  }
}

function registerUniqueId(
  seenIds: Map<string, string>,
  id: string,
  context: string,
  errors: string[],
): void {
  const existing = seenIds.get(id);
  if (existing) {
    errors.push(`Duplicate ID "${id}" in ${context} (already used in ${existing})`);
  } else {
    seenIds.set(id, context);
  }
}

function validateGrammarSection(
  dayLabel: string,
  section: GrammarSection,
  seenIds: Map<string, string>,
  errors: string[],
): void {
  const parsedSection = GrammarSectionSchema.safeParse(section);
  if (!parsedSection.success) {
    errors.push(`${dayLabel} grammar section failed Zod: ${parsedSection.error.message}`);
    return;
  }

  for (const question of parsedSection.data.questions) {
    const qParsed = GrammarQuestionSchema.safeParse(question);
    if (!qParsed.success) {
      errors.push(`${dayLabel} grammar question failed Zod: ${qParsed.error.message}`);
      continue;
    }
    const q: GrammarQuestion = qParsed.data;
    registerUniqueId(seenIds, q.id, `${dayLabel}.grammar`, errors);

    if (q.part === "part1_fill_blank") {
      const p1: GrammarPart1Question = GrammarPart1QuestionSchema.parse(q);
      checkNoForbiddenPlaceholders(`${dayLabel}.grammar.${p1.id}`, p1.sentenceWithBlank, errors);
    } else {
      const p2: GrammarPart2Question = GrammarPart2QuestionSchema.parse(q);
      checkNoForbiddenPlaceholders(
        `${dayLabel}.grammar.${p2.id}`,
        p2.sentenceWithMarkedSegments,
        errors,
      );
    }
  }
}

function validateListeningSection(
  dayLabel: string,
  section: ListeningSection,
  seenIds: Map<string, string>,
  errors: string[],
): void {
  const parsedSection = ListeningSectionSchema.safeParse(section);
  if (!parsedSection.success) {
    errors.push(`${dayLabel} listening section failed Zod: ${parsedSection.error.message}`);
    return;
  }

  for (const item of parsedSection.data.items) {
    const itemParsed: ListeningPartItem = ListeningPartItemSchema.parse(item);
    registerUniqueId(seenIds, itemParsed.id, `${dayLabel}.listening`, errors);
    for (const turn of itemParsed.audio.turns) {
      checkNoForbiddenPlaceholders(`${dayLabel}.listening.${itemParsed.id}`, turn.text, errors);
    }
    for (const question of itemParsed.questions) {
      const q: ListeningQuestion = ListeningQuestionSchema.parse(question);
      registerUniqueId(seenIds, q.id, `${dayLabel}.listening.${itemParsed.id}`, errors);
      checkNoForbiddenPlaceholders(`${dayLabel}.listening.${q.id}`, q.prompt, errors);
    }
  }
}

function validateReadingSection(
  dayLabel: string,
  section: ReadingSection,
  seenIds: Map<string, string>,
  errors: string[],
): void {
  const parsedSection = ReadingSectionSchema.safeParse(section);
  if (!parsedSection.success) {
    errors.push(`${dayLabel} reading section failed Zod: ${parsedSection.error.message}`);
    return;
  }

  for (const passage of parsedSection.data.passages) {
    const p: ReadingPassage = ReadingPassageSchema.parse(passage);
    registerUniqueId(seenIds, p.id, `${dayLabel}.reading`, errors);
    const fullText = p.paragraphs.join(" ");
    checkNoForbiddenPlaceholders(`${dayLabel}.reading.${p.id}`, fullText, errors);

    const words = countEnglishWords(fullText);
    if (p.part === "part1_intermediate" && (words < 190 || words > 330)) {
      errors.push(
        `${dayLabel}.reading.${p.id} (part1_intermediate): expected ~220-280 words (allowed 190-330), got ${words}`,
      );
    }
    if (p.part === "part2_academic" && (words < 360 || words > 560)) {
      errors.push(
        `${dayLabel}.reading.${p.id} (part2_academic): expected ~400-500 words (allowed 360-560), got ${words}`,
      );
    }

    for (const question of p.questions) {
      const q: ReadingQuestion = ReadingQuestionSchema.parse(question);
      registerUniqueId(seenIds, q.id, `${dayLabel}.reading.${p.id}`, errors);
      checkNoForbiddenPlaceholders(`${dayLabel}.reading.${q.id}`, q.prompt, errors);
    }
  }
}

function validateWritingSection(
  dayLabel: string,
  section: WritingSection,
  seenIds: Map<string, string>,
  errors: string[],
): void {
  const parsedSection = WritingSectionSchema.safeParse(section);
  if (!parsedSection.success) {
    errors.push(`${dayLabel} writing section failed Zod: ${parsedSection.error.message}`);
    return;
  }

  for (const task of parsedSection.data.tasks) {
    const t: WritingTaskItem = WritingTaskItemSchema.parse(task);
    registerUniqueId(seenIds, t.id, `${dayLabel}.writing`, errors);
    checkNoForbiddenPlaceholders(`${dayLabel}.writing.${t.id}`, t.prompt, errors);
    checkNoForbiddenPlaceholders(`${dayLabel}.writing.${t.id}.model`, t.modelAnswerB2, errors);

    const modelWords = countEnglishWords(t.modelAnswerB2);
    const minAllowed = Math.max(40, t.minWords - 5);
    const maxAllowed = Math.ceil(t.maxWords * 1.3);
    if (modelWords < minAllowed || modelWords > maxAllowed) {
      errors.push(
        `${dayLabel}.writing.${t.id}: modelAnswerB2 word count (${modelWords}) outside allowed range [${minAllowed}, ${maxAllowed}] for target ${t.minWords}-${t.maxWords}`,
      );
    }
  }
}

function validateSpeakingSection(
  dayLabel: string,
  section: SpeakingSection,
  seenIds: Map<string, string>,
  errors: string[],
): void {
  const parsedSection = SpeakingSectionSchema.safeParse(section);
  if (!parsedSection.success) {
    errors.push(`${dayLabel} speaking section failed Zod: ${parsedSection.error.message}`);
    return;
  }

  for (const task of parsedSection.data.tasks) {
    const t: SpeakingTaskItem = SpeakingTaskItemSchema.parse(task);
    registerUniqueId(seenIds, t.id, `${dayLabel}.speaking`, errors);
    checkNoForbiddenPlaceholders(`${dayLabel}.speaking.${t.id}`, t.prompt, errors);
    checkNoForbiddenPlaceholders(
      `${dayLabel}.speaking.${t.id}.transcript`,
      t.modelTranscriptB2,
      errors,
    );
  }
}

function validateDiagnosticAndFoundations(
  diagnostic: DiagnosticTest | null,
  foundations: readonly FoundationModule[],
  mode: ValidationMode,
  seenIds: Map<string, string>,
  errors: string[],
): void {
  if (mode !== "allow-empty" && diagnostic === null) {
    errors.push(
      "diagnosticTest is null; a calibrated 30-question A1-B1 DiagnosticTest is required",
    );
  }

  if (diagnostic !== null) {
    const parsedDiag = DiagnosticTestSchema.safeParse(diagnostic);
    if (!parsedDiag.success) {
      errors.push(`DiagnosticTest failed Zod validation: ${parsedDiag.error.message}`);
    } else {
      registerUniqueId(seenIds, parsedDiag.data.id, "diagnosticTest", errors);
      for (const question of parsedDiag.data.questions) {
        const dq: DiagnosticQuestion = DiagnosticQuestionSchema.parse(question);
        registerUniqueId(seenIds, dq.id, "diagnosticTest.questions", errors);
        checkNoForbiddenPlaceholders(`diagnostic.${dq.id}`, dq.prompt, errors);
      }
    }
  }

  if (mode === "full") {
    const expectedIds = FoundationModuleIdSchema.options;
    if (foundations.length !== expectedIds.length) {
      errors.push(
        `Full mode requires all ${expectedIds.length} FoundationModules, found ${foundations.length}`,
      );
    }
    const presentIds = new Set(foundations.map((m) => m.id));
    for (const expectedId of expectedIds) {
      if (!presentIds.has(expectedId)) {
        errors.push(`Missing required FoundationModule "${expectedId}"`);
      }
    }
  }

  for (const mod of foundations) {
    const parsedMod = FoundationModuleSchema.safeParse(mod);
    if (!parsedMod.success) {
      errors.push(`FoundationModule "${mod.id}" failed Zod: ${parsedMod.error.message}`);
      continue;
    }
    const fm: FoundationModule = parsedMod.data;
    registerUniqueId(seenIds, fm.id, "foundationModules", errors);
    checkNoForbiddenPlaceholders(`foundation.${fm.id}`, fm.coreRuleSummaryEs, errors);

    for (const row of fm.contrastTable) {
      const validatedRow: FoundationContrastRow = FoundationContrastRowSchema.parse(row);
      checkNoForbiddenPlaceholders(
        `foundation.${fm.id}.contrast`,
        validatedRow.correctExample,
        errors,
      );
    }

    for (const mq of fm.microCheckQuestions) {
      const validatedMq: FoundationPracticeQuestion = FoundationPracticeQuestionSchema.parse(mq);
      registerUniqueId(seenIds, validatedMq.id, `foundation.${fm.id}.microCheck`, errors);
      checkNoForbiddenPlaceholders(
        `foundation.${fm.id}.${validatedMq.id}`,
        validatedMq.prompt,
        errors,
      );
    }
  }
}

function validateCoreVocabulary(
  vocabItems: readonly CuratedVocabularyItem[],
  mode: ValidationMode,
  seenIds: Map<string, string>,
  errors: string[],
): void {
  const cefrSample: VocabCefrLevel = VocabCefrLevelSchema.parse("B2");
  const posSample: PartOfSpeech = PartOfSpeechSchema.parse("verb");
  if (!cefrSample || !posSample) {
    errors.push("Vocabulary schema primitive check failed");
  }

  if (mode === "full" && vocabItems.length < 60) {
    errors.push(
      `Full mode requires at least 60 curated vocabulary items, found ${vocabItems.length}`,
    );
  }

  const coveredDays = new Set<number>();
  const coveredCefr = new Set<VocabCefrLevel>();

  for (const rawItem of vocabItems) {
    const parsedCurated = CuratedVocabularyItemSchema.safeParse(rawItem);
    const parsedUnion = VocabularyItemSchema.safeParse(rawItem);
    if (!parsedCurated.success || !parsedUnion.success) {
      errors.push(
        `CuratedVocabularyItem "${rawItem.id}" failed Zod: ${
          parsedCurated.success ? parsedUnion.error?.message : parsedCurated.error.message
        }`,
      );
      continue;
    }

    const item: CuratedVocabularyItem = parsedCurated.data;
    registerUniqueId(seenIds, item.id, "coreVocabulary", errors);
    checkNoForbiddenPlaceholders(`coreVocabulary.${item.id}.term`, item.term, errors);
    checkNoForbiddenPlaceholders(`coreVocabulary.${item.id}.meaningEs`, item.meaningEs, errors);
    checkNoForbiddenPlaceholders(`coreVocabulary.${item.id}.exampleEn`, item.exampleEn, errors);

    coveredCefr.add(item.cefrLevel);
    for (const dayNum of item.linkedDayNumbers) {
      coveredDays.add(dayNum);
    }
  }

  if (mode === "full") {
    for (let dayNum = 1; dayNum <= 15; dayNum += 1) {
      if (!coveredDays.has(dayNum)) {
        errors.push(`coreVocabulary has no curated items linked to Day ${dayNum}`);
      }
    }
    for (const expectedLevel of VocabCefrLevelSchema.options) {
      if (!coveredCefr.has(expectedLevel)) {
        errors.push(`coreVocabulary is missing CEFR level "${expectedLevel}"`);
      }
    }
  }
}

function validateAudioAssetsAndManifest(tracks: readonly AudioTrackSpec[], errors: string[]): void {
  if (!existsSync(MANIFEST_FILE)) {
    errors.push(`Audio manifest file missing at ${MANIFEST_FILE}`);
    return;
  }

  const rawManifestJson: unknown = JSON.parse(readFileSync(MANIFEST_FILE, "utf8"));
  const parsedManifest = AudioManifestSchema.safeParse(rawManifestJson);
  if (!parsedManifest.success) {
    errors.push(`audio-manifest.json failed Zod validation: ${parsedManifest.error.message}`);
    return;
  }

  const manifest: AudioManifest = parsedManifest.data;
  const seenTrackIds = new Set<string>();

  for (const rawTrack of tracks) {
    const trackParsed = AudioTrackSpecSchema.safeParse(rawTrack);
    if (!trackParsed.success) {
      errors.push(`AudioTrackSpec failed Zod: ${trackParsed.error.message}`);
      continue;
    }
    const track: AudioTrackSpec = trackParsed.data;

    if (seenTrackIds.has(track.trackId)) {
      errors.push(`Duplicate AudioTrackSpec trackId "${track.trackId}"`);
    }
    seenTrackIds.add(track.trackId);

    const relativeAudioPath = track.audioUrl.replace(/^\//, "");
    const diskPath = resolve(PUBLIC_DIR, relativeAudioPath);
    if (!existsSync(diskPath)) {
      errors.push(
        `Missing physical MP3 file for track "${track.trackId}" at ${diskPath} (run "pnpm audio:generate")`,
      );
    } else {
      const stats = statSync(diskPath);
      if (stats.size <= 1024) {
        errors.push(`MP3 file at ${diskPath} is unexpectedly small (${stats.size} bytes)`);
      }
    }

    const entry = manifest[track.trackId];
    if (!entry) {
      errors.push(
        `Track "${track.trackId}" missing from audio-manifest.json (run "pnpm audio:generate")`,
      );
      continue;
    }

    const validatedEntry: AudioManifestEntry = AudioManifestEntrySchema.parse(entry);
    const expectedSha = computeAudioSpecSha256(track);
    if (validatedEntry.sha256 !== expectedSha) {
      errors.push(
        `SHA-256 mismatch for track "${track.trackId}": manifest=${validatedEntry.sha256}, spec=${expectedSha} (re-run "pnpm audio:generate")`,
      );
    }
    if (validatedEntry.audioUrl !== track.audioUrl) {
      errors.push(
        `audioUrl mismatch for track "${track.trackId}": manifest=${validatedEntry.audioUrl}, spec=${track.audioUrl}`,
      );
    }
  }
}

function main(): void {
  const options = parseCliArgs(process.argv.slice(2));
  const errors: string[] = [];
  const seenIds = new Map<string, string>();

  verifySchemaPrimitivesSelfCheck(errors);

  const days: readonly RoadmapDay[] = curriculumRegistry.roadmapDays;
  const vocabItems: readonly CuratedVocabularyItem[] = curriculumRegistry.coreVocabulary;
  const tracks = collectCurriculumAudioTracks(days, vocabItems);

  if (options.exportAudioSpecsPath) {
    writeFileSync(options.exportAudioSpecsPath, `${JSON.stringify(tracks, null, 2)}\n`, "utf8");
    console.log(
      `[validate-content] Exported ${tracks.length} audio spec(s) to ${options.exportAudioSpecsPath}`,
    );
  }

  if (options.mode === "full") {
    if (days.length !== 15) {
      errors.push(
        `Full curriculum mode requires exactly 15 RoadmapDays, found ${days.length} (use --seed-only for Day 1 + Diagnostic, or --allow-empty before seeding)`,
      );
    }
    for (let expectedDay = 1; expectedDay <= days.length; expectedDay += 1) {
      const dayItem = days[expectedDay - 1];
      if (dayItem && dayItem.dayNumber !== expectedDay) {
        errors.push(
          `RoadmapDays must be ordered 1..15: index ${expectedDay - 1} has dayNumber=${dayItem.dayNumber}`,
        );
      }
    }
  } else if (options.mode === "seed-only") {
    if (days.length < 1 || !days.some((d) => d.dayNumber === 1)) {
      errors.push("Seed-only mode requires at least Day 1 in curriculumRegistry.roadmapDays");
    }
  }

  for (const rawDay of days) {
    const dayLabel = `Day ${String(rawDay.dayNumber).padStart(2, "0")}`;
    const parsedDay = RoadmapDaySchema.safeParse(rawDay);
    if (!parsedDay.success) {
      errors.push(`${dayLabel} failed RoadmapDaySchema: ${parsedDay.error.message}`);
      continue;
    }
    const day = parsedDay.data;

    if (day.dayNumber === 8 && day.mockExamId !== "mock-mid-day08") {
      errors.push('Day 08 must set isMockExamDay=true and mockExamId="mock-mid-day08"');
    }
    if (day.dayNumber === 14 && day.mockExamId !== "mock-final-day14") {
      errors.push('Day 14 must set isMockExamDay=true and mockExamId="mock-final-day14"');
    }

    validateGrammarSection(dayLabel, day.sections.grammar, seenIds, errors);
    validateListeningSection(dayLabel, day.sections.listening, seenIds, errors);
    validateReadingSection(dayLabel, day.sections.reading, seenIds, errors);
    validateWritingSection(dayLabel, day.sections.writing, seenIds, errors);
    validateSpeakingSection(dayLabel, day.sections.speaking, seenIds, errors);
  }

  validateDiagnosticAndFoundations(
    curriculumRegistry.diagnosticTest,
    curriculumRegistry.foundationModules,
    options.mode,
    seenIds,
    errors,
  );

  validateCoreVocabulary(vocabItems, options.mode, seenIds, errors);

  validateAudioAssetsAndManifest(tracks, errors);

  if (errors.length > 0) {
    console.error(
      `\n[validate-content] FAILED with ${errors.length} error(s) (mode=${options.mode}):`,
    );
    for (const err of errors) {
      console.error(`  - ${err}`);
    }
    process.exit(1);
  }

  console.log(
    `[validate-content] OK (mode=${options.mode}): ${days.length} day(s), ` +
      `diagnostic=${curriculumRegistry.diagnosticTest ? "yes" : "none"}, ` +
      `${curriculumRegistry.foundationModules.length} foundation module(s), ` +
      `${vocabItems.length} core vocab item(s), ` +
      `${tracks.length} audio track(s), ${seenIds.size} unique ID(s) verified.`,
  );
}

main();
