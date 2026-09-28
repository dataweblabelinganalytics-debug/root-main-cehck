import { cn } from '../../utils/cn';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Container({ children, className, as: Component = 'div' }: ContainerProps) {
  return (
    <Component className={cn('w-full max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10', className)}>
      {children}
    </Component>
  );
}
