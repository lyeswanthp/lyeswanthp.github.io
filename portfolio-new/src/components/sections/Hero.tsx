import { useEffect, useRef } from 'react';
import { motion, type Variants } from 'framer-motion';

function EcgLine() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    let w: number, h: number, offset = 0, raf: number;
    const ecg = [0,0,0,0,0,-2,8,-12,18,-6,2,0,0,0,0,0,0,3,6,3,0,0,0,0,0,0,0,0,0,0];

    function resize() {
      if (!canvas || !ctx) return;
      w = canvas.offsetWidth; h = canvas.offsetHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
    }
    resize();
    window.addEventListener('resize', resize);

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      const seg = w / ecg.length, mid = h / 2;
      // Glow
      ctx.beginPath(); ctx.strokeStyle = 'rgba(184,134,11,0.06)'; ctx.lineWidth = 10;
      for (let x = 0; x < w; x++) { const idx = ((x + offset) / seg) % ecg.length; const i0 = Math.floor(idx) % ecg.length; const i1 = (i0+1) % ecg.length; const t = idx - Math.floor(idx); const v = ecg[i0]*(1-t)+ecg[i1]*t; x===0 ? ctx.moveTo(x,mid+v*3) : ctx.lineTo(x,mid+v*3); }
      ctx.stroke();
      // Line
      ctx.beginPath(); ctx.strokeStyle = 'rgba(184,134,11,0.2)'; ctx.lineWidth = 1.5;
      for (let x = 0; x < w; x++) { const idx = ((x + offset) / seg) % ecg.length; const i0 = Math.floor(idx) % ecg.length; const i1 = (i0+1) % ecg.length; const t = idx - Math.floor(idx); const v = ecg[i0]*(1-t)+ecg[i1]*t; x===0 ? ctx.moveTo(x,mid+v*3) : ctx.lineTo(x,mid+v*3); }
      ctx.stroke();
      offset += 0.5;
      raf = requestAnimationFrame(draw);
    }
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1];
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.13 } } };
const up: Variants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: bezier } } };


export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0d0b09]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-[radial-gradient(circle,rgba(184,134,11,0.07)_0%,transparent_65%)]" />
      <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")', backgroundSize: '128px' }} />
      <EcgLine />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center min-h-screen py-32">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-2xl">
            <motion.div variants={up} className="mb-8">
              <span className="inline-flex items-center gap-3 text-[#B8860B] text-xs tracking-[0.25em] uppercase font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <span className="w-10 h-px bg-[#B8860B]" />
                AI/ML Engineer · Research Scientist
              </span>
            </motion.div>

            <motion.h1 variants={up} className="mb-6">
              <span className="block text-[clamp(3.5rem,8vw,6rem)] font-light text-white/90 leading-[0.92] tracking-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>Lovely</span>
              <span className="block text-[clamp(3.5rem,8vw,6rem)] font-light text-white/90 leading-[0.92] tracking-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>Yeswanth</span>
              <span className="block text-xl md:text-2xl font-light text-white/35 mt-4 tracking-[0.18em] uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>Panchumarthi</span>
            </motion.h1>

            <motion.p variants={up} className="text-base md:text-lg text-white/45 leading-relaxed max-w-md mb-12" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Building AI that detects heart attacks in ambulances — and the GPU infrastructure that powers research at scale.
            </motion.p>

            <motion.div variants={up} className="flex flex-wrap gap-10 mb-14">
              {[{ v: '17+', l: 'Publications' }, { v: 'ISCE', l: '2026 Accepted' }, { v: '0.87', l: 'AUROC · OMI' }].map((s, i) => (
                <div key={i}>
                  <div className="text-3xl md:text-4xl font-light text-[#B8860B]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{s.v}</div>
                  <div className="text-[10px] text-white/25 tracking-[0.2em] uppercase mt-1.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>{s.l}</div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={up} className="flex flex-wrap gap-3">
              {[
                { href: '#cardiofm', label: 'See CardioFM', primary: true },
                { href: '#contact', label: 'Get in Touch' },
                { href: 'https://drive.google.com/file/d/1v8EoGp7CwuMjfkC0qoE7uoC6Jz8g6P9R/view', label: 'Resume', external: true },
              ].map((btn, i) => (
                <motion.a key={i} href={btn.href} target={btn.external ? '_blank' : undefined} rel={btn.external ? 'noopener noreferrer' : undefined} className="group relative px-7 py-3.5 overflow-hidden" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <div className={`absolute inset-0 border rounded-sm ${btn.primary ? 'border-[#B8860B]' : 'border-white/12'}`} />
                  <div className={`absolute inset-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${btn.primary ? 'bg-[#B8860B]' : 'bg-white/5'}`} />
                  <span className={`relative text-xs tracking-[0.18em] uppercase font-medium transition-colors duration-500 ${btn.primary ? 'text-[#B8860B] group-hover:text-[#0d0b09]' : 'text-white/40 group-hover:text-white/90'}`} style={{ fontFamily: "'DM Sans', sans-serif" }}>{btn.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 0.8 }} className="hidden lg:flex flex-col items-center gap-6">
            <div className="w-px h-20 bg-gradient-to-b from-transparent to-[#B8860B]/25" />
            <span className="text-[10px] text-white/15 tracking-[0.3em] uppercase" style={{ writingMode: 'vertical-rl', fontFamily: "'DM Sans', sans-serif" }}>Emory University · Atlanta</span>
            <div className="w-px h-20 bg-gradient-to-b from-[#B8860B]/25 to-transparent" />
          </motion.div>
        </div>
      </div>

      <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}>
          <div className="w-[18px] h-7 border border-white/12 rounded-full flex justify-center pt-1">
            <motion.div className="w-[3px] h-[6px] bg-[#B8860B]/50 rounded-full" animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }} />
          </div>
        </motion.div>
      </motion.div>


    </section>
  );
}
