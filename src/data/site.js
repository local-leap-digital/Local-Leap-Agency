/**
 * Site configuration and business details for LocalLeap Digital.
 * Updated with official owner contact details and studio profile.
 */

export const siteConfig = {
  name: "LocalLeap Digital",
  tagline: "Your Vision. Our Technology. Real Results.",
  description:
    "Customized websites, web applications and mobile apps for local shops, businesses and startups. From idea to launch, we build modern digital solutions that help you grow.",
  
  // WhatsApp Number: country code + 10 digits without + or spaces
  whatsappNumber: "918767807414",
  
  // Contact details
  phoneDisplay: "+91 87678 07414",
  phoneTel: "+918767807414",
  phones: [
    { display: "+91 87660 36310", tel: "+918766036310" },
    { display: "+91 87678 07414", tel: "+918767807414" }
  ],
  email: "localleap.business@gmail.com",
  city: "Kolhapur",
  address: "Phulewadi, Ring Road, Kolhapur",
  workingHours: "Mon – Sat: 10:00 AM – 7:00 PM",

  // Pricing Teaser Flag & Note
  showPricing: true,
  pricingNote: "Every business is different. Call us at +91 87660 36310 / +91 87678 07414, WhatsApp us or email us at localleap.business@gmail.com for an exact, transparent quote.",

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

  // Form service endpoint access key
  // Set in .env as VITE_FORM_ACCESS_KEY (Web3Forms access key)
  formAccessKey: import.meta.env.VITE_FORM_ACCESS_KEY || "4e4acd49-f7aa-4bd6-a9f0-6cdb3c31aba1"
};
