import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  iconRight,
  iconLeft,
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none rounded-md text-center';

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2 tracking-wide',
    lg: 'text-base px-6 py-3 gap-2.5 font-semibold',
  }[size];

  const variantStyles = {
    primary:
      'bg-[#6C63FF] hover:bg-[#5B52F0] text-white shadow-[0_0_20px_rgba(108,99,255,0.35)] hover:shadow-[0_0_28px_rgba(108,99,255,0.55)] active:scale-[0.98]',
    secondary:
      'bg-[#12182B] hover:bg-[#182038] text-white border border-[#1E293B] hover:border-[#2D3B55] active:scale-[0.98]',
    outline:
      'bg-transparent hover:bg-[#6C63FF]/10 text-white border border-[#1E293B] hover:border-[#6C63FF] text-[#E2E8F0] active:scale-[0.98]',
    ghost:
      'bg-transparent hover:bg-white/5 text-[#94A3B8] hover:text-white',
  }[variant];

  const widthStyle = fullWidth ? 'w-full' : '';
  const combinedClasses = `${baseStyles} ${sizeStyles} ${variantStyles} ${widthStyle} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {iconLeft}
        <span>{children}</span>
        {iconRight}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {iconLeft}
      <span>{children}</span>
      {iconRight}
    </button>
  );
}
