"use client";

import { useState } from "react";
import { CheckSquare, Square, AlertTriangle, ShieldCheck, Tag } from "lucide-react";
import { Scenario } from "@/lib/search/searchEngine";

interface ChecklistCardProps {
  scenario: Scenario;
}

export function ChecklistCard({ scenario }: ChecklistCardProps) {
  // Parse checklist items
  const items = scenario.critical_checklist
    .split(";")
    .map((s) => s.trim())
    .filter(Boolean);

  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  const toggleItem = (idx: number) => {
    setCheckedItems((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = items.length > 0 ? Math.round((completedCount / items.length) * 100) : 0;

  return (
    <div className="rounded-2xl border border-border bg-card p-4 sm:p-5 shadow-sm space-y-4 my-3 text-left">
      {/* Title & Metadata */}
      <div>
        <div className="flex items-center gap-2 flex-wrap text-xs text-muted-foreground mb-1.5">
          <span className="flex items-center gap-1 font-semibold text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded-md">
            <Tag className="w-3 h-3" />
            {scenario.category}
          </span>
          <span>•</span>
          <span>{scenario.subcategory}</span>
          <span>•</span>
          <span className="font-mono">ID: #{scenario.id}</span>
        </div>
        <h3 className="text-base sm:text-lg font-bold text-foreground tracking-tight">
          {scenario.title}
        </h3>
      </div>

      {/* Secret / Nuance */}
      <div className="rounded-xl bg-secondary/50 border border-border/60 p-3 sm:p-3.5 text-xs sm:text-sm text-foreground space-y-1">
        <div className="flex items-center gap-1.5 font-semibold text-blue-500">
          <ShieldCheck className="w-4 h-4" />
          <span>The Critical Nuance & Truth:</span>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          {scenario.what_people_dont_know}
        </p>
      </div>

      {/* Interactive Checklist */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-semibold text-foreground">
          <span>Action Checklist & Verification</span>
          <span className="text-muted-foreground font-mono">
            {completedCount}/{items.length} ({progressPercent}%)
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-300 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="space-y-1.5 pt-1">
          {items.map((item, idx) => {
            const isChecked = !!checkedItems[idx];
            return (
              <button
                key={idx}
                onClick={() => toggleItem(idx)}
                className={`w-full flex items-start gap-2.5 p-2 rounded-xl text-left text-xs sm:text-sm transition-colors ${
                  isChecked
                    ? "bg-blue-500/10 text-foreground"
                    : "hover:bg-muted/50 text-muted-foreground"
                }`}
              >
                <div className="mt-0.5 flex-shrink-0">
                  {isChecked ? (
                    <CheckSquare className="w-4 h-4 text-blue-500" />
                  ) : (
                    <Square className="w-4 h-4 text-muted-foreground/60" />
                  )}
                </div>
                <span className={isChecked ? "line-through text-muted-foreground" : "text-foreground"}>
                  {item}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Primary Risk Warning */}
      <div className="rounded-xl bg-destructive/10 border border-destructive/20 p-3 text-xs sm:text-sm text-destructive flex items-start gap-2">
        <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5 text-destructive" />
        <div>
          <span className="font-semibold block mb-0.5">Primary Risk to Avoid:</span>
          <p className="text-destructive/90 leading-relaxed">
            {scenario.primary_risk}
          </p>
        </div>
      </div>
    </div>
  );
}
