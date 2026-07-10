import React from 'react';
import { motion } from 'framer-motion';

const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1];
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.13 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: bezier } },
};

interface Highlight {
  lead: string;
  detail: string;
}

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: Highlight[];
  stack: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: 'AWS & HPC Infrastructure Engineer',
    company: 'Emory University, Research Computing',
    period: 'Aug 2024 to Present',
    location: 'Atlanta, GA',
    highlights: [
      {
        lead: 'AWS cost intelligence pipeline',
        detail:
          'Leadership lacked a unified view of account spend, so I scripted extraction of account-wide cost and usage data and modeled it with Amazon Athena SQL, turning raw billing exports into a queryable layer for reporting.',
      },
      {
        lead: 'Executive Power BI dashboard',
        detail:
          'Bridged Athena to Power BI through an on-premises data gateway on EC2, exposing cost-per-service, utilization, and trend views that make where the money goes legible to non-engineers at a glance.',
      },
      {
        lead: 'Zero-touch refresh automation',
        detail:
          'Power BI Service cannot reach Athena directly, so I authenticated the ODBC driver with an IAM instance profile and ran the gateway as an auto-recovering Windows service, then used Lambda and EventBridge to start the EC2 host before each scheduled refresh and stop it after, cutting idle compute cost to near zero.',
      },
      {
        lead: 'SharePoint delivery',
        detail:
          'Published the dataset from Power BI Desktop to the Service and embedded the live dashboard natively into SharePoint, so stakeholders read always-current numbers without touching AWS or Power BI.',
      },
      {
        lead: 'Interactive HPC apps on Open OnDemand',
        detail:
          'Researchers needed RStudio and VS Code without learning Slurm, so I built and deployed containerized application images on Open OnDemand that launch as browser-based interactive sessions backed by cluster compute.',
      },
      {
        lead: 'SLURM user-lifecycle automation',
        detail:
          'Replaced manual, error-prone account onboarding and offboarding with scripts driven by the SLURM accounting database, provisioning associations, fair-share, and cleanup automatically for every new and departing user.',
      },
    ],
    stack: ['AWS', 'Athena', 'Power BI', 'Lambda', 'EventBridge', 'EC2', 'IAM', 'Open OnDemand', 'Slurm', 'Python'],
  },
  {
    role: 'ML Research Assistant',
    company: 'MAIX Lab, Emory University',
    period: 'May 2024 to Present',
    location: 'Atlanta, GA',
    highlights: [
      {
        lead: 'Biomedical QA and signal research',
        detail:
          'Published peer-reviewed work on biomedical question answering and ECG/PPG signal processing, from problem framing through model design and evaluation.',
      },
      {
        lead: 'Diagnostic imaging models',
        detail:
          'Developed CNN-based models for automated disease detection from medical scans, tuning architectures and training regimes for reliable performance on clinical data.',
      },
      {
        lead: 'Open datasets',
        detail:
          'Contributed open-source medical imaging datasets to the research community to support reproducible benchmarking.',
      },
    ],
    stack: ['PyTorch', 'Computer Vision', 'ECG/PPG', 'Deep Learning'],
  },
  {
    role: 'Machine Learning Researcher',
    company: 'University of Winnipeg',
    period: 'Jul 2023 to Oct 2023',
    location: 'Winnipeg, Canada',
    highlights: [
      {
        lead: 'Medical AI research',
        detail:
          'Published research in medical AI centered on diagnostic imaging and disease classification, from dataset curation to model evaluation.',
      },
      {
        lead: 'Clinical alignment',
        detail:
          'Worked with medical professionals to align model behavior with clinical workflows and diagnostic standards so outputs were usable in practice.',
      },
    ],
    stack: ['TensorFlow', 'Medical Imaging', 'Classification'],
  },
  {
    role: 'Prompt Engineer',
    company: 'Insignia Consultancy',
    period: 'Jan 2023 to Jul 2023',
    location: 'Remote',
    highlights: [
      {
        lead: 'Production prompt templates',
        detail:
          'Engineered prompt templates for GPT-4 and Claude that improved response quality and consistency across customer-facing applications.',
      },
      {
        lead: 'Evaluation frameworks',
        detail:
          'Built testing frameworks to measure prompt performance and surface edge cases in LLM behavior before they reached users.',
      },
      {
        lead: 'Cross-team iteration',
        detail:
          'Refined model outputs with product teams based on user feedback and business requirements.',
      },
    ],
    stack: ['LLMs', 'Prompt Engineering', 'Evaluation'],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-28 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="mb-14"
        >
          <span className="label mb-4">Experience</span>
          <h2 className="font-serif-display text-4xl md:text-5xl font-medium mt-3 leading-tight">
            Where the work happened.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
        >
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="py-10 border-t last:border-b"
              style={{ borderColor: 'var(--line)' }}
            >
              <div className="md:grid md:grid-cols-[1fr_2fr] md:gap-10">
                <div className="mb-5 md:mb-0">
                  <h3 className="font-serif-display text-xl md:text-2xl font-medium mb-2">
                    {item.role}
                  </h3>
                  <p className="text-sm mb-1" style={{ color: 'var(--text-soft)' }}>
                    {item.company}
                  </p>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    {item.period} · {item.location}
                  </p>
                </div>
                <div>
                  <ul className="space-y-4 mb-5">
                    {item.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm leading-relaxed"
                        style={{ color: 'var(--text-soft)' }}
                      >
                        <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--accent)' }} />
                        <span>
                          <span className="font-medium" style={{ color: 'var(--text)' }}>
                            {highlight.lead}.
                          </span>{' '}
                          {highlight.detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs tracking-wide" style={{ color: 'var(--text-muted)' }}>
                    {item.stack.join(' · ')}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
