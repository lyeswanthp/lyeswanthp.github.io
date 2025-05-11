import React, { useEffect, useRef } from 'react';

const NeuralNetworkAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const particles = [];
    let animationFrameId;
    let mouseX = 0;
    let mouseY = 0;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    // Mouse move handler
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // Particle class
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 1;
        this.baseX = x;
        this.baseY = y;
        this.density = (Math.random() * 20) + 1;
        this.color = '#40A9FF';
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        // Calculate distance between mouse and particle
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 100;

        if (distance < maxDistance) {
          const force = maxDistance / distance;
          const angle = Math.atan2(dy, dx);
          const forceX = Math.cos(angle) * force;
          const forceY = Math.sin(angle) * force;

          this.x += forceX;
          this.y += forceY;
        } else {
          if (this.x !== this.baseX) {
            const dx = this.baseX - this.x;
            this.x += dx / 10;
          }
          if (this.y !== this.baseY) {
            const dy = this.baseY - this.y;
            this.y += dy / 10;
          }
        }
      }
    }

    // Connect particles with lines
    const connect = () => {
      const threshold = 100;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < threshold) {
            const opacity = 1 - (distance / threshold);
            ctx.strokeStyle = `rgba(64, 169, 255, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    // Initialize particles
    const init = () => {
      particles.length = 0;
      const rows = 8;
      const cols = 18;
      const horizontalGap = canvas.width / (cols + 1);
      const verticalGap = canvas.height / (rows + 1);

      // Create a structured layout of particles
      for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {
          const x = j * horizontalGap;
          const y = i * verticalGap;
          // Add some randomness to position
          const offsetX = (Math.random() - 0.5) * horizontalGap * 0.5;
          const offsetY = (Math.random() - 0.5) * verticalGap * 0.5;
          particles.push(new Particle(x + offsetX, y + offsetY));
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      
      connect();
      
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', setCanvasDimensions);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none" 
    />
  );
};

export default NeuralNetworkAnimation;