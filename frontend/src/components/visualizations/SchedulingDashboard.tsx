import { motion } from 'framer-motion';
import { scaleIn, transition, viewport } from '@/config/motion';
import { StaggerContainer, StaggerItem } from '@/components/motion/StaggerContainer';
import { AnimatedCounter } from '@/components/motion/AnimatedCounter';

export function SchedulingDashboard() {
  return (
    <motion.div 
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={viewport.once}
      className="w-full bg-white rounded-xl border border-gray-200 shadow-sm p-4 md:p-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Left Panel: Today's Overview */}
        <div className="space-y-4">
          <h3 className="text-[#061B3A] font-semibold mb-4 border-b pb-2">Today's Overview</h3>
          <StaggerContainer className="grid grid-cols-2 gap-3">
            <StaggerItem className="bg-blue-50 p-3 rounded-lg border border-blue-100">
              <div className="text-2xl font-bold text-blue-600">
                <AnimatedCounter target={42} />
              </div>
              <div className="text-xs text-blue-800 font-medium uppercase tracking-wider">Bookings</div>
            </StaggerItem>
            <StaggerItem className="bg-orange-50 p-3 rounded-lg border border-orange-100">
              <div className="text-2xl font-bold text-orange-600">
                <AnimatedCounter target={8} />
              </div>
              <div className="text-xs text-orange-800 font-medium uppercase tracking-wider">Waiting</div>
            </StaggerItem>
            <StaggerItem className="bg-green-50 p-3 rounded-lg border border-green-100">
              <div className="text-2xl font-bold text-green-600">
                <AnimatedCounter target={3} />
              </div>
              <div className="text-xs text-green-800 font-medium uppercase tracking-wider">In Service</div>
            </StaggerItem>
            <StaggerItem className="bg-gray-50 p-3 rounded-lg border border-gray-200">
              <div className="text-2xl font-bold text-gray-600">
                <AnimatedCounter target={2} />
              </div>
              <div className="text-xs text-gray-800 font-medium uppercase tracking-wider">No-show</div>
            </StaggerItem>
          </StaggerContainer>
        </div>

        {/* Center Panel: Live Queue */}
        <div className="space-y-4 lg:border-l lg:border-r lg:px-6 border-gray-200">
          <h3 className="text-[#061B3A] font-semibold mb-4 border-b pb-2">Live Queue</h3>
          <StaggerContainer speed="fast" className="space-y-3">
            <StaggerItem className="bg-green-50 p-3 rounded-lg border border-green-200 flex items-center justify-between">
              <div>
                <div className="text-xs text-green-600 font-bold uppercase mb-1">Now Serving</div>
                <div className="text-sm font-medium text-gray-900">Token #A-15 — Amit K.</div>
              </div>
              <div className="h-2 w-2 rounded-full bg-green-500 animate-[pulse_1.5s_ease-in-out_infinite]"></div>
            </StaggerItem>
            <StaggerItem className="bg-blue-50 p-3 rounded-lg border border-blue-200 flex items-center justify-between">
              <div>
                <div className="text-xs text-blue-600 font-bold uppercase mb-1 flex items-center gap-2">
                  Up Next
                </div>
                <div className="text-sm font-medium text-gray-900">Token #A-16 — Sarah M.</div>
              </div>
              <div className="text-xs font-semibold text-blue-700">8 min</div>
            </StaggerItem>
            <StaggerItem className="bg-gray-50 p-3 rounded-lg border border-gray-200 flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-500 font-bold uppercase mb-1">Waiting</div>
                <div className="text-sm font-medium text-gray-900">Token #A-17 — Rahul P.</div>
              </div>
              <div className="text-xs font-semibold text-gray-600">15 min</div>
            </StaggerItem>
            <StaggerItem className="bg-gray-50 p-3 rounded-lg border border-gray-200 flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-500 font-bold uppercase mb-1">Waiting</div>
                <div className="text-sm font-medium text-gray-900">Token #A-18 — Priya S.</div>
              </div>
              <div className="text-xs font-semibold text-gray-600">24 min</div>
            </StaggerItem>
          </StaggerContainer>
        </div>

        {/* Right Panel: Staff Utilization */}
        <div className="space-y-4">
          <h3 className="text-[#061B3A] font-semibold mb-4 border-b pb-2">Staff Utilization</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-800">Dr. Sharma</span>
                <span className="text-gray-500 text-xs">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }} 
                  whileInView={{ width: '85%' }} 
                  viewport={viewport.once} 
                  transition={transition.normal}
                  className="bg-[#2563EB] h-2 rounded-full"
                ></motion.div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-800">Dr. Patel</span>
                <span className="text-gray-500 text-xs">72%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }} 
                  whileInView={{ width: '72%' }} 
                  viewport={viewport.once} 
                  transition={transition.normal}
                  className="bg-[#2563EB] h-2 rounded-full"
                ></motion.div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-800">Dr. Singh</span>
                <span className="text-gray-500 text-xs">91%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }} 
                  whileInView={{ width: '91%' }} 
                  viewport={viewport.once} 
                  transition={transition.normal}
                  className="bg-orange-500 h-2 rounded-full"
                ></motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
