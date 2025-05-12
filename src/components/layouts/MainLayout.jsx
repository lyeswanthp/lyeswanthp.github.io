import { useEffect, useState } from 'react';
import Head from 'next/head';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { motion } from 'framer-motion';

export default function MainLayout({ children, title = "Artificial Intelligence - Lovely Yeswanth" }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-dark-300 text-white">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Artificial Intelligence - AI Engineer & Machine Learning Researcher" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Glowing Radial Gradient */}
      <div 
        className="fixed inset-0 z-0 opacity-20 pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 50% 30%, rgba(0, 163, 255, 0.15), transparent 70%)',
          transform: `translateY(${scrollY * 0.1}px)`
        }}
      />

      {/* Circuit Background */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full">
          <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M10,10 L90,10 M10,50 L90,50 M10,90 L90,90 M50,10 L50,90" 
                  stroke="#00A3FF" strokeWidth="0.5" className="circuit-line" />
            <circle cx="10" cy="10" r="2" fill="#00A3FF" className="node-pulse" />
            <circle cx="50" cy="10" r="2" fill="#00A3FF" className="node-pulse" />
            <circle cx="90" cy="10" r="2" fill="#00A3FF" className="node-pulse" />
            <circle cx="10" cy="50" r="2" fill="#00A3FF" className="node-pulse" />
            <circle cx="50" cy="50" r="2" fill="#00A3FF" className="node-pulse" />
            <circle cx="90" cy="50" r="2" fill="#00A3FF" className="node-pulse" />
            <circle cx="10" cy="90" r="2" fill="#00A3FF" className="node-pulse" />
            <circle cx="50" cy="90" r="2" fill="#00A3FF" className="node-pulse" />
            <circle cx="90" cy="90" r="2" fill="#00A3FF" className="node-pulse" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>
      </div>

      <div className="z-10 w-full mx-auto flex-grow">
        <Navbar />
        <motion.main 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-grow"
        >
          {children}
        </motion.main>
      </div>
      <Footer />
    </div>
  );
}