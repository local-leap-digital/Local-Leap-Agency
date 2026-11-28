import React from 'react';
import { Handshake, Users, ShieldCheck, TrendingUp } from 'lucide-react';
import { RevealStagger, RevealItem } from './common/Reveal';

export default function BenefitsStrip() {
  // Mirrors the highlights strip on the LocalLeap poster
  const benefits = [
    {
      icon: Handshake,
      title: 'Custom Solutions',
      description: 'Built around your business, not a template.'
    },
    {
      icon: Users,
      title: 'For Local Shops, Businesses & Startups',
      description: 'Made for the way local businesses work.'
    },
    {
      icon: ShieldCheck,
      title: 'Modern, Secure Technology',
      description: 'Fast, mobile-friendly and safe by default.'
    },
    {
      icon: TrendingUp,
      title: 'From Idea to Launch',
      description: 'We handle everything, start to finish.'
    }
  ];

  return (
    <section className="py-10 sm:py-12 bg-mint">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <RevealStagger className="bg-offwhite rounded-2xl border-2 border-ink  grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 overflow-hidden">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <RevealItem
                key={index}
                className="group relative p-5 sm:p-6 flex items-center gap-4 hover:bg-mint/50 transition-colors duration-300"
              >
                {/* Gold divider between items (vertical on desktop, horizontal on mobile) */}
                {index > 0 && (
                  <span
                    className={`absolute bg-ink rounded-full top-0 left-6 right-6 h-0.5 xl:left-0 xl:right-auto xl:top-1/4 xl:bottom-1/4 xl:h-auto xl:w-0.5 ${
                      index === 1 ? 'sm:hidden xl:block' : ''
                    }`}
                    aria-hidden="true"
                  />
                )}
                <div className="w-12 h-12 rounded-full bg-coral flex items-center justify-center shrink-0 text-deep-teal transition-all duration-300 group-hover:bg-deep-teal group-hover:text-coral group-hover:-rotate-6">
                  <Icon className="w-6 h-6" strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="font-heading text-xl text-ink leading-none mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-muted-ink leading-relaxed">
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
