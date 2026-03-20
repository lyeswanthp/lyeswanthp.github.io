import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';

const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1];
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const up: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: bezier } } };

const skillCategories = [
  {
    title: 'Programming Languages',
    accent: '#B8860B',
    skills: ['Python', 'R', 'SQL', 'JavaScript', 'TypeScript', 'Bash/Shell'],
  },
  {
    title: 'AI/ML Frameworks',
    accent: '#6B8E23',
    skills: [
      'PyTorch',
      'TensorFlow',
      'Keras',
      'Scikit-learn',
      'Hugging Face',
      'LangChain',
      'OpenAI API',
      'Transformers',
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    accent: '#CD853F',
    skills: [
      'AWS (EC2, S3, SageMaker)',
      'Google Cloud Platform',
      'Docker',
      'Kubernetes',
      'Slurm',
      'Ray',
      'Apache Spark',
    ],
  },
  {
    title: 'Data & Databases',
    accent: '#708090',
    skills: [
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'ChromaDB',
      'FAISS',
      'Neo4j',
      'ElasticSearch',
      'Pinecone',
    ],
  },
  {
    title: 'Core ML Skills',
    accent: '#9B59B6',
    skills: [
      'Deep Learning',
      'Natural Language Processing',
      'Computer Vision',
      'RAG Systems',
      'Time Series Analysis',
      'MLOps',
      'Model Deployment',
      'Distributed Training',
    ],
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
      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={up} className="mb-6">
            <span className="inline-flex items-center gap-3 text-[#B8860B] text-xs tracking-[0.25em] uppercase font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="w-10 h-px bg-[#B8860B]" />
              Skills
            </span>
          </motion.div>
          <motion.h2 variants={up} className="text-4xl md:text-5xl font-light text-white/90 mb-16 leading-[1.1]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Technical<br />Skills
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              className="group relative rounded-sm p-6 bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.08] hover:bg-white/[0.03] transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: catIdx * 0.1, ease: bezier }}
            >
              {/* Accent top bar */}
              <div className="absolute top-0 left-6 right-6 h-px opacity-40" style={{ backgroundColor: category.accent }} />

              <h3 className="text-lg font-medium text-white/80 mb-5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skillIdx}
                    className="px-3 py-1.5 text-xs rounded-sm border transition-all duration-300 cursor-default"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      borderColor: `${category.accent}20`,
                      color: `${category.accent}99`,
                      backgroundColor: `${category.accent}08`,
                    }}
                    whileHover={{
                      borderColor: `${category.accent}50`,
                      backgroundColor: `${category.accent}15`,
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: catIdx * 0.1 + skillIdx * 0.03, ease: bezier }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>


    </section>
  );
}
