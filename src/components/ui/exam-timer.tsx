import { AlarmClock, AlertTriangle, Clock, Pause, Play, RotateCcw } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { formatSecondsMmSs } from "@/lib/text-parsers.ts";
import { cn } from "@/lib/utils.ts";

export interface ExamTimerProps {
  readonly durationSeconds: number;
  readonly label: string;
  readonly mode?: "study" | "mock";
  readonly externalAutoStartSignal?: number;
  readonly initialElapsedSeconds?: number;
  readonly onElapsedChange?: (elapsedSeconds: number) => void;
  readonly onExpire?: () => void;
  readonly className?: string;
}

export function ExamTimer({
  durationSeconds,
  label,
  mode = "study",
  externalAutoStartSignal = 0,
  initialElapsedSeconds = 0,
  onElapsedChange,
  onExpire,
  className,
}: ExamTimerProps) {
  const initialRemaining = Math.max(0, durationSeconds - Math.max(0, initialElapsedSeconds));
  const [remainingSeconds, setRemainingSeconds] = useState<number>(initialRemaining);
  const [isRunning, setIsRunning] = useState<boolean>(mode === "mock");
  const [manuallyPaused, setManuallyPaused] = useState<boolean>(false);
  const [liveAnnouncement, setLiveAnnouncement] = useState<string>("");

  const hasAnnouncedOneMinRef = useRef<boolean>(initialRemaining <= 60);
  const hasFiredExpireRef = useRef<boolean>(initialRemaining === 0);
  const onElapsedChangeRef = useRef(onElapsedChange);
  const onExpireRef = useRef(onExpire);

  useEffect(() => {
    onElapsedChangeRef.current = onElapsedChange;
    onExpireRef.current = onExpire;
  }, [onElapsedChange, onExpire]);

  useEffect(() => {
    if (
      mode === "study" &&
      externalAutoStartSignal > 0 &&
      !manuallyPaused &&
      remainingSeconds > 0
    ) {
      setIsRunning(true);
    }
  }, [externalAutoStartSignal, manuallyPaused, mode, remainingSeconds]);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setRemainingSeconds((prev) => {
        if (prev <= 1) {
          window.clearInterval(intervalId);
          setIsRunning(false);
          const finalElapsed = durationSeconds;
          onElapsedChangeRef.current?.(finalElapsed);
          if (!hasFiredExpireRef.current) {
            hasFiredExpireRef.current = true;
            setLiveAnnouncement(`Tiempo agotado en ${label}.`);
            window.setTimeout(() => {
              onExpireRef.current?.();
            }, 0);
          }
          return 0;
        }

        const next = prev - 1;
        const elapsed = Math.max(0, durationSeconds - next);
        onElapsedChangeRef.current?.(elapsed);

        if (next === 60 && !hasAnnouncedOneMinRef.current) {
          hasAnnouncedOneMinRef.current = true;
          setLiveAnnouncement(`Atención: queda 1 minuto en ${label}.`);
        }
        return next;
      });
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [durationSeconds, isRunning, label]);

  const ratioRemaining = durationSeconds > 0 ? remainingSeconds / durationSeconds : 0;
  const isExpired = remainingSeconds === 0;
  const isCriticalMinute = !isExpired && remainingSeconds <= 60;
  const isWarningZone = !isExpired && !isCriticalMinute && ratioRemaining <= 0.2;

  let stateToneClass = "border-line bg-muted text-ink";
  let stateTextEs = isRunning ? "En curso" : "En pausa";
  let StateIcon = Clock;

  if (isExpired) {
    stateToneClass = "border-err-border bg-err-bg text-err-fg";
    stateTextEs = "Tiempo cumplido";
    StateIcon = AlarmClock;
  } else if (isCriticalMinute) {
    stateToneClass = "border-err-border/80 bg-err-bg text-err-fg";
    stateTextEs = "Último minuto";
    StateIcon = AlarmClock;
  } else if (isWarningZone) {
    stateToneClass = "border-warn-border/80 bg-warn-bg text-warn-fg";
    stateTextEs = "Último 20%";
    StateIcon = AlertTriangle;
  }

  const handleToggle = () => {
    if (mode === "mock" || isExpired) {
      return;
    }
    setIsRunning((prev) => {
      const next = !prev;
      setManuallyPaused(!next);
      return next;
    });
  };

  const handleReset = () => {
    if (mode === "mock") {
      return;
    }
    setIsRunning(false);
    setManuallyPaused(false);
    setRemainingSeconds(durationSeconds);
    hasAnnouncedOneMinRef.current = false;
    hasFiredExpireRef.current = false;
    setLiveAnnouncement("");
    onElapsedChangeRef.current?.(0);
  };

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-between gap-2.5 rounded-xl border px-3.5 py-2 transition-colors",
        stateToneClass,
        className,
      )}
    >
      <div className="flex items-center gap-2.5">
        <StateIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold">{label}</span>
            <span className="rounded-md border border-current/25 px-1.5 py-0.5 text-[11px] font-semibold">
              {stateTextEs}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="font-mono text-lg font-bold tracking-tight tabular-nums">
          <span className="visually-hidden">Tiempo restante en {label}: </span>
          {formatSecondsMmSs(remainingSeconds)}
        </span>

        {mode === "study" ? (
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handleToggle}
              disabled={isExpired}
              aria-label={isRunning ? `Pausar cronómetro ${label}` : `Iniciar cronómetro ${label}`}
              className="inline-flex min-h-9 items-center gap-1 rounded-lg border border-current/30 bg-card/80 px-2.5 py-1 text-xs font-semibold text-ink transition-colors hover:bg-card disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isRunning ? (
                <>
                  <Pause className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Pausar</span>
                </>
              ) : (
                <>
                  <Play className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Iniciar</span>
                </>
              )}
            </button>
            <button
              type="button"
              onClick={handleReset}
              aria-label={`Reiniciar cronómetro ${label}`}
              className="inline-flex min-h-9 items-center gap-1 rounded-lg border border-current/30 bg-card/80 px-2 py-1 text-xs font-semibold text-ink transition-colors hover:bg-card"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="sr-only sm:not-sr-only">Reiniciar</span>
            </button>
          </div>
        ) : (
          <span className="text-xs font-semibold">Reloj oficial continuo</span>
        )}
      </div>

      <output aria-live="polite" className="visually-hidden">
        {liveAnnouncement}
      </output>
    </div>
  );
}
