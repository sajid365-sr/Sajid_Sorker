"use client";

import { motion, AnimatePresence } from "framer-motion";
import { navData, socialData } from "@config/constants";
import Image from "next/image";

interface MobileNavProps {
  isOpen: boolean;
  onToggle: () => void;
  scrolled: boolean;
  activeSection: string;
  onNavClick: (sectionId: string) => void;
  onResumeDownload: () => void;
}

const MobileNav = ({
  isOpen,
  onToggle,
  scrolled,
  activeSection,
  onNavClick,
  onResumeDownload,
}: MobileNavProps) => {
  return (
    <>
      {/* Transparent Bar - Appears on scroll */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={scrolled ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={`lg:hidden fixed top-0 left-0 right-0 z-[95] backdrop-blur-3xl transition-all duration-500 ${
          scrolled
            ? "bg-slate-900/50 shadow-2xl shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="h-16 flex items-center justify-between px-6">
          <Image src="/images/logo.png" alt="Logo" width={50} height={50} />

          <motion.button
            onClick={onToggle}
            initial={{ scale: 1 }}
            animate={scrolled ? { scale: [1, 1.1, 1] } : {}}
            transition={
              scrolled ? { scale: { duration: 0.3, ease: "easeOut" } } : {}
            }
            className="w-11 h-11 flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-all duration-300 bg-slate-800/90 backdrop-blur-sm rounded-lg border border-slate-700/50 shadow-lg hover:shadow-cyan-500/50"
            whileTap={{ scale: 0.9 }}
          >
            <div className="relative w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-current origin-center transition-all duration-300"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-current transition-opacity duration-300"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-current origin-center transition-all duration-300"
              />
            </div>
          </motion.button>
        </div>
      </motion.div>

      {/* Hamburger Button - Floating when not scrolled */}
      {/* <motion.button
        onClick={onToggle}
        initial={{ scale: 1 }}
        animate={scrolled ? { scale: [1, 1.1, 1] } : {}}
        transition={
          scrolled ? { scale: { duration: 0.3, ease: "easeOut" } } : {}
        }
        className="lg:hidden fixed right-6 top-4 z-[100] w-11 h-11 flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-all duration-300 bg-slate-900/90 backdrop-blur-sm rounded-lg border border-slate-700/50 shadow-lg hover:shadow-cyan-500/50"
        whileTap={{ scale: 0.9 }}
        style={{ pointerEvents: scrolled ? "none" : "auto" }}
      >
        <div className="relative w-6 h-5 flex flex-col justify-between">
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-full h-0.5 bg-current origin-center transition-all duration-300"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-full h-0.5 bg-current transition-opacity duration-300"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-full h-0.5 bg-current origin-center transition-all duration-300"
          />
        </div>
      </motion.button> */}

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop - z-80 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onToggle}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm lg:hidden z-[80]"
            />

            {/* Menu Panel - z-90 */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-slate-900/95 backdrop-blur-2xl border-l border-slate-700/50 lg:hidden overflow-y-auto z-[90]"
            >
              <nav className="p-8 pt-20 space-y-6">
                {/* Navigation Items */}
                {navData.map((item, i) => (
                  <motion.button
                    key={item.id}
                    onClick={() => onNavClick(item.id)}
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
                    onResumeDownload();
                    onToggle();
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
                  <div className="flex gap-4 flex-wrap">
                    {socialData.map((social, i) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="w-12 h-12 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300"
                        title={social.name}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Footer Text */}
                <div className="pt-8 border-t border-slate-800">
                  <p className="text-slate-600 text-xs font-mono text-center">
                    <span className="text-slate-700">{"//"} </span>
                    Designed & Built by{" "}
                    <span className="text-cyan-400">Sajid Sorker</span>
                  </p>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
