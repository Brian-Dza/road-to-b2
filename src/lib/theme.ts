import { useCallback, useEffect, useState } from "react";

export type ThemePreference = "system" | "light" | "dark";

const COLOR_SCHEME_STORAGE_KEY = "color-scheme";
const THEME_CHANGE_EVENT = "road-to-b2:theme-change";

function readStoredPreference(): ThemePreference {
  if (typeof window === "undefined") {
    return "system";
  }
  try {
    const raw = window.localStorage.getItem(COLOR_SCHEME_STORAGE_KEY);
    if (raw === "light" || raw === "dark") {
      return raw;
    }
    return "system";
  } catch {
    return "system";
  }
}

function readSystemDark(): boolean {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return false;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function syncMetaColorScheme(preference: ThemePreference): void {
  if (typeof document === "undefined") {
    return;
  }
  const meta = document.querySelector('meta[name="color-scheme"]');
  if (meta instanceof HTMLMetaElement) {
    meta.content = preference === "system" ? "light dark" : preference;
  }
}

export function applyThemePreferenceImperatively(next: ThemePreference): void {
  syncMetaColorScheme(next);
  if (typeof window === "undefined") {
    return;
  }
  try {
    if (next === "system") {
      window.localStorage.removeItem(COLOR_SCHEME_STORAGE_KEY);
    } else {
      window.localStorage.setItem(COLOR_SCHEME_STORAGE_KEY, next);
    }
  } catch {
    // Theme still applies to <meta name="color-scheme"> even when storage is restricted
  }
  window.dispatchEvent(new CustomEvent<ThemePreference>(THEME_CHANGE_EVENT, { detail: next }));
}

export function useThemePreference() {
  const [preference, setPreferenceState] = useState<ThemePreference>(() => readStoredPreference());
  const [systemIsDark, setSystemIsDark] = useState<boolean>(() => readSystemDark());

  useEffect(() => {
    syncMetaColorScheme(preference);
  }, [preference]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handleStorage = (event: StorageEvent) => {
      if (event.key === COLOR_SCHEME_STORAGE_KEY || event.key === null) {
        const next = readStoredPreference();
        setPreferenceState(next);
        syncMetaColorScheme(next);
      }
    };

    const handleCustomTheme = (event: Event) => {
      if (event instanceof CustomEvent) {
        const detail = event.detail;
        if (detail === "system" || detail === "light" || detail === "dark") {
          setPreferenceState(detail);
          syncMetaColorScheme(detail);
        }
      }
    };

    window.addEventListener("storage", handleStorage);
    window.addEventListener(THEME_CHANGE_EVENT, handleCustomTheme);

    if (typeof window.matchMedia !== "function") {
      return () => {
        window.removeEventListener("storage", handleStorage);
        window.removeEventListener(THEME_CHANGE_EVENT, handleCustomTheme);
      };
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleMediaChange = (event: MediaQueryListEvent) => {
      setSystemIsDark(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener(THEME_CHANGE_EVENT, handleCustomTheme);
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  const setThemePreference = useCallback((next: ThemePreference) => {
    setPreferenceState(next);
    applyThemePreferenceImperatively(next);
  }, []);

  return {
    preference,
    systemIsDark,
    setThemePreference,
  };
}
