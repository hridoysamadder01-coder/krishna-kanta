# Deployment

The site is a fully static export (`next build` → `out/`). It can be served from any
static host.

## GitHub Pages (current setup)

Pushing to `main` runs `.github/workflows/deploy.yml`:

1. `npm ci` → `npm run lint` → `npm run build` with
   `NEXT_PUBLIC_BASE_PATH=/krishna-kanta` and the Pages URL as `NEXT_PUBLIC_SITE_URL`
2. uploads `out/` as a Pages artifact and deploys.

Live URL: **https://hridoysamadder01-coder.github.io/krishna-kanta/**

Manual redeploy: GitHub → Actions → "Build and Deploy to GitHub Pages" → Run workflow.

## Vercel

1. Import the repo in Vercel (framework preset: Next.js).
2. Set env vars: `NEXT_PUBLIC_SITE_URL=https://<your-domain>`, leave
   `NEXT_PUBLIC_BASE_PATH` empty.
3. Deploy — no other changes needed (static output is detected automatically).

## Cloudflare Pages

Build command `npm run build`, output directory `out`, same env vars as Vercel.

## Any VPS / nginx

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain npm run build
rsync -a out/ user@server:/var/www/krishna-kanta/
```

Serve the directory statically; enable gzip/brotli and long-cache for `/_next/static/`.

## Contact form endpoint

The form posts JSON (`fullName, organisation, email, enquiryType, message, consent,
locale, submittedAt`) to `NEXT_PUBLIC_CONTACT_ENDPOINT`. Without an endpoint the form
shows an explicit "channel not yet open" notice and never pretends to send.

Options:
- **Formspree/Basin/etc.** — paste the form URL into the env var.
- **Own API** — accept POST JSON, validate server-side, and **rate-limit** (e.g.
  5 requests/hour/IP) since the static site cannot rate-limit itself. Return 2xx on
  success; any other status shows the failure state.

## Content-Security-Policy (recommended when self-hosting)

```
default-src 'self';
script-src 'self';
style-src 'self' 'unsafe-inline';
img-src 'self' data:;
font-src 'self';
connect-src 'self' <contact-endpoint-origin>;
frame-ancestors 'none';
base-uri 'self';
form-action 'self' <contact-endpoint-origin>;
```

(`style-src 'unsafe-inline'` is required by Next.js inlined critical CSS; tighten with
nonces if you add a reverse proxy that supports them.)

## Custom domain checklist

1. Point DNS at the host (Pages: CNAME → `hridoysamadder01-coder.github.io`).
2. Set `NEXT_PUBLIC_SITE_URL` to the new domain, clear `NEXT_PUBLIC_BASE_PATH`.
3. Update `public/robots.txt` sitemap line.
4. Rebuild/redeploy, then resubmit the sitemap to search engines.
