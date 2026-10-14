import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const publicDir = path.resolve('public');
const projectsDir = path.join(publicDir, 'projects');

if (!fs.existsSync(projectsDir)) {
  fs.mkdirSync(projectsDir, { recursive: true });
}

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

function escapeXml(unsafe) {
  return String(unsafe).replace(/[<>&'"]/g, c => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

function generateMockupSvg({ title, category, accentColor, features, previewBadge }) {
  const safeTitle = escapeXml(title);
  const safeCategory = escapeXml(category);
  const safeF0 = escapeXml(features[0]);
  const safeF1 = escapeXml(features[1]);
  const safeBadge = escapeXml(previewBadge);

  return `
  <svg width="1000" height="660" viewBox="0 0 1000 660" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="100%" stop-color="#F8FAFC" />
      </linearGradient>
    </defs>
    <!-- Window frame background -->
    <rect width="1000" height="660" rx="16" fill="#F1F5F9" />
    
    <!-- Browser toolbar -->
    <rect width="1000" height="52" rx="16" fill="#01315E" />
    <rect y="40" width="1000" height="12" fill="#01315E" />
    <circle cx="28" cy="26" r="6" fill="#EF4444" />
    <circle cx="48" cy="26" r="6" fill="#F59E0B" />
    <circle cx="68" cy="26" r="6" fill="#10B981" />
    
    <!-- Browser address bar -->
    <rect x="110" y="12" width="600" height="28" rx="6" fill="#02417c" />
    <text x="130" y="31" font-family="sans-serif" font-size="13" fill="#94A3B8">https://${title.toLowerCase().replace(/[^a-z0-9]/g, '')}-demo.localleap.in</text>
    
    <!-- Website Inner Content -->
    <g transform="translate(24, 68)">
      <!-- Navbar of sample site -->
      <rect width="952" height="60" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1" />
      <circle cx="40" cy="30" r="14" fill="${accentColor}" />
      <text x="68" y="36" font-family="sans-serif" font-size="17" font-weight="700" fill="#01315E">${safeTitle}</text>
      
      <text x="560" y="35" font-family="sans-serif" font-size="13" fill="#64748B">Services</text>
      <text x="640" y="35" font-family="sans-serif" font-size="13" fill="#64748B">About</text>
      <text x="710" y="35" font-family="sans-serif" font-size="13" fill="#64748B">Reviews</text>
      <rect x="785" y="14" width="145" height="32" rx="16" fill="${accentColor}" />
      <text x="815" y="35" font-family="sans-serif" font-size="13" font-weight="600" fill="#FFFFFF">Book Now</text>

      <!-- Hero of sample site -->
      <rect y="74" width="952" height="320" rx="12" fill="url(#cardGrad)" stroke="#E2E8F0" stroke-width="1" />
      
      <rect x="40" y="110" width="130" height="26" rx="13" fill="${accentColor}" fill-opacity="0.12" />
      <text x="55" y="127" font-family="sans-serif" font-size="11" font-weight="700" fill="${accentColor}">${escapeXml(category.toUpperCase())}</text>
      
      <text x="40" y="180" font-family="sans-serif" font-size="36" font-weight="800" fill="#0F172A">${safeTitle}</text>
      <text x="40" y="215" font-family="sans-serif" font-size="18" fill="#475569">Premium quality care and convenient appointments for you.</text>
      
      <rect x="40" y="250" width="180" height="46" rx="8" fill="#01315E" />
      <text x="65" y="279" font-family="sans-serif" font-size="15" font-weight="600" fill="#FFFFFF">Schedule Visit ↗</text>
      
      <rect x="235" y="250" width="150" height="46" rx="8" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5" />
      <text x="255" y="279" font-family="sans-serif" font-size="15" font-weight="600" fill="#334155">View Pricing</text>
      
      <!-- Sample visual right column card -->
      <g transform="translate(560, 105)">
        <rect width="350" height="255" rx="12" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1" filter="drop-shadow(0 4px 12px rgba(0,0,0,0.06))" />
        <rect x="20" y="20" width="310" height="130" rx="8" fill="${accentColor}" fill-opacity="0.1" />
        <circle cx="175" cy="85" r="34" fill="${accentColor}" fill-opacity="0.25" />
        <text x="175" y="91" text-anchor="middle" font-family="sans-serif" font-size="28">★</text>
        <text x="24" y="180" font-family="sans-serif" font-size="15" font-weight="700" fill="#0F172A">${safeF0}</text>
        <text x="24" y="202" font-family="sans-serif" font-size="13" fill="#64748B">${safeF1}</text>
        <text x="24" y="228" font-family="sans-serif" font-size="13" font-weight="600" fill="#10B981">● Open Today · Fast WhatsApp Response</text>
      </g>
      
      <!-- Feature strip at bottom -->
      <g transform="translate(0, 410)">
        <rect width="300" height="75" rx="10" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1" />
        <text x="20" y="32" font-family="sans-serif" font-size="14" font-weight="700" fill="#01315E">Google Reviews</text>
        <text x="20" y="55" font-family="sans-serif" font-size="13" fill="#EAB308">★★★★★ 4.9 (120+ reviews)</text>

        <rect x="326" y="0" width="300" height="75" rx="10" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1" />
        <text x="346" y="32" font-family="sans-serif" font-size="14" font-weight="700" fill="#01315E">Location &amp; Map</text>
        <text x="346" y="55" font-family="sans-serif" font-size="13" fill="#64748B">Central City Center · Easy Parking</text>

        <rect x="652" y="0" width="300" height="75" rx="10" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1" />
        <text x="672" y="32" font-family="sans-serif" font-size="14" font-weight="700" fill="#01315E">Direct Contact</text>
        <text x="672" y="55" font-family="sans-serif" font-size="13" fill="#64748B">One-Tap WhatsApp &amp; Call</text>
      </g>
      
      <!-- Watermark overlay badge -->
      <g transform="translate(270, 505)">
        <rect width="412" height="42" rx="21" fill="#01315E" fill-opacity="0.95" />
        <circle cx="24" cy="21" r="6" fill="#05B0B5" />
        <text x="40" y="27" font-family="sans-serif" font-size="13" font-weight="600" fill="#FFFFFF">${safeBadge}</text>
      </g>
    </g>
  </svg>
  `;
}

async function generateProjects() {
  const projectList = [
    {
      file: 'dental.png',
      title: 'SmileCare Dental Clinic',
      category: 'Healthcare',
      accentColor: '#008F94',
      features: ['Appointment Booking & Calendar Sync', 'Dr. Profile, Treatments & Google Map'],
      previewBadge: 'Screenshot coming soon — Concept Project'
    },
    {
      file: 'cafe.png',
      title: 'Artisan Brew & Cafe',
      category: 'Food & Cafe',
      accentColor: '#D97706',
      features: ['Handcrafted Coffee Menu & Specials', 'Opening Hours, Photo Gallery & WhatsApp Ordering'],
      previewBadge: 'Screenshot coming soon — Concept Project'
    },
    {
      file: 'restaurant.png',
      title: 'The Spice Orchard Restaurant',
      category: 'Food & Cafe',
      accentColor: '#E11D48',
      features: ['Full Dining Menu & Chef Highlights', 'Online Table Reservation Form & Directions'],
      previewBadge: 'Screenshot coming soon — Concept Project'
    },
    {
      file: 'gym.png',
      title: 'Pulse Strength & Fitness',
      category: 'Fitness',
      accentColor: '#2563EB',
      features: ['Membership Packages & Training Timetable', 'Free Trial Pass Form & Trainer Showcase'],
      previewBadge: 'Screenshot coming soon — Concept Project'
    }
  ];

  for (const item of projectList) {
    const svg = generateMockupSvg(item);
    const dest = path.join(projectsDir, item.file);
    await sharp(Buffer.from(svg)).png().toFile(dest);
    console.log(`Generated ${dest}`);
  }
}

async function run() {
  await generateOgImage();
  await generateProjects();
  console.log('All image assets successfully built!');
}

run();
