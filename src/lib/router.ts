import { useCallback, useEffect, useRef, useState } from "react";
import {
  type FoundationModuleId,
  FoundationModuleIdSchema,
  type MockExamId,
  MockExamIdSchema,
} from "@/schemas/curriculum.schema.ts";

export type AppRoute =
  | { readonly kind: "dashboard" }
  | { readonly kind: "foundations"; readonly moduleId?: FoundationModuleId }
  | { readonly kind: "day"; readonly dayNumber: number }
  | { readonly kind: "mocks" }
  | { readonly kind: "mock"; readonly mockExamId: MockExamId }
  | { readonly kind: "vocabulary"; readonly dayFilter?: number };

function parseHashToRoute(rawHash: string): AppRoute | null {
  if (rawHash === "#main-content") {
    return null;
  }

  const trimmed = rawHash.replace(/^#/, "").trim();
  if (trimmed === "" || trimmed === "/" || trimmed === "/dashboard") {
    return { kind: "dashboard" };
  }

  if (trimmed === "/foundations") {
    return { kind: "foundations" };
  }

  if (trimmed.startsWith("/foundations/")) {
    const candidate = trimmed.slice("/foundations/".length).trim();
    const parsedMod = FoundationModuleIdSchema.safeParse(candidate);
    if (parsedMod.success) {
      return { kind: "foundations", moduleId: parsedMod.data };
    }
    return { kind: "foundations" };
  }

  if (trimmed.startsWith("/day/")) {
    const rawNum = Number.parseInt(trimmed.slice("/day/".length), 10);
    if (Number.isInteger(rawNum) && rawNum >= 1 && rawNum <= 15) {
      return { kind: "day", dayNumber: rawNum };
    }
    return { kind: "dashboard" };
  }

  if (trimmed === "/mocks") {
    return { kind: "mocks" };
  }

  if (trimmed.startsWith("/mock/")) {
    const candidate = trimmed.slice("/mock/".length).trim();
    const parsedMock = MockExamIdSchema.safeParse(candidate);
    if (parsedMock.success) {
      return { kind: "mock", mockExamId: parsedMock.data };
    }
    return { kind: "mocks" };
  }

  if (trimmed === "/vocabulary") {
    return { kind: "vocabulary" };
  }

  if (trimmed.startsWith("/vocabulary/day/")) {
    const rawNum = Number.parseInt(trimmed.slice("/vocabulary/day/".length), 10);
    if (Number.isInteger(rawNum) && rawNum >= 1 && rawNum <= 15) {
      return { kind: "vocabulary", dayFilter: rawNum };
    }
    return { kind: "vocabulary" };
  }

  return { kind: "dashboard" };
}

function buildRouteHash(route: AppRoute): string {
  switch (route.kind) {
    case "dashboard":
      return "#/dashboard";
    case "foundations":
      return route.moduleId ? `#/foundations/${route.moduleId}` : "#/foundations";
    case "day":
      return `#/day/${route.dayNumber}`;
    case "mocks":
      return "#/mocks";
    case "mock":
      return `#/mock/${route.mockExamId}`;
    case "vocabulary":
      return route.dayFilter ? `#/vocabulary/day/${route.dayFilter}` : "#/vocabulary";
  }
}

export function useHashRoute() {
  const [route, setRoute] = useState<AppRoute>(() => {
    if (typeof window === "undefined") {
      return { kind: "dashboard" };
    }
    return parseHashToRoute(window.location.hash) ?? { kind: "dashboard" };
  });

  const routeRef = useRef<AppRoute>(route);
  routeRef.current = route;

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (!window.location.hash || window.location.hash === "#" || window.location.hash === "#/") {
      window.history.replaceState(null, "", "#/dashboard");
    }

    const handleHashChange = () => {
      if (window.location.hash === "#main-content") {
        const mainEl = document.getElementById("main-content");
        mainEl?.focus();
        window.history.replaceState(null, "", buildRouteHash(routeRef.current));
        return;
      }

      const next = parseHashToRoute(window.location.hash);
      if (next !== null) {
        setRoute(next);
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const navigate = useCallback((target: AppRoute) => {
    const nextHash = buildRouteHash(target);
    if (typeof window !== "undefined") {
      if (window.location.hash === nextHash) {
        setRoute(target);
      } else {
        window.location.hash = nextHash;
      }
    } else {
      setRoute(target);
    }
  }, []);

  return { route, navigate };
}
