import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { codeSnippets } from "@config/constants";

const Right = () => {
  const [currentCode, setCurrentCode] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCode((prev: number) => (prev + 1) % codeSnippets.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative"
    >
      {/* Terminal Window */}
      <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-slate-700">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-slate-400 text-sm font-mono">
              terminal.jsx
            </span>
          </div>
        </div>

        {/* Terminal Content */}
        <div className="p-6 space-y-4 font-mono text-sm">
          {/* Command Prompt */}
          <div className="flex items-center gap-2 text-slate-400">
            <span className="text-emerald-400">➜</span>
            <span className="text-cyan-400">~</span>
            <span className="animate-pulse">|</span>
          </div>

          {/* Rotating Code */}
          <motion.div
            key={currentCode}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-slate-300"
          >
            <span className="text-purple-400">const</span>{" "}
            <span className="text-cyan-400">info</span> ={" "}
            <span className="text-emerald-400">
              &quot;{codeSnippets[currentCode]}&quot;
            </span>
            ;
          </motion.div>

          {/* File Tree */}
          <div className="space-y-2 text-slate-400 pt-4">
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-cyan-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
              </svg>
              <span>portfolio/</span>
            </div>
            <div className="ml-6 space-y-1">
              <div className="flex items-center gap-2 text-slate-500">
                <span>├──</span>
                <span className="text-emerald-400">components/</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <span>├──</span>
                <span className="text-blue-400">projects/</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <span>├──</span>
                <span className="text-yellow-400">skills/</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <span>└──</span>
                <span className="text-cyan-400">README.md</span>
              </div>
            </div>
          </div>

          {/* Loading Animation */}
          <div className="pt-4 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-slate-500">
                Loading awesome projects...
              </span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
              />
            </div>
          </div>

          {/* Success Message */}
          <div className="pt-2 text-emerald-400 flex items-center gap-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Ready to build amazing things!</span>
          </div>
        </div>

        {/* Glowing Border Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-6 -right-6 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl"
      />
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"
      />
    </motion.div>
  );
};

export default Right;
