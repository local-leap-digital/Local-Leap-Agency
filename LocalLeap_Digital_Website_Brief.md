# LocalLeap Digital — Agency Website Build Brief

> **Instructions for the AI agent:** Read this entire file before writing any code. Build the website exactly as described. Where something is marked `[PLACEHOLDER]`, leave a clearly visible placeholder so the owner can fill it in later. Ask before adding any feature not listed here.

---

## 1. Project overview

**Business:** LocalLeap Digital — a small two-person studio that builds websites and simple automations for local businesses (dentists, clinics, cafes, restaurants, gyms, salons and similar).

**Goal of the website:**
1. Make a local business owner trust us within 10 seconds of opening the link (most will open it on a phone, from a WhatsApp message).
2. Show our sample projects with live links.
3. Get them to message us on WhatsApp or fill a short enquiry form.

**Audience:** Busy local business owners in India — doctors, cafe/restaurant owners, gym owners. Not technical. They care about *more customers, looking professional, and showing up on Google*, not about technology words.

**Tone of writing:** Simple, friendly, confident, honest. Short sentences. No jargon (avoid words like "synergy", "ecosystem", "leverage", "cutting-edge"). Write as if explaining to a doctor who has 30 seconds.

---

## 2. Honesty rules (very important)

We are a new studio. The website must **not** contain anything fake. Do **not** add:

- Fake statistics (e.g. "50+ projects", "100+ happy clients", "5 years experience")
- Fake testimonials, fake client names or fake client logos
- Fake awards, certifications or "as seen in" badges
- Animated counters with made-up numbers

Instead:
- Sample projects are clearly labelled **"Concept Project"**.
- Build trust through: clear process, honest "About us", visible WhatsApp contact, free demo offer, and the quality of the site itself.
- Leave a hidden/commented-out **Testimonials** section in the code that can be switched on later when real reviews exist.

---

## 3. Brand

### Logo
- Logo file: `/public/logo.png` (map-pin icon with upward teal arrow + "LocalLeap" wordmark + "DIGITAL" underneath). The owner will supply this file.
- Also create a placeholder for `/public/logo-icon.png` (icon only, no text) for the favicon and small spaces.
- Header uses a horizontal version: icon on the left, "LocalLeap Digital" text beside it (build this in HTML/CSS using the icon + text, so it stays sharp at small sizes).
- Never stretch, recolour or add effects to the logo.

### Colour palette

| Role | Name | Hex | Use for |
|---|---|---|---|
| Primary | Deep Navy | `#01315E` | Logo, headings, navigation, footer background |
| Secondary | Fresh Teal | `#05B0B5` | Icons, accents, highlights, underlines, small badges |
| Action | Dark Teal | `#008F94` | Buttons, links, interactive elements |
| Soft background | Ice White | `#F3FAFA` | Alternating section backgrounds, cards |
| Body text | Slate | `#334155` | Paragraphs and descriptions |
| Background | Pure White | `#FFFFFF` | Main page background |

**Colour balance:** about 60% white, 25% navy, 10% teal, 5% dark teal.

- Define all colours as CSS variables / Tailwind theme tokens (e.g. `--navy`, `--teal`, `--teal-dark`, `--ice`, `--slate`).
- Text on teal buttons must be white and meet WCAG AA contrast. Use Dark Teal `#008F94` (not Fresh Teal) behind white button text.
- Button hover: slightly darker (`#007479`) with a small lift (translateY -2px) and soft shadow.
- WhatsApp buttons may use WhatsApp green `#25D366` with the WhatsApp icon so people recognise them instantly.

### Typography
- **Headings:** Poppins, SemiBold (600) or Bold (700), colour Deep Navy
- **Body:** Inter, Regular (400) / Medium (500), colour Slate, line-height 1.6–1.7
- **Buttons:** Poppins Medium (500)
- Load from Google Fonts with `display=swap`.
- Sizes (desktop → mobile): H1 56px → 34px, H2 40px → 28px, H3 22px → 19px, body 17px → 16px.

---

## 4. Design direction

**Style:** Clean, modern, spacious, professional, trustworthy. Think "a good private clinic" rather than "flashy creative agency". Lots of white space, rounded corners, soft shadows, crisp alignment.

**Inspiration (for feel only — do NOT copy layouts, text or images):** modern small web-agency sites with a bold hero, service cards with icons, a portfolio grid of website previews, a numbered "how we work" process, and a strong call-to-action band before the footer. The design must be original.

**Visual details:**
- Max content width ~1200px, generous section padding (96px desktop, 64px mobile).
- Cards: white or Ice White background, 16px border radius, 1px border `#E2EEF0`, soft shadow, gentle lift on hover.
- Small teal "eyebrow" labels above section headings (e.g. `OUR SERVICES` in small caps, letter-spaced, teal).
- Use a subtle decorative element tied to the logo: a soft teal curved arrow line or faint map-pin shapes in the hero background (very low opacity, never distracting).
- Icons: a single consistent line-icon set (e.g. Lucide). Teal icons inside soft teal-tinted circles.
- Animations: subtle fade-up on scroll only. No heavy parallax, no auto-playing video, no animated counters. Respect `prefers-reduced-motion`.
- Images: use device mockups (laptop + phone frames) showing screenshots of our sample sites. Until screenshots exist, use neat placeholder frames labelled "Screenshot coming soon".
- No stock photos of random people pretending to be our team.

---

## 5. Tech stack and setup

- **Framework:** React + Vite + Tailwind CSS (or Next.js static export if preferred). Must deploy as a static site to **Vercel or Netlify free tier** with no server costs.
- **Single-page site** with smooth-scroll anchor navigation (all sections on one page). Keep the code structured so a separate `/work` page can be added later.
- **No paid services, no database, no login.**
- **Contact form:** use a free form service (Web3Forms or Formspree). Put the access key in an env variable `VITE_FORM_ACCESS_KEY` with a clear note in the README.
- **Content in data files** so the owner can edit without touching layout code:
  - `src/data/site.js` → agency name, WhatsApp number, email, city, social links, starting price (optional)
  - `src/data/services.js` → service cards
  - `src/data/projects.js` → portfolio projects (see section 7)
  - `src/data/faqs.js` → FAQ questions and answers
- Write a short `README.md` explaining how to run locally, how to edit the data files, how to add a project, and how to deploy to Vercel.

---

## 6. Page structure (in this order)

### 6.1 Header / navigation (sticky)
- Left: logo icon + "LocalLeap Digital".
- Links: Services · Work · How It Works · About · FAQ · Contact
- Right: button **"Chat on WhatsApp"** (opens WhatsApp link).
- On scroll: white background with soft shadow. On mobile: hamburger menu with full-screen or slide-down panel, WhatsApp button kept visible.

### 6.2 Hero
- Eyebrow: `WEBSITES & SMART AUTOMATIONS FOR LOCAL BUSINESSES`
- H1: **Helping Local Businesses Grow Online.** (with "Grow Online" in teal)
- Sub-text: *Professional websites and simple automations that help clinics, cafes, restaurants and gyms get found on Google, look trustworthy, and get more bookings.*
- Buttons: **"Get a Free Demo Website"** (primary, dark teal → scrolls to contact) and **"See Our Work →"** (secondary, outline navy → scrolls to Work).
- Small trust line under buttons (honest): `✓ Free demo before you pay   ✓ Mobile-friendly   ✓ Direct WhatsApp support`
- Right side (desktop) / below (mobile): laptop + phone mockup showing a sample site, with a small floating card like "New appointment request 🔔" to hint at automation.

### 6.3 "Why your business needs this" strip
Three short benefit cards (icon + title + one line):
- **Get found on Google** — Customers search before they visit. Be there when they do.
- **Look professional** — A clean website builds trust before the first call.
- **Get more bookings** — Let customers book, call or WhatsApp you in one tap.

### 6.4 Services (`id="services"`)
Eyebrow `OUR SERVICES` · H2 **Everything You Need to Grow Online**

Two groups of cards.

**Websites**
1. **Business Website** — A fast, mobile-friendly website with your services, photos, reviews, timings and location.
2. **Google Business Profile** — Set up or improve your Google listing so more nearby customers find you.
3. **Hosting & Maintenance** — We keep your website live, secure and updated, so you don't have to.

**Simple Automations** (label this group with a small badge "Save time every day")
4. **Online Booking** — Appointment or table-booking forms that go straight to your Google Calendar or Sheet.
5. **WhatsApp Integration** — One-tap WhatsApp chat, auto-replies and quick replies for common questions.
6. **Reminders & Follow-ups** — Automatic appointment reminders so fewer customers miss visits.
7. **Review Requests** — Automatically ask happy customers for a Google review.
8. **Website FAQ Chatbot** — Answers common questions like timings, prices and location, 24/7.

Each card: icon, title, one-line description. Describe results, not technology.

### 6.5 Industries we work with
Small horizontal row of pill/chip cards with icons: Dental Clinics · Doctors & Clinics · Cafes · Restaurants · Gyms & Fitness · Salons · Local Shops.
Line above: *We specialise in local businesses that serve customers in person.*

### 6.6 Our Work (`id="work"`)
Eyebrow `OUR WORK` · H2 **Sample Projects** · Sub-text: *Concept websites we've designed to show what we can build for businesses like yours.*

- Grid of project cards (3 columns desktop, 2 tablet, 1 mobile), rendered from `src/data/projects.js`.
- Each card: screenshot in a browser/phone frame, category tag (e.g. "Dental Clinic"), project name, one-line description, small **"Concept Project"** badge, and a **"View Live Site ↗"** button (opens in new tab).
- Filter tabs above the grid: All · Healthcare · Food & Cafe · Fitness (generated from the categories in the data file; hide tabs with no projects).
- If the projects list is empty, show a friendly "New projects coming soon" card instead of an empty grid.
- Below the grid, a small note: *Want to see what your business could look like? We'll make a free demo for you.* → button to contact.

### 6.7 How It Works (`id="process"`)
Eyebrow `HOW IT WORKS` · H2 **From Demo to Launch in Simple Steps**

Numbered steps connected by a teal line (horizontal on desktop, vertical on mobile):
1. **Free Demo** — We create a sample website for your business so you can see it before deciding.
2. **Discuss** — We talk about what you need, your services and the features you want.
3. **Confirm** — Approve the plan and pay a 50% advance to begin.
4. **Build & Review** — We build your website and make changes based on your feedback.
5. **Launch** — Your website goes live, and we stay available for support.

### 6.8 Why choose us
Eyebrow `WHY LOCALLEAP` · H2 **Small Team. Real Attention.**
Four cards:
- **See it before you pay** — Free demo website, no obligation.
- **Built for mobile** — Your customers use phones, so we design for phones first.
- **Direct communication** — Talk to us directly on WhatsApp. No call centres.
- **Simple, fair pricing** — Clear packages with no hidden charges.

### 6.9 About us (`id="about"`)
Two-column: left a simple illustration or the logo icon on an Ice White panel; right the text.

H2 **About LocalLeap Digital**
> LocalLeap Digital is a small studio of two people with one goal: helping local businesses get the online presence they deserve. One of us works directly with clients to understand what your business needs. The other builds your website and automations. Because we're small, you always talk to the people actually doing the work.

Small row of two "team cards": `[PLACEHOLDER: Name] — Client Relations` and `[PLACEHOLDER: Name] — Developer`. Photos optional; if no photo, show initials in a teal circle.

### 6.10 Pricing teaser (optional — controlled by a flag in `site.js`)
If `showPricing: true`: a single clean card — **Websites starting from ₹`[PLACEHOLDER]`** · *Every business is different. Message us for an exact quote.* → WhatsApp button.
If `false`: hide the section entirely. Default to `false`.

### 6.11 FAQ (`id="faq"`)
Accordion, one open at a time, from `src/data/faqs.js`:
- **How much does a website cost?** — It depends on the pages and features you need. Message us on WhatsApp and we'll give you a clear quote, usually within a day.
- **How long does it take?** — Most business websites are ready within `[PLACEHOLDER: X]` days after we receive your details.
- **Do I need to know anything technical?** — No. We handle everything — design, setup, hosting and updates.
- **Can I see a demo first?** — Yes. We make a free demo website for your business before you decide anything.
- **Will my website work on mobile?** — Yes. Every website we build is designed for phones first.
- **Is there a yearly charge?** — Yes, a small yearly fee covers hosting, security and minor updates. We'll explain it clearly upfront.
- **Can I make changes later?** — Yes. Small updates are part of maintenance, and we're always a WhatsApp message away.

### 6.12 Contact (`id="contact"`)
Eyebrow `GET IN TOUCH` · H2 **Let's Build Your Website**
Sub-text: *Tell us about your business and we'll create a free demo website for you.*

Two columns:
- **Left — contact details:** big WhatsApp button, phone (click-to-call), email (mailto), city `[PLACEHOLDER: City]`, working hours.
- **Right — enquiry form:** Name · Business name · Business type (dropdown: Dental Clinic, Clinic/Doctor, Cafe, Restaurant, Gym, Salon, Other) · Phone/WhatsApp number · Message (optional) · **"Request Free Demo"** button.
  - Client-side validation, clear success message ("Thanks! We'll message you on WhatsApp soon."), clear error message, loading state on the button, spam honeypot field.

### 6.13 Final CTA band
Full-width Deep Navy background with a faint teal curved-arrow pattern.
H2 (white): **Ready to Take Your Business Online?** · Sub-text (light): *Get a free demo website — no cost, no obligation.* · Button: **"Chat on WhatsApp"**.

### 6.14 Footer
Deep Navy background, white/light text.
- Column 1: logo (white version or icon + white text), one-line description: *Websites and simple automations for local businesses.*
- Column 2: Quick links (same as nav).
- Column 3: Services (short list).
- Column 4: Contact (WhatsApp, email, city) + social icons (Instagram, LinkedIn — placeholders).
- Bottom bar: `© {current year} LocalLeap Digital. All rights reserved.`

### 6.15 Floating WhatsApp button
Fixed bottom-right on all screen sizes, green circle with WhatsApp icon, small "Chat with us" tooltip on desktop hover. Must not cover the footer content or form button on mobile.

---

## 7. Portfolio data format (for adding sample projects later)

`src/data/projects.js` should export an array like this. Start with these four entries, using placeholder links and placeholder images:

```js
export const projects = [
  {
    id: "dental",
    name: "[PLACEHOLDER] Dental Clinic",
    category: "Healthcare",
    tag: "Dental Clinic",
    description: "Appointment booking, services, doctor profile and Google Map.",
    image: "/projects/dental.png",
    liveUrl: "https://example.vercel.app",
    isConcept: true,
    featured: true
  },
  {
    id: "cafe",
    name: "[PLACEHOLDER] Cafe",
    category: "Food & Cafe",
    tag: "Cafe",
    description: "Menu, gallery, opening hours and WhatsApp ordering.",
    image: "/projects/cafe.png",
    liveUrl: "https://example.vercel.app",
    isConcept: true,
    featured: false
  },
  {
    id: "restaurant",
    name: "[PLACEHOLDER] Restaurant",
    category: "Food & Cafe",
    tag: "Restaurant",
    description: "Full menu, table booking form and customer reviews.",
    image: "/projects/restaurant.png",
    liveUrl: "https://example.vercel.app",
    isConcept: true,
    featured: false
  },
  {
    id: "gym",
    name: "[PLACEHOLDER] Fitness Gym",
    category: "Fitness",
    tag: "Gym",
    description: "Membership plans, trainers, class timetable and free-trial form.",
    image: "/projects/gym.png",
    liveUrl: "https://example.vercel.app",
    isConcept: true,
    featured: false
  }
];
```

- When `isConcept` is `true`, show the "Concept Project" badge. Real client projects later will set it to `false`.
- `featured: true` projects can also appear in the hero mockup.
- Adding a new project should only require adding one object to this file and one screenshot to `/public/projects/`.

**Later prompt to use when sample sites are ready:**
> "Update `src/data/projects.js`: replace the placeholder for `dental` with name `___`, live URL `___`, and screenshot `/public/projects/dental.png` (I've added the file). Do the same for cafe, restaurant and gym. Don't change any layout code."

---

## 8. WhatsApp links

- Store the number in `site.js` as `whatsappNumber: "91XXXXXXXXXX"` (country code, no + or spaces) — `[PLACEHOLDER]`.
- All WhatsApp buttons use: `https://wa.me/<number>?text=<encoded message>`
- Default pre-filled message: *"Hi LocalLeap Digital, I'd like to know more about getting a website for my business."*
- The "Get a Free Demo" buttons can pre-fill: *"Hi, I'd like a free demo website for my business. Business name: "*
- Open in a new tab; works on mobile (opens the app) and desktop (opens WhatsApp Web).

---

## 9. SEO and sharing

- `<title>`: `LocalLeap Digital — Websites & Automations for Local Businesses`
- Meta description: *LocalLeap Digital builds professional, mobile-friendly websites and simple automations for clinics, cafes, restaurants and gyms. Get a free demo website.*
- Open Graph + Twitter card tags with a 1200×630 share image placeholder at `/public/og-image.png` (navy background, logo, tagline). This is what shows when the link is shared on WhatsApp, so it matters.
- Favicon from the logo icon (`favicon.ico`, `apple-touch-icon.png`).
- One `<h1>` only; proper heading order; descriptive `alt` text on all images.
- Add `LocalBusiness` / `ProfessionalService` JSON-LD with placeholder contact details.
- `robots.txt` and `sitemap.xml`.

---

## 10. Quality requirements

- **Mobile first.** Test at 360px, 390px, 768px, 1024px and 1440px. No horizontal scrolling at any size.
- **Fast:** Lighthouse Performance 90+ on mobile. Compress images (WebP), lazy-load below-the-fold images, avoid heavy libraries.
- **Accessible:** Lighthouse Accessibility 95+. Keyboard navigation works, visible focus states (teal outline), ARIA labels on icon-only buttons, colour contrast passes AA.
- **Every link and button works.** No `href="#"` left in the final build except intentional placeholders, which must be listed in the README.
- Clean, commented code with reusable components (`Button`, `SectionHeading`, `ServiceCard`, `ProjectCard`, `Accordion`, etc.).

---

## 11. Final checklist for the agent

Before finishing, confirm:
- [ ] All sections from section 6 built in order, with correct `id`s for navigation
- [ ] Brand colours and fonts applied exactly as in section 3
- [ ] No fake stats, testimonials, logos or claims anywhere
- [ ] All sample projects labelled "Concept Project"
- [ ] Projects, services, FAQs and contact details come from data files
- [ ] WhatsApp links use the number from `site.js` with pre-filled messages
- [ ] Contact form works with the free form service and shows success/error states
- [ ] Fully responsive and tested at the listed widths
- [ ] SEO tags, OG image placeholder, favicon, sitemap and robots.txt added
- [ ] README explains editing, adding projects and deploying to Vercel/Netlify
- [ ] List of all remaining `[PLACEHOLDER]` items provided at the end
