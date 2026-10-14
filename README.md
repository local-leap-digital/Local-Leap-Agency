# LocalLeap Digital — Agency Website

Official marketing and lead-generation website for **LocalLeap Digital**, a two-person studio building high-performance websites and simple automations for local businesses (clinics, cafes, restaurants, gyms, and salons).

---

## 🚀 Quick Start (Running Locally)

### 1. Install dependencies
```bash
npm install
```

### 2. Configure Environment (Optional)
Copy `.env.example` to `.env` and set your free contact form access key:
```bash
cp .env.example .env
```
Obtain a free access key at [Web3Forms](https://web3forms.com) (no backend or registration required). If omitted, the form runs in instant client demo mode.

### 3. Start local development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
```bash
npm run build
```
Creates a static bundle in `/dist` ready for static deployment.

---

## 📁 Content & Data Files

All website copy, contact information, portfolio samples, and FAQs are decoupled from layout code in `src/data/`:

| File | Purpose |
|---|---|
| [`src/data/site.js`](file:///src/data/site.js) | Agency contact details, WhatsApp number, city, email, team placeholders, social links, and the `showPricing` toggle. |
| [`src/data/services.js`](file:///src/data/services.js) | Services list split into "Websites" and "Simple Automations" ("Save time every day"), plus local industry pill tags. |
| [`src/data/projects.js`](file:///src/data/projects.js) | Portfolio project data (name, category, description, screenshot image, live URL, `isConcept` badge). |
| [`src/data/faqs.js`](file:///src/data/faqs.js) | Frequently Asked Questions rendered in the single-open accordion. |

---

## 🎨 How to Add a New Portfolio Project

1. Add your project screenshot to the [`public/projects/`](file:///public/projects/) folder (e.g. `/public/projects/my-clinic.png`).
2. Open [`src/data/projects.js`](file:///src/data/projects.js) and add a new item to the `projects` array:

```js
{
  id: "my-clinic",
  name: "Apex Dental Studio",
  category: "Healthcare",     // Matches filter tabs: "Healthcare", "Food & Cafe", "Fitness", etc.
  tag: "Dental Clinic",
  description: "Instant WhatsApp booking, doctor qualifications, and Google Maps integration.",
  image: "/projects/my-clinic.png",
  liveUrl: "https://apexdental.example.com",
  isConcept: false,           // Set to false for real client work, or true for concept demo
  featured: false
}
```

---

## 🌐 Deploying to Vercel or Netlify (Free Tier)

This website is a 100% static React app with zero server dependencies or database requirements.

### Deploying to Vercel
1. Push this repository to GitHub or GitLab.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import this repository.
4. Framework Preset: **Vite** (auto-detected).
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. (Optional) Under **Environment Variables**, add:
   - `VITE_FORM_ACCESS_KEY` = your Web3Forms access key.
8. Click **Deploy**.

### Deploying to Netlify
1. Sign in to [Netlify](https://netlify.com) and click **"Add new site"** → **"Import an existing project"**.
2. Select your repository.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. (Optional) Add `VITE_FORM_ACCESS_KEY` in Site Configuration → Environment Variables.
6. Click **Deploy Site**.

---

## 📝 Remaining `[PLACEHOLDER]` Checklist

When you are ready to personalize the site for your launch, update the following placeholders:

- [x] **WhatsApp Number**: Configured (+91 8767807414)
- [x] **Phone Number**: Configured (+91 87678 07414)
- [x] **Email Address**: Configured (localleap.business@gmail.com)
- [x] **City / Location**: Configured (Kolhapur)
- [x] **Team Members**: Configured (Shreyash Kamble: Client Relations, Shreyas Kamble: Developer)
- [x] **Web3Forms Key**: Configured (`.env` and `src/data/site.js`)
- [x] **Pricing Note**: Configured with direct Call, WhatsApp, and Mail buttons
- [ ] **FAQ Turnaround Days**: In `src/data/faqs.js` (`[PLACEHOLDER: X] days`)
- [ ] **Real Sample Sites / Projects**: In `src/data/projects.js` (replace concept projects with real client links & screenshots as they become available)
- [ ] **Testimonials (Future)**: When genuine client reviews exist, populate `realTestimonials` in `src/components/TestimonialsSection.jsx`
