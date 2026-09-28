import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { motion } from 'framer-motion';
import { Video, CheckCircle, FileText, Lightbulb, MessageSquare, Quote, Hash, Linkedin, Twitter, Instagram, LayoutDashboard } from 'lucide-react';
import { scaleIn, transition } from '@/config/motion';
import { StaggerContainer, StaggerItem } from '@/components/motion/StaggerContainer';
import { AnimatedCounter } from '@/components/motion/AnimatedCounter';

const panelVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      ...transition.normal,
      delay: custom * 0.15,
    }
  })
};

const checkmarkMotion = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: transition.spring }
};

export const ContentIntelligenceDashboard: React.FC = () => {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {/* Left panel: Source card */}
      <motion.div custom={0} variants={panelVariants}>
        <Card className="flex flex-col border border-gray-200 shadow-sm p-6 bg-white rounded-xl h-full">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
              <Video className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-[#061B3A]">AI Webinar.mp4</h3>
              <p className="text-sm text-[#64748B]">Duration: 1h 24m</p>
            </div>
          </div>
          <div className="mt-auto">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Status</span>
              <span className="text-sm font-bold text-green-600 flex items-center gap-1">
                Completed 
                <motion.div variants={checkmarkMotion} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <CheckCircle className="w-4 h-4" />
                </motion.div>
              </span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <motion.div 
                className="bg-green-500 h-2 rounded-full w-full"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={transition.slow}
              />
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Center panel: Intelligence Extracted */}
      <motion.div custom={1} variants={panelVariants}>
        <Card className="flex flex-col border border-gray-200 shadow-sm p-6 bg-white rounded-xl h-full">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-purple-100 p-2 rounded-lg text-purple-600">
              <LayoutDashboard className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-[#061B3A]">Intelligence Extracted</h3>
          </div>
          <StaggerContainer speed="fast" className="space-y-3 mt-2">
            <StaggerItem className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Hash className="w-4 h-4 text-blue-500" /> Topics
              </div>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200"><AnimatedCounter target={12} /></Badge>
            </StaggerItem>
            <StaggerItem className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Lightbulb className="w-4 h-4 text-purple-500" /> Key Insights
              </div>
              <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200"><AnimatedCounter target={18} /></Badge>
            </StaggerItem>
            <StaggerItem className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <FileText className="w-4 h-4 text-green-500" /> Claims
              </div>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200"><AnimatedCounter target={9} /></Badge>
            </StaggerItem>
            <StaggerItem className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Quote className="w-4 h-4 text-orange-500" /> Quotes
              </div>
              <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200"><AnimatedCounter target={14} /></Badge>
            </StaggerItem>
            <StaggerItem className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <MessageSquare className="w-4 h-4 text-cyan-500" /> Hooks
              </div>
              <Badge variant="outline" className="bg-cyan-50 text-cyan-700 border-cyan-200"><AnimatedCounter target={8} /></Badge>
            </StaggerItem>
          </StaggerContainer>
        </Card>
      </motion.div>

      {/* Right panel: Platform Outputs */}
      <motion.div custom={2} variants={panelVariants} className="md:col-span-2 lg:col-span-1">
        <Card className="flex flex-col border border-gray-200 shadow-sm p-6 bg-white rounded-xl h-full">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-[#061B3A]">Platform Outputs</h3>
          </div>
          <StaggerContainer speed="fast" className="space-y-4 mt-2">
            <StaggerItem className="flex items-center justify-between p-3 border border-gray-100 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-[#0A66C2]" />
                <span className="text-sm font-medium"><AnimatedCounter target={6} /> posts</span>
              </div>
              <span className="text-xs font-bold text-green-600 flex items-center gap-1">
                Ready 
                <motion.div variants={checkmarkMotion} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <CheckCircle className="w-3 h-3" />
                </motion.div>
              </span>
            </StaggerItem>
            <StaggerItem className="flex items-center justify-between p-3 border border-gray-100 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Twitter className="w-5 h-5 text-black" />
                <span className="text-sm font-medium"><AnimatedCounter target={12} /> posts</span>
              </div>
              <span className="text-xs font-bold text-green-600 flex items-center gap-1">
                Ready 
                <motion.div variants={checkmarkMotion} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <CheckCircle className="w-3 h-3" />
                </motion.div>
              </span>
            </StaggerItem>
            <StaggerItem className="flex items-center justify-between p-3 border border-gray-100 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-[#E4405F]" />
                <span className="text-sm font-medium"><AnimatedCounter target={4} /> captions</span>
              </div>
              <span className="text-xs font-bold text-green-600 flex items-center gap-1">
                Ready 
                <motion.div variants={checkmarkMotion} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <CheckCircle className="w-3 h-3" />
                </motion.div>
              </span>
            </StaggerItem>
          </StaggerContainer>
        </Card>
      </motion.div>
    </motion.div>
  );
};
