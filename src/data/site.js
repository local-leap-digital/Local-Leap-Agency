/**
 * Site configuration and business details for LocalLeap Digital.
 * Updated with official owner contact details and studio profile.
 */

export const siteConfig = {
  name: "LocalLeap Digital",
  tagline: "Websites & Smart Automations for Local Businesses",
  description:
    "Professional websites and simple automations that help clinics, cafes, restaurants and gyms get found on Google, look trustworthy, and get more bookings.",
  
  // WhatsApp Number: country code + 10 digits without + or spaces
  whatsappNumber: "918767807414",
  
  // Contact details
  phoneDisplay: "+91 87678 07414",
  phoneTel: "+918767807414",
  email: "localleap.business@gmail.com",
  city: "Kolhapur",
  workingHours: "Mon – Sat: 10:00 AM – 7:00 PM",

  // Pricing Teaser Flag & Note
  showPricing: true,
  pricingNote: "Every business is different. Call or WhatsApp us at +91 87678 07414 or email us at localleap.business@gmail.com for an exact, transparent quote.",

  // Pre-filled WhatsApp messages
  messages: {
    general: "Hi LocalLeap Digital, I'd like to know more about getting a website for my business.",
    freeDemo: "Hi, I'd like a free demo website for my business. Business name: ",
  },

  // Social Links
  socialLinks: {
    instagram: "https://instagram.com/localleapdigital",
    linkedin: "https://linkedin.com/company/localleapdigital",
  },

  // Team Details
  team: [
    {
      name: "Shreyash Kamble",
      role: "Client Relations",
      bio: "Works directly with business owners to understand needs, guide features, and ensure an effortless experience.",
      initials: "SK"
    },
    {
      name: "Shreyas Kamble",
      role: "Developer",
      bio: "Crafts clean, high-performance websites and connects seamless calendar & WhatsApp automations.",
      initials: "SK"
    }
  ],

  // Form service endpoint access key
  // Set in .env as VITE_FORM_ACCESS_KEY (Web3Forms access key)
  formAccessKey: import.meta.env.VITE_FORM_ACCESS_KEY || "4e4acd49-f7aa-4bd6-a9f0-6cdb3c31aba1"
};
