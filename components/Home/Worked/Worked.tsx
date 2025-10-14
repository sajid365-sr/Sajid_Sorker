"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { worked_data } from "@config/constants";
import InfoBanner from "./partials/InfoBanner";
import Content from "./partials/Content";

const Worked = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="min-h-screen section bg-slate-950 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="flex items-center gap-3 text-4xl font-semibold text-slate-200 mb-4">
            <span className="text-cyan-400 font-mono text-3xl">03.</span>
            <span className="font-mono">
              <span className="text-purple-400">&lt;</span>
              Work Experience
              <span className="text-purple-400"> /&gt;</span>
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-slate-700 to-transparent ml-4"></span>
          </h1>
          <p className="text-slate-400 ml-14 font-mono text-sm">
            <span className="text-slate-600"> {"//"} </span>
            Professional background with transferable skills
          </p>
        </motion.div>

        {/* Info Banner */}
        <InfoBanner />

        {/* Main Content */}
        <div className="ml-14 flex gap-8">
          {/* Company Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative min-w-[220px]"
          >
            <div className="space-y-1">
              {worked_data.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-full text-left px-5 py-4 font-mono text-sm transition-all duration-300 rounded-l-lg relative group ${
                    activeIndex === i
                      ? "text-cyan-400 bg-cyan-400/10"
                      : "text-slate-500 hover:text-slate-300 hover:bg-slate-800/30"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeIndex === i
                          ? "bg-cyan-400"
                          : "bg-slate-600 group-hover:bg-slate-500"
                      }`}
                    />
                    <span>{item.label}</span>
                  </div>
                  {activeIndex !== i && (
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-slate-700 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </button>
              ))}
            </div>

            <motion.div
              className="absolute left-0 w-1 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full"
              animate={{
                top: activeIndex * 56 + 8,
                height: 40,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </motion.div>

          {/* Content Area */}
          <Content activeIndex={activeIndex} />
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 ml-14 text-center"
        >
          <p className="text-slate-500 font-mono text-sm">
            <span className="text-slate-600">{"//"} </span>
            While I haven&apos;t held a formal web development role, I&apos;ve
            built{" "}
            <span className="text-cyan-400">
              10+ full-stack applications
            </span>{" "}
            and bring valuable experience in{" "}
            <span className="text-purple-400">client relations</span>,{" "}
            <span className="text-purple-400">project management</span>, and{" "}
            <span className="text-purple-400">delivering quality results</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Worked;
