import React from 'react';
import { motion } from 'framer-motion';

const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1];
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: bezier } },
};

const stats = [
  { value: '10+', label: 'Projects' },
  { value: 'ISCE 2026', label: 'Best Paper' },
  { value: '17+', label: 'Publications' },
];

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12">
      <div className="max-w-5xl mx-auto w-full pt-36 pb-24">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.p variants={fadeUp} className="label mb-7">
            AI/ML Engineer &amp; Researcher · Emory University, Atlanta
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-serif-display font-medium text-[clamp(3rem,8vw,5.5rem)] leading-[1.02] tracking-tight mb-8"
          >
            Lovely Yeswanth
            <br />
            Panchumarthi<span style={{ color: 'var(--accent)' }}>.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl leading-relaxed max-w-2xl mb-12"
            style={{ color: 'var(--text-soft)' }}
          >
            Designing deep learning architectures for ECG and biomedical
            waveforms, training multimodal foundation models on over a million
            signals, and deploying them in ambulances for real-time heart
            attack (OMI) detection.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mb-20">
            <a href="#research" className="btn-solid">
              See my research
            </a>
            <a href="#contact" className="btn-outline">
              Get in touch
            </a>
            <a
              href="https://drive.google.com/file/d/1v8EoGp7CwuMjfkC0qoE7uoC6Jz8g6P9R/view"
              target="_blank"
              rel="noopener noreferrer"
              className="link-plain text-sm"
            >
              Resume ↗
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="grid grid-cols-3 gap-8 pt-8 border-t"
            style={{ borderColor: 'var(--line)' }}
          >
            {stats.map((s, i) => (
              <div key={i}>
                <div className="font-serif-display text-2xl md:text-3xl font-medium mb-1">
                  {s.value}
                </div>
                <div className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
