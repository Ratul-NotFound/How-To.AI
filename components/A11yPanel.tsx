"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import {
  Accessibility,
  X,
  Type,
  Eye,
  Zap,
  Sparkles,
  Check,
} from "lucide-react";
import { useAccessibility, TextScale } from "./AccessibilityProvider";
import { Language } from "@/lib/i18n";

interface A11yPanelProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

/**
 * Accessibility settings panel.
 *
 * Written in deliberately plain, low-jargon language with both English and
 * Bangla labels on every control, because the users who need this panel most
 * are the least likely to be comfortable with technical settings screens.
 */

const TEXT_SCALE_LABELS: Record<TextScale, { en: string; bn: string; sample: string }> = {
  normal: { en: "Normal", bn: "সাধারণ", sample: "A" },
  large: { en: "Large", bn: "বড়", sample: "A" },
  xlarge: { en: "Extra Large", bn: "আরও বড়", sample: "A" },
  huge: { en: "Largest", bn: "সবচেয়ে বড়", sample: "A" },
};

export function A11yPanel({ isOpen, onClose, language }: A11yPanelProps) {
  const {
    textScale,
    contrast,
    simpleMode,
    reduceMotion,
    setTextScale,
    setContrast,
    setSimpleMode,
    setReduceMotion,
  } = useAccessibility();

  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const isBn = language === "bn";

  // Escape to close — expected behaviour for any dialog.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    // Move focus into the dialog for keyboard and screen-reader users.
    closeRef.current?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  // Prevent background scrolling while open.
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Render into <body> via a portal. The header uses `backdrop-blur`, which
  // makes it a containing block for fixed-position descendants — without the
  // portal the panel gets sized to the 64px header instead of the viewport
  // and its content becomes unreachable.
  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label={isBn ? "সহায়তা সেটিংস" : "Accessibility settings"}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={panelRef}
        className="relative w-full sm:max-w-lg max-h-[85vh] overflow-y-auto overscroll-contain
                   bg-card border border-border rounded-t-3xl sm:rounded-3xl
                   shadow-2xl p-5 sm:p-6 pb-[max(1.25rem,env(safe-area-inset-bottom))]"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
              <Accessibility className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-foreground leading-tight">
                {isBn ? "পড়তে ও ব্যবহার করতে সহজ" : "Make it easier to read & use"}
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {isBn
                  ? "নিচের সেটিংস বদলালেই অ্যাপটি বড় ও পরিষ্কার হবে।"
                  : "Change anything below. The whole app updates instantly."}
              </p>
            </div>
          </div>
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label={isBn ? "বন্ধ করুন" : "Close settings"}
            className="p-2.5 rounded-2xl bg-secondary hover:bg-muted text-foreground
                       transition-colors active:scale-90 flex-shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6">
          {/* ---------- TEXT SIZE ---------- */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <Type className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h3 className="font-bold text-foreground">
                {isBn ? "লেখার আকার" : "Text size"}
                <span className="block text-xs font-normal text-muted-foreground">
                  {isBn ? "চোখে আরাম, বয়স্কদের জন্য বড় করুন" : "Make letters bigger if your eyes strain"}
                </span>
              </h3>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {(["normal", "large", "xlarge", "huge"] as TextScale[]).map((scale) => {
                const active = textScale === scale;
                const previewSize =
                  scale === "normal" ? 16 : scale === "large" ? 20 : scale === "xlarge" ? 25 : 30;
                return (
                  <button
                    key={scale}
                    onClick={() => setTextScale(scale)}
                    aria-pressed={active}
                    className={`relative flex flex-col items-center justify-center gap-1
                                rounded-2xl border-2 py-3 transition-all active:scale-95
                                ${
                                  active
                                    ? "border-blue-600 bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300"
                                    : "border-border bg-card text-foreground hover:border-blue-400"
                                }`}
                  >
                    {active && (
                      <span className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center">
                        <Check className="w-3 h-3" strokeWidth={4} />
                      </span>
                    )}
                    <span style={{ fontSize: previewSize, lineHeight: 1 }} className="font-bold">
                      {TEXT_SCALE_LABELS[scale].sample}
                    </span>
                    <span className="text-[10px] sm:text-xs font-semibold text-center leading-tight px-1">
                      {isBn ? TEXT_SCALE_LABELS[scale].bn : TEXT_SCALE_LABELS[scale].en}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* ---------- CONTRAST ---------- */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <Eye className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h3 className="font-bold text-foreground">
                {isBn ? "চোখের আলো" : "Eye comfort"}
                <span className="block text-xs font-normal text-muted-foreground">
                  {isBn
                    ? "কালো-সাদা রঙে স্পষ্ট দেখা যায়"
                    : "Strong black & white is easiest to read"}
                </span>
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {(["normal", "high"] as const).map((mode) => {
                const active = contrast === mode;
                return (
                  <button
                    key={mode}
                    onClick={() => setContrast(mode)}
                    aria-pressed={active}
                    className={`flex items-center gap-2.5 rounded-2xl border-2 px-3 py-3.5
                                text-left transition-all active:scale-95
                                ${
                                  active
                                    ? "border-blue-600 bg-blue-50 dark:bg-blue-950/50"
                                    : "border-border bg-card hover:border-blue-400"
                                }`}
                  >
                    <span
                      className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black flex-shrink-0 border ${
                        mode === "high"
                          ? "bg-black text-white border-black"
                          : "bg-white text-black border-slate-300"
                      }`}
                    >
                      Aa
                    </span>
                    <span className="min-w-0">
                      <span className="block font-bold text-sm text-foreground">
                        {mode === "high"
                          ? isBn
                            ? "অতিরিক্ত স্পষ্ট"
                            : "Extra Clear"
                          : isBn
                            ? "সাধারণ"
                            : "Normal"}
                      </span>
                      <span className="block text-[11px] text-muted-foreground leading-tight">
                        {mode === "high"
                          ? isBn
                            ? "খুব কম দেখতে হলে"
                            : "Best if eyes are weak"
                          : isBn
                            ? "সাধারণ দেখা"
                            : "Standard look"}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* ---------- SIMPLE MODE ---------- */}
          <section className="space-y-2">
            <SimpleToggle
              icon={<Sparkles className="w-5 h-5" />}
              title={isBn ? "সহজ মোড (কম লেখা)" : "Simple Mode (less clutter)"}
              desc={
                isBn
                  ? "বাড়ির লেখা ও বাহারি চিহ্ন সরিয়ে সহজ করে দেখাবে"
                  : "Hides decoration and extra buttons, leaving only the essentials"
              }
              active={simpleMode}
              onChange={setSimpleMode}
            />
            <SimpleToggle
              icon={<Zap className="w-5 h-5" />}
              title={isBn ? "নড়াচড়া বন্ধ করুন" : "Stop animations"}
              desc={
                isBn
                  ? "ঝিলমিল করা চিহ্ন বন্ধ করবে"
                  : "Turns off moving, pulsing and blinking elements"
              }
              active={reduceMotion}
              onChange={setReduceMotion}
            />
          </section>
        </div>

        {/* Done button */}
        <button
          onClick={onClose}
          className="w-full mt-6 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700
                     text-white font-bold text-base shadow-md shadow-blue-500/25
                     transition-colors active:scale-98"
        >
          {isBn ? "ঠিক আছে, ফিরে যাই" : "Done, take me back"}
        </button>
      </div>
    </div>,
    document.body
  );
}

function SimpleToggle({
  icon,
  title,
  desc,
  active,
  onChange,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  active: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      onClick={() => onChange(!active)}
      role="switch"
      aria-checked={active}
      className={`w-full flex items-center gap-3 rounded-2xl border-2 px-3.5 py-3.5
                  text-left transition-all active:scale-98
                  ${
                    active
                      ? "border-blue-600 bg-blue-50 dark:bg-blue-950/50"
                      : "border-border bg-card hover:border-blue-400"
                  }`}
    >
      <span
        className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
          active ? "bg-blue-600 text-white" : "bg-secondary text-muted-foreground"
        }`}
      >
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-bold text-sm sm:text-base text-foreground">{title}</span>
        <span className="block text-xs text-muted-foreground leading-snug">{desc}</span>
      </span>
      {/* Switch */}
      <span
        className={`w-12 h-7 rounded-full flex-shrink-0 transition-colors relative ${
          active ? "bg-blue-600" : "bg-slate-300 dark:bg-slate-600"
        }`}
      >
        <span
          className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow transition-all ${
            active ? "left-6" : "left-1"
          }`}
        />
      </span>
    </button>
  );
}
