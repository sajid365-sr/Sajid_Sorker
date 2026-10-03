"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import HvacAssetSlot from "./HvacAssetSlot";

const HvacHero = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  // Track mouse for subtle ambient background illumination
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToAudit = () => {
    const element = document.getElementById("audit");
    if (!element) return;
    const yOffset = -80;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const coreBenefits = [
    { label: "Turn visitors into phone calls", icon: "📞" },
    { label: "Frictionless mobile quote requests", icon: "⚡" },
    { label: "Built for local service searches", icon: "📍" },
  ];

  return (
    <section
      aria-labelledby="hvac-hero-heading"
      className="relative overflow-hidden bg-slate-950 py-16 lg:py-24 flex items-center min-h-[calc(100vh-4rem)]"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:60px_60px] pointer-events-none" />

      {/* Ambient background lighting */}
      <motion.div
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "spring", stiffness: 45, damping: 25 }}
        className="pointer-events-none absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"
      />
      <motion.div
        animate={{
          x: -mousePosition.x,
          y: -mousePosition.y,
        }}
        transition={{ type: "spring", stiffness: 45, damping: 25 }}
        className="pointer-events-none absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-14 items-center">
          {/* Left Column — Value Messaging */}
          <div className="space-y-6 lg:space-y-7">
            {/* Status / Category Badge (Business-focused, no code tags) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md"
            >
              <div className="relative flex h-2 w-2 items-center justify-center">
                <span className="absolute h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping" />
                <span className="relative h-2 w-2 rounded-full bg-cyan-400" />
              </div>
              <span className="font-mono text-xs font-semibold tracking-wide text-cyan-300 sm:text-sm">
                Custom Websites for HVAC Contractors
              </span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-3">
              <motion.h1
                id="hvac-hero-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-primary text-[2.25rem] font-bold leading-[1.08] text-slate-100 sm:text-[3rem] lg:text-[3.5rem] tracking-tight"
              >
                More Calls.{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  More Quote Requests.
                </span>{" "}
                A Better HVAC Website.
              </motion.h1>

              {/* Supporting copy */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hvac-lede text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl"
              >
                Modern, fast, mobile-first websites built specifically for HVAC
                contractors — designed to turn local visitors into calls,
                inquiries, and quote requests.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2"
            >
              <button
                onClick={scrollToAudit}
                className="hvac-cta-primary inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg px-7 font-mono text-sm font-semibold tracking-wide text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/45 transition-all cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
              >
                <span>Get a Free Website Audit</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <Link
                href="/hvac-demo"
                className="inline-flex min-h-[52px] items-center justify-center rounded-lg border-2 border-cyan-400/80 bg-transparent px-6 font-mono text-sm font-semibold text-cyan-400 transition-all duration-200 hover:bg-cyan-400/10 hover:border-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
              >
                See the Demo
              </Link>
            </motion.div>

            {/* Core Deliverable Checklist */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 border-t border-slate-800/80 space-y-2"
            >
              {coreBenefits.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                  <span className="text-cyan-400">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-mono text-xs text-slate-500"
            >
              Built for AC repair, heating, installation, maintenance, and emergency service companies.
            </motion.p>
          </div>

          {/* Right Column — Professional Asset Slot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="min-w-0"
          >
            {/* ASSET SLOT: Hero HVAC Website Preview — 16:10 landscape (Polished product mockup of an HVAC contractor homepage with emergency tap-to-call and estimate form) */}
            <div className="relative">
              {/* Back ambient glow */}
              <div className="pointer-events-none absolute -inset-4 rounded-2xl bg-gradient-to-r from-cyan-500/15 to-purple-500/15 blur-2xl -z-10" />

              <HvacAssetSlot
                title="Hero Website Mockup Slot"
                aspectRatio="aspect-[16/10]"
                comment="// ASSET SLOT: High-resolution desktop mockup of a conversion-focused HVAC contractor homepage"
                badge="16:10 Desktop"
                icon="browser"
              />
            </div>
            <p className="mt-3 text-center font-mono text-[11px] text-slate-500">
              Desktop preview container &mdash; ready for high-resolution layout capture
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HvacHero;
