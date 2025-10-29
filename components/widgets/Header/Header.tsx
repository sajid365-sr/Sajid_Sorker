"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import { navData } from "@config/constants";
import Image from "next/image";
import MobileNav from "./MobileNav";
import AnimatedTextWord from "@components/motion/AnimatedTextWord";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const navControls = useAnimation();

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
      const isScrolled = window.scrollY > 50;

      // Trigger nav animation when scrolling starts
      if (isScrolled && !scrolled) {
        navControls.start({
          y: [20, 0],
          opacity: [0, 1],
          transition: { duration: 0.5, ease: "easeOut" },
        });
      }

      setScrolled(isScrolled);

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
        current = "";
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled, navControls]);

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

  const firstName = "Sajid";
  const lastName = "Sorker";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-3xl transition-all duration-500 ${
          scrolled
            ? "bg-slate-900/50 shadow-2xl shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
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
                className="flex"
              >
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={80}
                  height={80}
                  className=""
                />
                <div className="flex items-center gap-2 text-2xl md:text-3xl font-bold font-mono">
                  <span className="text-cyan-400">
                    {firstName.split("").map((letter, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: i * 0.05,
                          type: "spring",
                          stiffness: 200,
                          damping: 10,
                        }}
                        className="inline-block"
                      >
                        {letter}
                      </motion.span>
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
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.25 + i * 0.05,
                          type: "spring",
                          stiffness: 200,
                          damping: 10,
                        }}
                      >
                        {letter}
                      </motion.span>
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
            <motion.nav
              className="hidden lg:flex items-center gap-8"
              animate={navControls}
            >
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
            </motion.nav>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Component */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onToggle={() => setMobileMenuOpen(!isMobileMenuOpen)}
        scrolled={scrolled}
        activeSection={activeSection}
        onNavClick={handleNavClick}
        onResumeDownload={handleResumeDownload}
      />
    </>
  );
};

export default Header;
