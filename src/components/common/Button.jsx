import React from 'react';

/**
 * Reusable Button component adhering to the LocalLeap design system.
 * Supports primary (Leaf Green), secondary (Navy outline), gold,
 * whatsapp (#25D366), light and ghost variants.
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
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium font-heading transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed select-none active:translate-y-0 rounded-lg text-center';

  const sizeStyles = {
    sm: 'text-sm px-4 py-2 gap-1.5',
    md: 'text-[15px] px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5 shadow-sm'
  };

  const variantStyles = {
    // Primary: Leaf Green, text white, darker green on hover, -2px lift
    primary:
      'bg-green-dark text-white hover:bg-green-hover hover:-translate-y-0.5 hover:shadow-md active:shadow-sm focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2',
    // Secondary: Outline Navy
    secondary:
      'border-2 border-navy text-navy bg-transparent hover:bg-navy/5 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2',
    // Gold: Navy text on gold (poster URL pill)
    gold:
      'bg-gold text-navy font-semibold hover:bg-[#E0A500] hover:-translate-y-0.5 hover:shadow-md active:shadow-sm focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2',
    // WhatsApp: Recognisable #25D366 green
    whatsapp:
      'bg-[#25D366] text-white hover:bg-[#20bd5a] hover:-translate-y-0.5 hover:shadow-md active:shadow-sm focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2',
    // Light (on dark Navy / Forest backgrounds)
    light:
      'bg-white text-navy hover:bg-mint hover:-translate-y-0.5 hover:shadow-md focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-forest',
    // Ghost
    ghost:
      'text-navy hover:bg-mint hover:text-green-dark'
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
    </button>
  );
}
