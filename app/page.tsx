"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { ChatInterface } from "@/components/ChatInterface";
import { CategoryExplorer } from "@/components/CategoryExplorer";
import { Scenario } from "@/lib/search/searchEngine";

export default function Home() {
  const [autoSpeak, setAutoSpeak] = useState(false);
  const [isExplorerOpen, setIsExplorerOpen] = useState(false);
  const [selectedScenarioQuery, setSelectedScenarioQuery] = useState<string | null>(null);

  const handleSelectScenario = (scenario: Scenario) => {
    setSelectedScenarioQuery(scenario.title);
  };

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header
        autoSpeak={autoSpeak}
        onToggleAutoSpeak={() => setAutoSpeak((prev) => !prev)}
        onOpenExplorer={() => setIsExplorerOpen(true)}
      />

      <div className="flex-1">
        <ChatInterface
          autoSpeak={autoSpeak}
          externalQuery={selectedScenarioQuery}
          onClearExternalQuery={() => setSelectedScenarioQuery(null)}
        />
      </div>

      <CategoryExplorer
        isOpen={isExplorerOpen}
        onClose={() => setIsExplorerOpen(false)}
        onSelectScenario={handleSelectScenario}
      />
    </main>
  );
}
