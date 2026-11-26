import React from 'react';
import { Reveal } from './Reveal';

/**
 * Reusable SectionHeading component.
 * Displays a green pill eyebrow (poster style), H2 heading, and optional descriptive subtext.
 */
export default function SectionHeading({
  eyebrow,
  title,
  highlightText,
  description,
  align = 'center',
  className = '',
  light = false
}) {
  const isCenter = align === 'center';

  return (
    <Reveal
      className={`mb-10 md:mb-16 ${
        isCenter ? 'text-center mx-auto max-w-2xl' : 'text-left max-w-2xl'
      } ${className}`}
    >
      {eyebrow && (
        <span
          className={`inline-block text-xs md:text-sm font-bold uppercase tracking-wider mb-4 px-4 py-1.5 rounded-full shadow-sm ${
            light
              ? 'bg-gold text-navy'
              : 'bg-gradient-to-r from-forest to-green-dark text-white'
          }`}
        >
          {eyebrow}
        </span>
      )}

      <h2
        className={`text-[28px] sm:text-[34px] md:text-[40px] font-bold font-heading leading-[1.2] tracking-tight ${
          light ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
        {highlightText && (
          <>
            {' '}
            <span className={`swoosh-underline ${light ? 'text-gold' : 'text-green'}`}>{highlightText}</span>
          </>
        )}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base md:text-[17px] leading-relaxed ${
            light ? 'text-slate-300' : 'text-[#334155]'
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
