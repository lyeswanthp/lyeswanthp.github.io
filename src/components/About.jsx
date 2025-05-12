import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedText from './ui/AnimatedText';
import { FaGraduationCap, FaCode, FaLaptopCode } from 'react-icons/fa';
import { SiPython } from 'react-icons/si';  // or any other suitable icon

export default function About() {
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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <AnimatedText
            text="About Me"
            className="text-3xl md:text-4xl font-bold mb-4 text-center"
            TextElement="h2"
          />
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto rounded-full"></div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Profile Summary */}
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-6 gradient-text">
              AI Engineer & Machine Learning Researcher
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a passionate AI Engineer and Machine Learning Researcher with expertise in deep learning, natural language processing, and computer vision. Currently pursuing my Master's in Computer Science at Emory University, I combine strong theoretical foundations with practical implementation skills.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              My experience ranges from designing ECG-Text contrastive learning frameworks to developing distributed training pipelines for large-scale deep learning architectures. I'm particularly interested in retrieval-augmented generation (RAG) systems and fine-tuning large language models.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-primary-500 mr-2"></span>
                <span className="text-gray-300">PyTorch</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-primary-500 mr-2"></span>
                <span className="text-gray-300">TensorFlow</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-primary-500 mr-2"></span>
                <span className="text-gray-300">NLP/LLMs</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-primary-500 mr-2"></span>
                <span className="text-gray-300">Computer Vision</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-primary-500 mr-2"></span>
                <span className="text-gray-300">RAG</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-primary-500 mr-2"></span>
                <span className="text-gray-300">Deep Learning</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Animated Bio Visual */}
          <motion.div variants={itemVariants} className="order-1 lg:order-2">
            <div className="card-highlight p-6 relative overflow-hidden">
              {/* Animated Icons and Elements */}
              <div className="relative h-96 flex flex-col justify-center items-center">
                {/* AI/ML Visualization with animated code and elements */}
                <div className="code-text text-primary-400 text-sm absolute top-5 left-0 opacity-40">
                  <pre>
                    {`# Neural Network Architecture
class DeepTransformer(nn.Module):
    def __init__(self, d_model=512, nhead=8):
        super().__init__()
        self.transformer = Transformer(
            d_model=d_model, 
            nhead=nhead,
            num_encoder_layers=6
        )
        self.classifier = nn.Linear(d_model, num_classes)
        
    def forward(self, x):
        # Feed forward pass
        x = self.transformer(x)
        return self.classifier(x)`}
                  </pre>
                </div>

                {/* Experience Visual with animated icons */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.7 }}
                    className="w-24 h-24 rounded-full border-2 border-primary-500 flex items-center justify-center bg-dark-800 mb-4 ml-12 shadow-lg shadow-primary-500/20"
                  >
                    <SiPython className="text-primary-400 text-4xl" />
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.7 }}
                    className="w-20 h-20 rounded-full border-2 border-primary-500 flex items-center justify-center bg-dark-800 mb-4 shadow-lg shadow-primary-500/20 -mt-6 -ml-20"
                  >
                    <FaGraduationCap className="text-primary-400 text-3xl" />
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.7 }}
                    className="w-16 h-16 rounded-full border-2 border-primary-500 flex items-center justify-center bg-dark-800 shadow-lg shadow-primary-500/20 ml-16"
                  >
                    <FaCode className="text-primary-400 text-2xl" />
                  </motion.div>
                </div>

                {/* Neural Network Nodes (Decorative) */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <circle cx="40%" cy="30%" r="3" className="fill-primary-500 opacity-70 data-point" />
                    <circle cx="60%" cy="40%" r="3" className="fill-primary-500 opacity-70 data-point" />
                    <circle cx="50%" cy="50%" r="3" className="fill-primary-500 opacity-70 data-point" />
                    <circle cx="30%" cy="60%" r="3" className="fill-primary-500 opacity-70 data-point" />
                    <circle cx="70%" cy="70%" r="3" className="fill-primary-500 opacity-70 data-point" />
                    <circle cx="20%" cy="40%" r="3" className="fill-primary-500 opacity-70 data-point" />
                    <circle cx="80%" cy="60%" r="3" className="fill-primary-500 opacity-70 data-point" />
                    
                    <path d="M40%,30% L60%,40%" className="stroke-primary-500 opacity-50 neural-line" strokeWidth="1" />
                    <path d="M60%,40% L50%,50%" className="stroke-primary-500 opacity-50 neural-line" strokeWidth="1" />
                    <path d="M50%,50% L30%,60%" className="stroke-primary-500 opacity-50 neural-line" strokeWidth="1" />
                    <path d="M50%,50% L70%,70%" className="stroke-primary-500 opacity-50 neural-line" strokeWidth="1" />
                    <path d="M20%,40% L30%,60%" className="stroke-primary-500 opacity-50 neural-line" strokeWidth="1" />
                    <path d="M30%,60% L70%,70%" className="stroke-primary-500 opacity-50 neural-line" strokeWidth="1" />
                    <path d="M60%,40% L80%,60%" className="stroke-primary-500 opacity-50 neural-line" strokeWidth="1" />
                    <path d="M80%,60% L70%,70%" className="stroke-primary-500 opacity-50 neural-line" strokeWidth="1" />
                    <path d="M40%,30% L20%,40%" className="stroke-primary-500 opacity-50 neural-line" strokeWidth="1" />
                  </g>
                </svg>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="card-highlight p-6">
              <div className="flex items-center mb-4">
                <FaGraduationCap className="text-primary-500 text-3xl mr-4" />
                <div>
                  <h4 className="text-xl font-bold">Master of Science - Computer Science</h4>
                  <p className="text-gray-400">Emory University</p>
                </div>
              </div>
              <p className="text-gray-300 mb-2">August 2024 - May 2025</p>
              <p className="text-gray-400">
                Coursework: Machine Learning | Python | Statistics | LLM | CNN | SQL | Deep Learning | Generative AI | Information Retrieval
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="card-highlight p-6">
              <div className="flex items-center mb-4">
                <FaGraduationCap className="text-primary-500 text-3xl mr-4" />
                <div>
                  <h4 className="text-xl font-bold">Bachelor of Science - Computer Science Engineering</h4>
                  <p className="text-gray-400">SRM University</p>
                </div>
              </div>
              <p className="text-gray-300 mb-2">August 2020 - June 2024</p>
              <p className="text-gray-400">
                Coursework: OOPs | Supervised & Unsupervised Learning | R | Data Mining | Big Data Analytics and Visualization | GPA: 3.6/4.0
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}