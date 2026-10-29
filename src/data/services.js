/**
 * Services data for LocalLeap Digital.
 * Core services match the printed poster; the second group covers
 * the digital growth tools and automations bundled with them.
 * Uses Lucide icon names for easy matching.
 */

export const serviceGroups = [
  {
    groupId: "core",
    groupTitle: "What We Build",
    badge: null,
    description: "From a simple shop website to a full mobile app, built around your idea.",
    services: [
      {
        id: "website-development",
        title: "Website Development",
        description: "Custom, fast and mobile-friendly websites for local businesses, with your services, photos, reviews, timings and location.",
        icon: "Globe"
      },
      {
        id: "web-applications",
        title: "Web Applications",
        description: "Powerful and scalable web apps: booking systems, dashboards, portals and tools built for how your business works.",
        icon: "Code2"
      },
      {
        id: "mobile-applications",
        title: "Mobile Applications",
        description: "Android and iOS apps for your ideas, designed to be simple for your customers and easy for you to manage.",
        icon: "Smartphone"
      },
      {
        id: "digital-solutions",
        title: "Digital Solutions",
        description: "Grow your business online with Google presence, WhatsApp, automations and ongoing support, all from one team.",
        icon: "Rocket"
      }
    ]
  },
  {
    groupId: "growth",
    groupTitle: "Digital Solutions & Automations",
    badge: null,
    description: "Get found online, eliminate repetitive tasks and never miss a potential customer.",
    services: [
      {
        id: "google-business-profile",
        title: "Google Business Profile",
        description: "Set up or improve your Google listing so more nearby customers find you on Search and Maps.",
        icon: "MapPin"
      },
      {
        id: "hosting-maintenance",
        title: "Hosting & Maintenance",
        description: "We keep your website live, secure, fast, and updated, so you never have to worry about tech.",
        icon: "ShieldCheck"
      },
      {
        id: "online-booking",
        title: "Online Booking",
        description: "Appointment or table-booking forms that go straight to your Google Calendar or Sheet.",
        icon: "CalendarCheck"
      },
      {
        id: "whatsapp-integration",
        title: "WhatsApp Integration",
        description: "One-tap WhatsApp chat, auto-replies and quick replies for your common customer questions.",
        icon: "MessageCircle"
      },
      {
        id: "reminders-followups",
        title: "Reminders & Follow-ups",
        description: "Automatic appointment reminders so fewer customers miss visits or show up late.",
        icon: "BellRing"
      },
      {
        id: "review-requests",
        title: "Review Requests",
        description: "Automatically ask happy customers for a 5-star Google review right after their visit.",
        icon: "Star"
      },
      {
        id: "faq-chatbot",
        title: "Website FAQ Chatbot",
        description: "Answers common customer questions like timings, prices and location, 24 hours a day.",
        icon: "Bot"
      }
    ]
  }
];

export const industries = [
  { name: "Dental Clinics", icon: "Smile" },
  { name: "Doctors & Clinics", icon: "Stethoscope" },
  { name: "Cafes", icon: "Coffee" },
  { name: "Restaurants", icon: "Utensils" },
  { name: "Gyms & Fitness", icon: "Dumbbell" },
  { name: "Salons", icon: "Scissors" },
  { name: "Local Shops", icon: "Store" }
];
