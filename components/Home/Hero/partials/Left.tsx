import React from "react";
import { motion } from "framer-motion";
//
import Button from "@components/Button";
import { fadeUpSpring } from "shared/config/motion";
import AnimatedTextWord from "components/common/motion/AnimatedTextWord";
import AnimatedTextCharacter from "components/common/motion/AnimatedTextCherecter";
import Image from "next/image";

const Left = () => {
  return (
    <div className="relative z-20 col-span-2 md:text-center lg:text-left space-y-10">
      {/* Subtle Floating Background Glow */}
      <div className="absolute -z-10 w-[400px] h-[400px] rounded-full bg-sky-500/20 blur-3xl top-0 left-0"></div>

      {/* Greeting with Typing Animation */}
      <motion.div variants={fadeUpSpring} initial="hidden" animate="visible">
        <p className="text-sky-400 text-lg font-semibold">
          👋 Hey there, I&apos;m
        </p>
      </motion.div>

      {/* Name & Role with Gradient Text */}
      <div>
        <AnimatedTextCharacter
          text="Sajid Sorker"
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent"
        />
        <AnimatedTextCharacter
          text="Full Stack MERN Developer"
          className="text-2xl md:text-4xl mt-2 text-slate-400"
        />
      </div>

      {/* Tagline */}
      <motion.p
        variants={fadeUpSpring}
        initial="hidden"
        animate="visible"
        className="max-w-2xl text-slate-400 md:text-lg leading-relaxed"
      >
        I craft fast, scalable, and visually stunning web experiences using{" "}
        <span className="text-sky-400 font-medium">React</span>,{" "}
        <span className="text-sky-400 font-medium">Next.js</span>,{" "}
        <span className="text-sky-400 font-medium">Node.js</span>, and{" "}
        <span className="text-sky-400 font-medium">MongoDB</span>.
      </motion.p>

      {/* Dynamic Highlight Badges */}
      <motion.div
        variants={fadeUpSpring}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap gap-2 mt-4 justify-start md:justify-center lg:justify-start"
      >
        {["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"].map(
          (tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm rounded-full bg-sky-400/10 border border-sky-400/20 text-sky-300"
            >
              {tech}
            </span>
          )
        )}
      </motion.div>

      {/* CTA Buttons */}
      <motion.div variants={fadeUpSpring} initial="hidden" animate="visible">
        <div className="flex gap-4 mt-6 justify-start md:justify-center lg:justify-start">
          <a href="#projects">
            <Button outlined>💼 View My Projects</Button>
          </a>
          <a href="#contact">
            <Button>🤝 Let’s Connect</Button>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Left;
