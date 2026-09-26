# How-To.AI

> **An Intelligent Voice-Enabled PWA & Life Navigation Operating System**
> Instant, actionable, and verified solutions to 2,000+ real-world everyday problems—from land verification, legal bureaucracy, and used car inspection to college admissions, food adulteration tests, kitchen chemistry, stain removal, and emergency SOPs.

---

## 🌟 Key Features

- 🎙️ **Voice First (Listen & Speak):** Real-time conversational Speech-to-Text (STT) and human-like Text-to-Speech (TTS).
- 📱 **Progressive Web App (PWA):** One-tap install on Android & iOS, offline-capable with service workers and IndexedDB.
- ⚡ **Zero-Cost Semantic Router:** 4-Tier hybrid AI architecture that matches questions against 2,000+ curated scenarios with sub-50ms latency and 0 LLM API cost for common queries.
- 🛡️ **Zero Hallucination Fact Base:** Verified legal, governmental (BRTA, Land, Passport, NID), and technical checklists.
- 📋 **Interactive Checklist Mode:** Step-by-step interactive checkboxes for on-site physical inspections (buying land, testing cars, food safety).

---

## 🗂️ Knowledge Base Taxonomy (2,000 Scenarios)

The system includes a master verified dataset (`scenarios_2000.json`) across 20+ life domains:

| Category | Coverage & Examples |
| :--- | :--- |
| **Land, Housing & Real Estate** | e-Porcha verification, e-Mutation (ই-নামজারি), Via-Dalil chain, RAJUK clearance, boundary disputes |
| **Vehicles & Transport** | Used car inspections, digital odometer rollback checks, BRTA ownership transfer, chassis welding |
| **Education & Admissions** | XI Class online admission prioritization, BUET/Medical/DU/CKRUET/GST clusters, subject dilemmas |
| **Food Safety & Adulteration** | Formalin testing in fish, carbide in fruits, metanil yellow in turmeric, urea in muri, milk testing |
| **Cooking Techniques & Rescue** | Tough meat tenderizing, curdled korma rescue, saving salty curries, yeast proofing, non-sticky biryani |
| **Home Maintenance & Stains** | Removing turmeric/oil/blood/ink/rust stains, fixing stripped wooden screws, running toilets |
| **Everyday Product Selection** | Inverter microwaves, 16-gauge 304 sinks, thermostatic shower valves, luggage wheels, thermals |
| **Consumer Tech & Gadgets** | PC hardware bottlenecks, used GPUs, laptop wear, OLED burn-in, Wi-Fi 6 mesh, smart home locks |
| **Government Identity & Taxes** | e-Passport corrections, Smart NID fixes, e-Return tax submission, marriage Kabin registration |
| **Banking, Finance & Loans** | CIB default clearances, home loan trap clauses, Sanchayapatra limits, credit card chargebacks |
| **Legal Rights & Courts** | Police night stops, anticipatory bail, cheque bounce defense (Sec 138), consumer court (DNCRP) |
| **Health, First Aid & Safety** | Second opinions, stroke/heart attack golden hours, kitchen burns, high-rise earthquake SOP |

---

## 🏗️ System Architecture

```
                  [ PWA Client (Mobile & Desktop) ]
                                 │
             ┌───────────────────┴───────────────────┐
             │                                       │
     [ Web Speech API ]                     [ Service Worker ]
     Local Client-Side STT/TTS              Offline Caching & IndexedDB
             │                                       │
             └───────────────────┬───────────────────┘
                                 │
                                 ▼
                     [ Semantic Router / API ]
                                 │
                 ┌───────────────┴───────────────┐
                 ▼                               ▼
       HIGH SIMILARITY (> 0.88)         LOW SIMILARITY (< 0.88)
       Direct Curated Answer            Micro-LLM Synthesis
       from 2,000 Scenarios             (Gemini Flash / Local SLM)
       (0ms LLM Latency, $0 Cost)       (Top-2 RAG Context)
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (Recommended v20+)
- npm or pnpm

### Installation
```bash
# Clone the repository
git clone https://github.com/Ratul-NotFound/How-To.AI.git

# Navigate to project
cd How-To.AI

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 📄 License
MIT License. Created by Ratul-NotFound.
