import React from 'react';
import { motion } from 'framer-motion';

const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: bezier } },
};

const Research: React.FC = () => {
  return (
    <section id="research" className="relative py-28 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="mb-14"
        >
          <span className="label mb-4">Research</span>
          <h2 className="font-serif-display text-4xl md:text-5xl font-medium mt-3 leading-tight">
            Research that leaves the lab.
          </h2>
        </motion.div>

        {/* Current focus */}
        <motion.div
          id="cardiofm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="card p-8 scroll-mt-28"
        >
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-serif-display text-2xl font-medium">
              Current focus
            </h3>
            <span
              className="text-xs px-3 py-1 rounded-full border"
              style={{ borderColor: 'var(--line)', color: 'var(--accent)' }}
            >
              In progress
            </span>
          </div>
          <p className="text-base leading-relaxed max-w-3xl" style={{ color: 'var(--text-soft)' }}>
            A next-generation ECG foundation model that pretrains a single
            encoder under three self-supervised objectives at once: a
            joint-embedding predictive objective (JEPA) with an EMA teacher,
            contrastive alignment between 12-lead ECGs and their clinical text
            reports, and masked waveform reconstruction. A cross-pattern
            attention scheme lets each token attend along its own lead and its
            timepoint, encoding the structure of the 12-lead signal directly.
            The aim is representations that stay diagnostic while remaining
            grounded in the raw waveform.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;
