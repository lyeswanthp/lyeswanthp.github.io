import React from 'react';
import { motion } from 'framer-motion';

const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1];
const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: bezier,
    },
  },
};

const Research: React.FC = () => {
  return (
    <section
      id="research"
      className="relative py-20 px-6 md:px-12 bg-[#0d0b09]"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(rgba(184,134,11,0.4) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(184,134,11,0.15) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
          className="text-center"
        >
          {/* In Progress Badge */}
          <motion.div variants={fadeUp} className="mb-8">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border"
              style={{
                backgroundColor: 'rgba(184,134,11,0.1)',
                borderColor: 'rgba(184,134,11,0.3)',
                color: '#B8860B',
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: '#B8860B' }}
              />
              In Progress
            </span>
          </motion.div>

          {/* Section Heading */}
          <motion.div variants={fadeUp} className="mb-6">
            <div className="flex items-center justify-center gap-4 mb-2">
              <div
                className="w-12 h-[3px] rounded-full"
                style={{ backgroundColor: '#B8860B' }}
              />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Research
              </h2>
              <div
                className="w-12 h-[3px] rounded-full"
                style={{ backgroundColor: '#B8860B' }}
              />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h3
            variants={fadeUp}
            className="text-2xl md:text-3xl font-bold text-white mb-4"
          >
            Building AI That Matters
          </motion.h3>

          {/* Subheading */}
          <motion.p
            variants={fadeUp}
            className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto"
          >
            17+ publications spanning healthcare AI, multimodal models, and foundation models for biomedical signals.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={fadeUp}>
            <a
              href="https://github.com/lyeswanthp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 border hover:scale-105"
              style={{
                backgroundColor: 'transparent',
                borderColor: '#B8860B',
                color: '#B8860B',
              }}
            >
              View Publications
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;
