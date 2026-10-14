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
    <section className="py-12 bg-white border-b border-[#E2EEF0]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm md:text-base font-medium text-slate-500 mb-6 italic">
          We specialise in local businesses that serve customers in person.
        </p>

        {/* Scrollable / wrapped pill chips */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {industries.map((ind) => {
            const Icon = iconMap[ind.icon] || Store;
            return (
              <div
                key={ind.name}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#F3FAFA] border border-[#E2EEF0] text-sm font-medium text-[#01315E] hover:border-[#05B0B5] hover:bg-white hover:shadow-xs transition-all duration-200 cursor-default"
              >
                <div className="w-6 h-6 rounded-full bg-[#05B0B5]/15 flex items-center justify-center text-[#008F94]">
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
