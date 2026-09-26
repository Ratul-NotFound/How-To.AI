import { NextRequest, NextResponse } from "next/server";
import { searchScenarios, Scenario } from "@/lib/search/searchEngine";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const message = (body.message || "").trim();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Tier 1: High-Speed In-Memory Semantic Match (0 LLM Cost)
    const searchResult = searchScenarios(message, 5);
    const { directMatch, confidence, results } = searchResult;

    if (directMatch && confidence >= 0.5) {
      // Generate clean, conversational voice summary + detailed actionable steps
      const voiceText = `Here is what you need to know about ${directMatch.title}. ${directMatch.what_people_dont_know} Make sure to follow the checklist: ${directMatch.critical_checklist}. Watch out for this primary risk: ${directMatch.primary_risk}.`;

      const markdownReply = `### 🎯 Solution: ${directMatch.title}
*Category: ${directMatch.category} • ${directMatch.subcategory}*

**💡 The Critical Nuance:**
${directMatch.what_people_dont_know}

**📋 Action Checklist & Verification:**
${directMatch.critical_checklist.split(';').map((s) => `- [ ] ${s.trim()}`).join('\n')}

**⚠️ Primary Real-World Risk to Avoid:**
> ${directMatch.primary_risk}
`;

      return NextResponse.json({
        reply: markdownReply,
        voiceText,
        scenario: directMatch,
        source: "verified_knowledge_base",
        confidence,
        related: results.filter((s) => s.id !== directMatch.id).slice(0, 3),
      });
    }

    // Tier 2: Multi-scenario synthesis fallback
    if (results.length > 0) {
      const top = results[0];
      const relatedTitles = results.slice(1, 4).map((r) => r.title);

      const voiceText = `I found a close match regarding ${top.title}. ${top.what_people_dont_know} Critical check: ${top.critical_checklist}.`;

      const markdownReply = `I found a highly relevant guide that addresses your question:

### 🔍 Related Guide: ${top.title}
*Category: ${top.category} • ${top.subcategory}*

**💡 Key Information:**
${top.problem_statement}

**📋 Recommended Steps:**
${top.critical_checklist.split(';').map((s) => `- [ ] ${s.trim()}`).join('\n')}

**⚠️ Warning / Risk:**
> ${top.primary_risk}

---
**Other related scenarios you might want to check:**
${relatedTitles.map((t) => `- **${t}**`).join('\n')}
`;

      return NextResponse.json({
        reply: markdownReply,
        voiceText,
        scenario: top,
        source: "semantic_synthesis",
        confidence,
        related: results.slice(1, 4),
      });
    }

    // Fallback: General guidance
    return NextResponse.json({
      reply: `I searched across all 2,000 real-world life scenarios, but didn't find an exact pre-indexed match for "${message}". Could you rephrase your question, or mention the domain (e.g. land, passport, car, cooking, stain, college admission)?`,
      voiceText: `I couldn't find an exact match in our 2,000 verified guides. Could you please rephrase your question with more specifics?`,
      scenario: null,
      source: "fallback",
      confidence: 0,
      related: [],
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to process chat message" },
      { status: 500 }
    );
  }
}
