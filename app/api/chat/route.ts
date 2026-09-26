import { NextRequest, NextResponse } from "next/server";
import { searchScenarios, Scenario } from "@/lib/search/searchEngine";

// Optional external LLM fallback if user configures an API key in environment
async function queryLLMFallback(prompt: string, relatedScenarios: Scenario[]): Promise<string | null> {
  const apiKey = process.env.GROQ_API_KEY || process.env.OPENAI_API_KEY;
  if (!apiKey) return null;

  try {
    const isGroq = !!process.env.GROQ_API_KEY;
    const endpoint = isGroq
      ? "https://api.groq.com/openai/v1/chat/completions"
      : "https://api.openai.com/v1/chat/completions";
    const model = isGroq ? "llama-3.3-70b-versatile" : "gpt-4o-mini";

    const scenarioContext = relatedScenarios
      .slice(0, 3)
      .map(
        (s) =>
          `- [${s.title}] (${s.category}): ${s.problem_statement}. Checklist: ${s.critical_checklist}. Risk: ${s.primary_risk}`
      )
      .join("\n");

    const systemPrompt = `You are How-To.AI, an expert, practical life navigation assistant.
Give direct, actionable, step-by-step advice for real-world problems.
Highlight critical verification steps and risks to avoid.
Reference these verified database guides if relevant:
${scenarioContext}`;

    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: prompt },
        ],
        temperature: 0.5,
        max_tokens: 600,
      }),
    });

    if (!res.ok) return null;
    const data = await res.json();
    return data.choices?.[0]?.message?.content || null;
  } catch (e) {
    console.error("LLM fallback error:", e);
    return null;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const rawMessage = (body.message || "").trim();

    if (!rawMessage) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const queryLower = rawMessage.toLowerCase();

    // 1. High-Precision Hybrid Semantic & Fuzzy Search
    const searchResult = searchScenarios(rawMessage, 6);
    const { directMatch, confidence, results } = searchResult;

    // 2. Domain-Specific Synthesis for Common Broad Life Queries
    // Automotive Inspection & Car Purchase
    const isCarQuery =
      (queryLower.includes("car") ||
        queryLower.includes("vehicle") ||
        queryLower.includes("gari")) &&
      (queryLower.includes("inspect") ||
        queryLower.includes("check") ||
        queryLower.includes("buy") ||
        queryLower.includes("used") ||
        queryLower.includes("second") ||
        queryLower.includes("recondition") ||
        queryLower.includes("know"));

    if (isCarQuery) {
      const topCarScenario =
        results.find((s) => s.subcategory === "Used Car Purchase") ||
        results[0] ||
        null;
      const relatedCarGuides = results.filter((s) => s.id !== topCarScenario?.id).slice(0, 4);

      const markdownReply = `### 🚗 Master Protocol: Used Car Pre-Purchase Inspection

When evaluating a used or reconditioned car, never rely solely on a quick test drive. Follow this 5-pillar verification checklist before paying any token money:

1. **Chassis & Structural Frame (Most Critical):**
   - Check unibody crumple zones, front apron welds, and trunk spare-tire well for hammer marks or non-factory sealant seams indicating major crash reconstruction.
2. **Engine & Transmission Health:**
   - Open oil cap with engine idling to check for blow-by smoke or milky emulsion (head gasket failure).
   - Test drive from cold start: observe CVT/Automatic gear shifting for RPM flare or slipping.
3. **Flood & Water Damage Inspection:**
   - Lift passenger floor carpeting and inspect seat rail bolts for orange rust and dried river silt. Smell air vents on heat mode for musty mildew.
4. **OBD-2 Electronic Diagnostics:**
   - Plug in an OBD-2 scanner to detect pending fault codes (DTCs) cleared recently by the seller to hide check-engine warnings.
5. **BRTA Legal & Paperwork Authentication:**
   - Match physical stamped chassis and engine numbers against the Smart Card registration and Tax Token. Verify owner identity and fitness validity.
`;

      const voiceText =
        "Here is your used car pre-purchase inspection protocol. Check chassis frame welding for crash repairs, test engine compression for blow-by smoke, scan OBD error codes, verify flood silt under carpets, and match BRTA engine numbers before paying any token money.";

      return NextResponse.json({
        reply: markdownReply,
        voiceText,
        scenario: topCarScenario,
        source: "domain_synthesis",
        confidence: Math.max(confidence, 0.88),
        related: relatedCarGuides,
      });
    }

    // Culinary: Fish Frying & Preparation
    const isFishCookingQuery =
      (queryLower.includes("fish") || queryLower.includes("fishg") || queryLower.includes("mach")) &&
      (queryLower.includes("fry") || queryLower.includes("cook") || queryLower.includes("make") || queryLower.includes("recipe"));

    if (isFishCookingQuery) {
      const topFishScenario =
        results.find((s) => s.id === 1469) ||
        results.find((s) => s.id === 1062) ||
        results[0] ||
        null;
      const relatedFishGuides = results.filter((s) => s.id !== topFishScenario?.id).slice(0, 4);

      const markdownReply = `### 🐟 Master Technique: How to Pan-Fry Crispy Fish without Tearing

Cooking restaurant-grade crispy fried fish at home comes down to moisture physics and pan temperature:

1. **Surface Moisture Removal (The Golden Rule):**
   - Pat fish skin and flesh completely dry with paper towels. Any surface water creates an insulating steam pocket that bonds fish protein to the pan metal, tearing the fillet.
2. **Simple Balanced Marinade:**
   - Rub with turmeric powder, red chili powder, pinch of salt, a squeeze of lemon juice, and a splash of mustard oil. Rest for 15 minutes only (acid can break down delicate fish meat if left too long).
3. **Oil Temperature Verification:**
   - Heat mustard oil or cooking oil in a cast iron or stainless pan until it gently shimmers. Dip a dry wooden chopstick into the oil—steady vigorous bubbles indicate the ideal 175°C to 185°C frying temperature.
4. **Crispy Skin Searing Technique:**
   - Place fish skin-side down away from you. Press gently with a flat spatula for the first 10 seconds to stop the skin from curling.
   - **Do not touch or move the fish for 3 to 4 minutes!** The skin will naturally release from the pan once the crust has completely formed.
5. **Flip and Finish:**
   - Flip once and fry for an additional 2 minutes until cooked through. Drain on a wire rack (not paper towels, which steam the bottom crust soggy).
`;

      const voiceText =
        "To make a perfect crispy fish fry, pat fillets completely dry with paper towels, marinate with turmeric, chili, and lemon, and fry in hot shimmering oil without touching for the first 3 minutes until the crust releases naturally.";

      return NextResponse.json({
        reply: markdownReply,
        voiceText,
        scenario: topFishScenario,
        source: "domain_synthesis",
        confidence: Math.max(confidence, 0.85),
        related: relatedFishGuides,
      });
    }

    // Land Purchase & Property Due Diligence
    const isLandQuery =
      (queryLower.includes("land") || queryLower.includes("plot") || queryLower.includes("jami")) &&
      (queryLower.includes("buy") || queryLower.includes("check") || queryLower.includes("document") || queryLower.includes("doc"));

    if (isLandQuery) {
      const topLandScenario =
        results.find((s) => s.id === 25) ||
        results.find((s) => s.subcategory === "Land Purchase") ||
        results[0] ||
        null;
      const relatedLandGuides = results.filter((s) => s.id !== topLandScenario?.id).slice(0, 4);

      const markdownReply = `### 📜 Land Purchase Due-Diligence: 5 Documents You Must Verify

Before signing any agreement or paying an advance for land, cross-verify these 5 government records to prevent total loss of property:

1. **Chain of Deeds (Via Dalil) for the Past 30 Years:**
   - Trace ownership continuity from the original CS/SA survey owner to the current seller without any missing transmission deeds.
2. **Certified Khatian Copies from DC Record Room:**
   - Verify CS, SA, RS, and City/BS Khatians directly from the Deputy Commissioner's Record Room, never relying on photocopies supplied by the seller or broker.
3. **e-Mutation (e-Namjari) & DCR Receipt:**
   - Ensure the seller has a registered Mutation Khatian in their own name with an official Duplicate Carbon Receipt (DCR).
4. **Up-to-Date Land Development Tax (e-Khajna):**
   - Check online at \`ldtax.gov.bd\` that all annual land taxes are deposited and the digital Dakhila shows zero arrears.
5. **Non-Encumbrance Certificate (NEC):**
   - Conduct a 12-year Nil Search at the local Sub-Registry office to confirm the land has not been mortgaged to a bank or sold under a Power of Attorney (PoA).
`;

      const voiceText =
        "Before buying land, always verify the 30-year chain of title deeds, inspect certified Khatian copies from the DC record room, confirm online mutation and tax receipts, and run a non-encumbrance search at the sub-registry.";

      return NextResponse.json({
        reply: markdownReply,
        voiceText,
        scenario: topLandScenario,
        source: "domain_synthesis",
        confidence: Math.max(confidence, 0.9),
        related: relatedLandGuides,
      });
    }

    // 3. Direct Scenario Match (High Confidence)
    if (directMatch && confidence >= 0.45) {
      const voiceText = `Here is what you need to know about ${directMatch.title}. ${directMatch.what_people_dont_know} Make sure to follow the checklist: ${directMatch.critical_checklist}. Watch out for this primary risk: ${directMatch.primary_risk}.`;

      const markdownReply = `Here is the verified step-by-step checklist and key insights from our knowledge base:`;

      return NextResponse.json({
        reply: markdownReply,
        voiceText,
        scenario: directMatch,
        source: "verified_knowledge_base",
        confidence,
        related: results.filter((s) => s.id !== directMatch.id).slice(0, 4),
      });
    }

    // 4. Multi-Scenario Search Relevance
    if (results.length > 0 && confidence >= 0.25) {
      const top = results[0];
      const relatedList = results.slice(1, 5);

      const voiceText = `I found a relevant guide regarding ${top.title}. ${top.what_people_dont_know}`;

      const markdownReply = `Here is the most relevant step-by-step guide from our database:`;

      return NextResponse.json({
        reply: markdownReply,
        voiceText,
        scenario: top,
        source: "semantic_synthesis",
        confidence,
        related: relatedList,
      });
    }

    // 5. LLM Fallback (If API key exists)
    const llmAnswer = await queryLLMFallback(rawMessage, results);
    if (llmAnswer) {
      return NextResponse.json({
        reply: llmAnswer,
        voiceText: llmAnswer.slice(0, 200).replace(/[*#_]/g, ""),
        scenario: results[0] || null,
        source: "llm_enhanced",
        confidence: 0.75,
        related: results.slice(0, 3),
      });
    }

    // 6. Helpful General Guidance Fallback
    return NextResponse.json({
      reply: `I searched across our database of 2,000 real-world life scenarios, but didn't find an exact match for "${rawMessage}".

**Try asking about:**
- 🚗 **Vehicles:** *"Used car inspection checklist"*, *"Detecting flood damage in car"*, *"Transferring car ownership at BRTA"*
- 📜 **Property & Legal:** *"How to check land documents before buying"*, *"Online police GD for lost phone"*, *"E-Mutation namjari procedure"*
- 🍳 **Culinary & Safety:** *"How to fry fish crispy"*, *"Detecting formalin in fish"*, *"Fixing over-salted curry"*
- 🎓 **Education:** *"College admission choice strategy"*, *"Medical admission quota verification"*`,
      voiceText:
        "I could not find an exact match in our 2,000 verified guides. Try asking about car inspection, land documents, police GD, or cooking techniques.",
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
