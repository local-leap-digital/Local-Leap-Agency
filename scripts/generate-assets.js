import path from 'node:path';
import sharp from 'sharp';

const publicDir = path.resolve('public');

async function generateOgImage() {
  const svg = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0A4A27" />
        <stop offset="60%" stop-color="#0E6B32" />
        <stop offset="100%" stop-color="#1FA03C" />
      </linearGradient>
    </defs>

    <rect width="1200" height="630" fill="url(#bg)" />

    <circle cx="1100" cy="100" r="280" fill="#F4B400" opacity="0.10" />
    <circle cx="150" cy="560" r="200" fill="#FFFFFF" opacity="0.05" />
    <path d="M900 0 L1200 300 V340 L860 0 Z" fill="#F4B400" opacity="0.55" />
    <path d="M780 0 L1200 420 V432 L768 0 Z" fill="#F4B400" opacity="0.3" />

    <g transform="translate(100, 90)">
      <rect x="0" y="0" width="300" height="40" rx="20" fill="#F4B400" />
      <text x="24" y="26" font-family="Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="14" font-weight="700" fill="#0B2C5F" letter-spacing="2">LOCALLEAP DIGITAL</text>
    </g>

    <text x="100" y="210" font-family="Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="58" font-weight="800" fill="#FFFFFF">Turn Your Idea Into a</text>
    <text x="100" y="282" font-family="Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="58" font-weight="800" fill="#F4B400">Digital Reality.</text>
    <path d="M102 306 C 220 290, 380 286, 520 296" stroke="#F4B400" stroke-width="5" fill="none" stroke-linecap="round" />

    <text x="100" y="362" font-family="Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="24" fill="#E2EFE4">Websites, web applications &amp; mobile apps for local shops,</text>
    <text x="100" y="398" font-family="Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="24" fill="#E2EFE4">businesses and startups in Kolhapur and beyond.</text>

    <g transform="translate(100, 460)">
      <rect x="0" y="0" width="250" height="52" rx="12" fill="#ffffff" fill-opacity="0.1" stroke="#ffffff" stroke-opacity="0.2" />
      <text x="20" y="32" font-family="Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="16" font-weight="600" fill="#FFFFFF">✓ Website Development</text>

      <rect x="270" y="0" width="230" height="52" rx="12" fill="#ffffff" fill-opacity="0.1" stroke="#ffffff" stroke-opacity="0.2" />
      <text x="290" y="32" font-family="Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="16" font-weight="600" fill="#FFFFFF">✓ Web Applications</text>

      <rect x="520" y="0" width="240" height="52" rx="12" fill="#ffffff" fill-opacity="0.1" stroke="#ffffff" stroke-opacity="0.2" />
      <text x="540" y="32" font-family="Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="16" font-weight="600" fill="#FFFFFF">✓ Mobile Applications</text>
    </g>

    <text x="100" y="585" font-family="Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="15" font-weight="600" fill="#F4B400" letter-spacing="5">YOUR VISION. OUR TECHNOLOGY. REAL RESULTS.</text>
  </svg>
  `;


  await sharp(Buffer.from(svg)).png().toFile(path.join(publicDir, 'og-image.png'));
  console.log('OG image created at public/og-image.png');
}

async function run() {
  await generateOgImage();
  console.log('All image assets successfully built! (Project previews: node scripts/capture-screenshots.js)');
}

run();
