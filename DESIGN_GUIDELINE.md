# Design Guideline — Riviera Energy

A human-friendly guide to the visual system used across the Riviera Energy website. This documents the actual implementation, not the original spec.

---

## Fonts

Two typefaces, each with a specific role:

| Font | Tailwind class | Where it's used |
|---|---|---|
| **Merriweather** (400, 700, 900) | `font-display` | All headings (H1–H6), section titles, stat numbers, solution card titles, hero tagline |
| **Manrope** (400–700) | `font-sans` | Body text, navigation, buttons, labels, descriptions — the default site font |

Fonts are loaded via `next/font/google` in `layout.tsx` and injected as CSS variables (`--font-merriweather`, `--font-manrope`). The `@theme inline` block in `globals.css` maps them to Tailwind utilities.

---

## Colors

### Brand palette

| Name | Hex | Role | Usage |
|---|---|---|---|
| **Indigo** | `#052698` | Authority, depth | Hero backgrounds, footer, dark sections (`bg-[var(--color-indigo)]`) |
| **Navy Mid** | `#0840A8` | Midtone accent | Gradient overlays, team card backgrounds |
| **Energy Start** | `#116BF8` | Gradient anchor | Start of energy gradient |
| **Energy Mid** | `#1994E1` | Gradient midpoint | Middle of energy gradient |
| **Energy End / Cyan** | `#21BCEE` | Action, interactivity | CTAs, links, section labels, highlighted text, icon color on cards |
| **Amber** | `#E8A317` | Warm highlight | Used sparingly — HQ badge on map, occasional accents |

### Neutrals

| Name | Hex | Usage |
|---|---|---|
| White | `#FFFFFF` | Page background, text on dark |
| Off-white | `#F7F8FC` | Alternating section backgrounds |
| Grey 100 | `#F3F4F6` | Card borders, subtle backgrounds |
| Grey 300 | `#DCE3E8` | Muted text on dark backgrounds |
| Grey 500 | `#878EA0` | Muted body text, secondary labels |
| Black | `#000000` | Primary text, headings |

### Gradient utilities

| Class | Effect |
|---|---|
| `.energy-gradient` | Full gradient background (135deg, blue → cyan) — used on primary buttons |
| `.energy-gradient-text` | Gradient clipped to text (blue → cyan) — for emphasized text on light bg |
| `.energy-gradient-text-on-dark` | Gradient clipped to text (cyan → white) — for stat numbers on dark bg |

### Inline highlighting

Key phrases can be highlighted with `text-[var(--color-cyan)] font-semibold` within a `<span>`. Used in the Mission & Vision section for impactful keywords.

---

## Section Layout

### Dark/light rhythm

Pages alternate between light and dark sections to create visual rhythm:
- **White** (`bg-white`) — primary content sections
- **Off-white** (`bg-[var(--color-off-white)]`) — via `<SectionWrapper background="off-white">`
- **Dark** (`bg-[var(--color-indigo)]`) — feature/stats sections with `<GradientMesh variant="dark" />`

### Section header pattern

Most sections follow a consistent three-part header:

```
1. Label    — uppercase, small, cyan text (e.g. "Our Solutions")
2. H2       — display font, bold, large (text-3xl md:text-4xl lg:text-5xl)
3. Subtitle — optional, body font, muted color
```

Each wrapped in `<ScrollReveal>` with staggered `delay` props (0, 100, 200ms).

### Spacing tokens

| Token | Value | Typical use |
|---|---|---|
| Section padding | `py-16 sm:py-24 md:py-32` | Vertical section spacing |
| Content max-width | `max-w-7xl` (or `max-w-3xl` for centered text) | Container width |
| Grid gap | `gap-6` to `gap-8` | Card grids |
| Header → content | `mt-12` to `mt-16` | Space between section header and body |

---

## Components

### Button

Polymorphic — renders `<Link>` when `href` is provided, `<button>` otherwise.

| Variant | Appearance | Where used |
|---|---|---|
| `primary` | Energy gradient background, white text, blue shadow | Main CTAs ("Contact Us", "Our Solutions") |
| `secondary` | Cyan border, transparent bg, hover fills | Secondary actions ("View Solutions") |
| `ghost` | White/translucent, subtle hover | Dark section secondary actions |

### ScrollReveal

Wraps any content with fade-up-on-viewport-entry animation.

- Duration: 700ms with `--ease-flow`
- `delay` prop (ms) for staggered reveals
- Respects `prefers-reduced-motion`

### SectionWrapper

Standard section container with background theming.

- `background`: `'white'` | `'off-white'` | `'dark'`
- `wide`: boolean — toggles between `max-w-7xl` and `max-w-[1400px]`
- Includes responsive horizontal padding

### GradientMesh

Decorative gradient backdrop for visual depth on dark sections.

- `variant`: `'light'` | `'dark'`
- Absolutely positioned, `pointer-events-none`
- Used in hero, "Why Riviera", stats, and CTA sections

### Card patterns

**Differentiator cards** (dark bg, "What Sets Us Apart"):
- Inline icon + title row: `flex items-start gap-3`
- Icon container: `w-9 h-9`, `bg-white/10`, cyan icon
- Border: `border-white/10`, background: `bg-white/5`
- Hover: `bg-white/10`

**Sector cards** (light bg, "Sectors We Serve"):
- Same inline icon + title layout
- Icon container: `w-9 h-9`, off-white bg, cyan icon
- White card with subtle border and lift-on-hover shadow

**Solution cards** (image background):
- Full-bleed image with gradient overlay
- Title at bottom, "Learn More" appears on hover with slide-up

---

## Motion

### Easing functions

| Token | CSS value | Character |
|---|---|---|
| `--ease-flow` | `cubic-bezier(0.22, 1, 0.36, 1)` | Smooth deceleration — scroll reveals, transitions |
| `--ease-wave` | `cubic-bezier(0.37, 0, 0.63, 1)` | Gentle sinusoidal — wave animations |
| `--ease-lift` | `cubic-bezier(0.33, 1, 0.68, 1)` | Subtle lift — card hovers |

### Durations

| Token | Value | Use |
|---|---|---|
| `--duration-fast` | 200ms | Micro-interactions (button press, focus) |
| `--duration-base` | 400ms | Standard transitions (hover, color change) |
| `--duration-smooth` | 700ms | Scroll reveals, image scale |
| `--duration-slow` | 1000ms | Extended reveals |
| `--duration-wave` | 8s | Background wave cycle |

### Animation patterns

- **Scroll reveal**: `ScrollReveal` component — fade-up 12px over 700ms on viewport entry
- **Partner logo scroll**: `.animate-scroll-x` — infinite horizontal scroll at 40s, pauses on hover
- **Card hover**: translate-y -1 to -1.5 with shadow expansion, `--ease-lift`
- **Image hover**: `scale-105` over `--duration-smooth`
- **All animations** respect `prefers-reduced-motion: reduce` via CSS media query

---

## Responsive

### Breakpoints (Tailwind defaults)

| Prefix | Min-width | Notes |
|---|---|---|
| (none) | 0 | Mobile-first base styles |
| `sm` | 640px | Larger phones / small tablets |
| `md` | 768px | Tablets |
| `lg` | 1024px | Desktops |

### Type scale progression

| Element | Mobile | Tablet (md) | Desktop (lg) |
|---|---|---|---|
| Hero H1 | `text-4xl` | `text-6xl` | `text-7xl` |
| Section H2 | `text-3xl` | `text-4xl` | `text-5xl` |
| Body text | `text-base` | `text-lg` | — |
| Labels | `text-sm` | — | — |
| Mission/Vision | `text-lg` | `text-xl` | — |

### Layout shifts

- **Grids**: 1 column on mobile → 2–3 columns on `md`/`lg`
- **Hero**: Stacked on mobile → 7/5 asymmetric grid on `lg`
- **Buttons**: Stacked `flex-col` on mobile → inline `flex-row` on `sm`
- **Stats**: 3-column grid maintained at all sizes (compact on mobile)
