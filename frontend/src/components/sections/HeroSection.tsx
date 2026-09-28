import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { cn } from '@/utils/cn';
import { motion, useReducedMotion } from 'framer-motion';
import { StaggerContainer } from '@/components/motion/StaggerContainer';
import { heroVariants } from '@/config/motion';

interface HeroSectionProps {
  overline?: string;
  headline: string;
  description: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  badge?: string;
  children?: React.ReactNode;
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  overline,
  headline,
  description,
  primaryCTA,
  secondaryCTA,
  badge,
  children,
  className,
}) => {
  const prefersReduced = useReducedMotion();

  return (
    <section className={cn("w-full py-16 md:py-20 lg:py-24 relative overflow-hidden", className)}>
      {!prefersReduced && (
        <motion.div
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-[#2563EB] to-[#06B6D4] blur-[120px] -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 2 }}
          style={{ opacity: 0.08 }}
        >
          <motion.div
            className="w-full h-full"
            animate={{
              x: [0, 50, -50, 0],
              y: [0, -50, 50, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "linear",
            }}
          />
        </motion.div>
      )}

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <StaggerContainer 
            speed="slow"
            className="flex-1 flex flex-col items-start text-left w-full"
          >
            {badge && (
              <motion.span 
                variants={prefersReduced ? { hidden: { opacity: 0 }, visible: { opacity: 1 } } : heroVariants.badge}
                className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6"
              >
                {badge}
              </motion.span>
            )}
            
            {overline && (
              <motion.span 
                variants={prefersReduced ? { hidden: { opacity: 0 }, visible: { opacity: 1 } } : heroVariants.badge}
                className="text-[#F59E0B] font-semibold tracking-wider uppercase text-sm mb-4"
              >
                {overline}
              </motion.span>
            )}
            
            <motion.h1 
              variants={prefersReduced ? { hidden: { opacity: 0 }, visible: { opacity: 1 } } : heroVariants.headline}
              className="text-[#061B3A] font-bold leading-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}
            >
              {headline}
            </motion.h1>
            
            <motion.p 
              variants={prefersReduced ? { hidden: { opacity: 0 }, visible: { opacity: 1 } } : heroVariants.paragraph}
              className="text-[#64748B] text-lg md:text-xl max-w-2xl mb-8 leading-relaxed"
            >
              {description}
            </motion.p>
            
            {(primaryCTA || secondaryCTA) && (
              <motion.div 
                variants={prefersReduced ? { hidden: { opacity: 0 }, visible: { opacity: 1 } } : heroVariants.buttons}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >
                {primaryCTA && (
                  <Button variant="primary" size="lg" href={primaryCTA.href}>
                    {primaryCTA.label}
                  </Button>
                )}
                {secondaryCTA && (
                  <Button variant="secondary" size="lg" href={secondaryCTA.href}>
                    {secondaryCTA.label}
                  </Button>
                )}
              </motion.div>
            )}
          </StaggerContainer>
          
          {children && (
            <motion.div 
              className="flex-1 w-full"
              variants={prefersReduced ? { hidden: { opacity: 0 }, visible: { opacity: 1 } } : heroVariants.visual}
              initial="hidden"
              animate="visible"
            >
              {children}
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  );
};
