import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedText from './ui/AnimatedText';
import SkillBadge from './ui/SkillBadge';

// Skills Data
const skillsData = {
  aiMl: [
    { name: 'PyTorch', proficiency: 95 },
    { name: 'TensorFlow', proficiency: 90 },
    { name: 'Machine Learning', proficiency: 95 },
    { name: 'Deep Learning', proficiency: 90 },
    { name: 'Neural Networks', proficiency: 90 },
    { name: 'NLP', proficiency: 85 },
  ],
  frameworks: [
    { name: 'Scikit-learn', proficiency: 90 },
    { name: 'OpenCV', proficiency: 85 },
    { name: 'FAISS', proficiency: 80 },
    { name: 'HuggingFace', proficiency: 90 },
    { name: 'Gradio', proficiency: 85 },
    { name: 'Langchain', proficiency: 80 },
  ],
  languages: [
    { name: 'Python', proficiency: 95 },
    { name: 'R', proficiency: 85 },
    { name: 'JavaScript', proficiency: 75 },
    { name: 'SQL', proficiency: 85 },
    { name: 'Java', proficiency: 70 },
    { name: 'C++', proficiency: 65 },
  ],
  tools: [
    { name: 'AWS', proficiency: 80 },
    { name: 'MongoDB', proficiency: 85 },
    { name: 'PostgreSQL', proficiency: 80 },
    { name: 'Docker', proficiency: 75 },
    { name: 'Jupyter Notebook', proficiency: 95 },
    { name: 'Git', proficiency: 90 },
  ]
};

export default function Skills() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-dark-800">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <AnimatedText
            text="Technical Skills"
            className="text-3xl md:text-4xl font-bold mb-4 text-center"
            TextElement="h2"
          />
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical toolbox across AI, machine learning and software development
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mt-12"
        >
          {/* AI & ML Skills */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold mb-6 gradient-text">AI & Machine Learning</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {skillsData.aiMl.map((skill, index) => (
                <SkillBadge key={index} name={skill.name} proficiency={skill.proficiency} />
              ))}
            </div>
          </motion.div>

          {/* Frameworks & Libraries */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Frameworks & Libraries</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {skillsData.frameworks.map((skill, index) => (
                <SkillBadge key={index} name={skill.name} proficiency={skill.proficiency} />
              ))}
            </div>
          </motion.div>

          {/* Programming Languages */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Programming Languages</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {skillsData.languages.map((skill, index) => (
                <SkillBadge key={index} name={skill.name} proficiency={skill.proficiency} />
              ))}
            </div>
          </motion.div>

          {/* Tools & Platforms */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 gradient-text">Tools & Platforms</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {skillsData.tools.map((skill, index) => (
                <SkillBadge key={index} name={skill.name} proficiency={skill.proficiency} />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Certificates Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div variants={itemVariants} className="card-highlight p-6">
              <h4 className="text-xl font-bold mb-3 text-white">Machine Learning Specialization</h4>
              <p className="text-gray-400">Stanford University</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="card-highlight p-6">
              <h4 className="text-xl font-bold mb-3 text-white">Data Analytics Specialization</h4>
              <p className="text-gray-400">Google</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="card-highlight p-6">
              <h4 className="text-xl font-bold mb-3 text-white">Prompt Engineering for ChatGPT</h4>
              <p className="text-gray-400">Vanderbilt University</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}