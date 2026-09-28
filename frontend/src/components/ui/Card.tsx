import { cn } from '../../utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export function Card({ children, className, hoverable = false, ...props }: CardProps) {
  return (
    <div 
      className={cn(
        'bg-white rounded-xl border border-slate-200 overflow-hidden',
        hoverable && 'transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-slate-300',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
