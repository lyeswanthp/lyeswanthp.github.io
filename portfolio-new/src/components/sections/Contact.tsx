import React from 'react';
import { motion } from 'framer-motion';

const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1];
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.13 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: bezier } },
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-28 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <span className="label mb-4">Contact</span>
            <h2 className="font-serif-display text-4xl md:text-5xl font-medium mt-3 mb-6 leading-tight">
              Let's talk.
            </h2>
            <p className="text-base leading-relaxed max-w-xl mx-auto mb-10" style={{ color: 'var(--text-soft)' }}>
              Open to opportunities, collaborations, and research conversations
              in AI/ML. The fastest way to reach me is email.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="mb-10">
            <a
              href="mailto:lpanchu@emory.edu"
              className="font-serif-display text-2xl md:text-3xl font-medium link-plain"
            >
              lpanchu@emory.edu
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center justify-center gap-8 text-sm">
            <a
              href="https://github.com/lyeswanthp"
              target="_blank"
              rel="noopener noreferrer"
              className="link-plain"
            >
              GitHub ↗
            </a>
            <a
              href="https://drive.google.com/file/d/1hGo55m7nZhrow5VOIGiHC9dxIMdRmotw/view?usp=sharing"
              target="_blank"
              rel="noopener"
              className="link-plain"
            >
              Resume ↗
            </a>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-20 pt-6 border-t text-xs"
            style={{ borderColor: 'var(--line)', color: 'var(--text-muted)' }}
          >
            © {new Date().getFullYear()} Lovely Yeswanth Panchumarthi · Atlanta, GA
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
