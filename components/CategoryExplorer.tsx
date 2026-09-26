"use client";

import { useState, useEffect } from "react";
import { X, Search, ChevronRight, Layers, ArrowLeft } from "lucide-react";
import { Scenario } from "@/lib/search/searchEngine";
import { ChecklistCard } from "./ChecklistCard";

interface CategoryExplorerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectScenario: (scenario: Scenario) => void;
}

export function CategoryExplorer({
  isOpen,
  onClose,
  onSelectScenario,
}: CategoryExplorerProps) {
  const [categories, setCategories] = useState<{ name: string; count: number }[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [scenarios, setScenarios] = useState<Scenario[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeScenario, setActiveScenario] = useState<Scenario | null>(null);
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="w-full max-w-4xl h-[90vh] bg-card border border-border rounded-3xl shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            {selectedCategory && (
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setActiveScenario(null);
                }}
                className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground mr-1"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
            )}
            <Layers className="w-5 h-5 text-blue-500" />
            <h2 className="text-base sm:text-lg font-bold text-foreground">
              {selectedCategory ? selectedCategory : "Explore 2,000 Scenarios"}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-muted text-muted-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar inside Explorer */}
        <div className="p-3 sm:p-4 border-b border-border bg-secondary/30">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search across all 2,000 topics..."
              className="w-full bg-background border border-border rounded-xl pl-9 pr-4 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {activeScenario ? (
            <div className="space-y-4">
              <button
                onClick={() => setActiveScenario(null)}
                className="flex items-center gap-1.5 text-xs text-blue-500 font-semibold mb-2"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back to results
              </button>
              <ChecklistCard scenario={activeScenario} />
              <button
                onClick={() => {
                  onSelectScenario(activeScenario);
                  onClose();
                }}
                className="w-full py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20"
              >
                Ask Assistant about this Scenario
              </button>
            </div>
          ) : selectedCategory || searchQuery ? (
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground mb-3">
                {isLoading ? "Searching scenarios..." : `Found ${scenarios.length} matching guides:`}
              </p>
              {scenarios.map((sc) => (
                <div
                  key={sc.id}
                  onClick={() => setActiveScenario(sc)}
                  className="p-3.5 rounded-2xl border border-border/80 bg-card hover:bg-accent/40 transition-colors cursor-pointer flex items-center justify-between gap-3 group"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                      <span className="font-mono text-blue-500">#{sc.id}</span>
                      <span>•</span>
                      <span>{sc.subcategory}</span>
                    </div>
                    <h4 className="text-sm font-semibold text-foreground group-hover:text-blue-500 transition-colors line-clamp-1">
                      {sc.title}
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-1">
                      {sc.problem_statement}
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-blue-500 flex-shrink-0 transition-transform group-hover:translate-x-0.5" />
                </div>
              ))}
            </div>
          ) : (
            /* Category grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className="p-4 rounded-2xl border border-border bg-card hover:bg-accent/40 hover:border-blue-500/40 transition-all text-left flex items-center justify-between group shadow-sm"
                >
                  <div>
                    <h4 className="text-sm font-bold text-foreground group-hover:text-blue-500 transition-colors">
                      {cat.name}
                    </h4>
                    <span className="text-xs text-muted-foreground">
                      {cat.count} verified guides
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-blue-500 transition-transform group-hover:translate-x-0.5" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
