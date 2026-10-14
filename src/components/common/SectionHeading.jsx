import React from 'react';

/**
 * Reusable SectionHeading component.
 * Displays teal eyebrow, H2 heading, and optional descriptive subtext.
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
    <div
      className={`mb-12 md:mb-16 ${
        isCenter ? 'text-center mx-auto max-w-2xl' : 'text-left max-w-2xl'
      } ${className}`}
    >
      {eyebrow && (
        <span
          className={`inline-block text-xs md:text-sm font-bold uppercase tracking-wider mb-3 px-3 py-1 rounded-full ${
            light
              ? 'bg-[#05B0B5]/20 text-[#05B0B5]'
              : 'bg-[#05B0B5]/10 text-[#008F94]'
          }`}
        >
          {eyebrow}
        </span>
      )}

      <h2
        className={`text-28px md:text-[40px] font-bold font-["Poppins"] leading-[1.2] tracking-tight ${
          light ? 'text-white' : 'text-[#01315E]'
        }`}
      >
        {title}
        {highlightText && (
          <span className="text-[#05B0B5]"> {highlightText}</span>
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
    </div>
  );
}
