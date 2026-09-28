import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Database, Settings, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { duration } from '@/config/motion';

export const WorkflowVisualization: React.FC = () => {
  return (
    <div className="relative w-full aspect-square md:aspect-auto md:h-[500px] flex items-center justify-center p-4">
      {/* Central Hub */}
      <motion.div
        className="absolute z-10 w-24 h-24 bg-[#061B3A] rounded-2xl flex flex-col items-center justify-center shadow-2xl border-4 border-white"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1, boxShadow: ["0 0 0 0 rgba(37,99,235,0)", "0 0 0 15px rgba(37,99,235,0.1)", "0 0 0 30px rgba(37,99,235,0)"] }}
        viewport={{ once: true }}
        transition={{ scale: { duration: duration.reveal, type: 'spring' }, boxShadow: { repeat: Infinity, duration: 2, delay: 1 } }}
      >
        <Brain className="text-white mb-1" size={32} />
        <span className="text-white text-xs font-bold tracking-wider">KENDRIX</span>
      </motion.div>

      {/* Nodes */}
      <div className="absolute w-full h-full">
        {/* Node 1: AI */}
        <motion.div 
          className="absolute top-[15%] left-[20%] md:top-[20%] md:left-[15%] z-20"
          initial={{ opacity: 0, x: 20, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: duration.reveal, delay: 0.15 }}
        >
          <Card className="p-3 flex items-center gap-2 shadow-lg bg-white w-32">
            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
              <Brain size={16} />
            </div>
            <span className="text-sm font-semibold text-gray-700">AI</span>
          </Card>
        </motion.div>

        {/* Node 2: Automation */}
        <motion.div 
          className="absolute top-[15%] right-[20%] md:top-[20%] md:right-[15%] z-20"
          initial={{ opacity: 0, x: -20, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: duration.reveal, delay: 0.3 }}
        >
          <Card className="p-3 flex items-center gap-2 shadow-lg bg-white w-36">
            <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
              <Zap size={16} />
            </div>
            <span className="text-sm font-semibold text-gray-700">Automation</span>
          </Card>
        </motion.div>

        {/* Node 3: Data */}
        <motion.div 
          className="absolute bottom-[25%] left-[10%] md:bottom-[30%] md:left-[10%] z-20"
          initial={{ opacity: 0, x: 20, y: -20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: duration.reveal, delay: 0.45 }}
        >
          <Card className="p-3 flex items-center gap-2 shadow-lg bg-white w-32">
            <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <Database size={16} />
            </div>
            <span className="text-sm font-semibold text-gray-700">Data</span>
          </Card>
        </motion.div>

        {/* Node 4: Workflows */}
        <motion.div 
          className="absolute bottom-[25%] right-[10%] md:bottom-[30%] md:right-[10%] z-20"
          initial={{ opacity: 0, x: -20, y: -20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: duration.reveal, delay: 0.6 }}
        >
          <Card className="p-3 flex items-center gap-2 shadow-lg bg-white w-36">
            <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
              <Settings size={16} />
            </div>
            <span className="text-sm font-semibold text-gray-700">Workflows</span>
          </Card>
        </motion.div>
        
        {/* Node 5: Output */}
        <motion.div 
          className="absolute bottom-[5%] left-1/2 -translate-x-1/2 z-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: duration.reveal, delay: 0.75 }}
        >
          <Card className="p-3 flex items-center gap-2 shadow-lg bg-[#2563EB] text-white w-48 border-0">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <CheckCircle2 size={16} />
            </div>
            <span className="text-sm font-semibold">Better Operations</span>
          </Card>
        </motion.div>
      </div>

      {/* Connecting Lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <g stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="4 4">
          <motion.line x1="50%" y1="50%" x2="25%" y2="25%" 
            initial={{ pathLength: 0, opacity: 0 }} 
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: duration.reveal, delay: 0.25 }} 
          />
          <motion.line x1="50%" y1="50%" x2="75%" y2="25%" 
            initial={{ pathLength: 0, opacity: 0 }} 
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: duration.reveal, delay: 0.4 }} 
          />
          <motion.line x1="50%" y1="50%" x2="20%" y2="70%" 
            initial={{ pathLength: 0, opacity: 0 }} 
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: duration.reveal, delay: 0.55 }} 
          />
          <motion.line x1="50%" y1="50%" x2="80%" y2="70%" 
            initial={{ pathLength: 0, opacity: 0 }} 
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: duration.reveal, delay: 0.7 }} 
          />
          <motion.line x1="50%" y1="50%" x2="50%" y2="90%" stroke="rgba(37, 99, 235, 0.5)" strokeWidth="3" strokeDasharray="none"
            initial={{ pathLength: 0, opacity: 0 }} 
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: duration.reveal, delay: 0.85 }} 
          />
        </g>
        
        {/* Animated dots along lines */}
        <circle r="3" fill="#2563EB" opacity="0.6">
          <animateMotion dur="3s" repeatCount="indefinite" path="M 25% 25% L 50% 50%" />
        </circle>
        <circle r="3" fill="#2563EB" opacity="0.6">
          <animateMotion dur="3s" repeatCount="indefinite" path="M 75% 25% L 50% 50%" begin="1s" />
        </circle>
        <circle r="3" fill="#2563EB" opacity="0.6">
          <animateMotion dur="3s" repeatCount="indefinite" path="M 20% 70% L 50% 50%" begin="2s" />
        </circle>
        <circle r="3" fill="#2563EB" opacity="0.6">
          <animateMotion dur="3s" repeatCount="indefinite" path="M 80% 70% L 50% 50%" begin="0.5s" />
        </circle>
        <circle r="4" fill="#10B981" opacity="0.6">
          <animateMotion dur="2s" repeatCount="indefinite" path="M 50% 50% L 50% 90%" />
        </circle>
      </svg>
    </div>
  );
};
