import { AlertTriangle } from "lucide-react";
import { useCallback, useEffect, useRef } from "react";
import { AppHeader } from "@/components/layout/app-header.tsx";
import { SettingsDialog } from "@/components/layout/settings-dialog.tsx";
import { ErrorBoundary } from "@/components/ui/error-boundary.tsx";
import { ProgressProvider, useProgress } from "@/context/progress-context.tsx";
import { curriculumRegistry } from "@/data/curriculum-registry.ts";
import { type AppRoute, useHashRoute } from "@/lib/router.ts";
import { DashboardPage } from "@/pages/DashboardPage.tsx";
import { DayStudyPage } from "@/pages/DayStudyPage.tsx";
import { FoundationsPage } from "@/pages/FoundationsPage.tsx";
import { MockExamPage } from "@/pages/MockExamPage.tsx";
import { VocabularyPage } from "@/pages/VocabularyPage.tsx";

function computeDocumentTitle(route: AppRoute): string {
  switch (route.kind) {
    case "dashboard":
      return "Roadmap 15 Días B2 | Road to B2 iTEP";
    case "foundations": {
      if (route.moduleId) {
        const mod = curriculumRegistry.foundationModules.find((m) => m.id === route.moduleId);
        if (mod) {
          return `${mod.cefrLevel}: ${mod.title} | Cimientos Road to B2`;
        }
      }
      return "Cimientos A1–B1 y Diagnóstico | Road to B2 iTEP";
    }
    case "day": {
      const day = curriculumRegistry.roadmapDays.find((d) => d.dayNumber === route.dayNumber);
      return day
        ? `Día ${day.dayNumber}: ${day.title} | Road to B2 iTEP`
        : `Día ${route.dayNumber} | Road to B2 iTEP`;
    }
    case "mocks":
      return "Simulacros Oficiales 80 min | Road to B2 iTEP";
    case "mock":
      return route.mockExamId === "mock-mid-day08"
        ? "Simulacro Intermedio #1 (80 min) | Road to B2 iTEP"
        : "Simulacro Final #2 (80 min) | Road to B2 iTEP";
    case "vocabulary":
      return route.dayFilter
        ? `Día ${route.dayFilter} · Vocabulario Inteligente Byme Lenguage | Road to B2`
        : "Vocabulario Inteligente · Byme Lenguage | Road to B2 iTEP";
  }
}

function AppShell() {
  const { route } = useHashRoute();
  const { recoveredFromCorruption } = useProgress();
  const settingsDialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    document.title = computeDocumentTitle(route);
  }, [route]);

  const handleOpenSettings = useCallback(() => {
    const dialogEl = settingsDialogRef.current;
    if (dialogEl && !dialogEl.open) {
      dialogEl.showModal();
    }
  }, []);

  return (
    <div className="min-h-dvh bg-canvas text-ink">
      <AppHeader route={route} onOpenSettings={handleOpenSettings} />

      <main
        id="main-content"
        tabIndex={-1}
        className="mx-auto max-w-7xl px-4 py-6 focus:outline-none sm:px-6 lg:px-8"
      >
        {recoveredFromCorruption ? (
          <div
            role="status"
            className="mb-6 flex items-center gap-2.5 rounded-xl border border-warn-border/70 bg-warn-bg px-4 py-3 text-xs font-semibold text-warn-fg"
          >
            <AlertTriangle className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>
              Se detectaron datos locales incompatibles y se restauró automáticamente un estado
              inicial limpio y seguro.
            </span>
          </div>
        ) : null}

        {route.kind === "dashboard" ? <DashboardPage /> : null}

        {route.kind === "foundations" ? <FoundationsPage initialModuleId={route.moduleId} /> : null}

        {route.kind === "day" ? (
          <DayStudyPage dayNumber={route.dayNumber} onOpenSettings={handleOpenSettings} />
        ) : null}

        {route.kind === "mocks" ? <MockExamPage onOpenSettings={handleOpenSettings} /> : null}

        {route.kind === "mock" ? (
          <MockExamPage activeMockExamId={route.mockExamId} onOpenSettings={handleOpenSettings} />
        ) : null}

        {route.kind === "vocabulary" ? (
          <VocabularyPage initialDayFilter={route.dayFilter} onOpenSettings={handleOpenSettings} />
        ) : null}
      </main>

      <footer className="mt-12 border-t border-line bg-card py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 text-xs text-ink-muted sm:px-6 lg:px-8">
          <span>
            Road to B2 · Bootcamp Intensivo de 15 Días para iTEP Academic-Plus (Meta MCER B2 &gt;=
            3.5 / 6.0)
          </span>
          <span>Persistencia local validada con Zod · Audio neuronal multi-voz local</span>
        </div>
      </footer>

      <SettingsDialog dialogRef={settingsDialogRef} />
    </div>
  );
}

export function App() {
  return (
    <ErrorBoundary>
      <ProgressProvider>
        <AppShell />
      </ProgressProvider>
    </ErrorBoundary>
  );
}
