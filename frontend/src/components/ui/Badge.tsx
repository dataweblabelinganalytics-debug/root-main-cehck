import { cn } from '../../utils/cn';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'info' | 'neutral' | 'outline' | 'secondary';
}

export function Badge({ children, className, variant = 'default', ...props }: BadgeProps) {
  const variants = {
    default: 'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-orange-100 text-orange-800',
    info: 'bg-cyan-100 text-cyan-800',
    neutral: 'bg-slate-100 text-slate-800',
    outline: 'bg-white border border-slate-300 text-slate-700',
    secondary: 'bg-slate-50 border border-slate-200 text-slate-600',
  };

  return (
    <span 
      className={cn('inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium', variants[variant], className)}
      {...props}
    >
      {children}
    </span>
  );
}
