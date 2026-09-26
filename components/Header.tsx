"use client";

import { useState, useEffect } from "react";
import { Compass, Download, Volume2, VolumeX, Moon, Sun, Sparkles, Globe } from "lucide-react";
import { Language, UI_TEXT } from "@/lib/i18n";

interface HeaderProps {
  autoSpeak: boolean;
  onToggleAutoSpeak: () => void;
  onOpenExplorer: () => void;
  onResetChat?: () => void;
  language: Language;
  onToggleLanguage: () => void;
}

export function Header({
  autoSpeak,
  onToggleAutoSpeak,
  onOpenExplorer,
  onResetChat,
  language,
  onToggleLanguage,
}: HeaderProps) {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const t = UI_TEXT[language];

  useEffect(() => {
    // Detect theme
    if (typeof window !== "undefined") {
      setIsDark(document.documentElement.classList.contains("dark"));
    }

    const handleBeforeInstall = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstall);
    return () => window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setIsInstallable(false);
    }
    setDeferredPrompt(null);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md px-3 sm:px-6 py-2.5">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-2">
        {/* Brand Logo & Title */}
        <button
          onClick={onResetChat}
          className="flex items-center gap-2.5 text-left group transition-transform active:scale-95"
          title={language === "bn" ? "নতুন করে শুরু করুন" : "Start fresh conversation"}
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-blue-500 flex items-center justify-center shadow-md shadow-blue-500/25 text-white flex-shrink-0 group-hover:rotate-3 transition-transform">
            <Compass className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 leading-tight">
              <span className="font-extrabold tracking-tight text-foreground text-lg sm:text-xl">
                {language === "bn" ? "হাও-টু" : "How-To"}
                <span className="text-blue-600 dark:text-blue-400">.AI</span>
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                PWA
              </span>
            </div>
            <p className="text-[11px] text-muted-foreground hidden sm:block font-medium">
              {t.appSubtitle}
            </p>
          </div>
        </button>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Language Switcher (Prominent & Clear) */}
          <button
            onClick={onToggleLanguage}
            title={language === "bn" ? "Switch to English" : "বাংলা ভাষায় পরিবর্তন করুন"}
            className="flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl text-xs sm:text-sm font-bold border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 text-blue-700 dark:text-blue-300 transition-all shadow-xs active:scale-95"
          >
            <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />
            <span className="font-bold">
              {language === "bn" ? "English" : "বাংলা"}
            </span>
          </button>

          {/* Browse Topics Button */}
          <button
            onClick={onOpenExplorer}
            className="flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold border border-border bg-card hover:bg-accent text-foreground transition-all shadow-xs active:scale-95"
            title={t.browseTopics}
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500" />
            <span className="hidden sm:inline">{t.browseTopics}</span>
            <span className="sm:hidden">{language === "bn" ? "বিষয়সমূহ" : "Topics"}</span>
          </button>

          {/* Voice Speech Toggle */}
          <button
            onClick={onToggleAutoSpeak}
            title={autoSpeak ? t.voiceOn : t.voiceMuted}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all shadow-xs active:scale-95 ${
              autoSpeak
                ? "bg-blue-500/10 border-blue-500/30 text-blue-600 dark:text-blue-400"
                : "bg-card border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {autoSpeak ? (
              <>
                <Volume2 className="w-4 h-4 text-blue-500 animate-pulse" />
                <span className="hidden md:inline">{t.voiceOn}</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4" />
                <span className="hidden md:inline">{t.voiceMuted}</span>
              </>
            )}
          </button>

          {/* Light / Dark Mode Switcher */}
          <button
            onClick={toggleTheme}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className="p-2 sm:px-2.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium border border-border bg-card hover:bg-accent text-muted-foreground hover:text-foreground transition-all shadow-xs active:scale-95 flex items-center gap-1"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* PWA Install Button */}
          {isInstallable && (
            <button
              onClick={handleInstallClick}
              className="flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25 hover:opacity-95 transition-opacity active:scale-95"
            >
              <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">{t.installApp}</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
