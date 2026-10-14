/**
 * Services data for LocalLeap Digital.
 * Divided into two groups: Websites and Simple Automations.
 * Uses Lucide icon names for easy matching.
 */

export const serviceGroups = [
  {
    groupId: "websites",
    groupTitle: "Websites",
    badge: null,
    description: "Modern, search-friendly websites tailored for local businesses.",
    services: [
      {
        id: "business-website",
        title: "Business Website",
        description: "A fast, mobile-friendly website with your services, photos, reviews, timings and location.",
        icon: "Globe"
      },
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
      }
    ]
  },
  {
    groupId: "automations",
    groupTitle: "Simple Automations",
    badge: "Save time every day",
    description: "Eliminate manual repetitive tasks and never miss a potential customer.",
    services: [
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
