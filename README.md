# Krishna Kanta — Official Founder Identity & Legacy Website

The official personal website of **Krishna Kanta** — Bangladeshi entrepreneur, business
leader, founder and chairman. A timeless, bilingual (English / বাংলা), static-first
editorial platform: founder biography, ventures, philosophy, archive, and press resources.

**Live site:** https://hridoysamadder01-coder.github.io/krishna-kanta/

## Stack

- **Next.js 15** (App Router, static export) + **TypeScript**
- **Tailwind CSS** design system (ink/charcoal/ivory/gold editorial palette)
- **Framer Motion** (reduced-motion aware) · **Lucide** icons
- Fonts: Cormorant Garamond, Inter, Noto Serif Bengali, Noto Sans Bengali (via `next/font`)
- No database, no CMS — structured content files in `src/content/` (CMS can be attached later without touching the frontend)

## Setup

```bash
npm install
npm run dev      # development server → http://localhost:3000
npm run lint     # ESLint
npm run build    # production static export → ./out
```

Copy `.env.example` to `.env.local` to adjust site URL, base path, contact endpoint,
or press e-mail. All variables are optional for local development.

## Project layout

```
src/
  app/            # App Router: /[locale]/{story,ventures,philosophy,archive,press,contact,privacy,terms}
  components/     # Typed, reusable, content-driven components
  content/        # THE ONLY PLACE CONTENT LIVES: founder, timeline, ventures, philosophy,
                  # gallery, press, quotes, story, site (UI strings + config)
  lib/            # types, i18n helpers, structured-data generator, utils
public/images/    # editorial placeholder SVGs → replace with verified photographs
```

## Editing content

Every fact on the site comes from a record in `src/content/`. See
[CONTENT_GUIDE.md](CONTENT_GUIDE.md) for adding timeline entries, ventures, quotes and
press records, and [VERIFICATION_POLICY.md](VERIFICATION_POLICY.md) for the truth rules
(short version: **never invent facts** — records ship as `pending` until verified).

## Replacing images

All images are placeholder slots today. [IMAGE_GUIDE.md](IMAGE_GUIDE.md) explains sizes,
naming, credits, and the two-line content change that swaps a placeholder for a real
photograph.

## Localisation

Routes are `/en/…` and `/bn/…`. Every content record carries `{ en, bn }` text.
UI strings live in `src/content/site.ts`. The language switcher preserves the current page.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which lints, builds, and
publishes to GitHub Pages. See [DEPLOYMENT.md](DEPLOYMENT.md) for Vercel/Cloudflare/VPS
options and the contact-form endpoint setup.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Absolute public URL (canonical/OG/sitemap/JSON-LD) |
| `NEXT_PUBLIC_BASE_PATH` | Sub-directory base path (GitHub Pages project site) |
| `NEXT_PUBLIC_CONTACT_ENDPOINT` | JSON POST endpoint for the contact form |
| `NEXT_PUBLIC_PRESS_EMAIL` | Official press e-mail (hidden until set) |
