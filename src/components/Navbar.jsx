import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2 bg-dark-300/90 backdrop-blur-md shadow-lg' : 'py-4 bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-lg bg-glow-blue/20 border border-glow-blue/50 flex items-center justify-center">
            <span className="text-glow-blue font-mono font-bold text-lg">LY</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-12">
          <Link href="/" className="text-white hover:text-glow-blue transition uppercase tracking-wider text-sm">Home</Link>
          <Link href="/#gallery" className="text-white hover:text-glow-blue transition uppercase tracking-wider text-sm">Gallery</Link>
          <Link href="/#about" className="text-white hover:text-glow-blue transition uppercase tracking-wider text-sm">About Us</Link>
          <Link href="/#faq" className="text-white hover:text-glow-blue transition uppercase tracking-wider text-sm">FAQ</Link>
          <Link href="/#contact" className="text-white hover:text-glow-blue transition uppercase tracking-wider text-sm">Join Us</Link>
        </nav>

        {/* Logo for mobile (right side) */}
        <div className="md:hidden">
          <div className="px-3 py-1 rounded-md bg-glow-blue/20 border border-glow-blue/50">
            <span className="text-glow-blue font-bold text-sm">LOGO</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white hover:text-glow-blue focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            {isMenuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, height: isMenuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 py-3 bg-dark-200 backdrop-blur-md shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-white hover:text-glow-blue transition uppercase tracking-wider text-sm" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/#gallery" className="text-white hover:text-glow-blue transition uppercase tracking-wider text-sm" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
            <Link href="/#about" className="text-white hover:text-glow-blue transition uppercase tracking-wider text-sm" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            <Link href="/#faq" className="text-white hover:text-glow-blue transition uppercase tracking-wider text-sm" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
            <Link href="/#contact" className="text-white hover:text-glow-blue transition uppercase tracking-wider text-sm" onClick={() => setIsMenuOpen(false)}>Join Us</Link>
          </nav>
        </div>
      </motion.div>
    </motion.header>
  );
}