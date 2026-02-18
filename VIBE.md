# Riviera Energy - Vibe & Design Direction

## Core Concept: "Engineered Flow"

The site embodies a deliberate tension: **organic fluidity meets industrial precision**. Flowing multi-strand wave lines (the brand's signature motif) move through rigid, grid-based content — like energy currents flowing through engineered infrastructure. This isn't a generic corporate site. It's a **living technical document** that breathes.

### The Unforgettable Element
**Animated flowing wave SVGs** that subtly drift across sections on scroll — slow, confident, hypnotic. These aren't decorative afterthoughts; they ARE the brand translated to motion. When someone visits riviera-energy.co, they remember the waves. Every other energy consultancy site is static cards on white. This one moves.

## Aesthetic Direction: Industrial Editorial

Not minimalist. Not maximalist. **Editorial** — like a premium industry journal laid out by a designer who understands both engineering precision and visual drama.

### Key Adjectives
* **Authoritative**: Deep indigo backgrounds command the room. This is not a startup trying to look fun.
* **Fluid & Kinetic**: Subtle motion everywhere — wave lines drift, content reveals on scroll with staggered timing, numbers count up. The site feels alive without being distracting.
* **Precise**: Dot grid accents, sharp card edges, structured type hierarchy. Every pixel is deliberate.
* **Asymmetric**: Content blocks don't sit in perfect centered columns. Text and imagery overlap, creating depth and visual tension (as seen in the company deck's About Us spreads).

## Visual Language

### Signature Motifs (from Company Deck)
* **Multi-Strand Flowing Waves**: Complex, overlapping curves suggesting ocean currents and energy flow. These are NOT simple sine waves — they're organic, multi-layered, flowing from page edges. Implemented as animated SVG paths with slow `stroke-dashoffset` animations or CSS motion paths.
* **Dot Grid Clusters**: 4x4 and 6x6 dot patterns placed as accent markers (top-right of sections, near headings). Represent data points, engineering precision, technical rigor. Subtle fade-in on scroll.
* **Photo Overlap Compositions**: Images break out of their containers and overlap adjacent content areas (as in the deck's About Us page where the rig photo clips into the text column). Creates depth and avoids flat card monotony.

### Imagery
* **Subject Matter**: Offshore platforms at golden hour, FPSOs on open water, refinery columns lit at dusk, engineering teams in PPE, blue-collar specialists in high-vis — all real, all industrial.
* **Treatment**: Slightly cool-toned, high contrast. Dark navy overlays at 65-80% on hero images. Photos should feel documentary, not stock. Avoid: generic handshakes, smiling people at whiteboards, anything that could be "any company."
* **Framing**: Allow images to be large and cinematic. Full-bleed hero. Asymmetric crops on service pages. The energy sector is visually dramatic — lean into it.

### Dark/Light Rhythm
Alternate between deep navy sections (immersive, authoritative) and white/off-white sections (breathing room, content clarity). The navy sections are where the wave animations shine most — cyan/teal strands glowing against deep indigo. Keep wave opacity restrained (0.1-0.2) on dark sections where text overlays to preserve readability; the waves should enhance atmosphere, not compete with content.

## Brand Voice on the Web
* **Tagline**: "Where Partnership Meets Performance"
* **Tone**: Direct, measured, expert. Sentences are short. Claims are backed by specifics (years, project counts, regions). No superlatives without evidence.
* **Hierarchy**: Lead with outcomes, follow with how. The audience (energy sector decision-makers) scans first, reads second.

## Motion Philosophy
Motion should feel like **ocean current** — slow, powerful, inevitable. Nothing snaps or bounces. Everything eases in with long durations (600-1000ms). Stagger delays create a cascade effect, like a wave reaching shore.

* **Page Load**: Hero content fades up with 100ms stagger between headline, tagline, and CTA. Wave SVGs begin their drift animation.
* **Scroll Reveals**: Content sections use `IntersectionObserver` — elements translate up 30-40px and fade in. Cards stagger left-to-right.
* **Hover States**: Cards lift with shadow deepening (not just shadow change — actual `translateY(-4px)`). Buttons shift gradient position on hover.
* **Numbers/Stats**: Count-up animation when stats sections enter viewport.

## Competitive Differentiation
| Competitor Pattern | Riviera Approach |
|---|---|
| Static hero with stock photo | Cinematic hero with animated wave overlay |
| Centered 3-column card grid | Asymmetric card layout with overlap and stagger |
| Generic blue/white palette | Deep indigo + cyan gradient as living brand element |
| No motion | Purposeful, slow, fluid motion throughout |
| Flat sections stacked vertically | Sections with depth: overlapping elements, wave borders, photo bleed |

## Inspirations (Refined)
* **Brunel.net**: Card modularity and service/client separation — but we go deeper with asymmetric layouts and motion
* **Elevate Offshore**: Maritime imagery impact — but we add the flowing wave motif as a unifying thread
* **Editorial/Magazine layouts**: Overlap compositions, dramatic whitespace, type hierarchy with display/body font contrast
