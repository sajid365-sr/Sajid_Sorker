"use client";

import React from "react";
import { motion } from "framer-motion";
//
import Featured from "components/common/cards/Project/Featured";
import ProjectCard from "components/common/cards/Project/ProjectCard";
import { fadeTop, fadeLeft, motionStep } from "shared/config/motion";
import { projects } from "shared/config/constants";
import { ProjectTypes } from "shared/config/types";
import Button from "@components/Button";

const Projects = () => {
  return (
    <section id="projects">
      <motion.h1
        variants={fadeLeft}
        {...motionStep}
        className="flex items-center gap-2 text-3xl font-semibold text-slate-200 mb-10"
      >
        <span className="text-sky-400 font-mono">04.</span>
        Some Things I’ve Built
        <span className="h-[1px] w-32 bg-slate-700 ml-3 hidden md:inline-block"></span>
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
        <Button sizeClass="px-5 py-2" outlined>
          {" "}
          See More{" "}
        </Button>
      </div>
    </section>
  );
};

export default Projects;
