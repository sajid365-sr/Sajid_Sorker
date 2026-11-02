"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import HvacAuditForm from "./HvacAuditForm";

const HvacFinalCta = () => {
  return (
    <section
      id="audit"
      className="scroll-mt-20 border-t border-slate-800 bg-slate-900/40 text-slate-200 py-16 sm:py-20 lg:py-24 relative overflow-hidden"
    >
      {/* Ambient background glow orbs */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16 lg:px-8 relative z-10">
        {/* Left Column: Heading, Supporting Copy, and Quick Links */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6 lg:pt-4"
        >
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400">
            Start Here
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold font-primary leading-tight text-slate-100">
            Your Next Customer Is Already{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Searching.
            </span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-slate-400 max-w-md">
            Let&apos;s make sure your website gives them a clear reason to call. Send your URL and I&apos;ll review your site&apos;s speed, mobile responsiveness, and lead capture opportunities.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#audit-form"
              className="hvac-cta-primary inline-flex min-h-11 items-center justify-center rounded-lg px-6 font-mono text-sm font-semibold text-white shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all"
            >
              Get a Free Website Audit
            </a>
            <Link
              href="/hvac-demo"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border-2 border-cyan-400/80 bg-transparent px-5 font-mono text-sm font-semibold text-cyan-400 hover:bg-cyan-400/10 transition-colors"
            >
              See the Demo
            </Link>
          </div>

          {/* Quick FAQ summary checklist */}
          <div className="space-y-3 pt-6 border-t border-slate-800 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 font-bold">✓</span>
              <span>100% Free &middot; No pushy sales calls</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cyan-400 font-bold">✓</span>
              <span>Actionable recommendations you can use immediately</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-400 font-bold">✓</span>
              <span>You'll receive practical recommendations, not a generic audit.</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Lead Form */}
        <motion.div
          id="audit-form"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="scroll-mt-24"
        >
          <HvacAuditForm />
        </motion.div>
      </div>
    </section>
  );
};

export default HvacFinalCta;
