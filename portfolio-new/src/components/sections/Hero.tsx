import React from 'react';
import { motion } from 'framer-motion';
import NeuralGrid from '../animations/NeuralGrid';

const ECGTrace: React.FC = () => {
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

    const ecgData = [
      0, 0, 0, 0, 0, -2, 8, -12, 18, -6, 2, 0, 0, 0, 0, 0, 0, 3, 6, 3, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0,
    ];

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const step = width / ecgData.length;
      const midY = height / 2;

      // Outer glow trace
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(110, 231, 255, 0.10)';
      ctx.lineWidth = 8;
      for (let i = 0; i < width; i++) {
        const t = ((i + offset) / step) % ecgData.length;
        const idx = Math.floor(t) % ecgData.length;
        const nextIdx = (idx + 1) % ecgData.length;
        const frac = t - Math.floor(t);
        const y = ecgData[idx] * (1 - frac) + ecgData[nextIdx] * frac;
        if (i === 0) ctx.moveTo(i, midY + y * 3);
        else ctx.lineTo(i, midY + y * 3);
      }
      ctx.stroke();

      // Inner sharp trace
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(110, 231, 255, 0.55)';
      ctx.lineWidth = 1.2;
      for (let i = 0; i < width; i++) {
        const t = ((i + offset) / step) % ecgData.length;
        const idx = Math.floor(t) % ecgData.length;
        const nextIdx = (idx + 1) % ecgData.length;
        const frac = t - Math.floor(t);
        const y = ecgData[idx] * (1 - frac) + ecgData[nextIdx] * frac;
        if (i === 0) ctx.moveTo(i, midY + y * 3);
        else ctx.lineTo(i, midY + y * 3);
      }
      ctx.stroke();

      offset += 0.6;
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

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: bezier } },
};

const marqueeTokens = [
  'CARDIOFM',
  'OMI · 0.87 AUROC',
  'ECG · PPG · WAVEFORMS',
  'EMORY HYPER C3',
  'AMBULANCE-DEPLOYED',
  'FOUNDATION MODELS',
  '17+ PUBLICATIONS',
  'ISCE 2026',
  'SLURM · PROMETHEUS',
  'GRADY · ROCHESTER',
];

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Layer 1 — base gradient wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(1100px 700px at 22% 30%, rgba(110, 231, 255, 0.10), transparent 60%), radial-gradient(900px 600px at 82% 70%, rgba(167, 139, 250, 0.10), transparent 60%), radial-gradient(circle at 50% 120%, rgba(245, 197, 99, 0.06), transparent 50%)',
        }}
      />

      {/* Layer 2 — grid */}
      <div className="absolute inset-0 cyber-grid" />

      {/* Layer 3 — animated neural graph */}
      <NeuralGrid />

      {/* Layer 4 — ECG signature (subtle, behind text) */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-40 opacity-60">
        <ECGTrace />
      </div>

      {/* Layer 5 — scanlines + noise */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '128px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-16 items-center min-h-screen py-32">
          {/* Left column — name & copy */}
          <motion.div variants={stagger} initial="hidden" animate="visible">
            {/* Terminal-style mono tag */}
            <motion.div variants={fadeUp} className="mb-9 font-mono-tech text-[11px] tracking-[0.22em]">
              <div className="flex items-center gap-3 mono-flicker" style={{ color: 'var(--accent-cyan)' }}>
                <span className="status-dot" />
                <span>SYS://AI_ENGINEER</span>
                <span className="text-white/25">·</span>
                <span className="text-white/45">EMORY UNIVERSITY · ATLANTA</span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1 variants={fadeUp} className="mb-8">
              <span className="hero-name-a block font-display font-light text-[clamp(3.5rem,8.5vw,6.5rem)] leading-[0.92] tracking-tight">
                Lovely
              </span>
              <span className="hero-name-b block font-display font-light text-[clamp(3.5rem,8.5vw,6.5rem)] leading-[0.92] tracking-tight">
                Yeswanth<span style={{ WebkitTextFillColor: 'var(--accent-cyan)' }}>.</span>
              </span>
              <span className="block font-mono-tech text-sm md:text-base mt-5 tracking-[0.32em] uppercase text-white/35">
                &gt; panchumarthi_
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={fadeUp}
              className="font-display text-base md:text-lg leading-relaxed max-w-xl mb-12"
              style={{ color: 'var(--text-secondary)' }}
            >
              Building AI that runs in the real world — from training foundation models on million-scale medical signals to deploying them inside <span className="neon-cyan">ambulances</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              {[
                { href: '#cardiofm', label: 'See CardioFM', primary: true },
                { href: '#contact', label: 'Get in Touch', primary: false },
                {
                  href: 'https://drive.google.com/file/d/1v8EoGp7CwuMjfkC0qoE7uoC6Jz8g6P9R/view',
                  label: 'Resume ↗',
                  primary: false,
                  external: true,
                },
              ].map((btn, i) => (
                <motion.a
                  key={i}
                  href={btn.href}
                  target={btn.external ? '_blank' : undefined}
                  rel={btn.external ? 'noopener noreferrer' : undefined}
                  className="btn-sweep group relative px-7 py-3.5 font-mono-tech text-[11px] tracking-[0.22em] uppercase"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    border: btn.primary
                      ? '1px solid var(--accent-cyan)'
                      : '1px solid var(--border-hover)',
                    color: btn.primary ? 'var(--accent-cyan)' : 'var(--text-primary)',
                    background: btn.primary ? 'rgba(110, 231, 255, 0.06)' : 'transparent',
                    boxShadow: btn.primary
                      ? '0 0 24px -8px var(--accent-cyan-soft), inset 0 0 22px -14px var(--accent-cyan-soft)'
                      : 'none',
                  }}
                >
                  {btn.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column — stats console */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: bezier }}
            className="hidden lg:block"
          >
            <div className="glass bracket-frame relative p-7">
              <span className="br-tl" />
              <span className="br-br" />

              <div className="flex items-center justify-between mb-6 font-mono-tech text-[10px] tracking-[0.22em] text-white/40">
                <span>// LIVE_TELEMETRY</span>
                <div className="flex items-center gap-2">
                  <span className="status-dot" />
                  <span>ONLINE</span>
                </div>
              </div>

              <div className="space-y-5">
                {[
                  { value: '17+', label: 'PUBLICATIONS', color: 'var(--accent-cyan)' },
                  { value: 'ISCE', label: 'BEST PAPER 2026', color: 'var(--accent-violet)' },
                  { value: '0.87', label: 'AUROC · OMI DETECTION', color: 'var(--accent-gold)' },
                  { value: '1M+', label: 'SIGNALS · CARDIOFM', color: 'var(--accent-cyan)' },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="flex items-baseline justify-between gap-4 border-b last:border-b-0 pb-4 last:pb-0"
                    style={{ borderColor: 'var(--border-primary)' }}
                  >
                    <span
                      className="font-display text-3xl md:text-4xl font-light"
                      style={{ color: s.color, textShadow: `0 0 16px ${s.color}40` }}
                    >
                      {s.value}
                    </span>
                    <span className="font-mono-tech text-[10px] tracking-[0.22em] text-white/40">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t" style={{ borderColor: 'var(--border-primary)' }}>
                <div className="font-mono-tech text-[10px] tracking-[0.2em] text-white/35">
                  $ uptime — building since 2020 ▍
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom marquee strip */}
      <div
        className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-b backdrop-blur-md py-3"
        style={{
          borderColor: 'var(--border-primary)',
          background: 'rgba(5, 6, 10, 0.4)',
        }}
      >
        <div className="marquee-track flex gap-12 whitespace-nowrap font-mono-tech text-[11px] tracking-[0.28em] text-white/35">
          {[...marqueeTokens, ...marqueeTokens].map((tok, i) => (
            <span key={i} className="flex items-center gap-12">
              {tok}
              <span style={{ color: 'var(--accent-cyan)' }}>◇</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
