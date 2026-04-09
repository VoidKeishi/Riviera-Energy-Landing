# Sanity CMS Integration — Content Manageability Report

Reference implementation: `../MSV-Landing` (Sanity studio at `/studio`, singleton + collection pattern).

---

## Content Categorization by Page

### Home (`/`)

| Content Block | Editable | Add/Remove | Requires Dev |
|---|---|---|---|
| Hero title & subtitle | Yes | — | — |
| Hero CTA button labels | Yes | — | — |
| Mission & Vision paragraphs | Yes | — | — |
| Solution cards (3) — title, image, description | Yes | — | Add new solution pillar (new page + nav) |
| Differentiator cards (6) — title, description | Yes | Yes — add/remove/reorder cards | — |
| Stats (3) — number, label | Yes | Yes — add/remove stats | — |
| Partner logos (20) — name, image | Yes | Yes — add/remove/reorder | — |
| CTA band — heading, description, button labels | Yes | — | — |

### About (`/about`)

| Content Block | Editable | Add/Remove | Requires Dev |
|---|---|---|---|
| Hero label, title, body paragraphs | Yes | — | — |
| "Established since 2014" text | Yes | — | — |
| Team members (3) — name, role, bio, photo | Yes | Yes — add/remove members | — |
| "How We Operate" heading & description | Yes | — | — |
| Policy list (11 items) | Yes | Yes — add/remove policies | — |
| Contact email for governance | Yes | — | — |
| Regions (6) — label | Yes | Yes — add/remove regions | Map/visual layout may need dev if count changes significantly |
| CTA section text & buttons | Yes | — | — |

### Projects (`/projects`)

| Content Block | Editable | Add/Remove | Requires Dev |
|---|---|---|---|
| Hero label, title, body paragraphs | Yes | — | — |
| Project entries (4) — title, location, sector, coordinates, services, description, highlights | Yes | **Yes — this is the ideal CMS collection** | — |
| Industry cards (6) — title, description | Yes | Yes — add/remove | Icon requires dev (SVG inline) |
| Stats (3) — number, label | Yes | Yes — add/remove | — |
| CTA section | Yes | — | — |

> Projects page is the strongest candidate for CMS — structured data, frequently updated, similar to MSV-Landing's `project` schema.

### Solutions Overview (`/solutions`)

| Content Block | Editable | Add/Remove | Requires Dev |
|---|---|---|---|
| Hero heading, description | Yes | — | — |
| Solution pillar cards (3) — title, description, features list, image, link | Yes | — | **Adding a new pillar requires a new page route + nav update** |

### Solutions — Commissioning (`/solutions/commissioning`)

| Content Block | Editable | Add/Remove | Requires Dev |
|---|---|---|---|
| Hero title, subtitle | Yes | — | — |
| ICORA framework content (headings, descriptions per phase) | Yes | — | Adding/removing phases changes layout |
| Execution steps | Yes | Yes — reorder/edit | Adding more steps may affect timeline layout |
| Outcome metrics/stats | Yes | Yes — add/remove | — |
| CTA buttons | Yes | — | — |

### Solutions — Consultancy (`/solutions/consultancy`)

| Content Block | Editable | Add/Remove | Requires Dev |
|---|---|---|---|
| Hero title, subtitle | Yes | — | — |
| Service areas / specialist areas | Yes | Yes — add/remove items in list | — |
| Value delivery content | Yes | — | — |
| CTA buttons | Yes | — | — |

### Solutions — Workforce (`/solutions/workforce`)

| Content Block | Editable | Add/Remove | Requires Dev |
|---|---|---|---|
| Hero title, subtitle | Yes | — | — |
| Service cards (6) — title, description | Yes | Yes — add/remove/reorder | — |
| Recruitment timeline steps (6) — label, detail | Yes | Yes — add/remove | Timeline layout may need adjustment |
| Job vacancies (future) | — | **Yes — ideal CMS collection** | Initial schema setup needed |
| CTA buttons | Yes | — | — |

### Contact (`/contact`)

| Content Block | Editable | Add/Remove | Requires Dev |
|---|---|---|---|
| Hero label, title, description | Yes | — | — |
| Singapore HQ address | Yes | — | — |
| Phone number | Yes | — | — |
| LinkedIn URL | Yes | — | — |
| Email addresses (general, CV) | Yes | — | — |
| Registration numbers (company no, EA licence) | Yes | — | — |
| Google Maps embed URL | Yes | — | — |

### Header & Footer (global)

| Content Block | Editable | Add/Remove | Requires Dev |
|---|---|---|---|
| Footer address, phone, email | Yes (via companyInfo singleton) | — | — |
| Footer tagline | Yes | — | — |
| Registration/licence numbers | Yes | — | — |
| LinkedIn URL | Yes | — | — |
| Navigation links | — | — | **Yes — routes are hardcoded, adding top-level pages needs dev** |
| Solution dropdown items | — | — | **Yes — tied to page routes** |
| Footer policy links (Privacy, Terms, Data Protection) | Yes (label) | — | Adding new policy pages needs dev |

---

## Proposed Sanity Schemas

### Singletons (one instance each)

| Schema | Key Fields | Notes |
|---|---|---|
| `companyInfo` | address, phone, emails, linkedIn, registrationNo, licenceNo, googleMapsUrl | Reused by Contact page + Footer |
| `homePage` | heroTitle, heroSubtitle, ctaLabels, missionParagraphs, ctaBandText | All home page static text |
| `aboutPage` | heroLabel, heroTitle, bodyParagraphs, governanceHeading, governanceDescription, contactEmail | About page static text |
| `projectsPage` | heroLabel, heroTitle, bodyParagraphs | Projects page static text |
| `solutionsOverview` | heroHeading, heroDescription | Solutions overview text |
| `commissioningPage` | heroTitle, subtitle, framework content, execution steps[], outcome stats[] | Could be singleton with nested arrays |
| `consultancyPage` | heroTitle, subtitle, service areas[], value content | Same pattern |
| `workforcePage` | heroTitle, subtitle, services[], recruitmentSteps[] | Same pattern |

### Collections (multiple documents, add/remove/reorder)

| Schema | Key Fields | Notes |
|---|---|---|
| `project` | title, location, sector, coordinates{lat,lng}, services[], description, highlights[], coverImage, displayOrder, isFeatured | Closest to MSV-Landing pattern |
| `teamMember` | name, role, bio, photo, displayOrder, isActive | Direct reuse from MSV-Landing |
| `partner` | name, logo(image), displayOrder, darkBg(bool) | For partner carousel |
| `differentiator` | title, description, icon(select), displayOrder | Home page differentiator cards |
| `industry` | title, description, icon(select), displayOrder | Projects page industry cards |
| `policy` | name, displayOrder | About page governance list |
| `jobVacancy` | title, location, type, description, isActive, displayOrder | Future — workforce page |

---

## What Stays Hardcoded (requires dev to change)

- **Page routes** — `/about`, `/solutions/commissioning`, etc. Adding a new solution pillar = new route + page component + nav entry
- **Navigation structure** — header links, dropdown items, footer quick links are tied to routes
- **Section order & layout** — which sections appear on each page and their visual arrangement
- **Icons** — SVG icons in industry cards, differentiator icons mapped from string IDs to components
- **Design/styling** — colors, typography, animations, wave backgrounds, dot grids
- **Contact form logic** — validation, submission handler
- **Map component behavior** — how project coordinates render on the map

---

## Summary: What's Realistic

**High value, low effort (do first):**
- `companyInfo` singleton — one schema powers Contact page + Footer, frequently needed edits
- `project` collection — structured data, most likely to grow, proven pattern from MSV-Landing
- `teamMember` collection — direct reuse from MSV-Landing
- `partner` collection — 20 logos, client will want to add/remove

**Medium value (do if budget allows):**
- Page text singletons (`homePage`, `aboutPage`, etc.) — lets client tweak copy without deploys
- `differentiator` and `industry` collections — nice to have for reordering/adding
- `jobVacancy` collection on workforce page — natural CMS use case
- Solution sub-page singletons — editable service descriptions, steps, stats

**Low value / high effort (skip or defer):**
- Adding entirely new solution pillars — needs new page route, component, nav update
- Adding new top-level pages — same issue
- Navigation structure — tightly coupled to routes
- Section reordering within pages — layout is component-driven
