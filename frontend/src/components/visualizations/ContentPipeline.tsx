import { motion } from 'framer-motion';
import {
  FileVideo,
  BrainCircuit,
  SearchCode,
  LineChart,
  Repeat,
  Sparkles,
  ShieldCheck,
  Eye,
  Send,
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import { duration, ease, viewport } from '@/config/motion';

const steps = [
  { id: 'content', label: 'CONTENT', icon: FileVideo },
  { id: 'understand', label: 'UNDERSTAND', icon: BrainCircuit },
  { id: 'extract', label: 'EXTRACT', icon: SearchCode },
  { id: 'analyze', label: 'ANALYZE', icon: LineChart },
  { id: 'adapt', label: 'ADAPT', icon: Repeat },
  { id: 'generate', label: 'GENERATE', icon: Sparkles },
  { id: 'validate', label: 'VALIDATE', icon: ShieldCheck },
  { id: 'review', label: 'REVIEW', icon: Eye },
  { id: 'publish', label: 'PUBLISH', icon: Send },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: duration.normal, ease: ease.out } 
  },
};

const arrowVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: duration.fast } 
  },
};

export const ContentPipeline = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport.once}
      className="flex flex-col lg:flex-row items-center justify-center w-full gap-4 lg:gap-2 py-8"
    >
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isLast = index === steps.length - 1;

        return (
          <div key={step.id} className="contents">
            <motion.div
              variants={stepVariants}
              className="flex items-center justify-center bg-white border border-gray-200 shadow-sm rounded-full px-5 py-3 gap-2"
            >
              <Icon className="w-4 h-4 text-[#2563EB]" />
              <span className="text-xs font-bold text-[#061B3A] tracking-wider">{step.label}</span>
            </motion.div>
            
            {!isLast && (
              <motion.div
                variants={arrowVariants}
                className="text-gray-300 flex items-center justify-center"
              >
                <ChevronRight className="w-5 h-5 hidden lg:block" />
                <ChevronDown className="w-5 h-5 block lg:hidden my-1" />
              </motion.div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
};
