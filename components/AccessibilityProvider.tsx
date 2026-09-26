"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useCallback,
} from "react";

/**
 * Accessibility preferences for a user base that includes elderly people,
 * children, and non-technical users.
 *
 * These settings are persisted to localStorage and applied as data-attributes
 * on <html> so plain CSS can react to them. This avoids threading props
 * through every component.
 */

export type TextScale = "normal" | "large" | "xlarge" | "huge";
export type ContrastMode = "normal" | "high";

interface AccessibilitySettings {
  textScale: TextScale;
  contrast: ContrastMode;
  simpleMode: boolean;
  reduceMotion: boolean;
}

interface AccessibilityContextValue extends AccessibilitySettings {
  setTextScale: (v: TextScale) => void;
  setContrast: (v: ContrastMode) => void;
  setSimpleMode: (v: boolean) => void;
  setReduceMotion: (v: boolean) => void;
  cycleTextScale: () => void;
  isReady: boolean;
}

const STORAGE_KEY = "how_to_a11y";

const DEFAULT_SETTINGS: AccessibilitySettings = {
  textScale: "normal",
  contrast: "normal",
  simpleMode: false,
  reduceMotion: false,
};

const AccessibilityContext = createContext<AccessibilityContextValue | null>(null);

const TEXT_SCALE_ORDER: TextScale[] = ["normal", "large", "xlarge", "huge"];

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<AccessibilitySettings>(DEFAULT_SETTINGS);
  const [isReady, setIsReady] = useState(false);

  // Load saved preferences after mount so server and client markup match.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<AccessibilitySettings>;
        setSettings((prev) => ({ ...prev, ...parsed }));
      }
    } catch (_) {
      // Corrupt or unavailable storage: fall back to defaults.
    }
    setIsReady(true);
  }, []);

  // Apply preferences to the document root.
  useEffect(() => {
    if (!isReady) return;
    const root = document.documentElement;

    root.dataset.textScale = settings.textScale;
    root.dataset.contrast = settings.contrast;
    root.dataset.simple = settings.simpleMode ? "on" : "off";
    root.dataset.reduceMotion = settings.reduceMotion ? "on" : "off";

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch (_) {
      // Private browsing / quota exceeded: preferences simply won't persist.
    }
  }, [settings, isReady]);

  // Respect the OS-level reduced-motion setting unless the user opts out.
  useEffect(() => {
    if (!isReady) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      setSettings((prev) => (prev.reduceMotion ? prev : { ...prev, reduceMotion: true }));
    }
  }, [isReady]);

  const update = useCallback(<K extends keyof AccessibilitySettings>(key: K, value: AccessibilitySettings[K]) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  }, []);

  const cycleTextScale = useCallback(() => {
    setSettings((prev) => {
      const idx = TEXT_SCALE_ORDER.indexOf(prev.textScale);
      const next = TEXT_SCALE_ORDER[(idx + 1) % TEXT_SCALE_ORDER.length];
      return { ...prev, textScale: next };
    });
  }, []);

  const value: AccessibilityContextValue = {
    ...settings,
    setTextScale: (v) => update("textScale", v),
    setContrast: (v) => update("contrast", v),
    setSimpleMode: (v) => update("simpleMode", v),
    setReduceMotion: (v) => update("reduceMotion", v),
    cycleTextScale,
    isReady,
  };

  return <AccessibilityContext.Provider value={value}>{children}</AccessibilityContext.Provider>;
}

export function useAccessibility() {
  const ctx = useContext(AccessibilityContext);
  if (!ctx) {
    throw new Error("useAccessibility must be used inside <AccessibilityProvider>");
  }
  return ctx;
}
