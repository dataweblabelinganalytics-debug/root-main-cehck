/**
 * AnimatedCounter – counts from 0 to target when entering viewport.
 * Used inside product mockup dashboards only (not for company metrics).
 * Runs once, then displays the final value.
 */
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface AnimatedCounterProps {
  /** Target number to count to */
  target: number;
  /** Duration in ms */
  duration?: number;
  /** Suffix after the number (e.g. '%', '+') */
  suffix?: string;
  /** Prefix before the number */
  prefix?: string;
  className?: string;
}

export function AnimatedCounter({
  target,
  duration = 1200,
  suffix = '',
  prefix = '',
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const prefersReduced = useReducedMotion();
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    if (prefersReduced) {
      setCount(target);
      return;
    }

    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out quad
      const eased = 1 - (1 - progress) * (1 - progress);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, target, duration, prefersReduced]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}

export default AnimatedCounter;
