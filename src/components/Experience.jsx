import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedText from './ui/AnimatedText';
import { FaLaptopCode, FaBrain, FaMicrochip, FaDatabase } from 'react-icons/fa';

export default function Experience() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-dark-800">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <AnimatedText
            text="Professional Experience"
            className="text-3xl md:text-4xl font-bold mb-4 text-center"
            TextElement="h2"
          />
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto rounded-full"></div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-4xl mx-auto"
        >
          {/* Timeline Experience */}
          <div className="relative">
            {/* Line */}
            <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-primary-600 via-primary-500 to-primary-400 transform -translate-x-1/2"></div>

            {/* Experience 1 */}
            <motion.div variants={itemVariants} className="relative mb-16">
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-8 order-2 md:order-1 mt-8 md:mt-0">
                  <h3 className="text-2xl font-bold text-white">AI Engineer</h3>
                  <p className="text-gray-400 mb-2">Emory University</p>
                  <p className="text-gray-500">August 2024 - March 2025</p>
                  <div className="card-highlight p-4 mt-4">
                    <ul className="text-gray-300 space-y-3">
                      <li className="flex md:flex-row-reverse">
                        <span className="md:text-right">Designed and integrated an ECG-Text contrastive learning framework utilizing 1D ResNet and Vision Transformer models.</span>
                        <FaBrain className="text-primary-400 mr-2 md:mr-0 md:ml-2 mt-1 flex-shrink-0" />
                      </li>
                      <li className="flex md:flex-row-reverse">
                        <span className="md:text-right">Engineered a PyTorch-based Distributed Data Parallel (DDP) training pipeline for efficient large-scale deep learning.</span>
                        <FaMicrochip className="text-primary-400 mr-2 md:mr-0 md:ml-2 mt-1 flex-shrink-0" />
                      </li>
                      <li className="flex md:flex-row-reverse">
                        <span className="md:text-right">Implemented GPT-based models with adaptive learning rates, mixed-precision training (AMP), and advanced loss functions.</span>
                        <FaLaptopCode className="text-primary-400 mr-2 md:mr-0 md:ml-2 mt-1 flex-shrink-0" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="z-10 order-1 md:order-2">
                  <div className="w-12 h-12 rounded-full bg-dark-800 border-4 border-primary-500 flex items-center justify-center">
                    <FaBrain className="text-primary-400 text-lg" />
                  </div>
                </div>
                <div className="flex-1 md:pl-8 order-3 hidden md:block"></div>
              </div>
            </motion.div>

            {/* Experience 2 */}
            <motion.div variants={itemVariants} className="relative">
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex-1 md:pr-8 order-2 md:order-1 hidden md:block"></div>
                <div className="z-10 order-1 md:order-2">
                  <div className="w-12 h-12 rounded-full bg-dark-800 border-4 border-primary-500 flex items-center justify-center">
                    <FaLaptopCode className="text-primary-400 text-lg" />
                  </div>
                </div>
                <div className="flex-1 md:pl-8 order-3 mt-8 md:mt-0">
                  <h3 className="text-2xl font-bold text-white">Software Engineer Intern</h3>
                  <p className="text-gray-400 mb-2">Insignia Consultancy Solutions</p>
                  <p className="text-gray-500">June 2023 - August 2023</p>
                  <div className="card-highlight p-4 mt-4">
                    <ul className="text-gray-300 space-y-3">
                      <li className="flex">
                        <FaLaptopCode className="text-primary-400 mr-2 mt-1 flex-shrink-0" />
                        <span>Engineered a responsive web application for health topic analysis using Django, improving user engagement by 20%.</span>
                      </li>
                      <li className="flex">
                        <FaDatabase className="text-primary-400 mr-2 mt-1 flex-shrink-0" />
                        <span>Optimized a keyword extraction system using NLP techniques (tokenization, TF-IDF, GloVe) that processed 5000+ articles monthly.</span>
                      </li>
                      <li className="flex">
                        <FaBrain className="text-primary-400 mr-2 mt-1 flex-shrink-0" />
                        <span>Integrated Beautiful Soup for web scraping and implemented ChatGPT API for auto-generating insightful articles.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}