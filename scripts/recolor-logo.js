import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

// Recolors the teal parts of the LocalLeap logo to the poster's leaf green
// (navy stays untouched), then rebuilds the favicon set, touch icon & web manifest icons.
// Safe to re-run: already-green pixels fall outside the teal hue range.

const publicDir = path.resolve('public');
const TARGET_HUE = 134; // #1FA03C
const SATURATION_SCALE = 0.8;
const TEAL_HUE_MIN = 165;
const TEAL_HUE_MAX = 200;

const logoFiles = [
  'public/logo.png',
  'public/logo-transparent.png'
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

// Multi-size ICO that wraps PNG images (supported by all modern browsers)
async function writeIco(images, file) {
  const header = Buffer.alloc(6 + images.length * 16);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  let offset = header.length;
  images.forEach(({ size, png }, i) => {
    const entry = 6 + i * 16;
    header.writeUInt8(size >= 256 ? 0 : size, entry);
    header.writeUInt8(size >= 256 ? 0 : size, entry + 1);
    header.writeUInt16LE(1, entry + 4);
    header.writeUInt16LE(32, entry + 6);
    header.writeUInt32LE(png.length, entry + 8);
    header.writeUInt32LE(offset, entry + 12);
    offset += png.length;
  });
  await fs.writeFile(file, Buffer.concat([header, ...images.map((img) => img.png)]));
}

// Cuts the pin mark out of the real logo (above the wordmark) so the icon matches it exactly.
// The ring's hole is transparent in the source; back it with white so the mark reads on dark tabs.
async function extractIcon(size, marginRatio) {
  const source = path.join(publicDir, 'logo-transparent.png');
  const { data, info } = await sharp(source).raw().toBuffer({ resolveWithObject: true });
  const markBottomLimit = Math.round(info.height * 0.64); // wordmark starts below this line
  let x0 = info.width, x1 = 0, y0 = info.height, y1 = 0;
  for (let y = 0; y < markBottomLimit; y++) {
    for (let x = 0; x < info.width; x++) {
      if (data[(y * info.width + x) * info.channels + 3] > 20) {
        x0 = Math.min(x0, x); x1 = Math.max(x1, x);
        y0 = Math.min(y0, y); y1 = Math.max(y1, y);
      }
    }
  }
  const w = x1 - x0 + 1;
  const h = y1 - y0 + 1;
  // Ring hole: centred horizontally, its centre sits ~39% down the pin, radius ~36% of pin width
  const holeR = Math.round(w * 0.36);
  const holeCx = Math.round(w / 2);
  const holeCy = Math.round(h * 0.39);
  const backing = Buffer.from(
    `<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg"><circle cx="${holeCx}" cy="${holeCy}" r="${holeR}" fill="#FFFFFF"/></svg>`
  );
  const mark = await sharp(source).extract({ left: x0, top: y0, width: w, height: h }).png().toBuffer();
  const filled = await sharp(backing).composite([{ input: mark }]).png().toBuffer();
  const inner = Math.round(size * (1 - marginRatio * 2));
  return sharp(filled)
    .resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({
      top: Math.floor((size - inner) / 2),
      bottom: Math.ceil((size - inner) / 2),
      left: Math.floor((size - inner) / 2),
      right: Math.ceil((size - inner) / 2),
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toBuffer();
}

// Icon centred on a white square with padding (for home-screen icons)
function paddedIcon(icon, size, padding) {
  const inner = size - padding * 2;
  return sharp(icon)
    .resize(inner, inner, { fit: 'contain', background: '#FFFFFF' })
    .extend({ top: padding, bottom: padding, left: padding, right: padding, background: '#FFFFFF' })
    .flatten({ background: '#FFFFFF' })
    .png();
}

async function run() {
  for (const file of logoFiles) {
    await recolor(file);
  }

  const icon = await extractIcon(512, 0.06);
  await fs.writeFile(path.join(publicDir, 'logo-icon.png'), icon);

  // Browser tab icons: mark fills almost the whole square so it stays legible at 16px
  const icoImages = [];
  for (const size of [16, 32, 48]) {
    const png = await sharp(await extractIcon(512, 0.01)).resize(size, size).png().toBuffer();
    icoImages.push({ size, png });
  }
  await writeIco(icoImages, path.join(publicDir, 'favicon.ico'));
  await fs.writeFile(path.join(publicDir, 'favicon-16x16.png'), icoImages[0].png);
  await fs.writeFile(path.join(publicDir, 'favicon-32x32.png'), icoImages[1].png);

  // iOS & Android home-screen icons
  await paddedIcon(icon, 180, 15).toFile(path.join(publicDir, 'apple-touch-icon.png'));
  await paddedIcon(icon, 192, 16).toFile(path.join(publicDir, 'android-chrome-192x192.png'));
  await paddedIcon(icon, 512, 44).toFile(path.join(publicDir, 'android-chrome-512x512.png'));

  const manifest = {
    name: 'LocalLeap Digital',
    short_name: 'LocalLeap',
    description: 'Websites, web applications & mobile apps for local businesses.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: '#0A4A27',
    icons: [
      { src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ]
  };
  await fs.writeFile(path.join(publicDir, 'site.webmanifest'), JSON.stringify(manifest, null, 2) + '\n');

  console.log('Logo recolored; favicon set, touch icons and web manifest generated.');
}

run();
