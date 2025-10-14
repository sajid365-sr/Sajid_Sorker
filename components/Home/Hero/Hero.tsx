"use client";

import React from "react";
import { motion } from "framer-motion";
//
import Left from "./partials/Left";
import Right from "./partials/Right";

const Hero = () => {
  return (
    <motion.div className="overflow-hidden bg-slate-900 dark:-mb-32 dark:mt-[-6.5rem] dark:pb-32 dark:pt-[4.5rem] dark:lg:mt-[-6.75rem] dark:lg:pt-[4.75rem]">
      <div className="py-16 lg:relative lg:pb-20 lg:pt-0">
        <section className="mx-auto section items-center xl:gap-x-16">
          <Left />
          <Right />
        </section>
      </div>
    </motion.div>
  );
};

export default Hero;
