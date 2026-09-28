import { MessageSquare, Globe, Settings, Users, Sparkles, User, Briefcase, Calendar, ListOrdered, Bell, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { scaleIn, viewport, transition, duration, ease } from '@/config/motion';

const sourceContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const outputContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.8 } }
};

export function BookingEngineDiagram() {
  const isMobile = useMediaQuery('(max-width: 767px)');
  
  const sourceVariants = {
    hidden: { opacity: 0, x: isMobile ? 0 : -20, y: isMobile ? -20 : 0 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: duration.normal, ease: ease.out } }
  };
  
  const outputVariants = {
    hidden: { opacity: 0, x: isMobile ? 0 : 20, y: isMobile ? 20 : 0 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: duration.normal, ease: ease.out } }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={viewport.once} 
      transition={transition.normal}
      className="w-full max-w-5xl mx-auto py-8"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4">
        {/* Left Side: Sources */}
        <motion.div 
          className="flex flex-col gap-3 w-full lg:w-1/4"
          variants={sourceContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport.once}
        >
          <motion.div variants={sourceVariants} className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg shadow-sm">
            <MessageSquare className="text-green-500 w-5 h-5 flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800">WhatsApp</span>
          </motion.div>
          <motion.div variants={sourceVariants} className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg shadow-sm">
            <Globe className="text-blue-500 w-5 h-5 flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800">Website</span>
          </motion.div>
          <motion.div variants={sourceVariants} className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg shadow-sm">
            <Settings className="text-gray-600 w-5 h-5 flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800">Admin Panel</span>
          </motion.div>
          <motion.div variants={sourceVariants} className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg shadow-sm">
            <Users className="text-purple-500 w-5 h-5 flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800">Walk-In QR</span>
          </motion.div>
        </motion.div>

        {/* Arrows Mobile */}
        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={viewport.once} transition={{ delay: 0.4 }}
          className="lg:hidden text-gray-400"
        >
          ↓
        </motion.div>
        
        {/* Arrows Desktop */}
        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={viewport.once} transition={{ delay: 0.4 }}
          className="hidden lg:flex flex-col gap-8 justify-center text-gray-400"
        >
          <span>→</span>
        </motion.div>

        {/* Center: Engine */}
        <div className="w-full lg:w-2/4">
          <motion.div 
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewport.once}
            className="bg-gradient-to-br from-[#061B3A] to-[#2563EB] rounded-2xl p-6 md:p-10 text-center shadow-lg text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <Sparkles className="w-24 h-24" />
            </div>
            <Sparkles className="w-10 h-10 mx-auto mb-4 text-blue-200" />
            <h3 className="text-xl md:text-2xl font-bold mb-2">Kendrix Booking Engine</h3>
            <p className="text-blue-100 text-sm md:text-base">Centralized processing, rules, and logic.</p>
          </motion.div>
        </div>

        {/* Arrows Mobile */}
        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={viewport.once} transition={{ delay: 0.7 }}
          className="lg:hidden text-gray-400"
        >
          ↓
        </motion.div>
        
        {/* Arrows Desktop */}
        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={viewport.once} transition={{ delay: 0.7 }}
          className="hidden lg:flex flex-col gap-8 justify-center text-gray-400"
        >
          <span>→</span>
        </motion.div>

        {/* Right Side: Outputs */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-1 gap-3 w-full lg:w-1/4"
          variants={outputContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport.once}
        >
          <motion.div variants={outputVariants} className="flex items-center gap-3 p-2 md:p-3 bg-white border border-gray-200 rounded-lg shadow-sm">
            <User className="text-[#2563EB] w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
            <span className="text-xs md:text-sm font-medium text-gray-800">Customer</span>
          </motion.div>
          <motion.div variants={outputVariants} className="flex items-center gap-3 p-2 md:p-3 bg-white border border-gray-200 rounded-lg shadow-sm">
            <Briefcase className="text-[#2563EB] w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
            <span className="text-xs md:text-sm font-medium text-gray-800">Staff</span>
          </motion.div>
          <motion.div variants={outputVariants} className="flex items-center gap-3 p-2 md:p-3 bg-white border border-gray-200 rounded-lg shadow-sm">
            <Calendar className="text-[#2563EB] w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
            <span className="text-xs md:text-sm font-medium text-gray-800">Resources</span>
          </motion.div>
          <motion.div variants={outputVariants} className="flex items-center gap-3 p-2 md:p-3 bg-white border border-gray-200 rounded-lg shadow-sm">
            <ListOrdered className="text-[#2563EB] w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
            <span className="text-xs md:text-sm font-medium text-gray-800">Live Queue</span>
          </motion.div>
          <motion.div variants={outputVariants} className="flex items-center gap-3 p-2 md:p-3 bg-white border border-gray-200 rounded-lg shadow-sm">
            <Bell className="text-orange-500 w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
            <span className="text-xs md:text-sm font-medium text-gray-800">Alerts</span>
          </motion.div>
          <motion.div variants={outputVariants} className="flex items-center gap-3 p-2 md:p-3 bg-white border border-gray-200 rounded-lg shadow-sm">
            <BarChart3 className="text-green-600 w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
            <span className="text-xs md:text-sm font-medium text-gray-800">Analytics</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
