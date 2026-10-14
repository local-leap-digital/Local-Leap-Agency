import React from 'react';
import SectionHeading from './common/SectionHeading';
import { Eye, Smartphone, MessageCircle, BadgePercent } from 'lucide-react';

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
    <section className="py-20 md:py-28 bg-[#F3FAFA]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="WHY LOCALLEAP"
          title="Small Team."
          highlightText="Real Attention."
          description="We take on a limited number of clients so we can give your business our full focus."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-[#E2EEF0] shadow-xs hover:shadow-md hover:-translate-y-1.5 transition-all duration-200 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-[#05B0B5]/12 flex items-center justify-center text-[#008F94] mb-5">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-['Poppins'] font-bold text-lg text-[#01315E] mb-2.5">
                  {item.title}
                </h3>

                <p className="text-sm text-[#334155] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
