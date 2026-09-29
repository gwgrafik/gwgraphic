# GW Graphic Design — production website (V11)

**V11 on top of V10:**
- **Intro:** the same animation (mark only, spin-in, rings, zoom). It **stays on screen until the visitor clicks the logo** (or presses Enter), which zooms into the site; Escape fades it out. There is no Skip button, and the pulse wave around the logo travels further (3.4×). It plays on **every visit**, counted per browser session. From the 4th visit a small "Don't show again" option appears. Only that choice disables the intro, and it can be switched back on under Cookie settings. With reduced motion there is a calm variant: no spin or zoom, just a fade.
- **More work gallery:** 96 more real jobs (logos, vehicle graphics, workwear, print), with filters per service, "show more" and a lightbox with keyboard support. Thumbnails beyond the first 12 are only created when shown.
- **PMK:** the site banner is added to the PMK case study.
- **Language switch** keeps the current section (for example `#reviews`).
- **Future pages:** services and projects carry stable paths in `data-page` (`SERVICE_PATHS` in `src/content.mjs`, `projecten/<id>/`), with the same slugs in every language.
- **Business data:** `legalName`, `kvk`, `btw` and `address` in `SITE` (marked `LEGAL_NAME`, `KVK_NUMBER`, `VAT_ID`, `BUSINESS_ADDRESS`). When filled in they appear automatically in the footer, the Colofon/legal notice and the schema. Empty fields are hidden, never shown as placeholders.
- **Measured locally (mobile Lighthouse):** Performance 93–95, Accessibility 100, Best Practices 100, SEO 100, CLS 0.
- **Website screenshots:** real screenshots of kristofix.com and maniekdiensten.nl could not be made from this environment (TLS proxy). The existing real website presentations are used.

### V10

**V10 changes on top of V09:** the copy is rewritten in NL/EN/PL, written in the first person because this is a one-person studio. Services are reordered: Branding, Lettering/wraps (vehicles, shop windows, glass), Workwear, Print, Websites, Promotional items. Each service has its own CTA that preselects it in the form. The four projects with the most material (Kristofix, Maniek Diensten, PMK Klusjesman, Podtech) get a longer case-study text plus a route of the services made for them. Reviews on the NL and PL pages show a clearly marked translation with the original English underneath. The form gains a preferred-contact field (email, phone, WhatsApp) and a "Send via WhatsApp" button. The intro runs a little longer, plays only on the first visit ever and has a skip button. No city is shown in the visible copy (there is no public office). The area served is shown instead: the Netherlands, Belgium and Germany.

Final production build of **www.gwgraphic.com**.

- **Visual system:** V05 (black / warm white / real wood, editorial type, portfolio-first), with lighter sections breaking up the dark.
- **Hero motion:** V07's intro, reproduced faithfully: white screen, concentric rings revealed from the centre, the GW mark spinning in, a pulse, then a zoom into the site. The GW mark is now the **original vector logo** (`src/source-assets/gw-logo-vector.pdf`), not a raster.
- **Content and UX:** V08 (six services, seven complete client projects, process, reviews, about, contact). The V08 file upload is removed. The form is back to the simple V05 enquiry form.

The site is static HTML/CSS/JS with one small PHP form handler. There is no framework and no third-party requests.

## Structure

```
public/                 ← deploy this folder as the web root
  index.html            NL home      /
  en/index.html         EN home      /en/
  pl/index.html         PL home      /pl/
  *.html, en/*, pl/*    legal pages (privacy, cookies, terms, legal notice, accessibility) ×3 languages
  404.html  robots.txt  sitemap.xml  .htaccess  send.php  favicon.*  apple-touch-icon.png
  assets/css|js|fonts|img
src/
  content.mjs           all copy (NL/EN/PL), projects, reviews, service ↔ image mapping
  legal.mjs             legal page texts (NL/EN/PL)
  images.mjs            portfolio image manifest: descriptive filename + alt text per language
  build.mjs             generates every page, sitemap, robots, .htaccess (CSP hashes)
  build-images.mjs      AVIF/WebP (480/800/1000 px), wood texture, logo SVGs, favicons, OG image
  check.mjs             pre-launch QA (links, assets, ids, h1, titles, hreflang, JSON-LD, forbidden text)
  css/style.css  js/app.js  server/send.php  server/htaccess.txt
  source-assets/        immutable sources: vector logo (PDF + SVG extract), wood texture, portfolio originals
```

## Build

```bash
npm install
npm run images   # only when source images change (slow: AVIF encoding)
npm run build
npm run check    # must print "OK — no errors"
npm run build:test   # same, but every page gets noindex (for the test copy at /gw/v10/)
```

Local preview with the form handler: `cd public && php -S 127.0.0.1:8080`.

## Deployment

- Apache with PHP 8 (the same hosting as the previous versions, which used `send.php`). `.htaccess` sets HTTPS plus the `www` redirect, security headers (HSTS, CSP with hashes for the inline scripts, nosniff, frame-ancestors), long cache lifetimes for assets and gzip.
- The CSS/JS URLs carry a content hash (`?v=…`), so the long cache lifetime is safe.
- `send.php` sends mail with PHP `mail()` from `noreply@gwgraphic.com` to `design@gwgraphic.com`. No credentials are stored anywhere. Make sure SPF/DKIM for gwgraphic.com allow the web server to send as that address, or change `MAIL_FROM`.
- `send.php` does server-side validation and sanitisation, blocks header injection, and uses a honeypot, a 3-second time trap and a rate limit of 5 validated requests per hour per hashed IP (stored in `public/.data/`, which the web server blocks). It returns JSON for the site and an HTML confirmation page when JavaScript is off.

## What is stored in the browser (for the cookie policy)

| Name | Type | Purpose | Lifetime |
|---|---|---|---|
| `gwIntroVisits` | localStorage | Visit counter (one per browser session); from visit 4 the "don't show again" option appears | until cleared |
| `gwIntroDisabled` | localStorage | Only set when the visitor chooses "don't show again" | until cleared or re-enabled |
| `gwIntroSession` | sessionStorage | Prevents the intro replaying within the same visit | until the tab closes |

There are **no cookies, no analytics, no tracking and no third-party resources**. Fonts are self-hosted and nothing loads from Google or elsewhere. So there is **no consent banner**, because nothing needs consent. The footer link **Cookie-instellingen** opens a dialog that says exactly this and lets visitors clear the stored value. If analytics are ever added, they must stay blocked until consent is given, with Accept, Reject and Preferences shown as equally easy choices, and the cookie policy must be updated first.

## Hero intro (V07)

- V11: it plays once per browser session (see the cookie table) and waits for the visitor: clicking the logo or Enter enters with the 1.8 s zoom, Escape closes it in about 0.4 s. "Don't show again" appears from the 4th visit.
- `prefers-reduced-motion` means no intro and a static final hero.
- With JavaScript off there is no intro and the page is fully usable.
- The rings use a CSS repeating radial gradient with a radial mask. The mark is inline SVG built from the original vector. The zoom uses the Web Animations API (`transform`/`opacity`). There is no video, GIF or animation library.
- The hero text is painted at first render behind the intro, so LCP is not delayed.

## Performance (measured locally, first uncached load, 1440×900)

- Total first-load transfer: about 0.45 MB gzip / 0.51 MB uncompressed, in 12 requests. This covers HTML, CSS, JS, two WOFF2 subsets, the wood texture, the hero image and the SVG logos.
- LCP 324 ms locally, CLS 0.000.
- Portfolio images are AVIF with WebP fallback, and every image has `srcset`/`sizes` and `width`/`height`. Slider and case-study images are only created when they are shown or opened.

## QA done

- `npm run check`: 19 pages, 0 errors (links, assets, duplicate IDs, a single H1, titles and descriptions, canonical, hreflang, JSON-LD, sitemap, and no prototype or placeholder text).
- html-validate: no structural errors. The only remaining findings are style rules (lowercase doctype, inline `style` for the hero print angles, long titles).
- Browser checks at 360, 390, 430, 768, 1024, 1440 and 1920 px: no horizontal scroll.
- Also checked: keyboard order (skip link first), focus return from the case-study dialog, mobile menu, form validation messages, reduced motion, and the intro in NL/EN/PL.
- `send.php` tested for method, invalid input, honeypot, time trap, header injection, rate limit and the no-JS fallback.

---

## REQUIRED BUSINESS DATA BEFORE LIVE DEPLOYMENT

These facts could not be verified anywhere in the existing project, so they are **not shown** on the site (no placeholders). Add them to `src/legal.mjs` (Colofon / legal notice, and the controller section of the privacy policy) and optionally to the JSON-LD in `src/build.mjs`, then rebuild:

1. **KvK number** (Chamber of Commerce). Dutch businesses must show it on their website. Fill in `SITE.kvk` in `src/content.mjs` (and `SITE.btw`) and rebuild: it then appears in the footer, the Colofon and the schema automatically.
2. **BTW-ID / VAT number**. Must be shown if applicable.
3. **Business address**, or a correspondence address if the home address should not be public. Only the region (Noord-Brabant) is used now, and no city is shown on purpose.
4. **Legal form** (for example eenmanszaak), for the colofon.
5. **Hosting and email provider names and their location** (EU or not). They are described by category in the privacy policy now, so name them if you want to be fully specific.
6. **Confirm the Google reviews link**. `SITE.reviewsUrl` is the Maps search URL used in V08. A direct Google Business Profile review link is better if you have one.
7. The About section intentionally uses the wood block with the burned-in GW mark instead of a portrait.

Verified values used on the site: GW Graphic Design · Grzegorz Woźniak · Eindhoven, Noord-Brabant · +31 6 44 31 94 15 · design@gwgraphic.com · Instagram `gw_graphic_design` · Facebook `GregWgraphicdesign` · LinkedIn `in/gwgraphic` (all taken from V07/V08). The reviews are the six authentic Google reviews supplied in V07/V08, unchanged, and no rating count or aggregate score is claimed.
