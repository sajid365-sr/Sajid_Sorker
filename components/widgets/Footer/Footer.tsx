"use client";
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <section id="__footer" className="py-5">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-20 text-center"
      >
        <p className="text-slate-500 font-mono text-sm">
          <span className="text-slate-600">{"//"} </span>
          Designed & Built by{" "}
          <span className="text-cyan-400">Sajid Sorker</span>
        </p>
      </motion.div>
    </section>
  );
};

export default Footer;
