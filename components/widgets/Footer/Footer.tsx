"use client";
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <section id="__footer" className="py-5 section">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-slate-300 text-center max-w-2xl mx-auto text-base leading-relaxed"
      >
        Actively seeking new opportunities! I&apos;m always open to exciting
        roles and collaborations. If you have an opportunity, a question, or
        just want to connect, feel free to reach out—I&apos;d be happy to chat!
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-20 text-center"
      >
        <p className="text-slate-500 font-mono text-base">
          <span className="text-slate-600">{"//"} </span>
          Designed & Built by{" "}
          <span className="text-cyan-400">Sajid Sorker</span>
        </p>
      </motion.div>
    </section>
  );
};

export default Footer;
