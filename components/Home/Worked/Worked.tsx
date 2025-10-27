"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { worked_data } from "@config/constants";
import InfoBanner from "./partials/InfoBanner";
import Content from "./partials/Content";
import SectionHeader from "@components/SectionHeader";

const Worked = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Stagger animation for company tabs
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const tabVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -50,
      rotate: -5,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="experience" className="min-h-screen section bg-slate-950">
      <div className="mx-auto">
        {/* Header with slide in from top */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionHeader
            number="02."
            name="Work Experience"
            description="Professional background with transferable skills"
          />
        </motion.div>

        {/* Info Banner - Slide from right with rotation */}
        <InfoBanner />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Company Tabs - Slide from left with stagger */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative min-w-[220px]"
          >
            <div className="space-y-1">
              {worked_data.map((item, i) => (
                <motion.button
                  key={i}
                  variants={tabVariants}
                  onClick={() => setActiveIndex(i)}
                  whileHover={{
                    scale: 1.05,
                    x: 5,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full text-left px-5 py-4 font-mono text-sm transition-all duration-300 rounded-l-lg relative group ${
                    activeIndex === i
                      ? "text-cyan-400 bg-cyan-400/10"
                      : "text-slate-500 hover:text-slate-300 hover:bg-slate-800/30"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <motion.span
                      animate={
                        activeIndex === i
                          ? {
                              scale: [1, 1.3, 1],
                              rotate: [0, 180, 360],
                            }
                          : {}
                      }
                      transition={{ duration: 0.5 }}
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
                </motion.button>
              ))}
            </div>

            {/* Animated indicator bar */}
            <motion.div
              className="absolute left-0 w-1 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full"
              animate={{
                top: activeIndex * 56 + 8,
                height: 40,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            />
          </motion.div>

          {/* Content Area - Slide from right */}
          <Content activeIndex={activeIndex} />
        </div>

        {/* Bottom Note - Zoom in with bounce */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.5,
            },
          }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-block"
          >
            <p className="text-slate-500 font-mono text-sm">
              <span className="text-slate-600">{"//"} </span>
              While I haven&apos;t held a formal web development role, I&apos;ve
              built{" "}
              <motion.span
                className="text-cyan-400"
                animate={{
                  textShadow: [
                    "0 0 0px rgba(34, 211, 238, 0)",
                    "0 0 10px rgba(34, 211, 238, 0.8)",
                    "0 0 0px rgba(34, 211, 238, 0)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                10+ full-stack applications
              </motion.span>{" "}
              and bring valuable experience in{" "}
              <span className="text-purple-400">client relations</span>,{" "}
              <span className="text-purple-400">project management</span>, and{" "}
              <span className="text-purple-400">
                delivering quality results
              </span>
              .
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Worked;
