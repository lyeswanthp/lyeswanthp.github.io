import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';

const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1];
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const up: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: bezier } } };

const experiences = [
  {
    title: 'HPC & Cloud Research Engineer',
    company: 'Emory University - Research Computing',
    period: 'May 2024 - Present',
    location: 'Atlanta, GA',
    accent: '#B8860B',
    description:
      'Engineering and maintaining high-performance computing infrastructure that supports AI/ML research across the university.',
    highlights: [
      'Built a GPU monitoring system using Python and NVIDIA DCGM to track utilization metrics across compute nodes, streaming data to Prometheus for real-time visualization in Grafana dashboards',
      'Designed testing pipelines for AWS ParallelCluster architecture upgrades, ensuring compute nodes maintain functionality, correct user permissions, and compatibility with ML workloads',
      'Automated user lifecycle management by developing Python scripts that integrate with SLURM accounting database to identify and remove inactive users based on resource usage patterns',
      'Created alerting systems for underutilized GPU resources, helping optimize costs on high-performance compute instances',
    ],
  },
  {
    title: 'ML Research Assistant',
    company: 'MAIX Lab, Emory University',
    period: 'Aug 2024 - Present',
    location: 'Atlanta, GA',
    accent: '#6B8E23',
    description:
      'Conducting research in multimodal AI systems, foundation models for biomedical signals, and retrieval-augmented generation.',
    highlights: [
      'Building a multimodal foundation model that combines ECG signals with clinical text for diagnostic applications, achieving state-of-the-art performance on downstream tasks',
      'Developed a RAG system for biomedical document understanding using PyTorch and LangChain, enabling more accurate question-answering from medical literature',
      'Published research on biomedical question answering and ECG/PPG signal processing in peer-reviewed conferences',
      'Built ML training pipelines on AWS and GCP with distributed data processing to handle large-scale biomedical datasets',
    ],
  },
  {
    title: 'Prompt Engineer',
    company: 'Insignia Consultancy',
    period: 'Jul 2023 - Oct 2023',
    location: 'Remote',
    accent: '#CD853F',
    description:
      'Designed and optimized prompts for large language models in production environments.',
    highlights: [
      'Engineered prompt templates for GPT-4 and Claude to improve response quality and consistency across customer-facing applications',
      'Developed testing frameworks to evaluate prompt performance and identify edge cases in LLM behavior',
      'Worked with product teams to refine model outputs based on user feedback and business requirements',
    ],
  },
  {
    title: 'Machine Learning Researcher',
    company: 'University of Winnipeg',
    period: 'Jan 2023 - Jul 2023',
    location: 'Winnipeg, Canada',
    accent: '#708090',
    description:
      'Conducted research in computer vision and deep learning for medical imaging applications.',
    highlights: [
      'Published research papers in medical AI focusing on diagnostic imaging and disease classification',
      'Developed CNN-based models for automated disease detection from medical scans',
      'Collaborated with medical professionals to ensure models aligned with clinical workflows and diagnostic standards',
      'Contributed to open-source medical imaging datasets to support the research community',
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-24 px-6 sm:px-8 lg:px-12 bg-[#0d0b09] overflow-hidden"
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={up} className="mb-6">
            <span className="inline-flex items-center gap-3 text-[#B8860B] text-xs tracking-[0.25em] uppercase font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="w-10 h-px bg-[#B8860B]" />
              Experience
            </span>
          </motion.div>
          <motion.h2 variants={up} className="text-4xl md:text-5xl font-light text-white/90 mb-16 leading-[1.1]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Professional<br />Experience
          </motion.h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-[#B8860B]/30 via-[#B8860B]/10 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                className="relative pl-10"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: bezier }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-[23px] h-[23px] rounded-full border-2 flex items-center justify-center" style={{ borderColor: exp.accent }}>
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: exp.accent }} />
                </div>

                <div className="group rounded-sm p-6 bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.08] hover:bg-white/[0.03] transition-all duration-500">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-medium text-white/80" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        {exp.title}
                      </h3>
                      <p className="text-sm text-white/40 mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>{exp.company}</p>
                    </div>
                    <div className="text-xs text-white/25 mt-2 sm:mt-0 sm:text-right tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>
                  <p className="text-sm text-white/35 mb-4 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-white/30" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: exp.accent }} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>


    </section>
  );
}
