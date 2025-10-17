"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { navData } from "@config/constants";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Handle resume download
  const handleResumeDownload = () => {
    const resumeUrl = "/sajid-sorker-resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Sajid-Sorker-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Simple scroll detection for header background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple active section detection using hash
      const hash = window.location.hash.replace("#", "");
      if (hash && navData.some((nav) => nav.id === hash)) {
        setActiveSection(hash);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleScroll);
    };
  }, []);

  // Animated name letters
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/50 shadow-lg shadow-cyan-500/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="relative group cursor-pointer"
            onClick={() => setActiveSection("")}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <div className="flex items-center gap-2 text-2xl md:text-3xl font-bold font-mono">
                {/* First Name */}
                <span className="text-cyan-400">
                  {firstName.split("").map((letter, i) => (
                    <AnimatedLetter key={i} letter={letter} delay={i * 0.05} />
                  ))}
                </span>

                {/* Separator */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className="inline-block w-8 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-400 origin-left"
                />

                {/* Last Name */}
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

              {/* Hover Effect */}
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-400"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navData.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <Link
                  href={`#${item.id}`}
                  onClick={() => setActiveSection(item.id)}
                  className="relative group block"
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
                </Link>
              </motion.div>
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
            className="lg:hidden relative w-10 h-10 flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-colors"
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="relative w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={
                  isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }
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
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        handleResumeDownload={handleResumeDownload}
        isMobileMenuOpen={isMobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  );
};

export default Header;
