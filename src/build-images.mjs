// Generates every raster/vector asset the site ships from the immutable sources in src/source-assets.
// Run: npm run images
import sharp from 'sharp';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { IMAGES, WIDTHS } from './images.mjs';

const SRC = new URL('./source-assets/', import.meta.url);
const OUT = new URL('../public/assets/img/', import.meta.url);
await mkdir(new URL('work/', OUT), { recursive: true });
await mkdir(new URL('brand/', OUT), { recursive: true });

/* ---------- portfolio: AVIF + WebP, several widths ---------- */
let n = 0;
for (const [slug, { src }] of Object.entries(IMAGES)) {
  const input = await readFile(new URL(`portfolio/${src}.jpg`, SRC));
  for (const w of WIDTHS) {
    const base = new URL(`work/${slug}-${w}`, OUT);
    const avif = base.href.replace('file://', '') + '.avif';
    const webp = base.href.replace('file://', '') + '.webp';
    if (!existsSync(avif)) await sharp(input).resize(w, w).avif({ quality: 50, effort: 3 }).toFile(avif);
    if (!existsSync(webp)) await sharp(input).resize(w, w).webp({ quality: 74, effort: 4 }).toFile(webp);
    n++;
  }
}
console.log(`portfolio: ${n} sizes`);

/* ---------- wood: the supplied texture, only resized/compressed ---------- */
const wood = await readFile(new URL('wood-original.jpg', SRC));
for (const w of [800, 1200]) {
  await sharp(wood).resize(w, w).avif({ quality: 40, effort: 4 }).toFile(new URL(`wood-${w}.avif`, OUT).pathname);
  await sharp(wood).resize(w, w).webp({ quality: 62, effort: 5 }).toFile(new URL(`wood-${w}.webp`, OUT).pathname);
}
console.log('wood: done');

/* ---------- brand: original vector logo, recoloured only (black / white) ---------- */
const markSvg = await readFile(new URL('gw-mark.svg', SRC), 'utf8');
const logoSvg = await readFile(new URL('gw-logo.svg', SRC), 'utf8');
const tint = (svg, c) => svg.replace('fill="currentColor"', `fill="${c}"`);
const brand = {
  'gw-logo-white.svg': tint(logoSvg, '#fff'),
  'gw-logo-black.svg': tint(logoSvg, '#0a0a0a'),
  'gw-mark-white.svg': tint(markSvg, '#fff'),
  'gw-mark-black.svg': tint(markSvg, '#0a0a0a')
};
for (const [f, s] of Object.entries(brand)) await writeFile(new URL(`brand/${f}`, OUT), s);

// Favicon: the mark, white on a black disc (as in the original vector file).
const markPaths = markSvg.replace(/^<svg[^>]*>/, '').replace('</svg>', '');
const vb = markSvg.match(/viewBox="([^"]+)"/)[1].split(' ').map(Number);
const cx = vb[0] + vb[2] / 2, cy = vb[1] + vb[3] / 2, r = vb[2] / 2;
const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb[0] - 6} ${vb[1] - 6} ${vb[2] + 12} ${vb[3] + 12}"><circle cx="${cx}" cy="${cy}" r="${r + 6}" fill="#0a0a0a"/><g fill="#fff">${markPaths}</g></svg>`;
await writeFile(new URL('../../favicon.svg', OUT), favicon);
const png = size => sharp(Buffer.from(favicon), { density: 300 }).resize(size, size).png().toBuffer();
// ICO container with a single 32×32 PNG image
const p32 = await png(32);
const ico = Buffer.alloc(22);
ico.writeUInt16LE(0, 0); ico.writeUInt16LE(1, 2); ico.writeUInt16LE(1, 4);
ico.writeUInt8(32, 6); ico.writeUInt8(32, 7); ico.writeUInt8(0, 8); ico.writeUInt8(0, 9);
ico.writeUInt16LE(1, 10); ico.writeUInt16LE(32, 12); ico.writeUInt32LE(p32.length, 14); ico.writeUInt32LE(22, 18);
await writeFile(new URL('../../favicon.ico', OUT), Buffer.concat([ico, p32]));
// Apple touch icon: white mark on black, full square (iOS rounds the corners)
const touch = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb[0] - 50} ${vb[1] - 50} ${vb[2] + 100} ${vb[3] + 100}"><rect x="${vb[0] - 50}" y="${vb[1] - 50}" width="${vb[2] + 100}" height="${vb[3] + 100}" fill="#0a0a0a"/><g fill="#fff">${markPaths}</g></svg>`;
await sharp(Buffer.from(touch), { density: 300 }).resize(180, 180).png().toFile(new URL('../../apple-touch-icon.png', OUT).pathname);

// Open Graph image 1200×630: stacked logo (vector) on black, wood strip at the bottom.
const logoInner = logoSvg.replace(/^<svg[^>]*>/, '').replace('</svg>', '');
const lvb = logoSvg.match(/viewBox="([^"]+)"/)[1].split(' ').map(Number);
const logoH = 380, logoW = logoH * lvb[2] / lvb[3];
const ogLogo = await sharp(Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${Math.round(logoW)}" height="${logoH}" viewBox="${lvb.join(' ')}"><g fill="#fff">${logoInner}</g></svg>`)).png().toBuffer();
const woodStrip = await sharp(wood).resize(1200, 1200).extract({ left: 0, top: 380, width: 1200, height: 70 }).toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#0a0a0a' } })
  .composite([
    { input: ogLogo, left: Math.round((1200 - logoW) / 2), top: 70 },
    { input: woodStrip, left: 0, top: 560 }
  ])
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(new URL('og-image.jpg', OUT).pathname);
console.log('brand: done');
