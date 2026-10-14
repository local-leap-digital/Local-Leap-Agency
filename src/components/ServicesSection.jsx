import React from 'react';
import {
  Globe,
  MapPin,
  ShieldCheck,
  CalendarCheck,
  MessageCircle,
  BellRing,
  Star,
  Bot,
  Sparkles
} from 'lucide-react';
import SectionHeading from './common/SectionHeading';
import { serviceGroups } from '../data/services';

const iconMap = {
  Globe,
  MapPin,
  ShieldCheck,
  CalendarCheck,
  MessageCircle,
  BellRing,
  Star,
  Bot
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="OUR SERVICES"
          title="Everything You Need to"
          highlightText="Grow Online"
          description="We take care of your complete online presence so you can focus on running your business and serving your customers."
        />

        <div className="space-y-16">
          {serviceGroups.map((group) => (
            <div key={group.groupId} className="relative">
              {/* Group Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-[#E2EEF0]">
                <div className="flex items-center gap-3">
                  <h3 className="font-['Poppins'] font-bold text-22px sm:text-2xl text-[#01315E]">
                    {group.groupTitle}
                  </h3>
                  {group.badge && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#05B0B5]/15 text-[#008F94] border border-[#05B0B5]/25">
                      <Sparkles className="w-3.5 h-3.5" />
                      {group.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-500 font-medium">
                  {group.description}
                </p>
              </div>

              {/* Cards Grid */}
              <div
                className={`grid grid-cols-1 md:grid-cols-2 ${
                  group.services.length === 3
                    ? 'lg:grid-cols-3'
                    : 'lg:grid-cols-3'
                } gap-6`}
              >
                {group.services.map((service) => {
                  const Icon = iconMap[service.icon] || Globe;
                  return (
                    <div
                      key={service.id}
                      className="bg-[#F3FAFA] hover:bg-white p-6 sm:p-7 rounded-2xl border border-[#E2EEF0] shadow-xs hover:shadow-md hover:-translate-y-1.5 transition-all duration-200 group flex flex-col justify-between"
                    >
                      <div>
                        {/* Icon Circle */}
                        <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-[#05B0B5]/12 border border-[#E2EEF0] flex items-center justify-center text-[#008F94] mb-5 shadow-2xs transition-colors">
                          <Icon className="w-6 h-6 transition-transform group-hover:scale-110 duration-200" />
                        </div>

                        {/* Title */}
                        <h4 className="font-['Poppins'] font-bold text-lg text-[#01315E] mb-2 group-hover:text-[#008F94] transition-colors">
                          {service.title}
                        </h4>

                        {/* Description */}
                        <p className="text-sm text-[#334155] leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      <div className="mt-5 pt-3 border-t border-[#E2EEF0]/60 flex items-center justify-between text-xs font-semibold text-[#008F94]">
                        <span>Included in package</span>
                        <span className="text-[#05B0B5]">✓</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
