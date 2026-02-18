# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Corporate landing page for **Riviera Energy Pte Ltd** — an energy industry consultancy in Singapore (est. 2014). Rebrand merging content from ogsglobal.co (commissioning/consultancy) and jadeclover.com (workforce/recruitment). The site is for **corporate credibility**, not sales — confident, professional, not flashy.

## Tech Stack

- **Next.js 16** with App Router, React 19, TypeScript (strict mode)
- **Tailwind CSS v4** via `@tailwindcss/postcss` — uses `@theme inline` and `@layer base` (NOT the v3 `tailwind.config.js` pattern)
- **Fonts**: Outfit (display/headings), Plus Jakarta Sans (body/UI), JetBrains Mono (data) — loaded via `next/font/google` with CSS variables
- **Path alias**: `@/*` maps to `./src/*`
- **No backend** — static site, contact form currently uses a setTimeout mock

## Commands

```bash
npm run dev     # Start dev server (next dev)
npm run build   # Production build (next build)
npm run start   # Serve production build
npm run lint    # ESLint with next/core-web-vitals + next/typescript configs
```

## Architecture

### File Structure

```
src/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout — fonts, Header, Footer, metadata
│   ├── page.tsx                # Home page (all sections inline)
│   ├── globals.css             # CSS custom properties, @theme, utility classes
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── projects/page.tsx       # Placeholder page (TBC)
│   └── solutions/
│       ├── page.tsx            # Solutions overview
│       ├── commissioning/page.tsx
│       ├── consultancy/page.tsx
│       └── workforce/page.tsx
├── components/
│   ├── header.tsx              # Server component wrapper
│   ├── HeaderClient.tsx        # Client component — scroll detection, mobile drawer, dropdown
│   ├── footer.tsx              # Server component
│   ├── ui/                     # Reusable primitives
│   │   ├── Button.tsx          # Polymorphic — renders <Link> or <button> based on `href` prop
│   │   ├── ScrollReveal.tsx    # IntersectionObserver fade-up animation (client)
│   │   ├── WaveBackground.tsx  # Animated SVG wave strands (server, CSS animations)
│   │   ├── SectionWrapper.tsx  # Section container with background variants (server)
│   │   └── DotGrid.tsx         # Decorative dot grid SVG (server)
│   ├── home/
│   │   └── StatCounter.tsx     # Animated count-up on viewport entry (client)
│   └── contact/
│       └── ContactForm.tsx     # Client form with validation (client)
├── hooks/
│   └── use-reduced-motion.ts   # useSyncExternalStore-based prefers-reduced-motion hook
```

### Client/Server Boundary

Most components are **server components by default**. Client components (`'use client'`) are used only where browser APIs are needed:
- `HeaderClient.tsx` — scroll listener, mobile menu state, dropdown
- `ScrollReveal.tsx` — IntersectionObserver
- `StatCounter.tsx` — IntersectionObserver + requestAnimationFrame count-up
- `ContactForm.tsx` — form state management
- `use-reduced-motion.ts` — matchMedia listener

The `header.tsx` server wrapper imports `HeaderClient` to keep the boundary clean.

### Styling System

All brand colors and motion tokens are defined as **CSS custom properties** in `globals.css :root` and mapped to Tailwind via `@theme inline`. Components reference them as `var(--color-*)` and `var(--duration-*)` / `var(--ease-*)`.

Key utility classes in `globals.css`:
- `.energy-gradient` — the brand gradient background (blue → cyan)
- `.energy-gradient-text` — gradient clipped to text
- `.animate-scroll-x` — infinite horizontal scroll for partner logos

**Important**: Base styles (`body`, headings) are in `@layer base {}` so Tailwind utility classes (e.g. `text-white` on dark sections) properly override them. In Tailwind v4, unlayered styles beat all layered styles.

### Motion System

All motion follows "ocean current" principle — slow, fluid, no bouncing. Key patterns:
- `ScrollReveal` wraps content for fade-up-on-viewport-entry (700ms, `--ease-flow`, configurable `delay`)
- `WaveBackground` renders 7 animated SVG wave strands with CSS keyframe animations
- `StatCounter` counts from 0 to target with eased interpolation on viewport entry
- All animations respect `prefers-reduced-motion` via the `usePrefersReducedMotion` hook and CSS media query

## Content Reference Files

Detailed content, design direction, and style specs are in separate files — **read these before making content or design changes**:
- `CONTENT.md` — Full page-by-page copy, section structure, and source mapping
- `VIBE.md` — "Engineered Flow" design concept, visual language, motion philosophy
- `STYLE_GUIDE.md` — Complete CSS variable definitions, type scale, component specs, spacing tokens, responsive strategy, accessibility requirements

## Site Structure

```
/ (Home)              — Hero, intro, 3 service cards, differentiators + stats, partners, CTA
/about                — Asymmetric hero, values grid, leadership team, global reach
/solutions            — Overview of 3 pillars with expanded cards
  /solutions/commissioning    — ICORA framework, 5-step execution, outcomes
  /solutions/consultancy      — Advisory services, specialist areas, value delivery
  /solutions/workforce        — 6 service areas, recruitment journey, job vacancies, CV submission
/projects             — Placeholder (TBC)
/contact              — Contact form + office info
```

## Three Service Pillars

1. **Commissioning & Operational Readiness** — ICORA framework, data-driven project enablement
2. **Strategic Project Consultancy** — Advisory from concept through execution
3. **Global Workforce & Mobility Solutions** — Contract/permanent hiring, crew management, ~100K+ talent database

## Brand Quick Reference

- **Colors**: Deep Indigo `#080145` (hero/footer bg), Navy `#11008E` (headings), Energy Gradient `#0958B3→#59DAE3` (CTAs/accents), Cyan `#0098B5` (interactive), Amber `#E8A317` (sparingly)
- **Tagline**: "Where Partnership Meets Performance"
- **Tone**: Direct, measured, expert. Short sentences. Claims backed by specifics.
- **Visual motifs**: Animated wave SVGs, dot grid clusters, dark/light section rhythm

## Resource Files

Source materials in `Resource/`:
- `Company Logo_White Background.png` / `Company Logo_Blue Background.png` — Official logos
- `Riviera Energy Company Profile.pdf` — 10-page company deck
- `Email.md` — Client scope/requirements
- `OGS-Global.md` / `JadeClover.md` — Predecessor site content
- `CONTEXT.md` — High-level project brief

## Implementation Notes

- Contact form submission is mocked (setTimeout) — needs a real form service (Formspree, Resend, etc.)
- Job vacancies on `/solutions/workforce` can be static JSON initially
- Partner logos are text placeholders — actual logos need sourcing
- Projects page is a placeholder pending client content
- Use **Context7 MCP** for up-to-date Next.js/React/Tailwind docs during implementation
