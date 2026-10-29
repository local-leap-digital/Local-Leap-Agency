import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

// Recolors the teal parts of the LocalLeap logo to the poster's leaf green
// (navy stays untouched), then rebuilds the favicon & touch icon.
// Safe to re-run: already-green pixels fall outside the teal hue range.

const publicDir = path.resolve('public');
const TARGET_HUE = 134; // #1FA03C
const SATURATION_SCALE = 0.8;
const TEAL_HUE_MIN = 165;
const TEAL_HUE_MAX = 200;

const logoFiles = [
  'public/logo-icon.png',
  'public/logo.png',
  'logo.png',
  'transparent logo.png'
];

function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return [0, 0, l];
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h;
  if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
  else if (max === g) h = (b - r) / d + 2;
  else h = (r - g) / d + 4;
  return [h * 60, s, l];
}

function hslToRgb(h, s, l) {
  const hueToRgb = (p, q, t) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const hk = h / 360;
  return [hueToRgb(p, q, hk + 1 / 3), hueToRgb(p, q, hk), hueToRgb(p, q, hk - 1 / 3)].map((v) =>
    Math.round(v * 255)
  );
}

async function recolor(file) {
  const { data, info } = await sharp(file).raw().toBuffer({ resolveWithObject: true });
  let changed = 0;
  for (let i = 0; i < data.length; i += info.channels) {
    const [h, s, l] = rgbToHsl(data[i], data[i + 1], data[i + 2]);
    if (h >= TEAL_HUE_MIN && h <= TEAL_HUE_MAX && s > 0.25 && l > 0.08 && l < 0.95) {
      const [r, g, b] = hslToRgb(TARGET_HUE, s * SATURATION_SCALE, l);
      data[i] = r;
      data[i + 1] = g;
      data[i + 2] = b;
      changed++;
    }
  }
  const output = await sharp(data, { raw: info }).png().toBuffer();
  await fs.writeFile(file, output);
  console.log(`${file}: recolored ${changed} pixels`);
}

// Single-image ICO that wraps a PNG (supported by all modern browsers)
async function writeIco(pngBuffer, size, file) {
  const header = Buffer.alloc(22);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);
  header.writeUInt8(size, 6);
  header.writeUInt8(size, 7);
  header.writeUInt16LE(1, 10);
  header.writeUInt16LE(32, 12);
  header.writeUInt32LE(pngBuffer.length, 14);
  header.writeUInt32LE(22, 18);
  await fs.writeFile(file, Buffer.concat([header, pngBuffer]));
}

async function run() {
  for (const file of logoFiles) {
    await recolor(file);
  }

  const icon = path.join(publicDir, 'logo-icon.png');
  await sharp(icon)
    .resize(150, 150)
    .extend({ top: 15, bottom: 15, left: 15, right: 15, background: '#FFFFFF' })
    .flatten({ background: '#FFFFFF' })
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));

  const favicon = await sharp(icon).resize(32, 32).png().toBuffer();
  await writeIco(favicon, 32, path.join(publicDir, 'favicon.ico'));

  console.log('Logo, apple-touch-icon and favicon updated to the poster green.');
}

run();
