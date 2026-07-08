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

const channels = [
  {
    label: 'EMAIL',
    value: 'lpanchu@emory.edu',
    href: 'mailto:lpanchu@emory.edu',
    accent: 'var(--accent-cyan)',
  },
  {
    label: 'GITHUB',
    value: 'github.com/lyeswanthp',
    href: 'https://github.com/lyeswanthp',
    accent: 'var(--accent-violet)',
  },
  {
    label: 'RESUME',
    value: 'view / download',
    href: 'https://drive.google.com/file/d/1v8EoGp7CwuMjfkC0qoE7uoC6Jz8g6P9R/view',
    accent: 'var(--accent-gold)',
  },
];

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative py-28 px-6 md:px-12 overflow-hidden"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      {/* Cyber grid */}
      <div className="absolute inset-0 cyber-grid pointer-events-none" />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(110, 231, 255, 0.07) 0%, rgba(167, 139, 250, 0.04) 45%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
        >
          {/* Section Heading */}
          <motion.div variants={fadeUp} className="mb-14 text-center">
            <span className="section-rule mb-4 justify-center">// 05 — Contact</span>
            <h2
              className="font-display text-4xl md:text-5xl font-light mt-3"
              style={{ color: 'var(--text-primary)' }}
            >
              Open <span className="neon-cyan">channel</span>.
            </h2>
            <p className="text-sm md:text-base mt-5 max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Open to opportunities, collaborations, and research conversations in
              AI/ML — the fastest way to reach me is email.
            </p>
          </motion.div>

          {/* Channels */}
          <motion.div variants={fadeUp} className="grid sm:grid-cols-3 gap-4">
            {channels.map((ch, i) => (
              <a
                key={i}
                href={ch.href}
                target={ch.href.startsWith('http') ? '_blank' : undefined}
                rel={ch.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="glass bracket-frame btn-sweep group relative p-6 text-center"
              >
                <span className="br-tl" />
                <span className="br-br" />
                <div className="font-mono-tech text-[10px] tracking-[0.28em] mb-3" style={{ color: ch.accent, opacity: 0.75 }}>
                  {ch.label}
                </div>
                <div
                  className="font-mono-tech text-[12px] tracking-[0.06em] break-all transition-colors"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {ch.value} <span style={{ color: ch.accent }}>↗</span>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Footer line */}
          <motion.div
            variants={fadeUp}
            className="mt-16 pt-6 border-t text-center font-mono-tech text-[10px] tracking-[0.22em] text-white/25"
            style={{ borderColor: 'var(--border-primary)' }}
          >
            © {new Date().getFullYear()} LOVELY YESWANTH PANCHUMARTHI · ATLANTA, GA
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
