"use client";
import React from "react";
import { motion } from "framer-motion";
//
import Left from "./partials/Left";
import Right from "./partials/Right";
//
import { fadeLeft, motionStep } from "shared/config/motion";

const About = () => {
  return (
    <section id="about" className="py-20">
      <motion.h1
        variants={fadeLeft}
        {...motionStep}
        className="flex items-center gap-2 text-3xl font-semibold text-slate-200 mb-10"
      >
        <span className="text-sky-400 font-mono">01.</span>
        About Me
        <span className="h-[1px] w-32 bg-slate-700 ml-3 hidden md:inline-block"></span>
      </motion.h1>

      <div className="grid lg:grid-cols-12 gap-12 items-start">
        <Left />
        <Right />
      </div>
    </section>
  );
};

export default About;
