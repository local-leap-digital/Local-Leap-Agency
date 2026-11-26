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
    <section className="relative bg-navy-dark text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-white opacity-[0.05] pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(31,160,60,0.25),transparent_65%)] pointer-events-none" aria-hidden="true" />
      <RevealStagger className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
        {stats.map((s) => (
          <RevealItem key={s.label} className="text-center lg:border-l lg:first:border-l-0 border-white/10">
            <div className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-gradient-brand">
              <AnimatedCounter value={s.value} prefix={s.prefix} suffix={s.suffix} />
            </div>
            <p className="mt-2 text-xs sm:text-sm uppercase tracking-[0.16em] text-white/60 font-semibold">
              {s.label}
            </p>
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}
