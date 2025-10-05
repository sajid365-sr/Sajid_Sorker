"use client";

import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { navData } from "shared/config/constants";
import AnimatedTextCharacter from "components/common/motion/AnimatedTextCherecter";
import Button from "@components/Button";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ✅ Handle resume download
  const handleResumeDownload = () => {
    const resumeUrl = "/sajid-sorker-resume.pdf"; // file placed in public/
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Sajid-Sorker-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Motion configs
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-2xl">
      <div className="max-w-[94%] mx-auto py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex text-2xl md:text-4xl gap-2 font-light">
          <AnimatedTextCharacter text="Sajid" className="text-sky-400" />
          <AnimatedTextCharacter text="Sorker" className="text-gray-200" />
        </Link>

        {/* Desktop nav */}
        <motion.ul
          variants={container}
          initial="hidden"
          animate="visible"
          className="hidden md:flex items-center gap-6"
        >
          {navData.map((e: string, i: number) => (
            <motion.li key={i} variants={child}>
              <a
                href={`#${e.toLowerCase()}`}
                className="hover:text-sky-400 transition"
              >
                {e}
              </a>
            </motion.li>
          ))}

          {/* ✅ Updated Resume Button */}
          <li>
            <Button sizeClass="px-5 py-2" onClick={handleResumeDownload}>
              Resume
            </Button>
          </li>
        </motion.ul>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-2xl text-gray-200"
          >
            {isMobileMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute w-full left-0 top-full py-6
                    dark:bg-gray-800/80 backdrop-blur-3xl
                     border-t border-white/20 dark:border-gray-700/20 shadow-lg"
        >
          <ul className="flex flex-col gap-4 text-center">
            {navData.map((e: string, i: number) => (
              <li key={i}>
                <a
                  href={`#${e.toLowerCase()}`}
                  className="text-lg text-gray-100 hover:text-sky-400 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="mr-1 text-sky-400">0{i + 1}.</span>
                  {e}
                </a>
              </li>
            ))}

            {/* ✅ Updated Resume Button for mobile */}
            <li>
              <Button
                sizeClass="px-5 py-2"
                onClick={() => {
                  handleResumeDownload();
                  setMobileMenuOpen(false);
                }}
              >
                Resume
              </Button>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
