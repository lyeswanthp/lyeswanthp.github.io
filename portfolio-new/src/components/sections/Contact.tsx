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

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative py-20 px-6 md:px-12 bg-[#0d0b09]"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(184,134,11,0.1) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
          className="text-center"
        >
          {/* Section Heading */}
          <motion.div variants={fadeUp} className="mb-8">
            <div className="flex items-center justify-center gap-4 mb-2">
              <div
                className="w-12 h-[3px] rounded-full"
                style={{ backgroundColor: '#B8860B' }}
              />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Contact
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
            Let's Connect
          </motion.h3>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-gray-400 text-lg mb-8"
          >
            I'm always open to discussing new opportunities, collaborations, or research projects in AI/ML. Feel free to reach out.
          </motion.p>

          {/* Email */}
          <motion.div variants={fadeUp} className="mb-8">
            <a
              href="mailto:lpanchu@emory.edu"
              className="text-xl font-medium hover:underline"
              style={{ color: '#B8860B' }}
            >
              lpanchu@emory.edu
            </a>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={fadeUp}>
            <a
              href="mailto:lpanchu@emory.edu"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 border hover:scale-105"
              style={{
                backgroundColor: 'transparent',
                borderColor: '#B8860B',
                color: '#B8860B',
              }}
            >
              Send Me an Email
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
