"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { faqs } from "./hvacContent";

const HvacAboutFaq = () => {
  return (
    <>
      {/* ─── ABOUT SECTION ─── */}
      <section className="relative bg-slate-950 py-16 sm:py-20 lg:py-24 border-t border-slate-800">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] items-center">
            {/* Profile Photo with Signature Portfolio Corner Accents */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px]"
            >
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 shadow-2xl">
                <Image
                  src="/images/model/sajid-sorker.jpg"
                  alt="Sajid Sorker — Web Developer & Conversion Specialist"
                  fill
                  sizes="(max-width: 640px) 280px, 320px"
                  className="object-cover object-center filter grayscale-[15%] hover:grayscale-0 transition-all duration-500"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              </div>

              {/* Decorative Corner Accents (Matching portfolio About section) */}
              <div className="absolute -top-3 -left-3 h-8 w-8 border-l-2 border-t-2 border-cyan-400" />
              <div className="absolute -bottom-3 -right-3 h-8 w-8 border-r-2 border-b-2 border-purple-400" />

              {/* Ambient Glow */}
              <div className="pointer-events-none absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 blur-xl opacity-60" />
            </motion.div>

            {/* Profile Bio */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-5"
            >
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400">
                The Person Behind The Work
              </span>

              <div>
                <h2 className="text-3xl sm:text-4xl font-bold font-primary text-slate-100">
                  Sajid Sorker
                </h2>
                <p className="mt-1 font-mono text-sm font-semibold text-cyan-400">
                  Full-Stack Web Developer
                </p>
              </div>

              <div className="space-y-6 text-base leading-relaxed text-slate-300 max-w-2xl">
                <p>
                  I work directly with business owners to build high-performance websites focused on practical outcomes: more calls, more estimate requests, and an effortless customer experience.
                </p>
                <p>
                  When you work with me, you don&apos;t get passed around between account managers or junior designers. You get an experienced web developer building a fast, bespoke site engineered specifically for the HVAC industry.
                </p>
                <p>
                  Fast loading, clear service pages, easy-to-find contact options, and simple quote requests—all designed to help more visitors take the next step.

                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://www.sajidsorker.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/80 px-4 py-2 font-mono text-xs font-semibold text-cyan-400 hover:border-cyan-400 hover:bg-slate-800 transition-colors"
                >
                  <span>Main Portfolio: sajidsorker.com</span>
                  <span>→</span>
                </a>
                <a
                  href="mailto:sajid@sajidsorker.com"
                  className="font-mono text-xs text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  sajid@sajidsorker.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FAQ SECTION ─── */}
      <section id="faq" className="scroll-mt-20 bg-slate-950 py-16 sm:py-20 lg:py-24 border-t border-slate-800">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400">
              05 &middot; Common Questions
            </span>
            <h2 className="text-3xl font-bold font-primary text-slate-100 sm:text-4xl mt-2">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 font-mono text-xs sm:text-sm text-slate-400">
              Clear answers about process, pricing, and outcomes
            </p>
          </motion.div>

          {/* Accordion List */}
          <div className="space-y-4">
            {faqs.map((item, index) => (
              <motion.details
                key={item.q}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group rounded-xl border border-slate-800 bg-slate-900/50 p-5 sm:p-6 transition-all duration-300 hover:border-slate-700 open:border-cyan-500/40 open:bg-slate-900/80"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-mono text-base font-semibold text-slate-200 group-open:text-cyan-300 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400">
                  <div className="flex items-center gap-3 text-left">
                    <span className="font-mono text-xs font-bold text-cyan-400">
                      {String(index + 1).padStart(2, "0")}.
                    </span>
                    <span>{item.q}</span>
                  </div>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-slate-800 text-cyan-400 group-open:bg-cyan-500/20 transition-all font-mono text-sm">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">−</span>
                  </span>
                </summary>
                <div className="mt-4 pt-4 border-t border-slate-800 text-sm leading-relaxed text-slate-400 sm:pl-7">
                  {item.a}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HvacAboutFaq;
