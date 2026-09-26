import { NextRequest, NextResponse } from "next/server";
import { searchScenarios, Scenario } from "@/lib/search/searchEngine";
import scenariosData from "@/scenarios_2000.json";

// Curated Bengali localized scenario metadata for top critical everyday scenarios
const BANGLA_SCENARIO_OVERRIDES: Record<number, Partial<Scenario>> = {
  105: {
    title: "ব্যবহৃত ও রিকন্ডিশন গাড়ি কেনার ৫-পয়েন্ট মাস্টার চেকলিস্ট",
    what_people_dont_know: "দুর্ঘটনায় ক্ষতিগ্রস্ত গাড়ি ডেন্টিং ও নতুন রং করে নতুনের মতো দেখানো হলেও, ইঞ্জিনের ফ্রন্ট অ্যাপ্রন, কারখানার স্পট ওয়েল্ডিং এবং স্পেয়ার টায়ারের রিমের জোড়াতালি লুকানো যায় না।",
    critical_checklist: "সামনের অ্যাপ্রন ও চেসিস ফ্রেমের কারখানার স্পট ওয়েল্ডিং যাচাই; ইঞ্জিন চালু রেখে অয়েল ক্যাপ খুলে ধোঁয়া পরীক্ষা; কার্পেট তুলে মরিচা বা শুকনা কাদা দেখে পানিতে ডোবা কিনা পরীক্ষা; ওবিডি-২ স্ক্যানার টেস্ট; বিআরটিএ ইঞ্জিন ও চেসিস নম্বর যাচাই",
    primary_risk: "বড় অ্যাক্সিডেন্ট করা বা পানিতে ডোবা গাড়ি কিনে লাখ লাখ টাকা লোকসান ও সড়কে জীবনের নিরাপত্তা ঝুঁকি",
  },
  449: {
    title: "মোবাইল হারানো বা ছিনতাই হলে ৪-ধাপের জরুরি এসওপি ও উদ্ধার",
    what_people_dont_know: "ফোন হারালে মানুষ সিম ব্লক করতে দেরি করে ফেলে, যার ফলে চোর নিমেষেই বিকাশ, নগদ বা ব্যাংক ওটিপি দিয়ে সব টাকা হাতিয়ে নেয়। তাই প্রথম কাজই হলো সিম সাময়িক ব্লক করা।",
    critical_checklist: "অপারেটরের হেল্পলাইনে ফোন করে সিম সাময়িক ব্লক করা; ফাইন্ড মাই ডিভাইস দিয়ে দূর থেকে ফোন লক বা ডেটা মুছে ফেলা; gd.police.gov.bd তে ১৫ ডিজিটের আইএমইআই দিয়ে অনলাইন জিডি করা; জিডি কপি নিয়ে সাইবার ক্রাইম বা থানায় সেলুলার ট্র্যাকিংয়ের আবেদন জমা দেওয়া",
    primary_risk: "সিম দিয়ে ওটিপি নিয়ে আর্থিক ক্ষতি এবং হারানো ফোন অপরাধমূলক কাজে ব্যবহারের আইনি দায়",
  },
  1031: {
    title: "মাছে ফরমালিন শনাক্তকরণের বৈজ্ঞানিক ও ঘরোয়া উপায়",
    what_people_dont_know: "ফরমালিন দেওয়া মাছ দিনের পর দিন শক্ত ও চকচকে থাকে, কিন্তু তার ওপর মাছি বা কোনো কীট-পতঙ্গ বসে না এবং ফুলকা ফ্যাকাসে বা কালচে বাদামি হয়ে যায়।",
    critical_checklist: "মাছের ডালায় মাছি বসছে কিনা লক্ষ্য করা; ফুলকার রঙ পরীক্ষা করা (স্বাভাবিক উজ্জ্বল লাল হবে, কালচে বা শুকনা নয়); তীব্র রাসায়নিক বা ওষুধের গন্ধ আছে কিনা শোঁকা; মাছের চোখ উজ্জ্বল কিনা দেখা",
    primary_risk: "দীর্ঘমেয়াদে লিভারের বিষক্রিয়া, পাকস্থলীর আলসার এবং ক্যান্সারের মতো মারাত্মক ঝুঁকি",
  },
  1083: {
    title: "কাপড় থেকে জেদি হলুদের দাগ দূর করার বৈজ্ঞানিক উপায়",
    what_people_dont_know: "হলুদের কারকিউমিন উপাদান পানিতে অদ্রবণীয়; গরম পানি বা ব্লিচ দিলে দাগ কাপড়ে স্থায়ীভাবে বসে যায়। কিন্তু সূর্যের অতিবেগুনি রশ্মি (UV) কারকিউমিনের রাসায়নিক বন্ধন প্রাকৃতিকভাবে পুরোপুরি ভেঙে ফেলে!",
    critical_checklist: "প্রথমে ডিশওয়াশিং লিকুইড দিয়ে দাগে আলতো ঘষা; শুধু ঠান্ডা পানিতে ধোয়া; ভেজা কাপড়টি সরাসরি কড়া রোদে ৪ ঘণ্টা মেলে রাখা (UV রশ্মিতে দাগ উধাও হয়ে যাবে)",
    primary_risk: "গরম পানি বা ব্লিচ ব্যবহার করে কাপড়ে স্থায়ী হলুদ ছোপ ফেলে ভালো কাপড় নষ্ট হওয়া",
  },
  1001: {
    title: "একাদশ শ্রেণির কলেজ চয়েস দেওয়ার ৫-৩-২ সেফটি কৌশল",
    what_people_dont_know: "নিজের জিপিএ ও পূর্ববর্তী কাট-অফের হিসাব না করে কেবল টপ কলেজগুলো চয়েস লিস্টে রাখলে ১ম ধাপে কোনো কলেজেই আসন মেলে না।",
    critical_checklist: "বিগত বছরের সর্বনিম্ন জিপিএ কাট-অফ দেখা; xiclassadmission.gov.bd তে ২টি স্বপ্নের কলেজ, ৫টি বাস্তবসম্মত কলেজ ও ৩টি নিশ্চিত ব্যাকআপ কলেজ রাখা; অটো-মাইগ্রেশন সুবিধা বুঝে চয়েস অর্ডার সাজানো",
    primary_risk: "১ম পর্যায়ে কোনো কলেজে চান্স না পেয়ে ২য় পর্যায়ে হতাশাজনক বা দূরের কলেজে পড়ার ঝুঁকি",
  },
  32: {
    title: "অনলাইনে ভাড়াটিয়া পুলিশ ভেরিফিকেশন (CIMS) ফরম পূরণের নিয়ম",
    what_people_dont_know: "ভাড়াটিয়ার তথ্য থানায় না দিলে বাড়িওয়ালা ও ভাড়াটিয়া উভয়েই আইনি জটিলতায় পড়েন। বর্তমানে CIMS অ্যাপের মাধ্যমে ঘরে বসেই এটি সাবমিট করা যায়।",
    critical_checklist: "CIMS অ্যাপে অ্যাকাউন্ট খোলা; ভাড়াটিয়া ও পরিবারের সদস্যদের জাতীয় পরিচয়পত্র (NID); পাসপোর্ট সাইজ রঙিন ছবি; জরুরি যোগাযোগের নম্বর ও আগের বাড়ির ঠিকানা যুক্ত করা",
    primary_risk: "পুলিশের ব্লকরেইড বা জরুরি তল্লাশির সময় জবাবদিহি ও আইনগত জরিমানার মুখে পড়া",
  },
  221: {
    title: "বানান ভুল ছাড়া নতুন ই-পাসপোর্ট আবেদনের সঠিক নিয়ম",
    what_people_dont_know: "জাতীয় পরিচয়পত্রের (NID) একটি অক্ষরের সাথেও ই-পাসপোর্ট আবেদনের অমিল থাকলে ফাইল মাসের পর মাস আটকে থাকে।",
    critical_checklist: "epassport.gov.bd তে অ্যাকাউন্ট খুলে স্মার্ট এনআইডির সাথে হুবহু মিলিয়ে ফরম পূরণ; এ-চালান বা বিকাশ/রকেটে নির্ধারিত সরকারি ফি জমা; প্রিন্ট করা সামারি ও রসিদ নিয়ে বায়োমেট্রিক সেন্টারে যাওয়া",
    primary_risk: "নামের বানানে অমিলের কারণে 'Pending Adjudication' এ মাসের পর মাস ফাইল আটকে থাকা",
  },
  1469: {
    title: "প্যানে না ভেঙে মুচমুচে মাছ ভাজার পারফেক্ট কৌশল",
    what_people_dont_know: "মাছের গায়ের অতিরিক্ত পানি বাষ্প তৈরি করে মাছের চামড়া প্যানের ধাতুর সাথে আটকে ফেলে। পানি শুকিয়ে নিলে এবং গরম তেলে দেওয়ার প্রথম ৩ মিনিট না নাড়লে মাছ কখনোই ভাঙে না।",
    critical_checklist: "টিস্যু দিয়ে মাছের পানি শুকানো; তেল ধোঁয়া ওঠা পর্যন্ত গরম করা; প্রথম ৩-৪ মিনিট কোনো চামচ না লাগানো; নামিয়ে তারের জালির ওপর রাখা",
    primary_risk: "ভেজা মাছ কম গরম তেলে দিয়ে মাছ ভেঙে ভর্তা হয়ে যাওয়া",
  },
  25: {
    title: "জমি কেনার আগে ৫টি জরুরি সরকারি রেকর্ড ও দলিল যাচাই",
    what_people_dont_know: "শুধু বিক্রেতার ফটোকপি দলিলের ওপর বিশ্বাস করলে সর্বস্ব হারানোর ঝুঁকি থাকে। ডিসি অফিসের রেকর্ড রুম থেকে মূল খতিয়ান এবং সাব-রেজিস্ট্রি থেকে ১২ বছরের তল্লাশি দিতে হয়।",
    critical_checklist: "৩০ বছরের বায়া দলিল চেইন মিলিয়ে দেখা; ডিসি রেকর্ড রুম থেকে সিএস/এসএ/আরএস খতিয়ান যাচাই; হালনাগাদ ই-নামজারি ও ডিসিআর পরীক্ষা; ldtax.gov.bd তে খাজনা পরিশোধ যাচাই; সাব-রেজিস্ট্রিতে ১২ বছরের দায়মুক্তি সনদ (NEC) তল্লাশি",
    primary_risk: "জাল দলিল বা ব্যাংকে বন্ধক রাখা জমি কিনে টাকা ও জমির মালিকানা দুটিই হারানো",
  },
};

function enrichScenario(scenario: Scenario | null, isBangla: boolean): Scenario | null {
  if (!scenario) return null;
  if (!isBangla) return scenario;
  const override = BANGLA_SCENARIO_OVERRIDES[scenario.id];
  if (override) {
    return {
      ...scenario,
      title: override.title || scenario.title,
      what_people_dont_know: override.what_people_dont_know || scenario.what_people_dont_know,
      critical_checklist: override.critical_checklist || scenario.critical_checklist,
      primary_risk: override.primary_risk || scenario.primary_risk,
    };
  }
  return scenario;
}

// Optional external LLM fallback if user configures an API key in environment
async function queryLLMFallback(prompt: string, relatedScenarios: Scenario[], isBangla: boolean): Promise<string | null> {
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

    const systemPrompt = isBangla
      ? `আপনি How-To.AI (হাও-টু.এআই), বাস্তব জীবনের প্র্যাকটিক্যাল সহকারী।
ব্যবহারকারীর প্রশ্নের সরাসরি, ধাপে ধাপে সহজ ও স্পষ্ট সমাধান দিন প্রমিত আধুনিক বাংলায়।
গুরুত্বপূর্ণ সতর্কতা ও চেকলিস্ট উল্লেখ করুন।
প্রয়োজনে নিচের ডাটাবেজ গাইডগুলো উল্লেখ করুন:
${scenarioContext}`
      : `You are How-To.AI, an expert, practical life navigation assistant.
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
        max_tokens: 650,
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
    const reqLang = body.lang as string | undefined;

    if (!rawMessage) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const isBangla = reqLang === "bn" || /[\u0980-\u09FF]/.test(rawMessage);
    const queryLower = rawMessage.toLowerCase();

    // 1. High-Precision Hybrid Semantic & Fuzzy Search
    const searchResult = searchScenarios(rawMessage, 6);
    const { directMatch, confidence, results } = searchResult;

    // 2. Domain-Specific Synthesis for Common Broad Life Queries
    // ------------------------------------------------------------------------
    // (A) Automotive Inspection & Car Purchase
    // ------------------------------------------------------------------------
    const isCarQuery =
      queryLower.includes("car") ||
      queryLower.includes("vehicle") ||
      queryLower.includes("gari") ||
      queryLower.includes("গাড়ি") ||
      queryLower.includes("গাড়ি");

    if (isCarQuery) {
      const topCarScenario =
        (scenariosData as Scenario[]).find((s) => s.id === 105) ||
        results[0] ||
        null;
      const relatedCarGuides = results.filter((s) => s.id !== topCarScenario?.id).slice(0, 4);

      if (isBangla) {
        const markdownReply = `### 🚗 ব্যবহৃত গাড়ি কেনার ৫-পয়েন্ট মাস্টার চেকলিস্ট

ব্যবহৃত বা রিকন্ডিশন গাড়ি কেনার আগে কেবল অল্প চালিয়ে দেখার ওপর নির্ভর করবেন না। বায়না করার আগে এই ৫টি মূল বিষয় অবশ্যই মিলিয়ে নিন:

1. **চেসিস ও মূল ফ্রেমের ওয়েল্ডিং (সবচেয়ে জরুরি):**
   - সামনের অ্যাপ্রন, নাট-বল্টুর রঙ এবং পেছনের স্পেয়ার টায়ারের জায়গাটি ভালোভাবে দেখুন। কোনোরকম হাতুড়ির দাগ বা কারখানার সিল্যান্ট ছাড়া অন্য কোনো জোড়াতালি থাকলে গাড়িটি বড় এক্সিডেন্টে পড়েছিল।
2. **ইঞ্জিন ও ট্রান্সমিশনের অবস্থা:**
   - ইঞ্জিন চালু রেখে ইঞ্জিন অয়েলের ক্যাপ খুলে দেখুন ভেতর থেকে নীল বা সাদা ধোঁয়া বের হয় কিনা। টেস্ট ড্রাইভের সময় গিয়ার পরিবর্তনের সময় আরপিএম অকারণে বাড়ছে কিনা লক্ষ্য করুন।
3. **পানিতে ডোবা (বন্যা কবলিত) গাড়ি চেনার উপায়:**
   - সিটের নিচের কার্পেট তুলে দেখুন এবং সিটের রেলের নাটগুলোতে মরিচা বা শুকিয়ে যাওয়া বালু-কাদা আছে কিনা লক্ষ্য করুন। এসি ছাড়লে ভ্যাপসা দুর্গন্ধ আসে কিনা দেখুন।
4. **ওবিডি-২ স্ক্যানার দিয়ে ফল্ট কোড চেক:**
   - ইঞ্জিনের কোনো গোপন সমস্যা ড্যাশবোর্ড থেকে মুছে ফেলা হয়েছে কিনা তা ওবিডি-২ স্ক্যানার লাগিয়ে কোড টেস্ট করুন।
5. **বিআরটিএ কাগজপত্র ও ইঞ্জিনের নম্বর মেলানো:**
   - গাড়ির গায়ে খোদাই করা চেসিস ও ইঞ্জিন নম্বরের সাথে স্মার্ট কার্ড ও ট্যাক্স টোকেন হুবহু মিলিয়ে নিন। মালিকানা ও ফিটনেসের মেয়াদ যাচাই করুন।
`;
        const voiceText =
          "ব্যবহৃত গাড়ি কেনার আগে চেসিস ফ্রেমের ওয়েল্ডিং, ইঞ্জিনের ধোঁয়া, সিটের নিচের মরিচা ও কাদা, এবং বিআরটিএ ইঞ্জিন নম্বর হুবহু মিলিয়ে নিন।";

        return NextResponse.json({
          reply: markdownReply,
          voiceText,
          scenario: enrichScenario(topCarScenario, isBangla),
          source: "domain_synthesis",
          confidence: Math.max(confidence, 0.88),
          related: relatedCarGuides,
        });
      }

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
        scenario: enrichScenario(topCarScenario, isBangla),
        source: "domain_synthesis",
        confidence: Math.max(confidence, 0.88),
        related: relatedCarGuides,
      });
    }

    // ------------------------------------------------------------------------
    // (B) Culinary: Fish Frying & Preparation
    // ------------------------------------------------------------------------
    const isFishCookingQuery =
      (queryLower.includes("fish") || queryLower.includes("fishg") || queryLower.includes("mach") || queryLower.includes("মাছ")) &&
      (queryLower.includes("fry") || queryLower.includes("cook") || queryLower.includes("make") || queryLower.includes("recipe") || queryLower.includes("ভাজা") || queryLower.includes("রান্না"));

    if (isFishCookingQuery) {
      const topFishScenario =
        (scenariosData as Scenario[]).find((s) => s.id === 1469) ||
        results[0] ||
        null;
      const relatedFishGuides = results.filter((s) => s.id !== topFishScenario?.id).slice(0, 4);

      if (isBangla) {
        const markdownReply = `### 🐟 প্যানে না ভেঙে মুচমুচে মাছ ভাজার পারফেক্ট টেকনিক

মাছ ভাজার সময় প্যানে আটকে যাওয়া বা ভেঙে যাওয়া রোধ করতে নিচের সহজ নিয়মগুলো মেনে চলুন:

1. **মাছের গায়ের পানি পুরোপুরি শুকানো (সবচেয়ে গুরুত্বপূর্ণ):**
   - টিস্যু পেপার দিয়ে মাছের চামড়া ও মাংসের পানি ভালোভাবে চেপে মুছে ফেলুন। গায়ের পানি প্যানে বাষ্প তৈরি করে মাছের চামড়া প্যানে আটকে ফেলে।
2. **সহজ ও সঠিক মশলা মাখানো:**
   - হলুদ গুঁড়ো, সামান্য মরিচ, লবণ, লেবুর রস ও কয়েক ফোঁটা সরিষার তেল দিয়ে মেখে সর্বোচ্চ ১৫ মিনিট রাখুন।
3. **তেল গরমের সঠিক তাপমাত্রা:**
   - সরিষার তেল ধোঁয়া ওঠার আগ পর্যন্ত গরম করুন। তেলের মধ্যে শুকনো কাঠের কাঠি বা চপস্টিক ডুবিয়ে দেখুন—চারপাশে দ্রুত বুদবুদ উঠলে বুঝবেন তেল উপযুক্ত গরম হয়েছে।
4. **চামড়া মুচমুচে করার নিয়ম:**
   - মাছ চামড়ার দিকটা নিচে দিয়ে প্যানে দিন। প্রথম ১০ সেকেন্ড আলতো করে চেপে রাখুন যাতে চামড়া কুঁকড়ে না যায়।
   - **প্রথম ৩ থেকে ৪ মিনিট মাছে কোনো চামচ বা খুন্তি লাগাবেন না!** নিচটা ভাজা হলে আপনা থেকেই প্যান থেকে মাছ আলগা হয়ে আসবে।
5. **একবার উল্টে নামিয়ে রাখা:**
   - মাছ একবার উল্টে আরো ২ মিনিট ভেজে নিন। প্যান থেকে তুলে তারের জালি বা ওয়্যার র‍্যাকে রাখুন (টিস্যুর ওপর রাখবেন না, টিস্যুর তাপে মাছের নিচের চামড়া নরম হয়ে যায়)।
`;
        const voiceText =
          "মাছ মুচমুচে করে ভাজতে মাছের গায়ের পানি টিস্যু দিয়ে ভালো করে শুকিয়ে নিন এবং গরম তেলে দেওয়ার পর প্রথম তিন মিনিট চামচ দিয়ে নাড়াচাড়া করবেন না।";

        return NextResponse.json({
          reply: markdownReply,
          voiceText,
          scenario: enrichScenario(topFishScenario, isBangla),
          source: "domain_synthesis",
          confidence: Math.max(confidence, 0.85),
          related: relatedFishGuides,
        });
      }

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
        scenario: enrichScenario(topFishScenario, isBangla),
        source: "domain_synthesis",
        confidence: Math.max(confidence, 0.85),
        related: relatedFishGuides,
      });
    }

    // ------------------------------------------------------------------------
    // (C) Land Purchase & Property Due Diligence
    // ------------------------------------------------------------------------
    const isLandQuery =
      queryLower.includes("land") ||
      queryLower.includes("plot") ||
      queryLower.includes("jami") ||
      queryLower.includes("জমি") ||
      queryLower.includes("দলিল") ||
      queryLower.includes("খতিয়ান") ||
      queryLower.includes("পর্চা");

    if (isLandQuery) {
      const topLandScenario =
        (scenariosData as Scenario[]).find((s) => s.id === 25) ||
        results[0] ||
        null;
      const relatedLandGuides = results.filter((s) => s.id !== topLandScenario?.id).slice(0, 4);

      if (isBangla) {
        const markdownReply = `### 📜 জমি কেনার আগে ৫টি জরুরি সরকারি রেকর্ড যাচাই

জমি ক্রয়ের বায়না করার আগে নিজের কষ্টার্জিত টাকা সুরক্ষিত রাখতে নিচের ৫টি সরকারি রেকর্ড অবশ্যই যাচাই করুন:

1. **বিগত ৩০ বছরের বায়া দলিল (Chain of Deeds):**
   - মূল সিএস/এসএ জরিপের মালিক থেকে বর্তমান বিক্রেতা পর্যন্ত মালিকানার ধারাবাহিকতা কোনো ফাঁক ছাড়া বজায় আছে কিনা তা মিলিয়ে নিন।
2. **ডিসি রেকর্ড রুম থেকে মূল খতিয়ানের নকল:**
   - দালাল বা বিক্রেতার দেওয়া ফটোকপির ওপর নির্ভর না করে সরাসরি জেলা প্রশাসকের (ডিসি) রেকর্ড রুম থেকে সিএস, এসএ, আরএস ও সিটি জরিপের খতিয়ান যাচাই করুন।
3. **হালনাগাদ নামজারি (ই-নামজারি) ও ডিসিআর:**
   - বিক্রেতার নিজের নামে সহকারী কমিশনার (ভূমি) অফিস থেকে নামজারি খতিয়ান ও ডিসিআর রসিদ আছে কিনা নিশ্চিত হোন।
4. **অনলাইন ভূমি উন্নয়ন কর (ই-খাজনা):**
   - ldtax.gov.bd তে গিয়ে সবশেষ খাজনা পরিশোধের ডিজিটাল দাখিলা যাচাই করুন যাতে কোনো বকেয়া না থাকে।
5. **সাব-রেজিস্ট্রি অফিস থেকে দায়মুক্তি সনদ (NEC):**
   - জমিটি কোনো ব্যাংকে বন্ধক বা পাওয়ার অব অ্যাটর্নি দেওয়া আছে কিনা তা ১২ বছরের তল্লাশি দিয়ে নিশ্চিত হোন।
`;
        const voiceText =
          "জমি কেনার আগে বিগত ৩০ বছরের বায়া দলিল, ডিসি অফিস থেকে সার্টিফাইড খতিয়ান, ই-নামজারি ও খাজনার দাখিলা এবং দায়মুক্তি সনদ যাচাই করে নিন।";

        return NextResponse.json({
          reply: markdownReply,
          voiceText,
          scenario: enrichScenario(topLandScenario, isBangla),
          source: "domain_synthesis",
          confidence: Math.max(confidence, 0.9),
          related: relatedLandGuides,
        });
      }

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
        scenario: enrichScenario(topLandScenario, isBangla),
        source: "domain_synthesis",
        confidence: Math.max(confidence, 0.9),
        related: relatedLandGuides,
      });
    }

    // ------------------------------------------------------------------------
    // (D) Lost Phone & Online Police GD
    // ------------------------------------------------------------------------
    const isPhoneLostQuery =
      (queryLower.includes("phone") || queryLower.includes("mobile") || queryLower.includes("ফোন") || queryLower.includes("মোবাইল")) &&
      (queryLower.includes("lost") || queryLower.includes("gd") || queryLower.includes("stolen") || queryLower.includes("হারানো") || queryLower.includes("হারিয়ে") || queryLower.includes("হারাল") || queryLower.includes("হারায়") || queryLower.includes("জিডি") || queryLower.includes("চুরি"));

    if (isPhoneLostQuery) {
      const topPhoneScenario =
        (scenariosData as Scenario[]).find((s) => s.id === 449) ||
        results[0] ||
        null;
      const relatedPhoneGuides = results.filter((s) => s.id !== topPhoneScenario?.id).slice(0, 4);

      if (isBangla) {
        const markdownReply = `### 📱 মোবাইল হারালে অনলাইনে জিডি ও উদ্ধারের সঠিক নিয়ম

মোবাইল ফোন হারিয়ে গেলে বা চুরি হলে দ্রুত নিচের পদক্ষেপগুলো নিন:

1. **আইএমইআই (IMEI) নম্বর সংগ্রহ:**
   - ফোনের বক্স বা ক্রয়ের রসিদ থেকে ১৫ ডিজিটের আইএমইআই নম্বরটি লিখে রাখুন।
2. **সিম কার্ড সাময়িক ব্লক করা:**
   - সংশ্লিষ্ট মোবাইল অপারেটরের কাস্টমার কেয়ারে কল করে সিম কার্ডটি সাময়িকভাবে বন্ধ বা রিপ্লেসমেন্ট করুন যাতে ওটিপি অপব্যবহার না হয়।
3. **অনলাইনে পুলিশ জিডি (Online GD) করা:**
   - বাংলাদেশ পুলিশের অফিসিয়াল ওয়েবসাইট (\`gd.police.gov.bd\`) অথবা 'অনলাইন জিডি' অ্যাপে জাতীয় পরিচয়পত্র ও আইএমইআই নম্বর দিয়ে নিখোঁজ জিডি দাখিল করুন।
4. **সাইবার ক্রাইম ও থানা ট্র্যাকিং:**
   - জিডি নম্বরসহ আবেদনপত্র নিকটস্থ থানা বা সিআইডি/ডিবি সাইবার ইনভেস্টিগেশন ইউনিটে জমা দিলে তারা বিটিআরসি ও সেলুলার বিটিএস ট্র্যাক করে ফোন উদ্ধার করবে।
`;
        const voiceText =
          "মোবাইল হারালে প্রথমে আইএমইআই নম্বর সংগ্রহ করে সিম ব্লক করুন, তারপর জিডি ডট পুলিশ ডট গভ ডট বিডি তে অনলাইনে জিডি করে থানায় ট্র্যাকিংয়ের আবেদন করুন।";

        return NextResponse.json({
          reply: markdownReply,
          voiceText,
          scenario: enrichScenario(topPhoneScenario, isBangla),
          source: "domain_synthesis",
          confidence: 0.92,
          related: relatedPhoneGuides,
        });
      }

      const markdownReply = `### 📱 Lost Phone & IMEI Recovery Standard Operating Procedure (SOP)

If your smartphone is lost or stolen, execute these 4 immediate steps:

1. **Locate 15-Digit IMEI Number:**
   - Retrieve your device's 15-digit IMEI number from the original product box or purchase receipt.
2. **Immediate SIM Lock / Deactivation:**
   - Call your telecommunications operator helpline to temporarily suspend the SIM card, preventing two-factor SMS OTP compromises.
3. **File an Online Police General Diary (GD):**
   - Submit an official loss report on the Bangladesh Police Citizen Portal (\`gd.police.gov.bd\`) or via the Online GD mobile app using your NID and IMEI.
4. **Cellular BTS Tracking via Cyber Crime Division:**
   - Present the stamped GD certificate to your local police thana and the CID / DB Cyber Crime unit for cellular tower triangulation and device recovery.
`;
      const voiceText =
        "If you lost your phone, immediately note your 15-digit IMEI, block your SIM card, file an online GD at police dot gov dot bd, and submit the GD copy to the Cyber Crime unit for tracking.";

      return NextResponse.json({
        reply: markdownReply,
        voiceText,
        scenario: enrichScenario(topPhoneScenario, isBangla),
        source: "domain_synthesis",
        confidence: 0.92,
        related: relatedPhoneGuides,
      });
    }

    // ------------------------------------------------------------------------
    // (E) Food Safety: Formalin in Fish Detection
    // ------------------------------------------------------------------------
    const isFormalinQuery =
      queryLower.includes("formalin") ||
      queryLower.includes("ফরমালিন") ||
      queryLower.includes("ভেজাল");

    if (isFormalinQuery) {
      const formalinScenario =
        (scenariosData as Scenario[]).find((s) => s.id === 1031) ||
        results[0] ||
        null;
      const relatedFormalin = results.filter((s) => s.id !== formalinScenario?.id).slice(0, 4);

      if (isBangla) {
        const markdownReply = `### 🐟 বাজারে মাছে ফরমালিন শনাক্তকরণের বৈজ্ঞানিক ও ঘরোয়া উপায়

বাজারে কোনো কেমিক্যাল কিট ছাড়াই সহজে ফরমালিনযুক্ত মাছ চেনার ৪টি পরীক্ষিত লক্ষণ:

1. **মাছি বসা পর্যবেক্ষণ (সবচেয়ে সহজ লক্ষণ):**
   - সাধারণ তাজা মাছের ওপর স্বাভাবিকভাবেই মাছি ও পোকা ঘুরে বেড়ায়। কিন্তু ফরমালিন দেওয়া মাছের বিষাক্ত রাসায়নিক গন্ধের কারণে মাছি ধারেকাছেও ঘেঁষে না।
2. **মাছের ফুলকার (Gills) রঙ পরীক্ষা:**
   - ভালো তাজা মাছের কানকো বা ফুলকা থাকে স্বাভাবিক রক্তলাল ও ভেজা। ফরমালিনযুক্ত মাছের ফুলকা ফ্যাকাসে, ধূসর বা শুকনো বাদামি রঙের হয়ে যায়।
3. **চোখের স্বচ্ছতা ও আকৃতি:**
   - তাজা মাছের চোখ বাইরের দিকে উজ্জ্বল ও স্বচ্ছ দেখায়। ফরমালিন দেওয়া মাছের চোখ ঘোলাটে, সাদাটে বা ভেতর দিকে বসে যায়।
4. **অস্বাভাবিক শক্ত শরীর ও তীব্র গন্ধ:**
   - ফরমালিনে মাছের প্রোটিন জমে মাছ রবারের মতো শক্ত হয়ে থাকে। শুঁকলে কোনো স্বাভাবিক মাছের গন্ধ না পেয়ে হালকা ঝাঁঝালো ওষুধের মতো গন্ধ পাবেন।
`;
        const voiceText =
          "ফরমালিনযুক্ত মাছ চেনার সহজ উপায় হলো মাছের ওপর মাছি না বসা, ফুলকা ফ্যাকাসে বাদামি হওয়া, চোখ ঘোলাটে হওয়া এবং অস্বাভাবিক রবারের মতো শক্ত থাকা।";

        return NextResponse.json({
          reply: markdownReply,
          voiceText,
          scenario: enrichScenario(formalinScenario, isBangla),
          source: "domain_synthesis",
          confidence: 0.93,
          related: relatedFormalin,
        });
      }

      const markdownReply = `### 🐟 Detecting Formalin in Fresh Fish at Wet Markets

You can accurately identify formalin-treated fish at local markets through 4 physical indicators:

1. **Housefly Avoidance Behavior (Easiest Clue):**
   - Natural fresh fish naturally attracts houseflies. Formalin release creates chemical vapors that cause flies and insects to completely avoid the fish stall.
2. **Gill Color & Texture Inspection:**
   - Naturally fresh gills are moist and vibrant crimson red. Formalin denatures hemoproteins, turning gills dull grey, pale brown, or unnaturally dry.
3. **Eye Clarity & Bulge:**
   - Fresh fish eyes are convex, clear, and bulging. Formalin-preserved fish eyes become sunken, cloudy, and covered with a white film.
4. **Unnatural Muscle Rigidity:**
   - Formalin cross-links muscle proteins, making the fish unnaturally stiff and rubbery, with a sharp, medicinal odor instead of a natural freshwater smell.
`;
      const voiceText =
        "To detect formalin in fish, check if flies avoid the stall, inspect if the gills are pale brown instead of red, and notice if the fish feels unnaturally stiff like rubber.";

      return NextResponse.json({
        reply: markdownReply,
        voiceText,
        scenario: enrichScenario(formalinScenario, isBangla),
        source: "domain_synthesis",
        confidence: 0.93,
        related: relatedFormalin,
      });
    }

    // ------------------------------------------------------------------------
    // (F) College Admission: XI Class Prioritization Strategy
    // ------------------------------------------------------------------------
    const isCollegeQuery =
      (queryLower.includes("college") || queryLower.includes("admission") || queryLower.includes("একাদশ") || queryLower.includes("কলেজ")) &&
      (queryLower.includes("choice") || queryLower.includes("চয়েস") || queryLower.includes("ভর্তি") || queryLower.includes("seat"));

    if (isCollegeQuery) {
      const collegeScenario =
        (scenariosData as Scenario[]).find((s) => s.id === 1001) ||
        results[0] ||
        null;
      const relatedCollege = results.filter((s) => s.id !== collegeScenario?.id).slice(0, 4);

      if (isBangla) {
        const markdownReply = `### 🎓 একাদশ শ্রেণির কলেজ চয়েস দেওয়ার ৫-৩-২ সেফটি কৌশল

অনলাইনে (\`xiclassadmission.gov.bd\`) কলেজ পছন্দের তালিকা সাজানোর সময় নিচের কৌশলটি মেনে চলুন:

1. **বিগত ৩ বছরের কাট-অফ জিপিএ দেখুন:**
   - প্রতিটি কলেজের পূর্ববর্তী ন্যূনতম জিপিএ ও সাবজেক্ট-ভিত্তিক নম্বর দেখে আবেদন করুন। শুধু জিপিএ-৫ নয়, মোট নম্বরের ওপর নির্ভর করে আসন মেলে।
2. **৫-৩-২ অনুপাত কৌশল (ঝুঁকিহীন চয়েস):**
   - **১ম ও ২য় পছন্দ:** আপনার স্বপ্নের শীর্ষ কলেজ (Ambitious)।
   - **৩য় থেকে ৭ম পছন্দ:** আপনার জিপিএ-র সাথে হুবহু মিলে এমন ৫টি নির্ভরযোগ্য কলেজ (Realistic)।
   - **৮ম থেকে ১০ম পছন্দ:** এমন ৩টি নিরাপদ কলেজ যেগুলোতে আপনার প্রাপ্ত নম্বরে আসন নিশ্চিত থাকবে (Safe Backups)।
3. **অটো-মাইগ্রেশনের সঠিক ব্যবহার:**
   - চয়েস লিস্টে কোনো কলেজ পেলে উপরের দিকের কলেজগুলোতে অটো-মাইগ্রেশন চালু থাকবে। তাই কখনোই পছন্দের বাইরের কোনো কলেজ তালিকার উপরের দিকে রাখবেন না।
`;
        const voiceText =
          "একাদশ শ্রেণিতে কলেজ চয়েসের ক্ষেত্রে ৫টি বাস্তবসম্মত, ২টি স্বপ্নের এবং ৩টি নিরাপদ ব্যাকআপ কলেজ রাখুন যাতে ১ম ধাপেই আপনার আসন নিশ্চিত হয়।";

        return NextResponse.json({
          reply: markdownReply,
          voiceText,
          scenario: enrichScenario(collegeScenario, isBangla),
          source: "domain_synthesis",
          confidence: 0.91,
          related: relatedCollege,
        });
      }

      const markdownReply = `### 🎓 XI Class Online Admission: College Choice Prioritization Strategy

Maximize your chance of getting allocated in the 1st phase on \`xiclassadmission.gov.bd\` using the 2-5-3 allocation formula:

1. **Analyze Previous Year GPA & Total Mark Cut-Offs:**
   - Seats in top colleges are decided by total marks, not just GPA 5.0. Match your subject-specific marks against historical benchmarks.
2. **The 2-5-3 Risk Mitigation Framework:**
   - **Choices 1–2 (Dream):** Ambitious institutions slightly above your historical cutoff.
   - **Choices 3–7 (Realistic):** Institutions where your total score comfortably aligns with the median.
   - **Choices 8–10 (Safety):** Guaranteed fallback colleges to ensure you don't get left with zero seat allocation.
3. **Master Auto-Migration:**
   - System migration always flows upwards. Never list a less-desired college above a preferred one.
`;
      const voiceText =
        "For college admission choices, apply the 2-5-3 strategy with 2 dream colleges, 5 realistic colleges, and 3 safe backups to guarantee seat allocation in round one.";

      return NextResponse.json({
        reply: markdownReply,
        voiceText,
        scenario: enrichScenario(collegeScenario, isBangla),
        source: "domain_synthesis",
        confidence: 0.91,
        related: relatedCollege,
      });
    }

    // ------------------------------------------------------------------------
    // (G) Stain Removal: Turmeric & Haldi Stains
    // ------------------------------------------------------------------------
    const isStainQuery =
      queryLower.includes("turmeric") ||
      queryLower.includes("haldi") ||
      queryLower.includes("হলুদ") ||
      queryLower.includes("stain") ||
      queryLower.includes("দাগ");

    if (isStainQuery) {
      const stainScenario =
        (scenariosData as Scenario[]).find((s) => s.id === 1083) ||
        results[0] ||
        null;
      const relatedStains = results.filter((s) => s.id !== stainScenario?.id).slice(0, 4);

      if (isBangla) {
        const markdownReply = `### 👔 কাপড় থেকে জেদি হলুদের দাগ দূর করার বৈজ্ঞানিক উপায়

হলুদের দাগ দূর করতে কোনো গরম পানি বা ব্লিচ দেবেন না। নিচের বৈজ্ঞানিক নিয়মটি অনুসরণ করুন:

1. **কখনোই গরম পানি ব্যবহার করবেন না:**
   - হলুদের মূল উপাদান 'কারকিউমিন' তাপে কাপড়ের সুতোর সাথে স্থায়ীভাবে লক হয়ে যায়। সর্বদা স্বাভাবিক ঠান্ডা পানি ব্যবহার করুন।
2. **ডিশওয়াশিং লিকুইড ও বেকিং সোডা প্রয়োগ:**
   - দাগের জায়গায় কয়েক ফোঁটা ডিশওয়াশিং লিকুইড (যেমন Vim) এবং সামান্য বেকিং সোডা দিন। আঙুল দিয়ে আলতো করে মেখে ১০ মিনিট রেখে দিন।
3. **ঠান্ডা পানিতে ধুয়ে ফেলা:**
   - হালকা ঘষে ঠান্ডা পানি দিয়ে ধুয়ে ফেলুন। এ পর্যায়ে দাগ কিছুটা লালচে হতে পারে (অ্যালকালাইন বিক্রিয়ায় এটি স্বাভাবিক)।
4. **সূর্যের রোদে শুকানো (ম্যাজিক স্টেপ):**
   - ভেজা কাপড়টি সরাসরি প্রখর রোদে ৩ থেকে ৪ ঘণ্টা মেলে দিন। সূর্যের অতিবেগুনি (UV) রশ্মি কারকিউমিনের রাসায়নিক বন্ধন সম্পূর্ণ ভেঙে ফেলে এবং হলুদ রঙ হাওয়ায় মিলিয়ে যায়!
`;
        const voiceText =
          "হলুদের দাগ তুলতে ডিশওয়াশ লিকুইড দিয়ে ঠান্ডা পানিতে ধুয়ে ভেজা কাপড় সরাসরি কড়া রোদে দিন। সূর্যের অতিবেগুনি রশ্মি হলুদের দাগ পুরোপুরি মুছে দেয়।";

        return NextResponse.json({
          reply: markdownReply,
          voiceText,
          scenario: enrichScenario(stainScenario, isBangla),
          source: "domain_synthesis",
          confidence: 0.92,
          related: relatedStains,
        });
      }

      const markdownReply = `### 👔 Scientific Method: Removing Bright Yellow Turmeric Stains

Turmeric pigment (curcumin) is water-insoluble and heat-fixed. Follow this chemistry-backed protocol:

1. **Avoid Hot Water or Chlorine Bleach:**
   - Heat permanently binds curcumin to cotton fibers. Always flush with cold water.
2. **Apply Concentrated Liquid Dish Soap:**
   - Dish soap contains surfactants that dissolve the oil medium carrying the pigment. Rub gently into the spot and let sit for 10 minutes.
3. **Cold Water Rinse:**
   - Rinse under cold running water. The spot may turn temporarily reddish-brown due to alkaline pH change.
4. **Direct Solar UV Exposure (Photolysis):**
   - Lay the damp garment flat in direct bright sunlight for 3–4 hours. Solar ultraviolet radiation breaks down curcumin molecular chromophores, completely vanishing the stain.
`;
      const voiceText =
        "To remove turmeric stains, treat with dish soap, wash only in cold water, and place the damp cloth in direct bright sunlight so ultraviolet rays dissolve the stain.";

      return NextResponse.json({
        reply: markdownReply,
        voiceText,
        scenario: enrichScenario(stainScenario, isBangla),
        source: "domain_synthesis",
        confidence: 0.92,
        related: relatedStains,
      });
    }

    // ------------------------------------------------------------------------
    // (H) Tenancy & Police Verification (CIMS)
    // ------------------------------------------------------------------------
    const isTenantQuery =
      queryLower.includes("tenant") ||
      queryLower.includes("cims") ||
      queryLower.includes("ভাড়াটিয়া") ||
      queryLower.includes("ভাড়াটিয়া তথ্য");

    if (isTenantQuery) {
      const tenantScenario =
        (scenariosData as Scenario[]).find((s) => s.id === 32) ||
        results[0] ||
        null;
      const relatedTenant = results.filter((s) => s.id !== tenantScenario?.id).slice(0, 4);

      if (isBangla) {
        const markdownReply = `### 🏠 অনলাইনে ভাড়াটিয়া পুলিশ ভেরিফিকেশন (CIMS) ফরম পূরণের নিয়ম

ঢাকা মেট্রোপলিটন পুলিশ (DMP) সহ দেশের সব শহরে ভাড়াটিয়া তথ্য অনলাইনে জমা দিতে নিচের পদক্ষেপ নিন:

1. **CIMS অ্যাপ ডাউনলোড ও রেজিস্ট্রেশন:**
   - গুগল প্লে স্টোর থেকে **'Citizen Information Management System (CIMS)'** অ্যাপ নামিয়ে নিজের মোবাইল নম্বর দিয়ে অ্যাকাউন্ট খুলুন।
2. **প্রয়োজনীয় কাগজপত্র প্রস্তুত রাখা:**
   - ভাড়াটিয়া ও প্রাপ্তবয়স্ক সকল সদস্যের জাতীয় পরিচয়পত্র (NID) নম্বর।
   - প্রত্যেকের পাসপোর্ট সাইজের স্পষ্ট ছবি।
   - জরুরি যোগাযোগের নম্বর, পেশাগত পরিচয় ও পূর্ববর্তী বাড়ির ঠিকানা।
3. **তথ্য এন্ট্রি ও অনলাইন সাবমিশন:**
   - ফ্ল্যাট নম্বর, ফ্লোর ও ভাড়াটিয়ার বিবরণ ডিজিটাল ফরমে পূরণ করে সাবমিট করুন।
   - সাবমিটের পর একটি ডিজিটাল কনফার্মেশন কোড আসবে যা স্থানীয় থানার ডাটাবেজে স্বয়ংক্রিয়ভাবে সংরক্ষিত হয়ে যাবে।
`;
        const voiceText =
          "ভাড়াটিয়া ভেরিফিকেশনের জন্য সিআইএমএস অ্যাপে ভাড়াটিয়ার এনআইডি ও ছবি দিয়ে তথ্য জমা দিন। এটি সম্পূর্ণ অনলাইন এবং নিরাপদ।";

        return NextResponse.json({
          reply: markdownReply,
          voiceText,
          scenario: enrichScenario(tenantScenario, isBangla),
          source: "domain_synthesis",
          confidence: 0.94,
          related: relatedTenant,
        });
      }

      const markdownReply = `### 🏠 Online Police Tenant Verification via CIMS Protocol

To comply with Citizen Information Management System (CIMS) laws:

1. **Download DMP CIMS Mobile App:**
   - Install the official CIMS app from the Play Store and register with your mobile phone number.
2. **Collect Required Documentation:**
   - Smart National ID (NID) numbers for the primary tenant and all adult residents.
   - Recent digital passport-sized photographs of all occupants.
   - Employer details, permanent address, and emergency contact numbers.
3. **Submit Entry Online:**
   - Fill in building details, flat number, and upload tenant profiles. The app synchronizes directly with the local police thana database.
`;
      const voiceText =
        "Submit tenant verification using the police CIMS mobile app by providing the tenant NID, photo, and previous address to stay compliant with citizen safety regulations.";

      return NextResponse.json({
        reply: markdownReply,
        voiceText,
        scenario: enrichScenario(tenantScenario, isBangla),
        source: "domain_synthesis",
        confidence: 0.94,
        related: relatedTenant,
      });
    }

    // ------------------------------------------------------------------------
    // (I) E-Passport Application & Verification
    // ------------------------------------------------------------------------
    const isPassportQuery =
      queryLower.includes("passport") ||
      queryLower.includes("epassport") ||
      queryLower.includes("পাসপোর্ট") ||
      queryLower.includes("ই-পাসপোর্ট");

    if (isPassportQuery) {
      const passportScenario =
        (scenariosData as Scenario[]).find((s) => s.id === 221) ||
        results[0] ||
        null;
      const relatedPassport = results.filter((s) => s.id !== passportScenario?.id).slice(0, 4);

      if (isBangla) {
        const markdownReply = `### 🛂 বানান ভুল ছাড়া নতুন ই-পাসপোর্ট আবেদনের সঠিক নিয়ম

ই-পাসপোর্ট আবেদনের ফাইল যাতে মাসের পর মাস আটকে না থাকে, সেজন্য এই ধাপগুলো মেনে চলুন:

1. **স্মার্ট এনআইডির সাথে হুবহু তথ্য মেলানো (সবচেয়ে গুরুত্বপূর্ণ):**
   - আপনার নাম, পিতার নাম, মাতার নাম ও জন্ম তারিখ স্মার্ট জাতীয় পরিচয়পত্রের (NID) সাথে প্রতিটি অক্ষরে অক্ষরে মিলিয়ে লিখুন। একটি অক্ষরের অমিল হলেও ফাইল স্থগিত হয়ে যাবে।
2. **অফিসিয়াল পোর্টালে ফরম পূরণ:**
   - \`epassport.gov.bd\` ওয়েবসাইটে গিয়ে আবেদন করুন। বর্তমান ও স্থায়ী ঠিকানা সঠিকভাবে দিন (স্থায়ী ঠিকানার ভিত্তিতে পুলিশ ভেরিফিকেশন হবে)।
3. **সরকারি ফি প্রদান (এ-চালান বা মোবাইল ব্যাংকিং):**
   - সোনালী ব্যাংক, বিকাশ, রকেট বা কার্ডের মাধ্যমে এ-চালানে সরকারি ফি জমা দিয়ে রসিদ সংরক্ষণ করুন।
4. **বায়োমেট্রিক ও ছবি তোলার অ্যাপয়েন্টমেন্ট:**
   - আবেদনপত্র সামারি ও ফি রসিদ প্রিন্ট করে নির্দিষ্ট তারিখে পাসপোর্ট অফিসে গিয়ে আঙুলের ছাপ ও আইরিশ দিন।
`;
        const voiceText =
          "ই-পাসপোর্ট আবেদনের ক্ষেত্রে স্মার্ট এনআইডির সাথে প্রতিটি নামের বানান হুবহু মিলিয়ে ফরম পূরণ করুন এবং এ-চালানের মাধ্যমে ফি জমা দিয়ে নির্ধারিত তারিখে অফিসে যান।";

        return NextResponse.json({
          reply: markdownReply,
          voiceText,
          scenario: enrichScenario(passportScenario, isBangla),
          source: "domain_synthesis",
          confidence: 0.93,
          related: relatedPassport,
        });
      }

      const markdownReply = `### 🛂 Applying for a New E-Passport without Mistakes

Follow this standard procedure on \`epassport.gov.bd\` to prevent delays:

1. **Exact 100% Character Match with Smart NID:**
   - Every character of your full name, parents' names, and date of birth must match your Smart National ID. Any discrepancy halts processing.
2. **Online Portal Registration:**
   - Complete the form at \`epassport.gov.bd\`. Police Special Branch (SB) verification occurs at your stated permanent address.
3. **Government Fee Payment:**
   - Pay fees online via A-Challan, Sonali Bank, or mobile banking (bKash/Rocket) and retain the digital receipt.
4. **Biometric Enrollment:**
   - Print your Application Summary and payment receipt, then visit the designated regional passport office for fingerprint and iris scanning.
`;
      const voiceText =
        "When applying for an e-passport, verify that your name and details match your Smart NID exactly, pay via A-Challan, and bring your summary to the biometric appointment.";

      return NextResponse.json({
        reply: markdownReply,
        voiceText,
        scenario: enrichScenario(passportScenario, isBangla),
        source: "domain_synthesis",
        confidence: 0.93,
        related: relatedPassport,
      });
    }

    // ------------------------------------------------------------------------
    // 3. Direct Scenario Match (High Confidence)
    // ------------------------------------------------------------------------
    if (directMatch && confidence >= 0.45) {
      const enriched = enrichScenario(directMatch, isBangla);

      const voiceText = isBangla
        ? `${enriched?.title} সম্পর্কে যা জানা জরুরি: ${enriched?.what_people_dont_know} প্রধান ঝুঁকি: ${enriched?.primary_risk}`
        : `Here is what you need to know about ${directMatch.title}. ${directMatch.what_people_dont_know} Watch out for this primary risk: ${directMatch.primary_risk}.`;

      const markdownReply = isBangla
        ? `এখানে **${enriched?.title}** এর পরীক্ষিত চেকলিস্ট ও সমাধান দেওয়া হলো:`
        : `Here is the verified step-by-step checklist and key insights from our knowledge base:`;

      return NextResponse.json({
        reply: markdownReply,
        voiceText,
        scenario: enriched,
        source: "verified_knowledge_base",
        confidence,
        related: results.filter((s) => s.id !== directMatch.id).slice(0, 4),
      });
    }

    // ------------------------------------------------------------------------
    // 4. Multi-Scenario Search Relevance
    // ------------------------------------------------------------------------
    if (results.length > 0 && confidence >= 0.25) {
      const top = enrichScenario(results[0], isBangla);
      const relatedList = results.slice(1, 5);

      const voiceText = isBangla
        ? `${top?.title} সম্পর্কিত গুরুত্বপূর্ণ তথ্য: ${top?.what_people_dont_know}`
        : `I found a relevant guide regarding ${top?.title}. ${top?.what_people_dont_know}`;

      const markdownReply = isBangla
        ? `আমাদের তথ্যভান্ডার থেকে সবচেয়ে প্রাসঙ্গিক সমাধানটি নিচে দেওয়া হলো:`
        : `Here is the most relevant step-by-step guide from our database:`;

      return NextResponse.json({
        reply: markdownReply,
        voiceText,
        scenario: top,
        source: "semantic_synthesis",
        confidence,
        related: relatedList,
      });
    }

    // ------------------------------------------------------------------------
    // 5. LLM Fallback (If API key exists)
    // ------------------------------------------------------------------------
    const llmAnswer = await queryLLMFallback(rawMessage, results, isBangla);
    if (llmAnswer) {
      return NextResponse.json({
        reply: llmAnswer,
        voiceText: llmAnswer.slice(0, 200).replace(/[*#_]/g, ""),
        scenario: enrichScenario(results[0] || null, isBangla),
        source: "llm_enhanced",
        confidence: 0.75,
        related: results.slice(0, 3),
      });
    }

    // ------------------------------------------------------------------------
    // 6. Helpful General Guidance Fallback
    // ------------------------------------------------------------------------
    const fallbackReply = isBangla
      ? `আমাদের ২,০০০ বাস্তব জীবনের তথ্যভান্ডারে "${rawMessage}" নিয়ে হুবহু কোনো গাইড পাওয়া যায়নি।

**আপনি নিচের যেকোনো বিষয় নিয়ে সরাসরি জানতে পারেন:**
- 🚗 **গাড়ি:** *"ব্যবহৃত গাড়ি কেনার নিয়ম"*, *"পানিতে ডোবা গাড়ি চেনার উপায়"*, *"বিআরটিএ মালিকানা বদল"*
- 📜 **জমি ও আইন:** *"জমি কেনার আগে দলিল পরীক্ষা"*, *"অনলাইনে পুলিশ জিডি করার নিয়ম"*, *"ই-নামজারি করার নিয়ম"*
- 🐟 **খাবার ও রান্না:** *"মাছে ফরমালিন পরীক্ষা"*, *"মুচমুচে মাছ ভাজা"*, *"তরকারির অতিরিক্ত লবণ কমানো"*
- 🎓 **ভর্তি ও পড়ালেখা:** *"একাদশ শ্রেণিতে কলেজ চয়েস"*, *"বিশ্ববিদ্যালয়ের বিষয় নির্বাচন"*`
      : `I searched across our database of 2,000 real-world life scenarios, but didn't find an exact match for "${rawMessage}".

**Try asking about:**
- 🚗 **Vehicles:** *"Used car inspection checklist"*, *"Detecting flood damage in car"*, *"Transferring car ownership at BRTA"*
- 📜 **Property & Legal:** *"How to check land documents before buying"*, *"Online police GD for lost phone"*, *"E-Mutation namjari procedure"*
- 🍳 **Culinary & Safety:** *"How to fry fish crispy"*, *"Detecting formalin in fish"*, *"Fixing over-salted curry"*
- 🎓 **Education:** *"College admission choice strategy"*, *"Medical admission quota verification"*`;

    const fallbackVoice = isBangla
      ? "আপনার প্রশ্নের হুবহু কোনো গাইড পাওয়া যায়নি। গাড়ি, জমিজমা, ফরমালিন বা রান্নার কোনো নির্দিষ্ট বিষয় নিয়ে প্রশ্ন করতে পারেন।"
      : "I could not find an exact match in our 2,000 verified guides. Try asking about car inspection, land documents, police GD, or cooking techniques.";

    return NextResponse.json({
      reply: fallbackReply,
      voiceText: fallbackVoice,
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
