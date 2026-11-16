import { createHash } from "node:crypto";
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { collectCurriculumAudioTracks } from "../src/data/curriculum-registry.ts";
import { type AudioTrackSpec, AudioTrackSpecSchema } from "../src/schemas/curriculum.schema.ts";

export function computeAudioSpecSha256(spec: AudioTrackSpec): string {
  const canonical = {
    contextSetup: spec.contextSetup.trim(),
    turns: spec.turns.map((turn) => ({
      pauseAfterMs: turn.pauseAfterMs,
      speakerLabel: turn.speakerLabel.trim(),
      text: turn.text.trim(),
      voice: turn.voice,
    })),
  };
  return createHash("sha256").update(JSON.stringify(canonical), "utf8").digest("hex");
}

function parseOutputPath(argv: readonly string[]): string | null {
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--out" || arg === "-o") {
      const next = argv[i + 1];
      if (!next) {
        throw new Error(`Missing file path after ${arg}`);
      }
      return resolve(next);
    }
    if (arg && !arg.startsWith("-")) {
      return resolve(arg);
    }
  }
  return null;
}

function main(): void {
  const rawTracks = collectCurriculumAudioTracks();
  const seenIds = new Set<string>();
  const validatedTracks: AudioTrackSpec[] = [];

  for (const rawTrack of rawTracks) {
    const parsed = AudioTrackSpecSchema.parse(rawTrack);
    if (seenIds.has(parsed.trackId)) {
      throw new Error(`Duplicate AudioTrackSpec trackId detected: "${parsed.trackId}"`);
    }
    seenIds.add(parsed.trackId);
    validatedTracks.push(parsed);
  }

  const outputPath = parseOutputPath(process.argv.slice(2));
  const serialized = `${JSON.stringify(validatedTracks, null, 2)}\n`;

  if (outputPath) {
    writeFileSync(outputPath, serialized, "utf8");
    console.log(
      `[export-audio-tracks] Exported ${validatedTracks.length} audio track spec(s) to ${outputPath}`,
    );
  } else {
    process.stdout.write(serialized);
  }
}

const isDirectRun =
  process.argv[1] !== undefined && resolve(process.argv[1]).endsWith("export-audio-tracks.ts");

if (isDirectRun) {
  main();
}
