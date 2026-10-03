"use client";

import React from "react";
import { motion } from "framer-motion";
import { problems } from "./hvacContent";
import HvacProblemIcon from "./HvacIcons";

const HvacProblems = () => {
  return (
    <section id="problems" className="scroll-mt-20 relative bg-slate-950 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400">
              01 &middot; Conversion Problems
            </span>
          </div>
          <h2 className="text-3xl font-bold font-primary text-slate-100 sm:text-4xl">
            Why Most HVAC Websites Don&apos;t Get Calls
          </h2>
          <p className="mt-3 font-mono text-sm text-slate-400 max-w-2xl">
            Plenty of contractor websites look &ldquo;fine&rdquo; until a homeowner tries to use them during an emergency. People leave when they can&apos;t find the phone number, can&apos;t request an estimate on their phone, or can&apos;t tell if you service their neighborhood.
          </p>
        </motion.div>

        {/* 5 Problem Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {problems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:border-cyan-400/40 hover:bg-slate-900/80 flex flex-col justify-between"
            >
              {/* Corner accent marker */}
              <div className="absolute top-2.5 right-2.5 w-3 h-3 border-r border-t border-cyan-400/0 group-hover:border-cyan-400/70 transition-colors duration-300" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xs font-bold text-slate-500 group-hover:text-cyan-400 transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:border-cyan-400/40 group-hover:bg-cyan-500/15 transition-all">
                    <HvacProblemIcon name={item.icon} />
                  </div>
                </div>

                <h3 className="font-mono text-base font-semibold leading-snug text-slate-100 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-400">
                  {item.body}
                </p>
              </div>

              {/* Ambient card hover glow */}
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-10 blur transition-opacity duration-300 -z-10" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HvacProblems;
