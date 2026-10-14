import React from 'react';

/**
 * Reusable Button component adhering to the LocalLeap design system.
 * Supports primary (Dark Teal #008F94), secondary (Navy outline),
 * whatsapp (#25D366), and ghost variants.
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
    'inline-flex items-center justify-center font-medium font-["Poppins"] transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed select-none active:translate-y-0 rounded-lg text-center';

  const sizeStyles = {
    sm: 'text-sm px-4 py-2 gap-1.5',
    md: 'text-[15px] px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5 shadow-sm'
  };

  const variantStyles = {
    // Primary: Action Dark Teal (#008F94), text white, hover #007479, -2px lift
    primary:
      'bg-[#008F94] text-white hover:bg-[#007479] hover:-translate-y-0.5 hover:shadow-md active:shadow-sm focus-visible:ring-2 focus-visible:ring-[#05B0B5] focus-visible:ring-offset-2',
    // Secondary: Outline Navy
    secondary:
      'border-2 border-[#01315E] text-[#01315E] bg-transparent hover:bg-[#01315E]/5 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#01315E] focus-visible:ring-offset-2',
    // WhatsApp: Recognisable #25D366 green
    whatsapp:
      'bg-[#25D366] text-white hover:bg-[#20bd5a] hover:-translate-y-0.5 hover:shadow-md active:shadow-sm focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2',
    // Light (on dark Navy backgrounds)
    light:
      'bg-white text-[#01315E] hover:bg-[#F3FAFA] hover:-translate-y-0.5 hover:shadow-md focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#01315E]',
    // Ghost
    ghost:
      'text-[#01315E] hover:bg-[#F3FAFA] hover:text-[#008F94]'
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
