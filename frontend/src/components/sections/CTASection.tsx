import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { cn } from '@/utils/cn';
import { Reveal } from '@/components/motion/Reveal';
import { buttonMotion } from '@/config/motion';

interface CTASectionProps {
  headline: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  variant?: 'light' | 'dark';
  className?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  headline,
  description,
  buttonLabel,
  buttonHref,
  variant = 'light',
  className
}) => {
  const isDark = variant === 'dark';

  return (
    <section className={cn(
      "w-full py-20 md:py-24",
      isDark ? "bg-[#061B3A] text-white" : "bg-[#F6F9FC] text-[#061B3A]",
      className
    )}>
      <Container>
        <Reveal
          dir="up"
          className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-8"
        >
          <h2 
            className="font-bold leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            {headline}
          </h2>
          <p className={cn(
            "text-lg md:text-xl max-w-2xl leading-relaxed",
            isDark ? "text-gray-300" : "text-[#64748B]"
          )}>
            {description}
          </p>
          <motion.div className="pt-4" {...buttonMotion}>
            <Button 
              variant={isDark ? "accent" : "primary"} 
              size="lg" 
              href={buttonHref}
            >
              {buttonLabel}
            </Button>
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
};
