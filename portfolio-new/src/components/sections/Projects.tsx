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

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string | null;
  accent: string;
  featured?: boolean;
}

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const content = (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      className="glass bracket-frame group relative p-7 h-full"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <span className="br-tl" />
      <span className="br-br" />

      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(420px circle at 30% 0%, ${project.accent}14, transparent 65%)`,
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between mb-5 font-mono-tech text-[10px] tracking-[0.24em]">
          <span style={{ color: project.accent, opacity: 0.75 }}>
            ◆ {String(index + 1).padStart(2, '0')}
            {project.featured && <span className="ml-3 text-white/35">FEATURED</span>}
          </span>
          {project.link && (
            <span
              className="text-white/30 group-hover:text-white/70 transition-colors"
              aria-hidden
            >
              ↗
            </span>
          )}
        </div>

        <h3
          className="font-display text-xl md:text-2xl font-medium mb-3"
          style={{ color: project.accent, textShadow: `0 0 18px ${project.accent}33` }}
        >
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t" style={{ borderColor: 'var(--border-primary)' }}>
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 font-mono-tech text-[10px] tracking-[0.14em] uppercase border"
              style={{ borderColor: 'var(--border-primary)', color: 'var(--text-secondary)' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  if (project.link) {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {content}
      </a>
    );
  }

  return content;
};

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Code Review System',
      description:
        'Multi-agent LLM code review engine with specialized agents for syntax, logic, security, and git history analysis. Integrates Ruff, Semgrep, Bandit, and ESLint, with multi-provider LLM support orchestrated through LangGraph.',
      tags: ['LangGraph', 'FastAPI', 'Docker', 'Semgrep', 'Ruff', 'Bandit'],
      link: 'https://github.com/lyeswanthp/Code-Review-System',
      accent: '#6ee7ff',
      featured: true,
    },
    {
      title: 'Air Drawing AI',
      description:
        'Real-time air-gesture drawing with MediaPipe Hands (21 landmarks at 30+ FPS) and TensorFlow.js DoodleNet for sketch classification, plus Ollama LLaVA vision models for multimodal sketch understanding over WebSocket streaming.',
      tags: ['MediaPipe', 'TensorFlow.js', 'WebSocket', 'Ollama'],
      link: 'https://github.com/lyeswanthp/air-drawing-ai',
      accent: '#a78bfa',
      featured: true,
    },
    {
      title: 'MemRAG-BioQA',
      description:
        'Memory-augmented retrieval system for biomedical question answering, built on domain-specific knowledge graphs.',
      tags: ['Neo4j', 'ChromaDB', 'FAISS', 'BioBERT', 'PyTorch'],
      link: null,
      accent: '#f5c563',
      featured: true,
    },
    {
      title: 'Multimodal RAG for Documents',
      description:
        'Retrieval-augmented generation combining text and visual understanding for complex document analysis.',
      tags: ['LangChain', 'FAISS', 'Transformers'],
      link: null,
      accent: '#ff7ad9',
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-28 px-6 md:px-12 overflow-hidden"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      {/* Cyber grid */}
      <div className="absolute inset-0 cyber-grid pointer-events-none" />

      {/* Radial glow from top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(110, 231, 255, 0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="mb-14 flex items-end justify-between gap-6"
        >
          <div>
            <span className="section-rule mb-4">// 04 — Projects</span>
            <h2
              className="font-display text-4xl md:text-5xl font-light mt-3"
              style={{ color: 'var(--text-primary)' }}
            >
              Built to <span className="neon-cyan">ship</span>.
            </h2>
          </div>
          <a
            href="https://github.com/lyeswanthp"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 font-mono-tech text-[11px] tracking-[0.22em] uppercase transition-colors hover:text-white"
            style={{ color: 'var(--text-secondary)' }}
          >
            github.com/lyeswanthp ↗
          </a>
        </motion.div>

        {/* Project grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
