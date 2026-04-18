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
  featured?: boolean;
}

const ProjectCard: React.FC<{ project: Project; featured?: boolean }> = ({
  project,
  featured = false,
}) => {
  const content = (
    <motion.div
      variants={fadeUp}
      className={`group relative p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-[#B8860B]/50 transition-all duration-300 ${
        featured ? 'md:col-span-2' : ''
      }`}
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(184,134,11,0.1), transparent 70%)',
        }}
      />
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: '#6B8E23' }}
            />
            <span
              className="text-xs font-medium uppercase tracking-wider"
              style={{ color: '#6B8E23' }}
            >
              Featured
            </span>
          </div>
          {project.link && (
            <svg
              className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          )}
        </div>
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#B8860B] transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-gray-300 border border-white/10"
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
        className="block"
      >
        {content}
      </a>
    );
  }

  return content;
};

const Projects: React.FC = () => {
  const featuredProjects: Project[] = [
    {
      title: 'Code Review System',
      description:
        'Multi-agent LLM code review engine with specialized agents for syntax, logic, security, and git history analysis. Supports Ruff, Semgrep, Bandit, and ESLint with multi-provider LLM integration via LangGraph.',
      tags: [
        'LangGraph',
        'LangChain',
        'Docker',
        'FastAPI',
        'GitPython',
        'Ruff',
        'Semgrep',
        'Bandit',
        'OpenAI',
        'Groq',
        'Ollama',
        'PyTorch',
      ],
      link: 'https://github.com/lyeswanthp/Code-Review-System',
      featured: true,
    },
    {
      title: 'Air Drawing AI',
      description:
        'Real-time air-gesture drawing system using MediaPipe Hands (21-landmark, 30+ FPS) and TensorFlow.js DoodleNet for sketch classification, with Ollama LLaVA/Llama Vision for multimodal sketch understanding via WebSocket streaming.',
      tags: ['MediaPipe', 'TensorFlow.js', 'WebSocket', 'Ollama', 'Keras', 'Python'],
      link: 'https://github.com/lyeswanthp/air-drawing-ai',
      featured: true,
    },
    {
      title: 'MemRAG-BioQA for Biomedical QA',
      description:
        'Memory-augmented retrieval system for biomedical question answering with domain-specific knowledge graphs.',
      tags: ['Neo4j', 'ChromaDB', 'FAISS', 'BioBERT', 'PyTorch'],
      link: null,
      featured: true,
    },
  ];

  const otherProjects: Project[] = [
    {
      title: 'Medical Image Classification',
      description:
        'Deep learning models for automated disease detection from medical imaging data.',
      tags: ['CNN', 'Keras', 'TensorFlow', 'Transfer Learning'],
    },
    {
      title: 'Multimodal RAG for Document Understanding',
      description:
        'Advanced retrieval-augmented generation system combining text and visual understanding for complex document analysis.',
      tags: ['LangChain', 'FAISS', 'OpenAI', 'Transformers'],
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-20 px-6 md:px-12 bg-[#0d0b09]"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Radial glow from top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(184,134,11,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(rgba(184,134,11,0.4) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="mb-12 flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-[3px] rounded-full"
              style={{ backgroundColor: '#B8860B' }}
            />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Projects
            </h2>
          </div>
          <a
            href="https://github.com/lyeswanthp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"
              />
            </svg>
            <span className="hidden md:inline text-sm">GitHub</span>
          </a>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} featured />
          ))}
        </motion.div>

        {/* Other Projects */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {otherProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
