import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Research', href: '#research' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.1],
    ['rgba(13, 11, 9, 0)', 'rgba(13, 11, 9, 0.95)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8860B] to-transparent transform origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all ${isScrolled ? 'backdrop-blur-md border-b border-white/[0.04]' : ''}`}
        style={{ backgroundColor }}
      >
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all ${
            isScrolled ? 'py-4' : 'py-6'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#home"
              className="text-2xl font-bold text-[#B8860B]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              LYP
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  className="text-white/50 hover:text-[#B8860B] transition-colors text-sm tracking-wide"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="https://drive.google.com/file/d/1v8EoGp7CwuMjfkC0qoE7uoC6Jz8g6P9R/view"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 border border-[#B8860B] text-[#B8860B] text-sm tracking-wide rounded-sm hover:bg-[#B8860B] hover:text-[#0d0b09] transition-all duration-300"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </motion.a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white/50 hover:text-[#B8860B] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          <motion.div
            className="md:hidden overflow-hidden"
            initial={false}
            animate={{
              height: isMobileMenuOpen ? 'auto' : 0,
              opacity: isMobileMenuOpen ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="pt-4 pb-2 space-y-2">
              {navItems.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  className="block py-2 text-white/50 hover:text-[#B8860B] transition-colors text-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    x: isMobileMenuOpen ? 0 : -20,
                  }}
                  transition={{ delay: idx * 0.05 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="https://drive.google.com/file/d/1v8EoGp7CwuMjfkC0qoE7uoC6Jz8g6P9R/view"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 text-[#B8860B] font-medium text-sm"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resume
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.nav>


    </>
  );
}
