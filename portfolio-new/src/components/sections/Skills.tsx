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

interface SkillCategory {
  title: string;
  accent: string;
  skills: string[];
}

const SkillCategory: React.FC<{ category: SkillCategory }> = ({
  category,
}) => {
  return (
    <motion.div
      variants={fadeUp}
      className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: category.accent }}
        />
        <h3
          className="text-lg font-semibold"
          style={{ color: category.accent }}
        >
          {category.title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, index) => (
          <span
            key={index}
            className="text-gray-300 text-sm"
          >
            {skill}
            {index < category.skills.length - 1 && (
              <span className="text-gray-600 mx-2">|</span>
            )}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'AI/ML Frameworks',
      accent: '#B8860B',
      skills: [
        'PyTorch',
        'TensorFlow',
        'Keras',
        'Hugging Face',
        'LangChain',
        'LangGraph',
        'Scikit-learn',
        'Transformers',
      ],
    },
    {
      title: 'Programming Languages',
      accent: '#6B8E23',
      skills: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'Bash/Shell'],
    },
    {
      title: 'Data & Databases',
      accent: '#708090',
      skills: [
        'PostgreSQL',
        'MongoDB',
        'Redis',
        'Neo4j',
        'ChromaDB',
        'FAISS',
        'Pinecone',
        'ElasticSearch',
        'Apache Spark',
      ],
    },
    {
      title: 'Cloud & Infrastructure',
      accent: '#CD853F',
      skills: [
        'Docker',
        'Kubernetes',
        'AWS (EC2, S3, SageMaker)',
        'Google Cloud Platform',
        'Slurm',
        'Distributed Training',
        'MLOps',
        'Ray',
      ],
    },
    {
      title: 'Technical',
      accent: '#9B59B6',
      skills: [
        'Computer Vision',
        'Deep Learning',
        'NLP',
        'RAG Systems',
        'Time Series Analysis',
        'Model Deployment',
        'Natural Language Processing',
        'Core ML Skills',
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-20 px-6 md:px-12 bg-[#0d0b09]"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(184,134,11,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-2">
            <div
              className="w-12 h-[3px] rounded-full"
              style={{ backgroundColor: '#B8860B' }}
            />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Skills
            </h2>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
