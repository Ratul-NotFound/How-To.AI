import scenariosData from "@/scenarios_2000.json";

export interface Scenario {
  id: number;
  category: string;
  subcategory: string;
  title: string;
  problem_statement: string;
  what_people_dont_know: string;
  critical_checklist: string;
  primary_risk: string;
}

export interface SearchResult {
  scenario: Scenario;
  score: number;
  matchedTerms: string[];
}

export interface SearchResponse {
  directMatch: Scenario | null;
  confidence: number;
  results: Scenario[];
  suggestedCategories: string[];
  totalMatches: number;
  queryStems: string[];
}

// Purely grammatical filler words to exclude from primary token stems
const GRAMMATICAL_STOP_WORDS = new Set([
  "a", "an", "the", "in", "on", "at", "by", "for", "with", "about", "to", "of",
  "is", "are", "was", "were", "be", "been", "being", "do", "does", "did",
  "i", "me", "my", "you", "your", "we", "our", "it", "its", "they", "them",
  "what", "how", "when", "where", "why", "which", "who", "whom",
  "can", "could", "should", "would", "shall", "will", "may", "might", "must",
  "please", "tell", "give", "want", "like", "need", "know", "there", "this", "that"
]);

// Domain-specific bidirectional synonym & concept expansion dictionary
const SYNONYMS: Record<string, string[]> = {
  // Automotive & Vehicles
  "car": ["vehicle", "automobile", "sedan", "gari", "auto", "reconditioned", "chassis", "motor", "engine", "গাড়ি", "গাড়ি"],
  "cars": ["vehicle", "automobile", "sedan", "gari", "auto", "গাড়ি", "গাড়ি"],
  "vehicle": ["car", "automobile", "transport", "motor", "gari", "গাড়ি", "গাড়ি"],
  "vehicles": ["car", "automobile", "transport", "motor", "gari", "গাড়ি", "গাড়ি"],
  "used": ["second-hand", "reconditioned", "pre-owned", "old", "পুরাতন", "ব্যবহৃত"],
  "second-hand": ["used", "reconditioned", "pre-owned", "পুরাতন"],
  "reconditioned": ["used", "second-hand", "japan", "রিকন্ডিশন"],
  "inspection": ["inspect", "check", "verif", "test", "examin", "audit", "যাচাই", "পরীক্ষা"],
  "inspect": ["check", "verif", "test", "examin", "inspection", "যাচাই", "পরীক্ষা"],
  "checklist": ["guide", "steps", "list", "procedure", "points", "চেকলিস্ট", "নিয়ম"],
  "buy": ["purchase", "buying", "purchasing", "acquir", "কেনা", "ক্রয়"],
  "buying": ["purchase", "purchasing", "buy", "acquir", "কেনা", "ক্রয়"],
  "purchase": ["buy", "buying", "acquir", "কেনা", "ক্রয়"],
  "গাড়ি": ["car", "vehicle", "automobile", "used", "inspection", "chassis", "engine", "brta"],
  "গাড়ি": ["car", "vehicle", "automobile", "used", "inspection", "chassis", "engine", "brta"],

  // Land, Property & Legal Documents
  "land": ["property", "plot", "jami", "porcha", "khatian", "mutation", "dalil", "holding", "জমি", "প্লট"],
  "plot": ["land", "property", "jami", "প্লট", "জমি"],
  "flat": ["apartment", "building", "housing", "ফ্ল্যাট"],
  "apartment": ["flat", "housing", "property", "ফ্ল্যাট"],
  "documents": ["doc", "porcha", "khatian", "dalil", "deed", "papers", "record", "দলিল", "কাগজপত্র"],
  "document": ["doc", "porcha", "khatian", "dalil", "deed", "papers", "record", "দলিল", "কাগজপত্র"],
  "deed": ["dalil", "document", "khatiyan", "দলিল"],
  "mutation": ["namjari", "porcha", "khatian", "নামজারি"],
  "জমি": ["land", "property", "plot", "dalil", "khatian", "porcha", "mutation", "deed"],
  "দলিল": ["dalil", "deed", "land", "document", "khatian"],
  "খতিয়ান": ["khatian", "porcha", "land", "mutation", "record"],
  "পর্চা": ["porcha", "khatian", "land", "record"],
  "নামজারি": ["mutation", "namjari", "land", "khatian"],

  // Culinary & Food Safety
  "fish": ["mach", "seafood", "fillet", "fishg", "ilish", "rui", "মাছ"],
  "fry": ["frying", "fried", "crispy", "pan-fry", "deep-fry", "ভাজা", "মুচমুচে"],
  "cooking": ["recipe", "cook", "culinary", "food", "kitchen", "prep", "রান্না"],
  "recipe": ["cook", "cooking", "make", "prepare", "culinary", "dish", "রেসিপি"],
  "make": ["cook", "prepare", "create", "recipe", "বানানো", "রান্না"],
  "formalin": ["chemical", "adulteration", "fish", "preservative", "toxic", "ফরমালিন"],
  "adulteration": ["fake", "chemical", "toxic", "poison", "test", "ভেজাল"],
  "মাছ": ["fish", "fillet", "formalin", "fry", "mach"],
  "মাছের": ["fish", "fillet", "formalin", "fry", "mach"],
  "ফরমালিন": ["formalin", "chemical", "adulteration", "fish", "toxic"],
  "রান্না": ["cooking", "cook", "recipe", "kitchen", "culinary"],
  "ভাজা": ["fry", "fried", "crispy", "cooking"],

  // Tech & Gadgets
  "phone": ["mobile", "smartphone", "device", "imei", "lost", "ফোন", "মোবাইল"],
  "mobile": ["phone", "smartphone", "device", "imei", "ফোন", "মোবাইল"],
  "gpu": ["graphics", "card", "nvidia", "rtx", "mining"],
  "graphics": ["gpu", "card", "display"],
  "ফোন": ["phone", "mobile", "smartphone", "device", "imei", "lost", "gd"],
  "মোবাইল": ["phone", "mobile", "smartphone", "device", "imei", "lost", "gd"],

  // Education
  "college": ["admission", "hsc", "varsity", "university", "faculty", "institution", "কলেজ"],
  "university": ["varsity", "college", "admission", "undergraduate", "buet", "du", "iba", "medical", "বিশ্ববিদ্যালয়"],
  "admission": ["vorti", "seat", "application", "merit", "exam", "ভর্তি"],
  "ভর্তি": ["admission", "college", "university", "hsc", "varsity"],
  "কলেজ": ["college", "admission", "hsc", "varsity"],

  // Legal & Administration
  "passport": ["travel", "visa", "immigration", "dip", "epassport", "পাসপোর্ট"],
  "police": ["thana", "gd", "fir", "complaint", "officer", "পুলিশ", "থানা"],
  "lost": ["missing", "stolen", "gd", "thana", "report", "হারানো"],
  "জিডি": ["gd", "police", "thana", "lost", "report"],
  "হারানো": ["lost", "missing", "stolen", "gd", "phone", "mobile"],
  "হারিয়ে": ["lost", "missing", "stolen", "gd", "phone", "mobile"],
  "হারাল": ["lost", "missing", "stolen", "gd", "phone", "mobile"],
  "উদ্ধার": ["recover", "track", "find", "lost", "phone"],
  "কেনার": ["buy", "purchase", "buying", "car", "land"],
  "দলিলপত্র": ["dalil", "document", "khatian", "deed"]
};

// Domain category keyword triggers for domain affinity boosts
const CATEGORY_KEYWORDS: Record<string, string[]> = {
  "Vehicles, Transport & Driving": [
    "car", "cars", "vehicl", "auto", "drive", "driv", "brta", "engin", "chassi",
    "odomet", "tyre", "tire", "motorcycl", "bike", "scooter", "second-hand", "recondit",
    "গাড়ি", "গাড়ি", "ড্রাইভিং", "ইঞ্জিন", "বিআরটিএ", "চেসিস", "মালিকানা", "মোটরসাইকেল"
  ],
  "Cooking Techniques & Culinary Troubleshooting": [
    "cook", "culinari", "recip", "fish", "meat", "curri", "fry", "fri", "salt",
    "sauce", "rice", "gravi", "chicken", "beef", "pan", "steak", "crisp",
    "রান্না", "মাছ", "মাংস", "ভাজা", "রেসিপি", "লবণ", "তেল", "মুচমুচে", "বিরিয়ানি"
  ],
  "Food Safety, Adulteration & Nutrition": [
    "formalin", "adulter", "carbid", "chemic", "toxic", "poison", "pesticid", "milk", "oil", "honey",
    "ফরমালিন", "ভেজাল", "খাদ্য", "রাসায়নিক", "বিষাক্ত", "ফল", "দুধ"
  ],
  "Land, Housing & Property": [
    "land", "plot", "flat", "apart", "porcha", "khatian", "mutat", "dalil", "deed", "registri", "sub-registri", "rajuk",
    "জমি", "দলিল", "খতিয়ান", "পর্চা", "নামজারি", "খাজনা", "ফ্ল্যাট", "প্লট", "রাজউক"
  ],
  "Education, College Admissions & Academics": [
    "colleg", "univers", "admiss", "varsiti", "buet", "medicin", "medic", "degre", "faculti",
    "কলেজ", "ভর্তি", "বিশ্ববিদ্যালয়", "মেধা", "আসন", "বিজ্ঞান", "কমার্স"
  ],
  "Consumer Tech, Hardware & Gadgets": [
    "gpu", "graphic", "laptop", "comput", "phone", "smartphon", "processor", "ram", "screen", "monitor",
    "ফোন", "মোবাইল", "ল্যাপটপ", "কম্পিউটার"
  ],
  "Home Maintenance, Stain Removal & DIY Hacks": [
    "stain", "leak", "mold", "rust", "paint", "pipe", "drain", "clean",
    "দাগ", "হলুদ", "মরিচা", "পরিষ্কার"
  ],
  "Legal, Civil Rights & Emergency SOPs": [
    "polic", "thana", "gd", "fir", "court", "lawyer", "notari", "legal", "bail",
    "পুলিশ", "জিডি", "থানা", "আইন", "পাসপোর্ট", "ভাড়াটিয়া", "নোটারি"
  ]
};

// Suffix stemmer
export function stemWord(w: string): string {
  const word = w.toLowerCase().trim();
  if (word.length <= 3) return word;

  const suffixes = ["ing", "tion", "tions", "ies", "es", "ed", "ly", "ment", "s"];
  for (const suffix of suffixes) {
    if (word.endsWith(suffix) && word.length - suffix.length >= 3) {
      return word.slice(0, -suffix.length);
    }
  }
  return word;
}

// Levenshtein distance for fuzzy matching
export function levenshtein(s1: string, s2: string): number {
  if (Math.abs(s1.length - s2.length) > 2) return 99;
  if (s1 === s2) return 0;

  const dp: number[][] = Array.from({ length: s1.length + 1 }, () =>
    new Array(s2.length + 1).fill(0)
  );

  for (let i = 0; i <= s1.length; i++) dp[i][0] = i;
  for (let j = 0; j <= s2.length; j++) dp[0][j] = j;

  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }
  return dp[s1.length][s2.length];
}

interface PreprocessedScenario {
  scenario: Scenario;
  titleLower: string;
  subLower: string;
  bodyLower: string;
  titleStems: string[];
  subStems: string[];
  bodyStems: Set<string>;
}

let preprocessedIndex: PreprocessedScenario[] | null = null;
let categoryList: string[] = [];

function initializeIndex() {
  if (preprocessedIndex) return;

  const docs = scenariosData as Scenario[];
  const categories = new Set<string>();

  preprocessedIndex = docs.map((sc) => {
    categories.add(sc.category);

    const titleLower = sc.title.toLowerCase();
    const subLower = sc.subcategory.toLowerCase();
    const bodyLower = `${sc.subcategory} ${sc.problem_statement} ${sc.what_people_dont_know} ${sc.critical_checklist} ${sc.primary_risk}`.toLowerCase();

    const cleanWords = (txt: string) =>
      txt
        .replace(/[^\w\s\u0980-\u09FF]/g, " ")
        .split(/\s+/)
        .filter((w) => w.length >= 2);

    const titleStems = cleanWords(titleLower).map(stemWord);
    const subStems = cleanWords(subLower).map(stemWord);
    const bodyStems = new Set(cleanWords(bodyLower).map(stemWord));

    return {
      scenario: sc,
      titleLower,
      subLower,
      bodyLower,
      titleStems,
      subStems,
      bodyStems,
    };
  });

  categoryList = Array.from(categories);
}

/**
 * Intelligent hybrid semantic & fuzzy search over all 2,000 scenarios
 */
export function searchScenarios(query: string, limit = 10): SearchResponse {
  initializeIndex();
  if (!preprocessedIndex) {
    return { directMatch: null, confidence: 0, results: [], suggestedCategories: [], totalMatches: 0, queryStems: [] };
  }

  const queryLower = query.toLowerCase().trim();
  const rawWords = queryLower
    .replace(/[^\w\s\u0980-\u09FF]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length >= 2);

  if (rawWords.length === 0) {
    return {
      directMatch: null,
      confidence: 0,
      results: preprocessedIndex.slice(0, limit).map((d) => d.scenario),
      suggestedCategories: categoryList.slice(0, 6),
      totalMatches: preprocessedIndex.length,
      queryStems: [],
    };
  }

  // 1. Expand query with stems, synonyms, and typo corrections
  const primaryStems: string[] = [];
  const expandedStems = new Set<string>();

  for (const w of rawWords) {
    if (GRAMMATICAL_STOP_WORDS.has(w)) continue;
    const st = stemWord(w);
    primaryStems.push(st);
    expandedStems.add(st);

    // Expand with synonyms
    if (SYNONYMS[w]) {
      for (const syn of SYNONYMS[w]) {
        expandedStems.add(stemWord(syn));
      }
    }
    if (SYNONYMS[st]) {
      for (const syn of SYNONYMS[st]) {
        expandedStems.add(stemWord(syn));
      }
    }
  }

  // 2. Compute category domain intent affinity
  const categoryBoosts: Record<string, number> = {};
  for (const [cat, kws] of Object.entries(CATEGORY_KEYWORDS)) {
    for (const kw of kws) {
      if (expandedStems.has(kw) || rawWords.some((rw) => rw.startsWith(kw))) {
        categoryBoosts[cat] = (categoryBoosts[cat] || 0) + 25;
      }
    }
  }

  // 3. Score every scenario with strict semantic alignment
  const scoredResults: SearchResult[] = [];

  for (const item of preprocessedIndex) {
    let score = 0;
    const matchedTerms: string[] = [];
    const sc = item.scenario;

    // A. Category domain affinity boost
    if (categoryBoosts[sc.category]) {
      score += categoryBoosts[sc.category];
      matchedTerms.push(`category:${sc.category}`);
    }

    // B. Multi-word phrase matching (2-gram and 3-gram)
    for (let phraseLen = 3; phraseLen >= 2; phraseLen--) {
      for (let i = 0; i <= rawWords.length - phraseLen; i++) {
        const phrase = rawWords.slice(i, i + phraseLen).join(" ");
        if (phrase.length >= 5) {
          if (item.titleLower.includes(phrase)) {
            score += 35 * phraseLen;
            matchedTerms.push(`title_phrase:${phrase}`);
          } else if (item.subLower.includes(phrase)) {
            score += 25 * phraseLen;
            matchedTerms.push(`sub_phrase:${phrase}`);
          } else if (item.bodyLower.includes(phrase)) {
            score += 15 * phraseLen;
            matchedTerms.push(`body_phrase:${phrase}`);
          }
        }
      }
    }

    // C. Exact title match bonus
    if (item.titleLower.includes(queryLower) && queryLower.length >= 8) {
      score += 60;
      matchedTerms.push("exact_title");
    }

    // D. Strict Token stem matching
    let matchedStemCount = 0;
    for (const qStem of expandedStems) {
      if (item.titleStems.includes(qStem)) {
        score += 14;
        matchedTerms.push(`title:${qStem}`);
        matchedStemCount++;
      } else if (item.subStems.includes(qStem)) {
        score += 10;
        matchedTerms.push(`sub:${qStem}`);
        matchedStemCount++;
      } else if (item.bodyStems.has(qStem)) {
        score += 3;
        matchedTerms.push(`body:${qStem}`);
        matchedStemCount++;
      } else {
        // Fuzzy match: ONLY for stems of length >= 4 with Levenshtein <= 1
        if (qStem.length >= 4) {
          for (const tStem of item.titleStems) {
            if (tStem.length >= 4 && levenshtein(qStem, tStem) <= 1) {
              score += 9;
              matchedTerms.push(`fuzzy:${qStem}~${tStem}`);
              matchedStemCount++;
              break;
            }
          }
        }
      }
    }

    // E. Cross-domain penalty: If query strongly indicates a specific domain (e.g. Vehicles)
    // but this scenario is in an unrelated hardware/food category, penalize false partial matches
    if (
      (categoryBoosts["Vehicles, Transport & Driving"] && sc.category === "Consumer Tech, Hardware & Gadgets") ||
      (categoryBoosts["Vehicles, Transport & Driving"] && sc.category === "Food Safety, Adulteration & Nutrition") ||
      (categoryBoosts["Cooking Techniques & Culinary Troubleshooting"] && sc.category === "Pets, Gardening & Agriculture")
    ) {
      score -= 30;
    }

    if (score > 0) {
      scoredResults.push({
        scenario: sc,
        score,
        matchedTerms,
      });
    }
  }

  // Sort descending by score
  scoredResults.sort((a, b) => b.score - a.score);

  const topMatches = scoredResults.slice(0, limit).map((r) => r.scenario);
  const best = scoredResults[0];

  let directMatch: Scenario | null = null;
  let confidence = 0;

  if (best) {
    // Confidence calculation:
    // Scale best score against standard high-confidence benchmark (score ~100 -> 1.0)
    confidence = Math.min(1.0, Number((best.score / 90).toFixed(2)));

    // Direct match criteria:
    // 1. Must score >= 45 points
    // 2. Must clearly dominate or match an exact scenario intent
    if (best.score >= 45 && confidence >= 0.50) {
      directMatch = best.scenario;
    }
  }

  const matchedCategories = Array.from(
    new Set(topMatches.map((s) => s.category))
  ).slice(0, 5);

  return {
    directMatch,
    confidence,
    results: topMatches,
    suggestedCategories: matchedCategories.length > 0 ? matchedCategories : categoryList.slice(0, 5),
    totalMatches: scoredResults.length,
    queryStems: primaryStems,
  };
}

export function getAllCategories(): { name: string; count: number }[] {
  initializeIndex();
  const counts: Record<string, number> = {};
  if (!preprocessedIndex) return [];

  for (const item of preprocessedIndex) {
    counts[item.scenario.category] = (counts[item.scenario.category] || 0) + 1;
  }

  return Object.entries(counts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

export function getScenarioById(id: number): Scenario | null {
  initializeIndex();
  const found = preprocessedIndex?.find((d) => d.scenario.id === id);
  return found ? found.scenario : null;
}
