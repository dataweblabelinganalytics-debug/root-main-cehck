/**
 * Reveal – reusable scroll-triggered reveal wrapper.
 *
 * Usage:
 *   <Reveal>           → fadeUp (default)
 *   <Reveal dir="left"> → fadeLeft on desktop, fadeUp on mobile
 *   <Reveal dir="right"> → fadeRight on desktop, fadeUp on mobile
 *   <Reveal variant={customVariant}> → custom variant
 */
import { type ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import {
  fadeUp,
  fadeIn,
  fadeLeft,
  fadeRight,
  scaleIn,
  viewport,
  getReducedVariants,
} from '@/config/motion';

interface RevealProps {
  children: ReactNode;
  /** Direction of entrance. Horizontal directions fall back to fadeUp on mobile. */
  dir?: 'up' | 'left' | 'right' | 'fade' | 'scale';
  /** Custom Framer Motion variants (overrides dir) */
  variant?: Variants;
  /** Delay in seconds before this element animates */
  delay?: number;
  /** HTML element to render as */
  as?: 'div' | 'section' | 'article' | 'li' | 'span';
  className?: string;
  /** Viewport amount threshold (0-1) */
  amount?: number;
}

const dirMap: Record<string, Variants> = {
  up: fadeUp,
  left: fadeLeft,
  right: fadeRight,
  fade: fadeIn,
  scale: scaleIn,
};

export function Reveal({
  children,
  dir = 'up',
  variant,
  delay = 0,
  as = 'div',
  className,
  amount,
}: RevealProps) {
  const prefersReduced = useReducedMotion();
  const isMobile = useMediaQuery('(max-width: 767px)');

  // On mobile, horizontal animations become fadeUp to prevent overflow
  const effectiveDir = isMobile && (dir === 'left' || dir === 'right') ? 'up' : dir;
  let variants = variant ?? dirMap[effectiveDir] ?? fadeUp;

  if (prefersReduced) {
    variants = getReducedVariants(variants);
  }

  const Component = motion[as];

  // If delay is set, wrap the visible state transition with a delay
  const delayedVariants: Variants = delay
    ? {
        hidden: variants.hidden,
        visible: {
          ...(typeof variants.visible === 'object' ? variants.visible : {}),
          transition: {
            ...((typeof variants.visible === 'object' &&
              variants.visible !== null &&
              'transition' in variants.visible
              ? (variants.visible as Record<string, unknown>).transition
              : {}) as Record<string, unknown>),
            delay,
          },
        },
      }
    : variants;

  return (
    <Component
      variants={delayedVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: amount ?? viewport.once.amount }}
      className={className}
    >
      {children}
    </Component>
  );
}

export default Reveal;
