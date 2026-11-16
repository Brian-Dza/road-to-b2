import { Square, Volume2 } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn, resolvePublicAssetUrl } from "@/lib/utils.ts";

export interface VocabularyAudioButtonProps {
  readonly audioUrl: string;
  readonly term: string;
  readonly compact?: boolean;
}

export function VocabularyAudioButton({
  audioUrl,
  term,
  compact = false,
}: VocabularyAudioButtonProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  // biome-ignore lint/correctness/useExhaustiveDependencies: reset playback state whenever audioUrl changes
  useEffect(() => {
    const el = audioRef.current;
    if (el) {
      el.pause();
      el.currentTime = 0;
    }
    setIsPlaying(false);
    setHasError(false);
  }, [audioUrl]);

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  const handleTogglePlay = useCallback(async () => {
    const el = audioRef.current;
    if (!el) {
      return;
    }

    if (isPlaying) {
      el.pause();
      el.currentTime = 0;
      setIsPlaying(false);
      return;
    }

    setHasError(false);
    try {
      el.currentTime = 0;
      await el.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
      setHasError(true);
    }
  }, [isPlaying]);

  return (
    <span className="inline-flex items-center">
      {/* biome-ignore lint/a11y/useMediaCaption: short lexical pronunciation clip paired with full written term, IPA, and example sentence directly on card */}
      <audio
        ref={audioRef}
        src={resolvePublicAssetUrl(audioUrl)}
        preload="metadata"
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onError={() => {
          setIsPlaying(false);
          setHasError(true);
        }}
      />
      <button
        type="button"
        onClick={handleTogglePlay}
        aria-label={
          isPlaying
            ? `Detener pronunciación de ${term}`
            : `Escuchar pronunciación y ejemplo de ${term}`
        }
        className={cn(
          "inline-flex items-center justify-center gap-1.5 rounded-xl border font-semibold transition-colors",
          compact ? "min-h-9 px-2.5 py-1 text-[11px]" : "min-h-10 px-3.5 py-1.5 text-xs",
          hasError
            ? "border-err-border/70 bg-err-bg text-err-fg"
            : isPlaying
              ? "border-brand bg-info-bg text-info-fg"
              : "border-line-strong bg-muted text-ink hover:bg-canvas",
        )}
      >
        {isPlaying ? (
          <Square className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        ) : (
          <Volume2 className="h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
        )}
        <span>
          {hasError
            ? "Audio no disponible"
            : isPlaying
              ? "Detener audio"
              : compact
                ? "Escuchar"
                : "Escuchar pronunciación (.mp3)"}
        </span>
      </button>
    </span>
  );
}
