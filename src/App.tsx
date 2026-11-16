import { AlertTriangle, BookOpenCheck, RefreshCw } from "lucide-react";
import { useCallback, useEffect, useRef } from "react";
import { AppHeader } from "@/components/layout/app-header.tsx";
import { SettingsDialog } from "@/components/layout/settings-dialog.tsx";
import { ErrorBoundary } from "@/components/ui/error-boundary.tsx";
import { AuthProvider, useAuth } from "@/context/auth-context.tsx";
import { ProgressProvider, useProgress } from "@/context/progress-context.tsx";
import { curriculumRegistry } from "@/data/curriculum-registry.ts";
import {
  type AppRoute,
  type AuthScreenMode,
  isProtectedAppRoute,
  useHashRoute,
} from "@/lib/router.ts";
import { AuthPage } from "@/pages/AuthPage.tsx";
import { DashboardPage } from "@/pages/DashboardPage.tsx";
import { DayStudyPage } from "@/pages/DayStudyPage.tsx";
import { FoundationsPage } from "@/pages/FoundationsPage.tsx";
import { LandingPage } from "@/pages/LandingPage.tsx";
import { MockExamPage } from "@/pages/MockExamPage.tsx";
import { VocabularyPage } from "@/pages/VocabularyPage.tsx";

function computeDocumentTitle(route: AppRoute): string {
  switch (route.kind) {
    case "landing":
      return "Road to B2 · Bootcamp Intensivo de 15 Días para iTEP Academic-Plus";
    case "auth":
      return route.mode === "signup"
        ? "Crear Cuenta Personal | Road to B2 iTEP"
        : "Iniciar Sesión | Road to B2 iTEP";
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

function AuthenticatedWorkspace({ route }: { readonly route: AppRoute }) {
  const { recoveredFromCorruption } = useProgress();
  const settingsDialogRef = useRef<HTMLDialogElement | null>(null);

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
          <span>Cuenta personal sincronizada con Supabase RLS · Claves cifradas AES-GCM-256</span>
        </div>
      </footer>

      <SettingsDialog dialogRef={settingsDialogRef} />
    </div>
  );
}

function AppRouterGate() {
  const { route, navigate } = useHashRoute();
  const {
    status,
    profile,
    initialProgress,
    hasUnsyncedLocalChangesOnBoot,
    recoveredFromCorruption,
    decryptedGeminiApiKey,
    setCloudSyncState,
  } = useAuth();

  const intendedProtectedRouteRef = useRef<AppRoute | null>(null);

  useEffect(() => {
    document.title = computeDocumentTitle(route);
  }, [route]);

  useEffect(() => {
    if (status === "unauthenticated" && isProtectedAppRoute(route)) {
      intendedProtectedRouteRef.current = route;
      navigate({ kind: "auth", mode: "signin" });
      return;
    }

    if (status === "authenticated" && (route.kind === "landing" || route.kind === "auth")) {
      const pendingTarget = intendedProtectedRouteRef.current ?? { kind: "dashboard" };
      intendedProtectedRouteRef.current = null;
      navigate(pendingTarget);
    }
  }, [navigate, route, status]);

  const handleSwitchAuthMode = useCallback(
    (nextMode: AuthScreenMode) => {
      navigate({ kind: "auth", mode: nextMode });
    },
    [navigate],
  );

  const handleAuthenticatedSuccess = useCallback(() => {
    const target = intendedProtectedRouteRef.current ?? { kind: "dashboard" };
    intendedProtectedRouteRef.current = null;
    navigate(target);
  }, [navigate]);

  if (status === "loading") {
    return (
      <div className="flex min-h-dvh flex-col items-center justify-center gap-3 bg-canvas px-4 text-ink">
        <div className="inline-flex items-center gap-2.5 rounded-2xl border border-line bg-card px-5 py-4 shadow-xs">
          <BookOpenCheck className="h-5 w-5 text-brand" aria-hidden="true" />
          <RefreshCw className="h-4 w-4 animate-spin text-brand" aria-hidden="true" />
          <span className="text-xs font-bold">Cargando tu espacio personal Road to B2...</span>
        </div>
      </div>
    );
  }

  if (status === "unauthenticated" || !profile) {
    if (route.kind === "auth") {
      return (
        <AuthPage
          mode={route.mode}
          onSwitchMode={handleSwitchAuthMode}
          onAuthenticated={handleAuthenticatedSuccess}
        />
      );
    }
    if (isProtectedAppRoute(route)) {
      return (
        <AuthPage
          mode="signin"
          onSwitchMode={handleSwitchAuthMode}
          onAuthenticated={handleAuthenticatedSuccess}
        />
      );
    }
    return <LandingPage />;
  }

  const effectiveWorkspaceRoute: AppRoute = isProtectedAppRoute(route)
    ? route
    : { kind: "dashboard" };

  return (
    <ProgressProvider
      key={profile.userId}
      userId={profile.userId}
      initialProgress={initialProgress}
      hasUnsyncedLocalChangesOnBoot={hasUnsyncedLocalChangesOnBoot}
      recoveredFromCorruption={recoveredFromCorruption}
      decryptedGeminiApiKey={decryptedGeminiApiKey}
      onCloudSyncStateChange={setCloudSyncState}
    >
      <AuthenticatedWorkspace route={effectiveWorkspaceRoute} />
    </ProgressProvider>
  );
}

export function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <AppRouterGate />
      </AuthProvider>
    </ErrorBoundary>
  );
}
