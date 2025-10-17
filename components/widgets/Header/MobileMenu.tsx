import { navData } from "@config/constants";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import React from "react";

interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
  handleResumeDownload: () => void;
}

const MobileMenu = ({
  isMobileMenuOpen,
  setMobileMenuOpen,
  activeSection,
  setActiveSection,
  handleResumeDownload,
}: MobileMenuProps) => {
  return (
    <div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-950/50 backdrop-blur-sm lg:hidden"
              style={{ top: "80px" }}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-20 right-0 bottom-0 w-full max-w-sm bg-slate-900/95 backdrop-blur-xl border-l border-slate-800 lg:hidden overflow-y-auto"
            >
              <nav className="p-8 space-y-6">
                {navData.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={`#${item.id}`}
                      onClick={() => {
                        setActiveSection(item.id);
                        setMobileMenuOpen(false);
                      }}
                      className="w-full text-left group block"
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
                    </Link>
                  </motion.div>
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

                {/* Social Links in Mobile Menu */}
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
                        className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300"
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
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
