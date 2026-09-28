import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { cn } from '@/utils/cn';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import type { Project } from '@/types';
import { useMediaQuery } from '@/hooks/useMediaQuery';

interface ProjectShowcaseProps {
  project: Project;
  index: number;
  visual?: React.ReactNode;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ project, index, visual }) => {
  const isEven = index % 2 === 0;
  const isMobile = useMediaQuery('(max-width: 767px)');
  
  const textDir = isMobile ? 'up' : (isEven ? 'left' : 'right');
  const visualDir = isMobile ? 'up' : (isEven ? 'right' : 'left');

  return (
    <div className="w-full my-12 md:my-16 lg:my-20">
      <div className={cn(
        "flex flex-col lg:flex-row items-center gap-10 lg:gap-16",
        !isEven && "lg:flex-row-reverse"
      )}>
        <Reveal dir={textDir} className="flex-1 w-full space-y-6">
          <div className="flex items-center gap-4">
            <span className="text-[#F59E0B] font-mono font-bold text-xl">
              {(index + 1).toString().padStart(2, '0')}
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
              {project.category}
            </span>
            {project.status && (
              <span className="px-3 py-1 bg-blue-50 text-[#2563EB] text-sm font-medium rounded-full">
                {project.status}
              </span>
            )}
          </div>
          
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-[#061B3A] mb-2">{project.name}</h3>
            <p className="text-xl text-[#061B3A] font-medium opacity-80">{project.tagline}</p>
          </div>
          
          <p className="text-[#64748B] text-lg leading-relaxed max-w-2xl">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 pt-2">
            {project.features.map((feature, i) => (
              <motion.span 
                key={i} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-3 py-1 border border-gray-200 text-gray-600 rounded-md text-sm"
              >
                {feature}
              </motion.span>
            ))}
          </div>
          
          <div className="pt-4">
            <Button variant="primary" href={`/projects/${project.slug}`}>
              View Project Details <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </Reveal>
        
        <Reveal dir={visualDir} delay={0.2} className="flex-1 w-full">
          {visual ? (
            visual
          ) : (
            <Card className="aspect-video bg-gray-100 flex items-center justify-center border-0 shadow-lg overflow-hidden">
              <span className="text-gray-400 font-medium">Project Visualization</span>
            </Card>
          )}
        </Reveal>
      </div>
    </div>
  );
};
