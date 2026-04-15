import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';

const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1];
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const up: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: bezier } } };

const Contact: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 px-6 sm:px-8 lg:px-12 bg-[#0d0b09] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={up} className="mb-16">
            <span className="inline-flex items-center gap-3 text-[#B8860B] text-xs tracking-[0.25em] uppercase font-medium mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="w-10 h-px bg-[#B8860B]" />
              Contact
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-white/90 leading-[1.1] mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Let's Connect
            </h2>
            <p className="text-base md:text-lg text-white/45 leading-relaxed max-w-xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              I'm always open to discussing new opportunities, collaborations, or research projects in AI/ML. Feel free to reach out.
            </p>
          </motion.div>

          <motion.div variants={stagger} className="flex flex-wrap gap-4">
            {[
              {
                label: 'Send Me an Email',
                href: 'mailto:lpanchu@emory.edu',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M2 7l10 7 10-7" />
                  </svg>
                ),
              },
              {
                label: 'GitHub',
                href: 'https://github.com/lyeswanthp',
                external: true,
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                ),
              },
            ].map((link, i) => (
              <motion.a
                key={i}
                variants={up}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="group relative px-7 py-3.5 overflow-hidden inline-flex items-center gap-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 border border-[#B8860B]" />
                <div className="absolute inset-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 bg-[#B8860B]" />
                <span className="relative text-xs tracking-[0.18em] uppercase font-medium text-[#B8860B] group-hover:text-[#0d0b09] transition-colors duration-500 flex items-center gap-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {link.icon}
                  {link.label}
                </span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            variants={up}
            className="mt-24 pt-8 border-t border-white/[0.05]"
          >
            <p className="text-[10px] text-white/15 tracking-[0.15em] uppercase text-center" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Lovely Yeswanth Panchumarthi · Emory University, Atlanta
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;