import {
  BookMarked,
  BookOpenCheck,
  Cloud,
  CloudOff,
  Compass,
  Layers,
  LogOut,
  RefreshCw,
  Settings,
  Timer,
} from "lucide-react";
import { useAuth } from "@/context/auth-context.tsx";
import type { AppRoute } from "@/lib/router.ts";
import { cn } from "@/lib/utils.ts";

export interface AppHeaderProps {
  readonly route: AppRoute;
  readonly onOpenSettings: () => void;
}

function computeInitials(displayName: string): string {
  const parts = displayName.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) {
    return "U";
  }
  const first = parts[0]?.[0] ?? "U";
  const second = parts.length > 1 ? (parts[parts.length - 1]?.[0] ?? "") : (parts[0]?.[1] ?? "");
  return `${first}${second}`.toUpperCase();
}

export function AppHeader({ route, onOpenSettings }: AppHeaderProps) {
  const { profile, cloudSyncState, signOut } = useAuth();

  const isDashboardActive = route.kind === "dashboard" || route.kind === "day";
  const isFoundationsActive = route.kind === "foundations";
  const isMocksActive = route.kind === "mocks" || route.kind === "mock";
  const isVocabularyActive = route.kind === "vocabulary";

  const displayName = profile?.displayName ?? "Estudiante";
  const initials = computeInitials(displayName);

  const SyncIcon =
    cloudSyncState === "offline" ? CloudOff : cloudSyncState === "syncing" ? RefreshCw : Cloud;
  const syncLabel =
    cloudSyncState === "offline"
      ? "Sin conexión · Guardado local"
      : cloudSyncState === "syncing"
        ? "Sincronizando..."
        : "Sincronizado en la nube";

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-card/95 backdrop-blur-xs">
      <a
        href="#main-content"
        className="visually-hidden focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-xl focus:bg-brand focus:px-4 focus:py-2.5 focus:text-sm focus:font-bold focus:text-on-brand focus:shadow-lg"
      >
        Saltar al contenido principal
      </a>

      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#/dashboard"
          className="inline-flex min-h-11 items-center gap-2.5 rounded-xl px-1.5 py-1 text-ink transition-colors hover:text-brand"
        >
          <BookOpenCheck className="h-6 w-6 shrink-0 text-brand" aria-hidden="true" />
          <div>
            <span className="block text-base font-bold tracking-tight leading-tight">
              Road to B2
            </span>
            <span className="block text-[11px] font-medium text-ink-muted">
              iTEP Academic-Plus · 15 Días
            </span>
          </div>
        </a>

        <div className="flex flex-wrap items-center gap-2">
          <nav aria-label="Principal" className="flex flex-wrap items-center gap-1.5">
            <a
              href="#/dashboard"
              aria-current={route.kind === "dashboard" ? "page" : undefined}
              className={cn(
                "inline-flex min-h-11 items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-semibold transition-colors",
                isDashboardActive
                  ? "border-brand bg-info-bg text-info-fg"
                  : "border-transparent text-ink-muted hover:bg-muted hover:text-ink",
              )}
            >
              <Compass className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Roadmap 15 Días B2</span>
            </a>

            <a
              href="#/foundations"
              aria-current={isFoundationsActive ? "page" : undefined}
              className={cn(
                "inline-flex min-h-11 items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-semibold transition-colors",
                isFoundationsActive
                  ? "border-brand bg-info-bg text-info-fg"
                  : "border-transparent text-ink-muted hover:bg-muted hover:text-ink",
              )}
            >
              <Layers className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Cimientos A1–B1</span>
            </a>

            <a
              href="#/mocks"
              aria-current={route.kind === "mocks" ? "page" : undefined}
              className={cn(
                "inline-flex min-h-11 items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-semibold transition-colors",
                isMocksActive
                  ? "border-brand bg-info-bg text-info-fg"
                  : "border-transparent text-ink-muted hover:bg-muted hover:text-ink",
              )}
            >
              <Timer className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Simulacros 80 min</span>
            </a>

            <a
              href="#/vocabulary"
              aria-current={isVocabularyActive ? "page" : undefined}
              className={cn(
                "inline-flex min-h-11 items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-semibold transition-colors",
                isVocabularyActive
                  ? "border-brand bg-info-bg text-info-fg"
                  : "border-transparent text-ink-muted hover:bg-muted hover:text-ink",
              )}
            >
              <BookMarked className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Vocabulario · Byme</span>
            </a>
          </nav>

          <div className="flex items-center gap-1.5 border-l border-line pl-2">
            <span
              title={syncLabel}
              className={cn(
                "hidden items-center gap-1 rounded-lg border px-2 py-1 text-[11px] font-semibold xl:inline-flex",
                cloudSyncState === "offline"
                  ? "border-warn-border/70 bg-warn-bg text-warn-fg"
                  : "border-ok-border/60 bg-ok-bg text-ok-fg",
              )}
            >
              <SyncIcon
                className={cn(
                  "h-3.5 w-3.5 shrink-0",
                  cloudSyncState === "syncing" && "animate-spin",
                )}
                aria-hidden="true"
              />
              <span>{cloudSyncState === "offline" ? "Local" : "Nube"}</span>
            </span>

            <span className="inline-flex min-h-9 items-center gap-1.5 rounded-xl border border-line bg-canvas px-2.5 py-1 text-xs font-semibold text-ink">
              <span
                aria-hidden="true"
                className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-info-bg text-[11px] font-extrabold text-info-fg"
              >
                {initials}
              </span>
              <span className="max-w-28 truncate">{displayName}</span>
            </span>

            <button
              type="button"
              onClick={onOpenSettings}
              className="inline-flex min-h-11 items-center gap-1.5 rounded-xl border border-line bg-muted px-3 py-2 text-xs font-semibold text-ink transition-colors hover:border-line-strong"
            >
              <Settings className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Ajustes y Respaldo</span>
            </button>

            <button
              type="button"
              onClick={() => {
                void signOut();
              }}
              aria-label="Cerrar sesión"
              title="Cerrar sesión"
              className="inline-flex min-h-11 items-center gap-1.5 rounded-xl border border-line bg-card px-2.5 py-2 text-xs font-semibold text-ink-muted transition-colors hover:border-err-border hover:bg-err-bg hover:text-err-fg"
            >
              <LogOut className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="hidden sm:inline">Salir</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
