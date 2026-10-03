"use client";

import React from "react";
import { motion } from "framer-motion";

const processSteps = [
  {
    n: "01",
    tag: "AUDIT",
    title: "Website & Lead Audit",
    body: "We inspect your current website, mobile speed, contact visibility, and local competitors to identify exactly why visitors aren't calling.",
  },
  {
    n: "02",
    tag: "STRATEGY",
    title: "Structure & Copy Plan",
    body: "We organize your services, emergency calls-to-action, quote paths, and trust proof so homeowners find what they need in seconds.",
  },
  {
    n: "03",
    tag: "BUILD",
    title: "High-Performance Build",
    body: "We build a fast, mobile-first website optimized for Google search rankings, quick tap-to-call response, and clean lead capture.",
  },
  {
    n: "04",
    tag: "LAUNCH",
    title: "Testing & Launch",
    body: "We test all forms, call links, and mobile viewports before launch — then monitor performance so your site consistently drives inquiries.",
  },
];

const HvacProcess = () => {
  return (
    <section id="process" className="scroll-mt-20 relative bg-slate-950 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400">
            03 &middot; How We Work
          </span>
          <h2 className="text-3xl font-bold font-primary text-slate-100 sm:text-4xl mt-2">
            A Straightforward 4-Step Process
          </h2>
          <p className="mt-3 font-mono text-sm text-slate-400 max-w-2xl">
            From uncovering current conversion bottlenecks to launching a fast, reliable site that generates service inquiries.
          </p>
        </motion.div>

        {/* 4 Process Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:border-cyan-400/40 hover:bg-slate-900/80 flex flex-col justify-between"
            >
              {/* Top Accent line on hover */}
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

              <div>
                {/* Big Step Number + Step tag */}
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-3xl sm:text-4xl font-bold text-slate-700 group-hover:text-cyan-400 transition-colors">
                    {step.n}
                  </span>
                  <span className="font-mono text-xs font-bold text-cyan-400 tracking-wider">
                    {step.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-4 font-mono text-base font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h3>

                {/* Body */}
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {step.body}
                </p>
              </div>

              {/* Ambient Hover Glow */}
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-10 blur transition-opacity duration-300 -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HvacProcess;
