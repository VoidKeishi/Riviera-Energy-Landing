# TODO

- [x] Based on the color scheme, bring better contrast to number in Proven Credentials.
  Added `.energy-gradient-text-on-dark` CSS class with lighter gradient (#1994E1 → #21BCEE → #FFFFFF) for dark backgrounds. Applied to Proven Credentials stats and hero stat on projects page, and '3 Decades' stat on about page.


---

# Done

- [x] Remove solutions page completely, include in the nav bar and link if there is.
  Note: Already removed in prior session. Verified no /solutions route or nav references remain. All "Our Solutions" links point to /#what-we-do.
- [x] Apply designer recommendations to the website:
  Fonts: Outfit → Merriweather (display/headings, weights 400/700/900), Plus Jakarta Sans → Manrope (body/UI).
  Colors: --color-indigo/navy → #052698, energy gradient #116BF8 → #1994E1 → #21BCEE, --color-cyan → #21BCEE, text #000000/#878EA0/#DCE3E8/#FFFFFF. Updated CSS variables, hardcoded gradients in page.tsx pillars, and shadow rgba values in Button, HeaderClient, ContactForm.
- [x] Remove dotted lines in background design, instead replace it with gradient - minimal, classy and efficient, using the updated color scheme.
  Deleted DotGrid.tsx (SVG dot pattern). Removed DotGrid usage from all 4 pages (home, about, contact, projects). Added subtle blur-3xl radial gradient orbs as replacements. Removed strokeDasharray from WaveBackground (solid strokes now). Updated WaveBackground strand colors to new palette.
- [x] Separate pages for "Solutions" is not needed, client want to include it briefly in the homepage. What we do section is already enough to explain the solutions, so all the button of "Our solutions" should navigate to that section of homepage, since we will delete "Solutions" page.
- [x] Who we are at homepage should be moved (copy exactly) to the "About us" page, and remove the "Who we are" section in the homepage. It will replace About us - About Riviera section in About us page. Refer to client comment:
  "Please remove this entire paragraph section, as we would like to keep the structure streamlined and avoid repetition with the existing "About Us" page.
  The header may be retained and repositioned to integrate with the Solutions or Services section below for better flow and hierarchy."
- [x] Replace 10+ Years of excellence with 3 decades (updated text "over a decade" → "3 decades" + image card "50+" → "3 Decades of Excellence")
- [x] Commissioning & Operational Readiness Amend to: Pre-Commissioning, Commissioning & Operational Readiness
- [x] Remove any em dashes, as they tend to make the text appear overly stylised and may give the impression that it was AI-generated. (21 occurrences removed across 7 files)
- [x] Global Reach: any mention of USA replaced with Americas (homepage, about page, projects page)
  Note: Client flagged Global Reach description as "Not on our original document. Need to review." - text retained but corrected USA → Americas.
- [x] Remove 6 global regions. (removed from homepage stats, projects page stats array, and projects hero card)
- [x] Contact number update to: (+65) 8923 9798 (updated in footer, contact page hero, contact page sidebar, and structured data in layout)
