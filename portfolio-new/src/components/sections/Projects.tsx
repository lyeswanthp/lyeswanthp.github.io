import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';

const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1];
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const up: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: bezier } } };

const projects = [
  {
    title: 'Multimodal RAG for Document Understanding',
    description:
      'Advanced retrieval-augmented generation system combining text and visual understanding for complex document analysis.',
    tags: ['Python', 'LangChain', 'OpenAI', 'ChromaDB', 'FastAPI'],
    featured: true,
    link: 'https://github.com/lyeswanthp',
  },
  {
    title: 'RAG System for Live Web Content',
    description:
      'Real-time web scraping and retrieval system with dynamic content indexing and semantic search capabilities.',
    tags: ['Python', 'BeautifulSoup', 'FAISS', 'Redis', 'Docker'],
    link: 'https://github.com/lyeswanthp',
  },
  {
    title: 'MemRAG-BioQA for Biomedical QA',
    description:
      'Memory-augmented retrieval system for biomedical question answering with domain-specific knowledge graphs.',
    tags: ['PyTorch', 'BioBERT', 'Neo4j', 'Transformers'],
    link: 'https://github.com/lyeswanthp',
  },
  {
    title: 'ResumeGPT',
    description:
      'AI-powered resume analysis and optimization tool using GPT-4 for personalized career recommendations.',
    tags: ['React', 'Node.js', 'OpenAI API', 'MongoDB'],
    link: 'https://github.com/lyeswanthp',
  },
  {
    title: 'Passage Ranking with Modified Cross-Encoder',
    description:
      'Enhanced cross-encoder model for information retrieval with improved ranking accuracy.',
    tags: ['Python', 'Sentence-Transformers', 'BERT', 'PyTorch'],
    link: 'https://github.com/lyeswanthp',
  },
  {
    title: 'Medical Image Classification',
    description:
      'Deep learning models for automated disease detection from medical imaging data.',
    tags: ['TensorFlow', 'Keras', 'CNN', 'Transfer Learning'],
    link: 'https://github.com/lyeswanthp',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-24 px-6 sm:px-8 lg:px-12 bg-[#0d0b09] overflow-hidden"
    >
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(184,134,11,0.04)_0%,transparent_65%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={up} className="mb-6">
            <span className="inline-flex items-center gap-3 text-[#B8860B] text-xs tracking-[0.25em] uppercase font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="w-10 h-px bg-[#B8860B]" />
              Projects
            </span>
          </motion.div>
          <motion.h2 variants={up} className="text-4xl md:text-5xl font-light text-white/90 mb-16 leading-[1.1]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Featured<br />Projects
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className={`group relative rounded-sm p-6 bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.08] hover:bg-white/[0.04] transition-all duration-500 ${
                project.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: bezier }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-medium text-white/80 group-hover:text-[#B8860B] transition-colors duration-500" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="text-[10px] text-[#B8860B]/60 tracking-[0.15em] uppercase mt-1 inline-block" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      ⭐ Featured
                    </span>
                  )}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/20 hover:text-[#B8860B] transition-colors duration-300 flex-shrink-0 ml-4"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>

              <p className="text-sm text-white/35 mb-5 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-[10px] tracking-wide uppercase rounded-sm bg-white/[0.04] border border-white/[0.06] text-white/30"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.8, ease: bezier }}
        >
          <motion.a
            href="https://github.com/lyeswanthp"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-7 py-3.5 overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 border border-white/12 rounded-sm" />
            <div className="absolute inset-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 bg-white/5" />
            <span className="relative text-xs tracking-[0.18em] uppercase font-medium text-white/40 group-hover:text-white/90 transition-colors duration-500" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              View More on GitHub →
            </span>
          </motion.a>
        </motion.div>
      </div>


    </section>
  );
}
