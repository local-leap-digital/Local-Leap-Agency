import path from 'node:path';
import sharp from 'sharp';

const publicDir = path.resolve('public');

async function generateOgImage() {
  const svg = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#01264a" />
        <stop offset="100%" stop-color="#01315E" />
      </linearGradient>
    </defs>
    
    <rect width="1200" height="630" fill="url(#bg)" />
    
    <circle cx="1100" cy="100" r="280" fill="#05B0B5" opacity="0.08" />
    <circle cx="150" cy="550" r="200" fill="#05B0B5" opacity="0.06" />
    <path d="M -50 450 Q 300 200 650 380 T 1250 250" fill="none" stroke="#05B0B5" stroke-width="2" stroke-dasharray="6 6" opacity="0.2" />
    
    <g transform="translate(100, 90)">
      <rect x="0" y="0" width="310" height="40" rx="20" fill="#05B0B5" fill-opacity="0.15" stroke="#05B0B5" stroke-opacity="0.3" stroke-width="1.5" />
      <text x="24" y="25" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="14" font-weight="700" fill="#05B0B5" letter-spacing="2">LOCALLEAP DIGITAL</text>
    </g>

    <text x="100" y="210" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="56" font-weight="800" fill="#FFFFFF">Helping Local Businesses</text>
    <text x="100" y="280" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="56" font-weight="800" fill="#05B0B5">Grow Online.</text>
    
    <text x="100" y="355" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="24" fill="#94A3B8">Websites &amp; simple automations for clinics, cafes, restaurants &amp; gyms.</text>
    <text x="100" y="392" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="24" fill="#94A3B8">Get found on Google, look trustworthy, and get more bookings.</text>
    
    <g transform="translate(100, 460)">
      <rect x="0" y="0" width="280" height="52" rx="12" fill="#ffffff" fill-opacity="0.08" stroke="#ffffff" stroke-opacity="0.15" />
      <text x="20" y="32" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="16" font-weight="600" fill="#E2EEF0">✓ Free demo before you pay</text>
      
      <rect x="300" y="0" width="200" height="52" rx="12" fill="#ffffff" fill-opacity="0.08" stroke="#ffffff" stroke-opacity="0.15" />
      <text x="320" y="32" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="16" font-weight="600" fill="#E2EEF0">✓ Mobile-friendly</text>
      
      <rect x="520" y="0" width="260" height="52" rx="12" fill="#ffffff" fill-opacity="0.08" stroke="#ffffff" stroke-opacity="0.15" />
      <text x="540" y="32" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="16" font-weight="600" fill="#E2EEF0">✓ Direct WhatsApp support</text>
    </g>
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
