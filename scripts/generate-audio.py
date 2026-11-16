#!/usr/bin/env python3
"""
Deterministic multi-voice MP3 synthesizer for Road to B2 (iTEP 15-Day Bootcamp).

Pipeline:
1. Exports AudioTrackSpec entries from `src/data/curriculum-registry.ts` via `tsx`
   (or reads `--input-json <path>` for isolated testing).
2. Computes canonical SHA-256 of `{contextSetup, turns}` for each track.
3. Skips tracks whose `public/audio/<trackId>.mp3` already exists and matches
   `src/data/generated/audio-manifest.json`.
4. Synthesizes turns concurrently with `edge_tts.Communicate` (Semaphore = 4),
   inserts exact millisecond pauses (`anullsrc=r=24000:cl=mono`), normalizes and
   concatenates into `public/audio/<trackId>.mp3` (`-ar 24000 -ac 1 -b:a 64k`),
   measures `durationSeconds` with `ffprobe`, and updates `audio-manifest.json`.
"""

from __future__ import annotations

import argparse
import asyncio
import hashlib
import json
import os
import random
import re
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path
from typing import Any

import edge_tts

ROOT_DIR = Path(__file__).resolve().parent.parent
AUDIO_OUT_DIR = ROOT_DIR / "public" / "audio"
MANIFEST_PATH = ROOT_DIR / "src" / "data" / "generated" / "audio-manifest.json"
EXPORT_SCRIPT = ROOT_DIR / "scripts" / "export-audio-tracks.ts"
TRACK_ID_PATTERN = re.compile(r"^[a-z0-9]+(?:-[a-z0-9]+)*$")

FFMPEG_BIN = shutil.which("ffmpeg") or "/usr/bin/ffmpeg"
FFPROBE_BIN = shutil.which("ffprobe") or "/usr/bin/ffprobe"
CONCURRENCY_LIMIT = 1
MAX_TTS_RETRIES = 8
TURN_SYNTHESIS_TIMEOUT_SEC = 45.0


def compute_audio_spec_sha256(spec: dict[str, Any]) -> str:
    canonical = {
        "contextSetup": str(spec["contextSetup"]).strip(),
        "turns": [
            {
                "pauseAfterMs": int(turn.get("pauseAfterMs", 450)),
                "speakerLabel": str(turn["speakerLabel"]).strip(),
                "text": str(turn["text"]).strip(),
                "voice": str(turn["voice"]),
            }
            for turn in spec["turns"]
        ],
    }
    payload = json.dumps(canonical, ensure_ascii=False, separators=(",", ":"), sort_keys=True)
    return hashlib.sha256(payload.encode("utf-8")).hexdigest()


def load_existing_manifest(manifest_path: Path) -> dict[str, dict[str, Any]]:
    if not manifest_path.exists():
        return {}
    try:
        raw = json.loads(manifest_path.read_text(encoding="utf-8"))
        if isinstance(raw, dict):
            return raw
    except json.JSONDecodeError:
        pass
    return {}


def export_tracks_from_ts() -> list[dict[str, Any]]:
    env = os.environ.copy()
    nvm_node_bin = env.get("NVM_NODE_BIN")
    if nvm_node_bin and Path(nvm_node_bin).is_dir() and nvm_node_bin not in env.get("PATH", ""):
        env["PATH"] = f"{nvm_node_bin}:{env.get('PATH', '')}"

    pnpm_bin = shutil.which("pnpm", path=env.get("PATH"))
    if not pnpm_bin:
        nvm_versions = Path.home() / ".nvm" / "versions" / "node"
        if nvm_versions.is_dir():
            for bin_dir in sorted(nvm_versions.glob("*/bin"), reverse=True):
                candidate = bin_dir / "pnpm"
                if candidate.is_file():
                    env["PATH"] = f"{bin_dir}:{env.get('PATH', '')}"
                    pnpm_bin = str(candidate)
                    break

    if not pnpm_bin:
        raise RuntimeError("pnpm binary not found in PATH or ~/.nvm/versions/node/*/bin")

    with tempfile.NamedTemporaryFile(suffix=".json", delete=False) as tmp:
        tmp_path = Path(tmp.name)

    try:
        cmd = [pnpm_bin, "exec", "tsx", str(EXPORT_SCRIPT), "--out", str(tmp_path)]
        subprocess.run(cmd, cwd=str(ROOT_DIR), env=env, check=True)
        return json.loads(tmp_path.read_text(encoding="utf-8"))
    finally:
        tmp_path.unlink(missing_ok=True)


async def synthesize_turn_to_wav(
    semaphore: asyncio.Semaphore,
    text: str,
    voice: str,
    raw_mp3_path: Path,
    norm_wav_path: Path,
) -> None:
    last_err: Exception | None = None
    for attempt in range(1, MAX_TTS_RETRIES + 1):
        try:
            async with semaphore:
                communicate = edge_tts.Communicate(text=text, voice=voice)
                # Guard against edge-tts WebSocket connections hanging indefinitely in epoll.
                await asyncio.wait_for(
                    communicate.save(str(raw_mp3_path)),
                    timeout=TURN_SYNTHESIS_TIMEOUT_SEC,
                )
                await asyncio.sleep(0.35)
            if raw_mp3_path.exists() and raw_mp3_path.stat().st_size > 128:
                break
            raise RuntimeError(f"Empty TTS output for voice={voice}")
        except Exception as err:  # noqa: BLE001
            last_err = err
            raw_mp3_path.unlink(missing_ok=True)
            if attempt < MAX_TTS_RETRIES:
                print(
                    f"[generate-audio] Retry {attempt}/{MAX_TTS_RETRIES} for voice={voice} ({type(err).__name__}: {err})",
                    flush=True,
                )
                backoff_sec = min(30.0, 3.0 * (1.8 ** (attempt - 1))) + random.uniform(0.2, 1.0)
                await asyncio.sleep(backoff_sec)
            else:
                raise RuntimeError(
                    f"edge-tts failed after {MAX_TTS_RETRIES} attempts: {err}"
                ) from last_err

    subprocess.run(
        [
            FFMPEG_BIN,
            "-y",
            "-loglevel",
            "error",
            "-i",
            str(raw_mp3_path),
            "-ar",
            "24000",
            "-ac",
            "1",
            "-c:a",
            "pcm_s16le",
            str(norm_wav_path),
        ],
        check=True,
    )


def generate_silence_wav(duration_ms: int, silence_wav_path: Path) -> None:
    duration_sec = max(0.15, duration_ms / 1000.0)
    subprocess.run(
        [
            FFMPEG_BIN,
            "-y",
            "-loglevel",
            "error",
            "-f",
            "lavfi",
            "-i",
            "anullsrc=r=24000:cl=mono",
            "-t",
            f"{duration_sec:.3f}",
            "-ar",
            "24000",
            "-ac",
            "1",
            "-c:a",
            "pcm_s16le",
            str(silence_wav_path),
        ],
        check=True,
    )


def measure_duration_seconds(mp3_path: Path) -> float:
    proc = subprocess.run(
        [
            FFPROBE_BIN,
            "-v",
            "error",
            "-show_entries",
            "format=duration",
            "-of",
            "default=noprint_wrappers=1:nokey=1",
            str(mp3_path),
        ],
        check=True,
        capture_output=True,
        text=True,
    )
    duration = round(float(proc.stdout.strip()), 2)
    if duration <= 0:
        raise RuntimeError(f"Invalid non-positive duration measured for {mp3_path}")
    return duration


async def build_track_mp3(
    semaphore: asyncio.Semaphore,
    spec: dict[str, Any],
    target_mp3: Path,
) -> float:
    turns: list[dict[str, Any]] = spec["turns"]
    with tempfile.TemporaryDirectory(prefix=f"itep-{spec['trackId']}-") as tmp_dir_str:
        tmp_dir = Path(tmp_dir_str)
        segment_wavs: list[Path] = []

        for idx, turn in enumerate(turns):
            raw_mp3 = tmp_dir / f"turn-{idx:03d}.mp3"
            turn_wav = tmp_dir / f"turn-{idx:03d}.wav"
            silence_wav = tmp_dir / f"silence-{idx:03d}.wav"
            pause_ms = int(turn.get("pauseAfterMs", 450))

            await synthesize_turn_to_wav(
                semaphore=semaphore,
                text=str(turn["text"]).strip(),
                voice=str(turn["voice"]),
                raw_mp3_path=raw_mp3,
                norm_wav_path=turn_wav,
            )
            generate_silence_wav(pause_ms, silence_wav)
            segment_wavs.append(turn_wav)
            segment_wavs.append(silence_wav)

        concat_list = tmp_dir / "concat.txt"
        concat_lines = [f"file '{wav.as_posix()}'" for wav in segment_wavs]
        concat_list.write_text("\n".join(concat_lines) + "\n", encoding="utf-8")

        staged_mp3 = tmp_dir / f"{spec['trackId']}.mp3"
        subprocess.run(
            [
                FFMPEG_BIN,
                "-y",
                "-loglevel",
                "error",
                "-f",
                "concat",
                "-safe",
                "0",
                "-i",
                str(concat_list),
                "-ar",
                "24000",
                "-ac",
                "1",
                "-c:a",
                "libmp3lame",
                "-b:a",
                "64k",
                str(staged_mp3),
            ],
            check=True,
        )

        target_mp3.parent.mkdir(parents=True, exist_ok=True)
        shutil.move(str(staged_mp3), str(target_mp3))

    return measure_duration_seconds(target_mp3)


async def run_pipeline(
    specs: list[dict[str, Any]],
    audio_out_dir: Path,
    manifest_path: Path,
    force: bool = False,
) -> None:
    audio_out_dir.mkdir(parents=True, exist_ok=True)
    manifest_path.parent.mkdir(parents=True, exist_ok=True)

    existing_manifest = load_existing_manifest(manifest_path)
    active_track_ids = {str(s["trackId"]) for s in specs}
    updated_manifest: dict[str, dict[str, Any]] = {
        k: v for k, v in existing_manifest.items() if k in active_track_ids
    }
    semaphore = asyncio.Semaphore(CONCURRENCY_LIMIT)

    def flush_manifest() -> None:
        sorted_entries = {k: updated_manifest[k] for k in sorted(updated_manifest.keys())}
        manifest_path.write_text(
            json.dumps(sorted_entries, indent=2, ensure_ascii=False) + "\n",
            encoding="utf-8",
        )

    skipped_count = 0
    generated_count = 0

    for spec in specs:
        track_id = str(spec["trackId"])
        if not TRACK_ID_PATTERN.fullmatch(track_id):
            raise ValueError(f"Unsafe or invalid trackId rejected: {track_id!r}")
        audio_url = str(spec["audioUrl"])
        if audio_url != f"/audio/{track_id}.mp3":
            raise ValueError(f"Mismatched audioUrl {audio_url!r} for trackId {track_id!r}")
        expected_sha = compute_audio_spec_sha256(spec)
        mp3_path = audio_out_dir / f"{track_id}.mp3"
        cached_entry = existing_manifest.get(track_id)

        is_up_to_date = (
            not force
            and cached_entry is not None
            and cached_entry.get("sha256") == expected_sha
            and mp3_path.exists()
            and mp3_path.stat().st_size > 1024
        )

        if is_up_to_date and cached_entry is not None:
            updated_manifest[track_id] = {
                "audioUrl": audio_url,
                "durationSeconds": float(cached_entry["durationSeconds"]),
                "sha256": expected_sha,
                "trackId": track_id,
            }
            skipped_count += 1
            continue

        print(
            f"[generate-audio] Synthesizing {track_id} ({len(spec['turns'])} turn(s))...",
            flush=True,
        )
        duration_seconds = await build_track_mp3(semaphore, spec, mp3_path)
        updated_manifest[track_id] = {
            "audioUrl": audio_url,
            "durationSeconds": duration_seconds,
            "sha256": expected_sha,
            "trackId": track_id,
        }
        flush_manifest()
        generated_count += 1
        print(f"[generate-audio] Ready: {audio_url} ({duration_seconds:.2f}s)", flush=True)

    flush_manifest()
    print(
        f"[generate-audio] Complete: {generated_count} generated, "
        f"{skipped_count} cached, {len(updated_manifest)} total tracks in manifest.",
        flush=True,
    )


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Generate multi-voice MP3 tracks with edge-tts.")
    parser.add_argument(
        "--input-json",
        type=Path,
        default=None,
        help="Optional path to pre-exported audio-tracks.json (defaults to running tsx exporter).",
    )
    parser.add_argument(
        "--audio-dir",
        type=Path,
        default=AUDIO_OUT_DIR,
        help="Output directory for generated .mp3 files (default: public/audio).",
    )
    parser.add_argument(
        "--manifest-path",
        type=Path,
        default=MANIFEST_PATH,
        help="Path to audio-manifest.json.",
    )
    parser.add_argument(
        "--force",
        action="store_true",
        help="Regenerate all tracks even if SHA-256 matches.",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    if not Path(FFMPEG_BIN).exists():
        print(f"[generate-audio] ERROR: ffmpeg not found at {FFMPEG_BIN}", file=sys.stderr)
        return 1
    if not Path(FFPROBE_BIN).exists():
        print(f"[generate-audio] ERROR: ffprobe not found at {FFPROBE_BIN}", file=sys.stderr)
        return 1

    if args.input_json is not None:
        specs = json.loads(args.input_json.read_text(encoding="utf-8"))
    else:
        specs = export_tracks_from_ts()

    asyncio.run(
        run_pipeline(
            specs=specs,
            audio_out_dir=args.audio_dir.resolve(),
            manifest_path=args.manifest_path.resolve(),
            force=args.force,
        )
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
