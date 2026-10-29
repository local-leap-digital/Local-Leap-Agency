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

const iconMap = {
  Smile,
  Stethoscope,
  Coffee,
  Utensils,
  Dumbbell,
  Scissors,
  Store
};

export default function IndustriesStrip() {
  return (
    <section className="py-12 bg-white border-b border-mint-border">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm md:text-base font-medium text-slate-500 mb-6 italic">
          We specialise in local businesses that serve customers in person.
        </p>

        {/* Scrollable / wrapped pill chips */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
          {industries.map((ind) => {
            const Icon = iconMap[ind.icon] || Store;
            return (
              <div
                key={ind.name}
                className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-mint border border-mint-border text-sm font-medium text-navy hover:border-green hover:bg-white hover:shadow-xs transition-all duration-200 cursor-default"
              >
                <div className="w-6 h-6 rounded-full bg-green/15 flex items-center justify-center text-green-dark">
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span>{ind.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
