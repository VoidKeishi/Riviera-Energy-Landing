# AGENTS.md

> Agent reference for the Riviera Energy corporate landing page.
> Pre-implementation stage — no source code exists yet. This file defines the target conventions.

## Project Overview

Static corporate landing page for **Riviera Energy Pte Ltd** — energy industry consultancy in Singapore (est. 2014). Merges content from ogsglobal.co (commissioning/consultancy) and jadeclover.com (workforce/recruitment). Purpose: corporate credibility, not marketing-heavy.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Fonts**: Outfit (display/headings), Plus Jakarta Sans (body/UI), JetBrains Mono (data) — all via Google Fonts
- **Deployment**: Vercel (static)
- **Package manager**: npm

## Commands

```bash
npm run dev          # Dev server (localhost:3000)
npm run build        # Production build — MUST pass before any PR
npm run start        # Serve production build
npm run lint         # ESLint — MUST pass before any PR
```

No test framework configured yet. When added, follow Next.js conventions (Jest + React Testing Library or Vitest).

## Site Structure (App Router)

```
app/
├── layout.tsx                        # Root layout — fonts, nav, footer
├── page.tsx                          # Home — hero, services, partners, CTA
├── about/page.tsx                    # About — company, values, leadership, global reach
├── solutions/
│   ├── page.tsx                      # Solutions overview
│   ├── commissioning/page.tsx        # ICORA framework, 5-step execution
│   ├── consultancy/page.tsx          # Strategic advisory
│   └── workforce/page.tsx            # Recruitment, job vacancies, CV submission
├── projects/page.tsx                 # TBC — placeholder initially
└── contact/page.tsx                  # Contact form + office info
```

## Code Style

### TypeScript

- Strict mode enabled (`"strict": true` in tsconfig)
- No `as any`, `@ts-ignore`, or `@ts-expect-error` — ever
- Prefer `interface` for component props, `type` for unions/intersections
- Export types alongside components when consumed externally

### Components

- **Functional components only** — arrow functions with explicit return types
- **File naming**: PascalCase for components (`ServiceCard.tsx`), kebab-case for utilities (`format-date.ts`)
- **Directory structure**: Group by feature, not by type

```
components/
├── ui/                   # Reusable primitives (Button, Card, Input)
├── layout/               # Nav, Footer, Container, Section
├── home/                 # Home page sections
├── about/                # About page sections
├── solutions/            # Solutions page sections
└── contact/              # Contact form
```

### Imports

- Group imports: (1) React/Next.js, (2) third-party, (3) components, (4) utils/types, (5) styles
- Use `@/` path alias for project imports (e.g., `@/components/ui/Button`)
- No default exports except for page components (Next.js requirement)
- Named exports for everything else

### React Patterns

- Server Components by default — add `'use client'` only when needed (interactivity, hooks, browser APIs)
- Minimize client component boundaries — push `'use client'` to leaf components
- Use Next.js `<Image>` for all images, `<Link>` for internal navigation
- Metadata via `export const metadata` in page files (not `<Head>`)
- Loading states via `loading.tsx`, error boundaries via `error.tsx`

### Tailwind CSS

- Use Tailwind utility classes directly — no CSS modules, no styled-components
- Extract repeated patterns into components, not `@apply` rules
- Custom design tokens belong in `tailwind.config.ts` `extend` section
- Responsive: mobile-first (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`)
- Dark sections use class-based theming, not `dark:` variant

### Naming Conventions

- **Variables/functions**: camelCase
- **Components**: PascalCase
- **Constants**: UPPER_SNAKE_CASE for true constants, camelCase for config objects
- **CSS custom properties**: kebab-case (`--color-indigo`, `--ease-flow`)
- **Files**: PascalCase for components, kebab-case for utils/hooks/lib

### Error Handling

- Never use empty catch blocks
- Form submissions: show inline errors with accessible messaging
- Contact form: use a form service (Formspree, Resend) — no custom backend
- Image loading: always provide `alt` text, use `placeholder="blur"` where possible

## Brand & Design System

### Colors (define in tailwind.config.ts)

```
indigo:       #080145    — Hero/footer bg, deepest navy
navy:         #11008E    — RIVIERA text, section headings
navy-mid:     #0F2B5B    — Card header strips
energy-start: #0958B3    — Gradient origin
energy-mid:   #2585C4    — Gradient midpoint
energy-end:   #59DAE3    — Gradient terminus, bright cyan
cyan:         #0098B5    — CTAs, focus rings, interactive
amber:        #E8A317    — Warm accent (sparingly — 10% rule)
off-white:    #F7F8FC    — Alternating section bg
```

### Motion System

- Easing: `cubic-bezier(0.22, 1, 0.36, 1)` — smooth deceleration ("ocean current" feel)
- Scroll reveals: `translateY(30px)` + `opacity: 0` → visible, 700ms, IntersectionObserver
- Card hover: `translateY(-6px)` + deepened shadow, 400ms
- Wave SVGs: 20-30s animation loops, low opacity (0.08-0.15 light bg, 0.2-0.35 dark bg)
- Respect `prefers-reduced-motion`: disable animations, show final states

### Typography Scale

```
Hero H1:    text-5xl → text-7xl   Outfit 800, tracking-tight
Section H2: text-3xl → text-5xl   Outfit 700, tracking-tight
Card H3:    text-xl → text-2xl    Plus Jakarta 700
Body:       text-base → text-lg   Plus Jakarta 400, leading-relaxed
Caption:    text-sm               Plus Jakarta 500, uppercase, tracking-wide
```

### Layout

- Standard container: `max-w-7xl mx-auto px-6 sm:px-8 lg:px-12`
- Wide container: `max-w-[1400px] mx-auto px-6`
- Asymmetric layouts preferred over centered grids (55/45, 60/40 splits)
- Sections alternate white/off-white backgrounds; dark indigo for hero, stats, CTA, footer

## Accessibility (Non-Negotiable)

- WCAG AA contrast (4.5:1 text, 3:1 UI) for all color combinations
- Semantic HTML: proper heading hierarchy (h1 → h2 → h3), landmark regions
- Focus indicators: visible 2px cyan ring on all interactive elements
- Skip-to-content link on every page
- `alt` text on all images; decorative SVGs get `aria-hidden="true"`
- Touch targets: minimum 44×44px

## Key Context Files

| File | Purpose |
|------|---------|
| `CLAUDE.md` | Full project spec — tech stack, structure, brand, content summary |
| `STYLE_GUIDE.md` | Complete visual system — colors, typography, spacing, motion, components |
| `VIBE.md` | Design direction — "Engineered Flow" concept, aesthetic philosophy |
| `CONTENT.md` | Page-by-page content, copy, section structure, source mapping |
| `CLAUDE_MEMORY.md` | Project decisions and status tracking |
| `Resource/` | Logos, company deck PDF, reference content from predecessor sites |

**Read `STYLE_GUIDE.md` before implementing any UI.** It has the full component specs (buttons, cards, nav, forms, backgrounds).

**Read `CONTENT.md` before implementing any page.** It has exact copy, section order, and layout instructions for every page.

## Implementation Notes

- Use Context7 MCP for up-to-date Next.js/Tailwind docs during implementation
- Static/semi-static site — no complex backend
- Job vacancies: static JSON data for V1, headless CMS later
- Contact form: form service integration (Formspree/Resend), no custom API
- Projects page is TBC — implement placeholder
- Wave SVG animations are the signature visual element — prioritize getting them right
- Photography: use high-quality energy sector imagery, avoid generic stock
