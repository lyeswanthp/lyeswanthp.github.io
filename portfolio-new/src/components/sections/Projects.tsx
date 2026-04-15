import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';

const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1];
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const up: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: bezier } } };

const projects = [
  {
    title: 'Code Review System',
    description: 'Multi-agent LLM code review engine with specialized agents for syntax, logic, security, and git history analysis. Supports Ruff, Semgrep, Bandit, and ESLint with multi-provider LLM integration via LangGraph.',
    tags: ['LangGraph', 'LangChain', 'FastAPI', 'Docker', 'OpenAI', 'GitPython', 'Ruff', 'Semgrep'],
    link: 'https://github.com/lyeswanthp/Code-Review-System',
    featured: true,
  },
  {
    title: 'Air Drawing AI',
    description: 'Real-time air-gesture drawing system using MediaPipe Hands (21-landmark, 30+ FPS) and TensorFlow.js DoodleNet for sketch classification, with Ollama LLaVA/Llama Vision for multimodal sketch understanding via WebSocket streaming.',
    tags: ['MediaPipe', 'TensorFlow.js', 'WebSocket', 'Ollama', 'Cerebras', 'NVIDIA NIM'],
    link: 'https://github.com/lyeswanthp/air-drawing-ai',
    featured: true,
  },
  {
    title: 'MemRAG-BioQA for Biomedical QA',
    description: 'Memory-augmented retrieval system for biomedical question answering with domain-specific knowledge graphs.',
    tags: ['LangChain', 'Neo4j', 'ChromaDB', 'BioBERT', 'FAISS', 'Redis'],
    link: null,
    featured: false,
  },
  {
    title: 'Medical Image Classification',
    description: 'Deep learning models for automated disease detection from medical imaging data.',
    tags: ['PyTorch', 'CNN', 'Transfer Learning', 'Transformers', 'Keras'],
    link: null,
    featured: false,
  },
  {
    title: 'Multimodal RAG for Document Understanding',
    description: 'Advanced retrieval-augmented generation system combining text and visual understanding for complex document analysis.',
    tags: ['LangChain', 'FAISS', 'OpenAI', 'Groq', 'Pinecone'],
    link: null,
    featured: false,
  },
  {
    title: 'RAG System for Live Web Content',
    description: 'Real-time web scraping and retrieval system with dynamic content indexing and semantic search capabilities.',
    tags: ['BeautifulSoup', 'LangChain', 'ElasticSearch', 'FastAPI', 'Redis'],
    link: null,
    featured: false,
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(184,134,11,0.04)_0%,transparent_65%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={up} className="mb-16">
            <span className="inline-flex items-center gap-3 text-[#B8860B] text-xs tracking-[0.25em] uppercase font-medium mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="w-10 h-px bg-[#B8860B]" />
              Projects
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-white/90 leading-[1.1]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Selected Work
            </h2>
          </motion.div>

          <motion.div variants={stagger} className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.1, ease: bezier } },
                }}
                className={`group relative rounded-sm p-6 bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.08] hover:bg-white/[0.04] transition-all duration-500 ${p.featured ? 'md:col-span-2' : ''}`}
              >
                {p.featured && (
                  <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[#B8860B] mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Featured
                  </span>
                )}

                <h3 className="text-xl font-light text-white/90 mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {p.title}
                </h3>
                <p className="text-sm text-white/45 leading-relaxed mb-5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((tag, j) => (
                    <span key={j} className="text-[10px] text-white/25 tracking-[0.15em] uppercase px-2 py-1 rounded-sm border border-white/[0.06]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {p.link && (
                  <motion.a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[10px] text-white/25 tracking-[0.15em] uppercase hover:text-[#B8860B] transition-colors duration-300"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    View on GitHub
                  </motion.a>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}