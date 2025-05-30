import React from "react";
import { motion } from "framer-motion";
//
import Featured from "@components/cards/Project/Featured";
import ProjectCard from "@components/cards/Project/ProjectCard";
import { fadeTop, fadeLeft, motionStep } from "@config/motion";
import { projects } from "@config/constants";
import { ProjectTypes } from "@config/types";
import Button from "@components/Button";

const Projects = () => {
  return (
    <section id="works">
      <motion.h1
        variants={fadeLeft}
        {...motionStep}
        className="flex items-center gap-2 text-3xl font-medium text-slate-300 mb-12"
      >
        <span className="text-sky-400 font-mono">02. </span>
        Some Things I’ve Built
      </motion.h1>

      <div className="lg:mb-72 mb-32">
        {projects
          .filter((e: ProjectTypes) => e.featured == true)
          .map((e: ProjectTypes, i: number) => (
            <motion.div
              key={i}
              variants={fadeTop}
              {...motionStep}
              className="lg:my-32 my-24"
            >
              <Featured {...e} secondary={i % 2 === 0 ? false : true} />
            </motion.div>
          ))}
      </div>

      <div className="grid grid-cols-12 gap-6 gap-y-8 my-20">
        {projects
          .filter((e: ProjectTypes) => e.featured !== true)
          .map((e: ProjectTypes, i: number) => (
            <ProjectCard {...e} key={i} />
          ))}
      </div>

      <div className="flex items-center justify-center">
        <Button outlined> See More </Button>
      </div>
    </section>
  );
};

export default Projects;
