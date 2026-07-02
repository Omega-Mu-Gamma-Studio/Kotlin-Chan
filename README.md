# 🤖 Kotlin-chan
**An anime-guided Kotlin and Jetpack Compose tutor for people building the app that's actually going on the Play Store.**
*Sleek. Modern. Null-safe. She doesn't do clutter.*
[![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646cff?logo=vite&logoColor=white)](https://vite.dev/)
[![Zustand](https://img.shields.io/badge/Zustand-5-orange)](https://zustand-demo.pmnd.rs/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055ff)](https://www.framer.com/motion/)
[![MIT License](https://img.shields.io/badge/License-MIT-green)](https://github.com/Omega-Mu-Gamma-Studio/Kotlin-Chan/blob/main/LICENSE)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-kotlin--chan.vercel.app-7c6fff?logo=vercel&logoColor=white)](https://kotlin-chan.vercel.app)

Built by [Omega Mu Gamma Studio](https://github.com/Omega-Mu-Gamma-Studio) · the team behind [SeeDS](https://see-ds.vercel.app), [KMapX](https://kmapx.vercel.app), [EG Suite](https://eg-suite.vercel.app), [GateLab](https://gatelab.vercel.app), [Java-chan](https://java-chan.vercel.app), and [Kotlin-chan](https://kotlin-chan.vercel.app).

---

## What is Kotlin-chan?

Kotlin-chan is a browser-based Kotlin and Android learning app where a sleek, modernist mascot character teaches mobile development with a clean, no-nonsense polish — the kind of design sense you'd expect from someone who's spent real time in Material 3. She doesn't lecture. She demonstrates, cleanly, then lets the code speak.

Every lesson lives inside **Android app development** — `val` vs `var` isn't a style debate, it's how she keeps your state predictable. Null safety isn't paranoia, it's why your app doesn't crash in production. By the end of all 75 lessons, you've architected, built, and published a real Android app to the Play Store with Jetpack Compose, Room, and clean MVVM architecture.

No legacy Java baggage. No XML layout files. Just modern Kotlin, the way Android is actually built today.

🔗 **[Try it live → kotlin-chan.vercel.app](https://kotlin-chan.vercel.app)**

---

## The Teaching Model

Every single lesson — all 75 of them — follows this exact structure:

| Phase | Name | What Happens |
| --- | --- | --- |
| **1** | See It Work | Kotlin-chan shows working code, the rendered Compose output, and explains what's happening line by line |
| **2** | See It Break | Same code, deliberately broken — she explains the error, what caused it, and how to avoid it next time |
| **3** | You Try | Student writes code or fills in blanks; pattern-based validation gives immediate feedback |

Validation is regex/pattern-based — no code execution in the browser. For full apps, students run them in Android Studio.

---

## Curriculum — 75 Lessons Across 5 Units

All five units are complete, published, and available from day one.

| Unit | Topic | Lessons |
| --- | --- | --- |
| 1 | Kotlin Basics | 15 |
| 2 | OOP and Functional Kotlin | 15 |
| 3 | Android UI with Jetpack Compose | 15 |
| 4 | Architecture and Data | 15 |
| 5 | Clean Architecture and Final Project | 15 |

<details>
<summary>📖 View all 75 lessons</summary>

**Unit 1 — Kotlin Basics** `1.1` Why Kotlin Over Java · `1.2` Setting Up Android Studio · `1.3` Your First Kotlin Program · `1.4` The Android Project Structure · `1.5` val vs var — Immutability by Default · `1.6` Types and Type Inference · `1.7` Null Safety — The Big Deal · `1.8` String Templates · `1.9` Functions and Default Parameters · `1.10` if as an Expression · `1.11` when — Kotlin's switch · `1.12` for Loops and Ranges · `1.13` Elvis Operator and Safe Calls · `1.14` Running on Emulator and Device · `1.15` Mini Challenge — Kotlin Null Safety Drills

**Unit 2 — OOP and Functional Kotlin** `2.1` Classes and Primary Constructors · `2.2` Data Classes · `2.3` Inheritance and open · `2.4` Interfaces · `2.5` Object and Companion Object · `2.6` Sealed Classes · `2.7` Lambda Expressions · `2.8` Higher Order Functions · `2.9` map, filter, reduce · `2.10` Extension Functions · `2.11` Scope Functions — let, run, apply, also · `2.12` Collections — Lists, Maps, Sets · `2.13` Collection Operations · `2.14` Destructuring Declarations · `2.15` Mini Challenge — Data Class Task Manager

**Unit 3 — Android UI with Jetpack Compose** `3.1` Composable Functions · `3.2` Text, Image, Button · `3.3` Layouts — Column, Row, Box · `3.4` State and remember · `3.5` Recomposition · `3.6` LazyColumn and LazyRow · `3.7` Material Design 3 Components · `3.8` Theming and Color Schemes · `3.9` Navigation Component · `3.10` Passing Arguments Between Screens · `3.11` Back Stack Management · `3.12` Bottom Navigation · `3.13` Adaptive Layouts · `3.14` Handling User Input · `3.15` Mini Challenge — Multi-Screen App

**Unit 4 — Architecture and Data** `4.1` Why ViewModel? · `4.2` StateFlow and LiveData · `4.3` ViewModel with Compose · `4.4` What are Coroutines? · `4.5` launch, async, and Dispatchers · `4.6` Flow · `4.7` Coroutines in ViewModel · `4.8` Retrofit Setup · `4.9` Making GET and POST Requests · `4.10` JSON Parsing with Gson · `4.11` Error Handling in Network Calls · `4.12` SharedPreferences · `4.13` Room Database Setup · `4.14` DAO, Entities, and CRUD · `4.15` Mini Challenge — Notes App with Room

**Unit 5 — Clean Architecture and Final Project** `5.1` Clean Architecture Principles · `5.2` Repository Pattern · `5.3` Dependency Injection with Hilt · `5.4` MVVM in Practice · `5.5` Combining Room and ViewModel · `5.6` WorkManager for Background Tasks · `5.7` Testing in Android — Unit Tests · `5.8` UI Testing with Compose · `5.9` Performance and Memory Basics · `5.10` Accessibility in Android · `5.11` Publishing to Google Play · `5.12` What's New in Modern Android · `5.13` Project — App Design and Planning · `5.14` Project — Full Implementation · `5.15` Project — Ship to Play Store

</details>

---

## Features

### 🎓 Learning System

- **Three-phase lesson structure** — See It Work → See It Break → You Try, on every lesson, no exceptions
- **Android-app context throughout** — every Composable and class is part of one growing app
- **Contextual hint escalation** — hint appears at 2 wrong attempts, solution unlocks at 5
- **Pattern-based validation** — instant feedback without a server or code execution engine
- **Full lesson navigation** — collapsible sidebar with per-lesson completion tracking

### 🎮 Progression & Rewards

- **XP system** — earn XP on lesson completion; bonus XP for first-attempt success and hint-free runs
- **10 levels** — clear thresholds (100 XP per level) with a persistent progress bar
- **Level-gated cosmetics** — new rewards unlock as you level up, alternating themes and outfits
- **localStorage persistence** — no account needed, progress is saved in the browser

### 🎨 The Shop

**App Themes** (equippable backgrounds):

| Level | Item | Style |
| --- | --- | --- |
| 1 | Material You Mist 🩵 | Soft dynamic-color gradient, clean and adaptive — the default |
| 3 | Compose Grid 🟦 | A faint grid of Column/Row guides over a cool slate backdrop |
| 5 | Midnight Material 🌌 | Dark theme done properly, true black with crisp accent color |
| 7 | Play Store Green 🟢 | The exact moment "Publish" turns from grey to clickable |
| 9 | Dynamic Color Spectrum 🌈 | A full Material 3 palette shift, cycling subtly in the background |

**Character Outfits** (equippable; all with full 6-expression sprite art):

| Level | Outfit | Vibe |
| --- | --- | --- |
| 1 | Minimalist Turtleneck 🖤 | Clean lines, no logo. Her signature look, always equipped |
| 2 | Compose Lab Coat 🧪 | Mobile Dev Mode — ON. Every recomposition, intentional |
| 4 | Architecture Blazer 🏛️ | MVVM Mode — ON. She designed this repository pattern from scratch |
| 5 | Night Mode Hoodie 🌙 | Dark theme, true black, perfectly legible at 2am |
| 6 | Material Sorceress ✨💎 | Dynamic color bends to her palette. Material You, indeed |
| 7 | Coroutine Courier 🛰️ | She's juggling six async calls. None of them block the main thread |
| 7 | Idol — Recomposed ✨ | She already performs a Celebration. The state updates instantly |
| 8 | Play Store Launch Suit 🚀 | Publishing Mode — ON. The build is signed and ready |
| 8 | Glasswork Architect 🔷 | Clean geometry, sharp edges, every layer named on purpose |
| 10 | Published Crown 👑 | It's live on the Play Store. Wear the crown |
| 10 | Off the Clock 🏖️ | The app is live. Reviews are coming in. She's allowed a coffee |

**Downloadable Wallpapers** (phone/desktop art, save to your device):

| Level | Wallpaper | Vibe |
| --- | --- | --- |
| 3 | First Recomposition 🌆 | The preview finally renders without a crash |
| 3 | Cherry Blossom Compose Canvas 🌸 | Soft pink Material theme, petals drifting through a LazyColumn |
| 5 | The Repository Pattern 🏰 | Clean architecture rendered as a quiet, orderly city grid |
| 5 | Mountain Summit — Build Signed 🏔️ | She made it to the top. The flag reads `fun main()` in Compose font |
| 5 | Material Library 📚 | Cool slate light, a stack of design-system reference cards |
| 7 | Rainy Compose Window 🌧️ | Even on a slow day, the StateFlow keeps emitting |
| 7 | Rooftop Garden 🌿 | City skyline, the sign reads `// TODO: dark mode polish` |
| 7 | Neon Material Arcade 🕹️ | Hot pink and electric blue, one cabinet running her own app |
| 9 | Shrine Steps — Published 🏮 | Stone steps, dawn lanterns, the calmest a launch day gets |
| 9 | Vacation Build 🌅 | Even the longest review-response cycle ends with a sunset |

### ✨ Character & Expressions

Kotlin-chan has 6 distinct expressions that fire contextually throughout lessons:

| State | Trigger |
| --- | --- |
| `idle` | Phase 1 — explaining working code |
| `thinking` | Hint mode; waiting for input |
| `surprised` | Correct answer |
| `happy` | Phase transitions and encouragement |
| `sad` | Wrong answer (first few times) |
| `idle-sleep` | Idle between interactions |

Each equipped outfit has its own full set of 6 expression sprites — swapping outfits changes Kotlin-chan's entire look, not just a filter.

**Domain Expansion** — a fullscreen celebration effect fires on milestone level-ups, complete with confetti rendered, naturally, as a recomposing particle field.

---

## Tech Stack

| Layer | Choice | Why |
| --- | --- | --- |
| Frontend | React 19 + Vite 8 | Fast HMR, ES modules, modern JSX transform |
| Styling | Plain CSS + Framer Motion 12 | No CSS framework overhead; animations via Motion |
| State | Zustand 5 | Minimal boilerplate, works with `persist` middleware out of the box |
| Data | JSON files + localStorage | Zero backend for Phase 1; data adapter ready for Phase 2 |
| Routing | React Router v7 | File-level page components |
| Hosting | Vercel | Zero-config deployment |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Running Locally

```bash
# Clone the repo
git clone https://github.com/Omega-Mu-Gamma-Studio/Kotlin-Chan.git
cd Kotlin-Chan

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app runs at `http://localhost:5173` by default.

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview
```

### Deploying to Vercel

This repo is Vercel-ready with no configuration needed. Connect the repo in the Vercel dashboard and it'll detect the Vite setup automatically. No environment variables required for Phase 1.

---

## Project Structure

```
Kotlin-Chan/
├── public/
│   ├── sprites/                      # Character expressions (Minimalist Turtleneck — base outfit)
│   │   ├── teaching.png
│   │   ├── excited.png
│   │   ├── frustrated.png
│   │   ├── thinking.png
│   │   ├── oops.png
│   │   ├── idle.png
│   │   └── uniforms/                 # Outfit-specific sprite sets (6 expressions each)
│   │       ├── compose-lab-coat/
│   │       ├── architecture-blazer/
│   │       ├── night-mode-hoodie/
│   │       ├── material-sorceress/
│   │       ├── coroutine-courier/
│   │       ├── idol/
│   │       ├── launch-suit/
│   │       ├── glasswork-architect/
│   │       ├── published-crown/
│   │       └── off-the-clock/
│   └── wallpapers/                   # Downloadable device wallpapers (10 total)
│       ├── kotlinchan-first-recomposition.png
│       ├── kotlinchan-sakura-compose-canvas.png
│       ├── kotlinchan-repository-pattern.png
│       ├── kotlinchan-build-signed-summit.png
│       ├── kotlinchan-material-library.png
│       ├── kotlinchan-rainy-compose.png
│       ├── kotlinchan-rooftop-garden.png
│       ├── kotlinchan-neon-material-arcade.png
│       ├── kotlinchan-shrine-published.png
│       └── kotlinchan-vacation-build.png
│
├── src/
│   ├── components/
│   │   ├── character/KotlinChan.jsx    # Sprite renderer; reads spriteOverrides from equipped outfit
│   │   ├── layout/AppLayout.jsx        # Root layout; applies theme + background
│   │   ├── lesson/                     # LessonCanvas, CodeBlock, PhaseIndicator
│   │   └── ui/                         # Sidebar, BottomBar, XPDisplay, ProgressBar
│   │
│   ├── data/
│   │   ├── lessons/                  # 75 JSON lesson files (unit1–5, lessons 1–15)
│   │   ├── units/                    # 5 unit JSON files (id, title, lesson list)
│   │   └── shopItems.js              # All cosmetic definitions (outfits, themes, downloadables)
│   │
│   ├── hooks/
│   │   ├── useLesson.js              # Lesson phase state machine
│   │   ├── useProgress.js            # Progress store bindings
│   │   └── useSound.js               # Sound effect hooks
│   │
│   ├── pages/
│   │   ├── Home.jsx                  # Dashboard / unit selection
│   │   ├── UnitPage.jsx              # Lesson list for a unit
│   │   ├── LessonPage.jsx            # The actual lesson experience
│   │   └── Shop.jsx                  # Cosmetics shop
│   │
│   ├── services/
│   │   ├── lessonService.js          # JSON loader + lesson data access
│   │   └── storageService.js         # localStorage adapter (Phase 2: swap for API)
│   │
│   ├── store/
│   │   ├── progressStore.js          # Zustand store: XP, level, outfits, progress
│   │   └── lessonStore.js            # Zustand store: active lesson state
│   │
│   └── utils/
│       ├── xpCalculator.js           # XP thresholds, level math, earned XP calculation
│       ├── patternMatcher.js         # Regex-based answer validation engine
│       └── kotlinHighlighter.js      # Kotlin syntax highlighting for code blocks
```

---

## Adding Content

### Adding a New Lesson

Lesson JSON files live at `src/data/lessons/unit{N}/{N}.{M}.json`. Each file follows this structure:

```json
{
  "id": "1.7",
  "title": "Null Safety — The Big Deal",
  "xp": 10,
  "phases": [
    {
      "phase": 1,
      "title": "See It Work",
      "dialogue": "Kotlin-chan's explanation text here",
      "code": "val name: String? = null\nprintln(name?.length ?: 0)",
      "output": "0"
    },
    {
      "phase": 2,
      "title": "See It Break",
      "dialogue": "Here's what happens when...",
      "code": "val name: String = null",
      "error": "error: Null can not be a value of a non-null type String"
    },
    {
      "phase": 3,
      "title": "You Try",
      "dialogue": "Your turn.",
      "prompt": "What operator provides a default value when the left side is null?",
      "answer": "?:",
      "hint": "It's nicknamed after a musician's hairstyle.",
      "solution": "?:"
    }
  ]
}
```

### Adding a New Outfit

1. Create a folder under `public/sprites/uniforms/<outfit-name>/`
2. Drop in 6 PNGs named: `teaching.png`, `idle.png`, `oops.png`, `thinking.png`, `frustrated.png`, `excited.png`
3. Add an entry to `src/data/shopItems.js` with `spriteOverrides` mapping each expression state to the correct file path
4. That's it — `KotlinChan.jsx` and `Shop.jsx` both read `spriteOverrides` automatically

### Developer Cheat Mode

In the Shop page, **triple-click the Shop title** to toggle the dev cheat:

- First triple-click → instantly sets XP to 9999 and level to 10 (unlocks everything)
- Second triple-click → resets XP and level back to 0 / 1

---

## Roadmap

### Phase 1 (Current) ✅

- All 75 lessons authored and published
- Full cosmetics system (11 outfits, 5 themes, 10 downloadable wallpapers)
- XP/leveling, shop, expressions, domain expansion
- localStorage persistence, no account required

### Phase 2 (Planned)

- PostgreSQL + Express API backend
- User accounts and cross-device sync
- Progress stored server-side (the store already has a `_resetForMigration` hook and storage adapter pattern ready for this)
- Instructor view: class-wide completion dashboards
- No frontend rewrite required — only the storage layer changes

---

## Credits & Assets

**Character Art**: Kotlin-chan's sprites were generated using AI tools and hand-curated for expression consistency by the Omega Mu Gamma Studio team. All character designs are proprietary to Omega Mu Gamma Studio.

**Note**: As a free, open-source educational tool, we prioritized shipping a complete learning experience over commissioning custom art. If you're an artist interested in contributing official character designs, reach out — we'd love to collaborate.

---

## Part of Omega Mu Gamma Studio

Kotlin-chan is part of a student-built suite of open-source engineering and CS education tools from Omega Mu Gamma Studio.

| Tool | What it does |
| --- | --- |
| [SeeDS](https://see-ds.vercel.app) | 3D data structure visualizer with drag-and-drop Playground mode |
| [KMapX](https://kmapx.vercel.app) | Karnaugh map simplifier with don't-care support |
| [EG Suite](https://eg-suite.vercel.app) | 3D Engineering Graphics simulator for ME22201 |
| [GateLab](https://gatelab.vercel.app) | 2D digital logic schematic playground (CS22303) |
| [Java-chan](https://java-chan.vercel.app) | Anime-guided Java tutor for CS22301 |
| [Kotlin-chan](https://kotlin-chan.vercel.app) | Anime-guided Kotlin tutor for aspiring Android developers |
| **Kotlin-chan** | Anime-guided Kotlin and Jetpack Compose tutor for Android dev — *this repo* |

---

## License

The **source code** for this project is released under the [MIT License](https://github.com/Omega-Mu-Gamma-Studio/Kotlin-Chan/blob/main/LICENSE).

**The character art, sprites, and visual assets for Kotlin-chan are proprietary.** They are not covered by the MIT License and may not be reproduced, redistributed, or used outside this project without explicit permission from Omega Mu Gamma Studio.

© 2026 Omega Mu Gamma Studio
