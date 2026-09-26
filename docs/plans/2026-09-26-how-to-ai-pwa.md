# How-To.AI: Voice-Enabled PWA & Life Navigation System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a high-performance, voice-enabled Website + PWA chatbot ("How-To.AI") that uses our 2,000 real-world scenario database to provide instant solutions to everyday life problems with near-zero LLM API costs through hybrid semantic routing, device-native speech synthesis, and offline-capable PWA architecture.

**Architecture:** 
- Next.js 15 (App Router) + TypeScript + Tailwind CSS
- Client-side Web Speech API (STT & TTS) for 100% free, zero-latency voice interaction
- In-memory / Hybrid BM25 & Semantic Search Engine over 2,000 verified scenarios (0 LLM cost for known scenarios)
- Micro-LLM fallback (Gemini Flash / OpenAI compatible) for novel / multi-domain synthesis
- Progressive Web App (PWA) with Service Worker, Web App Manifest, and offline search capability

**Tech Stack:**
- Frontend: Next.js 15, React 19, TypeScript, Tailwind CSS, Lucide React, Framer Motion
- Search & AI: In-memory Hybrid Search Index (BM25 + Semantic Cosine Match), Vector Embeddings, LLM fallback adapter
- PWA: Custom Service Worker, `manifest.json`, IndexedDB for offline favorited guides
- Speech: Web Speech Recognition (STT), Web SpeechSynthesis (TTS) with Edge-TTS streaming fallback

---

## Task Decomposition

### Task 1: Scaffolding & Configuration
- [ ] Configure `package.json` scripts (`dev`, `build`, `start`, `lint`)
- [ ] Install Tailwind CSS, PostCSS, Autoprefixer, TypeScript types
- [ ] Setup `tsconfig.json`, `tailwind.config.ts`, `postcss.config.mjs`, `next.config.ts`

### Task 2: Search Engine & Semantic Routing Core (`lib/search/`)
- [ ] Create search index loader for `scenarios_2000.json` with tokenization, synonym mapping, and BM25 scoring
- [ ] Implement query intent classifier (identifies category, urgency, whether direct scenario exists)
- [ ] Implement `findBestScenarios(query, limit)` scoring function with sub-10ms response time
- [ ] Add unit tests for search accuracy across key domains (land, car, food, stain, admission)

### Task 3: API Endpoints (`app/api/`)
- [ ] Implement `GET /api/scenarios`: Filter, search, and paginate scenarios
- [ ] Implement `POST /api/chat`: Hybrid semantic chat endpoint (returns direct scenario solution or streams LLM synthesis)
- [ ] Implement `GET /api/categories`: Returns categories and counts for navigation

### Task 4: Voice Pipeline Hooks (`hooks/`)
- [ ] Create `useSpeechRecognition`: Handles microphone access, real-time interim transcripts, and silence detection
- [ ] Create `useSpeechSynthesis`: Native browser voice speech with pitch, rate, language auto-detection (Bangla/English)
- [ ] Add visual audio visualizer state for speaking and listening animations

### Task 5: PWA Setup (`public/` & `app/`)
- [ ] Create `public/manifest.json` with modern app icons, theme color, standalone display
- [ ] Implement `public/sw.js` (Service Worker) for asset caching and offline scenario searching
- [ ] Register Service Worker in root layout with PWA install prompt button

### Task 6: UI Components & Layout (`components/` & `app/`)
- [ ] Build Header with PWA install button, search bar, and voice toggle
- [ ] Build Voice Assistant Modal / Hero with pulsing visualizer
- [ ] Build Chat Message Cards with Interactive Checklists (tappable checkboxes that persist state)
- [ ] Build Scenario Explorer page to browse all 2,000 scenarios by category and tags

### Task 7: Git Version Control & Deployment Prep
- [ ] Commit each feature incrementally with conventional commits
- [ ] Push to `https://github.com/Ratul-NotFound/How-To.AI.git`
- [ ] Verify build passes cleanly (`npm run build`)
