"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { navData } from "@config/constants";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Smooth scroll
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    const yOffset = -100;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
    setActiveSection(id);
  }, []);

  // Handle scroll + intersection logic
  useEffect(() => {
    const sections = navData
      .map((nav) => document.getElementById(nav.id))
      .filter(Boolean) as HTMLElement[];

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      let current = "";
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY - 150;
        const sectionHeight = section.offsetHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = navData[i].id;
        }
      }

      if (window.scrollY < 150) {
        current = ""; // Top of page
      }

      setActiveSection(current);
    };

    handleScroll(); // run once on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleResumeDownload = () => {
    const resumeUrl = "/sajid-sorker-resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Sajid-Sorker-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  const AnimatedLetter = ({
    letter,
    delay,
  }: {
    letter: string;
    delay: number;
  }) => (
    <motion.span
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, type: "spring", stiffness: 200, damping: 10 }}
      className="inline-block"
    >
      {letter}
    </motion.span>
  );

  const firstName = "Sajid";
  const lastName = "Sorker";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl transition-all duration-500 ${
          scrolled
            ? "bg-slate-950/70 border-b border-slate-700/30 shadow-2xl shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setActiveSection("");
              }}
              className="relative hidden md:block group cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-2 text-2xl md:text-3xl font-bold font-mono">
                  <span className="text-cyan-400">
                    {firstName.split("").map((letter, i) => (
                      <AnimatedLetter
                        key={i}
                        letter={letter}
                        delay={i * 0.05}
                      />
                    ))}
                  </span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                    className="inline-block w-8 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-400 origin-left"
                  />
                  <span className="text-slate-200">
                    {lastName.split("").map((letter, i) => (
                      <AnimatedLetter
                        key={i}
                        letter={letter}
                        delay={0.25 + i * 0.05}
                      />
                    ))}
                  </span>
                </div>
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-400"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navData.map((item, i) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="relative group"
                >
                  <div className="flex items-center gap-2 font-mono text-sm">
                    <span
                      className={`transition-colors duration-300 ${
                        activeSection === item.id
                          ? "text-cyan-400"
                          : "text-slate-500 group-hover:text-cyan-400"
                      }`}
                    >
                      {item.number}.
                    </span>
                    <span
                      className={`transition-colors duration-300 ${
                        activeSection === item.id
                          ? "text-cyan-400"
                          : "text-slate-300 group-hover:text-cyan-400"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>

                  {/* Active Indicator */}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-400"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Hover Indicator */}
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400/50 to-purple-400/50"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              ))}

              {/* Resume Button */}
              <motion.button
                onClick={handleResumeDownload}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-6 py-2.5 border-2 border-cyan-400 text-cyan-400 rounded-lg font-mono text-sm overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Resume
                </span>
                <div className="absolute inset-0 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-slate-900 font-semibold z-10">
                  Download
                </span>
              </motion.button>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden  w-10 h-10 flex fixed right-5 items-center justify-center text-slate-300 hover:text-cyan-400 transition-colors"
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="relative w-6 h-5 flex flex-col justify-between">
                <motion.span
                  animate={
                    isMobileMenuOpen
                      ? { rotate: 45, y: 8 }
                      : { rotate: 0, y: 0 }
                  }
                  className="w-full h-0.5 bg-current origin-center transition-all duration-300"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-full h-0.5 bg-current transition-opacity duration-300"
                />
                <motion.span
                  animate={
                    isMobileMenuOpen
                      ? { rotate: -45, y: -8 }
                      : { rotate: 0, y: 0 }
                  }
                  className="w-full h-0.5 bg-current origin-center transition-all duration-300"
                />
              </div>
            </motion.button>

            {/* Mobile Menu */}
          </div>
        </div>
      </header>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm lg:hidden z-40"
            style={{ top: "80px" }}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-20 right-0 bottom-0 w-full max-w-sm bg-slate-900/90 backdrop-blur-2xl border-l border-slate-700/50 lg:hidden overflow-y-auto z-50"
          >
            <nav className="p-8 space-y-6">
              {navData.map((item, i) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="w-full text-left group"
                >
                  <div className="flex items-center gap-4 py-3">
                    <span className="text-cyan-400 font-mono text-sm">
                      {item.number}.
                    </span>
                    <span className="text-slate-300 text-lg group-hover:text-cyan-400 transition-colors">
                      {item.label}
                    </span>
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeMobileSection"
                        className="ml-auto w-2 h-2 rounded-full bg-cyan-400"
                      />
                    )}
                  </div>
                  <motion.div
                    className="h-[1px] bg-gradient-to-r from-cyan-400/50 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                    style={{ originX: 0 }}
                  />
                </motion.button>
              ))}

              {/* Mobile Resume Button */}
              <motion.button
                onClick={() => {
                  handleResumeDownload();
                  setMobileMenuOpen(false);
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-8 px-6 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-mono font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Resume
              </motion.button>

              {/* Social Links */}
              <div className="pt-8 border-t border-slate-800">
                <p className="text-slate-500 text-sm font-mono mb-4">
                  Connect with me
                </p>
                <div className="flex gap-4">
                  {[
                    {
                      name: "GitHub",
                      url: "https://github.com/sajid365-sr",
                      icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
                    },
                    {
                      name: "LinkedIn",
                      url: "https://www.linkedin.com/in/sajid365-sr/",
                      icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                    },
                    {
                      name: "Twitter",
                      url: "https://twitter.com/sajid365_sr",
                      icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                    },
                  ].map((social, i) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-10 h-10 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d={social.icon} />
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </div>
            </nav>
          </motion.div>
        </>
      )}
    </>
  );
};

export default Header;
