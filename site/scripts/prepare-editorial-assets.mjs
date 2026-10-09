import sharp from 'sharp';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = path.join(root, 'public');
const input = process.argv[2];
if (input) {
  await mkdir(path.join(publicDir, 'photos'), { recursive: true });
  for (const width of [480, 960, 1440]) await sharp(input).resize({ width, withoutEnlargement: true }).webp({ quality: 82 }).toFile(path.join(publicDir, 'photos', `architecture-${width}.webp`));
}
const favicon = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180"><rect width="180" height="180" rx="24" fill="#0b0d0f"/><text x="24" y="118" font-family="Georgia,serif" font-size="92" fill="#e8e5de" letter-spacing="-8">yb<tspan fill="#b79a65">.</tspan></text></svg>`;
await writeFile(path.join(publicDir, 'icon.svg'), favicon);
await sharp(Buffer.from(favicon)).png().toFile(path.join(publicDir, 'apple-touch-icon.png'));
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#0b0d0f"/><path d="M850 0H1200V630H1060V130L850 345Z" fill="#171b1e"/><path d="M850 345L1060 130V630H850Z" fill="#252726"/><path d="M1060 130L1082 120V630H1060Z" fill="#b79a65"/><path d="M64 72H112" stroke="#b79a65"/><text x="132" y="78" font-size="16" fill="#92969a" letter-spacing="3" font-family="sans-serif">YOHANNES BELAI · FIELD NOTES</text><text x="64" y="258" font-size="99" fill="#e8e5de" font-family="Georgia,serif">See what</text><text x="64" y="376" font-size="99" fill="#e8e5de" font-family="Georgia,serif">others <tspan fill="#b79a65" font-style="italic">overlook.</tspan></text><text x="68" y="463" font-size="20" fill="#92969a" font-family="sans-serif">See clearly. Think independently. Move deliberately.</text><path d="M64 549H793" stroke="#292d30"/><text x="68" y="585" fill="#92969a" font-size="15" letter-spacing="2" font-family="sans-serif">YBELAI2.GITHUB.IO</text></svg>`;
await sharp(Buffer.from(og)).jpeg({ quality: 90 }).toFile(path.join(publicDir, 'og-image.jpg'));
console.log('Editorial images, favicon, and Open Graph card prepared.');
