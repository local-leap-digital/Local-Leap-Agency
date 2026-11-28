import React from 'react';
import { Reveal } from './Reveal';

/**
 * Reusable SectionHeading component.
 * Displays an ink/coral pill eyebrow, H2 heading, and optional descriptive subtext.
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
          className={`inline-block font-sans text-xs md:text-sm font-medium uppercase tracking-[0.02em] mb-4 px-4 py-1.5 rounded-full ${
            light ? 'bg-coral text-deep-teal' : 'bg-ink text-offwhite'
          }`}
        >
          {eyebrow}
        </span>
      )}

      <h2
        className={`text-[36px] sm:text-[48px] md:text-[56px] font-heading leading-[1.05] tracking-[-0.01em] uppercase ${
          light ? 'text-coral' : 'text-ink'
        }`}
      >
        {title}
        {highlightText && (
          <>
            {' '}
            <span className={`swoosh-underline ${light ? 'text-offwhite' : 'text-coral'}`}>{highlightText}</span>
          </>
        )}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base md:text-[17px] leading-relaxed ${
            light ? 'text-offwhite/80' : 'text-muted-ink'
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
