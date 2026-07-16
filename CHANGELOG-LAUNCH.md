# Fly Girl Events & Design — Launch Build Changelog

Production pass on the uploaded master project. Branding, logo, palette,
typography, videos, and photography are all preserved exactly as provided.

## Hero — mobile redesigned around the film
- The video now leads the mobile experience: it fills the top ~60% of the
  first screen edge-to-edge (previously a small letterboxed 16:9 strip under
  a navy header). Juline's studio footage is the first thing visitors see.
- No typography ever overlays Juline. The copy moved into a compact panel
  beneath the film; the only scrims are a thin one at the very top (nav
  legibility) and a soft fade at the bottom. The exact iPhone crop window
  was verified frame-by-frame across the full 10-second loop — her face
  stays fully in frame throughout.
- Hero copy reduced to a statement, one line, and two actions.
- New headline site-wide: **"We Create Extraordinary Environments"** —
  the studio's primary promise, stated plainly (echoed by the footer's
  "Extraordinary spaces don't happen by chance").
- Desktop keeps the full-bleed cinematic treatment with a trimmed copy
  stack (removed the redundant service-bullet row; kept the signature
  "boardrooms to ballrooms" line).

## Homepage — Featured Projects added
- New "Signature Work / Selected Projects" section: 7 curated signature
  projects (real photography only, never concept renders) in an editorial
  mosaic, each linking straight to its full story on the portfolio page,
  finished with a "View All Projects" call to action.
- Page flow is now Hero → Selected Projects → Design Process → Footer CTA.

## Portfolio — now built from the folders
- `public/media/portfolio/` is the source of truth (structure untouched).
  A build-time scanner (`src/lib/portfolio-scan.ts`) merges the folders
  with the curated stories:
  - New photos dropped into an existing project folder are appended to its
    gallery automatically (the `01-` filename prefix controls order and
    the cover image).
  - A brand-new folder with images becomes its own project automatically,
    titled from the folder name in elegant title case.
  - Curated titles, subtitles, summaries, and hand-written alt text always
    win; placeholder folders (README only) stay hidden until photos arrive.
  - If the scan ever fails, the page falls back to the curated set — the
    portfolio can never break a deploy.
- Workflow documented in README ("How the portfolio folders work").

## SEO & metadata
- Favicon + Apple touch icon generated from the winged FG mark on brand
  navy (`src/app/icon.png`, `src/app/apple-icon.png`) — previously missing.
- Verified: per-page titles/descriptions, Open Graph + Twitter cards with
  the hero poster as the sharing image, JSON-LD ProfessionalService schema,
  sitemap covering all 12 routes, robots.txt, canonical URL.
- Added a proper (screen-reader) H1 to the Design Studio page — every page
  now has exactly one H1.

## Cleanup — dead weight removed
- Deleted 5 unused section components (About/Experience/Philosophy/
  Portfolio/Services sections) and the orphaned `src/lib/portfolio.ts`.
- Removed unreferenced media: `studio-hero.m4.MP4` (2.6 MB, linked
  nowhere) and the duplicate placeholder tree `Fly-Girl-Portfoliofinal/`
  (README files only — the real structure lives in `media/portfolio/`).
- Removed the stray "Read me.md" junk file.
- Verified zero broken imports, zero missing asset paths, zero dead or
  placeholder links across the entire codebase.

## QA verified
- Every internal link resolves to a real route; every `src`/`poster`
  path resolves to a real file; email/phone/directions links correct.
- Every source file passes a TypeScript syntax check.
- Both inquiry forms function (pre-filled mail composition — no backend
  dependency to fail on launch day).
- Media already well optimized (largest photo 0.7 MB; hero film 1.6 MB;
  Next.js serves AVIF/WebP with lazy loading and fixed aspect ratios, so
  no layout shift). Long-cache headers on `/media` and `/brand` confirmed.
- Accessibility held: visible keyboard focus, reduced-motion respected,
  alt text throughout, 44px tap targets, skip-to-content link, heading
  hierarchy corrected.

## Deploy
No workflow changes: push to GitHub, Netlify builds with `next build`
as before. Republish after dropping new photos into portfolio folders.


---

# Refinement Pass — Final Polish

## Homepage — simplified to five moments
Hero film (single CTA: "Schedule a Consultation", headline unchanged) →
brief introduction ("Luxury Event Design Studio") → one editorial image of
Juline working in the studio → full contact block (Formation address,
phone, email, By Appointment Only) → the single call to action.
Removed: the design-process section and the featured-projects mosaic
(portfolio work lives on /portfolio, process on /design-studio).

## Footer — replaced site-wide with the minimal version
Connect (email + phone) → Design Studio address → By Appointment Only →
"Schedule a Consultation" → copyright + "Designed with intention in
Frisco, Texas." No repeated navigation, services, or headline sections.

## Design Studio page — condensed
Now: the film, then ONE elegant section — a single studio image beside a
refined two-paragraph overview of the consultation (replacing the
nine-item bullet list), the address with map link, and one CTA:
"Schedule a Consultation." The duplicate image, the separate location
band, and the extra closing section were removed.

## Navigation — one clear "Services"
The menu previously contained BOTH "Experiences" and "Services" — two
overlapping destinations. Per your suggestion, the menu now shows a single
"Services" item (pointing to the Signature Services page). The
Experiences page remains live at /experiences and in the sitemap; if you'd
rather the Services menu item open the editorial Experiences page instead,
it's a one-line swap in src/lib/site.ts.

## Untouched, as instructed
Investment page unchanged. All other pages keep their structure. Brand,
palette, typography, videos, and imagery preserved exactly.

## QA
Every link and asset path re-audited (zero broken references), all files
pass syntax checks, unused FeaturedProjects component removed, heading
hierarchy and lazy loading intact.


---

# Launch Package — Final QC

- Confirmed in code: five-part homepage; single studio image on the Design
  Studio page; Investment page byte-identical to the original; minimal
  footer (contact, address, By Appointment Only, one CTA, copyright) on
  every page; single "Services" navigation item.
- Removed two remaining orphaned components (ServiceCard, SectionHeading).
- Mobile audit: no true fixed widths above 52px anywhere (all wide values
  are max-widths that collapse correctly on iPhone); horizontal-scroll
  guard confirmed in global styles.
- Every image lazy-loads (or is the prioritized hero poster); videos use
  posters; long-cache headers on /media and /brand.
- All links, mailto/tel links, forms, routes, and asset paths re-verified:
  zero broken references. All files pass syntax checks.
- Ready to connect to the Fly Girl domain: push to GitHub → Netlify builds
  with `next build` as before.
