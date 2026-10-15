import React from 'react';
import { Search, ShieldCheck, CalendarCheck2 } from 'lucide-react';

export default function BenefitsStrip() {
  const benefits = [
    {
      icon: Search,
      title: 'Get found on Google',
      description: 'Customers search before they visit. Be there when they do.'
    },
    {
      icon: ShieldCheck,
      title: 'Look professional',
      description: 'A clean website builds trust before the first call.'
    },
    {
      icon: CalendarCheck2,
      title: 'Get more bookings',
      description: 'Let customers book, call or WhatsApp you in one tap.'
    }
  ];

  return (
    <section className="py-12 bg-[#F3FAFA] border-y border-[#E2EEF0]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white p-5 sm:p-6 lg:p-7 rounded-2xl border border-[#E2EEF0] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex items-start md:flex-col lg:flex-row gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#05B0B5]/12 flex items-center justify-center shrink-0 text-[#008F94]">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-['Poppins'] font-bold text-lg text-[#01315E] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#334155] leading-relaxed">
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
