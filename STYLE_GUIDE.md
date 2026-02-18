# Riviera Energy - Style Guide

This document defines the complete visual system for the Riviera Energy website. Every design decision traces back to the brand's actual assets — the logos, company deck, and visual motifs extracted from `Resource/`.

---

## Color System

All colors are derived from the official logos and company profile deck. Defined as CSS custom properties for consistency.

### CSS Custom Properties

```css
:root {
  /* --- Primary Brand --- */
  --color-indigo:        #080145;   /* Logo background, hero/footer bg, deepest navy */
  --color-navy:          #11008E;   /* "RIVIERA" text on white bg, section headings */
  --color-navy-mid:      #0F2B5B;   /* Deck heading bars, card header strips */

  /* --- Energy Gradient (from "ENERGY" text) --- */
  --color-energy-start:  #0958B3;   /* Gradient origin — deep blue */
  --color-energy-mid:    #2585C4;   /* Gradient midpoint — action blue */
  --color-energy-end:    #59DAE3;   /* Gradient terminus — bright cyan */

  /* --- Accent --- */
  --color-cyan:          #0098B5;   /* CTA accents, focus rings, interactive elements */
  --color-amber:         #E8A317;   /* Warm accent — sparingly for urgency, badges, alerts */

  /* --- Neutrals --- */
  --color-white:         #FFFFFF;
  --color-off-white:     #F7F8FC;   /* Alternating section backgrounds */
  --color-grey-100:      #F3F4F6;
  --color-grey-300:      #D1D5DB;
  --color-grey-500:      #6B7280;
  --color-grey-900:      #111827;

  /* --- Semantic --- */
  --color-text-primary:  #080145;   /* Headings on light bg */
  --color-text-body:     #1E293B;   /* Body text on light bg */
  --color-text-muted:    #64748B;   /* Secondary text, captions */
  --color-text-on-dark:  #FFFFFF;   /* Text on indigo/navy bg */
  --color-text-on-dark-muted: #CBD5E1; /* Secondary text on dark bg (slate-300 for WCAG AA) */
}
```

### Energy Gradient
The defining brand gradient, extracted from the "ENERGY" word mark. Used for high-emphasis elements.

```css
.energy-gradient {
  background: linear-gradient(135deg, #0958B3 0%, #2585C4 40%, #40B2D4 70%, #59DAE3 100%);
}

.energy-gradient-text {
  background: linear-gradient(90deg, #0958B3, #2585C4, #59DAE3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Warm Accent: Amber
The deck is almost entirely navy/blue/cyan — adding `#E8A317` (amber, drawn from the golden-hour refinery photography in the deck) as a **sharp contrast accent** prevents palette fatigue. Use only for:
- "Established since 2014" badge
- Alert/urgency indicators
- Hover states on specific interactive elements
- Stats/number highlights

This is a 90/10 rule: 90% navy-cyan system, 10% amber punctuation.

---

## Typography

### Font Selection

The "RIVIERA" logotype uses a **Didone/Modern serif** — high stroke contrast, thin hairline serifs, ball terminals. However, for page headings we use **Outfit** — a geometric sans-serif that conveys engineering confidence with even stroke weight, excellent number legibility, and strong display presence at all sizes.

| Role | Font | Weight | Fallback | Source |
|---|---|---|---|---|
| **Display / H1** | Outfit | 700, 800 | system-ui, sans-serif | Google Fonts |
| **Section Headings / H2-H3** | Outfit | 600, 700 | system-ui, sans-serif | Google Fonts |
| **Body / UI** | Plus Jakarta Sans | 400, 500, 600, 700 | system-ui, sans-serif | Google Fonts |
| **Mono / Data** | JetBrains Mono | 400, 500 | 'Courier New', monospace | Google Fonts |

**Why Outfit**: A geometric sans-serif with a contemporary feel, strong at display sizes. Even stroke weight eliminates the readability issues of high-contrast serifs. Conveys engineering authority and industrial confidence — ideal for an energy consultancy. Distinct enough from Plus Jakarta Sans (body) to maintain clear heading/body hierarchy.

**Why Plus Jakarta Sans**: Geometric sans with slightly rounded terminals. Warm enough to complement Outfit's precision without competing. Excellent legibility at body sizes. Not overused in the AI-generated aesthetic space.

### Type Scale

```
Hero H1:       text-5xl / md:text-6xl / lg:text-7xl  — Outfit 800  — tracking-tight, leading-[0.9]
Section H2:    text-3xl / md:text-4xl / lg:text-5xl  — Outfit 700  — tracking-tight, leading-tight
Card H3:       text-xl  / md:text-2xl                — Plus Jakarta 700 — leading-snug
Subheading:    text-lg  / md:text-xl                  — Plus Jakarta 600 — leading-snug
Body:          text-base / md:text-lg                 — Plus Jakarta 400 — leading-relaxed
Caption/Meta:  text-sm                                — Plus Jakarta 500 — tracking-wide, uppercase
Stat Number:   text-5xl / md:text-6xl                 — Outfit 800  — leading-none (for count-up)
```

### Typographic Details
- H1 and H2 use negative letter-spacing (`tracking-tight`) for density and impact
- Body text uses generous line-height (`leading-relaxed`, ~1.7) for readability
- Uppercase captions with wide tracking for label/meta text
- Serif headings on both light and dark backgrounds — the contrast is the point

---

## Spatial Composition

### Grid Philosophy
The company deck uses **asymmetric layouts** — not everything is centered in equal columns. The website should reflect this.

```
Standard Container:  max-w-7xl mx-auto px-6 sm:px-8 lg:px-12
Wide Container:      max-w-[1400px] mx-auto px-6 (for hero, partner logos)
Full Bleed:          w-full (for dark sections, hero backgrounds, wave containers)
```

### Layout Patterns (from Company Deck)

**1. Asymmetric Split (About Us pattern)**
- 55/45 or 60/40 text-to-image ratio
- Image breaks grid boundary, overlapping into adjacent space
- Wave lines flow behind both columns
```
|  Text Content    |  [Image overlapping edge] |
|  (left-aligned)  |     ↗ breaks right margin |
```

**2. Three-Column Stagger (Service Pillars)**
- Cards are NOT perfectly aligned — subtle vertical offset between them
- First card sits slightly higher, creating a cascade/wave feel
```
| Card 1 ↑ |           |           |
|          | Card 2    |           |
|          |           | Card 3 ↓ |
```

**3. Full-Width Dark Band (Stats, CTA)**
- Deep indigo background with wave SVGs animating through
- Content centered within, but wave elements extend to viewport edges

**4. Overlap Composition**
- Elements deliberately overlap: images over section boundaries, wave lines crossing card edges, dot grids sitting at intersections
- Creates depth and avoids the "stacked boxes" feel

### Spacing Tokens
```
4px   — micro (icon gaps)
8px   — tight (inline elements)
16px  — compact (card internal padding-x)
24px  — default (card padding, list gaps)
32px  — comfortable (between related elements)
48px  — section internal spacing
64px  — between distinct content blocks
96px  — section padding-y (mobile)
128px — section padding-y (desktop)
```

---

## Motion Design System

All motion follows the **"ocean current"** principle: slow, powerful, fluid. Nothing snaps, nothing bounces.

### Easing
```css
--ease-flow:    cubic-bezier(0.22, 1, 0.36, 1);   /* Primary — smooth deceleration */
--ease-wave:    cubic-bezier(0.37, 0, 0.63, 1);    /* Symmetric — for looping wave animations */
--ease-lift:    cubic-bezier(0.33, 1, 0.68, 1);    /* Card hover lifts */
```

### Durations
```css
--duration-fast:   200ms;   /* Hover color changes, opacity toggles */
--duration-base:   400ms;   /* Standard transitions */
--duration-smooth: 700ms;   /* Scroll reveal entrance */
--duration-slow:   1000ms;  /* Hero entrance, wave drift */
--duration-wave:   20s;     /* Background wave animation loop (slow, ambient) */
```

### Animation Patterns

**Page Load Orchestration (Hero)**
```
0ms    — Background fades in
200ms  — Wave SVGs begin drifting (continuous loop, 20s cycle)
300ms  — H1 headline translates up 40px + fades in
450ms  — Tagline translates up 30px + fades in
600ms  — CTA buttons translate up 20px + fades in
800ms  — Scroll indicator fades in
```

**Scroll Reveal (IntersectionObserver)**
- Trigger: element enters viewport at 15% visibility
- Transform: `translateY(30px)` → `translateY(0)` + `opacity: 0` → `opacity: 1`
- Duration: 700ms with `--ease-flow`
- Stagger: 100ms between sibling elements (cards, list items)
- Once only — no re-animation on scroll back up

**Card Hover**
```css
.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px -12px rgba(8, 1, 69, 0.15);
  transition: all 400ms var(--ease-lift);
}
```

**Stat Counter**
- Numbers count from 0 to final value over 1500ms when entering viewport
- Use `requestAnimationFrame` with eased interpolation, not linear

**Wave SVG Animation**
- Multiple SVG `<path>` elements with different `stroke-dasharray` and `stroke-dashoffset` values
- Animated via CSS `@keyframes` with offset timing between strands
- Movement is lateral drift + subtle vertical oscillation
- Speed: glacial (20-30s per full cycle)
- Opacity: 0.08-0.15 on light backgrounds, 0.1-0.2 on dark backgrounds (reduced to preserve text readability)

---

## UI Components

### Navigation
- **Desktop**: Sticky top bar, white background with subtle bottom border. Logo left, links center/right. Active state: cyan underline (2px, animated width).
- **Mobile**: Slide-in drawer from right. Dark indigo background. Wave motif at bottom of drawer.
- **Scroll behavior**: Slight backdrop-blur + shadow appears after scrolling 50px.

### Buttons

**Primary (CTA)**
```
Background:    Energy gradient (135deg)
Text:          White, Plus Jakarta 600
Padding:       14px 32px
Radius:        8px
Shadow:        0 4px 14px -3px rgba(9, 88, 179, 0.4)
Hover:         Background-position shifts (gradient slides), shadow deepens
Active:        Scale 0.98
```

**Secondary**
```
Background:    Transparent
Border:        2px solid var(--color-cyan)
Text:          var(--color-cyan)
Hover:         Background fills with cyan at 8% opacity, border brightens
```

**Ghost (on dark backgrounds)**
```
Background:    rgba(255, 255, 255, 0.08)
Border:        1px solid rgba(255, 255, 255, 0.2)
Text:          White
Hover:         Background brightens to rgba(255, 255, 255, 0.15)
```

### Service Cards
```
Background:    White
Border:        1px solid var(--color-grey-100)
Radius:        12px
Padding:       32px
Shadow (rest): 0 1px 3px rgba(0, 0, 0, 0.04)
Shadow (hover): 0 20px 40px -12px rgba(8, 1, 69, 0.12)
Transition:    all 400ms var(--ease-lift)
Top Accent:    4px top border using energy gradient (visible brand signature on each card)
```

### Stat Block
```
Number:        Outfit 800, text-5xl, energy-gradient-text (gradient clipped to text)
Label:         Plus Jakarta 500, text-sm, uppercase, tracking-wide, muted color
Layout:        Horizontal row on desktop, 2x2 grid on mobile
Separator:     1px vertical line between stats (desktop), none on mobile
```

### Forms (Contact Page)
```
Input bg:      White
Border:        1px solid var(--color-grey-300)
Focus ring:    2px ring var(--color-cyan) with 2px offset
Radius:        8px
Label:         Plus Jakarta 500, text-sm, var(--color-text-body)
Padding:       14px 16px
```

---

## Background & Texture System

### Wave Lines (Signature Element)
- **Implementation**: SVG `<path>` elements, absolutely positioned, `pointer-events: none`
- **Strand count**: 5-8 overlapping paths per wave group
- **Stroke**: 1-2px, varying opacity (0.06 to 0.15 on light, 0.1 to 0.2 on dark)
- **Colors**: Use energy gradient colors — strands vary from `#0958B3` to `#59DAE3`
- **Placement**: Flow from left/right edges, partially clipping off-screen. Top-left and bottom-right corners primarily (matching deck layout).
- **Animation**: Slow lateral drift via `stroke-dashoffset` or `transform: translateX()` keyframes

### Dot Grid Clusters
- **Pattern**: 4x4 or 6x6 grid of small circles (3-4px diameter, 10-12px gap)
- **Color**: `var(--color-navy)` at 15-25% opacity on light bg; `var(--color-cyan)` at 20-30% on dark bg
- **Placement**: Corner accents — top-right of hero, above section headings (matching deck positioning)
- **Animation**: Subtle staggered fade-in on scroll entry

### Section Backgrounds
```
Light sections:    var(--color-white) or var(--color-off-white) alternating
Dark sections:     var(--color-indigo) — hero, stats band, CTA, footer
Dark + texture:    Indigo bg + subtle radial gradient (slightly lighter center) + wave overlay
Grain overlay:     Optional fine noise texture at 2-4% opacity on dark sections for depth
```

---

## Imagery Guidelines

### Treatment
- **Hero**: Full-bleed, dark overlay at 65-75% opacity using `var(--color-indigo)`. Wave SVGs layered on top.
- **Section images**: Rounded corners (`rounded-xl`, 16px). Slight cool-tone filter if photos are warm.
- **Overlap**: Images can extend beyond their grid column by 20-40px, overlapping into adjacent content (as in the deck's About Us layout).

### Photography Direction
- Offshore platforms at dawn/dusk (dramatic lighting)
- Refinery infrastructure with night illumination (the deck's "Initial Assessment Phase" image)
- Engineering teams in the field, wearing PPE (authenticity)
- Avoid: generic stock, business handshakes, laptop-on-desk, people pointing at screens

---

## Responsive Strategy

### Breakpoints (Tailwind defaults)
```
sm:   640px    — Single column to 2-col transitions
md:   768px    — Typography scale-up, nav switches
lg:   1024px   — Full desktop layout, 3-col grids
xl:   1280px   — Max container width reached
2xl:  1536px   — Extra breathing room, larger hero type
```

### Mobile-First Priorities
- Wave animations: simplified (fewer strands, no drift) or static on mobile for performance
- Cards: stack vertically, full-width with consistent spacing
- Hero: type scales down significantly but remains impactful
- Navigation: hamburger menu → slide-in drawer
- Images: aspect-ratio constrained, no overlap on mobile
- Touch targets: minimum 44x44px

---

## Accessibility

- All color combinations meet WCAG AA contrast (4.5:1 for text, 3:1 for UI)
- **CSS Layer Ordering**: Base styles (`body`, `h1-h6`) MUST be in `@layer base {}` so Tailwind utilities (e.g. `text-white` on dark sections) can override them. Unlayered styles beat all layered styles in Tailwind v4.
- `prefers-reduced-motion`: disable all wave animations, scroll reveals become instant, counters show final values
- Semantic HTML: proper heading hierarchy, landmark regions, alt text on all images
- Focus indicators: visible 2px cyan ring on all interactive elements
- Skip-to-content link on every page
