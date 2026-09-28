import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { navigationItems } from '../../data/navigation';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { Button } from '../ui/Button';
import { MobileNav } from './MobileNav';
import { cn } from '../../utils/cn';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 10;
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path || (path !== '/' && location.pathname.startsWith(path));

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm',
          isScrolled ? 'py-3 shadow-sm border-b border-slate-200' : 'py-5'
        )}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 flex items-center justify-between">
          <Link to="/" className="flex items-center" aria-label="Kendrix Home">
            <img 
              src="/kendrix-logo.png" 
              alt="Kendrix Logo" 
              className="w-auto max-h-11 md:max-h-12 object-contain" 
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navigationItems.map((item) => {
              if (item.children) {
                return (
                  <div 
                    key={item.label} 
                    className="relative"
                    onMouseEnter={() => setHoveredNav(item.label)}
                    onMouseLeave={() => setHoveredNav(null)}
                  >
                    <Link 
                      to={item.href}
                      className="text-sm font-semibold text-kendrix-navy hover:text-kendrix-blue transition-colors py-2 flex items-center gap-1 relative"
                    >
                      {item.label}
                      {isActive(item.href) && (
                        <motion.div
                          layoutId="nav-indicator"
                          className="absolute -bottom-[2px] left-0 right-0 h-[2px] bg-kendrix-blue"
                          initial={false}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </Link>
                    <AnimatePresence>
                      {hoveredNav === item.label && (
                        <motion.div 
                          className="absolute left-0 top-full pt-2 w-64"
                          initial={{ opacity: 0, y: -6, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -6, scale: 0.97 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-2 flex flex-col gap-1">
                            {item.children.map(child => (
                              <Link 
                                key={child.label}
                                to={child.href}
                                className="px-4 py-2.5 text-sm text-slate-600 hover:text-kendrix-blue hover:bg-slate-50 rounded-lg transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
                <Link 
                  key={item.label} 
                  to={item.href}
                  className="text-sm font-semibold text-kendrix-navy hover:text-kendrix-blue transition-colors py-2 relative"
                >
                  {item.label}
                  {isActive(item.href) && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-[2px] left-0 right-0 h-[2px] bg-kendrix-blue"
                      initial={false}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center">
            <Button asLink to="/contact">Contact Us</Button>
          </div>

          <button 
            className="lg:hidden p-2 text-kendrix-navy hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <MobileNav 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
}
