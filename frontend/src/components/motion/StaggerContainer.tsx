/**
 * StaggerContainer – orchestrates staggered entrance of children.
 *
 * Wrap children in <StaggerItem> for per-child animation, or children
 * with their own variants will be orchestrated by the stagger timing.
 *
 * Usage:
 *   <StaggerContainer>
 *     <StaggerItem>Card 1</StaggerItem>
 *     <StaggerItem>Card 2</StaggerItem>
 *   </StaggerContainer>
 */
import { type ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import {
  staggerContainer,
  staggerContainerFast,
  staggerContainerSlow,
  staggerItem as staggerItemVariant,
  viewport,
  getReducedVariants,
} from '@/config/motion';

interface StaggerContainerProps {
  children: ReactNode;
  /** Stagger speed preset */
  speed?: 'fast' | 'normal' | 'slow';
  className?: string;
  as?: 'div' | 'ul' | 'ol' | 'section';
}

const speedMap: Record<string, Variants> = {
  fast: staggerContainerFast,
  normal: staggerContainer,
  slow: staggerContainerSlow,
};

export function StaggerContainer({
  children,
  speed = 'normal',
  className,
  as = 'div',
}: StaggerContainerProps) {
  const Component = motion[as];
  return (
    <Component
      variants={speedMap[speed]}
      initial="hidden"
      whileInView="visible"
      viewport={viewport.once}
      className={className}
    >
      {children}
    </Component>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'li' | 'article';
}

export function StaggerItem({ children, className, as = 'div' }: StaggerItemProps) {
  const prefersReduced = useReducedMotion();
  const variants = prefersReduced
    ? getReducedVariants(staggerItemVariant)
    : staggerItemVariant;
  const Component = motion[as];
  return (
    <Component variants={variants} className={className}>
      {children}
    </Component>
  );
}
