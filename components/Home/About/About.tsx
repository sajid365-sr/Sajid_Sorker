"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { skills, stats } from "@config/constants";

const About = () => {
  const [activeSkill, setActiveSkill] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

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
  }, [typedText, isTyping]);

  return (
    <section
      id="about"
      className="min-h-screen section  bg-slate-950 py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="flex items-center gap-3 text-4xl font-semibold text-slate-200 mb-4">
            <span className="text-cyan-400 font-mono text-3xl">01.</span>
            <span className="font-mono">
              <span className="text-purple-400">&lt;</span>
              About Me
              <span className="text-purple-400"> /&gt;</span>
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-slate-700 to-transparent ml-4"></span>
          </h1>
          <p className="text-slate-400 ml-14 font-mono text-sm">
            <span className="text-slate-600">{"//"} </span>
            Self-taught developer with a passion for creating
          </p>
        </motion.div>

        <div className="ml-14 grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Side - Content */}
          <div className="lg:col-span-7  space-y-8">
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
                In the ever-evolving world of technology, I stand at the
                intersection of creativity and logic. I&apos;m{" "}
                <span className="text-cyan-400 font-semibold">
                  Sajid Sorker
                </span>
                , a passionate{" "}
                <span className="text-emerald-400 font-semibold">
                  MERN Stack Developer
                </span>{" "}
                who loves transforming ideas into scalable, user-focused web
                experiences.
              </p>
              <p>
                With tools like{" "}
                <span className="text-cyan-400 font-mono">React</span>,{" "}
                <span className="text-cyan-400 font-mono">Next.js</span>, and{" "}
                <span className="text-cyan-400 font-mono">Node.js</span>, I
                build modern digital solutions — optimized for performance,
                design, and innovation.
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

          {/* Right Side - Image & Stats */}
          <div className="lg:col-span-5  space-y-8">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="relative group w-full max-w-[350px] mx-auto">
                {/* Main Image Container */}
                <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden">
                  <img
                    src="/images/model/sajid-sorker.jpg"
                    alt="Sajid Sorker"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/30 to-transparent group-hover:from-cyan-500/10 transition-all duration-300"></div>

                  {/* Border Frame */}
                  <div className="absolute inset-0 border-2 border-cyan-400/0 group-hover:border-cyan-400/50 rounded-xl transition-all duration-300"></div>
                </div>

                {/* Decorative Background */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 translate-x-4 translate-y-4"></div>

                {/* Corner Accents */}
                <div className="absolute -top-3 -left-3 w-6 h-6 border-l-2 border-t-2 border-cyan-400"></div>
                <div className="absolute -bottom-3 -right-3 w-6 h-6 border-r-2 border-b-2 border-purple-400"></div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-cyan-400/30 transition-all duration-300 cursor-default"
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-cyan-400 font-mono mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 font-mono">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex items-center gap-3 p-4 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-lg"
            >
              <div className="relative">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
              </div>
              <div>
                <p className="text-emerald-400 font-mono text-sm font-semibold">
                  Available for hire
                </p>
                <p className="text-slate-400 text-xs font-mono">
                  Open to new opportunities
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
