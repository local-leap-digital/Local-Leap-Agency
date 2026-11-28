import React from 'react';
import {
  Globe,
  Code2,
  Smartphone,
  Rocket,
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
import { RevealStagger, RevealItem, Reveal } from './common/Reveal';
import { serviceGroups } from '../data/services';

const iconMap = {
  Globe,
  Code2,
  Smartphone,
  Rocket,
  MapPin,
  ShieldCheck,
  CalendarCheck,
  MessageCircle,
  BellRing,
  Star,
  Bot
};

export default function ServicesSection() {
  const [coreGroup, ...extraGroups] = serviceGroups;

  return (
    <section id="services" className="relative py-16 sm:py-20 md:py-28 bg-offwhite overflow-hidden">
      {/* Soft green & gold glow, echoing the poster background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          eyebrow="OUR SERVICES"
          title="Everything You Need to"
          highlightText="Grow Online"
          description="Websites, web applications and mobile apps for local shops, businesses and startups, plus the digital tools that help you grow."
        />

        {/* Core services: poster-style cards */}
        <RevealStagger className={`grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14 md:mb-20`}>
          {coreGroup.services.map((service) => {
            const Icon = iconMap[service.icon] || Globe;
            return (
              <RevealItem
                key={service.id}
                className="card-glow group relative bg-offwhite rounded-2xl border-2 border-ink   hover:-translate-y-1.5 transition-all duration-200 p-5 sm:p-7 text-left xs:text-center overflow-hidden flex items-start gap-4 xs:block"
              >
                {/* Gold top accent */}
                <div className="absolute top-0 inset-x-0 h-1 bg-coral opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="w-14 h-14 xs:w-16 xs:h-16 shrink-0 xs:mx-auto rounded-2xl bg-mint border-2 border-ink flex items-center justify-center text-navy xs:mb-5 transition-colors group-hover:text-green-dark">
                  <Icon className="w-7 h-7 xs:w-8 xs:h-8 transition-transform group-hover:scale-110 duration-200" strokeWidth={2.2} />
                </div>

                <div className="min-w-0">
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-navy mb-1 xs:mb-2 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-body leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </RevealItem>
            );
          })}
        </RevealStagger>


        <div className="space-y-12 md:space-y-16">
          {extraGroups.map((group) => (
            <Reveal key={group.groupId} className="relative">
              {/* Group Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 mb-6 sm:mb-8 pb-4 border-b-2 border-gold/40">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-heading font-bold text-[22px] sm:text-2xl text-navy">
                    {group.groupTitle}
                  </h3>
                  {group.badge && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gold-soft text-navy border border-gold/40">
                      <Sparkles className="w-3.5 h-3.5 text-gold" />
                      {group.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-ink font-medium">
                  {group.description}
                </p>
              </div>

              {/* Cards Grid */}
              <RevealStagger
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
              >
                {group.services.map((service, idx) => {
                  const Icon = iconMap[service.icon] || Globe;
                  // Stretch a lone last card across the row (2-col tablets, 3-col desktops)
                  const isLoneLastMd = group.services.length % 2 === 1 && idx === group.services.length - 1;
                  const isLoneLastLg = group.services.length % 3 === 1 && idx === group.services.length - 1;
                  return (
                    <RevealItem
                      key={service.id}
                      className={`bg-mint hover:bg-offwhite p-5 sm:p-7 rounded-2xl border-2 border-ink   hover:border-green/40 hover:-translate-y-1.5 transition-all duration-200 group flex flex-col justify-between ${
                        isLoneLastMd ? 'md:col-span-2' : ''
                      } ${isLoneLastLg ? 'lg:col-span-3' : isLoneLastMd ? 'lg:col-span-1' : ''}`}
                    >
                      <div className="flex items-start gap-4 sm:block">
                        {/* Icon Circle */}
                        <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-offwhite group-hover:bg-coral border-2 border-ink flex items-center justify-center text-green-dark sm:mb-5  transition-colors">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110 duration-200" />
                        </div>

                        <div className="min-w-0">
                          {/* Title */}
                          <h4 className="font-heading font-bold text-base sm:text-lg text-navy mb-1 sm:mb-2 group-hover:text-green-dark transition-colors">
                            {service.title}
                          </h4>

                          {/* Description */}
                          <p className="text-sm text-muted-ink leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 sm:mt-5 pt-3 border-t border-mint-border/60 flex items-center justify-between text-xs font-semibold text-green-dark">
                        <span>Included in package</span>
                        <span className="text-gold">✓</span>
                      </div>
                    </RevealItem>
                  );
                })}
              </RevealStagger>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
