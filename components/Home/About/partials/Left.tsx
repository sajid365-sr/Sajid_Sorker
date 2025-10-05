"use client";
import { motion } from "framer-motion";
import { fadeTop, motionStep } from "shared/config/motion";

const Left = () => {
  return (
    <section className=" col-span-6">
      <motion.div
        variants={fadeTop}
        {...motionStep}
        className="text-gray-400 leading-relaxed space-y-5 text-lg"
      >
        <p>
          In the ever-evolving world of technology, I stand at the intersection
          of creativity and logic. I’m{" "}
          <span className="text-sky-400">Sajid Sorker</span>, a passionate{" "}
          <span className="text-sky-400">MERN Stack Developer</span> who loves
          transforming ideas into scalable, user-focused web experiences.
        </p>
        <p>
          With tools like{" "}
          <span className="text-sky-400">React, Next.js, and Node.js</span>, I
          build modern digital solutions — optimized for performance, design,
          and innovation.
        </p>
        <p>
          My goal is simple: to create immersive, intuitive experiences that
          make a lasting impact in the digital world.
        </p>
      </motion.div>
    </section>
  );
};

export default Left;
