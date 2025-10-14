"use client";

import React from "react";
import { motion } from "framer-motion";
//
import Content from "./partials/Content";
import { fadeLeft, motionStep } from "shared/config/motion";

const Worked = () => {
  return (
    <section className="section" id="experience">
      <motion.h1
        variants={fadeLeft}
        {...motionStep}
        className="flex items-center gap-2 text-3xl font-semibold text-slate-200 mb-10"
      >
        <span className="text-sky-400 font-mono">03.</span>
        Where I have worked?
        <span className="h-[1px] w-32 bg-slate-700 ml-3 hidden md:inline-block"></span>
      </motion.h1>

      <div className="mt-14">
        <Content />
      </div>
    </section>
  );
};

export default Worked;
