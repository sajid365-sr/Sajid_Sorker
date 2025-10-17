"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import FeaturedProject from "@components/cards/Project/Featured";
import ProjectCard from "@components/cards/Project/ProjectCard";
import { projects } from "@config/constants";
import SectionHeader from "@components/SectionHeader";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  const filteredProjects =
    filter === "all"
      ? otherProjects
      : otherProjects.filter((p) =>
          p.tech.some((t) => t.toLowerCase().includes(filter.toLowerCase()))
        );

  const filters = ["all", "Next.js", "React", "TypeScript", "AI", "MongoDB"];

  return (
    <section className="min-h-screen section  bg-slate-950 " id="projects">
      <div className=" mx-auto">
        {/* Header */}
        <SectionHeader
          number="03."
          name="Projects"
          description="Some things I've built with passion & dedication"
        />
        {/* Featured Projects */}
        <div className=" mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12 flex items-center gap-3"
          >
            <span className="text-emerald-400 text-2xl">★</span>
            <h2 className="text-2xl font-mono text-emerald-400">
              Featured Projects
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/50 to-transparent ml-4"></div>
          </motion.div>

          <div className="space-y-32">
            {featuredProjects.map((project, i) => (
              <FeaturedProject
                key={i}
                project={project}
                index={i}
                reverse={i % 2 !== 0}
              />
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-cyan-400 text-2xl">◆</span>
              <h2 className="text-2xl font-mono text-cyan-400">
                Other Noteworthy Projects
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent ml-4"></div>
            </div>

            <div className="flex flex-wrap gap-3">
              {filters.map((f) => (
                <motion.button
                  key={f}
                  onClick={() => setFilter(f)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-2.5 rounded-lg font-mono text-sm transition-all duration-300 ${
                    filter === f
                      ? "bg-cyan-500/20 text-cyan-400 border-2 border-cyan-500/40 shadow-lg shadow-cyan-500/10"
                      : "bg-slate-800/50 text-slate-400 border-2 border-slate-700 hover:border-slate-600 hover:text-slate-300"
                  }`}
                >
                  {f === "all" ? "view.all()" : f}
                </motion.button>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-slate-500 font-mono text-sm mt-4"
            >
              <span className="text-slate-600">{"//"} </span>
              Showing {filteredProjects.length} project
              {filteredProjects.length !== 1 ? "s" : ""}
            </motion.p>
          </motion.div>

          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6">
              {filteredProjects.map((project, i) => (
                <ProjectCard key={i} project={project} index={i} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <p className="text-slate-400 font-mono">
                No projects found with this filter. Try another one!
              </p>
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-lg font-mono text-sm overflow-hidden transition-all duration-300 hover:text-slate-900"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>View All Projects</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
            <div className="absolute inset-0 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-slate-500 font-mono text-sm">
            <span className="text-slate-600">{"//"}</span>
            <span className="text-cyan-400">{projects.length}</span> projects
            built •{" "}
            <span className="text-emerald-400">{featuredProjects.length}</span>{" "}
            featured • <span className="text-purple-400">∞</span> more ideas in
            progress
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
