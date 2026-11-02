"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { id: "problems", label: "Problem", number: "01" },
  { id: "services", label: "What I Build", number: "02" },
  { id: "process", label: "Process", number: "03" },
  { id: "demo", label: "Demo", number: "04" },
  { id: "faq", label: "FAQ", number: "05" },
];

const HvacNav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Smooth scroll with offset for fixed header
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    const yOffset = -80;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
    setActiveSection(id);
    setOpen(false);
  }, []);

  // Handle scroll detection and active section spy
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 30;
      setScrolled(isScrolled);

      const sections = navLinks
        .map((nav) => document.getElementById(nav.id))
        .filter(Boolean) as HTMLElement[];

      let current = "";
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY - 140;
        const sectionHeight = section.offsetHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = navLinks[i].id;
        }
      }

      if (window.scrollY < 120) {
        current = "";
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard and body overflow management for mobile drawer
  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-slate-950/85 shadow-xl shadow-black/40 border-b border-slate-800/80 backdrop-blur-2xl"
          : "bg-slate-950/40 border-b border-slate-800/40 backdrop-blur-md"
          }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
          {/* Brand: </> Sajid — Sorker */}
          <Link
            href="/hvac-websites"
            onClick={(e) => {
              if (window.location.pathname === "/hvac-websites") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                setActiveSection("");
              }
            }}
            className="group relative flex items-center gap-2 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400 rounded-md"
            aria-label="Sajid Sorker HVAC Websites Home"
          >
            <span className="font-mono text-xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
              &lt;/&gt;
            </span>
            <div className="flex items-center gap-1.5 md:gap-2 text-xl font-bold font-mono">
              <span className="text-cyan-400">Sajid</span>
              <span className="inline-block w-6 md:w-8 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-400 origin-left" />
              <span className="text-slate-200 group-hover:text-white transition-colors">
                Sorker
              </span>
            </div>
            <span className="hidden sm:inline-block ml-1.5 px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-slate-800/80 text-cyan-400 border border-slate-700/60">
              HVAC
            </span>
            <span className="absolute -bottom-1 left-0 right-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-cyan-400 to-purple-400 transition-transform duration-200 group-hover:scale-x-100" />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-7 lg:flex xl:gap-8"
            aria-label="Primary page navigation"
          >
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group relative py-2 transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400 rounded"
              >
                <div className="flex items-center gap-1.5 font-mono text-sm">
                  <span
                    className={`transition-colors duration-200 ${activeSection === item.id
                      ? "text-cyan-400 font-semibold"
                      : "text-slate-500 group-hover:text-cyan-400"
                      }`}
                  >
                    {item.number}.
                  </span>
                  <span
                    className={`transition-colors duration-200 ${activeSection === item.id
                      ? "text-cyan-400 font-medium"
                      : "text-slate-300 group-hover:text-cyan-400"
                      }`}
                  >
                    {item.label}
                  </span>
                </div>

                {/* Active indicator */}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeHvacSection"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-400"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}

                {/* Hover indicator */}
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-cyan-400/50 to-purple-400/50 transition-transform duration-200 group-hover:scale-x-100" />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Primary CTA */}
            <button
              onClick={() => scrollToSection("audit")}
              className="hvac-cta-primary hidden sm:inline-flex min-h-10 items-center justify-center rounded-lg px-5 py-2 font-mono text-xs md:text-sm font-semibold text-white tracking-wide shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
            >
              Get a Free Website Audit
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-colors bg-slate-900/80 backdrop-blur-sm rounded-lg border border-slate-700/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
              aria-expanded={open}
              aria-controls="hvac-mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <div className="relative w-5 h-4 flex flex-col justify-between">
                <motion.span
                  animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  className="w-full h-0.5 bg-current origin-center transition-all duration-300"
                />
                <motion.span
                  animate={open ? { opacity: 0 } : { opacity: 1 }}
                  className="w-full h-0.5 bg-current transition-opacity duration-300"
                />
                <motion.span
                  animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  className="w-full h-0.5 bg-current origin-center transition-all duration-300"
                />
              </div>
            </button>
          </div>
        </div>
      </header >

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[80] bg-slate-950/70 backdrop-blur-sm lg:hidden"
            />

            {/* Sliding Panel */}
            <motion.div
              id="hvac-mobile-nav"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 z-[90] w-full max-w-sm bg-slate-900/98 backdrop-blur-2xl border-l border-slate-800 p-6 pt-20 flex flex-col justify-between overflow-y-auto lg:hidden"
            >
              <div>
                {/* Header in drawer */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                  <div className="flex items-center gap-1.5 font-mono text-lg font-bold">
                    <span className="text-cyan-400">&lt;/&gt;</span>
                    <span className="text-cyan-400">Sajid</span>
                    <span className="w-5 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-400" />
                    <span className="text-slate-200">Sorker</span>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="text-slate-400 hover:text-cyan-400 p-1"
                    aria-label="Close menu"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Mobile Links */}
                <nav className="mt-8 space-y-2" aria-label="Mobile section navigation">
                  {navLinks.map((item, i) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="w-full text-left py-3 px-3 rounded-lg flex items-center justify-between font-mono text-base transition-colors hover:bg-slate-800/60"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-cyan-400 text-sm font-semibold">
                          {item.number}.
                        </span>
                        <span
                          className={
                            activeSection === item.id
                              ? "text-cyan-400 font-semibold"
                              : "text-slate-200"
                          }
                        >
                          {item.label}
                        </span>
                      </div>
                      {activeSection === item.id && (
                        <span className="w-2 h-2 rounded-full bg-cyan-400" />
                      )}
                    </motion.button>
                  ))}
                </nav>
              </div>

              {/* Drawer Footer with CTA */}
              <div className="pt-8 border-t border-slate-800 space-y-4">
                <button
                  onClick={() => scrollToSection("audit")}
                  className="hvac-cta-primary w-full min-h-[50px] flex items-center justify-center rounded-lg px-5 font-mono text-sm font-semibold text-white tracking-wide"
                >
                  Get a Free Website Audit
                </button>
                <div className="text-center font-mono text-xs text-slate-500">
                  <a
                    href="mailto:sajid@sajidsorker.com"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    sajid@sajidsorker.com
                  </a>
                </div>
              </div>
            </motion.div >
          </>
        )
        }
      </AnimatePresence >
    </>
  );
};

export default HvacNav;

