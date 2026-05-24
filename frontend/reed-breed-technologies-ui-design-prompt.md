# Reed Breed Technologies — UI Design Prompt
## Comprehensive Visual & Interaction Design Specification

---

## 1. Project Overview

**Project Name:** Reed Breed Technologies  
**Project Type:** Corporate Website / Digital Sales System  
**Audience:** SME owners, business decision-makers, operations managers across Nigeria and broader Africa  
**Goal:** The website itself is the first sales demo. It must not feel like an agency portfolio — it must feel like an enterprise SaaS product meets a high-converting growth consultancy.

---

## 2. Design Philosophy & Conceptual Direction

### Core Concept: "The Intelligence Layer"

Reed Breed Technologies sits between businesses and their growth potential — an invisible intelligence layer that connects leads, systems, workflows, and outcomes. The visual language should embody this: **connected nodes, flowing data, structured intelligence.**

The site should feel like you walked into the operations center of a high-growth company. Clean. Purposeful. Every element earns its place.

### Tone Spectrum

| Dimension | Target Feel |
|-----------|-------------|
| Intelligence | Evident, not boasted |
| Premium | Earned through restraint |
| Energy | Controlled urgency |
| Trust | Structural, not decorative |
| Modernity | Functional futurism |

The design should whisper *"we have already thought of everything"* — not shout it.

---

## 3. Brand Identity & Visual Language

### 3.1 Color System

The palette is built on a **deep navy-to-black base** with surgical accent use. No purple gradients. No generic blue-on-white.

```
/* Core Foundation */
--color-void:        #080C14;   /* True background — near black with blue undertone */
--color-depth:       #0B1120;   /* Primary surface */
--color-surface:     #111827;   /* Card backgrounds */
--color-surface-2:   #1A2236;   /* Elevated surfaces, modals */
--color-border:      #1E2D45;   /* Structural borders */
--color-border-glow: #253554;   /* Hover-state borders */

/* Accent — Electric Teal (NOT generic blue) */
--color-accent:      #00D4AA;   /* Primary CTA, highlights */
--color-accent-dim:  #00A882;   /* Hover state */
--color-accent-muted:#00D4AA18; /* Glow backgrounds, fills */

/* Secondary Accent — Warm Amber (trust signal) */
--color-gold:        #F5A623;   /* Metrics, results callouts */
--color-gold-muted:  #F5A62315;

/* Text */
--color-text-primary:   #F0F4FF;  /* Headlines */
--color-text-secondary: #8B9DC3;  /* Body, captions */
--color-text-muted:     #4A5878;  /* Disabled, placeholders */

/* Semantic */
--color-success: #10D98C;
--color-warning: #F5A623;
--color-error:   #FF4D6A;

/* Gradient Definitions */
--gradient-hero:    linear-gradient(135deg, #080C14 0%, #0D1829 50%, #080C14 100%);
--gradient-accent:  linear-gradient(135deg, #00D4AA 0%, #0099CC 100%);
--gradient-card:    linear-gradient(145deg, #111827 0%, #0F1A2E 100%);
--gradient-glow:    radial-gradient(ellipse 60% 40% at 50% 0%, #00D4AA12 0%, transparent 70%);
```

**Why this palette:** The teal accent is rare in the Nigerian agency space — it reads as modern, fintech-adjacent, and globally competitive without being cold. The amber secondary signals results and ROI, which is the emotional core of the pitch.

---

### 3.2 Typography System

**Primary Display Font:** `Satoshi` (variable weight)  
**Secondary / Body Font:** `Plus Jakarta Sans`  
**Monospace / Data Font:** `JetBrains Mono` (for metrics, code snippets, terminal elements)

```css
/* Type Scale */
--text-display-xl: clamp(52px, 7vw, 96px);   /* Hero headline */
--text-display-lg: clamp(40px, 5vw, 72px);   /* Section headlines */
--text-display-md: clamp(28px, 3.5vw, 48px); /* Sub-headlines */
--text-heading-lg: clamp(22px, 2.5vw, 32px); /* Card titles */
--text-heading-md: 20px;
--text-body-lg:    18px;
--text-body-md:    16px;
--text-body-sm:    14px;
--text-caption:    12px;
--text-label:      11px;  /* Eyebrow labels, tags */

/* Font Weights */
--weight-black:    900;
--weight-bold:     700;
--weight-semibold: 600;
--weight-medium:   500;
--weight-regular:  400;

/* Letter Spacing */
--tracking-tight:  -0.03em;  /* Large headlines */
--tracking-normal: -0.01em;  /* Body */
--tracking-wide:   0.08em;   /* Eyebrow labels (all-caps) */
--tracking-wider:  0.15em;   /* Monospace metrics */
```

**Typography Rules:**
- All hero headlines: Satoshi Black, tight tracking (-0.03em), line-height 1.05
- Eyebrow labels above sections: Plus Jakarta Sans 600, 11px, 0.12em tracking, ALL CAPS, teal color
- Body copy: Plus Jakarta Sans 400, 16–18px, 1.7 line-height
- Metric numbers: JetBrains Mono Bold, teal or amber color
- Never mix more than 2 fonts on a single surface

---

### 3.3 Iconography & Visual Elements

**Icon Style:** Custom-feel line icons — 1.5px stroke, rounded caps, NO filled icons except for CTAs.  
**Icon Library Base:** Phosphor Icons (thin/regular weight) as foundation, customized.

**Decorative Visual Elements:**

1. **Node Grid Pattern** — A faint dot grid or connection-line pattern used as background texture. Opacity: 4–6%. Think Vercel's grid but with subtle node intersections.

2. **Flow Lines** — Animated SVG paths representing automation flows. Used in hero and demo sections. Color: teal at 30–40% opacity, animated with a moving dash-offset.

3. **Glassmorphism Cards** — `backdrop-filter: blur(20px)` + `background: rgba(17,24,39,0.7)` + `border: 1px solid rgba(255,255,255,0.06)`. Used for floating UI elements, testimonials, metrics.

4. **Glow Spots** — Large radial gradients placed behind key elements (hero CTA, section headers). Very subtle — max 8% opacity on the accent color.

5. **Mesh Gradient Orbs** — 2–3 large blurred color orbs (teal, indigo, dark blue) layered behind the hero. `filter: blur(120px)`, opacity 15–25%. Creates depth without clutter.

6. **Data Pulse Rings** — Concentric animated rings expanding from a center point, used for the "AI automation" visuals. CSS keyframe: `scale(1) → scale(2.5)`, opacity fading out.

---

## 4. Layout System & Grid

### Grid Architecture
```
Max Content Width:  1280px
Gutter (desktop):   24px
Gutter (mobile):    16px
Columns (desktop):  12
Columns (tablet):   8
Columns (mobile):   4

Section Padding (desktop): 120px top/bottom
Section Padding (tablet):  80px top/bottom
Section Padding (mobile):  60px top/bottom
```

### Spatial Rhythm
- Base unit: `8px`
- All spacing is multiples of 8: 8, 16, 24, 32, 48, 64, 80, 96, 120
- Card internal padding: `32px` desktop, `24px` mobile
- No element sits flush against the grid edge — minimum `24px` internal breathing room

---

## 5. Component Library Specification

### 5.1 Navigation (Sticky)

**Structure:**
```
[Logo: "Reed Breed" wordmark] ←————————————————————→ [Services] [Industries] [Demo Lab] [Case Studies] [About] | [Book Call →]
```

**Visual Specs:**
- Background: `rgba(8,12,20,0.85)` with `backdrop-filter: blur(24px)`
- Top border: `1px solid rgba(255,255,255,0.06)`
- Height: `72px` desktop, `64px` mobile
- Logo: Satoshi Bold, `--color-text-primary` for "Reed Breed" + teal dot or accent mark for "Technologies" or tagline
- Nav links: Plus Jakarta Sans 500, 15px, `--color-text-secondary`, hover transitions to `--color-text-primary` + underline that slides in from left
- CTA Button: Teal fill, black text, 14px Satoshi SemiBold, `border-radius: 8px`, subtle glow on hover

**Scroll Behavior:**
- At scroll position 0: nav background fully transparent, logo + links in full opacity
- After 80px scroll: background snaps in with blur + border
- Transition: `200ms ease`

**Mobile Nav:**
- Hamburger → full-screen overlay menu
- Overlay: `#080C14` at 98% opacity
- Links stack vertically, large (28px), staggered fade-in animation on open
- Close button: top-right X

---

### 5.2 Buttons

**Primary CTA:**
```css
background: var(--gradient-accent);
color: #080C14;
font: 600 15px/1 'Satoshi';
padding: 14px 28px;
border-radius: 10px;
border: none;
box-shadow: 0 0 0 0 rgba(0,212,170,0);
transition: all 200ms ease;

:hover {
  box-shadow: 0 0 32px rgba(0,212,170,0.35);
  transform: translateY(-1px);
}
:active {
  transform: translateY(0px);
}
```

**Secondary (Ghost):**
```css
background: transparent;
color: var(--color-text-primary);
border: 1px solid var(--color-border-glow);
padding: 13px 27px;  /* 1px less for border */
border-radius: 10px;

:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}
```

**Icon Button (small actions):**
- `40px × 40px` square, `border-radius: 10px`
- Surface background, border, icon in secondary text color
- Hover: border goes teal, icon goes teal

**Text Link:**
- No underline by default
- Teal color, underline slides in on hover via `text-decoration` + `text-underline-offset: 4px`

---

### 5.3 Cards

**Service Card:**
```
┌─────────────────────────────────┐
│  [Icon — 40px teal line icon]   │
│                                 │
│  Service Name                   │  ← Satoshi 600, 20px
│  Short description of the       │  ← Plus Jakarta Sans 400, 15px, secondary
│  specific outcome this creates  │
│                                 │
│  [→ Learn more]                 │  ← Text link, teal
└─────────────────────────────────┘
```
- Background: `var(--gradient-card)`
- Border: `1px solid var(--color-border)`
- Border-radius: `16px`
- Padding: `32px`
- Hover: border transitions to `var(--color-border-glow)`, card lifts `translateY(-4px)`, subtle teal glow appears at bottom

**Metric / Result Card:**
```
┌──────────────────────┐
│  [Label — 11px caps] │
│                      │
│  847%                │  ← JetBrains Mono Bold, 48px, amber
│  Increase in leads   │  ← Plus Jakarta Sans 400, 14px, muted
│  for Clinic X        │
└──────────────────────┘
```
- Smaller card: `200px` wide
- These float as overlays on the hero or results section
- Glassmorphism style
- Subtle `+` or upward arrow icon in teal

**Industry Card:**
- Wider, horizontal layout on desktop
- Left: icon/illustration zone (teal accent background, 20% opacity)
- Right: industry name, common problems list, CTA
- Full-width on mobile (stacked)

**Testimonial Card:**
```
┌────────────────────────────────────────┐
│  ❝                                     │
│  "The automation system they built     │
│   cut our follow-up time from 3 days   │
│   to under 4 hours."                   │
│                                        │
│  [Avatar]  Name Surname                │
│            CEO, Company Name           │
│            ⭐⭐⭐⭐⭐                      │
└────────────────────────────────────────┘
```
- Glassmorphism style
- Quote mark: oversized, teal, Satoshi Black, `opacity: 0.15`, positioned top-left as decorative

---

### 5.4 Form Elements

**Input Fields:**
```css
background: var(--color-surface);
border: 1px solid var(--color-border);
border-radius: 10px;
padding: 14px 16px;
color: var(--color-text-primary);
font: 400 15px 'Plus Jakarta Sans';

::placeholder { color: var(--color-text-muted); }

:focus {
  outline: none;
  border-color: var(--color-accent);
  box-shadow: 0 0 0 4px rgba(0,212,170,0.1);
}
```

**Select / Dropdown:**
- Same as input + custom chevron icon (teal on focus)
- Dropdown panel: `--color-surface-2` background, items with hover state

**Multi-step Form (Audit Tool):**
- Progress bar at top: teal fill sliding right, `height: 3px`
- Each step: question in large type (24px), options as large clickable cards
- Selected state: teal border + faint teal background
- Transition between steps: slide + fade

---

### 5.5 Tags / Badges / Labels

```
[● AI Automation]   ← dot + text, teal
[↑ Growth Systems]  ← icon + text, amber  
[✓ Live]            ← icon + text, success green
[Beta]              ← uppercase, muted border, small
```
- `border-radius: 6px` (subtle, not pill-shaped)
- Padding: `4px 10px`
- Font: 11–12px, 600 weight

---

## 6. Page-by-Page Design Specification

---

### 6.1 Homepage

#### Hero Section

**Layout (Desktop):**
```
┌────────────────────────────────────────────────────────────────────┐
│                                                                    │
│  [Eyebrow label: "GROWTH SYSTEMS FOR AFRICAN SMES"]               │
│                                                                    │
│  AI-Powered                                                        │
│  Growth Systems                                                    │  ← Display XL, Satoshi Black
│  For Businesses                                                    │     3-line stack, tight tracking
│  That Mean It.                                                     │
│                                                                    │
│  We help SMEs automate sales, marketing & customer                │
│  engagement — so your business grows while you sleep.             │  ← Body LG
│                                                                    │
│  [Book Strategy Call →]   [See How It Works ↓]                   │
│                                                                    │
│  ─────────────────────────────────────────────────────────────── │
│  12+ Industries   |   3× Avg ROI   |   Automation-First          │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
                                    ↕ (Right panel — animated dashboard)
```

**Right Panel / Hero Visual (Desktop 50% width):**

An animated UI mockup showing a CRM dashboard with:
- Top bar: "Leads Today: 47 ↑23%"
- Pipeline columns: New → Contacted → Qualified → Closed
- Moving lead cards sliding between stages
- A WhatsApp automation log (chat bubbles, automated, timestamped)
- A floating metric card: "Response Time: 4min avg"
- Animated status dots pulsing (green = live)

This should be coded as actual HTML/CSS animation — not a screenshot. Dark surface cards with teal accents. Gives the impression of a live system running.

**Hero Background:**
- Deep void base `#080C14`
- 3 mesh gradient orbs: one teal (top-left), one indigo (center-right), one dark-blue (bottom)
- Dot grid pattern at 5% opacity
- Subtle glow above CTA buttons

**Hero Animations (on load, staggered):**
1. Eyebrow label: fade in, `delay: 0ms`
2. Line 1 of headline: slide up from `translateY(30px)`, fade in, `delay: 150ms`
3. Line 2: same, `delay: 280ms`
4. Line 3 + 4: same, `delay: 400ms`
5. Subtext: fade in, `delay: 550ms`
6. CTAs: fade + slight scale from `scale(0.96)`, `delay: 700ms`
7. Stats bar: fade in, `delay: 900ms`
8. Dashboard visual: fade in + `translateX(40px)`, `delay: 400ms`

---

#### Trusted By / Industries Strip

```
Trusted by businesses in:
[Restaurant]  [Education]  [Healthcare]  [Real Estate]  [Beauty]  [Retail]  [Consulting]
```
- Horizontal scrolling strip on mobile, centered row on desktop
- Icons + label text, muted secondary color
- Subtle separator line above and below

---

#### "Problems We Solve" Section

**Eyebrow:** `DIAGNOSIS`  
**Headline:** `"Sound familiar?"`  
**Subheadline:** `"Most SMEs lose revenue to the same 6 problems. We fix all of them."`

**Layout:** Two-column grid, 3 rows. Each cell = one problem.

```
┌───────────────────────────────┬───────────────────────────────┐
│  [Icon]  Slow Response Times  │  [Icon]  Leads That Go Cold   │
│  You reply in hours. Your     │  No follow-up system means     │
│  competitor replies in 4min.  │  you're leaving money behind.  │
├───────────────────────────────┼───────────────────────────────┤
│  [Icon]  Manual Everything    │  [Icon]  No Online Presence    │
│  ...                          │  ...                           │
├───────────────────────────────┼───────────────────────────────┤
│  [Icon]  Inconsistent Sales   │  [Icon]  Disconnected Systems  │
│  ...                          │  ...                           │
└───────────────────────────────┴───────────────────────────────┘
```

Below the grid, a full-width teal-bordered callout:
```
"Here's how we fix them. →"   [Explore Our Systems]
```

**Animation:** Each problem card scrolls into view with a staggered `translateY(20px)` + fade, 80ms apart.

---

#### Services Section

**Eyebrow:** `WHAT WE BUILD`  
**Headline:** `"Growth systems, not guesswork."`

4 large service cards in a 2×2 grid (desktop), stacked (mobile):

1. **Lead Generation Systems** — funnel icon, teal
2. **AI Customer Automation** — robot/node icon, teal
3. **Conversion Funnel Design** — funnel-to-chart icon
4. **CRM & Workflow Automation** — pipeline icon
5. **Growth Campaigns** — megaphone/chart icon
6. **Business Intelligence** — dashboard icon

Each card expands on hover to reveal a bullet list of specific deliverables (CSS max-height transition).

---

#### "See The System In Action" Section — **HERO FEATURE**

**Eyebrow:** `DEMO LAB PREVIEW`  
**Headline:** `"Watch the machine work."`  
**Subheadline:** `"This isn't a slideshow. These are real workflows."`

**Tab Selector (horizontal tabs):**
```
[WhatsApp Automation]  [Lead Capture Flow]  [CRM Pipeline]  [AI Receptionist]
```

Each tab reveals an animated interactive prototype:

**Tab 1 — WhatsApp Automation:**
- Phone mockup with WhatsApp interface
- Customer sends: "Hi, I want to book an appointment"
- Automated reply appears with typing indicator, then:
  - "Hi [Name]! Welcome to [Business]. What service are you interested in?"
- Customer selects: "Haircut"
- System replies with available slots
- Booking confirmed message appears
- Sidebar shows: CRM updated, calendar blocked, reminder queued
- All animated with realistic timing

**Tab 2 — Lead Capture Flow:**
- Animated funnel diagram: Traffic → Landing Page → Form Fill → CRM Entry → Auto Email → Sales Call
- Each stage lights up sequentially
- Conversion % shown at each stage with a counter animation

**Tab 3 — CRM Pipeline:**
- Mini Kanban board animation
- Cards moving from "New Lead" → "Contacted" → "Demo Booked" → "Closed"
- Timestamps and automated action tags visible

**Tab 4 — AI Receptionist:**
- Chat interface
- User types a question
- AI responds with business-specific answer
- Shows suggested next steps

---

#### Results / Metrics Section

**Eyebrow:** `THE NUMBERS`  
**Headline:** `"Revenue is the only metric that matters."`

Large stat display:

```
┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│    3.4×     │  │    89%      │  │   < 4min    │  │    12+      │
│  Avg ROI    │  │  Lead Reply │  │  Avg System │  │  Industries │
│  Increase   │  │  Rate       │  │  Response   │  │  Served     │
└─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘
```

Numbers animate (count up) when they scroll into viewport. JetBrains Mono Bold, 64px, amber color.

---

#### Process Section

**Eyebrow:** `HOW IT WORKS`  
**Headline:** `"From audit to automation in 4 steps."`

Horizontal timeline on desktop (stacked on mobile):

```
[1 Audit] ——→ [2 System Design] ——→ [3 Build & Automate] ——→ [4 Launch & Optimize]
```

Each step: number in teal, title in Satoshi Bold, 2–3 line description.
Connector lines between steps are animated (draw in as user scrolls).

---

#### AI Audit Tool Section — **CONVERSION ENGINE**

**Background:** Slightly lighter surface (`--color-surface-2`) with teal glow accent

**Eyebrow:** `FREE BUSINESS AUDIT`  
**Headline:** `"See exactly where you're losing revenue."`  
**Subheadline:** `"Answer 5 questions. Get a custom growth report in 60 seconds."`

Multi-step form:

- Step 1: "What type of business do you run?" → [Cards: Restaurant / Clinic / School / Salon / Real Estate / Other]
- Step 2: "What's your biggest challenge right now?" → [Cards: Getting Leads / Converting Leads / Retaining Customers / Managing Operations / All of the above]
- Step 3: "What tools are you currently using?" → [Multi-select: WhatsApp / Instagram / Spreadsheets / CRM / Nothing / Other]
- Step 4: "What's your average monthly revenue?" → [Range selector]
- Step 5: "Where should we send your audit report?" → [Name + Email + Phone]

On submit:
- Loading animation: "Analyzing your business..."
- Results card appears with 3 key findings + CTA to book a call

---

#### Testimonials Section

**Eyebrow:** `CLIENT RESULTS`  
**Headline:** `"They didn't just get marketing. They got a system."`

Horizontal scroll carousel (desktop: 3 visible, mobile: 1 visible)
Auto-scroll with pause on hover.

---

#### Pricing Starter Tiers

**Eyebrow:** `GETTING STARTED`  
**Headline:** `"Pick your starting point."`

3 cards (Starter / Growth / Scale):

```
┌──────────────┐  ┌──────────────────┐  ┌──────────────┐
│   Starter    │  │    Growth ★      │  │    Scale     │
│              │  │  [MOST POPULAR]  │  │              │
│  ₦150,000/mo │  │  ₦350,000/mo     │  │  Custom      │
│              │  │                  │  │              │
│  • Feature 1 │  │  • Feature 1     │  │  Everything  │
│  • Feature 2 │  │  • Feature 2     │  │  +           │
│  • Feature 3 │  │  • Feature 3     │  │  Dedicated   │
│              │  │  • Feature 4     │  │  Support     │
│  [Get Audit] │  │  [Book Call →]   │  │  [Contact]   │
└──────────────┘  └──────────────────┘  └──────────────┘
```

Middle card: teal gradient border, slight scale-up `scale(1.04)`, "Most Popular" badge.

---

#### Final CTA Section

Full-width section, dark with teal glow behind:

```
Ready to stop guessing and start growing?

[Book Your Free Strategy Call →]

No commitment. 45 minutes. Custom roadmap.
```

Headline: Display MD, Satoshi Black.
CTA button: Large, primary style.

---

#### Footer

```
┌────────────────────────────────────────────────────────────────────┐
│  Reed Breed Technologies                                           │
│  "Growth Systems for the Modern SME"                              │
│                                                                    │
│  Company        Services           Industries        Legal        │
│  About          Lead Generation    Schools           Privacy      │
│  Case Studies   AI Automation      Clinics           Terms        │
│  Blog           CRM Workflows      Hospitality       Cookie       │
│  Careers        Campaigns          Real Estate                    │
│                                                                    │
│  [LinkedIn]  [Twitter/X]  [Instagram]  [WhatsApp]                │
│                                                                    │
│  Lagos, Nigeria  |  hello@reedbreed.com  |  +234 xxx xxx xxxx   │
│                                                                    │
│  © 2025 Reed Breed Technologies. All rights reserved.            │
└────────────────────────────────────────────────────────────────────┘
```

Footer background: `#080C14` — matches hero for visual bookending.
Top border: 1px teal at 20% opacity.

---

### 6.2 Demo Lab Page

**Hero Headline:** `"The most dangerous page on this site."`  
**Subheadline:** `"Live prototypes. Real automation flows. Proof before a single naira changes hands."`

**Structure:**

- Filter tabs: [All] [WhatsApp] [CRM] [Lead Capture] [Booking] [AI Chat]
- Grid of demo cards — each is a preview thumbnail + title + industry + "Launch Demo →" button
- Demo opens in a modal overlay (full-screen, dark), interactive

**Demo Entries:**
1. Restaurant Reservation Bot (WhatsApp flow)
2. Clinic Appointment Automation
3. School Enrollment Funnel
4. Salon Booking System
5. Real Estate Lead Qualifier
6. E-commerce Follow-up Sequence

---

### 6.3 Industries Page

**Headline:** `"We speak your industry's language."`

Grid of industry cards. Each links to a sub-page.

**Individual Industry Sub-page Structure:**
1. Industry Hero (tailored headline + visual)
2. "Here's what businesses in [Industry] typically struggle with"
3. "Here's our system for [Industry]"
4. Sample workflow animation
5. Estimated ROI metrics
6. Demo CTA

---

### 6.4 About Page

**Headline:** `"We build revenue systems, not marketing campaigns."`

- Philosophy section: Why most digital agencies fail SMEs
- The Reed Breed approach: Strategy → System → Automation → Results
- Team section (if applicable) OR "Founder's Note" format
- Technology stack section (shows credibility)
- CTA: Work With Us

---

## 7. Motion & Animation System

### Scroll-Triggered Reveals
All sections use this base pattern:
```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 500ms ease, transform 500ms ease;
}
.reveal.in-view {
  opacity: 1;
  transform: translateY(0);
}
```
Use `IntersectionObserver` at `threshold: 0.15`.

### Stagger Rules
- Card grids: 80ms stagger between cards
- List items: 50ms stagger
- Stats: 100ms stagger

### Hover Microinteractions
- All cards: `translateY(-4px)`, 200ms ease
- All buttons: `translateY(-1px)` + glow, 200ms ease
- Nav links: underline draws in from left, 200ms ease
- Icons on service cards: `rotate(5deg)` + scale(1.1), 200ms ease

### Dashboard Animation (Hero)
- Lead cards: Move between columns every 3–4s, CSS animation
- Metric counters: Count up on page load
- Status indicators: Pulse animation, `box-shadow` expanding ring
- Chat bubbles: Appear sequentially with realistic typing delay

### Page Transitions
- Route changes: Subtle fade out/in, 200ms
- Modal opens: Scale from `0.95` + fade, 250ms
- Tab switches: Content cross-fades, 200ms

---

## 8. Responsive Design Breakpoints

```
Mobile:   320px – 767px
Tablet:   768px – 1023px
Desktop:  1024px – 1279px
Wide:     1280px+
```

### Mobile-First Rules:
- Navigation collapses to hamburger at < 768px
- All grids collapse to single column on mobile
- Hero: headline stacks vertically, dashboard visual moves below text and scales to fit
- Demo tabs: horizontal scroll on mobile
- Footer: 2-column link grid collapses to single column
- Metrics section: 2×2 grid on mobile
- Pricing: cards stack vertically, middle card loses scale boost but keeps "most popular" badge

---

## 9. Accessibility Standards

- Color contrast: All text on dark backgrounds must meet WCAG AA (4.5:1 for body, 3:1 for large text)
- Focus states: Visible `box-shadow: 0 0 0 3px rgba(0,212,170,0.5)` on all interactive elements
- Skip to content link: Visible on focus, first element in DOM
- All images: descriptive `alt` attributes
- Form labels: Always present, visually or via `aria-label`
- Motion: `prefers-reduced-motion` media query — disable all transform animations, keep only opacity transitions
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>` used correctly
- Keyboard navigation: Full tab flow through all interactive elements in logical order

---

## 10. Performance Guidelines

- Fonts: Load via `font-display: swap`, preconnect to font CDN
- Images: WebP format, `loading="lazy"` on all below-fold images
- Animations: All CSS-based where possible, avoid JS animation for anything purely decorative
- LCP target: < 2.5s on 4G mobile
- CLS: 0 — all layout dimensions declared explicitly
- Dashboard UI visual: Coded as HTML/CSS/JS, not an image — avoids large asset loading
- Vendor JS: Code-split per route, defer non-critical scripts

---

## 11. Tech Stack (Implementation Reference)

| Layer | Choice | Notes |
|-------|--------|-------|
| Framework | Next.js 14 (App Router) | SSG for marketing pages, SSR for dynamic tools |
| Styling | Tailwind CSS + CSS Custom Properties | Tailwind for utility, CSS vars for design tokens |
| Animation | Framer Motion | Page transitions, scroll animations, complex sequences |
| Icons | Phosphor React | Consistent icon system |
| Fonts | `next/font` | Self-hosted for performance |
| Forms | React Hook Form + Zod | Audit tool, contact forms |
| CMS | Sanity.io | Blog, case studies, demo entries |
| Hosting | Vercel | Preview deployments, edge network |
| Analytics | PostHog | Funnel tracking, session replay |
| CRM | HubSpot Free tier | Lead capture from audit tool |

---

## 12. File & Asset Organization

```
/
├── app/
│   ├── page.tsx              ← Homepage
│   ├── about/
│   ├── services/
│   ├── industries/
│   │   ├── [industry]/
│   ├── demo-lab/
│   ├── case-studies/
│   └── contact/
├── components/
│   ├── ui/                   ← Base design system (Button, Card, Input...)
│   ├── sections/             ← Page sections (Hero, Services, Audit...)
│   ├── demos/                ← Interactive demo components
│   └── layout/               ← Nav, Footer
├── lib/
│   ├── animations.ts         ← Framer Motion variants
│   └── hooks/
└── styles/
    ├── globals.css           ← CSS custom properties / tokens
    └── animations.css        ← Base keyframes
```

---

## 13. Design Inspiration References

| Feeling | Reference | What to Borrow |
|---------|-----------|----------------|
| Intelligence / Structure | Vercel.com | Dot grid, type hierarchy, dark surfaces |
| System Demo | Linear.app | Animated product UI, motion quality |
| Premium Agency | Clay.com | Layout confidence, typography boldness |
| SaaS Credibility | Intercom | Benefit-led copy, clean card system |
| Energy | Framer.com | Scroll animations, section transitions |
| Data Dashboards | Hex.tech | Metric displays, data visualization style |

---

## 14. Copy Tone Reference

| ✅ Write Like This | ❌ Not Like This |
|-------------------|-----------------|
| "Your competitor just replied. You haven't." | "We are passionate about growth" |
| "Most SMEs lose ₦2M a year to slow follow-up." | "We offer comprehensive digital marketing solutions" |
| "47 leads came in. 11 got a reply." | "We leverage AI to optimize your customer journey" |
| "This runs 24/7. You don't have to." | "We are a results-driven agency" |
| "See the system before you buy it." | "Contact us to learn more" |

Copy should feel like a sharp operator wrote it — not a marketer.

---

*Reed Breed Technologies — UI Design Prompt v1.0*  
*Prepared for: Full Design & Development Implementation*
