# Verification Policy

This website is a public record. Its authority depends on one discipline: **nothing
invented, everything traceable.** This policy defines the content classes and the
requirements for publishing each.

## Definitions

### Verified fact
A statement confirmed against at least one documented source: an official document,
dated publication, contract, licence, photograph with provenance, or first-person
written confirmation from the subject. Verified facts carry
`verificationStatus: "verified"` and cite their source(s) in the record's `sources`
array. Only verified facts may state dates, numbers, titles, or events as true.

### Editorial interpretation
Narrative framing written by the site's editors: pattern observations, careful bridges,
thematic synthesis. It makes **no checkable factual claims** (no dates, figures, named
events). Marked `verificationStatus: "editorial"` and `voice: "editorial-narration"`.
The UI labels it "Editorial narration" and never styles it as a quotation.

### Direct quote
Words actually spoken or written by a person. Published **only** with
`voice: "verified-direct-quote"`, `verificationStatus: "verified"`, an attribution,
and a documented source. There are currently **zero** verified direct quotes on the
site; every quote-like line is labelled editorial narration.

### Pending claim
Information supplied verbally or informally but not yet documented. Recorded with
`verificationStatus: "pending"` so it is preserved for the editorial pipeline, and
**filtered out of every public view** by the content layer.

### Private record
Material that must never be published (personal documents, internal business data,
unclear rights). `verificationStatus: "private"`. Public selectors exclude it; do not
reference private records from public copy.

### Public record
Any record whose status is `verified` or `editorial` **and** whose `isPublic` flag is
true. This is the only material the site renders.

## Source requirements

- Every verified record lists at least one `SourceReference` (`label` required;
  `url`, `documentId`, `accessedAt`, `notes` as available).
- Sources must be independently checkable by a future editor.
- When two sources conflict, the record stays `pending` until resolved.
- Convert relative dates ("last year") to absolute dates at intake.

## Prohibited without verification

Dates and founding years · revenue and net worth · employee counts · market share ·
awards · press coverage · offices and locations · academic qualifications · government
recognition · partnerships · client lists · testimonials · social statistics · legal
company information · any quotation attributed to Krishna Kanta.

## Escalation

If a published record is discovered to be wrong, demote it to `pending` (it disappears
from the site on the next deploy), correct it, then re-verify. Corrections beat
deletions — keep the record's history in git.
