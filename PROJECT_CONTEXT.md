# 🛡️ OmniTransform AI — Immutable Project Master Context

> **CRITICAL INSTRUCTION FOR ALL AI MODELS (INCLUDING GEMINI 3.7)**:  
> This file is the single source of truth for OmniTransform AI. DO NOT deviate, hallucinate, or overwrite these established design rules, branding assets, or architecture foundations.

---

## 🌐 1. Live Deployment & Repository Truth
* **Production Live HTTPS Site**: `https://hrlpavan.github.io/omnitransform-ai-resources/`
* **GitHub Repository**: `https://github.com/hrlpavan/omnitransform-ai-resources`
* **Target Branches**: `main` (Source Code), `gh-pages` (Live Distribution)
* **Vite Base Path**: Must ALWAYS be `./` (relative base for GitHub Pages subpaths)

---

## 🏛️ 2. Institutional Branding & Government Logo Rules
* **Header Ribbon (`GovtHeaderRibbon.tsx`)**:
  * Surface: `bg-white border-b border-zinc-200 py-1.5`
  * Logos: MUST ALWAYS use the clean alpha-transparent PNGs:
    1. `./gov_moe_logo_transparent.png` (Ministry of Education)
    2. `./gov_aicte_logo_transparent.png` (AICTE)
    3. `./gov_mic_logo_transparent.png` (MoE's Innovation Cell)
    4. `./gov_sih_logo_transparent.png` (Smart India Hackathon 2026)
  * Constraints: Each logo wrapped in `h-6 sm:h-7 shrink-0` with `max-h-6 h-5 sm:h-6 w-auto object-contain block`. NEVER use arbitrary fractional classes like `h-4.5` without configuration!
  * NO `mix-blend-multiply` hacks or solid white bounding boxes.

---

## 🍎 3. 100% Apple.com Design System Rules
* **Typography**:
  * Font Stack: `-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "SF Pro", "Helvetica Neue", Helvetica, Arial, sans-serif`
  * Hero Headline: `font-semibold tracking-[-0.035em] text-[#1D1D1F] leading-[1.06]`
  * Eyebrows: `text-[12px] font-semibold tracking-[0.08em] uppercase text-hrl-crimson`
  * Body: `text-[17px] text-[#86868B] leading-[1.42] tracking-[-0.02em]`
  * Numbers: `font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#1D1D1F] tracking-[-0.02em]`
* **Apple Glass Navbar (`Navbar.tsx`)**:
  * **CRITICAL RULE**: DO NOT put `overflow-x-auto` on the navbar! The navbar must be **STATIC & LOCKED** with `overflow-visible` / `overflow-hidden`.
  * Blur: `bg-white/85 backdrop-blur-xl backdrop-saturate-180 border-b border-black/[0.08]`
  * Segmented Persona Pill: `bg-[#000000]/[0.05] p-1 rounded-full border border-black/[0.04]`
  * CTA Button: `#0071E3` Electric Blue pill (`pl-4 pr-5 h-8 sm:h-9 text-xs font-medium text-white rounded-full active:scale-[0.98]`)
* **Continuous Squircles & Ambient Shadows**:
  * Bento Cards: `rounded-[24px]` and `rounded-[28px]`
  * Shadows: `shadow-[0_4px_24px_rgba(0,0,0,0.04)]`
  * Borders: `border border-black/[0.06]`
* **Executive Memo Tab (`ExecutiveMemoTab.tsx`)**:
  * All Action Cards MUST be sleek horizontal rectangular rows (`space-y-2.5`), NEVER cramped 3-column square boxes.

---

## 🎙️ 4. ElevenLabs Voice AI SDK Integration
* **SDK Package**: `@elevenlabs/elevenlabs-js`
* **Client Implementation**: `ElevenLabsClient` from `@elevenlabs/elevenlabs-js`
* **Primary Model**: `eleven_v3` (Emotional Cue Tags: `[whispers]`, `[sarcastically]`, `[giggles]`, `[dramatically]`)
* **Voice Presets**:
  * `NOpBlnGInO9m6vDvFkFC`: Zephyros / Storyteller (Emotional Narrator)
  * `pNInz6obpgDQGcFmaJgB`: Adam (Executive Lead)
  * `21m00Tcm4TlvDq8ikWAM`: Rachel (News Anchor)
  * `EXAVITQu4vr4xnSDxMaL`: Bella (Public Outreach)
  * `TxGEqnHWrfWFTfGW9XjX`: Josh (Operations Commander)
* **SDK Method**: `elevenlabs.textToSpeech.convert(voiceId, { text, modelId: "eleven_v3", languageCode: "en" })`

---

## 🤖 5. Omni CLI Commands
* `./omni sync "commit message"`: Runs context guard, builds dist, updates GitHub `main` & `gh-pages` automatically.
* `./omni context`: Refreshes and validates persistent memory across all AI agent models.
* `./omni guard`: Automated anti-hallucination and UI regression verification.
* `./omni deploy`: Direct production deployment to GitHub Pages.
* `./omni status`: Live GitHub sync and deployment status check.
