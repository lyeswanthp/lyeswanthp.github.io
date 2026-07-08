import React from 'react';
import { motion } from 'framer-motion';

const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1];
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.13 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: bezier } },
};

const metrics = [
  { value: '0.87', label: 'AUROC · OMI detection' },
  { value: '1M+', label: 'Training signals' },
  { value: '2', label: 'Hospital systems' },
];

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

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
          className="grid lg:grid-cols-[1.5fr_1fr] gap-6"
        >
          {/* Flagship — CardioFM */}
          <motion.div id="cardiofm" variants={fadeUp} className="card p-8 scroll-mt-28">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-serif-display text-2xl font-medium">CardioFM</h3>
              <span
                className="text-xs px-3 py-1 rounded-full border"
                style={{ borderColor: 'var(--line)', color: 'var(--accent)' }}
              >
                ISCE 2026
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-8 max-w-xl" style={{ color: 'var(--text-soft)' }}>
              A multimodal foundation model for ECG, trained on over a million
              medical signals and paired clinical text. Accepted at ISCE 2026
              and deployed in ambulances for real-time OMI detection across
              Grady Memorial and Rochester hospital systems.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {metrics.map((m, i) => (
                <div key={i} className="border-l pl-4" style={{ borderColor: 'var(--line)' }}>
                  <div className="font-serif-display text-2xl font-medium">{m.value}</div>
                  <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Publications */}
          <motion.div variants={fadeUp} className="card p-8 flex flex-col">
            <div className="font-serif-display text-5xl font-medium mb-3">17+</div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-soft)' }}>
              Peer-reviewed publications spanning healthcare AI, multimodal
              models, and foundation models for biomedical signals — including
              the OCIT 2024 Best Paper award.
            </p>
            <a
              href="https://github.com/lyeswanthp"
              target="_blank"
              rel="noopener noreferrer"
              className="link-plain text-sm mt-auto"
            >
              View publications ↗
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;
