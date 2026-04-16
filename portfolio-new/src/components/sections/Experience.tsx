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
  bullets?: string[];
}

const ExperienceItem: React.FC<{ item: ExperienceItem }> = ({ item }) => {
  return (
    <motion.div
      variants={fadeUp}
      className="relative pl-8 pb-12 last:pb-0"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Timeline line */}
      <div
        className="absolute left-[7px] top-2 bottom-0 w-[2px]"
        style={{ backgroundColor: `${item.accent}40` }}
      />

      {/* Timeline dot */}
      <div
        className="absolute left-0 top-1 w-4 h-4 rounded-full border-4 border-[#0d0b09]"
        style={{ backgroundColor: item.accent }}
      />

      {/* Content */}
      <div
        className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
      >
        {/* Header */}
        <div className="mb-4">
          <h3
            className="text-xl font-semibold mb-1"
            style={{ color: item.accent }}
          >
            {item.role}
          </h3>
          <div className="flex flex-wrap items-center gap-2 text-gray-300 text-sm">
            <span className="font-medium">{item.company}</span>
            <span className="text-gray-600">|</span>
            <span>{item.period}</span>
            <span className="text-gray-600">|</span>
            <span>{item.location}</span>
          </div>
        </div>

        {/* Highlights */}
        <ul className="space-y-2">
          {item.highlights.map((highlight, idx) => (
            <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
              <div
                className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                style={{ backgroundColor: item.accent }}
              />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        {/* Bullet points if present */}
        {item.bullets && item.bullets.length > 0 && (
          <ul className="mt-4 space-y-2">
            {item.bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-400 text-sm">
                <div
                  className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: '#4a4a4a' }}
                />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      role: 'HPC & Cloud Research Engineer',
      company: 'Emory University - Research Computing',
      period: 'Aug 2024 - Present',
      location: 'Atlanta, GA',
      accent: '#B8860B',
      highlights: [
        'Building a multimodal foundation model that combines ECG signals with clinical text for diagnostic applications, achieving state-of-the-art performance on downstream tasks',
        'Built a GPU monitoring system using Python and NVIDIA DCGM to track utilization metrics across compute nodes, streaming data to Prometheus for real-time visualization in Grafana dashboards',
        'Architected GPU monitoring on Emory\'s HyPER C3 cluster from scratch. Flags misallocated jobs, automates user lifecycle, saving thousands in compute costs.',
        'Designed testing pipelines for AWS ParallelCluster architecture upgrades, ensuring compute nodes maintain functionality, correct user permissions, and compatibility with ML workloads',
        'Created alerting systems for underutilized GPU resources, helping optimize costs on high-performance compute instances',
        'Engineering and maintaining high-performance computing infrastructure that supports AI/ML research across the university.',
      ],
      bullets: [
        'Automated user lifecycle management via SLURM accounting database integration',
        'Built ML training pipelines on AWS and GCP with distributed data processing',
        'Collaborated with medical professionals to align models with clinical workflows',
        'Conducted research in multimodal AI systems and foundation models for biomedical signals',
        'Developed a RAG system for biomedical document understanding using PyTorch and LangChain',
      ],
    },
    {
      role: 'ML Research Assistant',
      company: 'MAIX Lab, Emory University',
      period: 'May 2024 - Present',
      location: 'Atlanta, GA',
      accent: '#6B8E23',
      highlights: [
        'Published research on biomedical question answering and ECG/PPG signal processing in peer-reviewed conferences',
        'Conducted research in computer vision and deep learning for medical imaging applications.',
        'Developed CNN-based models for automated disease detection from medical scans',
        'Contributed to open-source medical imaging datasets to support the research community',
      ],
    },
    {
      role: 'Machine Learning Researcher',
      company: 'University of Winnipeg',
      period: 'Jul 2023 - Oct 2023',
      location: 'Winnipeg, Canada',
      accent: '#708090',
      highlights: [
        'Published research papers in medical AI focusing on diagnostic imaging and disease classification',
        'Collaborated with medical professionals to ensure models aligned with clinical workflows and diagnostic standards',
      ],
    },
    {
      role: 'Prompt Engineer',
      company: 'Insignia Consultancy',
      period: 'Jan 2023 - Jul 2023',
      location: 'Remote',
      accent: '#CD853F',
      highlights: [
        'Engineered prompt templates for GPT-4 and Claude to improve response quality and consistency across customer-facing applications',
        'Designed and optimized prompts for large language models in production environments.',
        'Developed testing frameworks to evaluate prompt performance and identify edge cases in LLM behavior',
        'Worked with product teams to refine model outputs based on user feedback and business requirements',
      ],
    },
  ];

  return (
    <section
      id="experience"
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

      <div className="relative z-10 max-w-4xl mx-auto">
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
              Experience
            </h2>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
        >
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} item={experience} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
