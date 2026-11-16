import {
  type AudioManifest,
  AudioManifestSchema,
  type AudioTrackSpec,
  type DiagnosticTest,
  type FoundationModule,
  type RoadmapDay,
} from "../schemas/curriculum.schema.ts";
import type { CuratedVocabularyItem } from "../schemas/vocabulary.schema.ts";
import { day01 } from "./days/day-01.ts";
import { day02 } from "./days/day-02.ts";
import { day03 } from "./days/day-03.ts";
import { day04 } from "./days/day-04.ts";
import { day05 } from "./days/day-05.ts";
import { day06 } from "./days/day-06.ts";
import { day07 } from "./days/day-07.ts";
import { day08 } from "./days/day-08.ts";
import { day09 } from "./days/day-09.ts";
import { day10 } from "./days/day-10.ts";
import { day11 } from "./days/day-11.ts";
import { day12 } from "./days/day-12.ts";
import { day13 } from "./days/day-13.ts";
import { day14 } from "./days/day-14.ts";
import { day15 } from "./days/day-15.ts";
import { diagnosticTest } from "./foundations/diagnostic-test.ts";
import { foundationModules } from "./foundations/modules.ts";
import rawAudioManifest from "./generated/audio-manifest.json" with { type: "json" };
import { coreVocabulary } from "./vocabulary/core-vocabulary.ts";

export interface CurriculumRegistry {
  readonly roadmapDays: readonly RoadmapDay[];
  readonly diagnosticTest: DiagnosticTest | null;
  readonly foundationModules: readonly FoundationModule[];
  readonly coreVocabulary: readonly CuratedVocabularyItem[];
  readonly audioManifest: AudioManifest;
}

const parsedAudioManifest: AudioManifest = AudioManifestSchema.parse(rawAudioManifest);

/**
 * Central registry for the 15-Day B2 Roadmap, Diagnostic A1-B1 Test,
 * Foundation Remediation Modules, Byme Lenguage Core Vocabulary, and MP3 Audio Manifest.
 */
export const curriculumRegistry: CurriculumRegistry = {
  roadmapDays: [
    day01,
    day02,
    day03,
    day04,
    day05,
    day06,
    day07,
    day08,
    day09,
    day10,
    day11,
    day12,
    day13,
    day14,
    day15,
  ],
  diagnosticTest,
  foundationModules,
  coreVocabulary,
  audioManifest: parsedAudioManifest,
};

export function collectCurriculumAudioTracks(
  days: readonly RoadmapDay[] = curriculumRegistry.roadmapDays,
  vocabItems: readonly CuratedVocabularyItem[] = curriculumRegistry.coreVocabulary,
): AudioTrackSpec[] {
  const tracks: AudioTrackSpec[] = [];

  for (const day of days) {
    for (const listeningItem of day.sections.listening.items) {
      tracks.push(listeningItem.audio);
    }
    for (const speakingTask of day.sections.speaking.tasks) {
      if (speakingTask.audioPrompt) {
        tracks.push(speakingTask.audioPrompt);
      }
    }
  }

  for (const vocab of vocabItems) {
    tracks.push(vocab.audio);
  }

  return tracks;
}
