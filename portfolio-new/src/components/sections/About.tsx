import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';

const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1];
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.13 } } };
const up: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: bezier } } };

const features = [
  {
    label: 'Production Projects',
    title: 'Full-Stack AI',
    description: 'From training foundation models on 1M+ signals to building the SLURM pipelines and Prometheus dashboards they run on.',
    accent: '#B8860B',
  },
  {
    label: 'HyPER C3 Cluster',
    title: 'HPC Engineering',
    description: 'Architected GPU monitoring on Emory\'s HyPER C3 cluster from scratch. Flags misallocated jobs, automates user lifecycle — saving thousands in compute costs.',
    accent: '#CD853F',
  },
  {
    label: 'ISCE 2026',
    title: 'Models that save',
    description: 'Multimodal ECG foundation model accepted at ISCE 2026. Deployed in ambulances for real-time OMI detection across Grady Memorial & Rochester hospitals.',
    accent: '#6B8E23',
  },
];

const stats = [
  { value: '17+', label: 'Publications' },
  { value: '1M+', label: 'Signals Processed' },
  { value: 'LangGraph', label: 'Multi-Agent' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 px-6 sm:px-8 lg:px-12 bg-[#0d0b09] overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={up} className="mb-16">
            <span className="inline-flex items-center gap-3 text-[#B8860B] text-xs tracking-[0.25em] uppercase font-medium mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="w-10 h-px bg-[#B8860B]" />
              About
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-white/90 leading-[1.1]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Systems that scale.<br />Models that perform.
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24">
            <motion.div variants={stagger} className="space-y-4">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  variants={up}
                  className="group relative pl-6 py-5 pr-6 rounded-sm bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.04] hover:border-white/[0.08] transition-all duration-500 cursor-default"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full transition-all duration-500 group-hover:h-full" style={{ backgroundColor: f.accent }} />
                  <div className="text-[10px] text-white/25 tracking-[0.2em] uppercase mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {f.label}
                  </div>
                  <div className="text-xl font-light text-white/90 mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {f.title}
                  </div>
                  <div className="text-sm text-white/45 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {f.description}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={stagger}>
              <motion.p variants={up} className="text-base md:text-lg text-white/50 leading-relaxed mb-12" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                I'm an AI engineer and researcher working at the intersection of machine learning and healthcare. My work spans building multimodal foundation models for medical signals, designing the HPC infrastructure that trains them, and deploying those models into real clinical settings — like ambulances detecting heart attacks before patients reach the ER.
              </motion.p>
              <motion.p variants={up} className="text-base md:text-lg text-white/50 leading-relaxed mb-12" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Spanning healthcare AI, ECG/PPG signal processing, NLP, computer vision, and fairness-aware ML. Best Paper Award at OCIT 2024. 17+ peer-reviewed publications across top venues.
              </motion.p>
              <motion.div variants={up} className="flex flex-wrap gap-10">
                {stats.map((s, i) => (
                  <div key={i}>
                    <div className="text-3xl md:text-4xl font-light" style={{ fontFamily: "'DM Sans', sans-serif", color: '#B8860B' }}>{s.value}</div>
                    <div className="text-[10px] text-white/25 tracking-[0.2em] uppercase mt-1.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}