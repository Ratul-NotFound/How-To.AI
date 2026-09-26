"use client";

import { useState } from "react";
import {
  CheckCircle2,
  Circle,
  AlertTriangle,
  Lightbulb,
  CheckCheck,
  FileText,
  ExternalLink,
  PhoneCall,
  ShieldCheck,
  Layers,
  ListChecks,
} from "lucide-react";
import { Scenario } from "@/lib/search/searchEngine";
import { Language, UI_TEXT, translateCategory } from "@/lib/i18n";
import {
  getInDepthGuideline,
  ComprehensiveGuideline,
} from "@/lib/knowledge/guidelineEngine";

interface ChecklistCardProps {
  scenario: Scenario;
  guideline?: ComprehensiveGuideline;
  language?: Language;
}

type TabType = "checklist" | "steps" | "docs" | "portals" | "secrets";

function getCategoryMeta(category: string): { icon: string; badgeClass: string } {
  const cat = category.toLowerCase();
  if (cat.includes("vehicle") || cat.includes("car") || cat.includes("transport") || cat.includes("motorcycle")) {
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
  if (cat.includes("education") || cat.includes("college") || cat.includes("academic") || cat.includes("abroad")) {
    return { icon: "🎓", badgeClass: "text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/40 border-purple-200 dark:border-purple-800" };
  }
  if (cat.includes("legal") || cat.includes("emergency") || cat.includes("civil") || cat.includes("tax")) {
    return { icon: "⚖️", badgeClass: "text-rose-700 dark:text-rose-300 bg-rose-100 dark:bg-rose-900/40 border-rose-200 dark:border-rose-800" };
  }
  if (cat.includes("home") || cat.includes("stain") || cat.includes("maintenance")) {
    return { icon: "🧼", badgeClass: "text-teal-700 dark:text-teal-300 bg-teal-100 dark:bg-teal-900/40 border-teal-200 dark:border-teal-800" };
  }
  return { icon: "💡", badgeClass: "text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/40 border-blue-200 dark:border-blue-800" };
}

export function ChecklistCard({ scenario, guideline: propGuideline, language = "bn" }: ChecklistCardProps) {
  const t = UI_TEXT[language];

  // Derive comprehensive in-depth guideline
  const guideline: ComprehensiveGuideline =
    propGuideline || getInDepthGuideline(scenario, language);

  const title: string = guideline.title || scenario.title;
  const whatPeopleDontKnow: string =
    guideline.expertSecrets?.[0] ||
    (language === "bn" && (scenario as any).bn_what_people_dont_know) ||
    scenario.what_people_dont_know;

  const rawChecklist: string =
    (language === "bn" && (scenario as any).bn_critical_checklist) ||
    scenario.critical_checklist ||
    "";

  const checklistItems: string[] = rawChecklist
    ? rawChecklist
        .split(";")
        .map((s: string) => s.trim())
        .filter(Boolean)
    : guideline.steps.map((s) => s.title);

  const [activeTab, setActiveTab] = useState<TabType>("checklist");
  const [viewAll, setViewAll] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  const toggleItem = (idx: number) => {
    setCheckedItems((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const isAllComplete = checklistItems.length > 0 && completedCount === checklistItems.length;
  const progressPercent =
    checklistItems.length > 0 ? Math.round((completedCount / checklistItems.length) * 100) : 0;
  const meta = getCategoryMeta(scenario.category);
  const localizedCat = translateCategory(scenario.category, language);

  const hasDocs = guideline.requiredDocuments && guideline.requiredDocuments.length > 0;
  const hasPortals = guideline.officialResources && guideline.officialResources.length > 0;
  const hasSteps = guideline.steps && guideline.steps.length > 0;
  const hasSecrets = guideline.expertSecrets && guideline.expertSecrets.length > 0;

  return (
    <div className="space-y-4 my-2 text-left">
      {/* Category Tag & Title */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-2 flex-wrap text-xs">
          <span
            className={`inline-flex items-center gap-1.5 font-bold px-2.5 py-0.5 rounded-full border ${meta.badgeClass}`}
          >
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

      {/* Secret / Key Nuance Callout */}
      {whatPeopleDontKnow && (
        <div className="rounded-2xl bg-blue-50/90 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 p-4 text-sm space-y-1.5 shadow-xs">
          <div className="flex items-center gap-2 font-bold text-blue-700 dark:text-blue-400 text-xs uppercase tracking-wide">
            <Lightbulb className="w-4 h-4 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <span>{t.whatPeopleDontKnow}</span>
          </div>
          <p className="text-slate-800 dark:text-slate-100 font-semibold text-sm sm:text-base leading-relaxed pl-6">
            {whatPeopleDontKnow}
          </p>
        </div>
      )}

      {/* Navigation Tabs Bar */}
      <div className="flex items-center justify-between gap-1.5 border-b border-border/80 pb-1.5 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-1 flex-nowrap">
          {/* Checklist Tab */}
          <button
            onClick={() => {
              setActiveTab("checklist");
              setViewAll(false);
            }}
            className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 whitespace-nowrap active:scale-95 ${
              !viewAll && activeTab === "checklist"
                ? "bg-blue-600 text-white shadow-sm shadow-blue-500/25"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
            }`}
          >
            <ListChecks className="w-3.5 h-3.5" />
            <span>{t.tabChecklist}</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                !viewAll && activeTab === "checklist"
                  ? "bg-white/20 text-white"
                  : "bg-secondary text-muted-foreground"
              }`}
            >
              {checklistItems.length}
            </span>
          </button>

          {/* Detailed Steps Tab */}
          {hasSteps && (
            <button
              onClick={() => {
                setActiveTab("steps");
                setViewAll(false);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 whitespace-nowrap active:scale-95 ${
                !viewAll && activeTab === "steps"
                  ? "bg-blue-600 text-white shadow-sm shadow-blue-500/25"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
              }`}
            >
              <span>📋</span>
              <span>{t.tabSteps}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  !viewAll && activeTab === "steps"
                    ? "bg-white/20 text-white"
                    : "bg-secondary text-muted-foreground"
                }`}
              >
                {guideline.steps.length}
              </span>
            </button>
          )}

          {/* Required Docs Tab */}
          {hasDocs && (
            <button
              onClick={() => {
                setActiveTab("docs");
                setViewAll(false);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 whitespace-nowrap active:scale-95 ${
                !viewAll && activeTab === "docs"
                  ? "bg-blue-600 text-white shadow-sm shadow-blue-500/25"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{t.tabDocs}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  !viewAll && activeTab === "docs"
                    ? "bg-white/20 text-white"
                    : "bg-secondary text-muted-foreground"
                }`}
              >
                {guideline.requiredDocuments.length}
              </span>
            </button>
          )}

          {/* Official Portals Tab */}
          {hasPortals && (
            <button
              onClick={() => {
                setActiveTab("portals");
                setViewAll(false);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 whitespace-nowrap active:scale-95 ${
                !viewAll && activeTab === "portals"
                  ? "bg-blue-600 text-white shadow-sm shadow-blue-500/25"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
              }`}
            >
              <span>🏛️</span>
              <span>{t.tabPortals}</span>
            </button>
          )}

          {/* Insider Secrets Tab */}
          {hasSecrets && (
            <button
              onClick={() => {
                setActiveTab("secrets");
                setViewAll(false);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 whitespace-nowrap active:scale-95 ${
                !viewAll && activeTab === "secrets"
                  ? "bg-blue-600 text-white shadow-sm shadow-blue-500/25"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
              }`}
            >
              <Lightbulb className="w-3.5 h-3.5" />
              <span>{t.tabSecrets}</span>
            </button>
          )}
        </div>

        {/* View All / Toggle Button */}
        <button
          onClick={() => setViewAll(!viewAll)}
          className={`px-2.5 py-1 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1 whitespace-nowrap active:scale-95 ${
            viewAll
              ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
              : "bg-secondary/50 hover:bg-secondary border-border text-foreground"
          }`}
          title={viewAll ? t.compactView : t.viewAllSections}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>{viewAll ? t.compactView : t.viewAllSections}</span>
        </button>
      </div>

      {/* ================= TAB 1: INTERACTIVE CHECKLIST ================= */}
      {(viewAll || activeTab === "checklist") && (
        <div className="space-y-3 pt-1">
          {viewAll && (
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-slate-100 border-b border-border/40 pb-1">
              <ListChecks className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>{t.actionChecklist}</span>
            </div>
          )}

          <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">
            <span>{t.actionChecklist}</span>
            <span
              className={`font-semibold ${
                isAllComplete ? "text-emerald-600 dark:text-emerald-400" : "text-muted-foreground"
              }`}
            >
              {completedCount} / {checklistItems.length} {t.verifiedCount} ({progressPercent}%)
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

          {/* Checklist Items */}
          <div className="space-y-2">
            {checklistItems.map((item, idx) => {
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
                      isChecked
                        ? "line-through text-emerald-800/70 dark:text-emerald-400/70"
                        : "text-slate-800 dark:text-slate-100"
                    }`}
                  >
                    {item}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ================= TAB 2: DETAILED STEP-BY-STEP SOP ================= */}
      {(viewAll || activeTab === "steps") && hasSteps && (
        <div className="space-y-3 pt-2">
          {viewAll && (
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-slate-100 border-b border-border/40 pb-1 mt-4">
              <span>📋</span>
              <span>{t.tabSteps}</span>
            </div>
          )}

          <div className="space-y-3">
            {guideline.steps.map((step) => (
              <div
                key={step.stepNumber}
                className="p-4 rounded-2xl border border-border/70 bg-card/60 dark:bg-slate-900/40 space-y-2 shadow-xs"
              >
                <div className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                    {step.stepNumber}
                  </span>
                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-bold text-foreground leading-snug">
                      {step.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {step.proTip && (
                  <div className="ml-8 mt-2 p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/50 text-xs sm:text-sm text-amber-900 dark:text-amber-200 flex items-start gap-2">
                    <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-bold">{t.proTipLabel}: </strong>
                      <span>{step.proTip}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= TAB 3: REQUIRED DOCUMENTS ================= */}
      {(viewAll || activeTab === "docs") && (
        <div className="space-y-3 pt-2">
          {viewAll && (
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-slate-100 border-b border-border/40 pb-1 mt-4">
              <FileText className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>{t.tabDocs}</span>
            </div>
          )}

          {hasDocs ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {guideline.requiredDocuments.map((doc, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl border border-indigo-200/60 dark:border-indigo-900/50 bg-indigo-50/40 dark:bg-indigo-950/20 space-y-1.5"
                >
                  <div className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                    <h5 className="text-xs sm:text-sm font-bold text-foreground leading-snug">
                      {doc.name}
                    </h5>
                  </div>
                  <div className="text-[11px] sm:text-xs text-muted-foreground space-y-1 pl-6">
                    <div>
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        {t.sourceLabel}:
                      </span>{" "}
                      <span>{doc.whereToGet}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        {t.purposeLabel}:
                      </span>{" "}
                      <span>{doc.purpose}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4 rounded-2xl bg-secondary/50 text-xs sm:text-sm text-muted-foreground italic">
              {t.noDocsNeededText}
            </div>
          )}
        </div>
      )}

      {/* ================= TAB 4: OFFICIAL PORTALS & HELPLINES ================= */}
      {(viewAll || activeTab === "portals") && hasPortals && (
        <div className="space-y-3 pt-2">
          {viewAll && (
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-slate-100 border-b border-border/40 pb-1 mt-4">
              <span>🏛️</span>
              <span>{t.tabPortals}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {guideline.officialResources.map((res, idx) => {
              const isTel = /^\d+$/.test(res.urlOrContact);
              const url = isTel
                ? `tel:${res.urlOrContact}`
                : res.urlOrContact.startsWith("http")
                ? res.urlOrContact
                : `https://${res.urlOrContact}`;

              return (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl border border-emerald-200/60 dark:border-emerald-900/50 bg-emerald-50/40 dark:bg-emerald-950/20 flex flex-col justify-between gap-2.5"
                >
                  <div className="space-y-1">
                    <h5 className="text-xs sm:text-sm font-bold text-foreground leading-snug">
                      {res.name}
                    </h5>
                    <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed">
                      {res.description}
                    </p>
                  </div>

                  <a
                    href={url}
                    target={isTel ? undefined : "_blank"}
                    rel={isTel ? undefined : "noopener noreferrer"}
                    className={`inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all self-start active:scale-95 ${
                      isTel
                        ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs"
                        : "bg-blue-600 hover:bg-blue-700 text-white shadow-xs"
                    }`}
                  >
                    {isTel ? (
                      <>
                        <PhoneCall className="w-3.5 h-3.5" />
                        <span>{t.callHelplineBtn} ({res.urlOrContact})</span>
                      </>
                    ) : (
                      <>
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>{t.visitPortalBtn}</span>
                      </>
                    )}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ================= TAB 5: INSIDER SECRETS ================= */}
      {(viewAll || activeTab === "secrets") && hasSecrets && (
        <div className="space-y-2 pt-2">
          {viewAll && (
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-slate-100 border-b border-border/40 pb-1 mt-4">
              <Lightbulb className="w-4 h-4 text-amber-500" />
              <span>{t.tabSecrets}</span>
            </div>
          )}

          <div className="space-y-2">
            {guideline.expertSecrets.map((secret, idx) => (
              <div
                key={idx}
                className="p-3 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed"
              >
                <span className="text-amber-600 dark:text-amber-400 font-bold text-base leading-none mt-0.5">
                  •
                </span>
                <span>{secret}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Primary Risk Alert */}
      <div className="rounded-2xl bg-rose-50/90 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 p-4 text-xs sm:text-sm text-rose-950 dark:text-rose-100 flex items-start gap-3 shadow-xs">
        <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5 text-rose-600 dark:text-rose-400" />
        <div className="space-y-0.5">
          <span className="font-bold block text-rose-700 dark:text-rose-400 uppercase tracking-wide text-xs">
            {t.watchOut}
          </span>
          <p className="leading-relaxed font-semibold text-slate-800 dark:text-slate-100">
            {guideline.primaryRiskAndMitigation?.risk || scenario.primary_risk}
          </p>
          {guideline.primaryRiskAndMitigation?.prevention && (
            <div className="pt-1.5 flex items-start gap-1.5 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>{guideline.primaryRiskAndMitigation.prevention}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
