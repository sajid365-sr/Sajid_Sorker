import React from "react";
import { motion } from "framer-motion";
import { AiOutlineProject } from "react-icons/ai";
import { IoMailOutline } from "react-icons/io5";
import { useScrollToSection } from "hooks/useScrollToSection";

const Left = () => {
  const { scrollToSection } = useScrollToSection();

  const stats = [
    { label: "Projects Built", value: "10+" },
    { label: "Tech Stack", value: "MERN" },
    { label: "Code Quality", value: "A+" },
  ];
  return (
    <div className="space-y-8">
      {/* Greeting Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full"
      >
        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
        <span className="text-cyan-400 text-sm font-mono">
          Available for hire
        </span>
      </motion.div>

      {/* Main Heading */}
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-slate-400 text-lg font-mono">
            <span className="text-cyan-400">const</span> developer ={" "}
            <span className="text-emerald-400">&quot;</span>
          </h2>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-6xl md:text-7xl  font-semibold"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Sajid Sorker
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-300"
        >
          <span className="text-slate-600">&lt;</span>
          MERN Stack Developer
          <span className="text-slate-600"> /&gt;</span>
        </motion.div>
      </div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-lg text-slate-400 leading-relaxed max-w-2xl"
      >
        I craft{" "}
        <span className="text-cyan-400 font-semibold">
          scalable, high-performance
        </span>{" "}
        web applications with modern technologies. Passionate about clean code,
        exceptional UX, and turning ideas into reality.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="flex  gap-4 pt-4"
      >
        <motion.button
          onClick={() => scrollToSection("projects")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 md:px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold flex items-center gap-2 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-shadow"
        >
          <AiOutlineProject className="" size={25} />
          View Projects
        </motion.button>

        <motion.button
          onClick={() => scrollToSection("contact")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 md:px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold flex items-center gap-2 hover:bg-cyan-400/10 transition-colors"
        >
          <IoMailOutline size={25} />
          Get In Touch
        </motion.button>
      </motion.div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex gap-8 pt-8 border-t border-slate-800"
      >
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {stat.value}
            </div>
            <div className="text-sm text-slate-500 font-mono mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Left;
