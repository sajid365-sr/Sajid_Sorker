import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
  return (
    <div className="flex-1">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          {/* Job Header */}
          <div>
            <h2 className="text-2xl font-bold text-slate-200 mb-2 font-mono">
              {worked_data[activeIndex].title}
              <a
                href={worked_data[activeIndex].url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors ml-2 text-xl"
              >
                @ {worked_data[activeIndex].company}
              </a>
            </h2>
            <div className="flex items-center gap-3">
              <p className="text-slate-400 font-mono text-sm">
                {worked_data[activeIndex].deadline}
              </p>
              <span
                className={`px-3 py-1 text-xs font-mono rounded-full ${
                  worked_data[activeIndex].category === "banking"
                    ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    : "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                }`}
              >
                {worked_data[activeIndex].category}
              </span>
            </div>
          </div>

          {/* Responsibilities */}
          <div>
            <h3 className="text-slate-400 font-mono text-sm mb-4 flex items-center gap-2">
              <span className="text-cyan-400">▸</span>
              Key Responsibilities
            </h3>
            <ul className="space-y-3">
              {worked_data[activeIndex].description.map((desc, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-3 text-slate-300 leading-relaxed group"
                >
                  <span className="text-cyan-400 mt-1 text-xl group-hover:text-purple-400 transition-colors">
                    ›
                  </span>
                  <span className="group-hover:text-slate-200 transition-colors">
                    {desc}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-slate-700 via-slate-600 to-transparent my-8" />

          {/* Transferable Skills Section */}
          <div>
            <h3 className="text-slate-400 font-mono text-sm mb-4 flex items-center gap-2">
              <span className="text-emerald-400">⚡</span>
              How This Translates to Web Development
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(skillTranslations).map(([skill, devSkill], i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="relative group"
                >
                  <div
                    className={`p-4 rounded-lg border transition-all duration-300 ${
                      hoveredSkill === skill
                        ? "bg-emerald-500/10 border-emerald-500/40 shadow-lg shadow-emerald-500/10"
                        : "bg-slate-800/30 border-slate-700 hover:border-slate-600"
                    }`}
                  >
                    <p className="text-slate-400 text-xs font-mono mb-2">
                      {skill}
                    </p>
                    <p className="text-emerald-400 text-sm font-mono">
                      → {devSkill}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Content;
