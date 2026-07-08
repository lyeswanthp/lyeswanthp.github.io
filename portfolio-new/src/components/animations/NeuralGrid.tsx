import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
  pulse: number;
}

interface Edge {
  a: number;
  b: number;
  packet: number;
  speed: number;
  active: boolean;
}

interface NeuralGridProps {
  density?: number;
  className?: string;
}

export default function NeuralGrid({ density = 0.00009, className = '' }: NeuralGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let edges: Edge[] = [];
    let raf = 0;

    const accent = () =>
      getComputedStyle(document.documentElement).getPropertyValue('--accent-cyan').trim() || '#6ee7ff';
    const violet = () =>
      getComputedStyle(document.documentElement).getPropertyValue('--accent-violet').trim() || '#a78bfa';

    const build = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(28, Math.min(140, Math.floor(width * height * density)));
      nodes = Array.from({ length: count }, () => {
        const x = Math.random() * width;
        const y = Math.random() * height;
        return {
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.12,
          pulse: Math.random() * Math.PI * 2,
        };
      });

      // build edges by nearest neighbours
      const maxDist = Math.min(width, height) * 0.18;
      edges = [];
      for (let i = 0; i < nodes.length; i++) {
        const dists: { idx: number; d: number }[] = [];
        for (let j = 0; j < nodes.length; j++) {
          if (i === j) continue;
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.hypot(dx, dy);
          if (d < maxDist) dists.push({ idx: j, d });
        }
        dists.sort((a, b) => a.d - b.d);
        const k = Math.min(3, dists.length);
        for (let n = 0; n < k; n++) {
          const j = dists[n].idx;
          if (j > i) {
            edges.push({
              a: i,
              b: j,
              packet: Math.random(),
              speed: 0.0015 + Math.random() * 0.0035,
              active: Math.random() < 0.45,
            });
          }
        }
      }
    };

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - r.left;
      mouseRef.current.y = e.clientY - r.top;
    };
    const onLeave = () => {
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      const cyan = accent();
      const vio = violet();
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const mouseRadius = 160;

      // Update nodes (gentle drift + mouse repulsion + spring back)
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;

        // spring to base position so they don't drift forever
        n.x += (n.baseX - n.x) * 0.002;
        n.y += (n.baseY - n.y) * 0.002;

        const dx = n.x - mx;
        const dy = n.y - my;
        const d2 = dx * dx + dy * dy;
        if (d2 < mouseRadius * mouseRadius) {
          const d = Math.sqrt(d2) || 1;
          const f = (1 - d / mouseRadius) * 1.8;
          n.x += (dx / d) * f;
          n.y += (dy / d) * f;
        }
        n.pulse += 0.02;
      }

      // Draw edges
      for (const e of edges) {
        const a = nodes[e.a];
        const b = nodes[e.b];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const d = Math.hypot(dx, dy);
        const fade = Math.max(0, 1 - d / (Math.min(width, height) * 0.22));
        if (fade <= 0) continue;

        ctx.strokeStyle = `rgba(110, 231, 255, ${0.07 * fade})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();

        // Travelling data packet
        if (e.active) {
          e.packet += e.speed;
          if (e.packet > 1) e.packet = 0;
          const px = a.x + dx * e.packet;
          const py = a.y + dy * e.packet;
          const grad = ctx.createRadialGradient(px, py, 0, px, py, 6);
          grad.addColorStop(0, e.packet > 0.5 ? vio : cyan);
          grad.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(px, py, 6, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw nodes
      for (const n of nodes) {
        const r = 1.2 + Math.sin(n.pulse) * 0.4;
        const glow = 0.25 + Math.sin(n.pulse) * 0.15;
        ctx.fillStyle = `rgba(110, 231, 255, ${glow})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, r + 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#cdf3ff';
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
      void t;
    };

    build();
    raf = requestAnimationFrame(draw);
    const onResize = () => build();
    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      aria-hidden
    />
  );
}
