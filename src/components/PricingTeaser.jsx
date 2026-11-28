import React from 'react';
import { MessageSquare, Phone, Mail } from 'lucide-react';
import Button from './common/Button';
import { siteConfig } from '../data/site';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function PricingTeaser() {
  if (!siteConfig.showPricing) {
    return null;
  }

  const quoteMessage = `Hi LocalLeap Digital, I'd like an exact quote for a website for my business.`;
  const whatsappUrl = getWhatsAppUrl(quoteMessage);

  return (
    <section className="py-12 bg-offwhite border-b-2 border-ink">
      <div className="max-w-[840px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-mint rounded-2xl border-2 border-green/30 p-6 sm:p-10 text-center ">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-green-dark bg-coral px-3.5 py-1.5 rounded-full mb-3">
            Fair &amp; Transparent Pricing
          </span>
          
          <h2 className="font-heading font-bold text-[24px] sm:text-3xl text-navy mb-3">
            Custom Packages for Every Business
          </h2>

          <p className="text-base sm:text-[17px] text-muted-ink max-w-xl mx-auto mb-6 leading-relaxed">
            {siteConfig.pricingNote}
          </p>

          <div className="flex flex-col xs:flex-row flex-wrap items-stretch xs:items-center justify-center gap-3">
            <Button
              href={whatsappUrl}
              variant="whatsapp"
              size="md"
              external
              icon={MessageSquare}
            >
              Chat on WhatsApp
            </Button>

            <Button
              href={`tel:${siteConfig.phoneTel}`}
              variant="primary"
              size="md"
              icon={Phone}
            >
              Call {siteConfig.phoneDisplay}
            </Button>

            <Button
              href={`mailto:${siteConfig.email}`}
              variant="secondary"
              size="md"
              icon={Mail}
            >
              Email Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
