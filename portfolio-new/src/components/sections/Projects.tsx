import React from 'react';
import { motion } from 'framer-motion';

const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1];
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.13 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: bezier } },
};

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string | null;
}

const projects: Project[] = [
  {
    title: 'Code Review System',
    description:
      'Multi-agent LLM code review engine with specialized agents for syntax, logic, security, and git history analysis. Integrates Ruff, Semgrep, Bandit, and ESLint, with multi-provider LLM support orchestrated through LangGraph.',
    tags: ['LangGraph', 'FastAPI', 'Docker', 'Semgrep', 'Ruff', 'Bandit'],
    link: 'https://github.com/lyeswanthp/Code-Review-System',
  },
  {
    title: 'Air Drawing AI',
    description:
      'Real-time air-gesture drawing with MediaPipe Hands (21 landmarks at 30+ FPS) and TensorFlow.js DoodleNet for sketch classification, plus Ollama LLaVA vision models for multimodal sketch understanding over WebSocket streaming.',
    tags: ['MediaPipe', 'TensorFlow.js', 'WebSocket', 'Ollama'],
    link: 'https://github.com/lyeswanthp/air-drawing-ai',
  },
  {
    title: 'MemRAG-BioQA',
    description:
      'Memory-augmented retrieval system for biomedical question answering, built on domain-specific knowledge graphs.',
    tags: ['Neo4j', 'ChromaDB', 'FAISS', 'BioBERT', 'PyTorch'],
    link: null,
  },
  {
    title: 'Multimodal RAG for Documents',
    description:
      'Retrieval-augmented generation combining text and visual understanding for complex document analysis.',
    tags: ['LangChain', 'FAISS', 'Transformers'],
    link: null,
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const content = (
    <motion.div variants={fadeUp} className="card p-7 h-full flex flex-col">
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="font-serif-display text-xl font-medium">{project.title}</h3>
        {project.link && (
          <span className="text-sm" style={{ color: 'var(--accent)' }} aria-hidden>
            ↗
          </span>
        )}
      </div>
      <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-soft)' }}>
        {project.description}
      </p>
      <p className="mt-auto text-xs tracking-wide" style={{ color: 'var(--text-muted)' }}>
        {project.tags.join(' · ')}
      </p>
    </motion.div>
  );

  if (project.link) {
    return (
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
        {content}
      </a>
    );
  }
  return content;
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="relative py-28 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="mb-14 flex items-end justify-between gap-6"
        >
          <div>
            <span className="label mb-4">Projects</span>
            <h2 className="font-serif-display text-4xl md:text-5xl font-medium mt-3 leading-tight">
              Built to ship.
            </h2>
          </div>
          <a
            href="https://github.com/lyeswanthp"
            target="_blank"
            rel="noopener noreferrer"
            className="link-plain text-sm hidden md:inline"
          >
            GitHub ↗
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
