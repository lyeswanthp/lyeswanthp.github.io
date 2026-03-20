import { useRef } from 'react';
import { useInView, motion, type Variants } from 'framer-motion';

const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1];
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const up: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: bezier } } };

const highlights = [
  { accent: '#B8860B', title: 'CardioFM', sub: 'Multimodal ECG foundation model accepted at ISCE 2026. Deployed in ambulances for real-time OMI detection across Grady Memorial & Rochester hospitals.' },
  { accent: '#6B8E23', title: 'HPC Engineering', sub: "Architected GPU monitoring on Emory's HyPER C3 cluster from scratch. Flags misallocated jobs, automates user lifecycle — saving thousands in compute costs." },
  { accent: '#CD853F', title: '17+ Publications', sub: 'Spanning healthcare AI, ECG/PPG signal processing, NLP, computer vision, and fairness-aware ML. Best Paper Award at OCIT 2024.' },
  { accent: '#708090', title: 'Full-Stack AI', sub: 'From training foundation models on 1M+ signals to building the SLURM pipelines and Prometheus dashboards they run on.' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" ref={ref} className="relative py-24 px-6 sm:px-8 lg:px-12 bg-[#0d0b09] overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24">
          {/* Left column — prose */}
          <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <motion.div variants={up} className="mb-6">
              <span className="inline-flex items-center gap-3 text-[#B8860B] text-xs tracking-[0.25em] uppercase font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <span className="w-10 h-px bg-[#B8860B]" />
                About
              </span>
            </motion.div>

            <motion.h2 variants={up} className="text-4xl md:text-5xl font-light text-white/90 mb-8 leading-[1.1]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Models that save<br />lives. Infrastructure<br />that scales.
            </motion.h2>

            <motion.div variants={up} className="space-y-5">
              <p className="text-base text-white/45 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                At Emory University, I occupy a rare intersection — building multimodal AI models for acute cardiac care while engineering the high-performance compute systems they train on.
              </p>
              <p className="text-base text-white/45 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                My flagship work, CardioFM, fuses 12-lead ECG signals with LLM-curated clinical text to detect occlusion myocardial infarctions that standard practice misses — achieving a 19% sensitivity gain over clinical baselines. It's now being tested in ambulances, where every minute between a missed diagnosis and catheterization directly impacts survival.
              </p>
              <p className="text-base text-white/45 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                On the infrastructure side, I architect GPU monitoring and user lifecycle systems on Emory's HyPER C3 cluster — work that keeps researchers productive and prevents thousands of dollars in wasted compute.
              </p>
            </motion.div>

            {/* Mini stat row */}
            <motion.div variants={up} className="flex gap-8 mt-10 pt-8 border-t border-white/[0.06]">
              {[{ v: 'MS CS', l: 'Emory · 2026' }, { v: '2+', l: 'Years Research' }, { v: '3', l: 'Labs' }].map((s, i) => (
                <div key={i}>
                  <div className="text-xl font-light text-[#B8860B]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{s.v}</div>
                  <div className="text-[10px] text-white/20 tracking-[0.15em] uppercase mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>{s.l}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column — highlight cards */}
          <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="space-y-4">
            {highlights.map((h, i) => (
              <motion.div key={i} variants={up} className="group relative pl-6 py-5 pr-6 rounded-sm bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.04] hover:border-white/[0.08] transition-all duration-500 cursor-default">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full transition-all duration-500 group-hover:h-full" style={{ backgroundColor: h.accent, opacity: 0.6 }} />
                <h3 className="text-lg font-medium text-white/80 mb-1.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>{h.title}</h3>
                <p className="text-sm text-white/35 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>{h.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>


    </section>
  );
}
