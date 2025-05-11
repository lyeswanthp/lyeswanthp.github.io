 import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaServer, FaLaptopCode, FaMicrochip, FaBrain } from 'react-icons/fa';
import { SiPytorch, SiTensorflow, SiJavascript, SiReact, SiNodedotjs, SiPython, SiMongodb, SiPostgresql, SiAmazonaws, SiDocker, SiKubernetes, SiOpencv, SiScikitlearn } from 'react-icons/si';

const getIcon = (name) => {
  const icons = {
    'PyTorch': <SiPytorch />,
    'TensorFlow': <SiTensorflow />,
    'Python': <SiPython />,
    'JavaScript': <SiJavascript />,
    'React': <SiReact />,
    'Node.js': <SiNodedotjs />,
    'MongoDB': <SiMongodb />,
    'PostgreSQL': <SiPostgresql />,
    'AWS': <SiAmazonaws />,
    'Docker': <SiDocker />,
    'Kubernetes': <SiKubernetes />,
    'OpenCV': <SiOpencv />,
    'Scikit-learn': <SiScikitlearn />,
    'Machine Learning': <FaBrain />,
    'Deep Learning': <FaMicrochip />,
    'Neural Networks': <FaBrain />,
    'NLP': <FaBrain />,
    'Data Engineering': <FaDatabase />,
    'API Development': <FaServer />,
    'Full Stack': <FaLaptopCode />,
  };
  
  return icons[name] || <FaCode />;
};

export default function SkillBadge({ name, proficiency }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="card-highlight p-4 flex flex-col items-center"
    >
      <div className="w-12 h-12 rounded-full bg-dark-700 flex items-center justify-center mb-3 text-primary-400 text-xl">
        {getIcon(name)}
      </div>
      <h3 className="text-lg font-medium text-white mb-2">{name}</h3>
      
      {/* Proficiency Bar */}
      <div className="w-full h-2 bg-dark-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-full bg-gradient-to-r from-primary-600 to-primary-400"
        ></motion.div>
      </div>
      <span className="text-xs text-gray-400 mt-1">{proficiency}%</span>
    </motion.div>
  );
}
