import { useEffect, useState } from 'react';
import Head from 'next/head';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

export default function MainLayout({ children, title = "Lovely Yeswanth Panchumarthi - AI Engineer & ML Researcher" }) {
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter();

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
    <div className="min-h-screen flex flex-col bg-dark-800 text-gray-100">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Lovely Yeswanth Panchumarthi - AI Engineer & Machine Learning Researcher" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Neural Network Background Pattern */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" className="stroke-primary-500">
          <pattern id="neural-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="3" className="fill-primary-500" />
            <path d="M10,50 L90,50 M50,10 L50,90 M20,20 L80,80 M20,80 L80,20" strokeWidth="1" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#neural-pattern)" />
        </svg>
      </div>

      {/* Main Content Wrapper */}
      <div 
        className="fixed inset-0 z-0 opacity-30 pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(64, 169, 255, 0.15), transparent 70%)',
          transform: `translateY(${scrollY * 0.1}px)`
        }}
      />

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