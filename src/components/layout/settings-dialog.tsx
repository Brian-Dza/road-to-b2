import {
  AlertTriangle,
  CheckCircle2,
  Download,
  Eye,
  EyeOff,
  KeyRound,
  Monitor,
  Moon,
  RotateCcw,
  Sun,
  Upload,
  X,
} from "lucide-react";
import { type ChangeEvent, type RefObject, useEffect, useId, useRef, useState } from "react";
import { useProgress } from "@/context/progress-context.tsx";
import { type ThemePreference, useThemePreference } from "@/lib/theme.ts";
import { cn } from "@/lib/utils.ts";

export interface SettingsDialogProps {
  readonly dialogRef: RefObject<HTMLDialogElement | null>;
}

export function SettingsDialog({ dialogRef }: SettingsDialogProps) {
  const titleId = useId();
  const apiKeyId = useId();
  const apiKeyHintId = useId();
  const importInputId = useId();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const {
    progress,
    summary,
    setGeminiApiKey,
    exportBackupJson,
    importBackupJsonText,
    resetAllProgress,
  } = useProgress();
  const { preference, systemIsDark, setThemePreference } = useThemePreference();

  const [apiKeyDraft, setApiKeyDraft] = useState<string>(progress.settings.geminiApiKey ?? "");
  const [showApiKey, setShowApiKey] = useState<boolean>(false);
  const [confirmingReset, setConfirmingReset] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<{
    readonly tone: "success" | "error";
    readonly text: string;
  } | null>(null);

  useEffect(() => {
    setApiKeyDraft(progress.settings.geminiApiKey ?? "");
  }, [progress.settings.geminiApiKey]);

  useEffect(() => {
    const dialogEl = dialogRef.current;
    if (!dialogEl) {
      return;
    }

    const handleClose = () => {
      dialogEl.returnValue = "";
      setConfirmingReset(false);
      setFeedback(null);
    };

    dialogEl.addEventListener("close", handleClose);
    return () => {
      dialogEl.removeEventListener("close", handleClose);
    };
  }, [dialogRef]);

  const handleSaveApiKey = () => {
    setGeminiApiKey(apiKeyDraft);
    setFeedback({
      tone: "success",
      text:
        apiKeyDraft.trim().length > 0
          ? "Gemini API Key guardada localmente en este navegador."
          : "Gemini API Key eliminada de este navegador.",
    });
  };

  const handleClearApiKey = () => {
    setApiKeyDraft("");
    setGeminiApiKey("");
    setFeedback({
      tone: "success",
      text: "Gemini API Key eliminada correctamente.",
    });
  };

  const handleExport = () => {
    exportBackupJson();
    setFeedback({
      tone: "success",
      text: "Descarga iniciada: road-to-b2-backup.json",
    });
  };

  const handleImportFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    event.target.value = "";
    if (!selectedFile) {
      return;
    }

    if (selectedFile.size > 2 * 1024 * 1024) {
      setFeedback({
        tone: "error",
        text: "El archivo JSON supera el límite máximo permitido de 2 MB.",
      });
      return;
    }

    try {
      const rawText = await selectedFile.text();
      const result = importBackupJsonText(rawText);
      if (result.ok) {
        setFeedback({ tone: "success", text: result.messageEs });
      } else {
        setFeedback({ tone: "error", text: result.errorEs });
      }
    } catch {
      setFeedback({
        tone: "error",
        text: "No se pudo leer el archivo seleccionado. Verifica los permisos del archivo.",
      });
    }
  };

  const handleConfirmReset = () => {
    resetAllProgress();
    setApiKeyDraft("");
    setConfirmingReset(false);
    setFeedback({
      tone: "success",
      text: "Todo el progreso local fue reiniciado a su estado inicial limpio.",
    });
  };

  const themeOptions: readonly {
    readonly id: ThemePreference;
    readonly label: string;
    readonly Icon: typeof Monitor;
  }[] = [
    {
      id: "system",
      label: `Sistema (actual: ${systemIsDark ? "oscuro" : "claro"})`,
      Icon: Monitor,
    },
    { id: "light", label: "Claro", Icon: Sun },
    { id: "dark", label: "Oscuro", Icon: Moon },
  ];

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      className="m-auto w-[min(94dvw,36rem)] rounded-2xl border border-line bg-card p-0 text-ink shadow-xl"
    >
      <div className="max-h-[88dvh] overflow-y-auto p-6">
        <div className="flex items-start justify-between gap-4 border-b border-line pb-4">
          <div>
            <h2 id={titleId} className="text-lg font-bold tracking-tight">
              Ajustes y Respaldo Local
            </h2>
            <p className="mt-1 text-xs leading-relaxed text-ink-muted">
              Personaliza el esquema visual, configura evaluación opcional con Gemini y protege tu
              avance de 15 días en formato JSON.
            </p>
          </div>
          <form method="dialog">
            <button
              type="submit"
              value="close"
              aria-label="Cerrar ventana de ajustes"
              className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-xl border border-line bg-muted text-ink transition-colors hover:border-line-strong"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
        </div>

        {feedback ? (
          <div
            role={feedback.tone === "error" ? "alert" : "status"}
            className={cn(
              "mt-4 flex items-start gap-2.5 rounded-xl border px-3.5 py-2.5 text-xs font-medium",
              feedback.tone === "error"
                ? "border-err-border/70 bg-err-bg text-err-fg"
                : "border-ok-border/70 bg-ok-bg text-ok-fg",
            )}
          >
            {feedback.tone === "error" ? (
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            ) : (
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            )}
            <span>{feedback.text}</span>
          </div>
        ) : null}

        {/* 1. Selector de Tema */}
        <section className="mt-5">
          <h3 className="text-sm font-bold">Apariencia y contraste</h3>
          <p className="mt-1 text-xs text-ink-muted">
            Adapta barras de desplazamiento, controles y superficies sin deslumbramiento durante
            sesiones largas de estudio.
          </p>
          <fieldset
            aria-label="Preferencia de esquema de color"
            className="mt-3 grid gap-2 sm:grid-cols-3"
          >
            {themeOptions.map(({ id, label, Icon }) => {
              const active = preference === id;
              return (
                <button
                  key={id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setThemePreference(id)}
                  className={cn(
                    "flex min-h-11 items-center gap-2 rounded-xl border px-3 py-2 text-left text-xs transition-colors",
                    active
                      ? "border-brand bg-info-bg font-semibold text-info-fg"
                      : "border-line bg-muted text-ink hover:border-line-strong",
                  )}
                >
                  <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{label}</span>
                </button>
              );
            })}
          </fieldset>
        </section>

        {/* 2. Gemini API Key Opcional */}
        <section className="mt-6 border-t border-line pt-5">
          <div className="flex items-center justify-between gap-2">
            <h3 className="flex items-center gap-1.5 text-sm font-bold">
              <KeyRound className="h-4 w-4 text-brand" aria-hidden="true" />
              <span>Gemini API Key (Opcional — Evaluación Writing B2)</span>
            </h3>
            <span className="text-xs font-semibold text-ink-muted">
              {summary.hasGeminiKey ? "Clave activa" : "Sin configurar"}
            </span>
          </div>
          <label htmlFor={apiKeyId} className="mt-2 block text-xs font-semibold text-ink">
            Clave personal de Google AI Studio
          </label>
          <p id={apiKeyHintId} className="mt-0.5 text-xs text-ink-muted">
            Se almacena exclusivamente en el <code>localStorage</code> de tu navegador para invocar{" "}
            <code>gemini-2.5-flash</code> directamente desde cliente.
          </p>
          <div className="mt-2.5 flex flex-wrap gap-2">
            <div className="relative min-w-56 flex-1">
              <input
                id={apiKeyId}
                type={showApiKey ? "text" : "password"}
                value={apiKeyDraft}
                onChange={(e) => setApiKeyDraft(e.target.value)}
                aria-describedby={apiKeyHintId}
                autoComplete="off"
                spellCheck={false}
                placeholder="AIzaSy..."
                className="min-h-11 w-full rounded-xl border border-line-strong bg-canvas px-3 py-2 pr-11 font-mono text-xs text-ink"
              />
              <button
                type="button"
                onClick={() => setShowApiKey((prev) => !prev)}
                aria-label={showApiKey ? "Ocultar Gemini API Key" : "Mostrar Gemini API Key"}
                className="absolute inset-y-1 right-1 inline-flex w-9 items-center justify-center rounded-lg text-ink-muted hover:bg-muted hover:text-ink"
              >
                {showApiKey ? (
                  <EyeOff className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Eye className="h-4 w-4" aria-hidden="true" />
                )}
              </button>
            </div>
            <button
              type="button"
              onClick={handleSaveApiKey}
              className="inline-flex min-h-11 items-center justify-center rounded-xl bg-brand px-4 py-2 text-xs font-semibold text-on-brand transition-colors hover:bg-brand-hover"
            >
              Guardar clave
            </button>
            {summary.hasGeminiKey ? (
              <button
                type="button"
                onClick={handleClearApiKey}
                className="inline-flex min-h-11 items-center justify-center rounded-xl border border-line bg-muted px-3 py-2 text-xs font-semibold text-ink hover:border-line-strong"
              >
                Borrar clave
              </button>
            ) : null}
          </div>
        </section>

        {/* 3. Respaldo JSON y Reinicio */}
        <section className="mt-6 border-t border-line pt-5">
          <h3 className="text-sm font-bold">Respaldo portátil (.json) y reinicio</h3>
          <p className="mt-1 text-xs text-ink-muted">
            Descarga una copia completa de tus estados diarios, diagnóstico, borradores de Writing,
            Byme Lenguage y simulacros (tu Gemini API Key se omite del archivo por seguridad), o
            restaura un respaldo validado con Zod.
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={handleExport}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-line-strong bg-muted px-3.5 py-2 text-xs font-semibold text-ink transition-colors hover:bg-canvas"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              <span>Exportar JSON</span>
            </button>

            <input
              ref={fileInputRef}
              id={importInputId}
              type="file"
              accept=".json,application/json"
              aria-label="Seleccionar archivo JSON de respaldo"
              tabIndex={-1}
              onChange={handleImportFile}
              className="visually-hidden"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-line-strong bg-muted px-3.5 py-2 text-xs font-semibold text-ink transition-colors hover:bg-canvas"
            >
              <Upload className="h-4 w-4" aria-hidden="true" />
              <span>Importar JSON</span>
            </button>

            <button
              type="button"
              onClick={() => setConfirmingReset(true)}
              disabled={confirmingReset}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-err-border/70 bg-err-bg px-3.5 py-2 text-xs font-semibold text-err-fg transition-colors hover:border-err-border disabled:opacity-50"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              <span>Reiniciar progreso</span>
            </button>
          </div>

          {confirmingReset ? (
            <div
              role="alert"
              className="mt-3 rounded-xl border border-err-border bg-err-bg p-3.5 text-xs text-err-fg"
            >
              <p className="font-semibold">
                ¿Confirmas que deseas borrar todo el progreso local (estados, diagnóstico, audios
                consumidos, borradores y simulacros)?
              </p>
              <div className="mt-2.5 flex flex-wrap justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setConfirmingReset(false)}
                  className="inline-flex min-h-10 items-center rounded-lg border border-line-strong bg-card px-3 py-1.5 text-xs font-semibold text-ink"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  onClick={handleConfirmReset}
                  className="inline-flex min-h-10 items-center rounded-lg border border-err-border bg-card px-3 py-1.5 text-xs font-bold text-err-fg hover:bg-muted"
                >
                  Confirmar reinicio total
                </button>
              </div>
            </div>
          ) : null}
        </section>

        <div className="mt-6 flex justify-end border-t border-line pt-4">
          <form method="dialog">
            <button
              type="submit"
              value="done"
              className="inline-flex min-h-11 items-center rounded-xl border border-line-strong bg-muted px-4 py-2 text-xs font-semibold text-ink hover:bg-canvas"
            >
              Cerrar ajustes
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
