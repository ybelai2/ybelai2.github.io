import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const [input, slug] = process.argv.slice(2);
if (!input || !slug || !/^[a-z0-9-]+$/.test(slug))
  throw new Error(
    "Usage: npm run photo -- /path/to/photo.jpg a-simple-photo-name",
  );
const directory = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../public/photos",
);
await mkdir(directory, { recursive: true });
for (const width of [480, 960, 1440])
  await sharp(input)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(path.join(directory, `${slug}-${width}.webp`));
console.log(
  `Photo ready. Use /photos/${slug}.webp in src/data/photos.json and set placeholder to false.`,
);
