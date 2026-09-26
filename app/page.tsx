"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { ChatInterface } from "@/components/ChatInterface";
import { CategoryExplorer } from "@/components/CategoryExplorer";
import { Scenario } from "@/lib/search/searchEngine";
import { Language } from "@/lib/i18n";

export default function Home() {
  const [language, setLanguage] = useState<Language>("bn");
  const [autoSpeak, setAutoSpeak] = useState(false);
  const [isExplorerOpen, setIsExplorerOpen] = useState(false);
  const [selectedScenarioQuery, setSelectedScenarioQuery] = useState<string | null>(null);
  const [chatKey, setChatKey] = useState(0);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("how_to_lang") as Language;
      if (saved === "en" || saved === "bn") {
        setLanguage(saved);
      }
    } catch (_) {}
  }, []);

  const handleToggleLanguage = () => {
    const next: Language = language === "bn" ? "en" : "bn";
    setLanguage(next);
    try {
      localStorage.setItem("how_to_lang", next);
    } catch (_) {}
  };

  const handleSelectScenario = (scenario: Scenario) => {
    setSelectedScenarioQuery(scenario.title);
  };

  const handleResetChat = () => {
    setChatKey((k) => k + 1);
    setSelectedScenarioQuery(null);
  };

  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground transition-colors">
      <Header
        autoSpeak={autoSpeak}
        onToggleAutoSpeak={() => setAutoSpeak((prev) => !prev)}
        onOpenExplorer={() => setIsExplorerOpen(true)}
        onResetChat={handleResetChat}
        language={language}
        onToggleLanguage={handleToggleLanguage}
      />

      <div className="flex-1">
        <ChatInterface
          key={`${chatKey}-${language}`}
          autoSpeak={autoSpeak}
          externalQuery={selectedScenarioQuery}
          onClearExternalQuery={() => setSelectedScenarioQuery(null)}
          language={language}
        />
      </div>

      <CategoryExplorer
        isOpen={isExplorerOpen}
        onClose={() => setIsExplorerOpen(false)}
        onSelectScenario={handleSelectScenario}
        language={language}
      />
    </main>
  );
}
