import React from 'react';
import {
  Smile,
  Stethoscope,
  Coffee,
  Utensils,
  Dumbbell,
  Scissors,
  Store
} from 'lucide-react';
import { industries } from '../data/services';
import { Reveal } from './common/Reveal';

const iconMap = {
  Smile,
  Stethoscope,
  Coffee,
  Utensils,
  Dumbbell,
  Scissors,
  Store
};

function Pill({ ind }) {
  const Icon = iconMap[ind.icon] || Store;
  return (
    <div className="shrink-0 inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-offwhite border-2 border-ink text-sm sm:text-[15px] font-semibold text-navy  hover:border-green hover:text-green-dark transition-colors duration-200 cursor-default">
      <div className="w-7 h-7 rounded-full bg-coral flex items-center justify-center text-green-dark">
        <Icon className="w-4 h-4" />
      </div>
      <span className="whitespace-nowrap">{ind.name}</span>
    </div>
  );
}

export default function IndustriesStrip() {
  // Repeat the list so one half always fills wide screens, then duplicate for a seamless loop
  const half = [...industries, ...industries];

  return (
    <section className="py-12 md:py-16 bg-offwhite border-y-2 border-ink overflow-hidden">
      <Reveal className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-muted-ink">
          We specialise in local businesses that serve customers in person
        </p>
      </Reveal>

      <div className="marquee" aria-label="Industries we work with">
        <div className="marquee-track">
          {[...half, ...half].map((ind, i) => (
            <div key={`${ind.name}-${i}`} className="pr-4" aria-hidden={i >= industries.length ? 'true' : undefined}>
              <Pill ind={ind} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
