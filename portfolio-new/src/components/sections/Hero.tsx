import React from 'react';
import { motion } from 'framer-motion';

const ECGWave: React.FC = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let width = 0;
    let height = 0;
    let offset = 0;
    let animId: number;

    const ecgData = [0, 0, 0, 0, 0, -2, 8, -12, 18, -6, 2, 0, 0, 0, 0, 0, 0, 3, 6, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    const resize = () => {
      if (!canvas) return;
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    const draw = () => {
      if (!ctx || !width || !height) return;
      ctx.clearRect(0, 0, width, height);

      const step = width / ecgData.length;
      const midY = height / 2;

      ctx.beginPath();
      ctx.strokeStyle = 'rgba(184,134,11,0.06)';
      ctx.lineWidth = 10;
      for (let i = 0; i < width; i++) {
        const t = (i + offset) / step % ecgData.length;
        const idx = Math.floor(t) % ecgData.length;
        const nextIdx = (idx + 1) % ecgData.length;
        const frac = t - Math.floor(t);
        const y = ecgData[idx] * (1 - frac) + ecgData[nextIdx] * frac;
        i === 0 ? ctx.moveTo(i, midY + y * 3) : ctx.lineTo(i, midY + y * 3);
      }
      ctx.stroke();

      ctx.beginPath();
      ctx.strokeStyle = 'rgba(184,134,11,0.2)';
      ctx.lineWidth = 1.5;
      for (let i = 0; i < width; i++) {
        const t = (i + offset) / step % ecgData.length;
        const idx = Math.floor(t) % ecgData.length;
        const nextIdx = (idx + 1) % ecgData.length;
        const frac = t - Math.floor(t);
        const y = ecgData[idx] * (1 - frac) + ecgData[nextIdx] * frac;
        i === 0 ? ctx.moveTo(i, midY + y * 3) : ctx.lineTo(i, midY + y * 3);
      }
      ctx.stroke();

      offset += 0.5;
      animId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
};

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.13 } } };
const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: bezier },
  },
};

const heroStats = [
  { value: '5+', label: 'Production projects' },
  { value: 'LangGraph', label: 'Multi agent' },
  { value: '17+', label: 'Research papers' },
] as const;

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0d0b09]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-[radial-gradient(circle,rgba(184,134,11,0.07)_0%,transparent_65%)]" />

      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '128px',
        }}
      />

      <ECGWave />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center min-h-screen py-32">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div variants={fadeUp} className="mb-8">
              <span
                className="inline-flex items-center gap-3 text-[#B8860B] text-xs tracking-[0.25em] uppercase font-medium"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <span className="w-10 h-px bg-[#B8860B]" />
                AI ENGINEER
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="mb-6">
              <span
                className="block text-[clamp(3.5rem,8vw,6rem)] font-light text-white/90 leading-[0.92] tracking-tight"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Lovely
              </span>
              <span
                className="block text-[clamp(3.5rem,8vw,6rem)] font-light text-white/90 leading-[0.92] tracking-tight"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Yeswanth
              </span>
              <span
                className="block text-xl md:text-2xl font-light text-white/35 mt-4 tracking-[0.18em] uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Panchumarthi
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-white/45 leading-relaxed max-w-lg mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              I am in the MS in Computer Science program at Emory and work as a cloud computing assistant in Research
              Computing. Day to day I build Python tooling for GPU monitoring on HPC clusters, support AWS and Jupyter
              style workflows, and help researchers across departments get models trained without burning time or
              budget.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-white/45 leading-relaxed max-w-lg mb-12"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              My research has been in healthcare AI at Emory, including multimodal work on ECG and clinical text for acute
              conditions like occlusion MI. I also publish regularly; the number below is peer reviewed work, not blog
              posts.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-10 mb-14">
              {heroStats.map((stat, i) => (
                <div key={i}>
                  <div
                    className="text-3xl md:text-4xl font-light text-[#B8860B]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-[10px] text-white/25 tracking-[0.2em] uppercase mt-1.5"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              {[
                { href: '#projects', label: 'View projects', primary: true },
                { href: '#contact', label: 'Get in touch', primary: false },
                {
                  href: 'https://drive.google.com/file/d/1v8EoGp7CwuMjfkC0qoE7uoC6Jz8g6P9R/view',
                  label: 'Resume',
                  primary: false,
                  external: true,
                },
              ].map((btn, i) => (
                <motion.a
                  key={i}
                  href={btn.href}
                  target={btn.external ? '_blank' : undefined}
                  rel={btn.external ? 'noopener noreferrer' : undefined}
                  className="group relative px-7 py-3.5 overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div
                    className={`absolute inset-0 border rounded-sm ${
                      btn.primary ? 'border-[#B8860B]' : 'border-white/12'
                    }`}
                  />
                  <div
                    className={`absolute inset-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${
                      btn.primary ? 'bg-[#B8860B]' : 'bg-white/5'
                    }`}
                  />
                  <span
                    className={`relative text-xs tracking-[0.18em] uppercase font-medium transition-colors duration-500 ${
                      btn.primary
                        ? 'text-[#B8860B] group-hover:text-[#0d0b09]'
                        : 'text-white/40 group-hover:text-white/90'
                    }`}
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {btn.label}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="hidden lg:flex flex-col items-center gap-6"
          >
            <div className="w-px h-20 bg-gradient-to-b from-transparent to-[#B8860B]/25" />
            <span
              className="text-[10px] text-white/15 tracking-[0.3em] uppercase"
              style={{ writingMode: 'vertical-rl', fontFamily: "'DM Sans', sans-serif" }}
            >
              Emory University · Atlanta
            </span>
            <div className="w-px h-20 bg-gradient-to-b from-[#B8860B]/25 to-transparent" />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <div className="w-[18px] h-7 border border-white/12 rounded-full flex justify-center pt-1">
            <motion.div
              className="w-[3px] h-[6px] bg-[#B8860B]/50 rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
