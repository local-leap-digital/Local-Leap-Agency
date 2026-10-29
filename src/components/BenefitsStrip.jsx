import React from 'react';
import { Handshake, Users, ShieldCheck, TrendingUp } from 'lucide-react';

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
    <section className="py-10 sm:py-12 bg-gradient-to-b from-mint to-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-mint-border shadow-[0_10px_30px_-12px_rgba(11,44,95,0.18)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 overflow-hidden">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative p-5 sm:p-6 flex items-center gap-4"
              >
                {/* Gold divider between items (vertical on desktop, horizontal on mobile) */}
                {index > 0 && (
                  <span
                    className={`absolute bg-gold/70 rounded-full top-0 left-6 right-6 h-0.5 lg:left-0 lg:right-auto lg:top-1/4 lg:bottom-1/4 lg:h-auto lg:w-0.5 ${
                      index === 1 ? 'sm:hidden lg:block' : ''
                    }`}
                    aria-hidden="true"
                  />
                )}
                <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center shrink-0 text-navy">
                  <Icon className="w-6 h-6" strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-[15px] text-navy leading-snug mb-0.5">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
