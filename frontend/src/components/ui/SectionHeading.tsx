import { cn } from '../../utils/cn';

interface SectionHeadingProps {
  overline?: string;
  title?: string;
  children?: React.ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export function SectionHeading({
  overline,
  title,
  children,
  subtitle,
  align = 'left',
  className,
  as: Component = 'h2',
}: SectionHeadingProps) {
  const headingContent = children || title;

  return (
    <div className={cn('flex flex-col gap-3 mb-10 md:mb-12', align === 'center' && 'items-center text-center', className)}>
      {overline && (
        <span className="text-sm font-bold tracking-wider uppercase text-kendrix-blue">
          {overline}
        </span>
      )}
      <Component
        className="font-heading font-bold text-kendrix-navy"
        style={{ fontSize: Component === 'h1' ? 'clamp(2rem, 5vw, 3.75rem)' : 'clamp(1.5rem, 3.5vw, 2.5rem)' }}
      >
        {headingContent}
      </Component>
      {subtitle && (
        <p className="text-lg text-slate-600 max-w-2xl mt-2 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
