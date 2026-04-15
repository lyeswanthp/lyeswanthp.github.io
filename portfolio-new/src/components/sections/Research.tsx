import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';

const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1];
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const up: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: bezier } } };

const Research: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="research"
      ref={ref}
      className="relative py-24 px-6 sm:px-8 lg:px-12 bg-[#0d0b09] overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={up} className="mb-16">
            <span className="inline-flex items-center gap-3 text-[#B8860B] text-xs tracking-[0.25em] uppercase font-medium mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="w-10 h-px bg-[#B8860B]" />
              Research
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-white/90 leading-[1.1]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              In Progress
            </h2>
            <p className="text-base md:text-lg text-white/45 leading-relaxed max-w-2xl mt-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Currently working on new publications and research projects. Check back soon or reach out to discuss ongoing work in healthcare AI and multimodal foundation models.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;