import React from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';
import Button from './common/Button';
import { Reveal } from './common/Reveal';
import { siteConfig } from '../data/site';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function FinalCTA() {
  const whatsappUrl = getWhatsAppUrl(siteConfig.messages.freeDemo);

  return (
    <section className="relative py-16 sm:py-20 md:py-28 bg-brand-gradient overflow-hidden text-white">
      {/* Subtle decorative curved path pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-15 overflow-hidden" aria-hidden="true">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-100 200 C 300 50, 700 350, 1300 150"
            stroke="var(--color-gold)"
            strokeWidth="3"
            strokeDasharray="10 10"
          />
          <circle cx="500" cy="180" r="140" fill="var(--color-gold)" opacity="0.12" />
        </svg>
      </div>

      <div className="blob absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gold/20 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="blob blob-delay absolute -bottom-32 -right-24 w-[28rem] h-[28rem] rounded-full bg-green/40 blur-3xl pointer-events-none" aria-hidden="true" />
      <Reveal className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="inline-block text-xs font-bold uppercase tracking-wider text-navy bg-gold px-3.5 py-1.5 rounded-full mb-4 shadow-sm">
          Start Today With Zero Risk
        </span>

        <h2 className="text-[30px] sm:text-[40px] md:text-[46px] font-bold font-heading text-white leading-tight mb-4">
          Ready to Turn Your Idea Into a <span className="text-gold swoosh-underline">Digital Reality?</span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-xl mx-auto mb-8 font-normal">
          Get a free demo website — no cost, no obligation. See your business online before you pay a single rupee.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href={whatsappUrl}
            variant="whatsapp"
            size="lg"
            external
            icon={MessageSquare}
            className="w-full sm:w-auto"
          >
            Chat on WhatsApp
          </Button>

          <Button
            href="#contact"
            variant="light"
            size="lg"
            icon={ArrowRight}
            className="w-full sm:w-auto"
          >
            Request Free Demo
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
