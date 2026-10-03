"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const HvacDemoSection = () => {
  return (
    <section id="demo" className="scroll-mt-20 relative overflow-hidden border-y border-slate-800 bg-slate-900/40 py-16 sm:py-20 lg:py-24">
      {/* Background glow orbs */}
      <div className="pointer-events-none absolute top-1/3 left-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-1/3 right-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400">
            04 &middot; Live Demo
          </span>
          <h2 className="mt-2 font-primary text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
            See the kind of website your HVAC business could have.
          </h2>
        </motion.div>

        {/* Concept description & disclaimer */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl space-y-3"
        >
          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
            I built a complete demonstration website,{" "}
            <span className="font-semibold text-cyan-300">Evergreen Heating &amp; Air</span>, to showcase the exact structure, messaging hierarchy, and customer flow you can have for your HVAC business.
          </p>
          <p className="font-mono text-xs text-slate-500">
            Demonstration layout &mdash; structured for emergency dispatch, clear services, service area visibility, and quick estimate forms.
          </p>
        </motion.div> */}

        {/* ── Large Browser-Style Frame containing a Single Real Image Slot ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 min-w-0"
        >
          <div className="relative">
            {/* Ambient backlight */}
            <div className="pointer-events-none absolute -inset-3 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 blur-2xl -z-10" />

            {/* Browser Chrome Container */}
            <div className="overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900 shadow-2xl shadow-black/80">
              {/* Browser Chrome Bar */}
              <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/95 px-4 py-3 sm:px-5">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-slate-700" />
                  <span className="h-3 w-3 rounded-full bg-slate-700" />
                  <span className="h-3 w-3 rounded-full bg-slate-700" />
                </div>

                {/* Page URL Label */}
                <div className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-4 py-1 font-mono text-xs text-slate-400">
                  <svg className="h-3.5 w-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="3" y="11" width="18" height="11" rx="2" strokeWidth={1.5} />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                  <span>https://sajidsorker.com/hvac-demo</span>
                </div>

                <span className="hidden sm:inline-block rounded bg-slate-800 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-cyan-400 border border-slate-700">
                  Live Preview
                </span>
              </div>

              {/*
               * ASSET SLOT: LIVE DEMO SCREENSHOT — Full-page screenshot of `/hvac-demo`. Prefer a wide desktop screenshot.
               */}
              <div className="group relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                {/* Visual placeholder content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 text-center">
                  {/* Subtle grid pattern */}
                  <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)] [background-size:40px_40px]" />

                  {/* Browser/Display Icon */}
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 shadow-inner">
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth={1.5} />
                      <path strokeLinecap="round" d="M8 21h8M12 17v4" strokeWidth={1.5} />
                    </svg>
                  </div>

                  {/* Slot Label */}
                  <div className="relative z-10 space-y-1.5 max-w-md">
                    <p className="font-mono text-sm font-semibold uppercase tracking-wider text-slate-200">
                      LIVE DEMO SCREENSHOT
                    </p>
                    <p className="font-mono text-xs text-slate-400">
                      Wide desktop screenshot of the complete Evergreen Heating &amp; Air demo homepage
                    </p>
                    <p className="font-mono text-[11px] text-slate-600">
                      16:10 wide desktop ratio &middot; Replace with full-page screenshot of /hvac-demo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Action Button & Explainer ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-5"
        >
          <Link
            href="/hvac-demo"
            className="hvac-cta-primary inline-flex min-h-[52px] w-full sm:w-auto items-center justify-center gap-2 rounded-lg px-8 font-mono text-sm font-semibold tracking-wide text-white shadow-lg shadow-cyan-500/20 transition-all hover:shadow-cyan-500/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
          >
            <span>View Live Demo</span>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
          <p className="font-mono text-xs text-slate-500 text-center sm:text-left">
            Experience the responsive user experience on mobile &amp; desktop
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HvacDemoSection;
