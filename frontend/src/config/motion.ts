/**
 * Kendrix Motion Design System
 * 
 * Centralized motion tokens, easing curves, and reusable Framer Motion variants.
 * Import from '@/config/motion' throughout the project instead of
 * defining ad-hoc animation values in every component.
 */
import type { Variants, Transition } from 'framer-motion';

// ─── Timing Tokens ─────────────────────────────────────────────
export const duration = {
  fast: 0.2,
  normal: 0.4,
  reveal: 0.6,
  slow: 0.85,
} as const;

export const staggerDelay = {
  fast: 0.06,
  normal: 0.08,
  slow: 0.12,
} as const;

// ─── Easing ────────────────────────────────────────────────────
export const ease = {
  /** Smooth deceleration – primary easing for most animations */
  out: [0.22, 1, 0.36, 1] as [number, number, number, number],
  /** Subtle spring feel */
  outBack: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
  /** Standard ease-in-out */
  inOut: [0.4, 0, 0.2, 1] as [number, number, number, number],
};

// ─── Base Transition Presets ───────────────────────────────────
export const transition: Record<string, Transition> = {
  fast: { duration: duration.fast, ease: ease.out },
  normal: { duration: duration.normal, ease: ease.out },
  reveal: { duration: duration.reveal, ease: ease.out },
  slow: { duration: duration.slow, ease: ease.out },
  spring: { type: 'spring', stiffness: 260, damping: 24 },
};

// ─── Reusable Variants ────────────────────────────────────────

/** Fade up from y offset */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: transition.reveal },
};

/** Simple fade in */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transition.reveal },
};

/** Fade from left (desktop only – use fadeUp on mobile) */
export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -35 },
  visible: { opacity: 1, x: 0, transition: transition.reveal },
};

/** Fade from right (desktop only – use fadeUp on mobile) */
export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 35 },
  visible: { opacity: 1, x: 0, transition: transition.reveal },
};

/** Scale in with slight upward motion */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: transition.reveal },
};

/** Stagger container – orchestrates children */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay.normal,
      delayChildren: 0.1,
    },
  },
};

/** Fast stagger container for nav items, cards etc. */
export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay.fast,
      delayChildren: 0.05,
    },
  },
};

/** Slow stagger container for hero sequences */
export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay.slow,
      delayChildren: 0.15,
    },
  },
};

/** Generic stagger item – pairs with staggerContainer */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: transition.reveal },
};

/** Hero-specific entrance variants */
export const heroVariants = {
  badge: {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: duration.normal, ease: ease.out } },
  } as Variants,
  headline: {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: duration.reveal, ease: ease.out } },
  } as Variants,
  paragraph: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: duration.reveal, ease: ease.out } },
  } as Variants,
  buttons: {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: duration.normal, ease: ease.out } },
  } as Variants,
  visual: {
    hidden: { opacity: 0, scale: 0.96, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: duration.slow, ease: ease.out } },
  } as Variants,
};

/** Card hover animation props (apply with whileHover/whileTap) */
export const cardHover = {
  whileHover: { y: -5, transition: { duration: duration.fast, ease: ease.out } },
};

/** Button interaction props */
export const buttonMotion = {
  whileHover: { y: -2, transition: { duration: duration.fast } },
  whileTap: { scale: 0.98 },
};

/** Viewport settings for scroll-triggered reveals */
export const viewport = {
  /** Standard reveal – trigger once at 15% visibility */
  once: { once: true, amount: 0.15 as const },
  /** Larger threshold for important elements */
  large: { once: true, amount: 0.25 as const },
  /** Minimal threshold for full-width sections */
  minimal: { once: true, amount: 0.08 as const },
};

// ─── Reduced Motion Helpers ───────────────────────────────────

/** Returns reduced variants – opacity only, no translation */
export function getReducedVariants(variants: Variants): Variants {
  const reduced: Variants = {};
  for (const key in variants) {
    const v = variants[key];
    if (typeof v === 'object' && v !== null && 'opacity' in v) {
      const target = v as { opacity: number | string | (number | string)[] };
      reduced[key] = { opacity: target.opacity };
    } else {
      reduced[key] = v;
    }
  }
  return reduced;
}

// ─── SVG Path Animation ───────────────────────────────────────
export const pathDraw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: duration.slow, ease: ease.out },
  },
};
