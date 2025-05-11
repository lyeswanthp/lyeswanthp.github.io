import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import NeuralNetworkAnimation from './ui/NeuralNetworkAnimation';
import { FaArrowDown } from 'react-icons/fa';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Neural Network Animation Background */}
      <NeuralNetworkAnimation />
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 z-10 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 mb-4 text-sm">
              AI Engineer & Machine Learning Researcher
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="block">Hello, I'm </span>
            <span className="gradient-text">Lovely Yeswanth</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 h-12"
          >
            <Typewriter
              options={{
                strings: [
                  'Building intelligent AI systems',
                  'Implementing ML solutions',
                  'Fine-tuning LLMs',
                  'Developing RAG applications',
                  'Creating Computer Vision models'
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col md:flex-row justify-center gap-4 mt-8"
          >
            <a 
              href="#projects" 
              className="px-8 py-3 bg-primary-600 hover:bg-primary-500 text-white font-medium rounded-lg transition shadow-lg hover:shadow-primary-500/30 flex items-center justify-center"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-transparent hover:bg-dark-700 border border-primary-500 text-primary-400 font-medium rounded-lg transition hover:text-primary-300 flex items-center justify-center"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="cursor-pointer"
        >
          <FaArrowDown className="text-primary-400 text-2xl" />
        </motion.div>
      </motion.div>

      {/* Hero Curve Shape */}
      <svg className="absolute bottom-0 left-0 w-full z-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
        <path 
          fill="#1A1A24" 
          fillOpacity="1" 
          d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,74.7C672,75,768,53,864,48C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"
        ></path>
      </svg>
    </section>
  );
}