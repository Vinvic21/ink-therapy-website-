# Ink Therapy Tattoo Studios – official website (React + Vite)

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173 (development only)
```
## Build
```bash
SITE_URL=https://your-real-domain npm run build   # writes robots.txt, sitemap.xml, canonical, then builds to dist/
```
If `SITE_URL` is not set, only robots.txt is generated (no sitemap/canonical – by design, no placeholder URLs).
Also set `VITE_SITE_URL` to the same value so the JSON-LD includes `url`, `image`, `logo`:
`SITE_URL=https://… VITE_SITE_URL=https://… npm run build`

## Deploy (Vercel or Cloudflare Pages)
Framework: Vite · Build command: `npm run build` · Output directory: `dist` · Env vars: `SITE_URL`, `VITE_SITE_URL`.
Single-page site (anchor links only), so no rewrite rules are needed.

## After deploy
1. Open the HTTPS URL in a private window; check phone/map links, gallery and mobile menu.
2. Add the URL to the Google Business Profile ("Edit profile → Contact → Website") – the owner must do this; approval is Google's decision.
3. Optional: verify the site in Google Search Console and submit `/sitemap.xml`.

## Edit content
All business details, services and gallery alt text: `src/data/businessInfo.js`. Photos: `public/images/`.

## Still needs owner verification
- Opening hours (read from the door photo; the Maps listing currently shows none).
- Email address (none supplied, so none shown).
- Whether the shop may be described as women-owned / LGBTQ+ friendly, and which artists to name (not included).
- Permission/consent to publish every client photo.
- Piercing services/jewellery details and any pricing/booking policy (none invented).
- Final production URL.

## QA status
Not run in the authoring environment (no network, so `npm install`/`build` could not execute). Run `npm run build` and test the checklist above before launch.
