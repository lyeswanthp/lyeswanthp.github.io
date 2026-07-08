import React from 'react';
import { motion } from 'framer-motion';

const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1];
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.13 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: bezier } },
};

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  stack: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: 'HPC & Cloud Research Engineer',
    company: 'Emory University — Research Computing',
    period: 'Aug 2024 – Present',
    location: 'Atlanta, GA',
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
    highlights: [
      'Engineered prompt templates for GPT-4 and Claude, improving response quality and consistency in customer-facing applications',
      'Built testing frameworks to evaluate prompt performance and surface edge cases in LLM behavior',
      'Refined model outputs with product teams based on user feedback and business requirements',
    ],
    stack: ['LLMs', 'Prompt Engineering', 'Evaluation'],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-28 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="mb-14"
        >
          <span className="label mb-4">Experience</span>
          <h2 className="font-serif-display text-4xl md:text-5xl font-medium mt-3 leading-tight">
            Where the work happened.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
        >
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="py-10 border-t last:border-b"
              style={{ borderColor: 'var(--line)' }}
            >
              <div className="md:grid md:grid-cols-[1fr_2fr] md:gap-10">
                <div className="mb-5 md:mb-0">
                  <h3 className="font-serif-display text-xl md:text-2xl font-medium mb-2">
                    {item.role}
                  </h3>
                  <p className="text-sm mb-1" style={{ color: 'var(--text-soft)' }}>
                    {item.company}
                  </p>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    {item.period} · {item.location}
                  </p>
                </div>
                <div>
                  <ul className="space-y-2.5 mb-5">
                    {item.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm leading-relaxed"
                        style={{ color: 'var(--text-soft)' }}
                      >
                        <span className="mt-2.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--accent)' }} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs tracking-wide" style={{ color: 'var(--text-muted)' }}>
                    {item.stack.join(' · ')}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
