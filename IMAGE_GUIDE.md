# Image Guide

Every image slot on the site is currently an **abstract editorial placeholder** —
a deliberate charcoal-and-gold composition, not a broken image and not a fake
photograph. No real face is depicted anywhere until verified photographs arrive.

## Placeholder slots awaiting real photographs

| File (public/images/) | Awaiting | Used at |
| --- | --- | --- |
| `placeholder-hero-portrait.svg` | Hero portrait (editorial, moody, looking slightly off-camera) | Homepage hero |
| `placeholder-office-portrait.svg` | Formal office portrait | Story page opener |
| `placeholder-archival-01.svg` | Archival formal portrait | Archive |
| `placeholder-archival-02.svg` | Early business years photograph | Archive |
| `placeholder-leadership-01.svg` | Leadership/meeting moment | Archive |
| `placeholder-detail-01.svg` | Documents / desk / hands detail | Archive |
| `placeholder-public-01.svg` | Public appearance | Archive |
| `placeholder-historical-01.svg` | Historical photograph | Archive |
| `placeholder-venture-czone.svg` | Computer Zone premises/operations | Venture cards |
| `placeholder-venture-oushodhos.svg` | OushodhOS product/team context | Venture cards |
| `placeholder-venture-oyshe.svg` | OYSHE AI context | Venture cards |

## Replacing a placeholder (two-line change)

1. Drop the real file into `public/images/` (e.g. `hero-portrait-2026.jpg`).
2. In the content record (`founder.ts`, `ventures.ts`, or `gallery.ts`) update:
   `src`, `width`, `height`, set `isPlaceholder: false`, add `credit`, and adjust
   `focalX`/`focalY` (0–1) so crops keep the subject composed at every viewport.

No component changes are ever needed.

## Recommended sizes

- Hero portrait: **1600×2000 px** minimum, portrait orientation
- Formal portraits: 1200×1500 px
- Landscape archival/venture images: 1600×1000 px
- Keep originals! Store master scans/RAWs outside the repo for the future archive.

## Archival scanning

Scan prints at **600 dpi minimum**, unretouched TIFF masters plus a cleaned JPEG for
web. Record: year (if documented), location, event, photographer, and rights holder
at scan time — this metadata feeds the `GalleryRecord` fields directly.

## File naming

`<subject>-<context>-<year|na>.<ext>` — lowercase, hyphenated:
`krishna-kanta-office-portrait-na.jpg`, `computer-zone-storefront-1990s.jpg`.

## Credits & rights

Every real image must fill `credit` and the gallery `rightsStatus` field
("family archive", "© photographer, used with permission", …). Do not publish images
whose rights are unclear — keep them `verificationStatus: "private"`.

## Optimisation

The site ships as a static export (`images.unoptimized: true`), so optimise before
committing: JPEG quality ~80, target ≤ 350 KB for landscape images, ≤ 250 KB for
portraits. Monochrome treatment is applied by CSS (`treatment: "mono"`) — do not
pre-convert files to black-and-white; keep colour masters.
