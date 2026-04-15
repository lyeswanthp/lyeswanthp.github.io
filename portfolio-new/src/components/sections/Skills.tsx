import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';

const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1];
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const up: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: bezier } } };

const skillGroups = [
  {
    title: 'AI/ML Frameworks',
    accent: '#B8860B',
    skills: ['PyTorch', 'TensorFlow', 'Keras', 'Hugging Face', 'LangChain', 'LangGraph', 'Transformers', 'Scikit-learn'],
  },
  {
    title: 'Core ML Skills',
    accent: '#CD853F',
    skills: ['Deep Learning', 'Computer Vision', 'Natural Language Processing', 'RAG Systems', 'Distributed Training', 'Time Series Analysis'],
  },
  {
    title: 'Cloud & Infrastructure',
    accent: '#6B8E23',
    skills: ['AWS (EC2, S3, SageMaker)', 'Google Cloud Platform', 'Kubernetes', 'Docker', 'Slurm', 'Apache Spark', 'Ray'],
  },
  {
    title: 'Data & Databases',
    accent: '#708090',
    skills: ['FAISS', 'ChromaDB', 'Pinecone', 'Neo4j', 'ElasticSearch', 'Redis', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Programming Languages',
    accent: '#9B59B6',
    skills: ['Python', 'JavaScript', 'TypeScript', 'Bash/Shell'],
  },
  {
    title: 'MLOps',
    accent: '#B8860B',
    skills: ['Model Deployment', 'Distributed Training', 'Prompt Engineering', 'OpenAI API'],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-24 px-6 sm:px-8 lg:px-12 bg-[#0d0b09] overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={up} className="mb-16">
            <span className="inline-flex items-center gap-3 text-[#B8860B] text-xs tracking-[0.25em] uppercase font-medium mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="w-10 h-px bg-[#B8860B]" />
              Technical
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-white/90 leading-[1.1]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Skills
            </h2>
          </motion.div>

          <motion.div variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillGroups.map((group, i) => (
              <motion.div key={i} variants={up}>
                <div className="text-[10px] text-white/25 tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "'DM Sans', sans-serif", color: group.accent }}>
                  {group.title}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, j) => (
                    <span key={j} className="text-xs text-white/45 tracking-[0.1em] px-3 py-1.5 rounded-sm border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-300" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}