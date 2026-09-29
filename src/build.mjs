// Static site generator: writes every page, sitemap, robots and copies assets into public/.
// Run: npm run build   (images first with: npm run images)
import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { SITE, LANGS, LEGAL_SLUGS, SERVICE_IMAGES, SERVICE_KEYS, SERVICE_PATHS, HERO_PRINTS, PROJECTS, REVIEWS, T } from './content.mjs';
import { IMAGES } from './images.mjs';
import { LEGAL } from './legal.mjs';

const OUT = new URL('../public/', import.meta.url);
const TEST = process.env.GW_TEST === '1'; // test deploy (e.g. /gw/v10/): noindex, canonical still points to the live domain
const out = p => new URL(p, OUT);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const pad = n => String(n).padStart(2, '0');
const abs = path => SITE.origin + '/' + path;

// Asset versioning for long cache lifetimes
const hash = buf => createHash('sha256').update(buf).digest('hex').slice(0, 10);
const css = (await readFile(new URL('./css/style.css', import.meta.url), 'utf8'))
  .replace(/\/\*[\s\S]*?\*\//g, '').replace(/\s*\n\s*/g, '').replace(/\s*([{};,>])\s*/g, '$1').replace(/;}/g, '}').trim();
const js = (await readFile(new URL('./js/app.js', import.meta.url), 'utf8'))
  .replace(/^\s*\/\*[^*][\s\S]*?\*\/\s*$/gm, '').replace(/^\s*\/\/.*$/gm, '').replace(/\n\s*\n/g, '\n').replace(/^\s+/gm, '');
await mkdir(out('assets/css/'), { recursive: true });
await mkdir(out('assets/js/'), { recursive: true });
const CSS_V = hash(css), JS_V = hash(js);
await writeFile(out('assets/css/style.css'), css);
await writeFile(out('assets/js/app.js'), js);

const CLIENT = [
  ['kristofix', 'Kristofix'], ['maniek-diensten', 'Maniek Diensten'], ['patera', 'Patera Klussenbedrijf'], ['custom-garage', 'Custom Garage Eindhoven'],
  ['podtech', 'Podtech'], ['weldpolako', 'WeldPolako'], ['pmk', 'PMK Klusjesman'], ['dreamszone', 'Dreamszone Evenementen'], ['spoko', 'SPOKO'],
  ['spc', 'SPC Construction'], ['dpk', 'DPK Bouw'], ['palmo', 'Palmo-Trans'], ['gk-cars', 'GK Cars'], ['rijschool', 'Rijschool Simpel Weg'], ['agm', 'AGM Montage']
];
const clientOf = slug => (CLIENT.find(([k]) => slug.startsWith(k)) || [, ''])[1];

/* ------------------------------------------------------------------ icons */
const I = {
  prev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>',
  next: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19"/></svg>',
  wa: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3M12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8m8.4-18.2A11.8 11.8 0 0 0 1.9 17.9L.2 24l6.3-1.6A11.8 11.8 0 0 0 23.8 12c0-3.2-1.2-6.1-3.4-8.4"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="1"/><path d="M3 7l9 6 9-6"/></svg>',
  g: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.3zM12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22zM6.4 14c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2V7.4H3.1a10 10 0 0 0 0 9.2L6.4 14zM12 5.9c1.5 0 2.8.5 3.8 1.5l2.8-2.8A10 10 0 0 0 3.1 7.4L6.4 10c.8-2.3 3-4.1 5.6-4.1z"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M7 12.5l3.2 3.2L17 9"/></svg>'
};

/* ------------------------------------------------------------------ helpers */
const WEB_W = [480, 800, 1000];
function picture(slug, lang, sizes, { eager = false, high = false, alt } = {}) {
  const b = n => `assets/img/work/${slug}-${n}`;
  const set = (ext, root) => WEB_W.map(w => `${root}${b(w)}.${ext} ${w}w`).join(', ');
  return root => `<picture><source type="image/avif" srcset="${set('avif', root)}" sizes="${sizes}"><img src="${root}${b(800)}.webp" srcset="${set('webp', root)}" sizes="${sizes}" width="1000" height="1000" alt="${esc(alt ?? IMAGES[slug].alt[lang])}" decoding="async"${eager ? '' : ' loading="lazy"'}${high ? ' fetchpriority="high"' : ''}></picture>`;
}
// Simpler, explicit path resolver: every page knows its own directory ('' | 'en/' | 'pl/')
function href(fromDir, target) { // target is a site-root-relative path like 'en/privacy.html' or ''
  const up = fromDir ? '../' : '';
  if (fromDir && target.startsWith(fromDir)) return target.slice(fromDir.length) || './';
  if (!fromDir && !target) return './';
  return up + (target || '');
}
const homeHref = (fromDir, lang) => href(fromDir, LANGS[lang].dir);

/* ------------------------------------------------------------------ head */
const HEAD_SCRIPT_HOME = `(function(h){h.className=h.className.replace('no-js','js');try{var l=localStorage,s=sessionStorage;if(l.getItem('gwIntroDisabled')!=='true'&&!s.getItem('gwIntroSession')){var v=(+l.getItem('gwIntroVisits')||0)+1;l.setItem('gwIntroVisits',v);s.setItem('gwIntroSession','1');h.classList.add('gate-on');if(v>=4)h.classList.add('gate-optout');if(matchMedia('(prefers-reduced-motion: reduce)').matches)h.classList.add('gate-rm')}}catch(e){}})(document.documentElement)`;
const HEAD_SCRIPT_PAGE = `document.documentElement.className=document.documentElement.className.replace('no-js','js')`;
const scriptHashes = [HEAD_SCRIPT_HOME, HEAD_SCRIPT_PAGE].map(s => `'sha256-${createHash('sha256').update(s).digest('base64')}'`);

function head({ lang, dir, title, description, path, alternates, home, extraHead = '' }) {
  const root = dir ? '../' : '';
  const t = T[lang];
  const alts = alternates ? Object.entries(alternates).map(([l, p]) => `<link rel="alternate" hreflang="${l}" href="${abs(p)}">`).join('') + `<link rel="alternate" hreflang="x-default" href="${abs(alternates.nl)}">` : '';
  return `<!doctype html>
<html lang="${lang}" class="no-js" data-root="${root}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${abs(path)}">
${alts}
<meta name="robots" content="${TEST ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'}">
<meta name="theme-color" content="#070707">
<meta property="og:type" content="website">
<meta property="og:site_name" content="GW Graphic Design">
<meta property="og:locale" content="${LANGS[lang].locale}">
<meta property="og:title" content="${esc(home ? t.ogTitle : title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${abs(path)}">
<meta property="og:image" content="${abs('assets/img/og-image.jpg')}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="GW Graphic Design logo">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="${root}favicon.ico" sizes="32x32">
<link rel="icon" href="${root}favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="${root}apple-touch-icon.png">
<link rel="preload" href="${root}assets/fonts/archivo-gw-latin.woff2" as="font" type="font/woff2" crossorigin>
${extraHead}<link rel="stylesheet" href="${root}assets/css/style.css?v=${CSS_V}">
<script>${home ? HEAD_SCRIPT_HOME : HEAD_SCRIPT_PAGE}</script>
</head>`;
}

/* ------------------------------------------------------------------ header / footer */
function header(lang, dir, pageAlternates, onHome) {
  const t = T[lang];
  const base = onHome ? '' : href(dir, LANGS[lang].dir);
  const a = id => `${onHome ? '' : base}#${id}`;
  const links = [['diensten', t.nav.diensten], ['projecten', t.nav.projecten], ['reviews', t.nav.reviews], ['over', t.nav.over], ['contact', t.nav.contact]];
  const langs = Object.entries(LANGS).map(([l, v]) => `<a href="${href(dir, pageAlternates[l])}" hreflang="${l}" lang="${l}"${l === lang ? ' aria-current="true"' : ''}><span class="sr-only">${v.name} </span><span aria-hidden="true">${v.label}</span></a>`).join('');
  return `<a class="skip" href="#main">${esc(t.skip)}</a>
<header class="site-header">
  <div class="wrap">
    <a class="brand" href="${homeHref(dir, lang)}" aria-label="${esc(t.homeAria)}"><img src="${dir ? '../' : ''}assets/img/brand/gw-mark-white.svg" width="46" height="46" alt=""></a>
    <nav class="main-nav" aria-label="${esc(t.navAria)}">
      <ul>${links.map(([id, n]) => `<li><a href="${a(id)}">${esc(n)}</a></li>`).join('')}</ul>
      <div class="lang" role="group" aria-label="${esc(t.langAria)}">${langs}</div>
      <a class="btn" href="${a('offerte')}">${esc(t.cta)}</a>
      <button class="burger" type="button" aria-expanded="false" aria-controls="mmenu" aria-label="${esc(t.menu)}"><span></span><span></span></button>
    </nav>
  </div>
</header>
<nav class="mmenu" id="mmenu" aria-label="${esc(t.menu)}">
  ${links.map(([id, n]) => `<a href="${a(id)}">${esc(n)}</a>`).join('')}<a href="${a('offerte')}">${esc(t.cta)}</a>
  <div class="lang" role="group" aria-label="${esc(t.langAria)}">${langs}</div>
  <div class="mcontact"><a href="tel:${SITE.phoneHref}">${SITE.phone}</a><a href="mailto:${SITE.email}">${SITE.email}</a></div>
</nav>`;
}

function footer(lang, dir, onHome) {
  const t = T[lang], root = dir ? '../' : '';
  const base = onHome ? '' : href(dir, LANGS[lang].dir);
  const a = id => `${base}#${id}`;
  const legal = Object.keys(LEGAL_SLUGS).map(k => `<li><a href="${href(dir, LANGS[lang].dir + LEGAL_SLUGS[k][lang])}">${esc(t.legalNames[k])}</a></li>`).join('');
  return `<footer class="site-footer">
  <div class="wrap">
    <div class="ft">
      <div class="ft-brand"><img src="${root}assets/img/brand/gw-logo-white.svg" width="240" height="163" alt="GW Graphic Design — Advertising in any form" loading="lazy"><p>${esc(t.ftLine)}</p></div>
      <div><h2>${esc(t.ftServices)}</h2><ul>${t.ftServiceLinks.map((s, i) => `<li><a href="${a('dienst-' + SERVICE_KEYS[i])}">${esc(s)}</a></li>`).join('')}</ul></div>
      <div><h2>${esc(t.ftMenu)}</h2><ul><li><a href="${a('projecten')}">${esc(t.nav.projecten)}</a></li><li><a href="${a('werkwijze')}">${esc(t.pcEyebrow)}</a></li><li><a href="${a('reviews')}">${esc(t.nav.reviews)}</a></li><li><a href="${a('over')}">${esc(t.nav.over)}</a></li><li><a href="${a('offerte')}">${esc(t.cta)}</a></li></ul></div>
      <div><h2>${esc(t.ftContact)}</h2><address>${esc(SITE.legalName || SITE.name)}<br>${SITE.owner}<br>${SITE.address && SITE.address.street ? `${esc(SITE.address.street)}<br>${esc(SITE.address.postalCode)} ${esc(SITE.address.city)}<br>` : ''}${esc(t.ftArea)}<br><a href="tel:${SITE.phoneHref}">${SITE.phone}</a><br><a href="mailto:${SITE.email}">${SITE.email}</a><br><a href="https://wa.me/${SITE.whatsapp}" rel="noopener" target="_blank">WhatsApp</a></address>
        <h2 style="margin-top:22px">${esc(t.ftSocial)}</h2><ul><li><a href="${SITE.social.instagram}" rel="noopener me" target="_blank">Instagram</a></li><li><a href="${SITE.social.facebook}" rel="noopener me" target="_blank">Facebook</a></li><li><a href="${SITE.social.linkedin}" rel="noopener me" target="_blank">LinkedIn</a></li></ul></div>
      <div><h2>${esc(t.ftLegal)}</h2><ul>${legal}<li><button type="button" data-cookie-settings>${esc(t.cookieSettings)}</button></li></ul></div>
    </div>
    <div class="ft-bottom"><span>© 2026 GW Graphic Design · ${SITE.owner}</span><span>gwgraphic.com${SITE.kvk ? ` · KvK ${esc(SITE.kvk)}` : ''}${SITE.btw ? ` · btw ${esc(SITE.btw)}` : ''}</span></div>
  </div>
</footer>
<dialog class="ck" id="ck" aria-labelledby="ckTitle">
  <div class="ck-in">
    <h2 id="ckTitle">${esc(t.ckTitle)}</h2>
    <p>${esc(t.ckText)}</p>
    <p>${esc(t.ckStore)}</p>
    <div class="ck-actions"><button type="button" class="btn" data-ck-close>${esc(t.close)}</button><button type="button" class="btn btn-ghost" data-ck-intro hidden>${esc(t.ckIntroOn)}</button><button type="button" class="btn btn-ghost" data-ck-clear>${esc(t.ckClear)}</button><output aria-live="polite"></output></div>
    <p><a href="${href(dir, LANGS[lang].dir + LEGAL_SLUGS.cookies[lang])}">${esc(t.ckMore)}</a></p>
  </div>
</dialog>`;
}

const i18nJson = t => `<script type="application/json" id="i18n">${JSON.stringify({ menu: t.menu, close: t.close, csEyebrow: t.csEyebrow, csCta: t.csCta, csNext: t.csNext, csRoute: t.csRoute, fErrSummary: t.fErrSummary, waForm: t.waForm, fLabels: [t.fService, t.fName, t.fCompany, t.fEmail, t.fPhone, t.fPref, t.fMessage], fErrRate: t.fErrRate, fErrSend: t.fErrSend, fSending: t.fSending, ckCleared: t.ckCleared, ckIntroDone: t.ckIntroDone }).replace(/</g, '\\u003c')}</script>`;
const scriptTag = root => `<script src="${root}assets/js/app.js?v=${JS_V}" defer></script>`;

/* ------------------------------------------------------------------ JSON-LD */
function jsonLd(lang) {
  const t = T[lang];
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': ['Organization', 'ProfessionalService'], '@id': SITE.origin + '/#business', name: SITE.name, url: SITE.origin + '/',
        logo: abs('assets/img/brand/gw-logo-black.svg'), image: abs('assets/img/og-image.jpg'),
        slogan: t.h1.join(' '), description: t.description,
        telephone: SITE.phoneHref, email: SITE.email,
        founder: { '@type': 'Person', name: SITE.owner, jobTitle: t.abRole },
        address: { '@type': 'PostalAddress', ...(SITE.address && SITE.address.street ? { streetAddress: SITE.address.street, postalCode: SITE.address.postalCode, addressLocality: SITE.address.city } : {}), addressRegion: SITE.region, addressCountry: 'NL' },
        ...(SITE.legalName ? { legalName: SITE.legalName } : {}),
        areaServed: [{ '@type': 'Country', name: 'Netherlands' }, { '@type': 'Country', name: 'Belgium' }, { '@type': 'Country', name: 'Germany' }],
        ...(SITE.kvk ? { identifier: { '@type': 'PropertyValue', propertyID: 'KvK', value: SITE.kvk } } : {}),
        ...(SITE.btw ? { vatID: SITE.btw } : {}),
        knowsAbout: t.ftServiceLinks,
        sameAs: Object.values(SITE.social) },
      { '@type': 'WebSite', '@id': SITE.origin + '/#website', url: SITE.origin + '/', name: SITE.name, inLanguage: ['nl', 'en', 'pl'], publisher: { '@id': SITE.origin + '/#business' } },
      { '@type': 'WebPage', '@id': abs(LANGS[lang].dir) + '#webpage', url: abs(LANGS[lang].dir), name: t.title, description: t.description, inLanguage: lang, isPartOf: { '@id': SITE.origin + '/#website' }, about: { '@id': SITE.origin + '/#business' } },
      { '@type': 'FAQPage', '@id': abs(LANGS[lang].dir) + '#faq', url: abs(LANGS[lang].dir), inLanguage: lang, isPartOf: { '@id': abs(LANGS[lang].dir) + '#webpage' },
        mainEntity: t.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
    ]
  }).replace(/</g, '\\u003c');
}

/* ------------------------------------------------------------------ HOME */
function home(lang) {
  const t = T[lang], dir = LANGS[lang].dir, root = dir ? '../' : '';
  const alternates = Object.fromEntries(Object.entries(LANGS).map(([l, v]) => [l, v.dir]));
  const svcName = i => t.services[i].name;
  const svcOf = p => p.secs.map(([k]) => SERVICE_KEYS.indexOf(k));
  const waHref = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(t.waText)}`;
  const firstPrint = HERO_PRINTS[0][0];
  const heroSizes = '(max-width: 900px) 80vw, 46vw';

  const preload = `<link rel="preload" as="image" type="image/avif" imagesrcset="${WEB_W.map(w => `${root}assets/img/work/${firstPrint}-${w}.avif ${w}w`).join(', ')}" imagesizes="${heroSizes}" fetchpriority="high">
<link rel="preload" as="image" type="image/avif" href="${root}assets/img/wood-1200.avif" media="(min-width: 761px)" fetchpriority="high">
<link rel="preload" as="image" type="image/avif" href="${root}assets/img/wood-800.avif" media="(max-width: 760px)" fetchpriority="high">
`;

  const gate = `<div id="gate" role="dialog" aria-modal="true" aria-label="GW Graphic Design">
  <div class="zoom" id="gateZoom">
    <div class="rings"></div>
    <button class="gw" id="gateBtn" type="button" aria-label="${esc(t.gateAria)}">${gateMark}</button>
  </div>
  <div class="shade" id="gateShade"></div>
  <div class="gate-lang">${Object.entries(LANGS).map(([l, v]) => `<a href="${href(dir, v.dir)}" hreflang="${l}" lang="${l}"${l === lang ? ' aria-current="true"' : ''}>${v.label}</a>`).join('')}</div>
  <p class="gate-hint" aria-hidden="true"><i></i>${esc(t.gateHint)}</p>
  <div class="gate-opts"><button id="gateNever" type="button">${esc(t.gateNever)}</button></div>
</div>`;

  const prints = HERO_PRINTS.map(([slug, client, svc], i) => {
    const r = [2, -2.5, 1.5, -1.5, 2.5, -1][i];
    const common = `class="print${i === 0 ? ' on' : ''}" style="--r:${r}deg" data-client="${esc(client)}" data-href="#dienst-${svc}"`;
    if (i === 0) return `<figure ${common}>${picture(slug, lang, heroSizes, { eager: true, high: true })(root)}</figure>`;
    return `<figure ${common} data-slug="${slug}" data-alt="${esc(IMAGES[slug].alt[lang])}" data-sizes="${heroSizes}"></figure>`;
  }).join('');

  const heroSec = `<section class="hero" id="start" aria-labelledby="h1">
  <div class="wrap hero-grid">
    <div class="hero-copy">
      <p class="flow">${t.flow.map(esc).join(' <i aria-hidden="true">→</i> ')}</p>
      <h1 class="h1" id="h1"><span class="l1">${esc(t.h1[0])}</span> <span class="l2">${esc(t.h1[1])}</span> <span class="l3">${esc(t.h1[2])}</span></h1>
      <p class="rotl">${esc(t.rotPre)} <span class="rot" id="rot">${t.rot.map((w, i) => `<b${i ? ' aria-hidden="true"' : ' class="on"'}>${esc(w)}</b>`).join('')}</span></p>
      <p class="lead">${esc(t.heroLead)}</p>
      <div class="hero-cta"><a class="btn" href="#offerte">${esc(t.cta)}</a><a class="btn btn-ghost" href="#projecten">${esc(t.heroBtn2)}</a></div>
    </div>
    <div class="hero-media">
      <a class="stage" id="stage" href="#dienst-branding"><span class="sr-only">${esc(t.stageAria)}: </span>
        ${prints}
        <img class="burn" src="${root}assets/img/brand/gw-mark-black.svg" width="60" height="60" alt="">
        <span class="chip">${esc(HERO_PRINTS[0][1])}</span>
      </a>
    </div>
  </div>
  <div class="wrap"><p class="hero-meta"><span>${esc(t.heroMeta[0])}</span><span>${esc(t.heroMeta[1])}</span><a href="#reviews"><span class="stars" aria-hidden="true">★★★★★</span> ${esc(t.heroMeta[2])}</a></p></div>
</section>`;

  const services = `<section class="sec light wm wm-left" id="diensten" aria-labelledby="diensten-h">
  <div class="wrap sec-head">
    <div class="rv-el"><span class="eyebrow">01 <b>/</b> ${esc(t.svEyebrow)}</span><h2 class="h2" id="diensten-h">${esc(t.svTitle[0])} <em>${esc(t.svTitle[1])}</em></h2></div>
    <p class="lead rv-el">${esc(t.svIntro)}</p>
  </div>
  ${SERVICE_KEYS.map((key, i) => {
    const s = t.services[i], imgs = SERVICE_IMAGES[key], sizes = '(max-width: 900px) 84vw, 50vw';
    const slides = imgs.map((slug, k) => {
      const cap = clientOf(slug);
      const capHtml = cap ? `<figcaption>${esc(cap)}</figcaption>` : '';
      if (k === 0) return `<figure class="slide on">${picture(slug, lang, sizes)(root)}${capHtml}</figure>`;
      return `<figure class="slide" data-slug="${slug}" data-alt="${esc(IMAGES[slug].alt[lang])}" data-sizes="${sizes}">${capHtml}</figure>`;
    }).join('');
    return `<article class="svc${i % 2 ? ' alt' : ''}" id="dienst-${key}" data-page="${SERVICE_PATHS[key]}" aria-labelledby="dienst-${key}-h">
    <div class="wrap svc-grid">
      <div class="svc-copy rv-el">
        <span class="svc-no">${pad(i + 1)}</span>
        <h3 id="dienst-${key}-h">${esc(s.name)} <span class="svc-sub">${esc(s.sub)}</span></h3>
        <p>${esc(s.text)}</p>
        <ul class="tags">${s.tags.map(x => `<li>${esc(x)}</li>`).join('')}</ul>
        <a class="tlink" href="#offerte" data-pick="${i}">${esc(s.cta)} →</a>
      </div>
      <div class="svc-media rv-el">
        <div class="slider" data-slider role="group" aria-roledescription="carousel" aria-label="${esc(s.name)}" tabindex="0">
          ${slides}
          <div class="s-ui"><button type="button" data-prev aria-label="${esc(t.prev)}">${I.prev}</button><span data-count aria-live="polite">01 / ${pad(imgs.length)}</span><button type="button" data-next aria-label="${esc(t.next)}">${I.next}</button></div>
        </div>
      </div>
    </div>
  </article>`;
  }).join('\n  ')}
</section>`;

  const projects = `<section class="sec dark wm" id="projecten" aria-labelledby="projecten-h">
  <div class="wrap sec-head">
    <div class="rv-el"><span class="eyebrow">02 <b>/</b> ${esc(t.prEyebrow)}</span><h2 class="h2" id="projecten-h">${esc(t.prTitle[0])} <em>${esc(t.prTitle[1])}</em></h2></div>
    <p class="lead rv-el">${esc(t.prIntro)}</p>
  </div>
  <div class="wrap proj-grid">
    ${PROJECTS.map((p, i) => {
      const sizes = i === 0 ? '(max-width: 760px) 92vw, 56vw' : i < 3 ? '(max-width: 760px) 92vw, 40vw' : '(max-width: 760px) 92vw, (max-width: 1100px) 46vw, 24vw';
      return `<article class="card rv-el" id="project-${p.id}" data-page="projecten/${p.id}/">${picture(p.cover, lang, sizes)(root)}<div class="card-info"><span class="card-no">${pad(i + 1)} / ${pad(PROJECTS.length)}</span><h3>${esc(p.name)}</h3><span class="card-svc">${svcOf(p).map(svcName).map(esc).join(' · ')}</span>${i < 3 ? `<p>${esc(t.projects[p.id])}</p>` : ''}<button type="button" class="open" data-case="${i}" aria-haspopup="dialog">${esc(t.prOpen)}<span class="sr-only">: ${esc(p.name)}</span> ↗</button></div></article>`;
    }).join('\n    ')}
  </div>
</section>`;

  const caseData = PROJECTS.map(p => ({
    name: p.name, svc: svcOf(p).map(svcName).join(' · '), svcIdx: svcOf(p), desc: (p.long && t.projectsLong[p.id]) || t.projects[p.id],
    route: p.secs.map(([k]) => t.services[SERVICE_KEYS.indexOf(k)].name),
    cover: { slug: p.cover, alt: IMAGES[p.cover].alt[lang] },
    secs: p.secs.map(([k, imgs]) => ({ title: svcName(SERVICE_KEYS.indexOf(k)), imgs: imgs.map(s => ({ slug: s, alt: IMAGES[s].alt[lang] })) })),
    result: t.csResult(p.secs.length)
  }));

  const process = `<section class="sec light wm" id="werkwijze" aria-labelledby="werkwijze-h">
  <div class="wrap proc">
    <div class="rv-el"><span class="eyebrow">03 <b>/</b> ${esc(t.pcEyebrow)}</span><h2 class="h2" id="werkwijze-h">${esc(t.pcTitle[0])} <em>${esc(t.pcTitle[1])}</em></h2><p class="pc-note">${esc(t.pcNote)}</p></div>
    <ol class="steps rv-el">${t.process.map(([h, p], i) => `<li><b>${pad(i + 1)}</b><h3>${esc(h)}</h3><p>${esc(p)}</p></li>`).join('')}</ol>
  </div>
</section>`;

  const reviews = `<section class="sec wood-sec" id="reviews" aria-labelledby="reviews-h">
  <div class="wrap">
    <div class="rv-head">
      <div><span class="eyebrow">04 <b>/</b> ${esc(t.rvEyebrow)}</span><h2 class="h2" id="reviews-h">${esc(t.rvTitle)}</h2><span class="stars" role="img" aria-label="${esc(t.rvStars)}">★★★★★</span></div>
      <div class="rv-ctrl"><button type="button" id="rvPrev" aria-label="${esc(t.rvPrev)}">${I.prev}</button><span id="rvCount" aria-live="polite">01 / ${pad(REVIEWS.length)}</span><button type="button" id="rvNext" aria-label="${esc(t.rvNext)}">${I.next}</button></div>
    </div>
    <div class="rv-stage">
      ${REVIEWS.map((r, i) => `<figure class="rv${i === 0 ? ' on' : ''}">${r[lang] ? `<blockquote lang="${lang}"><p>“${esc(r[lang])}”</p></blockquote><p class="rv-tr">${esc(t.rvTr)}</p><details class="rv-orig"><summary>${esc(t.rvOrig)}</summary><p lang="en">${esc(r.text)}</p></details>` : `<blockquote lang="en"><p>“${esc(r.text)}”</p></blockquote>`}<figcaption><b>${esc(r.name)}</b>${r.company ? `<span>${esc(r.company)}</span>` : ''}<span class="g">${I.g}${esc(t.rvSource)}</span><span class="sr-only">${esc(t.rvStars)}</span></figcaption></figure>`).join('\n      ')}
    </div>
    <p class="rv-foot"><a href="${SITE.reviewsUrl}" rel="noopener" target="_blank">${esc(t.rvAll)} ↗</a><small>${esc(t.rvLangNote)}</small></p>
  </div>
</section>`;

  const about = `<section class="sec dark wm wm-left" id="over" aria-labelledby="over-h">
  <div class="wrap about">
    <figure class="plank rv-el"><img src="${root}assets/img/brand/gw-mark-black.svg" width="300" height="300" alt="" loading="lazy"><figcaption>GW Graphic Design</figcaption></figure>
    <div class="about-copy rv-el">
      <span class="eyebrow">05 <b>/</b> ${esc(t.abEyebrow)}</span>
      <h2 class="h2" id="over-h">${esc(t.abTitle[0])} ${esc(t.abTitle[1])} <em>${esc(t.abTitle[2])}</em></h2>
      ${t.abP.map(p => `<p>${esc(p)}</p>`).join('')}
      <ul class="facts">${t.abFacts.map(([b, s]) => `<li><b>${esc(b)}</b><span>${esc(s)}</span></li>`).join('')}</ul>
      <p class="sig">${SITE.owner}<small>${esc(t.abRole)}</small></p>
      <a class="btn" href="#offerte">${esc(t.cta)}</a>
    </div>
  </div>
</section>`;

  const chips = [...t.services.map((s, i) => [SERVICE_KEYS[i], s.name]), ['anders', t.fOther]];
  const faq = `<section class="sec light faq-sec" id="faq" aria-labelledby="faq-h">
  <div class="wrap sec-head">
    <div class="rv-el"><span class="eyebrow">FAQ</span><h2 class="h2" id="faq-h">${esc(t.faqTitle)}</h2></div>
  </div>
  <div class="wrap">
    <div class="faq rv-el">
      ${t.faq.map(([q, a], i) => `<div class="faq-item"><h3 class="faq-q"><button type="button" id="faq-q-${i + 1}" aria-expanded="false" aria-controls="faq-a-${i + 1}"><span>${esc(q)}</span><span class="faq-ic" aria-hidden="true"></span></button></h3><div class="faq-a" id="faq-a-${i + 1}" role="region" aria-labelledby="faq-q-${i + 1}"><div><p>${esc(a)}</p></div></div></div>`).join('\n      ')}
    </div>
  </div>
</section>`;

  const quote = `<section class="sec light" id="offerte" aria-labelledby="offerte-h">
  <div class="wrap quote">
    <div class="quote-intro">
      <span class="eyebrow">06 <b>/</b> ${esc(t.fEyebrow)}</span>
      <h2 class="h2" id="offerte-h">${esc(t.fTitle[0])} <em>${esc(t.fTitle[1])}</em></h2>
      <p class="lead">${esc(t.fIntro)}</p>
      <div class="alts"><a href="${waHref}" rel="noopener" target="_blank">${I.wa}WhatsApp</a><a href="tel:${SITE.phoneHref}">${I.phone}${SITE.phone}</a><a href="mailto:${SITE.email}">${I.mail}${SITE.email}</a></div>
    </div>
    <div class="fcard">
      <form id="quoteForm" action="${root}send.php" method="post" novalidate data-wa="${SITE.whatsapp}">
        <input type="hidden" name="lang" value="${lang}">
        <input type="hidden" name="ts" value="" data-ts>
        <fieldset>
          <legend>${esc(t.fService)}</legend>
          <p class="hint">${esc(t.fServiceHint)}</p>
          <div class="chips">${chips.map(([k, c], i) => `<label class="chip"><input type="checkbox" name="service[]" value="${k}" data-i="${i}" data-label="${esc(c)}"><span>${i < 6 ? `<small>${pad(i + 1)}</small>` : '<small>+</small>'}${esc(c)}</span></label>`).join('')}</div>
        </fieldset>
        <div class="fields">
          <div class="field"><label for="f-name">${esc(t.fName)} <small>(${esc(t.fRequired)})</small></label><input id="f-name" name="name" type="text" autocomplete="name" maxlength="100" required aria-describedby="f-name-err" data-err="${esc(t.fErrName)}"><p class="ferr" id="f-name-err"></p></div>
          <div class="field"><label for="f-company">${esc(t.fCompany)} <small>(${esc(t.fOptional)})</small></label><input id="f-company" name="company" type="text" autocomplete="organization" maxlength="120"></div>
          <div class="field"><label for="f-email">${esc(t.fEmail)} <small>(${esc(t.fRequired)})</small></label><input id="f-email" name="email" type="email" autocomplete="email" maxlength="160" required aria-describedby="f-email-err" data-err="${esc(t.fErrEmail)}"><p class="ferr" id="f-email-err"></p></div>
          <div class="field"><label for="f-phone">${esc(t.fPhone)} <small>(${esc(t.fOptional)})</small></label><input id="f-phone" name="phone" type="tel" autocomplete="tel" maxlength="40" aria-describedby="f-phone-err" data-err="${esc(t.fErrPhone)}"><p class="ferr" id="f-phone-err"></p></div>
          <fieldset class="field full pref"><legend>${esc(t.fPref)}</legend><div class="pref-opts">${['email', 'phone', 'whatsapp'].map((v, i) => `<label><input type="radio" name="contact_pref" value="${v}"${i === 0 ? ' checked' : ''}><span>${esc(t.fPrefOpts[i])}</span></label>`).join('')}</div></fieldset>
          <div class="field full"><label for="f-message">${esc(t.fMessage)} <small>(${esc(t.fRequired)})</small></label><textarea id="f-message" name="message" rows="5" maxlength="3000" required placeholder="${esc(t.fMessagePh)}" aria-describedby="f-message-err" data-err="${esc(t.fErrMessage)}"></textarea><p class="ferr" id="f-message-err"></p></div>
          <div class="hp" aria-hidden="true"><label for="f-website">Website</label><input id="f-website" type="text" name="website" tabindex="-1" autocomplete="off"></div>
        </div>
        <p class="fpriv">${esc(t.fPrivacy)} <a href="${href(dir, dir + LEGAL_SLUGS.privacy[lang])}">${esc(t.fPrivacyLink)}</a>.</p>
        <div class="factions"><button class="btn" type="submit" id="fSend">${esc(t.fSend)}</button><button class="btn btn-ghost" type="button" id="fWa">${I.wa}${esc(t.fWa)}</button></div>
        <p class="fstatus" id="fStatus" role="alert"></p>
      </form>
      <div class="fdone" id="fDone" tabindex="-1" role="status">${I.check}<h3>${esc(t.fDoneTitle)}</h3><p>${esc(t.fDoneText)}</p></div>
    </div>
  </div>
</section>`;

  const contact = `<section class="sec dark" id="contact" aria-labelledby="contact-h">
  <div class="wrap">
    <div class="sec-head"><div class="rv-el"><span class="eyebrow">07 <b>/</b> ${esc(t.ctEyebrow)}</span><h2 class="h2" id="contact-h">${esc(t.ctTitle)}</h2></div><p class="lead rv-el">${esc(t.ctIntro)}</p></div>
    <div class="ctiles">
      <a class="ct wa" href="${waHref}" rel="noopener" target="_blank">${I.wa}<span><small>WhatsApp</small><b>${esc(t.ctWa)}</b></span></a>
      <a class="ct" href="tel:${SITE.phoneHref}">${I.phone}<span><small>${esc(t.ctPhone)}</small><b>${SITE.phone}</b></span></a>
      <a class="ct" href="mailto:${SITE.email}">${I.mail}<span><small>${esc(t.ctEmail)}</small><b>${SITE.email}</b></span></a>
    </div>
    <p class="ct-meta">${esc(t.ctMeta)}</p>
  </div>
</section>`;

  const dialog = `<dialog class="case" id="case" aria-labelledby="caseTitle"><div class="case-in"><div class="case-top"><button type="button" class="case-close" aria-label="${esc(t.close)}">${I.close}</button></div><article id="caseBody"></article></div></dialog>`;

  const page = `${head({ lang, dir, title: t.title, description: t.description, path: dir, alternates, home: true, extraHead: preload })}
<body>
${gate}
${header(lang, dir, alternates, true)}
<main id="main">
${heroSec}
${services}
${projects}
${process}
${reviews}
${about}
${faq}
${quote}
${contact}
</main>
${footer(lang, dir, true)}
${dialog}
<script type="application/ld+json">${jsonLd(lang)}</script>
<script type="application/json" id="case-data">${JSON.stringify(caseData).replace(/</g, '\\u003c')}</script>
${i18nJson(t)}
${scriptTag(root)}
</body>
</html>
`;
  return page;
}

/* ------------------------------------------------------------------ LEGAL PAGES */
function legalPage(lang, key) {
  const t = T[lang], dir = LANGS[lang].dir, root = dir ? '../' : '';
  const doc = LEGAL[key][lang];
  const alternates = Object.fromEntries(Object.keys(LANGS).map(l => [l, LANGS[l].dir + LEGAL_SLUGS[key][l]]));
  const path = alternates[lang];
  const ids = doc.sections.map((s, i) => `s${i + 1}`);
  return `${head({ lang, dir, title: `${doc.title} | GW Graphic Design`, description: doc.description, path, alternates, home: false })}
<body>
${header(lang, dir, alternates, false)}
<main id="main">
  <section class="dark legal-hero wm">
    <div class="wrap"><span class="eyebrow">GW Graphic Design <b>/</b> ${esc(t.ftLegal)}</span><h1 class="h2">${esc(doc.title)}</h1><p>${esc(t.updated)}: ${esc(t.updatedDate)}</p></div>
  </section>
  <section class="light legal-body">
    <div class="wrap legal-grid">
      <nav class="toc" aria-label="${esc(doc.title)}"><h2>${esc(t.ftMenu)}</h2><ol>${doc.sections.map((s, i) => `<li><a href="#${ids[i]}">${esc(s.h)}</a></li>`).join('')}</ol><p style="margin-top:22px"><a class="tlink" href="${homeHref(dir, lang)}">← ${esc(t.backHome)}</a></p></nav>
      <div class="prose">${doc.intro ? `<p>${doc.intro}</p>` : ''}${doc.sections.map((s, i) => `<h2 id="${ids[i]}">${esc(s.h)}</h2>${s.body}`).join('\n')}</div>
    </div>
  </section>
</main>
${footer(lang, dir, false)}
${i18nJson(t)}
${scriptTag(root)}
</body>
</html>
`;
}

/* ------------------------------------------------------------------ 404 */
function notFound() {
  const t = T.nl;
  const alternates = { nl: '', en: 'en/', pl: 'pl/' };
  return `<!doctype html>
<html lang="nl">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Pagina niet gevonden | GW Graphic Design</title><meta name="robots" content="noindex"><link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="/assets/css/style.css?v=${CSS_V}"></head>
<body>
<main id="main" class="dark legal-hero wm" style="min-height:100svh;display:flex;align-items:center">
  <div class="wrap">
    <img src="/assets/img/brand/gw-mark-white.svg" width="64" height="64" alt="GW Graphic Design">
    <p class="eyebrow" style="margin-top:40px">404</p>
    <h1 class="h2">Pagina niet gevonden. <em>Page not found.</em></h1>
    <p style="margin-top:28px;display:flex;flex-wrap:wrap;gap:12px"><a class="btn" href="/">Naar de homepage</a><a class="btn btn-ghost" href="/en/">English</a><a class="btn btn-ghost" href="/pl/">Polski</a></p>
  </div>
</main>
</body>
</html>
`;
}

/* ------------------------------------------------------------------ gate mark (original vector, white on black disc) */
const markSvg = await readFile(new URL('./source-assets/gw-mark.svg', import.meta.url), 'utf8');
const vb = markSvg.match(/viewBox="([^"]+)"/)[1].split(' ').map(Number);
const markInner = markSvg.replace(/^<svg[^>]*>/, '').replace('</svg>', '');
const gateMark = `<svg viewBox="${vb.join(' ')}" aria-hidden="true" focusable="false"><circle cx="${vb[0] + vb[2] / 2}" cy="${vb[1] + vb[3] / 2}" r="${vb[2] / 2 - 0.5}" fill="#000"/><g fill="#fff">${markInner}</g></svg>`;

/* ------------------------------------------------------------------ write */
const pages = [];
for (const lang of Object.keys(LANGS)) {
  const dir = LANGS[lang].dir;
  if (dir) await mkdir(out(dir), { recursive: true });
  await writeFile(out(dir + 'index.html'), home(lang));
  pages.push({ path: dir, alts: Object.fromEntries(Object.entries(LANGS).map(([l, v]) => [l, v.dir])), pri: '1.0' });
  for (const key of Object.keys(LEGAL_SLUGS)) {
    await writeFile(out(dir + LEGAL_SLUGS[key][lang]), legalPage(lang, key));
    pages.push({ path: dir + LEGAL_SLUGS[key][lang], alts: Object.fromEntries(Object.keys(LANGS).map(l => [l, LANGS[l].dir + LEGAL_SLUGS[key][l]])), pri: '0.3' });
  }
}
await writeFile(out('404.html'), notFound());

// sitemap with hreflang alternates
const sm = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages.map(p => `  <url>
    <loc>${abs(p.path)}</loc>
    <lastmod>${SITE.updated}</lastmod>
    <priority>${p.pri}</priority>
${Object.entries(p.alts).map(([l, a]) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${abs(a)}"/>`).join('\n')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(p.alts.nl)}"/>
  </url>`).join('\n')}
</urlset>
`;
await writeFile(out('sitemap.xml'), sm);
await writeFile(out('robots.txt'), `User-agent: *\nAllow: /\nDisallow: /send.php\n\nSitemap: ${abs('sitemap.xml')}\n`);

// server config (Apache) — security headers incl. CSP with the hashes of the inline head scripts
const htaccess = (await readFile(new URL('./server/htaccess.txt', import.meta.url), 'utf8')).replace('%SCRIPT_HASHES%', scriptHashes.join(' '));
await writeFile(out('.htaccess'), htaccess);
await copyFile(new URL('./server/send.php', import.meta.url), out('send.php'));
await mkdir(out('.data/'), { recursive: true });
await writeFile(out('.data/.htaccess'), 'Require all denied\n');

console.log(`built ${pages.length} pages · css ${css.length} B · js ${js.length} B`);
