"use client";
import { skills } from "@config/constants";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Left = () => {
  const [activeSkill, setActiveSkill] = useState<number>(0);
  const [typedText, setTypedText] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(true);

  const codeSnippet = `const developer = {
  name: "Sajid Sorker",
  role: "MERN Stack Developer",
  passion: "Building Digital Experiences",
  mission: "Transform ideas into reality"
};`;

  // Typing animation effect
  useEffect(() => {
    if (isTyping && typedText.length < codeSnippet.length) {
      const timeout = setTimeout(() => {
        setTypedText(codeSnippet.slice(0, typedText.length + 1));
      }, 30);
      return () => clearTimeout(timeout);
    } else if (typedText.length === codeSnippet.length) {
      setIsTyping(false);
    }
  }, [typedText, isTyping, codeSnippet]);
  return (
    <div className="lg:col-span-2 col-span-3  space-y-8">
      {/* Code Block Introduction */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="relative"
      >
        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 font-mono text-sm backdrop-blur-sm">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-800">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-slate-500 text-xs ml-2">about.js</span>
          </div>

          {/* Typed Code */}
          <pre className="text-slate-300 leading-relaxed">
            <code>
              {typedText}
              {isTyping && (
                <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse ml-0.5"></span>
              )}
            </code>
          </pre>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-cyan-400"></div>
        <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-purple-400"></div>
      </motion.div>

      {/* About Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-5 text-slate-300 leading-relaxed"
      >
        <p>
          In the ever-evolving world of technology, I stand at the intersection
          of creativity and logic. I&apos;m{" "}
          <span className="text-cyan-400 font-semibold">Sajid Sorker</span>, a
          passionate{" "}
          <span className="text-emerald-400 font-semibold">
            MERN Stack Developer
          </span>{" "}
          who loves transforming ideas into scalable, user-focused web
          experiences.
        </p>
        <p>
          With tools like <span className="text-cyan-400 font-mono">React</span>
          , <span className="text-cyan-400 font-mono">Next.js</span>, and{" "}
          <span className="text-cyan-400 font-mono">Node.js</span>, I build
          modern digital solutions — optimized for performance, design, and
          innovation.
        </p>
        <p>
          My goal is simple:{" "}
          <span className="text-purple-400 font-semibold">
            to create immersive, intuitive experiences that make a lasting
            impact
          </span>{" "}
          in the digital world.
        </p>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="space-y-4"
      >
        <h3 className="text-slate-400 font-mono text-sm mb-4 flex items-center gap-2">
          <span className="text-cyan-400">▸</span>
          Technical Arsenal
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              onMouseEnter={() => setActiveSkill(i)}
              className={`p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                activeSkill === i
                  ? skill.color === "cyan"
                    ? "bg-cyan-500/10 border-cyan-500/40 shadow-lg shadow-cyan-500/10"
                    : skill.color === "emerald"
                    ? "bg-emerald-500/10 border-emerald-500/40 shadow-lg shadow-emerald-500/10"
                    : skill.color === "purple"
                    ? "bg-purple-500/10 border-purple-500/40 shadow-lg shadow-purple-500/10"
                    : "bg-pink-500/10 border-pink-500/40 shadow-lg shadow-pink-500/10"
                  : "bg-slate-900/30 border-slate-800 hover:border-slate-700"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{skill.icon}</span>
                <h4 className="font-mono text-sm text-slate-300">
                  {skill.category}
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.techs.map((tech, j) => (
                  <span
                    key={j}
                    className={`px-2 py-1 text-xs font-mono rounded transition-all duration-300 ${
                      activeSkill === i
                        ? `${tech.color} bg-slate-800/50`
                        : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Left;
