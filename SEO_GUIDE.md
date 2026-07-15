# SEO Guide

## What is already implemented

- **Unique metadata per page** — `generateMetadata` in every route, localised title +
  description from `src/content/site.ts` (`pageMeta`).
- **Canonical URLs + hreflang alternates** — every page declares its `/en/` and `/bn/`
  variants.
- **Open Graph + Twitter cards** — localised, with `og:locale` set to `en_US` / `bn_BD`.
- **Sitemap** — `src/app/sitemap.ts` generates `/sitemap.xml` with per-locale alternates.
- **robots.txt** — `public/robots.txt` (note: on a GitHub Pages *project* site the file
  lives under the sub-path; move to the domain root when a custom domain is attached).
- **JSON-LD structured data** — one central generator (`src/lib/structured-data.ts`)
  emitting `Person`, `Organization` (per venture), `WebSite`, `WebPage`/`ProfilePage`/
  `Article`, and `BreadcrumbList` as a single `@graph` per page.
- **Semantic HTML** — landmark regions, one `h1` per page, ordered heading hierarchy,
  descriptive alt text from content records, internal links between pages.

## Structured-data rules

The `Person` schema includes **only verified data**: name, country, roles, description.
It deliberately omits `birthDate`, `alumniOf`, `award`, and `sameAs`. When official
profiles (e.g. a verified LinkedIn or Wikipedia page) exist, add them in
`src/lib/structured-data.ts` → `personSchema()` as a `sameAs` array — never guess URLs.

## When real content arrives

1. **Portrait published** → add `image` (`ImageObject`) to `personSchema`, and a real
   1200×630 raster (`/images/og-cover.jpg`) referenced via `openGraph.images` in
   `src/app/[locale]/layout.tsx` (SVG placeholders are ignored by social crawlers).
2. **Verified press records** → they render automatically; consider adding `Article`
   schema entries per record if coverage grows.
3. **Custom domain** → update `NEXT_PUBLIC_SITE_URL`, clear `NEXT_PUBLIC_BASE_PATH`,
   move `robots.txt` handling to the domain root, and resubmit the sitemap in Google
   Search Console + Bing Webmaster Tools.

## Knowledge-graph checklist (post-launch)

- Register the site in Google Search Console; submit `/sitemap.xml`.
- Keep the `Person` `@id` (`…/#person`) stable — it is the entity anchor.
- Publish verified records steadily; knowledge panels favour consistent, sourced facts.
- Never publish conflicting titles/spellings across pages; the press page is the
  canonical formatting reference.
