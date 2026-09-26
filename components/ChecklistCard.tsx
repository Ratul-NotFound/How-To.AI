"use client";

import { useState } from "react";
import { CheckCircle2, Circle, AlertTriangle, Lightbulb, CheckCheck } from "lucide-react";
import { Scenario } from "@/lib/search/searchEngine";
import { Language, UI_TEXT, translateCategory } from "@/lib/i18n";

interface ChecklistCardProps {
  scenario: Scenario;
  language?: Language;
}

function getCategoryMeta(category: string): { icon: string; badgeClass: string } {
  const cat = category.toLowerCase();
  if (cat.includes("vehicle") || cat.includes("car") || cat.includes("transport")) {
    return { icon: "🚗", badgeClass: "text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/40 border-blue-200 dark:border-blue-800" };
  }
  if (cat.includes("land") || cat.includes("housing") || cat.includes("property")) {
    return { icon: "📜", badgeClass: "text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/40 border-emerald-200 dark:border-emerald-800" };
  }
  if (cat.includes("food") || cat.includes("adulteration")) {
    return { icon: "🐟", badgeClass: "text-amber-700 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/40 border-amber-200 dark:border-amber-800" };
  }
  if (cat.includes("cook") || cat.includes("culinary")) {
    return { icon: "🍳", badgeClass: "text-orange-700 dark:text-orange-300 bg-orange-100 dark:bg-orange-900/40 border-orange-200 dark:border-orange-800" };
  }
  if (cat.includes("tech") || cat.includes("gadget") || cat.includes("pc")) {
    return { icon: "💻", badgeClass: "text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900/40 border-indigo-200 dark:border-indigo-800" };
  }
  if (cat.includes("education") || cat.includes("college") || cat.includes("academic")) {
    return { icon: "🎓", badgeClass: "text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/40 border-purple-200 dark:border-purple-800" };
  }
  if (cat.includes("legal") || cat.includes("emergency") || cat.includes("civil")) {
    return { icon: "⚖️", badgeClass: "text-rose-700 dark:text-rose-300 bg-rose-100 dark:bg-rose-900/40 border-rose-200 dark:border-rose-800" };
  }
  if (cat.includes("home") || cat.includes("stain") || cat.includes("maintenance")) {
    return { icon: "🧼", badgeClass: "text-teal-700 dark:text-teal-300 bg-teal-100 dark:bg-teal-900/40 border-teal-200 dark:border-teal-800" };
  }
  return { icon: "💡", badgeClass: "text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/40 border-blue-200 dark:border-blue-800" };
}

export function ChecklistCard({ scenario, language = "bn" }: ChecklistCardProps) {
  const t = UI_TEXT[language];

  // Optional localized fields if provided by API
  const title: string = (language === "bn" && (scenario as any).bn_title) || scenario.title;
  const whatPeopleDontKnow: string = (language === "bn" && (scenario as any).bn_what_people_dont_know) || scenario.what_people_dont_know;
  const rawChecklist: string = (language === "bn" && (scenario as any).bn_critical_checklist) || scenario.critical_checklist || "";
  const primaryRisk: string = (language === "bn" && (scenario as any).bn_primary_risk) || scenario.primary_risk;

  const items: string[] = rawChecklist
    .split(";")
    .map((s: string) => s.trim())
    .filter(Boolean);

  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  const toggleItem = (idx: number) => {
    setCheckedItems((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const isAllComplete = items.length > 0 && completedCount === items.length;
  const progressPercent = items.length > 0 ? Math.round((completedCount / items.length) * 100) : 0;
  const meta = getCategoryMeta(scenario.category);
  const localizedCat = translateCategory(scenario.category, language);

  return (
    <div className="space-y-4 my-2 text-left">
      {/* Category Tag & Title */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-2 flex-wrap text-xs">
          <span className={`inline-flex items-center gap-1.5 font-bold px-2.5 py-0.5 rounded-full border ${meta.badgeClass}`}>
            <span>{localizedCat.icon || meta.icon}</span>
            <span>{localizedCat.name}</span>
          </span>
          <span className="text-muted-foreground">•</span>
          <span className="font-semibold text-muted-foreground">{scenario.subcategory}</span>
        </div>
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight leading-snug">
          {title}
        </h3>
      </div>

      {/* Secret / Key Nuance */}
      <div className="rounded-2xl bg-blue-50/90 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 p-4 text-sm space-y-1.5">
        <div className="flex items-center gap-2 font-bold text-blue-700 dark:text-blue-400 text-xs uppercase tracking-wide">
          <Lightbulb className="w-4 h-4 flex-shrink-0 text-blue-600 dark:text-blue-400" />
          <span>{t.whatPeopleDontKnow}</span>
        </div>
        <p className="text-slate-800 dark:text-slate-100 font-semibold text-sm sm:text-base leading-relaxed pl-6">
          {whatPeopleDontKnow}
        </p>
      </div>

      {/* Interactive Step-by-Step Checklist */}
      <div className="space-y-2.5 pt-1">
        <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">
          <span>{t.actionChecklist}</span>
          <span className={`font-semibold ${isAllComplete ? "text-emerald-600 dark:text-emerald-400" : "text-muted-foreground"}`}>
            {completedCount} / {items.length} {t.verifiedCount} ({progressPercent}%)
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-300 rounded-full ${
              isAllComplete
                ? "bg-emerald-500"
                : "bg-gradient-to-r from-blue-600 to-indigo-600"
            }`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Completion Celebration Banner */}
        {isAllComplete && (
          <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs sm:text-sm font-bold flex items-center gap-2 animate-in fade-in">
            <CheckCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>{t.allCompleted}</span>
          </div>
        )}

        {/* Checklist Clickable Items */}
        <div className="space-y-2 pt-1">
          {items.map((item, idx) => {
            const isChecked = !!checkedItems[idx];
            return (
              <button
                key={idx}
                onClick={() => toggleItem(idx)}
                className={`w-full flex items-start gap-3 p-3.5 rounded-2xl text-left text-sm sm:text-base transition-all ${
                  isChecked
                    ? "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800/60"
                    : "bg-slate-100 dark:bg-slate-800/50 hover:bg-slate-200/80 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 font-medium border border-transparent"
                }`}
              >
                <div className="mt-0.5 flex-shrink-0">
                  {isChecked ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <Circle className="w-5 h-5 text-slate-400 hover:text-blue-500 transition-colors" />
                  )}
                </div>
                <span
                  className={`flex-1 leading-snug ${
                    isChecked ? "line-through text-emerald-800/70 dark:text-emerald-400/70" : "text-slate-800 dark:text-slate-100"
                  }`}
                >
                  {item}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Primary Risk Alert */}
      <div className="rounded-2xl bg-rose-50/90 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 p-4 text-xs sm:text-sm text-rose-950 dark:text-rose-100 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5 text-rose-600 dark:text-rose-400" />
        <div className="space-y-0.5">
          <span className="font-bold block text-rose-700 dark:text-rose-400 uppercase tracking-wide text-xs">
            {t.watchOut}
          </span>
          <p className="leading-relaxed font-semibold text-slate-800 dark:text-slate-100">
            {primaryRisk}
          </p>
        </div>
      </div>
    </div>
  );
}
