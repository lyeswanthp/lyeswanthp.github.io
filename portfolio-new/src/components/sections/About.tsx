import { motion } from 'framer-motion';

const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1];
const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: bezier,
    },
  },
};

const featureCards = [
  {
    title: 'Multi agent systems',
    accent: '#B8860B',
    description:
      'Open source CLI that combines static analyzers with parallel specialist reviewers on a graph of your repository, built from tree sitter ASTs and a compact knowledge graph so agents see call chains and imports instead of flat file dumps.',
  },
  {
    title: 'Real time AI',
    accent: '#6B8E23',
    description:
      'AeroScript AI: hand tracking in the browser with MediaPipe, DoodleNet sketch guesses, and a local vision language model for gesture based drawing.',
  },
  {
    title: 'RAG pipelines',
    accent: '#CD853F',
    description:
      'Multimodal document RAG with ColPali style page embeddings and vision language answers over PDFs, plus retrieval over large ECG corpora paired with cardiologist reports.',
  },
  {
    title: 'ML infrastructure',
    accent: '#708090',
    description:
      'ECG Agent: Dockerized encoder, FAISS index, vLLM, and MCP services so encoding stays outside the LLM loop and only small embeddings flow through the agent graph.',
  },
] as const;

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-24 px-6 sm:px-8 lg:px-12 bg-[#0d0b09] overflow-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-3 text-[#B8860B] text-xs tracking-[0.25em] uppercase font-medium">
                <span className="w-10 h-px bg-[#B8860B]" />
                About
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-light text-white/90 mb-8 leading-[1.1]"
            >
              About me
            </motion.h2>

            <motion.div variants={fadeUp} className="space-y-5 mb-10">
              <p className="text-base text-white/45 leading-relaxed">
                I&apos;m an AI engineer who goes from training foundation models on million scale ECG signals to building
                the GPU clusters they run on, and right now one of those models is being tested in ambulances to catch
                heart attacks before patients reach the ER.
              </p>
              <p className="text-base text-white/45 leading-relaxed">
                I recently graduated from the MS in Computer Science program at Emory and work as a cloud computing
                assistant in the Office of Information Technology, Emory University. Day to day I build Python and SLURM
                tooling for applications on HPC clusters.
              </p>
              <p className="text-base text-white/45 leading-relaxed">
                My research has been in healthcare AI at Emory, including foundation model and multimodal work on ECG and
                PPG, with peer reviewed publications.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="space-y-4"
          >
            {featureCards.map((card) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                className="group relative pl-6 py-5 pr-6 rounded-sm bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.04] hover:border-white/[0.08] transition-all duration-500"
              >
                <div
                  className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full transition-all duration-500 group-hover:h-full"
                  style={{ backgroundColor: card.accent, opacity: 0.6 }}
                />
                <h3 className="text-lg font-medium text-white/80 mb-1.5">{card.title}</h3>
                <p className="text-sm text-white/35 leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
