import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BenefitsStrip from './components/BenefitsStrip';
import ServicesSection from './components/ServicesSection';
import IndustriesStrip from './components/IndustriesStrip';
import WorkSection from './components/WorkSection';
import StatsBand from './components/StatsBand';
import ProcessSection from './components/ProcessSection';
import WhyChooseUs from './components/WhyChooseUs';
import AboutSection from './components/AboutSection';
import PricingTeaser from './components/PricingTeaser';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div id="top" className="min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-green/20 selection:text-navy">
      {/* 6.1 Header / Navigation (Sticky) */}
      <Navbar />

      <main className="flex-1">
        {/* 6.2 Hero Section */}
        <Hero />

        {/* 6.3 "Why your business needs this" strip */}
        <BenefitsStrip />

        {/* 6.4 Services (id="services") */}
        <ServicesSection />

        {/* 6.5 Industries we work with (scrolling marquee) */}
        <IndustriesStrip />

        {/* 6.6 Our Work (id="work") */}
        <WorkSection />

        {/* Animated stats band */}
        <StatsBand />

        {/* 6.7 How It Works (id="process") */}
        <ProcessSection />

        {/* 6.8 Why choose us */}
        <WhyChooseUs />

        {/* 6.9 About us (id="about") */}
        <AboutSection />

        {/* 6.10 Pricing teaser (optional — controlled by showPricing in site.js) */}
        <PricingTeaser />

        {/* Testimonials (Hidden until real reviews exist, as per Section 2) */}
        <TestimonialsSection />

        {/* 6.12 Contact (id="contact") */}
        <ContactSection />

        {/* 6.13 Final CTA band */}
        <FinalCTA />

        {/* FAQ (id="faq"), last section above the footer */}
        <FAQSection />
      </main>

      {/* 6.14 Footer */}
      <Footer />

      {/* 6.15 Floating WhatsApp button */}
      <FloatingWhatsApp />
    </div>
  );
}
