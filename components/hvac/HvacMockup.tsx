"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type MockupVariant = "hero" | "before" | "after" | "demo";

type HvacMockupProps = {
  variant: MockupVariant;
};

// Dark portfolio-styled browser chrome
const BrowserChrome = ({
  url,
  children,
  badge,
}: {
  url: string;
  children: ReactNode;
  badge?: string;
}) => (
  <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/80 shadow-2xl backdrop-blur-md transition-all duration-300">
    {/* Title bar */}
    <div className="flex items-center justify-between border-b border-slate-800/80 bg-slate-900/90 px-4 py-2.5">
      <div className="flex items-center gap-2">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" aria-hidden />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" aria-hidden />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" aria-hidden />
        </div>
        <div className="ml-2 flex items-center gap-1.5 rounded-md bg-slate-950/80 px-3 py-1 font-mono text-[11px] text-slate-400 border border-slate-800/60">
          <svg className="w-3 h-3 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span className="truncate">{url}</span>
        </div>
      </div>
      {badge && (
        <span className="hidden sm:inline-block rounded px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider bg-slate-800 text-cyan-400 border border-slate-700">
          {badge}
        </span>
      )}
    </div>
    {children}
  </div>
);

// High-fidelity Hero & After preview of a conversion-first HVAC site
const PolishedHvacSite = ({
  dense = false,
}: {
  dense?: boolean;
}) => (
  <div className="bg-slate-950 text-slate-200">
    {/* Top emergency announcement bar */}
    <div className="flex items-center justify-between gap-2 bg-gradient-to-r from-cyan-950/80 via-slate-900 to-blue-950/80 px-3 py-1.5 text-[11px] font-mono text-cyan-300 border-b border-cyan-500/20">
      <div className="flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="font-semibold text-slate-200">24/7 Emergency AC & Heating</span>
      </div>
      <span className="hidden sm:inline text-cyan-400 font-bold">Call (555) 234-5678</span>
    </div>

    {/* Site header */}
    <div className="flex items-center justify-between gap-3 border-b border-slate-800/80 bg-slate-900/90 px-4 py-2.5">
      <div className="flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 font-bold text-white text-xs">
          ⚡
        </div>
        <div>
          <p className="font-mono text-xs font-bold text-slate-100 sm:text-sm">
            Evergreen <span className="text-cyan-400">Heating & Air</span>
          </p>
          <p className="text-[9px] font-mono text-slate-500">Licensed & Insured HVAC Pros</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="hidden md:flex gap-3 text-[11px] font-mono text-slate-400">
          <span className="text-cyan-400">Services</span>
          <span>Reviews</span>
          <span>Service Area</span>
        </div>
        <span className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-1.5 font-mono text-[11px] font-semibold text-white shadow-md shadow-cyan-500/20">
          📞 (555) 234-5678
        </span>
      </div>
    </div>

    {/* Hero banner area */}
    <div className="grid gap-4 p-4 sm:grid-cols-[1.2fr_0.8fr] sm:p-5">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-0.5 text-[10px] font-mono font-semibold text-cyan-400">
          <span>★ 4.9/5 Rating (180+ Local Reviews)</span>
        </div>
        <p className="font-primary text-lg font-bold leading-tight text-slate-100 sm:text-2xl">
          Fast AC & Heating Repairs in <span className="text-cyan-400">Your Local Area</span>
        </p>
        <p className="text-[12px] leading-relaxed text-slate-400">
          Same-day service, upfront transparent pricing, and 100% satisfaction guarantee.
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          <span className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-1.5 text-[11px] font-mono font-semibold text-white shadow-sm">
            Request Quote →
          </span>
          <span className="rounded-lg border border-cyan-400/40 px-3 py-1.5 text-[11px] font-mono font-semibold text-cyan-400 bg-cyan-500/5">
            View Pricing
          </span>
        </div>
      </div>

      {/* Instant estimate mini-card */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-3.5 space-y-2">
        <div className="flex items-center justify-between">
          <p className="font-mono text-xs font-semibold text-slate-200">
            Instant Estimate Form
          </p>
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between rounded-md bg-slate-800/80 px-2.5 py-1.5 text-[10px] font-mono text-slate-400">
            <span>Select Service:</span>
            <span className="text-cyan-400 font-semibold">AC Repair ▼</span>
          </div>
          <div className="rounded-md bg-slate-800/80 px-2.5 py-1.5 text-[10px] font-mono text-slate-500">
            Zip Code / City…
          </div>
          <div className="rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 py-1.5 text-center font-mono text-[10px] font-bold text-white">
            Get Free Quote
          </div>
        </div>
      </div>
    </div>

    {/* Quick service badges */}
    <div className="grid grid-cols-3 gap-2 px-4 pb-4">
      {[
        { name: "AC Repair", desc: "Same-Day Fix" },
        { name: "Furnace Install", desc: "High-Efficiency" },
        { name: "Maintenance", desc: "$79 Tune-Up" },
      ].map((item) => (
        <div
          key={item.name}
          className="rounded-lg border border-slate-800 bg-slate-900/70 p-2 text-center"
        >
          <p className="font-mono text-[11px] font-semibold text-slate-200">{item.name}</p>
          <p className="text-[9px] font-mono text-cyan-400">{item.desc}</p>
        </div>
      ))}
    </div>

    {!dense && (
      <div className="grid gap-2 border-t border-slate-800/80 bg-slate-900/40 px-4 py-3 sm:grid-cols-2 text-[10px] font-mono text-slate-400">
        <div className="flex items-center gap-1.5">
          <span className="text-emerald-400">✓</span>
          <span>Serving all local suburbs with 30-min response times</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-cyan-400">✓</span>
          <span>EPA Certified · Licensed & Fully Insured HVAC Contractor</span>
        </div>
      </div>
    )}
  </div>
);

const HvacMockup = ({ variant }: HvacMockupProps) => {
  // Typical HVAC Website (Before)
  if (variant === "before") {
    return (
      <div className="relative">
        <BrowserChrome url="old-hvac-site.example" badge="Typical Website">
          <div className="min-h-[300px] bg-slate-900 p-4 text-slate-400 sm:min-h-[340px]">
            {/* Clunky top banner */}
            <div className="border-b border-slate-800 pb-2.5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-serif font-bold italic text-slate-300">
                  CoolAir HVAC & Sons Heating Inc.
                </p>
                <p className="text-[9px] font-mono text-red-400">Call (Unclickable Text): 555-0192</p>
              </div>
              <p className="text-[9px] text-slate-500 mt-1">
                home | about | services | gallery | testimonials | coupons | blog | contact
              </p>
            </div>

            {/* Generic welcome message */}
            <div className="mt-3 grid grid-cols-3 gap-2.5">
              <div className="col-span-2 space-y-2">
                <div className="rounded bg-red-500/10 border border-red-500/30 px-2 py-1 text-[10px] font-mono text-red-400 font-semibold">
                  ✕ No Tap-to-Call &middot; No Quote Form
                </div>
                <p className="text-base font-bold leading-tight text-slate-200">
                  Welcome to our official website!!!
                </p>
                <p className="text-[11px] leading-relaxed text-slate-500">
                  We are a full-service heating and cooling contractor established in 1994. Please scroll through our 12 service pages or send a message to our general inbox to see if we service your area.
                </p>
                <p className="text-[10px] text-blue-400 underline">Click here to read more about our history &gt;&gt;</p>
              </div>
              <div className="space-y-1.5 rounded border border-slate-800 bg-slate-950 p-2 text-[10px] font-mono text-slate-500">
                <p className="font-bold text-slate-400">Latest News</p>
                <p className="text-[9px]">Winter checkup tips (2018)</p>
                <p className="text-[9px]">Office holiday hours</p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="h-12 rounded bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-[10px] text-slate-500">
                Gallery Image 1
              </div>
              <div className="h-12 rounded bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-[10px] text-slate-500">
                Gallery Image 2
              </div>
              <div className="h-12 rounded bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-[10px] text-slate-500">
                Gallery Image 3
              </div>
            </div>

            {/* Pain points footer */}
            <div className="mt-4 border-t border-slate-800 pt-2 flex flex-wrap gap-2 text-[10px] font-mono text-red-400">
              <span className="bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">✕ 70% Bounce on Mobile</span>
              <span className="bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">✕ Buried Phone Number</span>
            </div>
          </div>
        </BrowserChrome>
      </div>
    );
  }

  // Conversion-Focused Redesign (After)
  if (variant === "after") {
    return (
      <div className="relative">
        <BrowserChrome url="evergreen-heating.demo" badge="Conversion-Focused">
          <PolishedHvacSite dense />
          <div className="border-t border-slate-800 bg-slate-900/90 px-4 py-2 flex flex-wrap gap-2 text-[10px] font-mono text-emerald-400">
            <span className="bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">✓ 1-Tap Calling</span>
            <span className="bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">✓ 30-Sec Estimate Form</span>
            <span className="bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 text-cyan-400">✓ Fast Mobile Speed</span>
          </div>
        </BrowserChrome>
      </div>
    );
  }

  // Hero mockup variant
  if (variant === "hero") {
    return (
      <div className="relative">
        {/* Floating live conversion pills around hero mockup */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-4 -right-2 z-20 hidden sm:flex items-center gap-2 rounded-lg bg-slate-900/95 border border-cyan-500/40 px-3 py-1.5 shadow-xl shadow-cyan-500/10 backdrop-blur-md"
        >
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="font-mono text-xs font-semibold text-slate-200">
            ⚡ 99/100 Mobile Speed
          </span>
        </motion.div>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-4 -left-2 z-20 hidden sm:flex items-center gap-2 rounded-lg bg-slate-900/95 border border-emerald-500/40 px-3 py-1.5 shadow-xl shadow-emerald-500/10 backdrop-blur-md"
        >
          <span className="font-mono text-xs font-semibold text-emerald-400">
            📞 1-Tap Emergency Call
          </span>
        </motion.div>

        <BrowserChrome url="evergreen-heating.demo" badge="Live Demo Concept">
          <PolishedHvacSite dense />
        </BrowserChrome>
      </div>
    );
  }

  // Full demo variant
  return (
    <div className="relative">
      <BrowserChrome url="evergreen-heating.demo" badge="Demo Preview">
        <PolishedHvacSite />
      </BrowserChrome>
    </div>
  );
};

export default HvacMockup;
