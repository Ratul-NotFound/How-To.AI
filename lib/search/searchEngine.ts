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
}

// Tokenize text into normalized word stems
function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\w\s\u0980-\u09FF]/g, " ") // Support English and Bengali Unicode
    .split(/\s+/)
    .filter((w) => w.length > 2);
}

// Stop words to ignore in scoring
const STOP_WORDS = new Set([
  "the", "and", "for", "with", "how", "what", "need", "check", "buy", "buying",
  "get", "from", "when", "does", "can", "should", "want", "like", "know", "dont",
  "about", "this", "that", "there", "have", "been", "will", "would", "could"
]);

// Build pre-computed inverted index in memory
interface IndexedDocument {
  scenario: Scenario;
  titleTokens: Set<string>;
  bodyTokens: Set<string>;
  allTokenCounts: Map<string, number>;
}

let indexedDocs: IndexedDocument[] | null = null;
let categoryList: string[] = [];

function initializeIndex() {
  if (indexedDocs) return;

  const docs = scenariosData as Scenario[];
  const categories = new Set<string>();

  indexedDocs = docs.map((sc) => {
    categories.add(sc.category);

    const titleTokens = new Set(tokenize(sc.title).filter((t) => !STOP_WORDS.has(t)));
    const bodyText = `${sc.subcategory} ${sc.problem_statement} ${sc.what_people_dont_know} ${sc.critical_checklist} ${sc.primary_risk}`;
    const rawBody = tokenize(bodyText).filter((t) => !STOP_WORDS.has(t));
    const bodyTokens = new Set(rawBody);

    const counts = new Map<string, number>();
    for (const t of titleTokens) {
      counts.set(t, (counts.get(t) || 0) + 3); // 3x weight for title terms
    }
    for (const t of rawBody) {
      counts.set(t, (counts.get(t) || 0) + 1);
    }

    return {
      scenario: sc,
      titleTokens,
      bodyTokens,
      allTokenCounts: counts,
    };
  });

  categoryList = Array.from(categories);
}

/**
 * High-speed hybrid search over all 2,000 scenarios
 * Execution time: ~5ms - 15ms
 */
export function searchScenarios(query: string, limit = 10): SearchResponse {
  initializeIndex();
  if (!indexedDocs) {
    return { directMatch: null, confidence: 0, results: [], suggestedCategories: [], totalMatches: 0 };
  }

  const queryTokens = tokenize(query).filter((t) => !STOP_WORDS.has(t));
  if (queryTokens.length === 0) {
    return {
      directMatch: null,
      confidence: 0,
      results: indexedDocs.slice(0, limit).map((d) => d.scenario),
      suggestedCategories: categoryList.slice(0, 6),
      totalMatches: indexedDocs.length,
    };
  }

  const scoredResults: SearchResult[] = [];
  const queryLower = query.toLowerCase().trim();

  for (const doc of indexedDocs) {
    let score = 0;
    const matchedTerms: string[] = [];

    // Exact title substring bonus
    if (doc.scenario.title.toLowerCase().includes(queryLower)) {
      score += 50;
      matchedTerms.push(queryLower);
    }

    // Token matching
    for (const q of queryTokens) {
      if (doc.titleTokens.has(q)) {
        score += 8;
        matchedTerms.push(q);
      } else if (doc.bodyTokens.has(q)) {
        score += 2;
        matchedTerms.push(q);
      } else {
        // Partial prefix match
        for (const t of doc.titleTokens) {
          if (t.startsWith(q) || q.startsWith(t)) {
            score += 4;
            matchedTerms.push(t);
            break;
          }
        }
      }
    }

    // Category / Subcategory relevance
    if (queryLower.includes(doc.scenario.category.toLowerCase())) {
      score += 15;
    }
    if (queryLower.includes(doc.scenario.subcategory.toLowerCase())) {
      score += 10;
    }

    if (score > 0) {
      scoredResults.push({
        scenario: doc.scenario,
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
    // Calculate normalized confidence (0 to 1)
    confidence = Math.min(1.0, best.score / 25);
    // Direct match threshold
    if (confidence >= 0.55 || best.score >= 16) {
      directMatch = best.scenario;
    }
  }

  // Extract matching categories
  const matchedCategories = Array.from(
    new Set(topMatches.map((s) => s.category))
  ).slice(0, 5);

  return {
    directMatch,
    confidence: Number(confidence.toFixed(2)),
    results: topMatches,
    suggestedCategories: matchedCategories.length > 0 ? matchedCategories : categoryList.slice(0, 5),
    totalMatches: scoredResults.length,
  };
}

export function getAllCategories(): { name: string; count: number }[] {
  initializeIndex();
  const counts: Record<string, number> = {};
  if (!indexedDocs) return [];

  for (const doc of indexedDocs) {
    counts[doc.scenario.category] = (counts[doc.scenario.category] || 0) + 1;
  }

  return Object.entries(counts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

export function getScenarioById(id: number): Scenario | null {
  initializeIndex();
  const found = indexedDocs?.find((d) => d.scenario.id === id);
  return found ? found.scenario : null;
}
