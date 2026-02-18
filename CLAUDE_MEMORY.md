# Riviera Energy Landing Page - Project Memory

## Project Status
- All context files complete: CLAUDE.md, VIBE.md, STYLE_GUIDE.md, CONTENT.md
- VIBE.md & STYLE_GUIDE.md revised to meet frontend-design skill guidelines
- CONTENT.md has full page-by-page content with section structure and source mapping
- Next.js project initialised and all pages implemented
- **All 9 pages fully implemented** — build passes clean (11 static pages including /_not-found)

## Implementation Status (All Complete)
| Page | Route | Status | Lines |
|------|-------|--------|-------|
| Home | `/` | Done | ~355 |
| About | `/about` | Done | ~342 |
| Contact | `/contact` | Done | ~196 |
| Solutions Overview | `/solutions` | Done | ~295 |
| Commissioning | `/solutions/commissioning` | Done | ~476 |
| Consultancy | `/solutions/consultancy` | Done | ~383 |
| Workforce | `/solutions/workforce` | Done | ~420 |
| Projects | `/projects` | Done | ~330 |

## Card Consistency Fix Applied
- Pattern: `h-full` on ScrollReveal + `h-full flex flex-col` on card + `flex-grow` on description
- Applied to: About (Team + Values), Commissioning (ICORA Pillars + Key Benefits + Asset Services), Consultancy (Specialist Areas + Sectors), Projects (case study cards + sector cards), Workforce (service areas + industries)

## Key Decisions
- Framework: Next.js with App Router (user's choice)
- User wants to use Context7 MCP for up-to-date docs during implementation
- Static corporate site, not a complex web app
- Three service pillars are the core content architecture

## Brand Colors (extracted from actual logos & deck)
- Deep Indigo: #080145 (logo bg, hero/footer)
- Navy: #11008E (RIVIERA text on white)
- Energy Gradient: #0958B3 → #2585C4 → #59DAE3 (ENERGY text)
- Cyan accent: #0098B5 (interactive elements)
- Amber accent: #E8A317 (warm contrast, sparingly)

## Typography (revised to match frontend-design skill)
- Display: Outfit (geometric sans-serif — engineering confidence, strong numbers, even stroke weight)
- Body: Plus Jakarta Sans
- Mono: JetBrains Mono

## Key Context Files
- CLAUDE.md — Project overview, tech stack, structure
- VIBE.md — "Engineered Flow" concept, motion philosophy, aesthetic direction
- STYLE_GUIDE.md — Full CSS vars, type scale, components, motion system, spatial composition
- CONTENT.md — Page-by-page content, section structure, source mapping from OGS/JadeClover/Deck

## User Workflow Preference
Maximum context gathering -> MCP setup -> Generate vibe -> Plan -> Init Next.js -> Implement with context7
