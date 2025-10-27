import React, { useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { worked_data } from "@config/constants";

interface Prompt {
  activeIndex: number;
}

// Skill mapping to show transferable skills
const skillTranslations = {
  "attention to detail": "Writing clean, bug-free code",
  "problem-solving": "Debugging & finding optimal solutions",
  "client management": "Understanding user needs & UX",
  documentation: "Code documentation & technical writing",
  "time management": "Meeting project deadlines",
  "operational accuracy": "Testing & quality assurance",
  leadership: "Team collaboration & code reviews",
  "system development": "Building scalable applications",
};

const Content = ({ activeIndex }: Prompt) => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Variants for different animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="flex-1"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, x: 50, rotateY: -15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          exit={{ opacity: 0, x: -50, rotateY: 15 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
          }}
          className="space-y-6"
        >
          {/* Job Header - Zoom in */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
          >
            <motion.h2
              className="text-2xl font-bold text-slate-200 mb-2 font-mono"
              whileHover={{ scale: 1.02, color: "#22d3ee" }}
            >
              {worked_data[activeIndex].title}
              <motion.a
                href={worked_data[activeIndex].url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors ml-2 text-xl"
                whileHover={{
                  scale: 1.1,
                  textShadow: "0 0 10px rgba(34, 211, 238, 0.8)",
                }}
              >
                @ {worked_data[activeIndex].company}
              </motion.a>
            </motion.h2>

            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-slate-400 font-mono text-sm">
                {worked_data[activeIndex].deadline}
              </p>
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`px-3 py-1 text-xs font-mono rounded-full ${
                  worked_data[activeIndex].category === "banking"
                    ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    : "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                }`}
              >
                {worked_data[activeIndex].category}
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Responsibilities - Slide from left with stagger */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h3
              className="text-slate-400 font-mono text-sm mb-4 flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <motion.span
                className="text-cyan-400"
                animate={{ rotate: [0, 90, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                ▸
              </motion.span>
              Key Responsibilities
            </motion.h3>

            <ul className="space-y-3">
              {worked_data[activeIndex].description.map((desc, i) => (
                <motion.li
                  key={i}
                  variants={itemVariants}
                  whileHover={{
                    x: 10,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  className="flex gap-3 text-slate-300 leading-relaxed group cursor-default"
                >
                  <motion.span
                    className="text-cyan-400 mt-1 text-xl group-hover:text-purple-400 transition-colors"
                    whileHover={{
                      scale: 1.5,
                      rotate: 360,
                      transition: { duration: 0.3 },
                    }}
                  >
                    ›
                  </motion.span>
                  <span className="group-hover:text-slate-200 transition-colors">
                    {desc}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Divider with grow animation */}
          <motion.div
            className="h-px bg-gradient-to-r from-slate-700 via-slate-600 to-transparent my-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ originX: 0 }}
          />

          {/* Transferable Skills Section - Zoom in grid */}
          <div>
            <motion.h3
              className="text-slate-400 font-mono text-sm mb-4 flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.span
                className="text-emerald-400"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              >
                ⚡
              </motion.span>
              How This Translates to Web Development
            </motion.h3>

            <div className="grid grid-cols-2 gap-3">
              {Object.entries(skillTranslations).map(([skill, devSkill], i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                  }}
                  transition={{
                    delay: 0.7 + i * 0.05,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotate: [0, -2, 2, -2, 0],
                    transition: {
                      rotate: { duration: 0.4 },
                      scale: { duration: 0.2 },
                    },
                  }}
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="relative group cursor-default"
                >
                  <motion.div
                    animate={
                      hoveredSkill === skill
                        ? {
                            boxShadow: [
                              "0 0 0px rgba(16, 185, 129, 0)",
                              "0 0 20px rgba(16, 185, 129, 0.3)",
                              "0 0 0px rgba(16, 185, 129, 0)",
                            ],
                          }
                        : {}
                    }
                    transition={{ duration: 1, repeat: Infinity }}
                    className={`p-4 rounded-lg border transition-all duration-300 ${
                      hoveredSkill === skill
                        ? "bg-emerald-500/10 border-emerald-500/40 shadow-lg shadow-emerald-500/10"
                        : "bg-slate-800/30 border-slate-700 hover:border-slate-600"
                    }`}
                  >
                    <motion.p
                      className="text-slate-400 text-xs font-mono mb-2"
                      animate={hoveredSkill === skill ? { x: [0, 5, 0] } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      {skill}
                    </motion.p>
                    <motion.p
                      className="text-emerald-400 text-sm font-mono"
                      animate={hoveredSkill === skill ? { x: [0, 10, 0] } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      → {devSkill}
                    </motion.p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default Content;
