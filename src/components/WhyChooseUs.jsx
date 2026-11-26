import React from 'react';
import SectionHeading from './common/SectionHeading';
import { Eye, Smartphone, MessageCircle, BadgePercent } from 'lucide-react';
import { RevealStagger, RevealItem } from './common/Reveal';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Eye,
      title: 'See it before you pay',
      description: 'Free demo website, no obligation. You only move forward if you love the design.'
    },
    {
      icon: Smartphone,
      title: 'Built for mobile',
      description: 'Your customers use phones, so we design for phones first with lightning fast loading.'
    },
    {
      icon: MessageCircle,
      title: 'Direct communication',
      description: 'Talk to us directly on WhatsApp. No ticket queues, call centres, or junior handoffs.'
    },
    {
      icon: BadgePercent,
      title: 'Simple, fair pricing',
      description: 'Clear packages with no hidden charges. You know exactly what you are paying for.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-mint">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="WHY LOCALLEAP"
          title="Small Team."
          highlightText="Real Attention."
          description="We take on a limited number of clients so we can give your business our full focus."
        />

        <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <RevealItem
                key={idx}
                className="card-glow group bg-white p-5 sm:p-7 rounded-2xl border border-mint-border shadow-xs hover:shadow-[0_18px_40px_-14px_rgba(11,44,95,0.28)] hover:-translate-y-1.5 transition-all duration-300 flex items-start gap-4 sm:flex-col sm:gap-0"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-green/12 flex items-center justify-center text-green-dark sm:mb-5 transition-all duration-300 group-hover:bg-green-dark group-hover:text-white group-hover:rotate-6">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="min-w-0">
                  <h3 className="font-heading font-bold text-base sm:text-lg text-navy mb-1 sm:mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#334155] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
