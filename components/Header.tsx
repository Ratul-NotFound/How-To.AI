"use client";

import { useState, useEffect } from "react";
import { Sparkles, Download, Volume2, VolumeX, Menu } from "lucide-react";

interface HeaderProps {
  autoSpeak: boolean;
  onToggleAutoSpeak: () => void;
  onOpenExplorer: () => void;
}

export function Header({
  autoSpeak,
  onToggleAutoSpeak,
  onOpenExplorer,
}: HeaderProps) {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handleBeforeInstall = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstall);
    return () => window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
  }, []);

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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md px-4 py-3">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-md shadow-blue-500/20 text-white font-black text-lg">
            H
          </div>
          <div>
            <div className="flex items-center gap-1.5 font-bold tracking-tight text-foreground text-lg leading-tight">
              <span>How-To</span>
              <span className="text-blue-500 font-extrabold">.AI</span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20">
                PWA
              </span>
            </div>
            <p className="text-[11px] text-muted-foreground hidden sm:block">
              2,000+ Verified Real-World Life Solutions
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Categories Button */}
          <button
            onClick={onOpenExplorer}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-border bg-card hover:bg-accent text-foreground transition-colors shadow-sm"
          >
            <Menu className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">2,000 Scenarios</span>
            <span className="sm:hidden">Explore</span>
          </button>

          {/* Voice Toggle */}
          <button
            onClick={onToggleAutoSpeak}
            title={autoSpeak ? "Voice Auto-Speech ON" : "Voice Auto-Speech MUTED"}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors shadow-sm ${
              autoSpeak
                ? "bg-blue-600/10 border-blue-500/30 text-blue-500"
                : "bg-card border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {autoSpeak ? (
              <>
                <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                <span className="hidden sm:inline">Voice ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Muted</span>
              </>
            )}
          </button>

          {/* PWA Install Button */}
          {isInstallable && (
            <button
              onClick={handleInstallClick}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20 hover:opacity-95 transition-opacity"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Install App</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
