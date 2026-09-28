import React, { useState } from 'react';
import { cn } from '@/utils/cn';
import { LucideIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface TabItem {
  id: string;
  label: string;
  icon?: LucideIcon;
  content: React.ReactNode;
}

interface TabSectionProps {
  tabs: TabItem[];
  className?: string;
}

export const TabSection: React.FC<TabSectionProps> = ({ tabs, className }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);

  return (
    <div className={cn("w-full", className)}>
      <div 
        role="tablist" 
        className="flex overflow-x-auto no-scrollbar border-b border-gray-200 relative"
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center gap-2 py-4 px-6 font-medium text-sm transition-colors whitespace-nowrap outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 relative",
                isActive 
                  ? "text-[#2563EB]" 
                  : "text-[#64748B] hover:text-[#061B3A]"
              )}
            >
              {Icon && <Icon className="w-4 h-4" />}
              {tab.label}
              {isActive && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2563EB]"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
      
      <div className="pt-6 relative">
        <AnimatePresence mode="wait">
          {tabs.map((tab) => (
            activeTab === tab.id && (
              <motion.div
                key={tab.id}
                role="tabpanel"
                id={`panel-${tab.id}`}
                aria-labelledby={`tab-${tab.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {tab.content}
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
