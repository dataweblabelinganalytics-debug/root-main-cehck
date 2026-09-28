import React from 'react';
import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/utils/cn';
import { StaggerContainer, StaggerItem } from '@/components/motion/StaggerContainer';
import { cardHover } from '@/config/motion';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
  className?: string;
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({ features, className }) => {
  return (
    <StaggerContainer speed="normal" className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", className)}>
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <StaggerItem
            key={index}
            className="h-full"
          >
            <motion.div {...cardHover} className="h-full group">
              <Card hoverable className="p-6 h-full flex flex-col bg-white">
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105">
                  <Icon size={24} />
                </div>
                <h3 className="text-[#061B3A] text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-[#64748B] flex-grow leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          </StaggerItem>
        );
      })}
    </StaggerContainer>
  );
};
