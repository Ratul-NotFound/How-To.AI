"use client";

import { useState, useEffect } from "react";
import { X, Search, ChevronRight, ArrowLeft, Compass } from "lucide-react";
import { Scenario } from "@/lib/search/searchEngine";
import { ChecklistCard } from "./ChecklistCard";
import { Language, UI_TEXT, translateCategory } from "@/lib/i18n";

interface CategoryExplorerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectScenario: (scenario: Scenario) => void;
  language?: Language;
}

export function CategoryExplorer({
  isOpen,
  onClose,
  onSelectScenario,
  language = "bn",
}: CategoryExplorerProps) {
  const [categories, setCategories] = useState<{ name: string; count: number }[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [scenarios, setScenarios] = useState<Scenario[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeScenario, setActiveScenario] = useState<Scenario | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const t = UI_TEXT[language];

  useEffect(() => {
    if (isOpen) {
      fetch("/api/categories")
        .then((res) => res.json())
        .then((data) => {
          if (data.categories) setCategories(data.categories);
        })
        .catch(console.error);
    }
  }, [isOpen]);

  useEffect(() => {
    if (selectedCategory || searchQuery) {
      setIsLoading(true);
      const query = selectedCategory ? `${selectedCategory} ${searchQuery}` : searchQuery;
      fetch(`/api/search?q=${encodeURIComponent(query)}&limit=30`)
        .then((res) => res.json())
        .then((data) => {
          setScenarios(data.results || []);
          setIsLoading(false);
        })
        .catch(() => setIsLoading(false));
    }
  }, [selectedCategory, searchQuery]);

  if (!isOpen) return null;

  const currentCategoryMeta = selectedCategory ? translateCategory(selectedCategory, language) : null;

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="w-full max-w-4xl h-[90vh] bg-card border border-border/80 rounded-3xl shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-border/80 flex items-center justify-between bg-secondary/30">
          <div className="flex items-center gap-2.5">
            {selectedCategory && (
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setActiveScenario(null);
                }}
                className="p-1.5 rounded-xl hover:bg-muted text-muted-foreground transition-colors mr-1 active:scale-95"
                title={t.backToCategories}
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-foreground leading-tight">
                {currentCategoryMeta ? currentCategoryMeta.name : t.explorerTitle}
              </h2>
              <p className="text-xs text-muted-foreground">
                {selectedCategory
                  ? language === "bn"
                    ? "বিস্তারিত দেখতে যেকোনো গাইডে চাপুন"
                    : "Select a guide to view details"
                  : t.explorerSubtitle}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-muted text-muted-foreground transition-colors active:scale-95"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar inside Explorer */}
        <div className="p-3 sm:p-4 border-b border-border/80 bg-background/50">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={selectedCategory ? t.searchInTopic : t.searchAllTopics}
              className="w-full bg-card border border-border rounded-2xl pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {activeScenario ? (
            <div className="space-y-4">
              <button
                onClick={() => setActiveScenario(null)}
                className="flex items-center gap-1.5 text-sm text-blue-600 dark:text-blue-400 font-bold mb-2 hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{language === "bn" ? "তালিকায় ফিরে যান" : "Back to topic list"}</span>
              </button>
              <ChecklistCard scenario={activeScenario} language={language} />
              <button
                onClick={() => {
                  onSelectScenario(activeScenario);
                  onClose();
                }}
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm sm:text-base hover:opacity-95 transition-opacity shadow-lg shadow-blue-500/25 active:scale-98"
              >
                {language === "bn" ? "💬 এই বিষয়ে সহকারীর সমাধান নিন" : "Ask Assistant about this Guide"}
              </button>
            </div>
          ) : selectedCategory || searchQuery ? (
            <div className="space-y-2.5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  {isLoading
                    ? language === "bn" ? "ডাটাবেজ খোঁজা হচ্ছে..." : "Searching database..."
                    : language === "bn" ? `${scenarios.length} টি সমাধান পাওয়া গেছে:` : `Found ${scenarios.length} matching guides:`}
                </span>
              </div>
              {scenarios.map((sc) => (
                <div
                  key={sc.id}
                  onClick={() => setActiveScenario(sc)}
                  className="p-4 rounded-2xl border border-border/80 bg-card hover:border-blue-500/40 hover:bg-secondary/40 transition-all cursor-pointer flex items-center justify-between gap-3 group active:scale-99 shadow-xs"
                >
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                      {sc.subcategory}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                      {sc.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground line-clamp-1">
                      {sc.problem_statement}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-blue-500 flex-shrink-0 transition-transform group-hover:translate-x-1" />
                </div>
              ))}
            </div>
          ) : (
            /* Category grid with friendly icons */
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {categories.map((cat) => {
                const catMeta = translateCategory(cat.name, language);
                return (
                  <button
                    key={cat.name}
                    onClick={() => setSelectedCategory(cat.name)}
                    className="p-4 rounded-2xl border border-border/80 bg-card hover:border-blue-500/50 hover:bg-blue-500/5 transition-all text-left flex items-center gap-3.5 group shadow-xs active:scale-98"
                  >
                    <span className="text-2xl p-2.5 rounded-2xl bg-secondary/80 flex-shrink-0 group-hover:scale-110 transition-transform">
                      {catMeta.icon}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                        {catMeta.name}
                      </h4>
                      <span className="text-xs text-muted-foreground">
                        {cat.count} {t.guidesAvailable}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-blue-500 transition-transform group-hover:translate-x-1 flex-shrink-0" />
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
