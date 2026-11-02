"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { whatYouGet, visitorNeeds } from "./hvacContent";

const HvacFeatures = () => {
  return (
    <>
      {/* ─── 2. WHAT I BUILD ─── */}
      <section
        id="services"
        className="scroll-mt-20 relative bg-slate-950 py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 max-w-2xl sm:mb-16"
          >
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400">
              02. &lt;What I Build /&gt;
            </span>
            <h2 className="mt-2 font-primary text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
              Everything Your HVAC Website Needs
            </h2>
            <p className="mt-3 font-mono text-sm text-slate-500">
              {"//"} Everything your HVAC website needs to turn visitors into
              inquiries.
            </p>
          </motion.div>

          {/* ── Two-column layout: Large Visual Asset left + "What You'll Get" list right ── */}
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:items-start">
            {/* ── LEFT: Visual Asset Slot (Sticky on Desktop) ── */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-28"
            >
              <div className="relative">
                {/* Ambient glow */}
                <div className="pointer-events-none absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-purple-500/15 blur-2xl" />

                {/*
                 * ASSET SLOT: HVAC WEBSITE PREVIEW — Real screenshot of the final HVAC demo homepage showing the hero, services, CTA, and quote/request flow. Prefer 16:10 landscape.
                 */}
                <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900 shadow-2xl shadow-black/60">
                  <Image
                    src="/images/hvac/features-preview-desktop.jpg"
                    alt="Evergreen Heating & Air demo homepage — desktop view showing the hero section, services list, and estimate request form"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 640px"
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="mt-3 text-center font-mono text-[11px] text-slate-500">
                Desktop layout preview &mdash; shows complete lead generation
                structure
              </p>
            </motion.div>

            {/* ── RIGHT: "What You'll Get" benefit list ── */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col"
            >
              {/* List heading */}
              <h3 className="mb-6 font-primary text-xl font-bold text-slate-100 sm:text-2xl">
                What You&apos;ll Get
              </h3>

              {/* Benefit rows — compact numbered list, not SaaS cards */}
              <div className="divide-y divide-slate-800/70 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm overflow-hidden">
                {whatYouGet.map((item, index) => (
                  <div
                    key={item.title}
                    className="group flex items-start gap-4 px-5 py-4 transition-colors duration-200 hover:bg-slate-800/40 cursor-default"
                  >
                    {/* Cyan number badge */}
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-cyan-500/10 font-mono text-xs font-bold text-cyan-400 border border-cyan-500/20 group-hover:border-cyan-400/50 group-hover:bg-cyan-500/20 transition-all duration-200">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <h4 className="font-mono text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors duration-200">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-xs sm:text-sm leading-relaxed text-slate-400">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="mt-7">
                <a
                  href="/hvac-demo"
                  className="group inline-flex items-center gap-1.5 font-mono text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                >
                  See the kind of website your business could have
                  <span
                    className="inline-block transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden
                  >
                    →
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 3. WHY IT MATTERS ─── */}
      <section className="relative overflow-hidden border-y border-slate-800 bg-slate-900/40 py-16 sm:py-20 lg:py-24">
        {/* Ambient background glow */}
        <div className="pointer-events-none absolute top-1/2 left-1/4 h-96 w-96 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:px-8">
          {/* Left: Homeowner Behavior & 5-Second Decision Rule */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Why It Matters
            </span>

            <h2 className="font-primary text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
              When an AC Breaks Down, Homeowners Decide in{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Seconds.
              </span>
            </h2>

            <p className="text-base leading-relaxed text-slate-400 sm:text-lg">
              When heating or cooling fails, people aren&apos;t casually
              browsing. They need an emergency solution. If they can&apos;t
              immediately tell what you offer, whether you service their town,
              or how to reach a technician right now, they click back to Google.
            </p>

            <div className="space-y-3 pt-2">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-300">
                Homeowners check 5 things immediately:
              </p>
              <ul className="space-y-2.5">
                {visitorNeeds.map((need, idx) => (
                  <li
                    key={need}
                    className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-900/60 p-3 text-sm font-medium text-slate-200"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400 font-mono text-xs border border-cyan-500/30">
                      {idx + 1}
                    </span>
                    <span>{need}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="font-mono text-xs text-slate-500 pt-1">
              Clear answers turn clicks into phone calls. Confusion sends
              homeowners to your local competitor.
            </p>
          </motion.div>

          {/* Right: Mobile HVAC Website Asset Slot inside a Smartphone Mockup with Surrounding Simple Labels */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-[340px] pt-6 pb-6"
          >
            {/* Ambient backlight */}
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[3rem] bg-gradient-to-b from-cyan-500/20 via-blue-500/10 to-purple-500/20 blur-2xl" />

            {/* Smartphone Mockup Frame */}
            <div className="relative rounded-[2.5rem] border-4 border-slate-700/80 bg-slate-950 p-3 shadow-2xl shadow-black/80 ring-1 ring-slate-800">
              {/* Phone speaker notch */}
              <div className="mx-auto mb-2 h-4 w-28 rounded-full bg-slate-800" />

              {/*
               * ASSET SLOT: MOBILE HVAC WEBSITE — Real screenshot of the final HVAC demo website displayed inside a smartphone mockup. Prefer 9:16 portrait screenshot.
               */}
               <div className="group relative aspect-[9/16] w-full overflow-hidden rounded-[1.75rem] border border-slate-800 bg-slate-900 shadow-inner">
                 <Image
                   src="/images/hvac/features-mobile-portrait.jpg"
                   alt="Portrait mobile screenshot of the fictional Evergreen Heating & Air website demo, showing its mobile navigation, estimate button, and service content"
                   fill
                   sizes="(max-width: 640px) 75vw, 340px"
                   className="object-cover object-top"
                 />
               </div>
            </div>

            {/* ── Surrounding Simple Labels (Simple labels only, NOT fake UI) ── */}
            <div className="pointer-events-none absolute -left-4 top-12 z-20 flex items-center gap-1.5 rounded-full border border-cyan-500/40 bg-slate-900/95 px-3 py-1 font-mono text-[11px] font-semibold text-cyan-300 shadow-xl backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <span>Mobile-first</span>
            </div>

            <div className="pointer-events-none absolute -right-3 top-24 z-20 flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-slate-900/95 px-3 py-1 font-mono text-[11px] font-semibold text-emerald-300 shadow-xl backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Call Now</span>
            </div>

            <div className="pointer-events-none absolute -right-4 bottom-32 z-20 flex items-center gap-1.5 rounded-full border border-blue-500/40 bg-slate-900/95 px-3 py-1 font-mono text-[11px] font-semibold text-blue-300 shadow-xl backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              <span>Get Estimate</span>
            </div>

            <div className="pointer-events-none absolute -left-5 bottom-24 z-20 flex items-center gap-1.5 rounded-full border border-purple-500/40 bg-slate-900/95 px-3 py-1 font-mono text-[11px] font-semibold text-purple-300 shadow-xl backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
              <span>Service Area</span>
            </div>

            <div className="pointer-events-none absolute left-1/2 -bottom-2 z-20 -translate-x-1/2 flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-900/95 px-3 py-1 font-mono text-[11px] font-semibold text-slate-300 shadow-xl backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <span>Trust</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HvacFeatures;
