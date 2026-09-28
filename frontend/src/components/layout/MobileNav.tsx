import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navigationItems } from '../../data/navigation';
import { Button } from '../ui/Button';
import { staggerContainerFast, staggerItem } from '@/config/motion';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-kendrix-navy/20 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div
            ref={overlayRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-5 border-b border-slate-100">
              <img src="/kendrix-logo.png" alt="Kendrix Logo" className="h-8 w-auto" />
              <button
                onClick={onClose}
                className="p-2 -mr-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-6 px-5 flex flex-col gap-6 custom-scrollbar">
              <motion.nav 
                variants={staggerContainerFast}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-4"
              >
                {navigationItems.map((item) => (
                  <motion.div key={item.label} variants={staggerItem} className="flex flex-col gap-2">
                    <Link
                      to={item.href}
                      onClick={onClose}
                      className="text-xl font-bold text-kendrix-navy hover:text-kendrix-blue transition-colors"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="flex flex-col gap-3 pl-4 border-l-2 border-slate-100 mt-2">
                        {item.children.map(child => (
                          <Link
                            key={child.label}
                            to={child.href}
                            onClick={onClose}
                            className="text-base font-medium text-slate-600 hover:text-kendrix-blue transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.nav>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-auto pt-6 border-t border-slate-100"
              >
                <Button asLink to="/contact" className="w-full" onClick={onClose}>
                  Contact Us
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
