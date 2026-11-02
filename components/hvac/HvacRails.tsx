"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiGlobe, FiLinkedin, FiMail } from "react-icons/fi";

const HvacRails = () => {
    return (
        <>
            {/* Left Rail - Business Links */}
            <motion.aside
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                id="__hvac_social"
                className="fixed z-40 bottom-0 left-6 2xl:left-10 hidden xl:block pointer-events-auto"
                aria-label="Direct links"
            >
                <ul className="space-y-5 after:h-20 after:w-px after:bg-slate-700/80 after:block after:mx-auto after:mt-5 transition-transform duration-300 hover:-translate-y-1.5">
                    <li>
                        <Link
                            href="https://www.sajidsorker.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-500 hover:text-cyan-400 cursor-pointer transition-colors duration-200 block"
                            title="Sajid Sorker — Portfolio"
                            aria-label="Sajid Sorker Portfolio"
                        >
                            <FiGlobe className="w-5 h-5" />
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://www.linkedin.com/in/sajid365-sr/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-500 hover:text-cyan-400 cursor-pointer transition-colors duration-200 block"
                            title="LinkedIn Profile"
                            aria-label="LinkedIn Profile"
                        >
                            <FiLinkedin className="w-5 h-5" />
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="mailto:sajid@sajidsorker.com"
                            className="text-slate-500 hover:text-cyan-400 cursor-pointer transition-colors duration-200 block"
                            title="Email Sajid"
                            aria-label="Email Sajid"
                        >
                            <FiMail className="w-5 h-5" />
                        </Link>
                    </li>
                </ul>
            </motion.aside>

            {/* Right Rail - Direct Contact */}
            <motion.aside
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                id="__hvac_mail"
                className="fixed z-40 bottom-0 right-6 2xl:right-10 hidden xl:block pointer-events-auto"
                aria-label="Direct contact"
            >
                <div className="space-y-5 after:h-20 after:w-px after:bg-slate-700/80 after:block after:mx-auto after:mt-5">
                    <Link
                        href="mailto:sajid@sajidsorker.com"
                        className="text-[13px] font-mono tracking-wider text-slate-500 hover:text-cyan-400 cursor-pointer transition-all duration-200 hover:-translate-y-1 block rl"
                        title="Email sajid@sajidsorker.com"
                    >
                        sajid@sajidsorker.com
                    </Link>
                </div>
            </motion.aside>
        </>
    );
};

export default HvacRails;

