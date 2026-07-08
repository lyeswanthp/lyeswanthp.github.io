import React from 'react';
import { motion } from 'framer-motion';

const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1];
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.13 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: bezier } },
};

const features = [
  {
    title: 'CardioFM',
    description:
      'Multimodal ECG foundation model accepted at ISCE 2026. Deployed in ambulances for real-time OMI detection across Grady Memorial & Rochester hospitals.',
  },
  {
    title: 'HPC Engineering',
    description:
      "Architected GPU monitoring on Emory's HyPER C3 cluster from scratch. Flags misallocated jobs, automates user lifecycle, saving thousands in compute costs.",
  },
  {
    title: 'Research to Production',
    description:
      'From training foundation models on 1M+ signals to building the SLURM pipelines and Prometheus dashboards they run on.',
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-28 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="mb-14"
        >
          <span className="label mb-4">About</span>
          <h2 className="font-serif-display text-4xl md:text-5xl font-medium mt-3 leading-tight">
            Operating at the seam of AI and medicine.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed" style={{ color: 'var(--text-soft)' }}>
            My work spans healthcare AI, ECG/PPG signal processing, NLP,
            computer vision, and fairness-aware ML — 17+ publications,
            including the OCIT 2024 Best Paper.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={fadeUp} className="card p-7">
              <h3 className="font-serif-display text-xl font-medium mb-3">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-soft)' }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
