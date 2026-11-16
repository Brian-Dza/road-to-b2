import { AlertTriangle, RotateCcw } from "lucide-react";
import { Component, type ErrorInfo, type ReactNode } from "react";
import { saveUserProgress } from "@/lib/storage.ts";
import { createInitialUserProgress } from "@/schemas/progress.schema.ts";

interface ErrorBoundaryProps {
  readonly children: ReactNode;
}

interface ErrorBoundaryState {
  readonly hasError: boolean;
  readonly errorMessage: string;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public override state: ErrorBoundaryState = {
    hasError: false,
    errorMessage: "",
  };

  public static getDerivedStateFromError(error: unknown): ErrorBoundaryState {
    return {
      hasError: true,
      errorMessage:
        error instanceof Error ? error.message : "Error inesperado en la sesión de estudio.",
    };
  }

  public override componentDidCatch(_error: unknown, _info: ErrorInfo): void {
    // Boundary handles recovery gracefully in UI
  }

  private handleSafeReload = () => {
    this.setState({ hasError: false, errorMessage: "" });
    window.location.hash = "#/dashboard";
  };

  private handleCleanReset = () => {
    saveUserProgress(createInitialUserProgress());
    this.setState({ hasError: false, errorMessage: "" });
    window.location.reload();
  };

  public override render(): ReactNode {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <main className="mx-auto flex min-h-dvh max-w-xl items-center px-4 py-12">
        <div
          role="alert"
          className="w-full rounded-2xl border border-err-border/50 bg-card p-6 shadow-xs"
        >
          <div className="flex items-center gap-2.5 text-err-fg">
            <AlertTriangle className="h-6 w-6 shrink-0" aria-hidden="true" />
            <h1 className="text-lg font-bold">Se detectó un problema inesperado en la vista</h1>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            Tu progreso sigue resguardado localmente. Puedes volver al panel principal o restaurar
            el estado inicial si un dato externo causó conflicto.
          </p>
          {this.state.errorMessage ? (
            <p className="mt-2 rounded-lg bg-muted px-3 py-2 font-mono text-xs text-ink-muted">
              {this.state.errorMessage}
            </p>
          ) : null}
          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={this.handleSafeReload}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-on-brand transition-colors hover:bg-brand-hover"
            >
              Volver al Dashboard
            </button>
            <button
              type="button"
              onClick={this.handleCleanReset}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-line bg-muted px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-line-strong"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              Restaurar sesión limpia
            </button>
          </div>
        </div>
      </main>
    );
  }
}
