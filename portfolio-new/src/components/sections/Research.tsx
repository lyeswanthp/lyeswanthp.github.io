import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';

const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1];
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const up: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: bezier } } };

export default function Research() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="research"
      ref={ref}
      className="relative py-24 px-6 sm:px-8 lg:px-12 bg-[#0d0b09] overflow-hidden"
    >
      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(rgba(184,134,11,0.4) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="mb-14">
          <motion.div variants={up} className="mb-6">
            <span className="inline-flex items-center gap-3 text-[#B8860B] text-xs tracking-[0.25em] uppercase font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="w-10 h-px bg-[#B8860B]" />
              Research
            </span>
          </motion.div>
          <motion.h2 variants={up} className="text-4xl md:text-5xl font-light text-white/90 leading-[1.1]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            AI Screenwriting<br />Partner
          </motion.h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* LEFT COLUMN - Project Summary */}
          <motion.div
            className="rounded-sm p-8 space-y-8 bg-white/[0.02] border border-white/[0.06]"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: bezier }}
          >
            <div>
              <h3 className="text-xl font-medium text-white/80 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                What I Built
              </h3>
              <p className="text-sm text-white/40 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                A multi-agent AI system that writes professional 110-page screenplays. Four specialized
                agents collaborate like a writers' room—one writes, one critiques for plot holes, one
                formats to industry standards, and one maintains story consistency.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-white/80 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Why It Matters
              </h3>
              <p className="text-sm text-white/40 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Current AI loses coherence after 20-30 pages, producing scripts with contradictory
                characters and abandoned plotlines. No existing system handles full-length creative
                writing while maintaining narrative quality.
              </p>
            </div>

            {/* Agent Flow */}
            <div className="pt-4">
              <div className="flex items-center justify-center gap-3 text-xs flex-wrap" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {['Writer', 'Critic', 'Format', 'Story'].map((agent, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="px-4 py-2 bg-white/[0.04] border border-white/[0.08] rounded-sm text-[#B8860B] font-medium tracking-wide">
                      {agent}
                    </div>
                    {i < 3 && <span className="text-white/15">→</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* Download Button */}
            <div className="pt-2">
              <motion.a
                href="/Building an AI Screenwriting Partner.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-6 py-3 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 border border-[#B8860B] rounded-sm" />
                <div className="absolute inset-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 bg-[#B8860B]" />
                <svg className="relative w-4 h-4 text-[#B8860B] group-hover:text-[#0d0b09] transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="relative text-xs tracking-[0.18em] uppercase font-medium text-[#B8860B] group-hover:text-[#0d0b09] transition-colors duration-500" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Download Full Paper
                </span>
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - Previous & New Approach */}
          <div className="space-y-6">
            {/* Previous Approaches */}
            <motion.div
              className="relative pl-6 py-6 pr-6 rounded-sm bg-white/[0.02] border border-white/[0.06]"
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: bezier }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full" style={{ backgroundColor: '#CD853F', opacity: 0.6 }} />
              <h3 className="text-lg font-medium text-white/80 mb-3 flex items-center gap-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <span>⚠️</span> Previous Approaches
              </h3>
              <p className="text-sm text-white/35 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Existing tools use single AI models that excel at short scenes but fail on full scripts.
                They lack three capabilities: <strong className="text-[#CD853F]/80">self-critique</strong> (can't
                spot their own narrative flaws), <strong className="text-[#CD853F]/80">long-term memory</strong> (forget
                details after 30 pages), and <strong className="text-[#CD853F]/80">industry training</strong> (no
                Hollywood formatting knowledge). Most research tries improving one model instead of using
                collaborative agents.
              </p>
            </motion.div>

            {/* My New Approach */}
            <motion.div
              className="relative pl-6 py-6 pr-6 rounded-sm bg-white/[0.02] border border-white/[0.06]"
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4, ease: bezier }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full" style={{ backgroundColor: '#6B8E23', opacity: 0.6 }} />
              <h3 className="text-lg font-medium text-white/80 mb-4 flex items-center gap-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <span>✨</span> My New Approach
              </h3>
              <div className="space-y-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {[
                  { title: '1. Reasoning-Powered Critic', desc: 'Uses DeepSeek-R1 to identify plot inconsistencies like a human script consultant' },
                  { title: '2. Narrative Context Protocol', desc: 'Shared memory system tracking character arcs and plot threads across all 110 pages' },
                  { title: '3. Professional Training', desc: 'Fine-tuned on Hollywood spec scripts to learn industry-quality patterns' },
                ].map((item, i) => (
                  <div key={i}>
                    <h4 className="text-sm font-medium text-[#B8860B] mb-1">{item.title}</h4>
                    <p className="text-sm text-white/35 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
                <div className="pt-3 border-t border-white/[0.06]">
                  <p className="text-sm text-[#6B8E23]/80 font-medium">
                    → First system achieving 85% professional alignment on full-length screenplays
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>


    </section>
  );
}
