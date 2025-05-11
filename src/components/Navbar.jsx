import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { RiMailLine } from 'react-icons/ri';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2 bg-dark-800/90 backdrop-blur-md shadow-lg' : 'py-4 bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary-600 to-primary-400 flex items-center justify-center shadow-lg">
            <span className="text-white font-mono font-bold text-lg">LY</span>
          </div>
          <span className="hidden md:block text-lg font-medium text-white code-text">
            lovely<span className="text-primary-500">yeswanth</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/#about" className="text-gray-300 hover:text-primary-400 transition">About</Link>
          <Link href="/#experience" className="text-gray-300 hover:text-primary-400 transition">Experience</Link>
          <Link href="/#projects" className="text-gray-300 hover:text-primary-400 transition">Projects</Link>
          <Link href="/#skills" className="text-gray-300 hover:text-primary-400 transition">Skills</Link>
          <Link href="/#contact" className="text-gray-300 hover:text-primary-400 transition">Contact</Link>
        </nav>

        {/* Social Links */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://github.com/lyeswanthp" target="_blank" rel="noopener noreferrer"
            className="text-gray-300 hover:text-primary-400 transition" aria-label="GitHub">
            <FaGithub size={22} />
          </a>
          <a href="https://linkedin.com/in/lovelyyeswanth" target="_blank" rel="noopener noreferrer"
            className="text-gray-300 hover:text-primary-400 transition" aria-label="LinkedIn">
            <FaLinkedin size={22} />
          </a>
          <a href="mailto:Lpanch2@emory.edu"
            className="text-gray-300 hover:text-primary-400 transition" aria-label="Email">
            <RiMailLine size={22} />
          </a>
          <a href="/CV_LovelyYeswanth.pdf" download
            className="ml-4 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white px-4 py-2 rounded-md transition shadow-md hover:shadow-primary-500/20">
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-300 hover:text-primary-400 focus:outline-none"
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
        <div className="container mx-auto px-4 py-3 bg-dark-700/90 backdrop-blur-md shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link href="/#about" className="text-gray-300 hover:text-primary-400 transition" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/#experience" className="text-gray-300 hover:text-primary-400 transition" onClick={() => setIsMenuOpen(false)}>Experience</Link>
            <Link href="/#projects" className="text-gray-300 hover:text-primary-400 transition" onClick={() => setIsMenuOpen(false)}>Projects</Link>
            <Link href="/#skills" className="text-gray-300 hover:text-primary-400 transition" onClick={() => setIsMenuOpen(false)}>Skills</Link>
            <Link href="/#contact" className="text-gray-300 hover:text-primary-400 transition" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            
            <div className="flex items-center space-x-4 pt-2">
              <a href="https://github.com/lyeswanthp" target="_blank" rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-400 transition" aria-label="GitHub">
                <FaGithub size={22} />
              </a>
              <a href="https://linkedin.com/in/lovelyyeswanth" target="_blank" rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-400 transition" aria-label="LinkedIn">
                <FaLinkedin size={22} />
              </a>
              <a href="mailto:Lpanch2@emory.edu"
                className="text-gray-300 hover:text-primary-400 transition" aria-label="Email">
                <RiMailLine size={22} />
              </a>
              <a href="/CV_LovelyYeswanth.pdf" download
                className="bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white px-3 py-1 rounded-md transition text-sm">
                Resume
              </a>
            </div>
          </nav>
        </div>
      </motion.div>
    </motion.header>
  );
}