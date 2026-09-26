import { NextRequest, NextResponse } from "next/server";
import { searchScenarios, Scenario } from "@/lib/search/searchEngine";
import { Language } from "@/lib/i18n";
import {
  getInDepthGuideline,
  formatGuidelineToMarkdown,
  formatGuidelineVoiceText,
} from "@/lib/knowledge/guidelineEngine";
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
    const langKey: Language = isBangla ? "bn" : "en";
    const queryLower = rawMessage.toLowerCase();

    // 1. High-Precision Hybrid Semantic & Fuzzy Search
    const searchResult = searchScenarios(rawMessage, 6);
    const { directMatch, confidence, results } = searchResult;

    // Helper to build standardized in-depth verified response from a Scenario
    const buildScenarioResponse = (scenario: Scenario, conf = 0.9, rel: Scenario[] = []) => {
      const guideline = getInDepthGuideline(scenario, langKey);
      const markdownReply = formatGuidelineToMarkdown(guideline, isBangla);
      const voiceText = formatGuidelineVoiceText(guideline, isBangla);
      const enriched = enrichScenario(scenario, isBangla);
      const relatedGuides =
        rel.length > 0
          ? rel
          : results.filter((s) => s.id !== scenario.id).slice(0, 4);

      return NextResponse.json({
        reply: markdownReply,
        voiceText,
        scenario: enriched,
        guideline,
        source: "verified_knowledge_base",
        confidence: Math.max(confidence, conf),
        related: relatedGuides,
      });
    };

    // 2. Domain-Specific Synthesis for Common Broad Life Queries
    // ------------------------------------------------------------------------
    // (A) Motorcycle & Scooter Pre-purchase
    // ------------------------------------------------------------------------
    const isBikeQuery =
      queryLower.includes("bike") ||
      queryLower.includes("motorcycle") ||
      queryLower.includes("scooter") ||
      queryLower.includes("scutar") ||
      queryLower.includes("বাইক") ||
      queryLower.includes("মোটরসাইকেল") ||
      queryLower.includes("স্কুটার");

    if (isBikeQuery) {
      const bikeScenario =
        (scenariosData as Scenario[]).find(
          (s) =>
            s.title.toLowerCase().includes("motorcycle") ||
            s.title.toLowerCase().includes("bike")
        ) ||
        (scenariosData as Scenario[]).find((s) => s.id === 105) ||
        results[0];

      if (bikeScenario) {
        return buildScenarioResponse(bikeScenario, 0.92);
      }
    }

    // ------------------------------------------------------------------------
    // (B) Automotive & Used Car Inspection
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
      if (topCarScenario) {
        return buildScenarioResponse(topCarScenario, 0.95);
      }
    }

    // ------------------------------------------------------------------------
    // (C) Land Purchase, Flats & Property Due Diligence
    // ------------------------------------------------------------------------
    const isLandQuery =
      queryLower.includes("land") ||
      queryLower.includes("plot") ||
      queryLower.includes("jami") ||
      queryLower.includes("porcha") ||
      queryLower.includes("mutation") ||
      queryLower.includes("জমি") ||
      queryLower.includes("দলিল") ||
      queryLower.includes("খতিয়ান") ||
      queryLower.includes("পর্চা") ||
      queryLower.includes("নামজারি");

    if (isLandQuery) {
      const topLandScenario =
        (scenariosData as Scenario[]).find((s) => s.id === 25) ||
        results[0] ||
        null;
      if (topLandScenario) {
        return buildScenarioResponse(topLandScenario, 0.95);
      }
    }

    // ------------------------------------------------------------------------
    // (D) Lost Phone & Online Police GD
    // ------------------------------------------------------------------------
    const isPhoneLostQuery =
      (queryLower.includes("phone") ||
        queryLower.includes("mobile") ||
        queryLower.includes("imei") ||
        queryLower.includes("ফোন") ||
        queryLower.includes("মোবাইল")) &&
      (queryLower.includes("lost") ||
        queryLower.includes("gd") ||
        queryLower.includes("stolen") ||
        queryLower.includes("find") ||
        queryLower.includes("হারানো") ||
        queryLower.includes("হারিয়ে") ||
        queryLower.includes("হারাল") ||
        queryLower.includes("জিডি") ||
        queryLower.includes("চুরি"));

    if (isPhoneLostQuery) {
      const topPhoneScenario =
        (scenariosData as Scenario[]).find((s) => s.id === 449) ||
        results[0] ||
        null;
      if (topPhoneScenario) {
        return buildScenarioResponse(topPhoneScenario, 0.95);
      }
    }

    // ------------------------------------------------------------------------
    // (E) Study Abroad, Higher Education & Student Visa
    // ------------------------------------------------------------------------
    const isAbroadQuery =
      queryLower.includes("abroad") ||
      queryLower.includes("study abroad") ||
      queryLower.includes("higher education") ||
      queryLower.includes("student visa") ||
      queryLower.includes("ielts") ||
      queryLower.includes("বিদেশ") ||
      queryLower.includes("উচ্চশিক্ষা") ||
      queryLower.includes("ভিসা");

    if (isAbroadQuery) {
      const abroadScenario =
        (scenariosData as Scenario[]).find(
          (s) =>
            s.category.toLowerCase().includes("immigration") ||
            s.subcategory.toLowerCase().includes("study") ||
            s.title.toLowerCase().includes("visa")
        ) || results[0];

      if (abroadScenario) {
        return buildScenarioResponse(abroadScenario, 0.93);
      }
    }

    // ------------------------------------------------------------------------
    // (F) E-Passport Application & Verification
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
      if (passportScenario) {
        return buildScenarioResponse(passportScenario, 0.95);
      }
    }

    // ------------------------------------------------------------------------
    // (G) Food Safety & Formalin Detection
    // ------------------------------------------------------------------------
    const isFormalinQuery =
      queryLower.includes("formalin") ||
      queryLower.includes("ফরমালিন") ||
      queryLower.includes("ভেজাল") ||
      queryLower.includes("adulteration") ||
      (queryLower.includes("fish") && queryLower.includes("fresh")) ||
      (queryLower.includes("মাছ") && queryLower.includes("তাজা"));

    if (isFormalinQuery) {
      const formalinScenario =
        (scenariosData as Scenario[]).find((s) => s.id === 1031) ||
        results[0] ||
        null;
      if (formalinScenario) {
        return buildScenarioResponse(formalinScenario, 0.95);
      }
    }

    // ------------------------------------------------------------------------
    // (H) Culinary: Fish Frying & Recipes
    // ------------------------------------------------------------------------
    const isFishCookingQuery =
      (queryLower.includes("fish") || queryLower.includes("মাছ")) &&
      (queryLower.includes("fry") ||
        queryLower.includes("cook") ||
        queryLower.includes("recipe") ||
        queryLower.includes("ভাজা") ||
        queryLower.includes("রান্না") ||
        queryLower.includes("মুচমুচে"));

    if (isFishCookingQuery) {
      const topFishScenario =
        (scenariosData as Scenario[]).find((s) => s.id === 1469) ||
        results[0] ||
        null;
      if (topFishScenario) {
        return buildScenarioResponse(topFishScenario, 0.93);
      }
    }

    // ------------------------------------------------------------------------
    // (I) College & University Admissions
    // ------------------------------------------------------------------------
    const isCollegeQuery =
      (queryLower.includes("college") ||
        queryLower.includes("admission") ||
        queryLower.includes("একাদশ") ||
        queryLower.includes("কলেজ")) &&
      (queryLower.includes("choice") ||
        queryLower.includes("চয়েস") ||
        queryLower.includes("ভর্তি") ||
        queryLower.includes("seat"));

    if (isCollegeQuery) {
      const collegeScenario =
        (scenariosData as Scenario[]).find((s) => s.id === 1001) ||
        results[0] ||
        null;
      if (collegeScenario) {
        return buildScenarioResponse(collegeScenario, 0.94);
      }
    }

    // ------------------------------------------------------------------------
    // (J) Stain Removal: Turmeric, Rust & Cloth Stains
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
      if (stainScenario) {
        return buildScenarioResponse(stainScenario, 0.95);
      }
    }

    // ------------------------------------------------------------------------
    // (K) Consumer Goods: Guitar, Oven, Microwave, Furniture
    // ------------------------------------------------------------------------
    const isConsumerGoodsQuery =
      queryLower.includes("guitar") ||
      queryLower.includes("গিটার") ||
      queryLower.includes("oven") ||
      queryLower.includes("microwave") ||
      queryLower.includes("ওভেন") ||
      queryLower.includes("furniture") ||
      queryLower.includes("আসবাবপত্র") ||
      queryLower.includes("টেবিল") ||
      queryLower.includes("table");

    if (isConsumerGoodsQuery) {
      let consumerScenario: Scenario | undefined;
      if (queryLower.includes("guitar") || queryLower.includes("গিটার")) {
        consumerScenario = (scenariosData as Scenario[]).find((s) => s.id === 347);
      } else if (
        queryLower.includes("furniture") ||
        queryLower.includes("আসবাবপত্র") ||
        queryLower.includes("টেবিল") ||
        queryLower.includes("table")
      ) {
        consumerScenario = (scenariosData as Scenario[]).find((s) => s.id === 333);
      } else if (
        queryLower.includes("microwave") ||
        queryLower.includes("oven") ||
        queryLower.includes("ওভেন")
      ) {
        consumerScenario = (scenariosData as Scenario[]).find((s) => s.id === 317 || s.id === 1803);
      }
      if (!consumerScenario) {
        consumerScenario = (scenariosData as Scenario[]).find((s) => s.id === 317) || results[0];
      }

      if (consumerScenario) {
        return buildScenarioResponse(consumerScenario, 0.95);
      }
    }

    // ------------------------------------------------------------------------
    // (L) Taxes, e-TIN & Freelance Remittances
    // ------------------------------------------------------------------------
    const isTaxQuery =
      queryLower.includes("tax") ||
      queryLower.includes("ট্যাক্স") ||
      queryLower.includes("tin") ||
      queryLower.includes("টি-আই-এন") ||
      queryLower.includes("e-tin") ||
      queryLower.includes("কর") ||
      queryLower.includes("remittance") ||
      queryLower.includes("রেমিট্যান্স");

    if (isTaxQuery) {
      let taxScenario: Scenario | undefined;
      if (
        queryLower.includes("zero") ||
        queryLower.includes("জিরো") ||
        queryLower.includes("ছাত্র") ||
        queryLower.includes("student")
      ) {
        taxScenario = (scenariosData as Scenario[]).find((s) => s.id === 250);
      } else if (
        queryLower.includes("freelance") ||
        queryLower.includes("remittance") ||
        queryLower.includes("ফ্রিল্যান্স") ||
        queryLower.includes("রেমিট্যান্স")
      ) {
        taxScenario = (scenariosData as Scenario[]).find((s) => s.id === 251);
      } else {
        taxScenario = (scenariosData as Scenario[]).find((s) => s.id === 249);
      }
      if (!taxScenario) {
        taxScenario = (scenariosData as Scenario[]).find((s) => s.id === 249) || results[0];
      }

      if (taxScenario) {
        return buildScenarioResponse(taxScenario, 0.95);
      }
    }

    // ------------------------------------------------------------------------
    // (M) Tenancy & Police Verification (CIMS)
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
      if (tenantScenario) {
        return buildScenarioResponse(tenantScenario, 0.95);
      }
    }

    // ------------------------------------------------------------------------
    // 3. Direct High-Confidence Semantic Match
    // ------------------------------------------------------------------------
    if (directMatch && confidence >= 0.40) {
      return buildScenarioResponse(directMatch, confidence);
    }

    // ------------------------------------------------------------------------
    // 4. Multi-Scenario Search Relevance
    // ------------------------------------------------------------------------
    if (results.length > 0 && confidence >= 0.20) {
      return buildScenarioResponse(results[0], confidence, results.slice(1, 5));
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
        guideline: results[0] ? getInDepthGuideline(results[0], langKey) : null,
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
- 🚗 **গাড়ি ও বাইক:** *"ব্যবহৃত গাড়ি কেনার নিয়ম"*, *"পুরাতন মোটরসাইকেল চেকলিস্ট"*, *"বিআরটিএ মালিকানা বদল"*
- 📜 **জমি ও ফ্ল্যাট:** *"জমি কেনার আগে দলিল পরীক্ষা"*, *"অনলাইনে পর্চা ও নামজারি যাচাই"*, *"খাজনা পরিশোধ"*
- 📱 **মোবাইল ও গ্যাজেট:** *"মোবাইল হারিয়ে গেলে অনলাইন জিডি"*, *"ব্যবহৃত জিপিইউ বা ল্যাপটপ পরীক্ষা"*
- 🐟 **খাবার ও রান্না:** *"মাছে ফরমালিন পরীক্ষা"*, *"মুচমুচে মাছ ভাজা"*, *"তরকারির অতিরিক্ত লবণ কমানো"*
- 🎓 **ভর্তি ও বিদেশ যাত্রা:** *"একাদশ শ্রেণিতে কলেজ চয়েস"*, *"উচ্চশিক্ষায় বিদেশ ও স্টুডেন্ট ভিসা"*
- 👔 **গৃহস্থালি ও কর:** *"হলুদের জেদি দাগ দূর করা"*, *"ই-টিন খুলে জিরো ট্যাক্স রিটার্ন"*`
      : `I searched across our database of 2,000 real-world life scenarios, but didn't find an exact match for "${rawMessage}".

**Try asking about:**
- 🚗 **Vehicles:** *"Used car inspection checklist"*, *"Pre-owned motorcycle test"*, *"BRTA ownership transfer"*
- 📜 **Property & Deeds:** *"How to check land documents before buying"*, *"Online e-Porcha & mutation"*, *"Land tax"*
- 📱 **Mobile & Tech:** *"Online police GD for lost phone"*, *"Testing used GPU or laptop battery"*
- 🍳 **Food & Kitchen:** *"Detecting formalin in fish"*, *"Crispy fish fry technique"*, *"Fixing over-salted curry"*
- 🎓 **Admissions & Abroad:** *"College admission choice strategy"*, *"Higher education abroad & student visa"*
- 👔 **Home & Taxes:** *"Removing turmeric stains"*, *"Filing zero tax return online with e-TIN"*`;

    const fallbackVoice = isBangla
      ? "আপনার প্রশ্নের হুবহু কোনো গাইড পাওয়া যায়নি। গাড়ি, জমিজমা, ফরমালিন, রান্নার কৌশল বা ভর্তি নিয়ে প্রশ্ন করতে পারেন।"
      : "I could not find an exact match in our 2,000 verified guides. Try asking about car inspection, land documents, police GD, or cooking techniques.";

    return NextResponse.json({
      reply: fallbackReply,
      voiceText: fallbackVoice,
      scenario: null,
      guideline: null,
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
