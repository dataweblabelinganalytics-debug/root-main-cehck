import { motion } from 'framer-motion';
import { LucideIcon, CheckCircle2 } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '@/components/motion/StaggerContainer';
import { viewport, transition } from '@/config/motion';

export interface FlowStep {
  title: string;
  description?: string;
  icon?: LucideIcon;
}

interface FlowDiagramProps {
  steps: FlowStep[];
  title?: string;
}

export function FlowDiagram({ steps, title }: FlowDiagramProps) {
  return (
    <div className="w-full max-w-3xl mx-auto py-8">
      {title && (
        <h3 className="text-xl font-bold text-[#061B3A] mb-8 text-center">{title}</h3>
      )}
      <div className="relative ml-4 md:ml-6">
        {/* Animated Vertical Line */}
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={viewport.once}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute left-0 top-0 w-[2px] bg-gray-200 origin-top"
        />

        <StaggerContainer className="space-y-8 py-2">
          {steps.map((step, index) => {
            const IconComponent = step.icon || CheckCircle2;
            return (
              <StaggerItem 
                key={index}
                className="relative pl-8 md:pl-10"
              >
                {/* Node / Icon */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={viewport.once}
                  transition={{ ...transition.spring, delay: index * 0.1 + 0.2 }}
                  className="absolute -left-[17px] top-0 bg-white border-2 border-[#2563EB] rounded-full p-1 text-[#2563EB]"
                >
                  <IconComponent className="w-5 h-5" />
                </motion.div>
                
                {/* Content */}
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-[#061B3A]">
                    {step.title}
                  </h4>
                  {step.description && (
                    <p className="mt-1 text-sm md:text-base text-[#64748B]">
                      {step.description}
                    </p>
                  )}
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </div>
  );
}
