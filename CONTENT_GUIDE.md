# Content Guide

All public content lives in `src/content/`. Components never contain copy; they render
records. This guide shows how to add each record type.

## The golden rule — facts must not be invented

This is a legacy platform whose value is credibility. A single invented date, award, or
quote poisons every true statement around it. Journalists, partners, and search engines
must be able to trust each record. That is why:

- every record carries a `verificationStatus`;
- only `"verified"` and `"editorial"` records render publicly;
- `"pending"` records stay invisible until a documented source exists;
- `"private"` records never reach the built site bundle's public views.

See [VERIFICATION_POLICY.md](VERIFICATION_POLICY.md) for the formal definitions.

## Adding a timeline record (`src/content/timeline.ts`)

```ts
{
  id: "tl-my-entry",                    // unique, stable
  slug: "my-entry",
  title:   { en: "…", bn: "…" },
  summary: { en: "…", bn: "…" },
  year: 1998,                           // ONLY when a documented source exists
  phase: { en: "Foundations", bn: "ভিত্তি নির্মাণ" }, // used when no verified date
  sources: [{ label: "Trade licence, Dhaka", documentId: "DOC-001" }],
  verificationStatus: "verified",
  isPublic: true,
}
```

If there is no verified `year`/`date`, leave them out — the UI shows the `phase` label
and hides the date area. Never type an approximate year.

## Adding a venture (`src/content/ventures.ts`)

Append a `Venture` record. `leadership` is a list of `{ personName, roleTitle,
verificationStatus }`. Use the exact Bengali spelling **হৃদয় সমাদ্দার** for Hridoy
Samadder — never an alternative transliteration. Set `featured: true` to surface the
venture on the homepage. Future ventures with no public detail should stay
`isPublic: false` — empty cards are never rendered.

## Adding a verified quote (`src/content/quotes.ts`)

```ts
{
  id: "q-2024-interview",
  voice: "verified-direct-quote",     // ONLY for documented spoken/written words
  text: { en: "…", bn: "…" },
  attribution: { en: "Krishna Kanta, <publication>", bn: "…" },
  sources: [{ label: "<publication>, <date>", url: "https://…" }],
  verificationStatus: "verified",
  isPublic: true,
}
```

Until then, keep `voice: "editorial-narration"`. The `QuoteBlock` component styles the
two voices differently and will not put quotation marks around editorial narration.

## Adding press records (`src/content/press.ts`)

Fill in a `PressRecord` and set `verificationStatus: "verified"` once the link/publication
is confirmed. Records of any other status are filtered out of every public view. The
press page's filter buttons pick up `recordType` automatically.

## Adding gallery/archive records (`src/content/gallery.ts`)

Place the image file in `public/images/`, then add a `GalleryRecord` with caption, year
(verified only), location, photographer, rights status, and source. See
[IMAGE_GUIDE.md](IMAGE_GUIDE.md).

## Publishing Bengali content

Every `LocalisedText` field needs both `en` and `bn`. Write natural, elegant Bengali —
no machine-translated fragments. Do not translate proper names (people or companies)
unless an official Bengali form has been supplied. Bengali digits are handled
automatically by `localiseDigits()`.

## How verification status works

| Status | Public? | Meaning |
| --- | --- | --- |
| `verified` | yes | confirmed against a documented source (cite it in `sources`) |
| `editorial` | yes | careful narrative framing, clearly labelled, no factual claims |
| `pending` | no | claimed but unconfirmed — invisible until verified |
| `private` | no | internal record, never rendered |
