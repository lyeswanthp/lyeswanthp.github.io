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

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  accent: string;
  highlights: string[];
  stack: string[];
}

const ExperienceItem: React.FC<{ item: ExperienceItem; index: number }> = ({ item, index }) => {
  return (
    <motion.div variants={fadeUp} className="relative pl-8 pb-12 last:pb-0">
      {/* Timeline line */}
      <div
        className="absolute left-[7px] top-2 bottom-0 w-px"
        style={{ background: `linear-gradient(180deg, ${item.accent}66, transparent)` }}
      />

      {/* Timeline node */}
      <div
        className="absolute left-0 top-1.5 w-[15px] h-[15px] border"
        style={{
          borderColor: item.accent,
          background: 'var(--bg-primary)',
          boxShadow: `0 0 12px ${item.accent}55`,
          transform: 'rotate(45deg)',
        }}
      />

      {/* Content */}
      <div className="glass bracket-frame relative p-7">
        <span className="br-tl" />
        <span className="br-br" />

        {/* Header */}
        <div className="mb-5">
          <div className="flex items-center justify-between gap-4 mb-2">
            <h3
              className="font-display text-xl md:text-2xl font-medium"
              style={{ color: item.accent, textShadow: `0 0 18px ${item.accent}33` }}
            >
              {item.role}
            </h3>
            <span className="font-mono-tech text-[10px] tracking-[0.24em] text-white/30 hidden sm:block">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2 font-mono-tech text-[11px] tracking-[0.12em]" style={{ color: 'var(--text-secondary)' }}>
            <span style={{ color: 'var(--text-primary)' }}>{item.company}</span>
            <span className="text-white/20">·</span>
            <span>{item.period}</span>
            <span className="text-white/20">·</span>
            <span>{item.location}</span>
          </div>
        </div>

        {/* Highlights */}
        <ul className="space-y-2.5 mb-5">
          {item.highlights.map((highlight, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <span className="mt-[7px] w-1.5 h-1.5 flex-shrink-0" style={{ backgroundColor: item.accent, transform: 'rotate(45deg)' }} />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-2 pt-4 border-t" style={{ borderColor: 'var(--border-primary)' }}>
          {item.stack.map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 font-mono-tech text-[10px] tracking-[0.14em] uppercase border"
              style={{ borderColor: 'var(--border-primary)', color: 'var(--text-secondary)' }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      role: 'HPC & Cloud Research Engineer',
      company: 'Emory University — Research Computing',
      period: 'Aug 2024 – Present',
      location: 'Atlanta, GA',
      accent: '#6ee7ff',
      highlights: [
        'Building a multimodal foundation model combining ECG signals with clinical text for diagnostic applications, achieving state-of-the-art performance on downstream tasks',
        "Architected GPU monitoring for Emory's HyPER C3 cluster from scratch with Python and NVIDIA DCGM, streaming utilization metrics to Prometheus and Grafana — flags misallocated jobs and saves thousands in compute costs",
        'Automated user lifecycle management through SLURM accounting database integration',
        'Designed testing pipelines for AWS ParallelCluster upgrades, verifying compute-node functionality, user permissions, and ML workload compatibility',
        'Built distributed ML training pipelines on AWS and GCP, and a RAG system for biomedical document understanding',
      ],
      stack: ['Python', 'PyTorch', 'Slurm', 'NVIDIA DCGM', 'Prometheus', 'Grafana', 'AWS', 'GCP'],
    },
    {
      role: 'ML Research Assistant',
      company: 'MAIX Lab, Emory University',
      period: 'May 2024 – Present',
      location: 'Atlanta, GA',
      accent: '#a78bfa',
      highlights: [
        'Published peer-reviewed research on biomedical question answering and ECG/PPG signal processing',
        'Developed CNN-based models for automated disease detection from medical scans',
        'Contributed open-source medical imaging datasets to the research community',
      ],
      stack: ['PyTorch', 'Computer Vision', 'ECG/PPG', 'Deep Learning'],
    },
    {
      role: 'Machine Learning Researcher',
      company: 'University of Winnipeg',
      period: 'Jul 2023 – Oct 2023',
      location: 'Winnipeg, Canada',
      accent: '#f5c563',
      highlights: [
        'Published research in medical AI focused on diagnostic imaging and disease classification',
        'Collaborated with medical professionals to align models with clinical workflows and diagnostic standards',
      ],
      stack: ['TensorFlow', 'Medical Imaging', 'Classification'],
    },
    {
      role: 'Prompt Engineer',
      company: 'Insignia Consultancy',
      period: 'Jan 2023 – Jul 2023',
      location: 'Remote',
      accent: '#ff7ad9',
      highlights: [
        'Engineered prompt templates for GPT-4 and Claude, improving response quality and consistency in customer-facing applications',
        'Built testing frameworks to evaluate prompt performance and surface edge cases in LLM behavior',
        'Refined model outputs with product teams based on user feedback and business requirements',
      ],
      stack: ['LLMs', 'Prompt Engineering', 'Evaluation'],
    },
  ];

  return (
    <section
      id="experience"
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
            'radial-gradient(circle, rgba(167, 139, 250, 0.05) 0%, rgba(110, 231, 255, 0.04) 40%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="mb-14"
        >
          <span className="section-rule mb-4">// 03 — Experience</span>
          <h2
            className="font-display text-4xl md:text-5xl font-light mt-3"
            style={{ color: 'var(--text-primary)' }}
          >
            Where the work <span className="neon-violet">happened</span>.
          </h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
        >
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} item={experience} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
