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

const metrics = [
  { value: '0.87', label: 'AUROC · OMI DETECTION', color: 'var(--accent-cyan)' },
  { value: '1M+', label: 'TRAINING SIGNALS', color: 'var(--accent-violet)' },
  { value: '2', label: 'HOSPITAL SYSTEMS', color: 'var(--accent-gold)' },
];

const Research: React.FC = () => {
  return (
    <section
      id="research"
      className="relative py-28 px-6 md:px-12 overflow-hidden"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      {/* Cyber grid */}
      <div className="absolute inset-0 cyber-grid pointer-events-none" />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(110, 231, 255, 0.07) 0%, rgba(167, 139, 250, 0.04) 45%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="mb-14"
        >
          <span className="section-rule mb-4">// 02 — Research</span>
          <h2
            className="font-display text-4xl md:text-5xl font-light mt-3"
            style={{ color: 'var(--text-primary)' }}
          >
            Research that leaves the <span className="neon-cyan">lab</span>.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
          className="grid lg:grid-cols-[1.5fr_1fr] gap-6"
        >
          {/* Flagship — CardioFM */}
          <motion.div
            id="cardiofm"
            variants={fadeUp}
            className="glass bracket-frame relative p-8 scroll-mt-28"
          >
            <span className="br-tl" />
            <span className="br-br" />

            <div className="flex items-center justify-between mb-6 font-mono-tech text-[10px] tracking-[0.22em] text-white/40">
              <span>// FLAGSHIP</span>
              <span
                className="inline-flex items-center gap-2 px-3 py-1 border"
                style={{
                  borderColor: 'var(--accent-cyan-soft)',
                  color: 'var(--accent-cyan)',
                  background: 'rgba(110, 231, 255, 0.05)',
                }}
              >
                <span className="status-dot" />
                ISCE 2026
              </span>
            </div>

            <h3
              className="font-display text-3xl font-medium mb-4"
              style={{ color: 'var(--accent-cyan)', textShadow: '0 0 18px rgba(110, 231, 255, 0.2)' }}
            >
              CardioFM
            </h3>
            <p className="text-sm leading-relaxed mb-8 max-w-xl" style={{ color: 'var(--text-secondary)' }}>
              A multimodal foundation model for ECG, trained on over a million medical
              signals and paired clinical text. Accepted at ISCE 2026 and deployed in
              ambulances for real-time OMI detection across Grady Memorial and Rochester
              hospital systems.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {metrics.map((m, i) => (
                <div key={i} className="border-l pl-4" style={{ borderColor: 'var(--border-primary)' }}>
                  <div
                    className="font-display text-2xl md:text-3xl font-light"
                    style={{ color: m.color, textShadow: `0 0 16px ${m.color === 'var(--accent-cyan)' ? 'rgba(110,231,255,0.25)' : 'transparent'}` }}
                  >
                    {m.value}
                  </div>
                  <div className="font-mono-tech text-[9px] tracking-[0.18em] mt-1 text-white/35">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Publications panel */}
          <motion.div variants={fadeUp} className="glass relative p-8 flex flex-col">
            <div className="font-mono-tech text-[10px] tracking-[0.22em] text-white/40 mb-6">
              // PUBLICATIONS
            </div>

            <div
              className="font-display text-6xl font-light mb-2"
              style={{ color: 'var(--accent-violet)', textShadow: '0 0 18px rgba(167, 139, 250, 0.25)' }}
            >
              17+
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
              Peer-reviewed work spanning healthcare AI, multimodal models, and
              foundation models for biomedical signals — including the OCIT 2024
              Best Paper award.
            </p>

            <a
              href="https://github.com/lyeswanthp"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sweep mt-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 font-mono-tech text-[11px] tracking-[0.22em] uppercase"
              style={{
                border: '1px solid var(--accent-violet)',
                color: 'var(--accent-violet)',
                background: 'rgba(167, 139, 250, 0.06)',
              }}
            >
              View Publications ↗
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;
