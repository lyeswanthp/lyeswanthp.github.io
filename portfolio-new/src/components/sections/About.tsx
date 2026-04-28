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

const FeatureCard: React.FC<FeatureCardProps> = ({ title, accent, description }) => {
  return (
    <motion.div
      variants={fadeUp}
      className="relative group p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-[#B8860B]/50 transition-all duration-300"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${accent}15, transparent 70%)`,
        }}
      />
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: accent }}
          />
          <h3
            className="text-lg font-semibold text-white"
            style={{ color: accent }}
          >
            {title}
          </h3>
        </div>
        <p className="text-gray-300 text-sm leading-relaxed">
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
      accent: '#B8860B',
      description:
        'Multimodal ECG foundation model accepted at ISCE 2026. Deployed in ambulances for real-time OMI detection across Grady Memorial & Rochester hospitals.',
    },
    {
      title: 'HPC Engineering',
      accent: '#6B8E23',
      description:
        'Architected GPU monitoring on Emory\'s HyPER C3 cluster from scratch. Flags misallocated jobs, automates user lifecycle, saving thousands in compute costs.',
    },
    {
      title: 'Models that save',
      accent: '#708090',
      description:
        'From training foundation models on 1M+ signals to building the SLURM pipelines and Prometheus dashboards they run on.',
    },
  ];

  return (
    <section
      id="about"
      className="relative py-20 px-6 md:px-12 bg-[#0d0b09]"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(184,134,11,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-2">
            <div
              className="w-12 h-[3px] rounded-full"
              style={{ backgroundColor: '#B8860B' }}
            />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              About
            </h2>
          </div>
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
              title={feature.title}
              accent={feature.accent}
              description={feature.description}
            />
          ))}
        </motion.div>

        {/* Bottom Stats Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="text-center"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#CD853F]/30 bg-[#CD853F]/10 mb-4"
          >
            <span
              className="text-lg font-bold"
              style={{ color: '#CD853F' }}
            >
              17+ Publications
            </span>
          </div>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Spanning healthcare AI, ECG/PPG signal processing, NLP, computer vision, and fairness-aware ML. Best Paper Award at OCIT 2024.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
