import React from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';
import Button from './common/Button';
import { siteConfig } from '../data/site';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function FinalCTA() {
  const whatsappUrl = getWhatsAppUrl(siteConfig.messages.freeDemo);

  return (
    <section className="relative py-20 md:py-28 bg-[#01315E] overflow-hidden text-white">
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
            stroke="#05B0B5"
            strokeWidth="3"
            strokeDasharray="10 10"
          />
          <circle cx="500" cy="180" r="140" fill="#05B0B5" opacity="0.1" />
        </svg>
      </div>

      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#05B0B5] bg-[#05B0B5]/15 px-3.5 py-1.5 rounded-full mb-4 border border-[#05B0B5]/30">
          Start Today With Zero Risk
        </span>

        <h2 className="text-30px sm:text-40px md:text-[46px] font-bold font-['Poppins'] text-white leading-tight mb-4">
          Ready to Take Your Business Online?
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-xl mx-auto mb-8 font-normal">
          Get a free demo website — no cost, no obligation. See your business online before you pay a single rupee.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href={whatsappUrl}
            variant="whatsapp"
            size="lg"
            external
            icon={MessageSquare}
          >
            Chat on WhatsApp
          </Button>

          <Button
            href="#contact"
            variant="light"
            size="lg"
            icon={ArrowRight}
          >
            Request Free Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
