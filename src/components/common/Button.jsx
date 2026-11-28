import React from 'react';
import { ArrowUpRight } from 'lucide-react';

/**
 * Reusable Button component adhering to the LocalLeap design system.
 * Supports primary (Leaf Green), secondary (Navy outline), gold,
 * whatsapp (#FF8B7B), light and ghost variants.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  icon: Icon,
  external = false,
  noArrow = false,
  ...props
}) {
  // Halftone system: full pill, uppercase Inter label, flat fill, no shadow, trailing up-right arrow
  const baseStyles =
    'inline-flex items-center justify-center font-sans font-medium uppercase tracking-[0.02em] transition-colors duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed select-none rounded-full text-center focus-visible:outline-2 focus-visible:outline-offset-2';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-3 gap-2',
    lg: 'text-sm sm:text-[15px] px-6 sm:px-7 py-3.5 gap-2.5'
  };

  const variantStyles = {
    // Primary: coral fill, ink/deep-teal text
    primary: 'bg-coral text-deep-teal hover:bg-coral-dark focus-visible:outline-ink',
    // Secondary: ink outline pill
    secondary: 'border-2 border-ink text-ink bg-transparent hover:bg-ink hover:text-offwhite focus-visible:outline-ink',
    // Gold (legacy name): coral on dark backgrounds
    gold: 'bg-coral text-deep-teal hover:bg-coral-dark focus-visible:outline-coral',
    // WhatsApp: coral pill with WhatsApp icon
    whatsapp: 'bg-coral text-deep-teal hover:bg-coral-dark focus-visible:outline-ink',
    // Light (on deep-teal backgrounds)
    light: 'bg-offwhite text-deep-teal hover:bg-mint focus-visible:outline-coral',
    // Ghost
    ghost: 'text-ink hover:bg-mint'
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        {...(external
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
        {...props}
      >
        {Icon && <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />}
        <span>{children}</span>
        {!noArrow && <ArrowUpRight className="w-4 h-4 shrink-0 -mt-px" aria-hidden="true" />}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={combinedClasses}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />}
      <span>{children}</span>
      {!noArrow && <ArrowUpRight className="w-4 h-4 shrink-0 -mt-px" aria-hidden="true" />}
    </button>
  );
}
