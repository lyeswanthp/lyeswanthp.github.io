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

interface FeatureCardProps {
  title: string;
  accent: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps & { index: number }> = ({ title, accent, description, index }) => {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      className="glass bracket-frame relative group p-7"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <span className="br-tl" />
      <span className="br-br" />

      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(420px circle at 30% 0%, ${accent}18, transparent 65%)`,
        }}
      />
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-5">
          <span
            className="font-mono-tech text-[10px] tracking-[0.28em]"
            style={{ color: accent, opacity: 0.7 }}
          >
            ◆ {String(index + 1).padStart(2, '0')}
          </span>
          <div
            className="h-px flex-1 ml-4"
            style={{ background: `linear-gradient(90deg, ${accent}40, transparent)` }}
          />
        </div>

        <h3
          className="font-display text-2xl font-medium mb-3"
          style={{ color: accent, textShadow: `0 0 18px ${accent}33` }}
        >
          {title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const About: React.FC = () => {
  const features = [
    {
      title: 'CardioFM',
      accent: '#6ee7ff',
      description:
        'Multimodal ECG foundation model accepted at ISCE 2026. Deployed in ambulances for real-time OMI detection across Grady Memorial & Rochester hospitals.',
    },
    {
      title: 'HPC Engineering',
      accent: '#a78bfa',
      description:
        "Architected GPU monitoring on Emory's HyPER C3 cluster from scratch. Flags misallocated jobs, automates user lifecycle, saving thousands in compute costs.",
    },
    {
      title: 'Models that save',
      accent: '#f5c563',
      description:
        'From training foundation models on 1M+ signals to building the SLURM pipelines and Prometheus dashboards they run on.',
    },
  ];

  return (
    <section
      id="about"
      className="relative py-28 px-6 md:px-12 overflow-hidden"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      {/* Cyber grid */}
      <div className="absolute inset-0 cyber-grid pointer-events-none" />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(110, 231, 255, 0.06) 0%, rgba(167, 139, 250, 0.04) 40%, transparent 70%)',
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
          <span className="section-rule mb-4">// 01 — About</span>
          <h2
            className="font-display text-4xl md:text-5xl font-light mt-3"
            style={{ color: 'var(--text-primary)' }}
          >
            Operating at the seam of <span className="neon-cyan">AI</span> and <span className="neon-violet">medicine</span>.
          </h2>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              title={feature.title}
              accent={feature.accent}
              description={feature.description}
            />
          ))}
        </motion.div>

        {/* Bottom stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="text-center"
        >
          <div
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-sm border font-mono-tech text-[11px] tracking-[0.22em] uppercase mb-5"
            style={{
              borderColor: 'var(--accent-gold-soft)',
              background: 'rgba(245, 197, 99, 0.05)',
              color: 'var(--accent-gold)',
              boxShadow: '0 0 24px -8px var(--accent-gold-soft)',
            }}
          >
            <span className="status-dot" style={{ background: 'var(--accent-gold)', boxShadow: '0 0 10px var(--accent-gold)' }} />
            17+ Publications · OCIT 2024 Best Paper
          </div>
          <p className="text-sm max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Spanning healthcare AI, ECG/PPG signal processing, NLP, computer vision, and fairness-aware ML.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
