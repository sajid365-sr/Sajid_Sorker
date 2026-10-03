"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const HvacBeforeAfter = () => {
  return (
    <section className="relative overflow-hidden border-y border-slate-800 bg-slate-900/40 py-16 text-slate-200 sm:py-20 lg:py-24">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute top-1/2 left-0 h-96 w-96 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 right-0 h-96 w-96 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl sm:mb-16"
        >
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400">
            Structure Comparison
          </span>
          <h2 className="mt-2 font-primary text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
            From Outdated Brochure to{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Lead-Generating Website
            </span>
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-400 sm:text-lg">
            Same service, completely different structure. The goal is not a prettier online brochure &mdash; it is a fast, conversion-focused page local homeowners can actually use when they need HVAC service immediately.
          </p>
        </motion.div>

        {/* ── Desktop: Two Large Side-by-Side Panels ── */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          {/* ── LEFT PANEL: BEFORE ── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-sm transition-all duration-300 hover:border-slate-700 sm:p-7"
          >
            <div>
              {/* Header */}
              <div className="mb-5 flex items-center justify-between border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                  <h3 className="font-primary text-xl font-bold text-slate-200">
                    Before
                  </h3>
                </div>
                <span className="font-mono text-xs text-slate-500">
                  Typical Contractor Site
                </span>
              </div>

              {/*
               * ASSET SLOT: BEFORE WEBSITE SCREENSHOT — Screenshot of an intentionally outdated HVAC contractor website. Prefer 16:10 landscape.
               */}
              <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-950 shadow-inner">
                {/* Visual placeholder container */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-950 via-slate-900/90 to-slate-950 p-6 text-center">
                  {/* Subtle grid pattern */}
                  <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)] [background-size:32px_32px]" />

                  {/* Browser chrome hint */}
                  <div className="absolute top-0 inset-x-0 flex items-center gap-1.5 border-b border-slate-800/80 bg-slate-900/80 px-3.5 py-2">
                    <span className="h-2 w-2 rounded-full bg-slate-700" />
                    <span className="h-2 w-2 rounded-full bg-slate-700" />
                    <span className="h-2 w-2 rounded-full bg-slate-700" />
                    <span className="ml-2 font-mono text-[10px] text-slate-600">outdated-contractor-site.demo</span>
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 mt-4 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/80 text-slate-500">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={1.5} />
                      <circle cx="8.5" cy="8.5" r="1.5" strokeWidth={1.5} />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15l-5-5L5 21" />
                    </svg>
                  </div>

                  {/* Slot Label */}
                  <div className="relative z-10 space-y-1">
                    <p className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
                      BEFORE WEBSITE SCREENSHOT
                    </p>
                    <p className="font-mono text-[11px] text-slate-600">
                      16:10 landscape &middot; Outdated contractor site preview
                    </p>
                  </div>
                </div>
              </div>

              {/* Explanatory points */}
              <ul className="mt-6 space-y-2.5 font-mono text-xs text-slate-400">
                <li className="flex items-start gap-2.5">
                  <span className="mt-0.5 text-rose-400">✕</span>
                  <span>Buried phone numbers with no 1-tap call button</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-0.5 text-rose-400">✕</span>
                  <span>Walls of company history instead of services offered</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-0.5 text-rose-400">✕</span>
                  <span>No quick estimate request or lead capture forms</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-0.5 text-rose-400">✕</span>
                  <span>Cramped, slow, and frustrating on mobile screens</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* ── RIGHT PANEL: AFTER ── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative flex flex-col justify-between rounded-2xl border border-cyan-500/40 bg-slate-900/80 p-5 shadow-2xl shadow-cyan-500/5 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/60 sm:p-7"
          >
            {/* Ambient card glow */}
            <div className="pointer-events-none absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 blur-xl" />

            <div>
              {/* Header */}
              <div className="mb-5 flex items-center justify-between border-b border-cyan-500/20 pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400" />
                  <h3 className="font-primary text-xl font-bold text-cyan-300">
                    After
                  </h3>
                </div>
                <span className="font-mono text-xs font-semibold text-cyan-400">
                  Conversion-Focused Redesign
                </span>
              </div>

              {/*
               * ASSET SLOT: AFTER WEBSITE SCREENSHOT — Screenshot of the polished final HVAC demo website. Prefer 16:10 landscape.
               */}
              <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-cyan-500/30 bg-slate-950 shadow-2xl shadow-black/60">
                {/* Visual placeholder container */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 text-center">
                  {/* Subtle grid pattern */}
                  <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)] [background-size:32px_32px]" />

                  {/* Browser chrome hint */}
                  <div className="absolute top-0 inset-x-0 flex items-center gap-1.5 border-b border-cyan-500/20 bg-slate-900/90 px-3.5 py-2">
                    <span className="h-2 w-2 rounded-full bg-cyan-400/80" />
                    <span className="h-2 w-2 rounded-full bg-cyan-400/40" />
                    <span className="h-2 w-2 rounded-full bg-cyan-400/40" />
                    <span className="ml-2 font-mono text-[10px] text-cyan-300/80">evergreen-heating.demo</span>
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 mt-4 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 shadow-inner">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth={1.5} />
                      <path strokeLinecap="round" d="M8 21h8M12 17v4" strokeWidth={1.5} />
                    </svg>
                  </div>

                  {/* Slot Label */}
                  <div className="relative z-10 space-y-1">
                    <p className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300">
                      AFTER WEBSITE SCREENSHOT
                    </p>
                    <p className="font-mono text-[11px] text-slate-400">
                      16:10 landscape &middot; High-converting HVAC redesign preview
                    </p>
                  </div>
                </div>
              </div>

              {/* Explanatory points */}
              <ul className="mt-6 space-y-2.5 font-mono text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="mt-0.5 text-cyan-400">✓</span>
                  <span>Prominent emergency click-to-call button on every screen</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-0.5 text-cyan-400">✓</span>
                  <span>Fast 30-second estimate request form above the fold</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-0.5 text-cyan-400">✓</span>
                  <span>Clear list of services (AC, Heating, Maintenance, Emergency)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-0.5 text-cyan-400">✓</span>
                  <span>Explicit service area list and verified trust signals</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* ── Clear CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-col items-center justify-between gap-5 rounded-xl border border-slate-800 bg-slate-900/40 p-6 sm:flex-row sm:p-8"
        >
          <div>
            <h4 className="font-primary text-lg font-bold text-slate-100 sm:text-xl">
              Want to see the redesign experience in action?
            </h4>
            <p className="mt-1 font-mono text-xs text-slate-400 sm:text-sm">
              Explore the full interactive demonstration website on desktop and mobile.
            </p>
          </div>
          <Link
            href="/hvac-demo"
            className="hvac-cta-primary inline-flex min-h-[50px] shrink-0 items-center justify-center gap-2 rounded-lg px-7 font-mono text-sm font-semibold tracking-wide text-white shadow-lg shadow-cyan-500/20 transition-all hover:shadow-cyan-500/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
          >
            <span>See the Live Demo</span>
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HvacBeforeAfter;
