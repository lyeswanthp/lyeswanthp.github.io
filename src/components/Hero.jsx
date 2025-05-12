import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-dark-300">
      {/* Circuit Pattern Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="circuit-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M10,10 L90,10 M10,50 L90,50 M10,90 L90,90 M50,10 L50,90" 
                  stroke="#00A3FF" strokeWidth="0.5" fill="none" />
            <circle cx="10" cy="10" r="2" fill="#00A3FF" />
            <circle cx="50" cy="10" r="2" fill="#00A3FF" />
            <circle cx="90" cy="10" r="2" fill="#00A3FF" />
            <circle cx="10" cy="50" r="2" fill="#00A3FF" />
            <circle cx="50" cy="50" r="2" fill="#00A3FF" />
            <circle cx="90" cy="50" r="2" fill="#00A3FF" />
            <circle cx="10" cy="90" r="2" fill="#00A3FF" />
            <circle cx="50" cy="90" r="2" fill="#00A3FF" />
            <circle cx="90" cy="90" r="2" fill="#00A3FF" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 z-10 flex items-center">
        <div className="w-full md:w-1/2 pr-0 md:pr-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white tracking-wider mb-4"
          >
            ARTIFICIAL<br/>INTELLIGENCE
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl font-light text-gray-300 mb-6"
          >
            AI Engineer & Machine Learning Researcher
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400 mb-8 max-w-lg"
          >
            Specializing in deep learning, natural language processing, and 
            building intelligent systems that solve complex problems.
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="px-8 py-3 bg-transparent border-2 border-glow-blue text-glow-blue rounded-md hover:bg-glow-blue hover:text-white hover:shadow-lg hover:shadow-glow-blue/30 transition-all uppercase tracking-wider font-medium"
          >
            VIEW PROJECTS
          </motion.button>
        </div>
        
        {/* AI Head Visualization */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="hidden md:block w-1/2"
        >
          <AIHeadVisualization />
        </motion.div>
      </div>
      
      {/* Social Media Icons */}
      <div className="absolute bottom-10 right-10 flex space-x-4">
        <a href="#" className="text-gray-400 hover:text-glow-blue transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-glow-blue transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.21c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
          </svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-glow-blue transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        </a>
      </div>
    </section>
  );
}

// AI Head Visualization Component
function AIHeadVisualization() {
  return (
    <div className="relative w-full h-full">
      <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Base head shape */}
        <path 
          d="M200,50 C300,50 350,150 350,250 C350,350 300,450 200,450 C100,450 50,350 50,250 C50,150 100,50 200,50 Z" 
          stroke="#00A3FF" 
          strokeWidth="1.5" 
          fill="none" 
          opacity="0.8"
        />
        
        {/* Wireframe face elements */}
        <path d="M150,200 L170,180 L230,180 L250,200" stroke="#00A3FF" strokeWidth="1" fill="none" />
        <path d="M160,300 C180,320 220,320 240,300" stroke="#00A3FF" strokeWidth="1" fill="none" />
        
        {/* Eyes */}
        <ellipse cx="160" cy="180" rx="15" ry="10" stroke="#00A3FF" strokeWidth="1" fill="none" />
        <ellipse cx="240" cy="180" rx="15" ry="10" stroke="#00A3FF" strokeWidth="1" fill="none" />
        <circle cx="160" cy="180" r="5" fill="#00A3FF" opacity="0.8" />
        <circle cx="240" cy="180" r="5" fill="#00A3FF" opacity="0.8" />
        
        {/* Network nodes and connections */}
        <circle cx="100" cy="120" r="4" fill="#00A3FF" opacity="0.7" />
        <circle cx="300" cy="120" r="4" fill="#00A3FF" opacity="0.7" />
        <circle cx="150" cy="80" r="4" fill="#00A3FF" opacity="0.7" />
        <circle cx="250" cy="80" r="4" fill="#00A3FF" opacity="0.7" />
        <circle cx="200" cy="60" r="4" fill="#00A3FF" opacity="0.7" />
        <circle cx="80" cy="200" r="4" fill="#00A3FF" opacity="0.7" />
        <circle cx="320" cy="200" r="4" fill="#00A3FF" opacity="0.7" />
        <circle cx="120" cy="300" r="4" fill="#00A3FF" opacity="0.7" />
        <circle cx="280" cy="300" r="4" fill="#00A3FF" opacity="0.7" />
        <circle cx="200" cy="350" r="4" fill="#00A3FF" opacity="0.7" />
        
        {/* Connecting lines */}
        <path d="M100,120 L150,80 L200,60 L250,80 L300,120" stroke="#00A3FF" strokeWidth="0.5" fill="none" opacity="0.5" />
        <path d="M100,120 L80,200 L120,300 L200,350 L280,300 L320,200 L300,120" stroke="#00A3FF" strokeWidth="0.5" fill="none" opacity="0.5" />
        <path d="M150,80 L160,180" stroke="#00A3FF" strokeWidth="0.5" fill="none" opacity="0.5" />
        <path d="M250,80 L240,180" stroke="#00A3FF" strokeWidth="0.5" fill="none" opacity="0.5" />
        <path d="M80,200 L160,180" stroke="#00A3FF" strokeWidth="0.5" fill="none" opacity="0.5" />
        <path d="M320,200 L240,180" stroke="#00A3FF" strokeWidth="0.5" fill="none" opacity="0.5" />
        <path d="M120,300 L160,300" stroke="#00A3FF" strokeWidth="0.5" fill="none" opacity="0.5" />
        <path d="M280,300 L240,300" stroke="#00A3FF" strokeWidth="0.5" fill="none" opacity="0.5" />
        
        {/* Circuit elements */}
        <path d="M150,420 L250,420" stroke="#00A3FF" strokeWidth="0.8" fill="none" />
        <path d="M150,420 L150,400" stroke="#00A3FF" strokeWidth="0.8" fill="none" />
        <path d="M250,420 L250,400" stroke="#00A3FF" strokeWidth="0.8" fill="none" />
        <path d="M180,400 L220,400" stroke="#00A3FF" strokeWidth="0.8" fill="none" />
        <path d="M180,400 L180,380" stroke="#00A3FF" strokeWidth="0.8" fill="none" />
        <path d="M220,400 L220,380" stroke="#00A3FF" strokeWidth="0.8" fill="none" />
        <circle cx="150" cy="420" r="3" fill="#00A3FF" />
        <circle cx="250" cy="420" r="3" fill="#00A3FF" />
        <circle cx="180" cy="400" r="3" fill="#00A3FF" />
        <circle cx="220" cy="400" r="3" fill="#00A3FF" />
        
        {/* Glowing effect */}
        <circle cx="200" cy="250" r="150" fill="url(#radialGlow)" opacity="0.2" />
        <defs>
          <radialGradient id="radialGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#00A3FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00A3FF" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}