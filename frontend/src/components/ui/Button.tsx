import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

interface ButtonBaseProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButton extends ButtonBaseProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> {
  href?: undefined;
  to?: undefined;
  asLink?: undefined;
}

interface ButtonAsLink extends ButtonBaseProps {
  href?: string;
  to?: string;
  asLink?: boolean;
  onClick?: () => void;
  type?: undefined;
  disabled?: boolean;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({ 
  children, 
  className, 
  variant = 'primary', 
  size = 'md',
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';
  
  const variants = {
    primary: 'bg-kendrix-blue text-white hover:bg-kendrix-blue/90 focus-visible:ring-kendrix-blue hover:-translate-y-[2px] hover:shadow-md active:scale-[0.98]',
    secondary: 'border-2 border-kendrix-navy text-kendrix-navy hover:bg-slate-50 focus-visible:ring-kendrix-navy active:scale-[0.98]',
    accent: 'bg-kendrix-orange text-white hover:bg-kendrix-orange/90 focus-visible:ring-kendrix-orange active:scale-[0.98]',
    ghost: 'text-kendrix-navy hover:bg-slate-100 focus-visible:ring-kendrix-navy active:scale-[0.98]',
    outline: 'border border-slate-300 text-slate-700 hover:bg-slate-50 focus-visible:ring-slate-400 active:scale-[0.98]',
  };

  const sizes = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-11 px-6 text-base',
    lg: 'h-14 px-8 text-lg',
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  // Support href prop (used by page components) and asLink+to (used by header)
  const linkTarget = ('to' in props && props.to) || ('href' in props && props.href);
  const isLink = ('asLink' in props && props.asLink) || linkTarget;

  if (isLink && linkTarget) {
    // Check if external URL
    if (linkTarget.startsWith('http') || linkTarget.startsWith('mailto:')) {
      return <a href={linkTarget} className={classes} target="_blank" rel="noopener noreferrer">{children}</a>;
    }
    return <Link to={linkTarget} className={classes}>{children}</Link>;
  }

  // Filter out link-specific props before passing to button
  const buttonProps = { ...(props as ButtonAsButton & { href?: string; to?: string; asLink?: boolean }) };
  delete buttonProps.href;
  delete buttonProps.to;
  delete buttonProps.asLink;

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
