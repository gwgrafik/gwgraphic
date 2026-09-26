// Pre-launch QA for the built site in public/. Run: npm run check
import { readFile, readdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../public');
const FORBIDDEN = /prototype|before publishing|confirm before|add official|\bdraft\b|production version should|\[confirm|\[add |lorem|todo|placeholder text|javascript:void|your photo/i;
const errors = [], warns = [];

async function walk(d) { const out = []; for (const f of await readdir(d)) { const p = join(d, f); if ((await stat(p)).isDirectory()) out.push(...await walk(p)); else out.push(p); } return out; }
const files = (await walk(ROOT)).filter(f => f.endsWith('.html'));
const titles = new Map();

for (const f of files) {
  const rel = f.slice(ROOT.length + 1);
  const html = await readFile(f, 'utf8');
  const text = html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ');
  if (FORBIDDEN.test(text)) errors.push(`${rel}: forbidden text "${text.match(FORBIDDEN)[0]}"`);
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]);
  const dup = ids.filter((x, i) => ids.indexOf(x) !== i); if (dup.length) errors.push(`${rel}: duplicate ids ${[...new Set(dup)]}`);
  const h1 = (html.match(/<h1[\s>]/g) || []).length; if (h1 !== 1) errors.push(`${rel}: ${h1} h1 elements`);
  if (rel !== '404.html') {
    const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || ''; const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
    if (!title) errors.push(`${rel}: no title`); if (title.length > 90) warns.push(`${rel}: title ${title.length} chars`);
    if (!desc) errors.push(`${rel}: no description`); if (desc.length > 165) warns.push(`${rel}: description ${desc.length} chars`);
    if (titles.has(title)) errors.push(`${rel}: duplicate title with ${titles.get(title)}`); titles.set(title, rel);
    if (!/<link rel="canonical" href="https:\/\/www\.gwgraphic\.com\//.test(html)) errors.push(`${rel}: canonical missing`);
    const hl = [...html.matchAll(/hreflang="([^"]+)" href="([^"]+)"/g)].map(m => m[1]); if (!['nl', 'en', 'pl', 'x-default'].every(l => hl.includes(l))) errors.push(`${rel}: hreflang incomplete`);
  }
  for (const m of html.matchAll(/<img\b[^>]*>/g)) { if (!/\salt="/.test(m[0])) errors.push(`${rel}: img without alt`); if (!/\swidth="/.test(m[0])) errors.push(`${rel}: img without width`); }
  for (const m of html.matchAll(/<a\b[^>]*>([\s\S]*?)<\/a>/g)) if (!m[1].replace(/<[^>]+>/g, '').trim() && !/aria-label=/.test(m[0])) errors.push(`${rel}: empty link ${m[0].slice(0, 80)}`);
  // local references
  const refs = [...html.matchAll(/\s(?:href|src)="([^"]+)"/g), ...html.matchAll(/(?:srcset|imagesrcset)="([^"]+)"/g)].flatMap(m => m[0].includes('srcset') ? m[1].split(',').map(s => s.trim().split(' ')[0]) : [m[1]]);
  for (let r of refs) {
    if (/^(https?:|mailto:|tel:|data:|#)/.test(r)) continue;
    r = r.split('#')[0].split('?')[0]; if (!r) continue;
    let p = r.startsWith('/') ? join(ROOT, r) : resolve(dirname(f), r);
    if (r.endsWith('/') || r === '.' || r === './' || r === '..' || r === '../') p = join(p, 'index.html');
    if (!existsSync(p)) errors.push(`${rel}: missing ${r}`);
  }
  // in-page anchors
  for (const m of html.matchAll(/href="#([^"]+)"/g)) if (!ids.includes(m[1])) errors.push(`${rel}: anchor #${m[1]} not found`);
  // JSON-LD parses
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) { try { JSON.parse(m[1]); } catch (e) { errors.push(`${rel}: invalid JSON-LD`); } }
}
// deferred images referenced in data-slug must exist
for (const f of files) for (const m of (await readFile(f, 'utf8')).matchAll(/data-slug="([^"]+)"/g)) for (const w of [480, 800, 1000]) for (const e of ['avif', 'webp']) if (!existsSync(join(ROOT, `assets/img/work/${m[1]}-${w}.${e}`))) errors.push(`missing image ${m[1]}-${w}.${e}`);
// sitemap entries map to files
const sm = await readFile(join(ROOT, 'sitemap.xml'), 'utf8');
for (const m of sm.matchAll(/<loc>https:\/\/www\.gwgraphic\.com\/([^<]*)<\/loc>/g)) { const p = join(ROOT, m[1] || '', m[1] === '' || m[1].endsWith('/') ? 'index.html' : ''); if (!existsSync(p)) errors.push(`sitemap: ${m[1]} missing`); }

console.log(`${files.length} HTML files checked`);
warns.forEach(w => console.log('warn ', w));
errors.forEach(e => console.log('ERROR', e));
if (errors.length) process.exit(1); else console.log('OK — no errors');
