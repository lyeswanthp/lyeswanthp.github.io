import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaMicrochip, FaCode } from 'react-icons/fa';
import { SiPytorch, SiTensorflow, SiOpencv, SiScikitlearn } from 'react-icons/si';
import { TbBrandPython } from 'react-icons/tb';

const getTechIcon = (tech) => {
  switch (tech.toLowerCase()) {
    case 'pytorch':
      return <SiPytorch />;
    case 'tensorflow':
      return <SiTensorflow />;
    case 'python':
      return <TbBrandPython />;
    case 'opencv':
      return <SiOpencv />;
    case 'scikit-learn':
      return <SiScikitlearn />;
    default:
      return <FaCode />;
  }
};

export default function ProjectCard({ project, isEven }) {
  const { title, description, techStack, github, liveUrl, image, highlights } = project;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="card-highlight overflow-hidden mb-20"
    >
      <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}>
        {/* Project Image (Simulated Neural Net Visualization) */}
        <div className="lg:w-1/2 h-64 lg:h-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 to-dark-800/90 z-10"></div>
          <div className="relative h-full w-full bg-dark-900 flex items-center justify-center">
            {/* Neural Net Visualization as Project Image */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <g>
                {/* Input Layer */}
                <circle cx="20%" cy="20%" r="4" className="fill-primary-500 opacity-70" />
                <circle cx="20%" cy="35%" r="4" className="fill-primary-500 opacity-70" />
                <circle cx="20%" cy="50%" r="4" className="fill-primary-500 opacity-70" />
                <circle cx="20%" cy="65%" r="4" className="fill-primary-500 opacity-70" />
                <circle cx="20%" cy="80%" r="4" className="fill-primary-500 opacity-70" />
                
                {/* Hidden Layer 1 */}
                <circle cx="40%" cy="25%" r="4" className="fill-secondary-500 opacity-70" />
                <circle cx="40%" cy="40%" r="4" className="fill-secondary-500 opacity-70" />
                <circle cx="40%" cy="55%" r="4" className="fill-secondary-500 opacity-70" />
                <circle cx="40%" cy="70%" r="4" className="fill-secondary-500 opacity-70" />
                
                {/* Hidden Layer 2 */}
                <circle cx="60%" cy="30%" r="4" className="fill-secondary-500 opacity-70" />
                <circle cx="60%" cy="50%" r="4" className="fill-secondary-500 opacity-70" />
                <circle cx="60%" cy="70%" r="4" className="fill-secondary-500 opacity-70" />
                
                {/* Output Layer */}
                <circle cx="80%" cy="40%" r="4" className="fill-accent-purple opacity-70" />
                <circle cx="80%" cy="60%" r="4" className="fill-accent-purple opacity-70" />
                
                {/* Connections from Input to Hidden Layer 1 */}
                <path d="M20%,20% L40%,25%" className="stroke-primary-500 opacity-30" strokeWidth="1" />
                <path d="M20%,20% L40%,40%" className="stroke-primary-500 opacity-30" strokeWidth="1" />
                <path d="M20%,20% L40%,55%" className="stroke-primary-500 opacity-30" strokeWidth="1" />
                <path d="M20%,20% L40%,70%" className="stroke-primary-500 opacity-30" strokeWidth="1" />
                
                <path d="M20%,35% L40%,25%" className="stroke-primary-500 opacity-30" strokeWidth="1" />
                <path d="M20%,35% L40%,40%" className="stroke-primary-500 opacity-30" strokeWidth="1" />
                <path d="M20%,35% L40%,55%" className="stroke-primary-500 opacity-30" strokeWidth="1" />
                <path d="M20%,35% L40%,70%" className="stroke-primary-500 opacity-30" strokeWidth="1" />
                
                <path d="M20%,50% L40%,25%" className="stroke-primary-500 opacity-30" strokeWidth="1" />
                <path d="M20%,50% L40%,40%" className="stroke-primary-500 opacity-30" strokeWidth="1" />
                <path d="M20%,50% L40%,55%" className="stroke-primary-500 opacity-30" strokeWidth="1" />
                <path d="M20%,50% L40%,70%" className="stroke-primary-500 opacity-30" strokeWidth="1" />
                
                <path d="M20%,65% L40%,25%" className="stroke-primary-500 opacity-30" strokeWidth="1" />
                <path d="M20%,65% L40%,40%" className="stroke-primary-500 opacity-30" strokeWidth="1" />
                <path d="M20%,65% L40%,55%" className="stroke-primary-500 opacity-30" strokeWidth="1" />
                <path d="M20%,65% L40%,70%" className="stroke-primary-500 opacity-30" strokeWidth="1" />
                
                <path d="M20%,80% L40%,25%" className="stroke-primary-500 opacity-30" strokeWidth="1" />
                <path d="M20%,80% L40%,40%" className="stroke-primary-500 opacity-30" strokeWidth="1" />
                <path d="M20%,80% L40%,55%" className="stroke-primary-500 opacity-30" strokeWidth="1" />
                <path d="M20%,80% L40%,70%" className="stroke-primary-500 opacity-30" strokeWidth="1" />
                
                {/* Connections from Hidden Layer 1 to Hidden Layer 2 */}
                <path d="M40%,25% L60%,30%" className="stroke-secondary-500 opacity-30" strokeWidth="1" />
                <path d="M40%,25% L60%,50%" className="stroke-secondary-500 opacity-30" strokeWidth="1" />
                <path d="M40%,25% L60%,70%" className="stroke-secondary-500 opacity-30" strokeWidth="1" />
                
                <path d="M40%,40% L60%,30%" className="stroke-secondary-500 opacity-30" strokeWidth="1" />
                <path d="M40%,40% L60%,50%" className="stroke-secondary-500 opacity-30" strokeWidth="1" />
                <path d="M40%,40% L60%,70%" className="stroke-secondary-500 opacity-30" strokeWidth="1" />
                
                <path d="M40%,55% L60%,30%" className="stroke-secondary-500 opacity-30" strokeWidth="1" />
                <path d="M40%,55% L60%,50%" className="stroke-secondary-500 opacity-30" strokeWidth="1" />
                <path d="M40%,55% L60%,70%" className="stroke-secondary-500 opacity-30" strokeWidth="1" />
                
                <path d="M40%,70% L60%,30%" className="stroke-secondary-500 opacity-30" strokeWidth="1" />
                <path d="M40%,70% L60%,50%" className="stroke-secondary-500 opacity-30" strokeWidth="1" />
                <path d="M40%,70% L60%,70%" className="stroke-secondary-500 opacity-30" strokeWidth="1" />
                
                {/* Connections from Hidden Layer 2 to Output */}
                <path d="M60%,30% L80%,40%" className="stroke-accent-purple opacity-30" strokeWidth="1" />
                <path d="M60%,30% L80%,60%" className="stroke-accent-purple opacity-30" strokeWidth="1" />
                
                <path d="M60%,50% L80%,40%" className="stroke-accent-purple opacity-30" strokeWidth="1" />
                <path d="M60%,50% L80%,60%" className="stroke-accent-purple opacity-30" strokeWidth="1" />
                
                <path d="M60%,70% L80%,40%" className="stroke-accent-purple opacity-30" strokeWidth="1" />
                <path d="M60%,70% L80%,60%" className="stroke-accent-purple opacity-30" strokeWidth="1" />
              </g>
            </svg>
            
            {/* Project Title Overlay */}
            <div className="relative z-20 text-center px-6">
              <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
              <div className="flex justify-center space-x-3 mt-4">
                {techStack.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-dark-800/80 rounded-full text-xs font-medium text-primary-400 flex items-center">
                    {getTechIcon(tech)}
                    <span className="ml-1">{tech}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Project Description */}
        <div className="lg:w-1/2 p-6 lg:p-8">
          <p className="text-gray-300 mb-6">{description}</p>
          
          <h4 className="text-lg font-semibold text-primary-400 mb-3">Key Features:</h4>
          <ul className="text-gray-300 space-y-2 mb-6">
            {highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
          
          <div className="flex space-x-4">
            {github && (
              <a 
                href={github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-gray-300 hover:text-primary-400 transition"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
            )}
            {liveUrl && (
              <a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-gray-300 hover:text-primary-400 transition"
              >
                <FaExternalLinkAlt className="mr-2" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}