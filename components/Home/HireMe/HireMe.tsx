"use client";
import AnimatedTextCharacter from "@components/motion/AnimatedTextCherecter";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const HireMe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Code words and symbols to display
    const codeWords = [
      "React",
      "TypeScript",
      "Node.js",
      "Python",
      "API",
      "CSS",
      "HTML",
      "async",
      "await",
      "const",
      "function",
      "import",
      "export",
      "class",
      "interface",
      "type",
      "useState",
      "useEffect",
      "props",
      "component",
      "{}",
      "[]",
      "()",
      "=>",
      "===",
      "!==",
      "&&",
      "||",
      "...",
      "</>",
      "git",
      "npm",
      "yarn",
      "json",
      "jsx",
      "tsx",
      "map",
      "filter",
      "reduce",
    ];

    interface TextParticle {
      text: string;
      x: number;
      y: number;
      vx: number;
      vy: number;
      opacity: number;
      size: number;
      color: string;
    }

    const particles: TextParticle[] = [];
    const particleCount = 60;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        text: codeWords[Math.floor(Math.random() * codeWords.length)],
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.3,
        size: Math.random() * 8 + 10,
        color: `rgba(${100 + Math.random() * 155}, ${
          150 + Math.random() * 105
        }, 255, `,
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.fillStyle = "rgba(2, 6, 23, 1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < -50) p.x = canvas.width + 50;
        if (p.x > canvas.width + 50) p.x = -50;
        if (p.y < -50) p.y = canvas.height + 50;
        if (p.y > canvas.height + 50) p.y = -50;

        // Draw text
        ctx.font = `${p.size}px 'Courier New', monospace`;
        ctx.fillStyle = p.color + p.opacity + ")";
        ctx.fillText(p.text, p.x, p.y);

        // Randomly change text occasionally
        if (Math.random() < 0.002) {
          p.text = codeWords[Math.floor(Math.random() * codeWords.length)];
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, [mounted]);

  return (
    <section className="relative w-full md:h-screen h-[50vh] flex flex-col items-center justify-center overflow-hidden bg-transparent my-20">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-70" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <motion.h1
            className="text-5xl flex gap-8 items-center justify-center md:text-8xl font-mono font-bold tracking-wide mb-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="text-cyan-400">&lt;</span>

            <AnimatedTextCharacter
              text="HireMe"
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]"
            />

            <span className="text-cyan-400"> /&gt;</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-slate-400 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Let&apos;s build something extraordinary together
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default HireMe;
