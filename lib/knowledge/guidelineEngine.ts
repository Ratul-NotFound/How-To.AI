import { Scenario } from "@/lib/search/searchEngine";
import { Language } from "@/lib/i18n";

export interface DetailedStep {
  stepNumber: number;
  title: string;
  description: string;
  proTip?: string;
}

export interface DocumentItem {
  name: string;
  whereToGet: string;
  purpose: string;
}

export interface OfficialResource {
  name: string;
  urlOrContact: string;
  description: string;
}

export interface ComprehensiveGuideline {
  scenarioId: number;
  title: string;
  category: string;
  subcategory: string;
  overview: string;
  steps: DetailedStep[];
  requiredDocuments: DocumentItem[];
  expertSecrets: string[];
  primaryRiskAndMitigation: {
    risk: string;
    prevention: string;
  };
  officialResources: OfficialResource[];
}

// Deeply curated domain guidelines for major life categories
const CURATED_GUIDELINES: Record<string, (scenario: Scenario, isBangla: boolean) => ComprehensiveGuideline> = {
  // --------------------------------------------------------------------------
  // 1. LAND, HOUSING & PROPERTY
  // --------------------------------------------------------------------------
  land: (scenario, isBangla) => ({
    scenarioId: scenario.id,
    title: isBangla
      ? "জমি ও ফ্ল্যাট ক্রয়ের পূর্ণাঙ্গ আইনি ও সরেজমিন যাচাইকরণ গাইডলাইন"
      : "Comprehensive Land & Property Due Diligence & Purchase SOP",
    category: isBangla ? "জমি, ফ্ল্যাট ও সম্পত্তি" : "Land, Housing & Property",
    subcategory: scenario.subcategory,
    overview: isBangla
      ? "জমি ক্রয়ের বায়না করার পূর্বে নথিপত্র এবং সরেজমিন দখল পুঙ্খানুপুঙ্খ যাচাই করা অপরিহার্য। একটিমাত্র ভুল বা অনুপস্থিত দলিলের কারণে সারাজীবনের সঞ্চয় ও জমির মালিকানা দুটিই চিরতরে হারাতে হতে পারে।"
      : "Before executing any deed or advancing funds for real estate, you must conduct strict documentary and physical due diligence across title continuity, mutation, and government surveys.",
    steps: isBangla
      ? [
          {
            stepNumber: 1,
            title: "বিগত ৩০ বছরের বায়া দলিল চেইন (Chain of Deeds) যাচাই",
            description: "মূল সিএস/এসএ জরিপের মূল খতিয়ানভুক্ত মালিক থেকে শুরু করে বর্তমান বিক্রেতা পর্যন্ত প্রতিবার হস্তান্তরের বায়া দলিলগুলো ক্রমানুসারে মিলিয়ে দেখুন। কোনো একটি হস্তান্তর দলিলের অভাব থাকলে মালিকানা অসম্পূর্ণ থেকে যায়।",
            proTip: "বিক্রেতার ফটোকপির ওপর ভরসা না করে সাব-রেজিস্ট্রি থেকে দলিলের নকল (Certified Copy) তুলে যাচাই করুন।"
          },
          {
            stepNumber: 2,
            title: "ডিসি রেকর্ড রুম থেকে মূল খতিয়ানসমূহ পরীক্ষা",
            description: "জেলা প্রশাসকের (ডিসি) রেকর্ড রুম থেকে সিএস (১৯৪০), এসএ (১৯৬২), আরএস (১৯৮৫) এবং সিটি/বিএস (২০০০+) খতিয়ানের সার্টিফাইড পর্চা তুলুন। দাগ নম্বর ও খতিয়ান নম্বরের মিল আছে কিনা তা যাচাই করুন।",
            proTip: "জমিটি সরকারি খাস, অর্পিত (Vested Property) বা ওয়াকফ তালিকাভুক্ত কিনা তা ডিসি অফিসে নিশ্চিত হোন।"
          },
          {
            stepNumber: 3,
            title: "হালনাগাদ ই-নামজারি (Mutation) ও ডিসিআর যাচাই",
            description: "সহকারী কমিশনার (ভূমি) অফিস থেকে বিক্রেতার নিজ নামে নামজারি খতিয়ান ও ডিসিআর (ডুপ্লিকেট কার্বন রসিদ) রসিদ যাচাই করুন। ই-নামজারি খতিয়ান অনলাইনে mutation.land.gov.bd তে ট্র্যাক করা যায়।",
            proTip: "নামজারির প্রস্তাবিত খতিয়ান এবং চূড়ান্ত ডিসিআর রসিদে উল্লেখিত খতিয়ান নম্বর এক কিনা দেখুন।"
          },
          {
            stepNumber: 4,
            title: "অনলাইন ভূমি উন্নয়ন কর (ই-খাজনা) দাখিলা যাচাই",
            description: "ldtax.gov.bd তে গিয়ে সবশেষ চলতি অর্থবছরের খাজনা পরিশোধের ডিজিটাল দাখিলা যাচাই করুন। কোনো বকেয়া খাজনা থাকলে জমি রেজিস্ট্রি করা আইনত সম্ভব নয়।",
            proTip: "দাখিলার কিউআর কোড স্ক্যান করে সরকারি ভূমি পোর্টালের মূল তথ্যের সাথে মিলিয়ে নিন।"
          },
          {
            stepNumber: 5,
            title: "সাব-রেজিস্ট্রি অফিসে ১২ বছরের দায়মুক্তি সনদ (NEC) তল্লাশি",
            description: "জমির সংশ্লিষ্ট সাব-রেজিস্ট্রি অফিসে গত ১২ বছরের রেকর্ড তল্লাশি দিয়ে নন-এনকমব্রান্স সার্টিফিকেট (NEC) নিন। জমিটি কোনো ব্যাংকে মর্টগেজ রাখা হয়েছে কিনা বা পাওয়ার অব অ্যাটর্নি দেওয়া আছে কিনা তা নিশ্চিত হোন।",
            proTip: "ব্যাংক ঋণের জন্য জমি গোপনে বন্ধক থাকলে দায়মুক্তি তল্লাশিতেই তা ধরা পড়বে।"
          },
          {
            stepNumber: 6,
            title: "সরেজমিন আমিন দ্বারা জমি পরিমাপ ও সীমানা নির্ধারণ",
            description: "সরকারি লাইসেন্সধারী আমিন এনে মৌজা নকশা (Sheet Map) অনুযায়ী দাগের সীমানা ও পরিমাপ মেপে নিন। সীমানা পিলার স্থাপন করে প্রতিবেশীদের কাছে বিক্রেতার আসল দখল সম্পর্কে জানুন।",
            proTip: "কাগজে ১০ শতাংশ থাকলেও সরেজমিনে যদি ৮ শতাংশ থাকে, তবে আপনি পরবর্তীতে দখলে জটিলতায় পড়বেন।"
          },
        ]
      : [
          {
            stepNumber: 1,
            title: "Trace 30-Year Chain of Title Deeds (Baya Dalil)",
            description: "Examine chronological ownership continuity from the original CS/SA survey record owner down to the current seller with no missing transmission deeds.",
            proTip: "Always obtain certified copies from the Sub-Registry Office rather than trusting seller photocopies."
          },
          {
            stepNumber: 2,
            title: "Verify Certified Khatians at DC Record Room",
            description: "Pull certified records of CS (1940), SA (1962), RS (1985), and City/BS surveys from the Deputy Commissioner's record vault. Confirm Dag and Khatian numbers match seamlessly.",
            proTip: "Check that the parcel is not flagged as Khas (government land), Abandoned, or Waqf property."
          },
          {
            stepNumber: 3,
            title: "Validate e-Mutation (Namjari) & DCR Receipts",
            description: "Ensure the seller holds an approved mutation khatian in their own name from the AC Land office, backed by an official Duplicate Carbon Receipt (DCR).",
            proTip: "Confirm the serial number matches online records at mutation.land.gov.bd."
          },
          {
            stepNumber: 4,
            title: "Inspect Up-to-Date Land Tax (e-Khajna)",
            description: "Verify digital land development tax payment on ldtax.gov.bd for the current fiscal year to ensure zero pending arrears.",
            proTip: "Scan the QR code on the digital tax receipt to authenticate it against Ministry servers."
          },
          {
            stepNumber: 5,
            title: "Run a 12-Year Nil Search for Non-Encumbrance Certificate (NEC)",
            description: "Commission a formal 12-year Nil Search at the local Sub-Registry office to ensure the land has not been mortgaged to a bank or sold under Power of Attorney.",
            proTip: "Bank mortgages and prior uncancelled deeds are revealed in the search report."
          },
          {
            stepNumber: 6,
            title: "Commission a Physical Land Survey using Mouza Sheet Maps",
            description: "Hire a licensed surveyor (Amin) to demarcate exact boundaries and acreage using the official Mouza map, cross-referencing with neighboring holdings.",
            proTip: "Physical possession on the ground is supreme; never purchase land with disputed boundaries."
          },
        ],
    requiredDocuments: isBangla
      ? [
          { name: "মূল বায়া দলিলসমূহ (বিগত ৩০ বছর)", whereToGet: "বিক্রেতা ও সাব-রেজিস্ট্রি অফিস", purpose: "মালিকানার ধারাবাহিকতা ও স্বত্ব যাচাই" },
          { name: "সিএস, এসএ, আরএস ও সিটি খতিয়ানের নকল", whereToGet: "জেলা প্রশাসকের (ডিসি) রেকর্ড রুম", purpose: "সরকারি জরিপে জমির মূল রেকর্ড ও দাগ নিশ্চিতকরণ" },
          { name: "ই-নামজারি খতিয়ান ও ডিসিআর রসিদ", whereToGet: "সহকারী কমিশনার (ভূমি) অফিস / mutation.land.gov.bd", purpose: "বিক্রেতার নামে জমি পৃথককরণ নিশ্চিত করা" },
          { name: "হালনাগাদ ভূমি উন্নয়ন কর দাখিলা (ই-খাজনা)", whereToGet: "ldtax.gov.bd / ইউনিয়ন ভূমি অফিস", purpose: "সরকারি রাজস্ব বকেয়ামুক্ত নিশ্চিতকরণ" },
          { name: "দায়মুক্তি সনদ (NEC / তল্লাশি রসিদ)", whereToGet: "সংশ্লিষ্ট সাব-রেজিস্ট্রি অফিস", purpose: "ব্যাংক বন্ধক বা পাওয়ার অব অ্যাটর্নি মুক্ত প্রমাণ" },
          { name: "মৌজা নকশা (Sheet Map)", whereToGet: "ভূমি রেকর্ড ও জরিপ অধিদপ্তর (DLRS) / ডিসি অফিস", purpose: "সরেজমিন সীমানা ও দাগ চিহ্নিতকরণ" },
        ]
      : [
          { name: "Original Chain of Deeds (30 Years)", whereToGet: "Seller & Sub-Registry Office", purpose: "Proves unbroken succession of ownership title" },
          { name: "Certified CS, SA, RS & BS Khatians", whereToGet: "DC Office Record Room", purpose: "Validates historical land survey registrations" },
          { name: "e-Mutation Khatian & DCR Receipt", whereToGet: "AC Land Office / mutation.land.gov.bd", purpose: "Proves current seller is the mutated legal owner" },
          { name: "Up-to-Date Land Tax (e-Khajna) Dakhila", whereToGet: "ldtax.gov.bd / Union Land Office", purpose: "Confirms zero outstanding government land taxes" },
          { name: "Non-Encumbrance Certificate (NEC)", whereToGet: "Sub-Registry Office", purpose: "Confirms land is free of bank mortgages and prior deeds" },
          { name: "Certified Mouza Sheet Map", whereToGet: "DLRS / DC Office Land Record Vault", purpose: "Accurate physical land boundary demarcation" },
        ],
    expertSecrets: isBangla
      ? [
          "কখনোই পুরো টাকা পরিশোধ করে বায়না করবেন না; দলিলের শতভাগ সত্যতা নিশ্চিত না হওয়া পর্যন্ত বড় অঙ্কের লেনদেন স্থগিত রাখুন।",
          "পাওয়ার অব অ্যাটর্নি দাতার মৃত্যু হলে পাওয়ার স্বয়ংক্রিয়ভাবে বাতিল হয়ে যায়। মূল মালিক জীবিত আছেন কিনা রেজিস্ট্রি করার দিনও নিশ্চিত হোন।",
          "রাস্তা ছাড়া কোনো জমি কিনবেন না। খতিয়ানে রাস্তা থাকার চেয়ে সরেজমিনে চলাচলের পাকা রাস্তা আছে কিনা তা সরাসরি দেখে নিন।",
          "এজমালি (যৌথ) সম্পত্তি থেকে একক কোনো অংশীদার থেকে জমি কেনার আগে সবার বণ্টননামা দলিল (Partition Deed) রেজিস্ট্রি আছে কিনা দেখুন।"
        ]
      : [
          "Never pay substantial token money before completing official DC Record Room and Sub-Registry verification.",
          "A registered Power of Attorney (PoA) terminates upon the death of the principal; confirm the principal is alive immediately before deed execution.",
          "Ensure guaranteed road ingress and egress exists on the ground, not merely as theoretical right of way on a map.",
          "Never purchase land from joint co-sharers (Ejmali) without an officially registered partition deed (Bonton-nama)."
        ],
    primaryRiskAndMitigation: {
      risk: isBangla
        ? "জাল দলিল, ব্যাংকে বন্ধক থাকা জমি বা সরকারি খাস জমি কিনে টাকা ও মালিকানা উভয়ের সম্পূর্ণ ক্ষতি।"
        : "Buying disputed, mortgaged, or fake-deed property resulting in total financial loss and prolonged litigation.",
      prevention: isBangla
        ? "ডিসি রেকর্ড রুম থেকে মূল খতিয়ান, সাব-রেজিস্ট্রিতে ১২ বছরের দায়মুক্তি তল্লাশি এবং স্থানীয় অভিজ্ঞ ভূমি আইনজীবীর পরামর্শ নেওয়া।"
        : "Always commission certified copies from the DC vault, run a 12-year Nil Search, and consult an independent property advocate."
    },
    officialResources: [
      { name: isBangla ? "ভূমি মন্ত্রণালয় সেবা পোর্টাল" : "Ministry of Land Portal", urlOrContact: "https://land.gov.bd", description: isBangla ? "ভূমি সংক্রান্ত সকল সরকারি সেবা" : "Official national land administration portal" },
      { name: isBangla ? "ই-নামজারি আবেদন ও যাচাই" : "e-Mutation Portal", urlOrContact: "https://mutation.land.gov.bd", description: isBangla ? "অনলাইন নামজারি যাচাই ও ডিসিআর" : "Online land mutation and DCR verification" },
      { name: isBangla ? "অনলাইন ভূমি উন্নয়ন কর (ই-খাজনা)" : "Land Tax Portal (e-Khajna)", urlOrContact: "https://ldtax.gov.bd", description: isBangla ? "ডিজিটাল দাখিলা ও খাজনা পরিশোধ" : "Digital land tax receipt and payment verification" },
      { name: isBangla ? "জাতীয় ভূমি সেবা হেল্পলাইন" : "National Land Helpline", urlOrContact: "16122 (টোল-ফ্রি)", description: isBangla ? "সরাসরি ভূমি কর্মকর্তার সাথে পরামর্শ" : "Toll-free land consultation helpline" },
    ]
  }),

  // --------------------------------------------------------------------------
  // 2. VEHICLES & CAR/BIKE INSPECTION
  // --------------------------------------------------------------------------
  vehicle: (scenario, isBangla) => ({
    scenarioId: scenario.id,
    title: isBangla
      ? "ব্যবহৃত গাড়ি ও মোটরসাইকেল কেনার পূর্ণাঙ্গ মাস্টার ইন্সপেকশন ও বিআরটিএ গাইডলাইন"
      : "Used Car & Motorcycle Master Inspection & BRTA Protocol",
    category: isBangla ? "গাড়ি, মোটরসাইকেল ও ড্রাইভিং" : "Vehicles, Transport & Driving",
    subcategory: scenario.subcategory,
    overview: isBangla
      ? "ব্যবহৃত বা রিকন্ডিশন গাড়ি কেনার আগে কেবল বাহ্যিক সৌন্দর্য বা দ্রুত টেস্ট ড্রাইভের ওপর নির্ভর করবেন না। দুর্ঘটনাজনিত ফ্রেম ওয়েল্ডিং, পানিতে ডোবা মরিচা, ওবিডি ফল্ট কোড এবং বিআরটিএ মালিকানার কাগজপত্র চুলচেরা বিশ্লেষণ করতে হবে।"
      : "Purchasing a pre-owned or reconditioned vehicle demands rigorous mechanical, structural, and legal validation to prevent inheriting severe frame damage, flood silt, or title fraud.",
    steps: isBangla
      ? [
          {
            stepNumber: 1,
            title: "চেসিস ও স্ট্রাকচারাল ফ্রেমের ওয়েল্ডিং পরীক্ষা (সবচেয়ে জরুরি)",
            description: "গাড়ির সামনের অ্যাপ্রন, নাট-বল্টুর রঙ এবং পেছনের স্পেয়ার টায়ারের রিমের জায়গাটি দেখুন। হাতুড়ির দাগ, অসম সিল্যান্ট বা নতুন ওয়েল্ডিং থাকলে গাড়িটি বড় ধরনের সড়ক দুর্ঘটনায় পড়েছিল।",
            proTip: "পেইন্ট থিকনেস গেজ মিটার দিয়ে এ/বি/সি পিলার মেপে দেখুন; অতিরিক্ত রঙ থাকলে বুঝতে হবে কোনো অংশ কেটে নতুন জোড়া দেওয়া হয়েছে।"
          },
          {
            stepNumber: 2,
            title: "ইঞ্জিনের কম্প্রেশন ও ব্লু-বাই ধোঁয়া পরীক্ষা",
            description: "ঠান্ডা ইঞ্জিন চালু করে ৫ মিনিট আইডল রাখুন। ইঞ্জিন চালু থাকা অবস্থায় ইঞ্জিন অয়েলের ক্যাপ খুলে দেখুন ভেতর থেকে সাদা বা নীল ধোঁয়া নির্গত হচ্ছে কিনা।",
            proTip: "অয়েল ক্যাপের নিচে দুধের সরের মতো সাদা ফেনা (Milky Emulsion) থাকলে হেড গ্যাসকেট নষ্ট এবং ইঞ্জিনে কুল্যান্ট মিশছে।"
          },
          {
            stepNumber: 3,
            title: "বন্যা বা পানিতে ডোবা (Flood Damage) গাড়ি শনাক্তকরণ",
            description: "সামনের ও পেছনের সিটের কার্পেট তুলে রেলের নাটগুলোতে লালচে মরিচা বা শুকনা নদীর পলি-কাদা আছে কিনা লক্ষ্য করুন। সিটবেল্ট পুরো টেনে নিয়ে শেষ প্রান্তের দাগ পরীক্ষা করুন।",
            proTip: "গাড়ির এসি হিটার মোডে চালিয়ে ভ্যাপসা ভেজা গন্ধ আসে কিনা দেখুন।"
          },
          {
            stepNumber: 4,
            title: "ওবিডি-২ (OBD-2) স্ক্যানার দিয়ে ফল্ট কোড পরীক্ষা",
            description: "ড্যাশবোর্ডের নিচে ওবিডি পোর্টে স্ক্যানার লাগিয়ে ডায়াগনস্টিক ট্রাবল কোড (DTC) পরীক্ষা করুন। অনেক অসৎ বিক্রেতা টেস্ট ড্রাইভের আগে ইঞ্জিনের ওয়ার্নিং লাইট রিসেট করে রাখে।",
            proTip: "স্ক্যানারে 'Readiness Monitors: Incomplete' দেখালে বুঝবেন বিক্রেতা সম্প্রতি কোড মুছে ফেলেছে।"
          },
          {
            stepNumber: 5,
            title: "ট্রান্সমিশন ও গিয়ার শিফটিং টেস্ট ড্রাইভ",
            description: "সিভিটি বা অটোমেটিক গিয়ারবক্সের গাড়ি নিয়ে গতি বাড়ানোর সময় আরপিএম হঠাৎ বাড়ছে কিন্তু গাড়ি এগোচ্ছে না (Slipping) কিনা লক্ষ্য করুন। কোনো ঝাঁকুনি বা বিলম্ব আছে কিনা দেখুন।",
            proTip: "গাড়ি উঁচু ব্রিজে বা চড়াই রাস্তায় থামিয়ে আবার তোলার সময় গিয়ার লক বা ব্যাকস্লাইড করে কিনা পরীক্ষা করুন।"
          },
          {
            stepNumber: 6,
            title: "বিআরটিএ ডাটাবেজে চেসিস ও ইঞ্জিন নম্বর মিলিয়ে নেওয়া",
            description: "গাড়ির ফায়ারওয়ালে খোদাই করা চেসিস নম্বর ও ইঞ্জিন ব্লকে থাকা ইঞ্জিন নম্বর স্মার্ট রেজিস্ট্রেশন কার্ড ও ট্যাক্স টোকেনের সাথে প্রতিটি অক্ষরে অক্ষরে মিলিয়ে নিন।",
            proTip: "ইঞ্জিন বদলানো থাকলে বিআরটিএ-র অনুমোদিত এন্ডোর্সমেন্ট ছাড়া গাড়ি কেনা অবৈধ।"
          },
          {
            stepNumber: 7,
            title: "বিআরটিএ মালিকানা বদল (Ownership Transfer) প্রক্রিয়া সম্পন্ন",
            description: "বিক্রেতা ও ক্রেতার টিও (TO) ও টিটিও (TTO) ফরম পূরণ, নোটারি পাবলিকের এফিডেভিট এবং বিআরটিএ অফিসে ক্রেতার বায়োমেট্রিক দিয়ে মালিকানা বদলের আবেদন জমা দিন।",
            proTip: "কেবল স্ট্যাম্পের চুক্তিনামায় গাড়ি নেবেন না; বিআরটিএ-তে অফিশিয়াল বায়োমেট্রিক ছাড়া আইনত আপনি গাড়ির মালিক নন।"
          }
        ]
      : [
          {
            stepNumber: 1,
            title: "Inspect Chassis & Structural Frame Alignment",
            description: "Examine unibody crumple zones, front apron welds, and spare-tire wells. Non-factory sealant, wrinkle lines, or hammer marks indicate reconstructive crash repairs.",
            proTip: "Use a magnetic paint thickness gauge across pillars to detect body filler."
          },
          {
            stepNumber: 2,
            title: "Verify Engine Compression & Blow-By Gas",
            description: "Start engine cold and observe idle. Unscrew oil filler cap; escaping blue or white smoke indicates worn piston rings and severe blow-by.",
            proTip: "Milky mayonnaise emulsion under the oil cap signals head gasket rupture."
          },
          {
            stepNumber: 3,
            title: "Inspect for Flood & Submersion Water Damage",
            description: "Pull floor carpeting and examine seat track bolts for rust and dried silt. Fully extend seatbelts to check for high-water mold lines.",
            proTip: "Run HVAC on full heat; a musty mildew stench reveals saturated under-carpet insulation."
          },
          {
            stepNumber: 4,
            title: "Perform OBD-2 Electronic Diagnostic Scan",
            description: "Plug in an OBD-2 scanner to detect stored and pending diagnostic trouble codes (DTCs). Unscrupulous sellers clear check-engine lights before viewings.",
            proTip: "If readiness monitors report 'Not Ready', codes were wiped recently to mask defects."
          },
          {
            stepNumber: 5,
            title: "Evaluate Transmission Slipping under Acceleration",
            description: "Test CVT / Automatic gear engagement. Accelerate firmly up an incline; engine RPM flare without proportional speed gain indicates slipping clutch packs.",
            proTip: "Listen for harsh clunks when shifting from Park to Reverse."
          },
          {
            stepNumber: 6,
            title: "Match Chassis & Engine Stamps against BRTA Smart Card",
            description: "Physically verify metal stamped chassis numbers on the firewall and engine block stamping against the official registration card and Tax Token.",
            proTip: "Unendorsed engine replacements render the vehicle illegal and unregisterable."
          },
          {
            stepNumber: 7,
            title: "Execute Formal BRTA Ownership Transfer",
            description: "Submit Form TO/TTO, Notary affidavit, and complete biometric enrollment at the designated BRTA circle office.",
            proTip: "Never rely on power of attorney or stamped informal agreements for vehicle title."
          }
        ],
    requiredDocuments: isBangla
      ? [
          { name: "মূল স্মার্ট রেজিস্ট্রেশন কার্ড", whereToGet: "বিক্রেতা / বিআরটিএ", purpose: "গাড়ির বৈধ আইনি রেজিস্ট্রেশন প্রমাণ" },
          { name: "হালনাগাদ ট্যাক্স টোকেন ও ফিটনেস সনদ", whereToGet: "বিক্রেতা / বিআরটিএ সার্ভিস পোর্টাল", purpose: "সড়কে চলাচলের বৈধতা ও সরকারি রাজস্ব পরিশোধ" },
          { name: "মালিকানা বদল ফরম (TO ও TTO)", whereToGet: "বিআরটিএ ওয়েবসাইট / সার্কেল অফিস", purpose: "সরকারি মালিকানা স্থানান্তরের আবেদন" },
          { name: "বিক্রেতার জাতীয় পরিচয়পত্র (NID) ও ছবি", whereToGet: "বিক্রেতা", purpose: "মালিকানা স্থানান্তরে ক্রেতা-বিক্রেতা শনাক্তকরণ" },
          { name: "নোটারি পাবলিক বিক্রয় এফিডেভিট (৩০০ টাকার স্ট্যাম্প)", whereToGet: "নোটারি পাবলিক অ্যাডভোকেট", purpose: "হস্তান্তরের আইনি হলফনামা" },
          { name: "জাপানি অকশন শিট (রিকন্ডিশন গাড়ির ক্ষেত্রে)", whereToGet: "বিক্রেতা / JAAI / USS পোর্টাল", purpose: "প্রকৃত গ্রেড, অ্যাক্সিডেন্ট রেকর্ড ও মিটার রিডিং যাচাই" },
        ]
      : [
          { name: "Original Smart Registration Card", whereToGet: "Seller / BRTA", purpose: "Proof of vehicle legal registration and title" },
          { name: "Up-to-Date Tax Token & Fitness Certificate", whereToGet: "Seller / BRTA Portal", purpose: "Roadworthiness validity and tax compliance" },
          { name: "Forms TO & TTO (Transfer of Ownership)", whereToGet: "BRTA Circle Office / bsp.brta.gov.bd", purpose: "Official title transfer application" },
          { name: "Seller NID & Biometric Identification", whereToGet: "Seller", purpose: "Identity authentication for ownership transfer" },
          { name: "Notarized Sale Affidavit (BDT 300 Stamp)", whereToGet: "Notary Public Advocate", purpose: "Legal sale confirmation contract" },
          { name: "Japanese Auction Sheet (Reconditioned Cars)", whereToGet: "JAAI / USS / Auction Portals", purpose: "Verifies genuine auction grade and true mileage" },
        ],
    expertSecrets: isBangla
      ? [
          "গাড়ির ওডোমিটার ডিজিটাল হলেও তা বিশেষ সফটওয়্যার দিয়ে ৫০,০০০ কিমি কমিয়ে ফেলা সম্ভব; ব্রেক প্যাডেল ও স্টিয়ারিং হুইলের ক্ষয় দেখে আসল ব্যবহার বুঝুন।",
          "টেস্ট ড্রাইভ সর্বদা ঠান্ডা ইঞ্জিন দিয়ে শুরু করুন; অনেক গাড়ি ইঞ্জিন গরম থাকলে ধোঁয়া দেয় না বা মিসফায়ার করে না।",
          "হাইব্রিড গাড়ির ব্যাটারি হেলথ জানতে ওবিডি অ্যাপ (যেমন Hybrid Assistant) দিয়ে সেল ভোল্টেজ পরীক্ষা করুন; যেকোনো একটি সেলের পার্থক্য ০.২ ভোল্টের বেশি হলে ব্যাটারি দ্রুত নষ্ট হবে।",
          "জাপানি অকশন শিটে 'R' বা 'RA' গ্রেড থাকলে বুঝবেন গাড়িটি বড় দুর্ঘটনায় পড়ে মেরামতের পর রং করা হয়েছে।"
        ]
      : [
          "Digital odometers can easily be rolled back; inspect steering wheel wear, pedal rubber erosion, and seat bolster sagging for true mileage.",
          "Always test drive from a dead cold engine; cold starts expose failing starters, timing chain rattle, and compression smoke.",
          "For hybrid vehicles, run an OBD cell voltage delta test; differences exceeding 0.2V signal failing battery cells.",
          "Japanese auction sheet grades 'R' or 'RA' explicitly denote repaired accident damage."
        ],
    primaryRiskAndMitigation: {
      risk: isBangla
        ? "বড় দুর্ঘটনায় কাটা জোড়া দেওয়া গাড়ি বা ইঞ্জিন সমস্যাযুক্ত গাড়ি কিনে আর্থিক লোকসান ও রাস্তায় জীবননাশের ঝুঁকি।"
        : "Purchasing a structurally damaged or flood-ruined car resulting in catastrophic failure and worthless resale.",
      prevention: isBangla
        ? "পেইন্ট গেজ দিয়ে চেসিস পরীক্ষা, ওবিডি-২ স্ক্যানিং এবং পেশাদার থার্ড-পার্টি মেকানিক দ্বারা পূর্ণ ইন্সপেকশন করা।"
        : "Always perform a pre-purchase diagnostic scan, verify chassis paint depth, and check BRTA title history."
    },
    officialResources: [
      { name: isBangla ? "বিআরটিএ সেবা পোর্টাল (BSP)" : "BRTA Service Portal", urlOrContact: "https://bsp.brta.gov.bd", description: isBangla ? "মালিকানা যাচাই, ফিটনেস ও ফি পরিশোধ" : "Vehicle verification, fitness, and tax payment" },
      { name: isBangla ? "বিআরটিএ ডিজিটাল ডাটাবেজ যাচাই" : "BRTA SMS Verification", urlOrContact: "SMS: BRTA <space> D <space> Metro-Class-Number to 26969", description: isBangla ? "এসএমএসের মাধ্যমে গাড়ির আসল তথ্য যাচাই" : "Quick SMS verification of registered car details" },
    ]
  }),

  // --------------------------------------------------------------------------
  // 3. LOST PROPERTY, PHONE & ONLINE POLICE GD
  // --------------------------------------------------------------------------
  phone: (scenario, isBangla) => ({
    scenarioId: scenario.id,
    title: isBangla
      ? "মোবাইল ফোন ও জরুরি দলিল হারানো: তাৎক্ষণিক ৪-ধাপের এসওপি ও অনলাইন জিডি"
      : "Lost Smartphone & Document Emergency SOP and Online Police GD",
    category: isBangla ? "সাইবার নিরাপত্তা ও প্রতারণা রোধ" : "Emergencies, Cyber Security & Scams",
    subcategory: scenario.subcategory,
    overview: isBangla
      ? "মোবাইল ফোন হারিয়ে গেলে বা ছিনতাই হলে প্রথম কয়েক ঘণ্টাই অত্যন্ত সংকটপূর্ণ। সিম কার্ড দিয়ে চোর যাতে বিকাশ, নগদ বা ব্যাংক অ্যাকাউন্টের ওটিপি চুরি করতে না পারে, সেজন্য তাৎক্ষণিক ব্যবস্থা নিতে হবে।"
      : "Losing a smartphone creates immediate financial and identity theft threats. Rapid SIM suspension, remote wiping, and official Police GD submission must be executed within minutes.",
    steps: isBangla
      ? [
          {
            stepNumber: 1,
            title: "সিম কার্ড তাৎক্ষণিক সাময়িক ব্লক বা রিপ্লেসমেন্ট করা (সবচেয়ে জরুরি)",
            description: "সংশ্লিষ্ট মোবাইল অপারেটরের কাস্টমার কেয়ারে অন্য ফোন থেকে ফোন দিয়ে সিমটি সাময়িকভাবে বন্ধ করুন। এর ফলে চোর আপনার ফোনে আসা বিকাশ, নগদ, ফেসবুক বা ব্যাংকের ওটিপি দেখতে পারবে না।",
            proTip: "গ্রামীণফোন: ১২১, বাংলালিংক: ১২১, রবি/এয়ারটেল: ১২১, টেলিটক: ১২১ নম্বরে কল করুন।"
          },
          {
            stepNumber: 2,
            title: "ফাইন্ড মাই ডিভাইস (Find My Device) দিয়ে রিমোট লক বা ডেটা মুছে ফেলা",
            description: "গুগলের 'Find My Device' (android.com/find) বা অ্যাপলের 'iCloud Find My' পোর্টালে লগইন করে দূর থেকেই ফোনের স্ক্রিন পাসওয়ার্ড দিয়ে লক করুন বা 'Erase Device' অপশনে চাপুন।",
            proTip: "ফোনে একটি জরুরি যোগাযোগের নম্বর লক স্ক্রিনে প্রদর্শনের জন্য সেট করে দিন।"
          },
          {
            stepNumber: 3,
            title: "অনলাইনে পুলিশ জিডি (Online GD) দাখিল",
            description: "বাংলাদেশ পুলিশের অফিসিয়াল ওয়েবসাইট gd.police.gov.bd অথবা 'Online GD' মোবাইল অ্যাপে জাতীয় পরিচয়পত্র (NID) দিয়ে লগইন করে ১৫ ডিজিটের আইএমইআই (IMEI) নম্বর উল্লেখ করে সাধারণ ডায়েরি (GD) দাখিল করুন।",
            proTip: "ফোনের বক্স বা ক্রয়ের মূল রসিদ থেকে আইএমইআই ও মডেল নম্বরটি হুবহু লিখুন।"
          },
          {
            stepNumber: 4,
            title: "থানা ও সাইবার ক্রাইম ইউনিটে সেলুলার ট্র্যাকিংয়ের আবেদন",
            description: "অনলাইন জিডি অনুমোদিত হলে প্রিন্ট করা ডিজিটাল জিডি কপি নিয়ে নিকটস্থ থানা এবং ডিবি / সিআইডি সাইবার ক্রাইম ইনভেস্টিগেশন সেলে জমা দিন। তারা বিটিআরসির সহায়তায় সেলুলার বিটিএস ট্র্যাক করে ফোন উদ্ধার করবে।",
            proTip: "হারানো ফোনটি দিয়ে কোনো অপরাধ সংঘটিত হলে আপনার কাছে জিডির কপি থাকলে আপনি নির্দোষ প্রমাণিত হবেন।"
          }
        ]
      : [
          {
            stepNumber: 1,
            title: "Immediate SIM Suspension via Telco Operator",
            description: "Call your telecommunications customer support immediately to temporarily freeze your SIM card, cutting off attackers from two-factor SMS OTPs for bKash, Nagad, and banking apps.",
            proTip: "Call 121 from any alternative number to lock your SIM."
          },
          {
            stepNumber: 2,
            title: "Remote Lock or Wipe via Cloud Portals",
            description: "Log into android.com/find (Google) or icloud.com/find (Apple). Trigger a secure remote screen lock and request an emergency device wipe if sensitive data exists.",
            proTip: "Display an alternative callback number on the locked screen."
          },
          {
            stepNumber: 3,
            title: "File an Official Online Police General Diary (GD)",
            description: "Log into gd.police.gov.bd or the official Online GD mobile app using your National ID. Submit an official missing report with the 15-digit IMEI number.",
            proTip: "Retrieve your genuine IMEI from the original box or retail purchase invoice."
          },
          {
            stepNumber: 4,
            title: "Submit Stamped GD to Police Cyber Crime Investigation",
            description: "Take the approved digital GD receipt to your local police thana and the DB/CID Cyber Crime unit for cellular BTS tower triangulation.",
            proTip: "A filed Police GD shields you from legal liability if criminals use your lost device for illegal acts."
          }
        ],
    requiredDocuments: isBangla
      ? [
          { name: "১৫ ডিজিটের আইএমইআই (IMEI) নম্বর", whereToGet: "ফোনের মূল বক্স / ক্রয়ের রসিদ", purpose: "পুলিশ ও বিটিআরসি সেলুলার নেটওয়ার্ক ট্র্যাকিং" },
          { name: "জাতীয় পরিচয়পত্র (NID) নম্বর", whereToGet: "নির্বাচন কমিশন / স্মার্ট কার্ড", purpose: "অনলাইন জিডি পোর্টালে আবেদনকারী শনাক্তকরণ" },
          { name: "ডিজিটাল পুলিশ জিডি কপি", whereToGet: "gd.police.gov.bd", purpose: "আইনি সুরক্ষা ও সাইবার ক্রাইম ট্র্যাকিং সাবমিশন" },
          { name: "সিম রেজিস্ট্রেশন এনআইডি তথ্য", whereToGet: "মোবাইল অপারেটর", purpose: "দ্রুত সিম রিপ্লেসমেন্ট তোলা" },
        ]
      : [
          { name: "15-Digit IMEI Number", whereToGet: "Original retail packaging / purchase invoice", purpose: "Network triangulation and carrier blacklisting" },
          { name: "National ID (NID) Card", whereToGet: "Election Commission Smart Card", purpose: "Citizen identity authentication on police portal" },
          { name: "Approved Digital Police GD Certificate", whereToGet: "gd.police.gov.bd", purpose: "Legal immunity and cyber investigation authorization" },
        ],
    expertSecrets: isBangla
      ? [
          "চোর যদি ফোন অফও করে ফেলে, নতুন কোনো সিম ঢোকানোর সাথে সাথেই বিটিআরসি সিস্টেমে নতুন সিমের নম্বরসহ আইএমইআই সিগন্যাল ফায়ার করে।",
          "ফোন হারিয়ে গেলে যত দ্রুত সম্ভব গুগল এবং অ্যাপল অ্যাকাউন্টের পাসওয়ার্ড পরিবর্তন করে দিন এবং 'Sign out of all sessions' সিলেক্ট করুন।",
          "বিকাশ/নগদ হেল্পলাইনে কল করে আপনার পিন বা ওয়ালেটটি সাময়িক ফ্রিজ করে রাখতে বলুন।"
        ]
      : [
          "The instant a thief inserts any new SIM into your device, the IMEI registers the new mobile number with BTRC cellular towers.",
          "Immediately change your Google/Apple passwords and revoke active device sessions from a secondary browser.",
          "Notify mobile financial services (bKash/Nagad) to temporarily freeze transaction privileges."
        ],
    primaryRiskAndMitigation: {
      risk: isBangla
        ? "হারানো সিম দিয়ে ওটিপি নিয়ে মোবাইল ব্যাংকিংয়ের টাকা চুরি এবং হারানো ফোন ব্যবহার করে অপরাধের দায় নিজের ওপর বর্তানো।"
        : "Total financial drainage through intercepted mobile banking OTPs and criminal liability for crimes committed with your device.",
      prevention: isBangla
        ? "ফোন হারানোর ১০ মিনিটের মধ্যে সিম ব্লক করা এবং তৎক্ষণাৎ অনলাইন জিডি দাখিল করা।"
        : "Freeze SIM immediately via carrier helpline and submit an online Police GD with IMEI."
    },
    officialResources: [
      { name: isBangla ? "বাংলাদেশ পুলিশ অনলাইন জিডি পোর্টাল" : "Bangladesh Police Online GD", urlOrContact: "https://gd.police.gov.bd", description: isBangla ? "ঘরে বসে অনলাইনে হারানো জিডি করার অফিসিয়াল পোর্টাল" : "Official portal for online loss reporting" },
      { name: isBangla ? "জাতীয় জরুরি সেবা হটলাইন" : "National Emergency Helpline", urlOrContact: "999 (টোল-ফ্রি)", description: isBangla ? "তাৎক্ষণিক পুলিশ, অ্যাম্বুলেন্স ও ফায়ার সার্ভিস" : "Emergency police dispatch and assistance" },
      { name: isBangla ? "গুগল ফাইন্ড মাই ডিভাইস" : "Google Find My Device", urlOrContact: "https://android.com/find", description: isBangla ? "রিমোট ফোন লক ও ট্র্যাকিং" : "Remote Android phone tracking and wipe" },
      { name: isBangla ? "অ্যাপল আইক্লাউড ট্র্যাকিং" : "Apple iCloud Find My", urlOrContact: "https://icloud.com/find", description: isBangla ? "আইফোন রিমোট লক ও ট্র্যাকিং" : "Remote iPhone tracking and activation lock" },
    ]
  }),

  // --------------------------------------------------------------------------
  // 4. PASSPORT & STUDY ABROAD / VISAS
  // --------------------------------------------------------------------------
  passport: (scenario, isBangla) => ({
    scenarioId: scenario.id,
    title: isBangla
      ? "নতুন ই-পাসপোর্ট আবেদন, এনআইডি মিল ও ভিসা প্রসেসিং মাস্টার গাইড"
      : "E-Passport Application, NID Alignment & Visa Due Diligence SOP",
    category: isBangla ? "জাতীয় পরিচয়পত্র, সনদ ও ট্যাক্স" : "Government Identity, Civil Registry & Taxes",
    subcategory: scenario.subcategory,
    overview: isBangla
      ? "ই-পাসপোর্ট আবেদনের ক্ষেত্রে স্মার্ট জাতীয় পরিচয়পত্রের (NID) সাথে প্রতিটি অক্ষরের হুবহু মিল থাকা বাধ্যতামূলক। একটিমাত্র অক্ষরের ভুল বা গরমিল ফাইলকে মাসের পর মাস পেন্ডিং করে রাখতে পারে।"
      : "Applying for an e-passport requires 100% character alignment with Smart National ID records. Minor spelling or address mismatches can delay issuance indefinitely.",
    steps: isBangla
      ? [
          {
            stepNumber: 1,
            title: "স্মার্ট এনআইডির সাথে প্রতিটি নামের অক্ষর মেলানো (সবচেয়ে জরুরি)",
            description: "আপনার নিজের নাম, পিতার নাম, মাতার নাম এবং জন্ম তারিখ স্মার্ট এনআইডি কার্ডের সাথে প্রতিটি অক্ষরে মিলিয়ে নিন। ডাকনাম বা পূর্বের সার্টিফিকেটের অমিল থাকলে আগে এনআইডি সংশোধন করুন।",
            proTip: "অবিবাহিত হলে পিতা-মাতার নাম হুবহু মেলাতে হবে; বিবাহিত হলে কাবিননামা অনুযায়ী জীবনসঙ্গীর নাম যুক্ত করুন।"
          },
          {
            stepNumber: 2,
            title: "epassport.gov.bd তে অনলাইন আবেদন ফরম পূরণ",
            description: "পাসপোর্ট অধিদপ্তরের অফিসিয়াল পোর্টালে অ্যাকাউন্ট খুলে আবেদন ফরম পূরণ করুন। স্থায়ী ঠিকানা হিসেবে আপনার নিজ জেলার ঠিকানা দিন, কারণ সেখানে পুলিশ ভেরিফিকেশন হবে।",
            proTip: "জরুরি হলে Express Delivery সিলেক্ট করুন; সাধারণ পাসপোর্টে ২১ কার্যদিবস সময় লাগে।"
          },
          {
            stepNumber: 3,
            title: "সরকারি ফি প্রদান (এ-চালান বা মোবাইল ব্যাংকিং)",
            description: "৪৮ পাতা ৫ বছর বা ১০ বছর মেয়াদের পাসপোর্টের নির্ধারিত সরকারি ফি এ-চালান, সোনালী ব্যাংক, বিকাশ বা রকেটের মাধ্যমে জমা দিন এবং মূল চালান রসিদ ডাউনলোড করে প্রিন্ট করুন।",
            proTip: "চালান কোড ও পাসপোর্ট অফিসের নাম যেন পেমেন্ট করার সময় ভুল না হয়।"
          },
          {
            stepNumber: 4,
            title: "বায়োমেট্রিক ও ছবি তোলার জন্য পাসপোর্ট অফিসে যাওয়া",
            description: "প্রিন্ট করা Application Summary, পেমেন্ট চালান রসিদ এবং মূল স্মার্ট এনআইডি নিয়ে নির্ধারিত আঞ্চলিক পাসপোর্ট অফিসে গিয়ে ১০ আঙুলের ছাপ ও চোখের আইরিশ দিন।",
            proTip: "সাদা বা হালকা রঙের পোশাক না পরে গাঢ় রঙের পোশাক পরে যাবেন যাতে ডিজিটাল ছবিতে মুখাবয়ব স্পষ্ট আসে।"
          },
          {
            stepNumber: 5,
            title: "পুলিশ স্পেশাল ব্রাঞ্চ (SB) ভেরিফিকেশন সম্পন্ন করা",
            description: "স্থায়ী ঠিকানার এসবি পুলিশ অফিসার ফোন দিলে নাগরিক সনদপত্র, এনআইডি ফটোকপি, বিদ্যুৎ বিলের কপি ও জমির দলিলের ফটোকপি দেখান।",
            proTip: "অনলাইনে পাসপোর্টের স্ট্যাটাস 'Pending Police Verification' থেকে 'Approved for Print' হওয়া পর্যন্ত ট্র্যাক করুন।"
          }
        ]
      : [
          {
            stepNumber: 1,
            title: "Ensure Exact 100% Character Match with Smart NID",
            description: "Verify that your name, parents' names, and date of birth match your National ID to the exact letter. Resolve discrepancies before initiating the passport application.",
            proTip: "Married applicants must align spouse information with their official marriage deed (Nikahnama)."
          },
          {
            stepNumber: 2,
            title: "Complete Online Application on epassport.gov.bd",
            description: "Register on the official Department of Immigration and Passports portal. Specify permanent address accurately, as Police Special Branch verification will occur there.",
            proTip: "Select 48-page 10-year booklet for standard long-term international travel."
          },
          {
            stepNumber: 3,
            title: "Remit Government Fees via A-Challan / Mobile Banking",
            description: "Pay the required government fee through A-Challan, Sonali Bank, or approved mobile financial channels (bKash/Rocket), retaining the stamped digital invoice.",
            proTip: "Verify the exact regional passport office code before completing payment."
          },
          {
            stepNumber: 4,
            title: "Attend In-Person Biometric Enrollment",
            description: "Bring the printed Application Summary, payment voucher, and original Smart NID to your regional passport office for 10-finger biometric scan, iris capture, and photo.",
            proTip: "Wear dark-colored collared clothing to ensure high contrast against the neutral backdrop."
          },
          {
            stepNumber: 5,
            title: "Facilitate Police Special Branch (SB) Verification",
            description: "Present supporting proof of address (utility bill, citizen certificate, land deed) when the Special Branch officer visits your permanent residence.",
            proTip: "Track file progression online until status updates to 'Passport Issued'."
          }
        ],
    requiredDocuments: isBangla
      ? [
          { name: "মূল স্মার্ট জাতীয় পরিচয়পত্র (NID)", whereToGet: "নির্বাচন কমিশন", purpose: "নাগরিক পরিচয় ও বায়োমেট্রিক মেলানো" },
          { name: "অনলাইন ই-পাসপোর্ট অ্যাপ্লিকেশন সামারি", whereToGet: "epassport.gov.bd", purpose: "পাসপোর্ট অফিসে জমা দেওয়ার মূল আবেদনপত্র" },
          { name: "এ-চালান / ব্যাংক ফি পরিশোধের মূল রসিদ", whereToGet: "সোনালী ব্যাংক / বিকাশ / এ-চালান পোর্টাল", purpose: "সরকারি রাজস্ব পরিশোধের প্রমাণ" },
          { name: "স্থায়ী ঠিকানার প্রমাণ (বিদ্যুৎ বিল / নাগরিক সনদ)", whereToGet: "সিটি কর্পোরেশন / ইউনিয়ন পরিষদ", purpose: "পুলিশ এসবি ভেরিফিকেশনে ঠিকানা প্রমাণ" },
          { name: "কাবিননামা (বিবাহিতদের ক্ষেত্রে)", whereToGet: "কাজী অফিস", purpose: "পাসপোর্টে জীবনসঙ্গীর নাম অন্তর্ভুক্তকরণ" },
        ]
      : [
          { name: "Original Smart National ID (NID)", whereToGet: "Election Commission", purpose: "Core citizen verification document" },
          { name: "Application Summary Printout", whereToGet: "epassport.gov.bd", purpose: "Biometric enrollment submission document" },
          { name: "A-Challan / Bank Payment Receipt", whereToGet: "Sonali Bank / A-Challan Portal", purpose: "Proof of government fee clearance" },
          { name: "Proof of Permanent Address (Utility Bill)", whereToGet: "City Corporation / Union Parishad", purpose: "Police Special Branch background verification" },
        ],
    expertSecrets: isBangla
      ? [
          "পাসপোর্টের কোনো দালালকে টাকা দেবেন না; বর্তমানে পুরো প্রক্রিয়া ডিজিটাল হওয়ায় সরাসরি অফিসে গিয়ে নিজেই সব কাজ করা যায়।",
          "পাসপোর্ট নম্বর পাওয়ার পর ব্যাংকে গিয়ে আপনার আন্তর্জাতিক ক্রেডিট/ডেবিট কার্ডে ডুয়েল কারেন্সি এন্ডোর্সমেন্ট করিয়ে নিতে পারেন (বাৎসরিক ১২,০০০ ডলার পর্যন্ত কোটা)।",
          "ভিসা আবেদনের জন্য পাসপোর্টের অন্তত ৬ মাসের মেয়াদ এবং পরপর দুটি ফাঁকা পাতা থাকা আন্তর্জাতিক নিয়ম অনুযায়ী বাধ্যতামূলক।"
        ]
      : [
          "Do not engage informal brokers; the biometric workflow is fully automated and requires physical presence.",
          "Once issued, visit your commercial bank to endorse dual-currency international spending on credit/debit cards (up to $12,000 yearly travel quota).",
          "Ensure your passport maintains at least 6 months validity and two blank visa pages prior to booking international flights."
        ],
    primaryRiskAndMitigation: {
      risk: isBangla
        ? "এনআইডির বানানের সাথে পাসপোর্টের অমিলের কারণে আবেদন 'Pending Adjudication' এ মাসের পর মাস স্থগিত থাকা।"
        : "Application suspended under adjudication for months due to spelling discrepancies with National ID records.",
      prevention: isBangla
        ? "আবেদন সাবমিট করার আগে প্রতিটি অক্ষর এনআইডির সাথে হুবহু মিলিয়ে নেওয়া।"
        : "Proofread every letter against Smart NID before generating the final application PDF."
    },
    officialResources: [
      { name: isBangla ? "ইমিগ্রেশন ও পাসপোর্ট অধিদপ্তর" : "Department of Immigration & Passports", urlOrContact: "https://epassport.gov.bd", description: isBangla ? "অফিসিয়াল ই-পাসপোর্ট পোর্টাল" : "Official national e-passport application portal" },
      { name: isBangla ? "পাসপোর্ট অ্যাপ্লিকেশন স্ট্যাটাস ট্র্যাকিং" : "Passport Status Tracker", urlOrContact: "https://epassport.gov.bd/authorization/application-status", description: isBangla ? "অনলাইনে পাসপোর্টের লাইভ অগ্রগতি যাচাই" : "Live tracking of passport manufacturing and dispatch" },
    ]
  }),

  // --------------------------------------------------------------------------
  // 5. FOOD SAFETY & ADULTERATION
  // --------------------------------------------------------------------------
  food: (scenario, isBangla) => ({
    scenarioId: scenario.id,
    title: isBangla
      ? "খাদ্যে ভেজাল ও ফরমালিন শনাক্তকরণ: সহজ বৈজ্ঞানিক ও ঘরোয়া পরীক্ষা গাইডলাইন"
      : "Food Safety & Formalin Detection: Scientific & Practical Testing Guide",
    category: isBangla ? "খাদ্য ও ফরমালিন পরীক্ষা" : "Food Safety, Adulteration & Nutrition",
    subcategory: scenario.subcategory,
    overview: isBangla
      ? "মাছ, দুধ, মধু ও ফলে ক্ষতিকর ফরমালিন এবং রাসায়নিক ভেজাল মেশানো একটি নীরব ঘাতক। কোনো আধুনিক ল্যাব ছাড়াও সাধারণ চোখে ও সহজ ঘরোয়া পরীক্ষার মাধ্যমে ভেজাল পণ্য সহজেই চেনা সম্ভব।"
      : "Adulteration in wet-market fish, dairy milk, and raw honey poses severe long-term organ toxicity risks. Everyday sensory and simple chemical checks can readily unmask dangerous adulterants.",
    steps: isBangla
      ? [
          {
            stepNumber: 1,
            title: "মাছে ফরমালিনের উপস্থিতি পরীক্ষা (৪টি চাক্ষুষ লক্ষণ)",
            description: "১. মাছের ওপর মাছি না বসা; ২. ফুলকা স্বাভাবিক লাল না হয়ে কালচে বা ফ্যাকাসে বাদামি হওয়া; ৩. মাছের চোখ ঘোলাটে বা ভেতর দিকে বসে যাওয়া; ৪. শরীর স্বাভাবিকের চেয়ে অস্বাভাবিক রবারের মতো শক্ত হওয়া।",
            proTip: "বাজারের তাজা মাছের স্বাভাবিক পানির গন্ধ থাকে, কিন্তু ফরমালিনযুক্ত মাছে হালকা ঝাঁঝালো অ্যাসিডিক গন্ধ থাকে।"
          },
          {
            stepNumber: 2,
            title: "দুধে ভেজাল ও ডিটারজেন্ট শনাক্তকরণ",
            description: "একটি বোতলে সমপরিমাণ দুধ ও পানি মিশিয়ে তীব্রভাবে ২০ সেকেন্ড ঝাঁকান। যদি উপরে সাবানের মতো ঘন, দীর্ঘস্থায়ী ফেনা জমে থাকে, তবে দুধে ওয়াশিং পাউডার বা ক্ষতিকর ডিটারজেন্ট মেশানো হয়েছে।",
            proTip: "দুধে কয়েক ফোঁটা আয়োডিন দিন; স্টার্চ বা ময়দা মেশানো থাকলে দুধের রঙ তাৎক্ষণিক নীল হয়ে যাবে।"
          },
          {
            stepNumber: 3,
            title: "খাঁটি মধু চেনার ৩টি নির্ভরযোগ্য ঘরোয়া পরীক্ষা",
            description: "১. পানিতে টেস্ট: এক গ্লাস সাধারণ পানিতে এক চামচ মধু ঢালুন; খাঁটি মধু না গুলে নিচে জমাট হয়ে থাকবে, ভেজাল চিনির সিরাপ মিশে যাবে। ২. ম্যাচের কাঠি টেস্ট: মধুর সাথে কাঠি মেখে জ্বালালে খাঁটি মধু সহজে জ্বলে উঠবে।",
            proTip: "এক ফোঁটা মধু বুড়ো আঙুলে রাখুন; খাঁটি মধু ছড়িয়ে না পড়ে গোলাকার ড্রপ হিসেবে দাঁড়িয়ে থাকবে।"
          },
          {
            stepNumber: 4,
            title: "ফল ও শাকসবজির রাসায়নিক দূরীকরণে সঠিক ধৌতকরণ",
            description: "বাজার থেকে আনা ফল ও শাকসবজি খাওয়ার আগে সাধারণ পানিতে ধুয়ে নিলেই কীটনাশক দূর হয় না। ১ লিটার পানিতে ২ চামচ লবণ অথবা ১ কাপ সাদা ভিনেগার মিশিয়ে ১৫ মিনিট ভিজিয়ে রেখে তারপর পরিষ্কার পানিতে ধুয়ে ফেলুন।",
            proTip: "লবণ-পানির দ্রবণে ফল ভিজিয়ে রাখলে ৮৫-৯০% পৃষ্ঠতলের কীটনাশক ও কার্বাইড দূর হয়ে যায়।"
          }
        ]
      : [
          {
            stepNumber: 1,
            title: "Detecting Formalin in Wet-Market Fish",
            description: "Inspect for 4 primary physical indicators: complete fly avoidance around the fish, pale grey or dark brown gills instead of red, sunken opaque eyes, and rubbery muscle rigidity.",
            proTip: "Fresh fish retains a natural aquatic scent, while formalin produces a subtle sharp pungency."
          },
          {
            stepNumber: 2,
            title: "Testing Dairy Milk for Water & Detergent Adulteration",
            description: "Shake equal parts milk and water vigorously in a vial for 20 seconds. A thick, persistent soapy foam indicates hazardous detergent and emulsifier adulteration.",
            proTip: "Add a drop of iodine solution; turning blue confirms starch or flour adulteration."
          },
          {
            stepNumber: 3,
            title: "Authenticating Pure Raw Honey",
            description: "Water test: drop a spoonful of honey into a glass of plain water. Pure honey drops directly to the bottom as a cohesive mass, whereas syrup dissolves quickly.",
            proTip: "Thumb test: genuine honey does not run or spread immediately across the thumb skin."
          },
          {
            stepNumber: 4,
            title: "Effective Chemical & Pesticide Wash for Fresh Produce",
            description: "Soak fruits and vegetables in a 10% saltwater solution or dilute vinegar solution for 15 minutes prior to consumption, followed by thorough running water rinsing.",
            proTip: "Saltwater soaking removes up to 90% of organophosphate pesticide residues."
          }
        ],
    requiredDocuments: isBangla
      ? [
          { name: "ফরমালিন টেস্ট স্ট্রিপ (ঐচ্ছিক)", whereToGet: "সায়েন্টিফিক মার্কেট / অনলাইন", purpose: "রাসায়নিক রঙের পরিবর্তন দেখে নিশ্চিত হওয়া" },
          { name: "সাধারণ আয়োডিন সলিউশন (Tincture of Iodine)", whereToGet: "যেকোনো ফার্মেসি", purpose: "দুধ ও গুঁড়ো মশলায় স্টার্চ/ময়দা পরীক্ষা" },
          { name: "লবণ বা সাদা ভিনেগার", whereToGet: "মুদির দোকান", purpose: "ফলমূল থেকে কীটনাশক মুক্ত করা" },
        ]
      : [
          { name: "Formalin Test Strips", whereToGet: "Scientific chemical supply stores", purpose: "Colorimetric chemical validation" },
          { name: "Tincture of Iodine", whereToGet: "Local pharmacies", purpose: "Testing milk and spices for starch adulteration" },
        ],
    expertSecrets: isBangla
      ? [
          "কখনোই অস্বাভাবিক চকচকে ও কোনো পোকা ছাড়া নিখুঁত ফল কিনবেন না; প্রাকৃতিকভাবে পাকা ফলের গায়ে সামান্য দাগ বা বৈচিত্র্য থাকে।",
          "হলুদ গুঁড়োয় ক্ষতিকর মেটানিল ইয়েলো রং আছে কিনা দেখতে এক চামচ হলুদের সাথে কয়েক ফোঁটা হাইড্রোক্লোরিক অ্যাসিড বা লেবুর রস দিন; গাঢ় ম্যাজেন্টা পিংক হলে রং মেশানো হয়েছে।"
        ]
      : [
          "Avoid fruit with unnaturally uniform neon yellow peel and dark green stems; this indicates calcium carbide gas treatment.",
          "To detect metanil yellow dye in turmeric, add dilute acid; a persistent deep magenta hue confirms toxic synthetic dye."
        ],
    primaryRiskAndMitigation: {
      risk: isBangla
        ? "দীর্ঘদিন ফরমালিন ও ভেজাল রাসায়নিকযুক্ত খাবার খাওয়ার ফলে কিডনি বিকল, লিভার সিরোসিস এবং পাকস্থলীর ক্যান্সারের ঝুঁকি।"
        : "Chronic ingestion of chemical preservatives causing gastrointestinal erosion, liver failure, and carcinogenicity.",
      prevention: isBangla
        ? "চাক্ষুষ লক্ষণ দেখে কেনা এবং বাসায় লবণ-পানির দ্রবণ দিয়ে ফলমূল ভালো করে ধুয়ে খাওয়া।"
        : "Select fish via biological indicators (flies, gills, eyes) and soak produce in salt or vinegar baths."
    },
    officialResources: [
      { name: isBangla ? "বাংলাদেশ নিরাপদ খাদ্য কর্তৃপক্ষ (BFSA)" : "Bangladesh Food Safety Authority", urlOrContact: "https://bfsa.gov.bd", description: isBangla ? "খাদ্য মান নিয়ন্ত্রণ ও অভিযোগ কেন্দ্র" : "National food safety regulations and enforcement" },
      { name: isBangla ? "ভোক্তা অধিকার সংরক্ষণ অধিদপ্তর" : "Consumer Rights Protection (DNCRP)", urlOrContact: "16121 (হটলাইন)", description: isBangla ? "ভেজাল পণ্যের বিরুদ্ধে সরাসরি অভিযোগ ও প্রতিকার" : "Toll-free consumer grievance and fraud hotline" },
    ]
  }),

  // --------------------------------------------------------------------------
  // 6. COOKING TECHNIQUES & KITCHEN HACKS
  // --------------------------------------------------------------------------
  cooking: (scenario, isBangla) => ({
    scenarioId: scenario.id,
    title: isBangla
      ? "রান্না ও ঘরোয়া টেকনিক: মুচমুচে মাছ ভাজা ও রসুইঘরের জরুরি সমাধান"
      : "Culinary Technique & Kitchen Troubleshooting Master Guide",
    category: isBangla ? "রান্না ও ঘরোয়া টেকনিক" : "Cooking Techniques & Culinary Troubleshooting",
    subcategory: scenario.subcategory,
    overview: isBangla
      ? "রান্নাবান্নায় যেকোনো ভুল—যেমন মাছ ভেঙে যাওয়া, তরকারিতে লবণ বেশি হওয়া বা মাংস শক্ত হয়ে থাকা—পদার্থবিজ্ঞান ও খাদ্য রসায়নের সহজ কিছু নিয়মে সহজেই নিখুঁত করা যায়।"
      : "Kitchen mishaps—torn fish fillets, overly salty curries, or tough braised meats—are straightforward to prevent once fundamental culinary physics and temperature control are mastered.",
    steps: isBangla
      ? [
          {
            stepNumber: 1,
            title: "মাছের গায়ের পানি পুরোপুরি শুকানো (মুচমুচে ভাজার মূল রহস্য)",
            description: "মাছ ধোয়ার পর টিস্যু পেপার দিয়ে মাছের চামড়া ও মাংসের পানি চেপে চেপে মুছে ফেলুন। গায়ের পানি প্যানে অতিরিক্ত বাষ্প তৈরি করে মাছের চামড়াকে প্যানের ধাতুর সাথে আটকে ফেলে।",
            proTip: "পানি মুছে হলুদ, মরিচ, সামান্য লবণ ও লেবুর রস মেখে সর্বোচ্চ ১৫ মিনিট রাখুন।"
          },
          {
            stepNumber: 2,
            title: "তেল উপযুক্ত গরম হওয়া নিশ্চিত করা",
            description: "কড়াই বা প্যানে সরিষার তেল বা সয়াবিন তেল দিয়ে ধোঁয়া ওঠার আগ পর্যন্ত গরম করুন। শুকনো কাঠের কাঠি বা চপস্টিক ডুবিয়ে দেখুন—চারপাশে দ্রুত বুদবুদ উঠলে বুঝবেন তাপমাত্রা সঠিক (১৭৫° সে.)।",
            proTip: "কম গরম তেলে মাছ ছাড়লে মাছ সব তেল চুষে নেবে এবং প্যানে লেগে ভেঙে যাবে।"
          },
          {
            stepNumber: 3,
            title: "প্রথম ৩-৪ মিনিট কোনো চামচ না লাগানো (নো-টাচ রুল)",
            description: "মাছ চামড়ার দিকটা নিচে দিয়ে প্যানে দিন। প্রথম ১০ সেকেন্ড খুন্তি দিয়ে আলতো চেপে রাখুন যাতে চামড়া কুঁকড়ে না যায়। এর পর প্রথম ৩ থেকে ৪ মিনিট মাছে কোনো চামচ লাগাবেন না।",
            proTip: "নিচের চামড়া সম্পূর্ণ ভাজা হয়ে ক্রাস্ট তৈরি হলে মাছ নিজ থেকেই প্যান থেকে আলগা হয়ে আসবে।"
          },
          {
            stepNumber: 4,
            title: "একবার উল্টানো ও তারের জালিতে নামানো",
            description: "মাছ একবার উল্টে আরো ২ মিনিট ভেজে নামিয়ে নিন। নামিয়ে তারের জালি (Wire Rack) এর ওপর রাখুন। টিস্যু পেপারের ওপর রাখলে নিচের তাপে বাষ্প জমে মাছ নরম হয়ে যায়।",
            proTip: "তারের জালিতে রাখলে ওপর-নিচ উভয় পাশই দীর্ঘক্ষণ মুচমুচে থাকে।"
          },
          {
            stepNumber: 5,
            title: "রান্নায় অতিরিক্ত লবণ কমানোর বিজ্ঞানসম্মত উপায়",
            description: "তরকারিতে লবণ বেশি হয়ে গেলে একটি কাঁচা আলু গোল গোল করে কেটে তরকারিতে দিয়ে ১০ মিনিট কম আঁচে ফোটান (আলুর স্টার্চ অতিরিক্ত লবণ শুষে নেয়)। অথবা সামান্য লেবুর রস ও চিনি দিন যা জিহ্বার স্বাদকুঁড়িতে অতিরিক্ত লবণের অনুভূতি প্রশমিত করে।",
            proTip: "গ্রেভি তরকারিতে সামান্য টক দই বা দুধ যোগ করলেও অতিরিক্ত লবণ সুন্দরভাবে ব্যালেন্স হয়।"
          }
        ]
      : [
          {
            stepNumber: 1,
            title: "Surface Moisture Removal (The Crispiness Secret)",
            description: "Thoroughly pat fish skin and flesh completely dry with absorbent paper towels. Moisture creates steam pockets that glue delicate fish proteins to pan metal, ripping fillets apart.",
            proTip: "Season with turmeric, chili, salt, and lemon, resting no longer than 15 minutes."
          },
          {
            stepNumber: 2,
            title: "Verify Shimmering Pan Oil Temperature",
            description: "Heat cooking or mustard oil until lightly shimmering. Dip a dry wooden utensil; continuous vigorous bubbling confirms the optimal 175°C to 185°C frying zone.",
            proTip: "Placing fish into cold oil forces the flesh to soak up fat and stick."
          },
          {
            stepNumber: 3,
            title: "The Golden 3-Minute 'No-Touch' Rule",
            description: "Lay fillets skin-side down gently away from you. Press flat for 10 seconds to counteract skin curling. Do not agitate or poke the fillet for 3 to 4 minutes.",
            proTip: "The fillet will release cleanly on its own once the Maillard crust forms."
          },
          {
            stepNumber: 4,
            title: "Single Flip & Drain on a Wire Cooling Rack",
            description: "Flip once and finish for 2 minutes. Transfer immediately to an elevated wire cooling rack rather than paper towels, which trap rising steam and turn the underside soggy.",
            proTip: "Elevated racks ensure 360-degree airflow to maintain maximum crispness."
          },
          {
            stepNumber: 5,
            title: "Counteracting Over-Salted Curries & Soups",
            description: "Simmer raw potato slices in the pot for 10 minutes to absorb excess sodium. Alternatively, add a splash of lemon juice and a pinch of sugar to suppress sensory perception of salt.",
            proTip: "In rich gravies, a dollop of yogurt or cream dilutes overall sodium density."
          }
        ],
    requiredDocuments: [],
    expertSecrets: isBangla
      ? [
          "শক্ত মাংস দ্রুত নরম করতে রান্না শুরুর ৩০ মিনিট আগে কাঁচা পেঁপে বাটা বা টক দই দিয়ে মেখে রাখুন (পেঁপেতে থাকা 'প্যাপাইন' এনজাইম মাংসের কঠিন আঁশ দ্রুত ভেঙে দেয়)।",
          "ঝরঝরে পোলাও বা বিরিয়ানি রান্না করতে চাল ধুয়ে অন্তত ৩০ মিনিট পানিতে ভিজিয়ে রেখে পুরো পানি শুকিয়ে নিন, এবং চাল ও পানির অনুপাত সর্বদা ১ : ১.৭৫ রাখুন।"
        ]
      : [
          "To tenderize tough stewing beef, marinate with grated raw green papaya paste; the papain enzyme dissolves tough muscle connective tissues.",
          "For fluffy non-sticky rice, rinse out excess amylose starch until water runs clear, soak for 30 minutes, and maintain a 1:1.75 rice-to-water ratio."
        ],
    primaryRiskAndMitigation: {
      risk: isBangla
        ? "ভেজা মাছ কম তেলে দেওয়ায় মাছ ভেঙে ভর্তা হওয়া বা তেল ছিটকে শরীর পুড়ে যাওয়া।"
        : "Tearing expensive fish fillets and hot oil splatters caused by wet skin.",
      prevention: isBangla
        ? "মাছের পানি পুরোপুরি শুকানো এবং গরম তেলে দেওয়ার সময় তেল ছিটকানো রোধে সামান্য লবণ দিয়ে নেওয়া।"
        : "Always pat fillets dry with paper towels and maintain hot, shimmering pan oil."
    },
    officialResources: []
  }),

  // --------------------------------------------------------------------------
  // 7. COLLEGE & UNIVERSITY ADMISSIONS
  // --------------------------------------------------------------------------
  college: (scenario, isBangla) => ({
    scenarioId: scenario.id,
    title: isBangla
      ? "একাদশ শ্রেণির কলেজ চয়েস ও বিশ্ববিদ্যালয় ভর্তি পূর্ণাঙ্গ কৌশল"
      : "College Admission Choice Architecture & University Strategy SOP",
    category: isBangla ? "কলেজ ও ভার্সিটি ভর্তি" : "Education, College Admissions & Academics",
    subcategory: scenario.subcategory,
    overview: isBangla
      ? "একাদশ শ্রেণিতে কলেজ চয়েস ও বিশ্ববিদ্যালয় ভর্তি পরীক্ষায় কাট-অফ নম্বর ও আসনসংখ্যার বাস্তবসম্মত হিসাব ছাড়া কেবল শীর্ষ প্রতিষ্ঠান তালিকায় রাখলে ১ম পর্যায়ে কোনো আসন না পাওয়ার মারাত্মক ঝুঁকি তৈরি হয়।"
      : "Navigating online college admission allocation and competitive university entrance tests requires an analytical choice architecture balancing dream colleges against realistic GPA backups.",
    steps: isBangla
      ? [
          {
            stepNumber: 1,
            title: "বিগত ৩ বছরের কাট-অফ জিপিএ ও মোট নম্বর বিশ্লেষণ",
            description: "xiclassadmission.gov.bd তে প্রতিটি কলেজের বিগত ৩ বছরের ন্যূনতম কাট-অফ নম্বর দেখুন। বিজ্ঞান বিভাগে কেবল জিপিএ ৫ নয়, পদার্থ, রসায়ন ও উচ্চতর গণিতের মোট নম্বরের ভিত্তিতে আসন নির্ধারিত হয়।",
            proTip: "নটর ডেম বা হলি ক্রস কলেজের ক্ষেত্রে লিখিত পরীক্ষার জন্য আলাদা প্রস্তুতি নিন।"
          },
          {
            stepNumber: 2,
            title: "৫-৩-২ অনুপাত কৌশল প্রয়োগ (চয়েস লিস্ট সাজানো)",
            description: "১০টি পছন্দের তালিকায় ২টি উচ্চাকাঙ্ক্ষী স্বপ্নের কলেজ (Ambitious), ৫টি আপনার নম্বরের সাথে হুবহু মিলে এমন বাস্তবসম্মত কলেজ (Realistic), এবং ৩টি নিশ্চিত ব্যাকআপ কলেজ (Safety) রাখুন।",
            proTip: "কখনোই পছন্দের বাইরের কোনো কলেজ তালিকার উপরের দিকে রাখবেন না।"
          },
          {
            stepNumber: 3,
            title: "ঊর্ধ্বমুখী অটো-মাইগ্রেশনের সঠিক ব্যবস্থাপনা",
            description: "তালিকার নিচের কোনো কলেজে আসন পেলে উপরের কলেজগুলোতে স্বয়ংক্রিয়ভাবে আসন খালি হওয়া সাপেক্ষে মাইগ্রেশন চালু থাকবে। মাইগ্রেশন কখনোই নিচের দিকে যায় না।",
            proTip: "পছন্দের কলেজ পেয়ে গেলে পরবর্তী ধাপে নিশ্চায়ন ফি দিয়ে আসন নিশ্চিত করুন।"
          },
          {
            stepNumber: 4,
            title: "বিশ্ববিদ্যালয় গুচ্ছ ভর্তি ও নেগেটিভ মার্কিং ব্যবস্থাপনা",
            description: "ইঞ্জিনিয়ারিং গুচ্ছ (CKRUET), সাধারণ গুচ্ছ (GST) ও কৃষি গুচ্ছের পরীক্ষার ক্ষেত্রে প্রতিটি ভুল উত্তরের জন্য ০.২৫ নম্বর কাটা যায়। নিশ্চিত না হয়ে অনুমানভিত্তিক উত্তর দেওয়া বর্জন করুন।",
            proTip: "গত ৫ বছরের প্রশ্নব্যাংক সময় ধরে ওএমআর শিটে প্র্যাকটিস করুন।"
          }
        ]
      : [
          {
            stepNumber: 1,
            title: "Analyze Historical 3-Year GPA & Total Mark Cut-Offs",
            description: "Review historical minimum cut-off marks on xiclassadmission.gov.bd. For science streams, total marks in Physics, Chemistry, and Higher Math serve as the tie-breaker.",
            proTip: "Independent institutions like Notre Dame College require bespoke written test prep."
          },
          {
            stepNumber: 2,
            title: "Deploy the 2-5-3 Choice Architecture",
            description: "Structure your 10 college preferences: 2 ambitious dream colleges, 5 realistic colleges aligned with your score median, and 3 guaranteed safety backup colleges.",
            proTip: "Never list an unwanted college near the top of your sequence."
          },
          {
            stepNumber: 3,
            title: "Master Upward Auto-Migration Dynamics",
            description: "If assigned a lower preference, automated migration proceeds exclusively upwards as seats open above. It never flows downward.",
            proTip: "Pay the initial confirmation token fee immediately to lock your seat while migration runs."
          },
          {
            stepNumber: 4,
            title: "Manage University Entrance Negative Marking",
            description: "Cluster admission tests (CKRUET, GST, Agriculture) penalize wrong answers by 0.25 marks. Restrict guesswork when accuracy falls below 75%.",
            proTip: "Practice with timed official question banks on authentic bubble OMR sheets."
          }
        ],
    requiredDocuments: isBangla
      ? [
          { name: "এসএসসি / এইচএসসি একাডেমিক ট্রান্সক্রিপ্ট ও নম্বরপত্র", whereToGet: "শিক্ষা বোর্ড / নিজ স্কুল বা কলেজ", purpose: "নম্বর ও জিপিএ যাচাই" },
          { name: "অনলাইন অ্যাডমিশন রোল ও রেজিস্ট্রেশন নম্বর", whereToGet: "প্রবেশপত্র (Admit Card)", purpose: "ভর্তি পোর্টালে লগইন ও আবেদন" },
          { name: "কোটা সনদপত্র (মুক্তিযোদ্ধা, ক্ষুদ্র নৃগোষ্ঠী ইত্যাদি)", whereToGet: "সংশ্লিষ্ট মন্ত্রণালয় / কর্তৃপক্ষ", purpose: "সংরক্ষিত আসনে আবেদন প্রমাণের জন্য" },
        ]
      : [
          { name: "Academic Transcript & Marksheet", whereToGet: "Education Board", purpose: "Verification of grades and subject marks" },
          { name: "Admit Card with Roll & Reg Numbers", whereToGet: "High School / Board", purpose: "Portal authentication and application submission" },
        ],
    expertSecrets: isBangla
      ? [
          "১ম ধাপে কোনো কলেজ না পেলে হতাশ না হয়ে ২য় ধাপের আবেদনে কাট-অফ পুনর্বিশ্লেষণ করে দ্রুত সেফটি কলেজ যোগ করুন।",
          "মেডিকেল ভর্তি পরীক্ষায় সেকেন্ড টাইমারদের ক্ষেত্রে মোট প্রাপ্ত নম্বর থেকে ৫ নম্বর (এবং ডেন্টালে ৭.৫ নম্বর) কেটে মেধা তালিকা তৈরি করা হয়।"
        ]
      : [
          "If unallocated in round 1, rapidly insert verified safety colleges into round 2 before quota seats close.",
          "Medical college entrance deducts a 5-mark penalty for second-time candidates from their aggregate score."
        ],
    primaryRiskAndMitigation: {
      risk: isBangla
        ? "ভুল চয়েস অর্ডারের কারণে ১ম ধাপে কোনো আসন না পেয়ে দূরে বা অনির্ভরযোগ্য প্রতিষ্ঠানে পড়ার বাধ্যবাধকতা।"
        : "Failing to secure seat allocation due to top-heavy choices, forcing entry into chaotic second-round pools.",
      prevention: isBangla
        ? "৫-৩-২ অনুপাতে সেফটি ব্যাকআপ কলেজ নিশ্চিত করা এবং কাট-অফ বিশ্লেষণ করা।"
        : "Always maintain 3 safety colleges with cutoff thresholds comfortably below your aggregate score."
    },
    officialResources: [
      { name: isBangla ? "একাদশ শ্রেণি ভর্তি পোর্টাল" : "XI Class Online Admission Portal", urlOrContact: "https://xiclassadmission.gov.bd", description: isBangla ? "কেন্দ্রীয় অনলাইন কলেজ আবেদন ও ফলাফল" : "Official national college allocation platform" },
    ]
  }),

  // --------------------------------------------------------------------------
  // 8. CONSUMER TECH, HARDWARE & GADGETS
  // --------------------------------------------------------------------------
  tech: (scenario, isBangla) => ({
    scenarioId: scenario.id,
    title: isBangla
      ? "ব্যবহৃত কম্পিউটার, ল্যাপটপ ও জিপিইউ ক্রয়ের পুঙ্খানুপুঙ্খ ডায়াগনস্টিক চেকলিস্ট"
      : "Used PC Hardware, Laptop & GPU Master Diagnostic Protocol",
    category: isBangla ? "মোবাইল, কম্পিউটার ও গ্যাজেট" : "Consumer Tech, Hardware & Gadgets",
    subcategory: scenario.subcategory,
    overview: isBangla
      ? "ব্যবহৃত গ্রাফিক্স কার্ড (GPU), ল্যাপটপ বা স্মার্টফোন কেনার সময় হিডেন ক্রিপ্টো মাইনিং ক্ষয়, ডিসপ্লে বার্ন-ইন ও ক্ষতিগ্রস্ত ব্যাটারি খালি চোখে ধরা পড়ে না। প্রফেশনাল বেঞ্চমার্ক সফটওয়্যার ছাড়া কোনো গ্যাজেট কেনা ঝুঁকিপূর্ণ।"
      : "Pre-owned GPUs, laptops, and smartphones frequently suffer from degraded VRAM solder joints, thermal throttling, and hidden firmware bypasses that require rigorous bench testing.",
    steps: isBangla
      ? [
          {
            stepNumber: 1,
            title: "গ্রাফিক্স কার্ডে FurMark ও 3DMark ৩০ মিনিট স্ট্রেস টেস্ট",
            description: "জিপিইউ পূর্ণ লোডে চালিয়ে ভিআরএম (VRAM) মেমোরি জংশন তাপমাত্রা দেখুন। মেমোরি তাপমাত্রা ৯৫° সে. এর ওপরে উঠলে বুঝবেন থার্মাল প্যাড শুকিয়ে গেছে এবং কার্ডটি ২৪ ঘণ্টা ক্রিপ্টো মাইনিংয়ে ব্যবহৃত হয়েছিল।",
            proTip: "স্ক্রিনে কোনো রঙিন বিন্দু (Artifacts) বা ফ্লিকারিং দেখা গেলে ভিআরএম মেমোরি চিপ ক্ষতিগ্রস্ত।"
          },
          {
            stepNumber: 2,
            title: "ল্যাপটপ ব্যাটারি হেলথ ও ওয়্যার লেভেল (Wear Level) পরীক্ষা",
            description: "উইন্ডোজ কমান্ড প্রম্পটে \`powercfg /batteryreport\` কমান্ড দিন। ব্যাটারির 'Full Charge Capacity' মূল 'Design Capacity' এর কত শতাংশ তা দেখুন। ৮০% এর নিচে হলে ব্যাটারি দ্রুত শেষ হবে।",
            proTip: "সিনেবেঞ্চ চালিয়ে সিপিইউ থ্রটলিং ও ফ্যানের শব্দ পরীক্ষা করুন।"
          },
          {
            stepNumber: 3,
            title: "এসএসডি (SSD) হেলথ ও রাইট ক্যাপাসিটি (TBW) পরীক্ষা",
            description: "CrystalDiskInfo সফটওয়্যার চালু করে এসএসডি-র স্বাস্থ্য শতভাগ ও মোট রাইট হওয়া ডেটা (Total Host Writes) দেখুন। স্বাস্থ্য ৯০% এর নিচে থাকলে এসএসডি বদলানোর সময় হয়ে এসেছে।",
            proTip: "কোনো ব্যাড সেক্টর বা 'Uncorrectable Error Count' আছে কিনা দেখে নিন।"
          },
          {
            stepNumber: 4,
            title: "ব্যবহৃত আইফোন ও অ্যান্ড্রয়েড হার্ডওয়্যার ডায়াগনস্টিক",
            description: "আইফোনের ক্ষেত্রে 3uTools সফটওয়্যারে লাগিয়ে ক্যামেরা, ব্যাটারি বা স্ক্রিন পরিবর্তন করা হয়েছে কিনা দেখুন। সেটিংসে গিয়ে MDM Profile বা রিমোট ম্যানেজমেন্ট চেক করুন।",
            proTip: "অ্যান্ড্রয়েডে *#0*# ডায়াল করে অ্যামোলেড স্ক্রিন বার্ন-ইন ও টাচ ডিজিটাইজার পরীক্ষা করুন।"
          }
        ]
      : [
          {
            stepNumber: 1,
            title: "Execute FurMark & 3DMark Stress Test for 30 Minutes",
            description: "Monitor VRAM junction temperature under full load. Temperatures exceeding 95°C confirm dried thermal pads from continuous 24/7 cryptocurrency mining stress.",
            proTip: "Screen flickering or checkerboard artifacts signify failing GDDR6 memory solder joints."
          },
          {
            stepNumber: 2,
            title: "Generate Windows Laptop Battery Degradation Report",
            description: "Run \`powercfg /batteryreport\` in administrative command prompt. Compare Full Charge Capacity against original Design Capacity; health below 80% requires battery replacement.",
            proTip: "Run Cinebench R23 multi-core loop to detect aggressive thermal throttling."
          },
          {
            stepNumber: 3,
            title: "Inspect SSD Health & TBW via CrystalDiskInfo",
            description: "Check Total Bytes Written (TBW) and health percentage. Zero bad sectors and healthy S.M.A.R.T attributes must be confirmed before purchase.",
            proTip: "Inspect temperature during sustained 50GB file transfers."
          },
          {
            stepNumber: 4,
            title: "Diagnose Used Smartphones via 3uTools & Hardware Menus",
            description: "Connect iPhones to 3uTools to verify component serial matches and check for MDM (corporate device management) profiles. Test Android AMOLED displays via *#0*# service menu.",
            proTip: "Absence of TrueTone confirms an aftermarket replacement display."
          }
        ],
    requiredDocuments: [
      { name: isBangla ? "আসল বক্স ও ক্যাশমেমো" : "Original Box & Invoice", whereToGet: isBangla ? "বিক্রেতা" : "Seller", purpose: isBangla ? "ওয়ারেন্টি দাবি ও বৈধ ক্রয়ের প্রমাণ" : "Warranty validation and proof of purchase" }
    ],
    expertSecrets: isBangla
      ? [
          "মাইনিং জিপিইউতে অনেক সময় কাস্টম ভিবিআইওএস (Custom vBIOS) ফ্ল্যাশ করা থাকে যার ফলে সাধারণ গেমিং ড্রাইভার ক্র্যাশ করে; কেনার পর স্টক ফ্যাক্টরি বায়োস রিফ্ল্যাশ করে নিন।",
          "মোবাইল কেনার আগে বিটিআরসি ডাটাবেজে আইএমইআই বৈধতা নিশ্চিত করুন (মেসেজে \`KYD <স্পেস> ১৫-ডিজিট আইএমইআই\` লিখে ১৬০০২ নম্বরে পাঠান)।"
        ]
      : [
          "Mining graphics cards often run modified vBIOS compute timings that crash official gaming drivers; reflash stock factory BIOS immediately.",
          "Verify handset IMEI validity on national BTRC registry by texting KYD <space> 15-digit IMEI to 16002."
        ],
    primaryRiskAndMitigation: {
      risk: isBangla
        ? "মাইনিংয়ে ক্ষতিগ্রস্ত জিপিইউ বা মাদারবোর্ড গরম হওয়া ল্যাপটপ কিনে কয়েক সপ্তাহের মধ্যে ব্ল্যাক স্ক্রিন বা ডেড হার্ডওয়্যার হওয়া।"
        : "Purchasing abused hardware suffering sudden micro-solder failure and permanent black screens.",
      prevention: isBangla
        ? "ক্রয়ের পূর্বে ৩০ মিনিট ফুল লোড স্ট্রেস টেস্ট ও ক্রিস্টালডিস্কইনফো দিয়ে হার্ডওয়্যার হেলথ রিপোর্ট যাচাই করা।"
        : "Never buy used PC components without a mandatory 30-minute stress benchmark and thermal log."
    },
    officialResources: []
  }),

  // --------------------------------------------------------------------------
  // 9. HOME MAINTENANCE & STAIN REMOVAL
  // --------------------------------------------------------------------------
  stains: (scenario, isBangla) => ({
    scenarioId: scenario.id,
    title: isBangla
      ? "কাপড় থেকে জেদি হলুদের দাগ, মরিচা ও তেলের দাগ দূর করার বৈজ্ঞানিক উপায়"
      : "Scientific Stain Removal Master Protocol: Turmeric, Rust & Grease",
    category: isBangla ? "দাগ দূর ও ঘরোয়া ট্রিকস" : "Home Maintenance, Stain Removal & DIY Hacks",
    subcategory: scenario.subcategory,
    overview: isBangla
      ? "হলুদের উজ্জ্বল হলুদ রঙের মূল কারণ 'কারকিউমিন' যা পানিতে দ্রবীভূত হয় না। গরম পানি বা ব্লিচ দিলে এই রঞ্জক কাপড়ে স্থায়ীভাবে বসে যায়। কিন্তু সূর্যের অতিবেগুনি (UV) রশ্মি কারকিউমিনের রাসায়নিক বন্ধন সম্পূর্ণ ভেঙে ফেলে।"
      : "Turmeric curcumin is a lipid-soluble polyphenol. Heat permanently locks it into cellulose cotton fibers, whereas solar ultraviolet photolysis naturally dismantles the chromophore molecular bonds.",
    steps: isBangla
      ? [
          {
            stepNumber: 1,
            title: "কখনোই গরম পানি বা ব্লিচ ব্যবহার করবেন না (গোল্ডেন রুল)",
            description: "দাগ লাগার সাথে সাথে সাধারণ ঠান্ডা পানি দিয়ে কাপড়ের উল্টোদিক থেকে পানি ঢেলে আলগা তরকারির তেল বের করে দিন। গরম পানি দিলে তাপে প্রোটিন ও কারকিউমিন কাপড়ের সুতোর সাথে স্থায়ীভাবে লক হয়ে যায়।",
            proTip: "ব্লিচ দিলে হলুদের দাগ লালচে হয়ে কাপড়ে স্থায়ী দাগ ফেলে কাপড় নষ্ট করে।"
          },
          {
            stepNumber: 2,
            title: "ডিশওয়াশিং লিকুইড ও বেকিং সোডার প্রলেপ",
            description: "দাগের জায়গায় কয়েক ফোঁটা ডিশওয়াশিং লিকুইড (যেমন Vim) এবং সামান্য বেকিং সোডা বা ডিটারজেন্ট দিন। আঙুল দিয়ে দাগের ওপর আলতো বৃত্তাকারে ঘষে ১০ মিনিট রেখে দিন।",
            proTip: "ডিশওয়াশের সারফ্যাক্ট্যান্ট তেলের মাধ্যমটিকে ভেঙে ফেলে।"
          },
          {
            stepNumber: 3,
            title: "ঠান্ডা পানিতে ধুয়ে নেওয়া",
            description: "হালকা ঘষে ঠান্ডা পানি দিয়ে ধুয়ে ফেলুন। ক্ষারীয় বিক্রিয়ার কারণে এ পর্যায়ে দাগটি সাময়িকভাবে লালচে বা মরিচা রঙের হতে পারে, যা সম্পূর্ণ স্বাভাবিক।",
            proTip: "দাগে কোনো ব্রাশ দিয়ে অতিরিক্ত ঘষাঘষি করবেন না, এতে কাপড়ের সুতো উঠে যাবে।"
          },
          {
            stepNumber: 4,
            title: "সূর্যের কড়া রোদে শুকানো (ম্যাজিক স্টেপ: ফটোলাইসিস)",
            description: "ভেজা কাপড়টি সরাসরি প্রখর রোদে ৪ ঘণ্টা মেলে দিন। সূর্যের অতিবেগুনি (UV) রশ্মি কারকিউমিনের রাসায়নিক বন্ধন প্রাকৃতিকভাবে ভেঙে ফেলে এবং হলুদ দাগ শূন্যে মিলিয়ে যায়!",
            proTip: "দাগ পুরোপুরি অদৃশ্য না হওয়া পর্যন্ত কাপড়কে ড্রায়ারে দেবেন না।"
          }
        ]
      : [
          {
            stepNumber: 1,
            title: "Strictly Avoid Hot Water and Chlorine Bleach",
            description: "Flush immediately from the reverse side with cold running water. Heat permanently polymerizes curcumin into cotton fibers, locking the stain permanently.",
            proTip: "Chlorine bleach reacts with curcumin to turn it an indelible brick-red hue."
          },
          {
            stepNumber: 2,
            title: "Apply Concentrated Dishwashing Detergent",
            description: "Work liquid dish soap (which breaks down oil binders) directly into the spot with baking soda. Let rest for 10 minutes to dissolve lipid carriers.",
            proTip: "Massage gently with fingers rather than abrasive stiff brushes."
          },
          {
            stepNumber: 3,
            title: "Cold Water Agitation & Rinse",
            description: "Rinse thoroughly under cold water. The spot may turn temporarily reddish due to alkaline pH shift, which is harmless and expected.",
            proTip: "Do not machine dry until the final stain inspection is complete."
          },
          {
            stepNumber: 4,
            title: "Direct Solar UV Photolysis (The Definitive Fix)",
            description: "Lay the damp garment flat under direct intense sunlight for 3–4 hours. Solar ultraviolet radiation breaks down curcumin molecular chromophore bonds, vanishing the yellow pigment completely.",
            proTip: "Ensure the stained surface directly faces the sun's zenith."
          }
        ],
    requiredDocuments: [],
    expertSecrets: isBangla
      ? [
          "মরিচার দাগ তুলতে তাজা লেবুর রসের সাথে সাধারণ লবণ মিশিয়ে দাগে লাগিয়ে ৩০ মিনিট রোদে রাখুন; মরিচা সম্পূর্ণ উঠে যাবে।",
          "তেলের দাগ লাগলে ভেজা অবস্থায় আগে ট্যালকম পাউডার বা বেবি পাউডার দিন; পাউডার ২০ মিনিটে সব তেল শুষে নেওয়ার পর ধুয়ে ফেলুন।"
        ]
      : [
          "To remove rust stains, apply a paste of lemon juice and salt, then expose to sunlight for 30 minutes before cold rinsing.",
          "For fresh oil drips, sprinkle cornstarch or baby powder immediately to absorb the wet oil matrix before applying detergent."
        ],
    primaryRiskAndMitigation: {
      risk: isBangla
        ? "গরম পানি বা ব্লিচ ব্যবহারের কারণে দামি পোশাকে স্থায়ী হলুদ বা লালচে দাগ বসে কাপড় ব্যবহারের অযোগ্য হওয়া।"
        : "Heat-setting turmeric pigments with warm water or bleach, destroying garments permanently.",
      prevention: isBangla
        ? "সর্বদা ঠান্ডা পানি ও ডিশওয়াশ লিকুইড ব্যবহার এবং রোদের অতিবেগুনি রশ্মির সাহায্যে দাগ দূর করা।"
        : "Always adhere strictly to cold water pre-treatment and solar UV breakdown."
    },
    officialResources: []
  }),

  // --------------------------------------------------------------------------
  // 10. EVERYDAY CONSUMER GOODS, FURNITURE & TOOLS
  // --------------------------------------------------------------------------
  consumer: (scenario, isBangla) => ({
    scenarioId: scenario.id,
    title: isBangla
      ? "ফার্নিচার, ওভেন, গিটার ও নিত্যপণ্য ক্রয়ের তুলনামূলক যাচাই গাইডলাইন"
      : "Everyday Consumer Goods Pre-Purchase SOP: Furniture, Microwave & Instruments",
    category: isBangla ? "কেনাকাটা ও পণ্য যাচাই" : "Everyday Consumer Goods & Product Selection",
    subcategory: scenario.subcategory,
    overview: isBangla
      ? "আসবাবপত্র, মাইক্রোওয়েভ ওভেন বা বাদ্যযন্ত্রের মতো টেকসই পণ্য কেনার সময় ব্র্যান্ডের বিজ্ঞাপনের বাইরে উপাদানের মান, অভ্যন্তরীণ ইলেকট্রনিক্স ও স্ট্রাকচারাল স্থায়িত্ব যাচাই করা জরুরি।"
      : "Purchasing durable consumer goods—solid wood furniture, microwave ovens, or musical instruments—demands rigorous material verification to avoid low-density composite veneers and defective magnetrons.",
    steps: isBangla
      ? [
          {
            stepNumber: 1,
            title: "আসল সেগুন কাঠ বনাম ভিনিয়ার পার্টিকাল বোর্ড চেনার উপায়",
            description: "আসল কাঠের প্রান্ত (End-grain) দেখুন; সেখানে কাঠের স্বাভাবিক বলয় ও আঁশ দেখা যাবে। ভিনিয়ার বোর্ডের পাশে কৃত্রিম প্লাস্টিকের এজ-ব্যান্ডিং টেপ লাগানো থাকে।",
            proTip: "আসবাবপত্রের পেছনের ও নিচের ড্রয়ারের কাঠ পরীক্ষা করুন; অনেকে সামনে সেগুন দিয়ে পেছনে নরম কাঠের জোড়াতালি দেয়।"
          },
          {
            stepNumber: 2,
            title: "মাইক্রোওয়েভ ওভেনের ম্যাগনেট্রন ও ক্যাভিটি টেস্ট",
            description: "১ কাপ সাধারণ ঠান্ডা পানি ওভেনে দিয়ে ১ মিনিটের টাইমার দিন। পানি ফুটে ওঠার তাপমাত্রা পরীক্ষা করুন। ওভেনের ভেতরে কোনো মরিচা বা রং চটা আছে কিনা দেখুন, কারণ খালি ধাতব অংশ থেকে স্পার্ক (Arcing) হয়ে আগুন ধরতে পারে।",
            proTip: "দরজার সেফটি ইন্টারলক সুইচ ঠিকমতো কাজ করছে কিনা পরীক্ষা করুন।"
          },
          {
            stepNumber: 3,
            title: "অ্যাকোস্টিক ও ইলেকট্রিক গিটার যাচাইয়ের নিয়ম",
            description: "১২তম ফ্রেটে তারের উচ্চতা (Action Height) স্কেল দিয়ে মেপে দেখুন; এটি ২.৫ মিমি-র নিচে হওয়া উচিত। ট্রাস রড ঠিক আছে কিনা দেখতে ঘাড়ের বাঁক সোজা করুন এবং কোনো ফ্রেটে ঝনঝন শব্দ (Fret Buzz) আছে কিনা বাজিয়ে শুনুন।",
            proTip: "গিটারের পেছনের ব্রিজে বেলুন ফোলা ফোলা (Belly bulge) থাকলে সাউন্ডবোর্ড ক্ষতিগ্রস্ত।"
          }
        ]
      : [
          {
            stepNumber: 1,
            title: "Distinguishing Solid Teak (Segun) from Particle Board Veneer",
            description: "Inspect the end-grain along edges. Solid hardwood displays natural continuous growth rings. Veneer panels reveal artificial PVC edge-banding glued over compressed sawdust cores.",
            proTip: "Inspect hidden drawer undercarriages and back panels for substituted cheap plywood."
          },
          {
            stepNumber: 2,
            title: "Testing Microwave Oven Magnetron Output & Enamel Integrity",
            description: "Place a cup of room-temperature water inside on high for 60 seconds; it must reach a vigorous rolling boil. Inspect the interior cavity for enamel chipping, which induces hazardous electrical arcing.",
            proTip: "Ensure the triple door interlock switches kill power instantly when unlatched."
          },
          {
            stepNumber: 3,
            title: "Acoustic & Electric Guitar Physical Playability Check",
            description: "Measure string action height at the 12th fret; it must remain under 2.5mm without fret buzz. Sight down the neck to inspect truss rod relief and verify that the soundboard behind the bridge is not bellying outward.",
            proTip: "Test tuning machine heads for loose gear backlash."
          }
        ],
    requiredDocuments: [
      { name: isBangla ? "ওয়ারেন্টি কার্ড ও ক্রয়ের রসিদ" : "Official Retail Warranty Card & Invoice", whereToGet: isBangla ? "শোরুম / বিক্রেতা" : "Authorized showroom", purpose: isBangla ? "বিক্রয়োত্তর সেবা ও পার্টস রিপ্লেসমেন্ট" : "After-sales replacement and service claims" }
    ],
    expertSecrets: isBangla
      ? [
          "কাঠের ফার্নিচার কেনার সময় উড ময়েশ্চার মিটার (Moisture Meter) দিয়ে আর্দ্রতা মেপে নিন; ১২% এর বেশি আর্দ্রতা থাকলে বর্ষাকালে কাঠ বেঁকে যাবে এবং ড্রয়ার আটকে যাবে।",
          "ইনভার্টার মাইক্রোওয়েভ ওভেন সাধারণ ওভেনের চেয়ে কম বিদ্যুৎ খরচ করে এবং খাবার সমানভাবে গরম করে।"
        ]
      : [
          "Verify timber moisture content with a pin moisture meter; readings above 12% result in warped tabletops and jammed drawers during monsoon humidity shifts.",
          "Inverter microwave ovens deliver continuous modulated power rather than harsh on-off duty cycles, cooking food far more evenly."
        ],
    primaryRiskAndMitigation: {
      risk: isBangla
        ? "ভেজাল উপাদান বা ত্রুটিপূর্ণ ইলেকট্রনিক্স কিনে স্বল্প সময়ে নষ্ট হওয়া ও অর্থনৈতিক ক্ষতি।"
        : "Purchasing low-density composite furniture masked as hardwood or appliances with defective magnetrons.",
      prevention: isBangla
        ? "কেনার আগে কাঠের এন্ড-গ্রেন পরীক্ষা, ওভেনের পানি টেস্ট ও ফ্রেট অ্যাকশন পরিমাপ করা।"
        : "Always inspect physical joinery, test appliance heating efficiency, and insist on official warranty documents."
    },
    officialResources: []
  }),

  // --------------------------------------------------------------------------
  // 11. TAXES, E-TIN & FREELANCING
  // --------------------------------------------------------------------------
  taxes: (scenario, isBangla) => ({
    scenarioId: scenario.id,
    title: isBangla
      ? "অনলাইন ই-টিন, জিরো ট্যাক্স রিটার্ন ও ফ্রিল্যান্সার প্রণোদনা পূর্ণাঙ্গ গাইড"
      : "e-TIN, Zero-Tax Return Filing & Freelancer Remittance Incentive SOP",
    category: isBangla ? "ব্যাংক, সঞ্চয় ও বিনিয়োগ" : "Banking, Finance & Investments",
    subcategory: scenario.subcategory,
    overview: isBangla
      ? "ব্যাংক লোন, ক্রেডিট কার্ড, ট্রেড লাইসেন্স বা সঞ্চয়পত্র ক্রয়ের জন্য আয়কর রিটার্ন দাখিলের প্রমাণপত্র (প্রত্যায়নপত্র) বাধ্যতামূলক। করযোগ্য আয় না থাকলেও সহজে অনলাইনে জিরো ট্যাক্স রিটার্ন জমা দেওয়া যায়।"
      : "Submitting an annual income tax return and possessing the official Submission Acknowledgment Slip (প্রত্যায়নপত্র) is mandatory for credit cards, bank loans, and trade licenses, even for zero-tax earners.",
    steps: isBangla
      ? [
          {
            stepNumber: 1,
            title: "স্মার্ট এনআইডি দিয়ে অনলাইন ই-টিন (e-TIN) খোলা",
            description: "incometax.gov.bd তে গিয়ে স্মার্ট এনআইডি ও মোবাইল নম্বর দিয়ে বিনামূল্যে ৫ মিনিটে ১২ ডিজিটের ই-টিন সার্টিফিকেট সংগ্রহ করুন।",
            proTip: "একবার ই-টিন খুললে প্রতি বছর আয়কর রিটার্ন দাখিল করা আইনত বাধ্যতামূলক।"
          },
          {
            stepNumber: 2,
            title: "প্রয়োজনীয় আর্থিক কাগজপত্র প্রস্তুতকরণ",
            description: "বিগত ১ জুলাই থেকে ৩০ জুন পর্যন্ত ১২ মাসের ব্যাংক স্টেটমেন্ট, স্যালারি সার্টিফিকেট (চাকরিজীবীদের ক্ষেত্রে), এবং সঞ্চয়পত্র বা স্থায়ী আমানতের ট্যাক্স ডিডাকশন সার্টিফিকেট (AIT) সংগ্রহ করুন।",
            proTip: "ব্যাংক থেকে ট্যাক্স সার্টিফিকেট তুলে রাখুন যাতে উৎসে কাটা কর সমন্বয় করা যায়।"
          },
          {
            stepNumber: 3,
            title: "etaxnbr.gov.bd তে অনলাইনে রিটার্ন দাখিল",
            description: "জাতীয় রাজস্ব বোর্ডের অনলাইন পোর্টালে আয় ও সম্পদের বিবরণ (IT-10B) দিয়ে রিটার্ন পূরণ করুন। করযোগ্য আয়ের নিচে থাকলে (সাধারণ করমুক্ত সীমা ৩,৫০,০০০ টাকা) শূন্য কর দিয়ে সাবমিট করুন।",
            proTip: "সাবমিট করার সাথে সাথে সিস্টেম থেকে কিউআর কোডযুক্ত 'রিটার্ন দাখিলের প্রমাণপত্র' ডাউনলোড করুন।"
          },
          {
            stepNumber: 4,
            title: "ফ্রিল্যান্সারদের জন্য ২.৫% নগদ প্রণোদনা ও কর অব্যাহতি",
            description: "বৈধ ব্যাংকিং চ্যানেল বা ওয়্যার ট্রান্সফারে রেমিট্যান্স আনলে ব্যাংক থেকে স্বয়ংক্রিয়ভাবে ২.৫% নগদ প্রণোদনা পাওয়া যায়। সংশ্লিষ্ট ব্যাংক থেকে ফর্ম-সি (Form-C) সংগ্রহ করে রাখলে আয়কর অব্যাহতি নিশ্চিত থাকে।",
            proTip: "আইটি ফ্রিল্যান্সারদের রেমিট্যান্স আয় সরকারি নিয়মে সম্পূর্ণ করমুক্ত।"
          }
        ]
      : [
          {
            stepNumber: 1,
            title: "Generate 12-Digit e-TIN via incometax.gov.bd",
            description: "Register online in 5 minutes using your Smart National ID and mobile phone to receive your official 12-digit electronic Tax Identification Number certificate.",
            proTip: "Obtaining an e-TIN creates a statutory legal obligation to file annual tax returns."
          },
          {
            stepNumber: 2,
            title: "Assemble 12-Month Financial Records & Bank Statements",
            description: "Procure stamped bank statements covering July 1 to June 30, salary certificates, and Advance Income Tax (AIT) deduction certificates for all fixed deposits and savings.",
            proTip: "AIT deducted by banks at source offsets payable tax directly."
          },
          {
            stepNumber: 3,
            title: "Submit Online Return on etaxnbr.gov.bd",
            description: "Complete asset and income statements on the National Board of Revenue portal. If income falls below the BDT 350,000 threshold, file a Zero-Tax Return to instantly download your Submission Acknowledgment Slip.",
            proTip: "The digital acknowledgment slip is required for trade licenses, loans, and credit cards."
          },
          {
            stepNumber: 4,
            title: "Claim Freelancer 2.5% Cash Incentive & Tax Exemption",
            description: "Route IT software exports through authorized banking wire channels to automatically receive the 2.5% government cash incentive. Retain Form-C from your bank for complete income tax exemption.",
            proTip: "Software exports and freelance tech earnings are fully tax-exempt under national law."
          }
        ],
    requiredDocuments: isBangla
      ? [
          { name: "১২ ডিজিটের ই-টিন সার্টিফিকেট", whereToGet: "incometax.gov.bd", purpose: "করদাতা শনাক্তকরণ" },
          { name: "১২ মাসের ব্যাংক স্টেটমেন্ট ও ট্যাক্স সার্টিফিকেট", whereToGet: "সংশ্লিষ্ট ব্যাংক শাখা", purpose: "বাৎসরিক আয় ও উৎসে কর কর্তন প্রমাণ" },
          { name: "রিটার্ন দাখিলের প্রমাণপত্র (Acknowledgment Slip)", whereToGet: "etaxnbr.gov.bd", purpose: "ব্যাংক লোন ও ট্রেড লাইসেন্স নবায়ন" },
        ]
      : [
          { name: "12-Digit e-TIN Certificate", whereToGet: "incometax.gov.bd", purpose: "Taxpayer legal identity" },
          { name: "12-Month Bank Statement & AIT Certificate", whereToGet: "Commercial Bank", purpose: "Income and tax deducted at source validation" },
          { name: "Return Submission Acknowledgment Slip", whereToGet: "etaxnbr.gov.bd", purpose: "Proof of annual tax compliance for credit cards and loans" },
        ],
    expertSecrets: isBangla
      ? [
          "সঞ্চয়পত্রে বিনিয়োগের ক্ষেত্রে ই-টিন ও রিটার্ন দাখিলের প্রমাণপত্র দিলে উৎসে মাত্র ৫% কর কাটা হয়; না দিলে ১০% কর কাটা যায়।",
          "স্বর্ণালংকার বা উত্তরাধিকারসূত্রে পাওয়া সম্পদ রিটার্নের আইটি-১০বি ফরমে সঠিকভাবে উল্লেখ রাখলে পরবর্তীতে কোনো প্রশ্নের মুখোমুখি হতে হয় না।"
        ]
      : [
          "Submitting return proof reduces withholding tax on Sanchayapatra interest from 10% down to 5%.",
          "Declare inherited gold and family property on Form IT-10B to substantiate future wealth gains safely."
        ],
    primaryRiskAndMitigation: {
      risk: isBangla
        ? "ই-টিন খুলে রিটার্ন দাখিল না করলে জরিমানা, ব্যাংক অ্যাকাউন্ট ফ্রিজ ও আইনি নোটিশ আসার ঝুঁকি।"
        : "Penalties, banking restrictions, and audit notices for non-filing after e-TIN registration.",
      prevention: isBangla
        ? "প্রতি বছর নভেম্বর মাসের মধ্যে অনলাইনে সহজে জিরো রিটার্ন দাখিল করে স্লিপ সংরক্ষণ করা।"
        : "Always file before the November deadline on etaxnbr.gov.bd and archive your acknowledgment slip."
    },
    officialResources: [
      { name: isBangla ? "জাতীয় রাজস্ব বোর্ড (NBR) ই-ট্যাক্স পোর্টাল" : "National Board of Revenue (NBR) e-Tax", urlOrContact: "https://etaxnbr.gov.bd", description: isBangla ? "অনলাইন আয়কর রিটার্ন দাখিল ও প্রত্যয়নপত্র" : "Online tax return filing and acknowledgment slips" },
      { name: isBangla ? "অনলাইন ই-টিন রেজিস্ট্রেশন" : "e-TIN Registration Portal", urlOrContact: "https://incometax.gov.bd", description: isBangla ? "নতুন করদাতা শনাক্তকরণ নম্বর গ্রহণ" : "Official national e-TIN issuance portal" },
    ]
  }),

  // --------------------------------------------------------------------------
  // 12. MOTORCYCLE & SCOOTER
  // --------------------------------------------------------------------------
  motorcycle: (scenario, isBangla) => ({
    scenarioId: scenario.id,
    title: isBangla
      ? "ব্যবহৃত মোটরসাইকেল ও স্কুটার ক্রয়ের কমপ্লিট চেকলিস্ট ও বিআরটিএ মালিকানা বদল"
      : "Pre-Owned Motorcycle & Scooter Due Diligence & BRTA Ownership Transfer",
    category: isBangla ? "যানবাহন ও মোটরসাইকেল" : "Vehicles & Motorcycles",
    subcategory: scenario.subcategory,
    overview: isBangla
      ? "ব্যবহৃত বাইক কেনার ক্ষেত্রে বাহ্যিক রঙের চেয়ে ইঞ্জিন সাউন্ড, ফ্রন্ট ফর্ক শক-অ্যাবজরবার অয়েল লিকেজ, চেইন-স্প্রকেট ক্ষয় এবং বিআরটিএ-তে মূল মালিকের বায়োমেট্রিক নিশ্চিত করা সবচেয়ে জরুরি।"
      : "Inspecting a used motorcycle requires verifying engine compression, front suspension fork seals, drive chain/sprocket wear, and ensuring physical BRTA biometric transfer with the registered owner.",
    steps: isBangla
      ? [
          {
            stepNumber: 1,
            title: "ইঞ্জিন কোল্ড স্টার্ট ও ধোঁয়া পরীক্ষা",
            description: "বাইকের ইঞ্জিনে হাত দিয়ে নিশ্চিত হন ইঞ্জিনটি পুরোপুরি ঠান্ডা। কোল্ড স্টার্ট দিয়ে এক্সিলারেটর হালকা বাড়িয়ে সাইলেন্সার পাইপের মুখে সাদা টিস্যু ধরুন। নীলচে বা সাদা ধোঁয়া এবং তেলের ছিটা বের হলে পিস্টন রিং বা ভালভ সিল ক্ষয়প্রাপ্ত।",
            proTip: "বিক্রেতা আসার আগে বাইক গরম করে রাখলে ইঞ্জিনের শব্দ বা ধোঁয়া সাময়িকভাবে চেপে রাখা যায়; তাই সবসময় কোল্ড স্টার্ট নিন।"
          },
          {
            stepNumber: 2,
            title: "ফ্রন্ট ফর্ক (শক অ্যাবজরবার) ও হ্যান্ডেলবার অ্যালাইনমেন্ট",
            description: "সামনের ব্রেক চেপে হ্যান্ডেলবার নিচের দিকে কয়েকবার জোরে চাপ দিন। ফর্কের রূপালী পাইপে তেল লেগে থাকলে ফর্ক অয়েল সিল নষ্ট। হ্যান্ডেল সোজা রেখে ছেড়ে দিলে বাইক একদিকে টানে কিনা টেস্ট রাইডে দেখুন।",
            proTip: "টি-রড বা চ্যাসিস বাঁকা থাকলে হাই স্পিডে বাইক প্রচণ্ড কাঁপবে।"
          },
          {
            stepNumber: 3,
            title: "চেইন ও ড্রাইভ স্প্রকেটের দাঁত পরীক্ষা",
            description: "পেছনের চাকার স্প্রকেটের দাঁতগুলো কি ধারালো বা বাঁকা হয়ে গেছে কিনা দেখুন। চেইন মাঝখানে আঙুল দিয়ে টেনে দেখুন ২০-২৫ মিমি-র বেশি ঢিলা হলে চেইন সেট বদলাতে হবে।",
            proTip: "নতুন চেইন স্প্রকেট সেট পরিবর্তনের খরচ প্রায় ৩,০০০ থেকে ৬,০০০ টাকা।"
          },
          {
            stepNumber: 4,
            title: "হ্যান্ডেল নেকের চেসিস নম্বর ও ইঞ্জিন নম্বর মেলানো",
            description: "হ্যান্ডেলবারের ডান পাশে নেক পাইপে খোদাই করা চেসিস নম্বরের প্রতিটি অক্ষর বিআরটিএ স্মার্ট রেজিস্ট্রেশন কার্ডের সাথে হুবহু মিলিয়ে নিন। কোনো ঘষা বা রি-পাঞ্চিং থাকলে বাইকটি চোরাই হতে পারে।",
            proTip: "ইঞ্জিনের নিচে ক্র্যাঙ্ককেসে খোদাই করা ইঞ্জিন নম্বরও মিলিয়ে নিন।"
          },
          {
            stepNumber: 5,
            title: "বিআরটিএ সার্কেল অফিসে মালিকানা বদল (TTO ও বায়োমেট্রিক)",
            description: "বিক্রেতার উপস্থিতিতে বিআরটিএ সার্কেল অফিসে ফরম-TO ও TTO তে স্বাক্ষর এবং আঙুলের ছাপ (বায়োমেট্রিক) দিন। শুধু নোটারি এফিডেভিট দিয়ে বাইক চালালে কোনো আইনি মালিকানা জন্মায় না।",
            proTip: "প্রথম মালিকের স্বাক্ষর ও বায়োমেট্রিক ছাড়া বিআরটিএ কখনোই মালিকানা বদল করে না।"
          }
        ]
      : [
          {
            stepNumber: 1,
            title: "Cold Engine Start & Exhaust Inspection",
            description: "Touch the engine cylinder fins to confirm it is completely cold before starting. Idle the engine and hold a white tissue near the exhaust tip—blue/white smoke indicates worn piston rings or valve stem seals.",
            proTip: "Sellers often pre-warm engines to conceal cold start rattling and smoke."
          },
          {
            stepNumber: 2,
            title: "Front Fork Shock Seals & Headstock Alignment",
            description: "Engage the front brake and pump the front suspension firmly. If oil rings form on the chrome stanchions, the oil seals are blown. On a test ride, verify the bike tracks true without pulling sideways.",
            proTip: "A bent chassis or bent fork tubes poses severe high-speed handling risks."
          },
          {
            stepNumber: 3,
            title: "Drive Chain Slack & Sprocket Tooth Profile",
            description: "Inspect rear sprocket teeth for hooked or pointed wear. Check vertical chain slack mid-span; play exceeding 25-30mm signals stretched drive links requiring full replacement.",
            proTip: "Replacing a chain and sprocket set costs between BDT 3,000 to 6,000."
          },
          {
            stepNumber: 4,
            title: "Verify Chassis Number on Steering Neck Stem",
            description: "Inspect the physical stamped VIN on the steering neck. Compare every alphanumeric character against the BRTA Smart Registration Card. Check for grinder marks or re-punching.",
            proTip: "Also verify the engine block stamping under the left crankcase."
          },
          {
            stepNumber: 5,
            title: "Execute BRTA Biometric Transfer (TO / TTO)",
            description: "Both buyer and seller must appear at the BRTA circle office for biometric fingerprint authentication and TO/TTO deed submission. A notary public affidavit alone provides zero legal title.",
            proTip: "BRTA will never transfer vehicle title without the registered owner's biometric scan."
          }
        ],
    requiredDocuments: isBangla
      ? [
          { name: "মূল বিআরটিএ ডিজিটাল রেজিস্ট্রেশন স্মার্ট কার্ড", whereToGet: "বিক্রেতা", purpose: "মালিকানার মূল সরকারি প্রমাণ" },
          { name: "হালনাগাদ ট্যাক্স টোকেন", whereToGet: "বিক্রেতা / বিআরটিএ", purpose: "সড়ক কর পরিশোধ নিশ্চিতকরণ" },
          { name: "বিক্রেতা কর্তৃক স্বাক্ষরিত ফরম-TO ও TTO", whereToGet: "বিআরটিএ পোর্টাল (bsp.brta.gov.bd)", purpose: "মালিকানা হস্তান্তরের সরকারি আবেদন" },
          { name: "ক্রেতা ও বিক্রেতার স্মার্ট জাতীয় পরিচয়পত্র (NID)", whereToGet: "উভয় পক্ষ", purpose: "নাগরিক পরিচয় ও বায়োমেট্রিক মেলানো" },
          { name: "৩ কপি পাসপোর্ট সাইজ রঙিন ছবি", whereToGet: "উভয় পক্ষ", purpose: "বিআরটিএ দাপ্তরিক নথিতে সংরক্ষণ" },
        ]
      : [
          { name: "Original BRTA Smart Registration Card", whereToGet: "Registered Seller", purpose: "Primary proof of official state ownership" },
          { name: "Valid Tax Token Certificate", whereToGet: "Seller / BRTA", purpose: "Confirmation of paid road taxes" },
          { name: "Form TO & Form TTO Signed by Seller", whereToGet: "BRTA Portal (bsp.brta.gov.bd)", purpose: "Statutory transfer application documents" },
          { name: "Buyer & Seller Smart NIDs", whereToGet: "Both parties", purpose: "Identity verification for biometric registration" },
          { name: "Passport-Sized Color Photos (3 Copies)", whereToGet: "Both parties", purpose: "Official dossier filing at BRTA" },
        ],
    expertSecrets: isBangla
      ? [
          "শুধু 'হলফনামা' (Affidavit) দিয়ে বাইক কিনবেন না; প্রথম মালিক মারা গেলে বা সহযোগিতা না করলে বাইক কখনোই আপনার নামে হবে না।",
          "ব্যাংক লোনে কেনা বাইক হলে বিআরটিএ কার্ডে 'H.P.' (Hire Purchase) লেখা থাকবে; ব্যাংক থেকে লোন পরিশোধের অনাপত্তিপত্র (NOC) ছাড়া এটি কেনা অবৈধ।",
          "টেস্ট রাইডের সময় ২য় ও ৩য় গিয়ারে পিকআপ দিয়ে দেখুন ক্লাচ স্লিপ করে ইঞ্জিন অহেতুক চিল্লায় কিন্তু গতি বাড়ে না কিনা—তাহলে ক্লাচ প্লেট শেষ।"
        ]
      : [
          "Never purchase with only an affidavit; if the original owner becomes uncooperative or passes away, title can never be transferred.",
          "Check the Smart Card for 'H.P.' (Hire Purchase) bank hypothecation; require a formal Bank Clearance/NOC letter before paying.",
          "During the test ride, accelerate hard in 2nd/3rd gear; if the engine screams without matching acceleration, the clutch plates are burnt."
        ],
    primaryRiskAndMitigation: {
      risk: isBangla
        ? "চোরাই বা বড় অ্যাক্সিডেন্ট করা বাইক কিনে পুলিশি ঝামেলা ও আর্থিক ক্ষতির শিকার হওয়া।"
        : "Buying stolen or crash-damaged motorcycles with unverified legal title or seized bank liens.",
      prevention: isBangla
        ? "বিআরটিএ পোর্টালে চেসিস ও ইঞ্জিন নম্বর মিলিয়ে দেখা এবং সরাসরি বিআরটিএ অফিসে গিয়ে বায়োমেট্রিক সহ মালিকানা বদল করা।"
        : "Always cross-verify VIN on steering neck with BRTA portal and insist on physical biometric transfer at the BRTA circle office."
    },
    officialResources: [
      { name: isBangla ? "বিআরটিএ সেবা বাতায়ন (BSP)" : "BRTA Service Portal (BSP)", urlOrContact: "https://bsp.brta.gov.bd", description: isBangla ? "মোটরসাইকেলের ফি ও মালিকানা বদলের অনলাইন আবেদন" : "Online portal for vehicle ownership transfer and fee estimation" },
      { name: isBangla ? "বিআরটিএ হেল্পলাইন" : "BRTA Citizen Helpline", urlOrContact: "16107", description: isBangla ? "মালিকানা বদল ও রেজিস্ট্রেশন সংক্রান্ত তথ্য" : "Direct telephone support for vehicle documentation" },
    ]
  }),

  // --------------------------------------------------------------------------
  // 13. HIGHER EDUCATION ABROAD & STUDENT VISA
  // --------------------------------------------------------------------------
  abroad: (scenario, isBangla) => ({
    scenarioId: scenario.id,
    title: isBangla
      ? "উচ্চশিক্ষায় বিদেশ যাত্রা ও স্টুডেন্ট ভিসা আবেদনের পূর্ণাঙ্গ নির্দেশিকা"
      : "Higher Education Abroad & Student Visa SOP: Application, Bank Solvency & Embassy Interview",
    category: isBangla ? "উচ্চশিক্ষা ও বিদেশ গমন" : "Higher Education & Global Visas",
    subcategory: scenario.subcategory,
    overview: isBangla
      ? "উচ্চশিক্ষার জন্য বিদেশে (ইউএসএ, যুক্তরাজ্য, কানাডা, জার্মানি, অস্ট্রেলিয়া) আবেদন করার ক্ষেত্রে আইইএলটিএস স্কোরের পাশাপাশি স্টেটমেন্ট অব পারপাস (SOP), ব্যাংক স্টেটমেন্টের ধারাবাহিকতা ও পররাষ্ট্র মন্ত্রণালয়ের সত্যায়ন সবচেয়ে গুরুত্বপূর্ণ।"
      : "Pursuing higher education abroad requires academic transcript evaluation, proof of continuous financial solvency, a plagiarism-free Statement of Purpose (SOP), and embassy interview preparation.",
    steps: isBangla
      ? [
          {
            stepNumber: 1,
            title: "ইংরেজি দক্ষতা পরীক্ষা ও শিক্ষাগত যোগ্যতা মূল্যায়ন (IELTS / WES)",
            description: "টার্গেট দেশের চাহিদা অনুযায়ী IELTS (কমপক্ষে ৬.৫, কোনো ব্যান্ডে ৬.০-এর নিচে নয়) বা GRE/Duolingo পরীক্ষা দিন। উত্তর আমেরিকার জন্য WES বা ECE দিয়ে সার্টিফিকেট মূল্যায়ন সম্পন্ন করুন।",
            proTip: "শর্টকাট বা কম স্কোরের আশায় আন-অ্যাক্রেডিটেড বিশ্ববিদ্যালয়ে আবেদন করবেন না; ভিসায় রিজেকশন আসবে।"
          },
          {
            stepNumber: 2,
            title: "মৌলিক ও শক্তিশালী স্টেটমেন্ট অব পারপাস (SOP) তৈরি",
            description: "নিজের ভাষায় একাডেমিক আগ্রহ, অতীতের গবেষণা বা প্রজেক্ট এবং ডিগ্রি শেষ করে নিজ দেশে কীভাবে অবদান রাখবেন তা স্পষ্ট করুন। কোনো এআই টুল দিয়ে হুবহু কপি-পেস্ট করা এসওপি অ্যাম্বাসির এআই ডিটেক্টরে সাথে সাথে ধরা পড়ে।",
            proTip: "কেন আপনি অন্য দেশ ছেড়ে নির্দিষ্ট এই বিশ্ববিদ্যালয়টি বেছে নিলেন—তা নির্দিষ্ট প্রফেসরের কাজের উল্লেখসহ লিখুন।"
          },
          {
            stepNumber: 3,
            title: "অফার লেটার ও আই-২০ / সিএএস (I-20 / CAS) গ্রহণ",
            description: "বিশ্ববিদ্যালয়ে আবেদন অনুমোদিত হলে আনকন্ডিশনাল অফার লেটার আসবে। নির্ধারিত ডিপোজিট জমা দিলে বিশ্ববিদ্যালয় আপনাকে ভিসার জন্য অফিশিয়াল I-20 (USA) বা CAS (UK) পাঠাবে।",
            proTip: "আই-২০ পেলেই সেভিস ফি (SEVIS fee) দিয়ে পেমেন্ট রসিদ প্রিন্ট করে রাখুন।"
          },
          {
            stepNumber: 4,
            title: "ব্যাংক সলভেন্সি ও অর্থের ধারাবাহিক উৎস (Source of Fund) নিশ্চিতকরণ",
            description: "স্পন্সরের ব্যাংক অ্যাকাউন্টে কমপক্ষে ৬ মাসের পর্যাপ্ত ব্যালেন্স থাকতে হবে। হঠাৎ করে অ্যাকাউন্টে বড় অঙ্কের টাকা জমা দিলে অ্যাম্বাসি 'Unexplained Lump-sum Deposit' হিসেবে ভিসা বাতিল করবে। সাথে ট্যাক্স রিটার্ন ও জমি/ব্যবসার দলিল রাখুন।",
            proTip: "টাকার উৎসের বৈধ প্রমাণ (যেমন ব্যবসা, জমি বিক্রি বা চাকরির পে-স্লিপ) ব্যাংক স্টেটমেন্টের সাথে সংযুক্ত করুন।"
          },
          {
            stepNumber: 5,
            title: "পররাষ্ট্র ও শিক্ষা মন্ত্রণালয় থেকে নথিপত্র সত্যায়ন (Attestation)",
            description: "এসএসসি, এইচএসসি ও অনার্সের মূল সার্টিফিকেট শিক্ষা বোর্ড, শিক্ষা মন্ত্রণালয় এবং পররাষ্ট্র মন্ত্রণালয় (MOFA) থেকে ডিজিটাল সত্যায়ন করে নিন।",
            proTip: "অনলাইনে mo-onlineattestation পোর্টালে আবেদন করে পররাষ্ট্র মন্ত্রণালয় থেকে সত্যায়ন রসিদ নিন।"
          },
          {
            stepNumber: 6,
            title: "অ্যাম্বাসি ভিসা ইন্টারভিউ প্রস্তুতি",
            description: "ভিসা অফিসারের সামনে আত্মবিশ্বাসের সাথে উত্তর দিন: কেন এই বিশ্ববিদ্যালয়, খরচ কে দিচ্ছে এবং ডিগ্রি শেষে বাংলাদেশে ফিরে আসার কারণ (Home Ties)।",
            proTip: "কখনোই সেখানে স্থায়ীভাবে থেকে যাওয়ার অভিপ্রায় প্রকাশ করবেন না; সর্বদা ফিরে আসার পরিকল্পনা তুলে ধরুন।"
          }
        ]
      : [
          {
            stepNumber: 1,
            title: "Language Proficiency & Academic Credential Evaluation",
            description: "Achieve the target IELTS score (typically 6.5+ with no band under 6.0) or TOEFL/GRE. Complete formal degree credential evaluation via WES/ECE where required.",
            proTip: "Avoid non-accredited private colleges offering low entry barriers; they trigger high embassy visa refusal rates."
          },
          {
            stepNumber: 2,
            title: "Draft an Authentic Statement of Purpose (SOP)",
            description: "Articulate past research projects, undergraduate coursework, specific faculty alignment, and post-graduation career trajectory in your home country. Avoid generic AI-generated templates.",
            proTip: "Explicitly reference 1–2 professors and active research labs at the destination university."
          },
          {
            stepNumber: 3,
            title: "Secure Unconditional Offer Letter & Form I-20 / CAS",
            description: "Upon admission acceptance, submit your tuition deposit to receive the statutory immigration certificate: Form I-20 (US) or CAS Letter (UK).",
            proTip: "Pay your SEVIS I-901 fee promptly and archive the official digital payment receipt."
          },
          {
            stepNumber: 4,
            title: "Verify 6-Month Bank Solvency & Source of Funds",
            description: "Demonstrate uninterrupted account liquidity for at least 6 months. Sudden large deposits without documented asset liquidation or business income attract visa refusals.",
            proTip: "Attach sponsor income tax returns, trade licenses, or property deed sale proofs matching bank entries."
          },
          {
            stepNumber: 5,
            title: "Ministry of Foreign Affairs (MOFA) Document Attestation",
            description: "Certify all secondary, higher-secondary, and bachelor's degree certificates through Education Boards, the Ministry of Education, and MOFA consular wing.",
            proTip: "Verify all serial numbers and names against your Smart NID and Machine Readable/E-Passport."
          },
          {
            stepNumber: 6,
            title: "Embassy Visa Interview Preparation & Home Ties",
            description: "Answer consular officers with clarity and brevity regarding course relevance, financial sponsors, and irrevocable socioeconomic intent to return home upon graduation.",
            proTip: "Never express immigration intent during student visa interviews; establish strong ties to your home country."
          }
        ],
    requiredDocuments: isBangla
      ? [
          { name: "মূল ই-পাসপোর্ট (কমপক্ষে ৬ মাসের মেয়াদসহ)", whereToGet: "পাসপোর্ট অধিদপ্তর", purpose: "ভিসা স্ট্যাম্পিং ও আন্তর্জাতিক ভ্রমণ" },
          { name: "বিশ্ববিদ্যালয়ের অফার লেটার ও I-20 / CAS / LoA", whereToGet: "বিদেশি বিশ্ববিদ্যালয়", purpose: "ভিসা আবেদনের মূল ভিত্তি" },
          { name: "আইইএলটিএস / টোফেল মূল স্কোর রিপোর্ট (TRF)", whereToGet: "British Council / IDP / ETS", purpose: "ভাষা দক্ষতার আন্তর্জাতিক প্রমাণ" },
          { name: "পররাষ্ট্র মন্ত্রণালয় সত্যায়িত মূল সার্টিফিকেট ও মার্কশিট", whereToGet: "শিক্ষা বোর্ড ও MOFA", purpose: "শিক্ষাগত যোগ্যতার সত্যতা প্রমাণ" },
          { name: "৬ মাসের ব্যাংক স্টেটমেন্ট ও সলভেন্সি সার্টিফিকেট", whereToGet: "স্পন্সরের ব্যাংক শাখা", purpose: "পড়াশোনা ও থাকা-খাওয়ার আর্থিক সামর্থ্য প্রমাণ" },
          { name: "স্পন্সরের আয়ের উৎস (ট্যাক্স রিটার্ন, ট্রেড লাইসেন্স, জমির দলিল)", whereToGet: "জাতীয় রাজস্ব বোর্ড / সংশ্লিষ্ট দপ্তর", purpose: "ব্যাংকের টাকার বৈধ উৎস প্রমাণ" },
        ]
      : [
          { name: "Original E-Passport (Valid 6+ Months)", whereToGet: "Passport Authority", purpose: "Official visa stamping and international travel" },
          { name: "Official Form I-20 / CAS / Letter of Acceptance (LoA)", whereToGet: "Admitting University", purpose: "Legal basis for student visa petition" },
          { name: "Official IELTS / TOEFL / GRE Test Report Form", whereToGet: "IDP / British Council / ETS", purpose: "Standardized English proficiency certification" },
          { name: "MOFA-Attested Academic Certificates & Transcripts", whereToGet: "Education Board & Ministry of Foreign Affairs", purpose: "Official authentication of academic credentials" },
          { name: "6-Month Bank Statement & Solvency Certificate", whereToGet: "Sponsor's Bank Branch", purpose: "Proof of financial liquid sufficiency for tuition and living" },
          { name: "Documented Source of Funds (Tax Returns, Trade License)", whereToGet: "National Revenue Board / City Corp", purpose: "Validates lawful origin of sponsor financial resources" },
        ],
    expertSecrets: isBangla
      ? [
          "ব্যাংকে হঠাৎ করে আত্মীয় বা ধার করা ২০ লাখ টাকা ঢাললে ভিসা অফিসারের চোখে তা সাথে সাথে লাল সংকেত (Red Flag) হিসেবে গণ্য হয়; টাকা কমপক্ষে ৪-৬ মাস ব্যাংকে স্বাভাবিক গতিতে থাকতে হবে।",
          "স্টাডি গ্যাপ (Study Gap) থাকলে ঘাবড়াবেন না; গ্যাপের সময় আপনি কোনো চাকরি বা প্রজেক্ট করেছেন তার যথাযথ অভিজ্ঞতার সনদ (Experience Certificate) দেখালেই তা গ্রহণ করা হয়।",
          "ভিসা ইন্টারভিউতে ইংরেজিতে জড়তাহীনভাবে সংক্ষিপ্ত ও পয়েন্ট অনুযায়ী উত্তর দিন; মুখস্থ উত্তর বলার চেষ্টা করবেন না।"
        ]
      : [
          "Unexplained recent lump-sum deposits in sponsor accounts are the #1 cause of financial visa rejections; funds must be seasoned for 4–6 months.",
          "Legitimate study gaps are fully acceptable if supported by authentic employment experience letters and payroll records.",
          "Deliver concise, direct answers during consular interviews; memorized speeches sound artificial and trigger skepticism."
        ],
    primaryRiskAndMitigation: {
      risk: isBangla
        ? "ভুয়া ব্যাংক স্টেটমেন্ট বা জাল কাগজপত্র জমা দিয়ে চিরতরে ভিসা নিষেধাজ্ঞা (Ban) পাওয়ার ঝুঁকি।"
        : "Submitting forged bank certificates or fraudulent experience letters leading to permanent visa ineligibility.",
      prevention: isBangla
        ? "১০০% আসল কাগজপত্র ব্যবহার করা এবং কোনো দালালের প্রলোভনে না পড়ে অফিশিয়াল ওয়েবসাইট দেখে আবেদন করা।"
        : "Only submit 100% verified authentic documents and apply directly through accredited institutional and embassy portals."
    },
    officialResources: [
      { name: isBangla ? "পররাষ্ট্র মন্ত্রণালয় অনলাইন সত্যায়ন পোর্টাল" : "Ministry of Foreign Affairs (MOFA) Online Attestation", urlOrContact: "https://mofa.gov.bd", description: isBangla ? "শিক্ষাগত সনদ সত্যায়ন সেবা" : "Official portal for consular certificate authentication" },
      { name: isBangla ? "যুক্তরাষ্ট্র দূতাবাস বাংলাদেশ (ভিসা বিভাগ)" : "US Embassy Dhaka Consular Services", urlOrContact: "https://bd.usembassy.gov", description: isBangla ? "স্টুডেন্ট (F-1) ভিসা তথ্য ও অ্যাপয়েন্টমেন্ট" : "F-1 student visa application guidelines and scheduling" },
      { name: isBangla ? "শিক্ষা মন্ত্রণালয় বাংলাদেশ" : "Ministry of Education Bangladesh", urlOrContact: "https://moedu.gov.bd", description: isBangla ? "বিদেশ যাওয়ার জন্য উচ্চশিক্ষা সম্পর্কিত দিকনির্দেশনা" : "National higher education advisories and circulars" },
    ]
  }),
};

/**
 * Universal Guideline Generator:
 * Expands ANY of the 2,000 scenarios into an in-depth, multi-step, verified guideline.
 */
export function getInDepthGuideline(scenario: Scenario, language: Language = "bn"): ComprehensiveGuideline {
  const isBangla = language === "bn";
  const catLower = scenario.category.toLowerCase();
  const subLower = scenario.subcategory.toLowerCase();
  const titleLower = scenario.title.toLowerCase();

  // 1. Check curated domain handlers
  // (A) Taxes, e-TIN & Freelance Remittance
  if (
    titleLower.includes("tax return") ||
    titleLower.includes("zero tax") ||
    titleLower.includes("e-return") ||
    /\b(e-?tin|tin)\b/i.test(titleLower) ||
    titleLower.includes("remittance") ||
    titleLower.includes("freelance") ||
    titleLower.includes("আয়কর") ||
    titleLower.includes("ই-টিন") ||
    (catLower.includes("taxes") && !titleLower.includes("land development tax") && !titleLower.includes("খাজনা"))
  ) {
    return CURATED_GUIDELINES.taxes(scenario, isBangla);
  }

  // (B) Land, Housing & Property
  if (
    catLower.includes("land, housing") ||
    catLower.includes("property") ||
    titleLower.includes("land") ||
    titleLower.includes("plot") ||
    titleLower.includes("khatian") ||
    titleLower.includes("দলিল") ||
    titleLower.includes("খতিয়ান") ||
    titleLower.includes("পর্চা")
  ) {
    return CURATED_GUIDELINES.land(scenario, isBangla);
  }

  // (C) Motorcycle & Scooter
  if (
    titleLower.includes("bike") ||
    titleLower.includes("motorcycle") ||
    titleLower.includes("scooter") ||
    titleLower.includes("বাইক") ||
    titleLower.includes("মোটরসাইকেল")
  ) {
    return CURATED_GUIDELINES.motorcycle(scenario, isBangla);
  }

  // (D) Vehicle & Cars
  if (
    catLower.includes("vehicles, transport") ||
    /\b(car|cars|automobile|automotive)\b/i.test(titleLower) ||
    /\b(car|cars)\b/i.test(subLower) ||
    titleLower.includes("গাড়ি") ||
    titleLower.includes("গাড়ি")
  ) {
    return CURATED_GUIDELINES.vehicle(scenario, isBangla);
  }

  // (E) Lost Phone & Police GD
  if (titleLower.includes("phone") || titleLower.includes("imei") || titleLower.includes("gd") || subLower.includes("lost property")) {
    return CURATED_GUIDELINES.phone(scenario, isBangla);
  }

  // (F) Study Abroad & Global Visas
  if (
    titleLower.includes("abroad") ||
    titleLower.includes("study") ||
    titleLower.includes("visa") ||
    titleLower.includes("বিদেশ") ||
    titleLower.includes("উচ্চশিক্ষা") ||
    catLower.includes("immigration")
  ) {
    return CURATED_GUIDELINES.abroad(scenario, isBangla);
  }

  // (G) E-Passport
  if (titleLower.includes("passport") || subLower.includes("passport") || catLower.includes("visa")) {
    return CURATED_GUIDELINES.passport(scenario, isBangla);
  }

  // (H) Food Safety & Formalin
  if (
    subLower.includes("adulteration") ||
    titleLower.includes("formalin") ||
    titleLower.includes("adulterat") ||
    titleLower.includes("ফরমালিন") ||
    titleLower.includes("ভেজাল")
  ) {
    return CURATED_GUIDELINES.food(scenario, isBangla);
  }

  // (I) Culinary & Cooking
  if (
    titleLower.includes("fry") ||
    titleLower.includes("salt") ||
    titleLower.includes("ভাজা") ||
    titleLower.includes("রান্না") ||
    titleLower.includes("মাছ ভাজা") ||
    subLower.includes("culinary")
  ) {
    return CURATED_GUIDELINES.cooking(scenario, isBangla);
  }

  // (J) College & University Admissions
  if (
    subLower.includes("college") ||
    subLower.includes("admission") ||
    titleLower.includes("admission") ||
    titleLower.includes("college choice") ||
    titleLower.includes("ভর্তি")
  ) {
    return CURATED_GUIDELINES.college(scenario, isBangla);
  }

  // (K) Consumer Goods, Furniture, Microwave & Instruments (Checked before general tech)
  if (
    titleLower.includes("furniture") ||
    titleLower.includes("microwave") ||
    titleLower.includes("guitar") ||
    titleLower.includes("oven") ||
    titleLower.includes("teak") ||
    titleLower.includes("segun") ||
    titleLower.includes("গিটার") ||
    titleLower.includes("আসবাবপত্র") ||
    subLower.includes("musical instrument") ||
    subLower.includes("microwave")
  ) {
    return CURATED_GUIDELINES.consumer(scenario, isBangla);
  }

  // (L) Tech, PC Hardware, GPU, Laptop & Battery
  if (
    titleLower.includes("gpu") ||
    titleLower.includes("laptop") ||
    titleLower.includes("graphics card") ||
    titleLower.includes("battery health") ||
    subLower.includes("pc hardware")
  ) {
    return CURATED_GUIDELINES.tech(scenario, isBangla);
  }

  // (M) Stains & Turmeric
  if (
    subLower.includes("stain") ||
    titleLower.includes("stain") ||
    titleLower.includes("turmeric") ||
    titleLower.includes("দাগ") ||
    titleLower.includes("হলুদ")
  ) {
    return CURATED_GUIDELINES.stains(scenario, isBangla);
  }

  // 2. Dynamic High-Quality Generator for remaining scenarios
  const checklistItems = scenario.critical_checklist
    .split(";")
    .map((s) => s.trim())
    .filter(Boolean);

  const steps: DetailedStep[] = checklistItems.map((item, idx) => ({
    stepNumber: idx + 1,
    title: isBangla ? `পদক্ষেপ ${idx + 1}: ${item}` : `Phase ${idx + 1}: ${item}`,
    description: isBangla
      ? `এই ধাপে ${item} সঠিকভাবে যাচাই ও সম্পন্ন করুন। কোনো অস্পষ্টতা বা অমিল থাকলে পরবর্তী ধাপে অগ্রসর হবেন না।`
      : `Carefully inspect and execute: ${item}. Ensure full compliance before progressing to the next operational phase.`,
    proTip: isBangla
      ? "কাগজপত্র ও প্রমাণের আসল কপি দেখে সিদ্ধান্ত নিন, মৌখিক আশ্বাসে বিশ্বাস করবেন না।"
      : "Always insist on original verification documentation rather than oral assurances."
  }));

  return {
    scenarioId: scenario.id,
    title: scenario.title,
    category: scenario.category,
    subcategory: scenario.subcategory,
    overview: scenario.problem_statement,
    steps: steps.length > 0 ? steps : [
      {
        stepNumber: 1,
        title: isBangla ? "প্রাথমিক তথ্য ও নথিপত্র সংগ্রহ" : "Initial Assessment & Documentation",
        description: scenario.critical_checklist,
      }
    ],
    requiredDocuments: [
      {
        name: isBangla ? "প্রাসঙ্গিক প্রমাণপত্র ও জাতীয় পরিচয়পত্র (NID)" : "Relevant Official Proofs & National ID",
        whereToGet: isBangla ? "সংশ্লিষ্ট দপ্তর / সেবাদাতা" : "Relevant government authority / service provider",
        purpose: isBangla ? "সঠিকতা যাচাই ও ভবিষ্যৎ আইনি সুরক্ষা" : "Verification and legal validity assurance"
      }
    ],
    expertSecrets: [scenario.what_people_dont_know],
    primaryRiskAndMitigation: {
      risk: scenario.primary_risk,
      prevention: isBangla
        ? "নিয়মমাফিক ধাপে ধাপে যাচাইকরণ সম্পন্ন করা এবং ঝুঁকিপূর্ণ শর্টকাট বর্জন করা।"
        : "Strictly adhere to the step-by-step verification protocol and avoid unauthorized shortcuts."
    },
    officialResources: [
      {
        name: isBangla ? "জাতীয় তথ্য বাতায়ন" : "Bangladesh National Web Portal",
        urlOrContact: "https://bangladesh.gov.bd",
        description: isBangla ? "সরকারি সেবা ও তথ্য সংক্রান্ত কেন্দ্রীয় পোর্টাল" : "Central government services and procedural information"
      },
      {
        name: isBangla ? "জাতীয় জরুরি কল সেন্টার" : "National Emergency Helpline",
        urlOrContact: "999",
        description: isBangla ? "জরুরি আইনি ও পুলিশি সহায়তা" : "Toll-free emergency citizen service"
      }
    ]
  };
}

/**
 * Format a ComprehensiveGuideline into high-clarity Markdown.
 */
export function formatGuidelineToMarkdown(guideline: ComprehensiveGuideline, isBangla: boolean): string {
  const t = {
    stepsHeader: isBangla ? "ধাপে ধাপে বিস্তারিত কার্যপ্রণালী" : "Step-by-Step Operational Procedure",
    docsHeader: isBangla ? "প্রয়োজনীয় কাগজপত্র ও যাচাইকরণ তালিকা" : "Required Documents & Verification Checklist",
    secretsHeader: isBangla ? "বিশেষজ্ঞ পরামর্শ ও গোপন তথ্য" : "Insider Secrets & Key Nuances",
    riskHeader: isBangla ? "প্রধান ঝুঁকি ও সুরক্ষা কৌশল" : "Primary Risk & Prevention Strategy",
    resourcesHeader: isBangla ? "অফিসিয়াল পোর্টাল ও হেল্পলাইন" : "Official Government Portals & Helplines",
    proTip: isBangla ? "টিপস" : "Pro-Tip",
    source: isBangla ? "কোথা থেকে পাবেন" : "Source",
    purpose: isBangla ? "উদ্দেশ্য" : "Purpose",
    risk: isBangla ? "ঝুঁকি" : "Primary Risk",
    prevention: isBangla ? "সুরক্ষা" : "Mitigation",
  };

  let md = `### 📋 ${guideline.title}\n`;
  md += `*${guideline.category} • ${guideline.subcategory}*\n\n`;
  md += `${guideline.overview}\n\n`;
  md += `---\n\n`;

  // Steps
  if (guideline.steps && guideline.steps.length > 0) {
    md += `#### 📋 ${t.stepsHeader}:\n\n`;
    guideline.steps.forEach((step) => {
      md += `${step.stepNumber}. **${step.title}**\n`;
      md += `   ${step.description}\n`;
      if (step.proTip) {
        md += `   > 💡 **${t.proTip}:** ${step.proTip}\n`;
      }
      md += `\n`;
    });
    md += `---\n\n`;
  }

  // Required Documents
  if (guideline.requiredDocuments && guideline.requiredDocuments.length > 0) {
    md += `#### 📑 ${t.docsHeader}:\n\n`;
    guideline.requiredDocuments.forEach((doc) => {
      md += `- **${doc.name}**\n`;
      md += `  - *${t.source}:* ${doc.whereToGet}\n`;
      md += `  - *${t.purpose}:* ${doc.purpose}\n`;
    });
    md += `\n---\n\n`;
  }

  // Expert Secrets
  if (guideline.expertSecrets && guideline.expertSecrets.length > 0) {
    md += `#### 💡 ${t.secretsHeader}:\n\n`;
    guideline.expertSecrets.forEach((sec) => {
      md += `- ${sec}\n`;
    });
    md += `\n---\n\n`;
  }

  // Primary Risk & Mitigation
  if (guideline.primaryRiskAndMitigation) {
    md += `#### ⚠️ ${t.riskHeader}:\n\n`;
    md += `> 🚨 **${t.risk}:** ${guideline.primaryRiskAndMitigation.risk}\n>\n`;
    md += `> 🛡️ **${t.prevention}:** ${guideline.primaryRiskAndMitigation.prevention}\n\n`;
  }

  // Official Resources
  if (guideline.officialResources && guideline.officialResources.length > 0) {
    md += `---\n\n#### 🏛️ ${t.resourcesHeader}:\n\n`;
    guideline.officialResources.forEach((res) => {
      const isTel = /^\d+$/.test(res.urlOrContact);
      const url = isTel
        ? `tel:${res.urlOrContact}`
        : res.urlOrContact.startsWith("http")
        ? res.urlOrContact
        : `https://${res.urlOrContact}`;
      md += `- [${res.name}](${url}) — ${res.description} (${res.urlOrContact})\n`;
    });
  }

  return md.trim();
}

/**
 * Format a natural, concise voice readout for speech synthesis.
 */
export function formatGuidelineVoiceText(guideline: ComprehensiveGuideline, isBangla: boolean): string {
  const firstStep = guideline.steps?.[0]?.title || "";
  const firstSecret = guideline.expertSecrets?.[0] || "";
  const prevention = guideline.primaryRiskAndMitigation?.prevention || "";

  if (isBangla) {
    return `${guideline.title} সম্পর্কে মূল নির্দেশনা: প্রথমত, ${firstStep}। মনে রাখবেন, ${firstSecret}। নিরাপদ থাকতে: ${prevention}`.slice(0, 240);
  }
  return `Key instructions for ${guideline.title}: First, ${firstStep}. Note: ${firstSecret}. To stay safe: ${prevention}`.slice(0, 240);
}
