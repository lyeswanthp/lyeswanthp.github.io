import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedText from './ui/AnimatedText';
import ProjectCard from './ui/ProjectCard';

// Project Data
const projectsData = [
  {
    title: "EduDomain Classifier",
    description: "An advanced educational content classifier that leverages the BMRetriever-7B model to accurately categorize educational passages into 18 distinct domains.",
    techStack: ["PyTorch", "Python", "HuggingFace"],
    github: "https://github.com/lyeswanthp/EduDomain-Classifier",
    liveUrl: "",
    image: "/images/projects/edudomainclassifier.jpg",
    highlights: [
      "Utilized BMRetriever-7B model to extract 4096-dimensional embeddings for sophisticated content classification",
      "Implemented automatic mixed precision (AMP) with GradScaler to optimize GPU utilization",
      "Employed cosine annealing warm restarts and early stopping to accelerate convergence over 100+ epochs"
    ]
  },
  {
    title: "Multimodal RAG System",
    description: "A retrieval-augmented generation system that integrates both text and image embeddings to enhance document comprehension and question-answering capabilities.",
    techStack: ["Python", "HuggingFace", "Gradio"],
    github: "https://github.com/lyeswanthp/Multimodal-Retrieval-Augmented-Generation-RAG-for-Document-Understanding",
    liveUrl: "",
    image: "/images/projects/multimodal-rag.jpg",
    highlights: [
      "Developed a multimodal RAG system using ColPali, VLChatProcessor, and DeepSeek Janus models",
      "Built an interactive chat interface with Gradio for querying processed PDF documents",
      "Supported natural language question-answering by combining text and image embedding data"
    ]
  },
  {
    title: "MemRAG-BioQA",
    description: "A memory-efficient retrieval-augmented generation framework specifically designed for biomedical question answering with large language models.",
    techStack: ["PyTorch", "FAISS", "Python"],
    github: "",
    liveUrl: "",
    image: "/images/projects/memrag-bioqa.jpg",
    highlights: [
      "Introduced a novel framework to preprocess and cache tokenized data in batches, reducing memory overhead",
      "Optimized retrieval by building FAISS indexes incrementally with batched embeddings",
      "Incorporated gradient checkpointing and 8-bit precision loading to enable fine-tuning of FLAN-T5-XL with distributed data parallelism"
    ]
  }
];

export default function Projects() {
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

  return (
    <section id="projects" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <AnimatedText
            text="Featured Projects"
            className="text-3xl md:text-4xl font-bold mb-4 text-center"
            TextElement="h2"
          />
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Showcasing my expertise in AI, Machine Learning, and NLP through these selected projects
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mt-12"
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} isEven={index % 2 === 0} />
          ))}
        </motion.div>

        <div className="text-center mt-8">
          <a 
            href="https://github.com/lyeswanthp"
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white font-medium rounded-lg transition shadow-lg hover:shadow-primary-500/30"
          >
            View More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}