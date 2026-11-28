import React from 'react';
import { MessageSquare } from 'lucide-react';
import Button from './common/Button';
import { Reveal } from './common/Reveal';
import { siteConfig } from '../data/site';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function FinalCTA() {
  const whatsappUrl = getWhatsAppUrl(siteConfig.messages.freeDemo);

  return (
    <section className="relative py-20 sm:py-24 md:py-32 bg-deep-teal overflow-hidden text-offwhite">
      {/* Large rotated coral asterisk, upper right (DESIGN.md footer CTA) */}
      <span
        className="asterisk-mark absolute -top-6 right-2 sm:right-10 md:right-20 text-[160px] sm:text-[220px] md:text-[280px] pointer-events-none"
        aria-hidden="true"
      >
        *
      </span>

      <Reveal className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="inline-block font-sans text-xs font-medium uppercase tracking-[0.02em] text-deep-teal bg-coral px-3.5 py-1.5 rounded-full mb-6">
          Start Today With Zero Risk
        </span>

        <h2 className="text-[40px] sm:text-[56px] md:text-[64px] font-heading uppercase text-coral leading-none tracking-[-0.01em] mb-6">
          Ready to Turn Your Idea Into a <span className="text-offwhite">Digital Reality?</span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-offwhite/80 max-w-xl mx-auto mb-10 font-normal">
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
            className="w-full sm:w-auto"
          >
            Request Free Demo
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
