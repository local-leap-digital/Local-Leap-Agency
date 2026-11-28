import React from 'react';
import AnimatedCounter from './common/AnimatedCounter';
import { RevealStagger, RevealItem } from './common/Reveal';
import { projects } from '../data/projects';

// Only honest, verifiable numbers
const stats = [
  { value: projects.length, suffix: '+', label: 'Sample websites designed' },
  { value: 5, suffix: '', label: 'Simple steps, demo to launch' },
  { value: 0, prefix: '₹', suffix: '', label: 'Cost of your free demo' },
  { value: 100, suffix: '%', label: 'Mobile-first designs' },
];

export default function StatsBand() {
  return (
    <section className="relative bg-deep-teal text-offwhite overflow-hidden">
      <RevealStagger className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
        {stats.map((s) => (
          <RevealItem key={s.label} className="text-center lg:border-l lg:first:border-l-0 border-coral/25">
            <div className="font-heading text-5xl sm:text-6xl md:text-7xl tracking-[-0.01em] leading-none text-coral">
              <AnimatedCounter value={s.value} prefix={s.prefix} suffix={s.suffix} />
            </div>
            <p className="mt-2 text-xs sm:text-sm uppercase tracking-[0.16em] text-offwhite/70 font-medium">
              {s.label}
            </p>
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}
