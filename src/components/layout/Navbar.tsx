import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Shield, ExternalLink } from 'lucide-react';
import { navLinks } from '../../data/siteData';
import { useScrollSpy } from '../../hooks/useScrollSpy';

const LAUNCH_URL = 'https://adr-2.onrender.com';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useScrollSpy(
    navLinks.map((l) => l.href.replace('#', '')),
    120
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-navy-900/5 border-b border-gray-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-9 h-9 bg-gradient-to-br from-navy-700 to-teal-500 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-navy-900 tracking-tight leading-none">
                  EMERK
                </span>
                <span className="text-[9px] text-gray-400 font-medium tracking-wider uppercase leading-none mt-0.5">
                  Medication Intelligence
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeId === link.href.replace('#', '');
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'text-teal-600 bg-teal-50'
                        : 'text-gray-600 hover:text-navy-800 hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.a
                href={LAUNCH_URL}
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-navy-700 to-navy-800 text-white text-sm font-semibold rounded-xl shadow-lg shadow-navy-900/20 hover:shadow-xl transition-all duration-300"
              >
                Launch EMERK
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-navy-900/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-white shadow-2xl z-50 lg:hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-navy-700 to-teal-500 rounded-xl flex items-center justify-center">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg font-bold text-navy-900">EMERK</span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                <div className="space-y-1">
                  {navLinks.map((link, i) => (
                    <motion.button
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => handleNavClick(link.href)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                        activeId === link.href.replace('#', '')
                          ? 'text-teal-600 bg-teal-50'
                          : 'text-gray-600 hover:text-navy-800 hover:bg-gray-50'
                      }`}
                    >
                      {link.label}
                    </motion.button>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <a
                    href={LAUNCH_URL}
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-gradient-to-r from-navy-700 to-navy-800 text-white font-semibold rounded-xl shadow-lg"
                  >
                    Launch EMERK
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
