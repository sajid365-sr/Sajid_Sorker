"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const AnimatedHireSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/{}[]()@#$%^&*~+=";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = Array(Math.floor(columns)).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(15, 23, 42, 1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0ff";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975)
          drops[i] = 0;

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-transparent">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 bg-transparent mx-auto"
      />
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-600 drop-shadow-[0_0_20px_rgba(56,189,248,0.6)]"
      >
        Hire Me
      </motion.h1>
    </section>
  );
};

export default AnimatedHireSection;
