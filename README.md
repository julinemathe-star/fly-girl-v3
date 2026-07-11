# Fly Girl Events & Design — Official Website

Luxury destination-inspired event design studio. Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint

## Pages

| Route | Purpose |
|---|---|
| `/` | Homepage |
| `/about` | Studio story, philosophy, Meet Your First-Class Crew |
| `/experiences` | Custom celebration collections + The Fly Girl Experience (process) |
| `/investment` | Starting investments by collection |
| `/preview-experience` | The Fly Girl Preview Experience (signature $150 consultation) |
| `/little-luxe` | Little Luxe™, presented by Team 2 Much™ (Lauren's page) |
| `/begin-your-journey` | Primary inquiry / booking-request page — where every "Begin Your Journey" and "Reserve Your Experience" CTA site-wide leads |
| `/services` | Service listing |
| `/portfolio` | Editorial portfolio grid |
| `/contact` | Simple business contact page (studio email/location + a general inquiry form) |

`/contact` and `/begin-your-journey` are intentionally distinct: `/contact` is for
visitors who just want business info, while `/begin-your-journey` is the full luxury
booking-request experience that every major call-to-action on the site points to.

## Project structure

```
public/
  brand/          Official logo + winged FG mark (do not recolor/recreate)
  media/          Hero video/poster, portfolio stills, experience/team/page photography
src/
  app/            App Router pages (one folder per route above)
                  + layout, sitemap, robots, 404, global styles
  components/     Nav, Footer, Hero, Button, Reveal, cards, forms, headings
    sections/     Reusable homepage/page sections (About, Services, Portfolio, Journey, Inquiry)
  lib/            Site config + per-page content data (services, experiences, crew,
                  investment tiers, portfolio, journey, little-luxe, preview-experience)
tailwind.config.ts  Brand design tokens (palette, type, motion)
```

## Brand assets

The logo (`public/brand/logo.png`) and hero video (`public/media/hero.mp4`) are final
and used exactly as provided. The upper-left navigation uses the winged **FG** mark
(`public/brand/fg-mark.png`). The airplane in the hero video is part of the brand and
is intentionally preserved.

## Design system

Defined in `tailwind.config.ts`:

- **Palette:** warm white, ivory, champagne, soft gold, brushed-gold ink (accessible
  small-text variant), blush, lavender, deep plum accents
- **Type:** Cormorant Garamond (serif display) + Jost (sans body), loaded via `next/font`
- **Motion:** sequenced hero load (video → logo → headline → subheadline → buttons), slow
  scroll-reveal, refined hover states — all respecting `prefers-reduced-motion`

### Accessible text tokens

Small uppercase labels ("eyebrows") and body copy use `eyebrow-ink` / `text-gold-ink` and
`text-plum-body` where contrast against light backgrounds matters (WCAG AA, ≥4.5:1). The
original `gold-deep` / `plum-soft` tokens remain available for **large** display text
(≥1.5rem) and for text already on dark backgrounds, where they clear the 3:1 large-text
threshold. When adding new small-text elements on a light background, prefer the `-ink`
variants for consistency.

## Placeholder imagery — ready for swap-in

Several images are on-brand placeholders awaiting real photography. No code changes are
needed to replace them — just overwrite the file at the same path/filename:

- `public/media/portfolio-*.jpg` — portfolio grid stills
- `public/media/experiences/exp-*.jpg` — experience collection featured images
- `public/media/team/lauren.jpg`, `donna.jpg`, `juline.jpg` — crew portraits (real photos already in use; replace only if updating)
- `public/media/preview-*.jpg` — Preview Experience page imagery
- `public/media/journey-hero-office.jpg` — Begin Your Journey hero (temporary studio photo; brief notes this will be replaced with a real studio photo)

Keep the same aspect ratio as the existing file when swapping so crops/framing don't shift.

## Forms

Two separate inquiry forms, both currently submitting via `mailto:` (opens a pre-filled
email in the visitor's mail client):

- **`InquiryForm`** (`src/components/InquiryForm.tsx`) — powers `/contact`, a short general inquiry
- **`JourneyInquiryForm`** (`src/components/JourneyInquiryForm.tsx`) — powers `/begin-your-journey`, the full booking-request form (celebration type, date, location, guest count, budget range, referral source, preferred consultation method)

To route submissions to a backend or form service (e.g. Formspree, Resend, a serverless
route) instead of `mailto:`, replace the `handleSubmit` function in either component.

## Deployment

Deploys as-is to any Next.js-aware host. On **Vercel**, import the repo and deploy — no
extra configuration required. On Netlify, use the official Next.js runtime/plugin.
Update `site.url` in `src/lib/site.ts` if the production domain changes (this feeds
`metadataBase`, the sitemap, and Open Graph tags).

---

## Version 2.0 — July 2026 Update

**Brand direction:** Rich navy + warm gold on warm ivory. The Tailwind `plum`
tokens now resolve to the official navy values (so all existing classes still
work); `navy` aliases exist for new code.

**Positioning:** Luxury Event Designer & Creative Director. Corporate &
Executive Event Styling leads all service listings. Welcome Gifts is a
signature service. Baby showers, gender reveals, and balloon services removed.
No "credited toward" language anywhere — the Design Studio Consultation is
$250, a private appointment at Formation, Dallas Cowboys World Headquarters.

**Hero video:** `/public/media/hero.mp4` (web-optimized, ~6.9 MB, muted,
looping, faststart) with poster `/public/media/hero-poster.jpg`. To replace
the film later, encode a new file with the same two names and drop them in —
no code changes needed. Previous video preserved in `/backups` (outside the
deployed site).

**Portfolio:** Categories are Corporate & Executive Experiences, Destination
Experiences, Styled Spaces, Welcome Gifts, Signature Details, Private
Celebrations, and Little Luxe™. Every portfolio image opens in a lightbox
(`src/components/Lightbox.tsx`) with prev/next, keyboard, swipe, and captions.
See `/public/media/portfolio/IMAGE-GUIDE.md` for the folder and filename
system. Empty categories render nothing until photos arrive — no blank
placeholders.

**Build & deploy:** `npm install && npm run build` as before. All routes are
unchanged: /, /about, /experiences, /design-studio, /investment,
/preview-experience, /little-luxe, /begin-your-journey, /services,
/portfolio, /concepts, /contact.

## Version 3.0 — July 2026

Sports Hospitality, Home Staging, and Virtual Staging join the service
architecture (12 services). New pricing: Corporate $3,500 · Private
Celebrations $2,500 · Destination $4,500 · Commercial $2,500 · Model Home
$2,000 · Home Staging $1,500 · Virtual Staging $395/room · Residential
$500/room. Consultation remains $250 with the V3 inclusion list.
New hero brand film in /public/media/hero.mp4. Before & After component at
src/components/BeforeAfter.tsx. Concept imagery uses fictional branding only.
