"use client";

import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
import { ProjectTypes } from "@config/types/types";
import { motion } from "framer-motion";

interface FeaturedProps extends ProjectTypes {
  secondary?: boolean;
}

const FeaturedProject = ({
  project,
  index,
  reverse = false,
}: {
  project: ProjectTypes;
  index: number;
  reverse?: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className={`relative flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-0 lg:gap-8 items-center`}
    >
      {/* Image Section */}
      <div className="w-full lg:w-3/5 relative group">
        <Link href={project.live} target="_blank" rel="noopener noreferrer">
          <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-800 shadow-2xl">
            <Image
              layout="fill"
              src={`/images/projects/${project.thumbnail}`}
              alt={project.title}
              fill=""
              className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
            />

            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20 group-hover:opacity-0 transition-all duration-500" />
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400/50 rounded-xl transition-all duration-300" />
          </div>

          <div className="absolute -top-3 -left-3 w-8 h-8 border-l-2 border-t-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute -bottom-3 -right-3 w-8 h-8 border-r-2 border-b-2 border-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-purple-500/0 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
        </Link>
      </div>

      {/* Content Section */}
      <div
        className={`w-full lg:w-2/5 ${
          reverse ? "lg:text-right lg:items-end" : "lg:text-left lg:items-start"
        } flex flex-col mt-8 lg:mt-0 z-10`}
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 + 0.2, type: "spring" }}
          className="inline-flex items-center gap-2 mb-3"
        >
          <span className="text-emerald-400 text-xl">★</span>
          <p className="text-emerald-400 font-mono text-sm uppercase tracking-wider">
            Featured Project
          </p>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, x: reverse ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 + 0.3 }}
          className="text-3xl font-bold text-slate-200 mb-6 hover:text-cyan-400 transition-colors cursor-pointer"
        >
          <Link href={project.live} target="_blank" rel="noopener noreferrer">
            {project.title}
          </Link>
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 + 0.4 }}
          className={`relative bg-slate-900/95 backdrop-blur-sm p-6 rounded-lg border border-slate-800 mb-6 shadow-xl hover:border-cyan-400/30 transition-all duration-300 ${
            reverse ? "lg:-ml-16" : "lg:-mr-16"
          }`}
        >
          <p className="text-slate-300 leading-relaxed text-base">
            {project.description}
          </p>
          <div
            className={`absolute ${
              reverse ? "-right-2" : "-left-2"
            } -top-2 w-4 h-4 border-t-2 ${
              reverse ? "border-r-2" : "border-l-2"
            } border-cyan-400/50`}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 + 0.5 }}
          className={`flex flex-wrap gap-3 mb-6 ${
            reverse ? "lg:justify-end" : "lg:justify-start"
          }`}
        >
          {project.tech.map((tech, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 + 0.6 + i * 0.05 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-slate-400 font-mono text-sm hover:text-cyan-400 transition-colors cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 + 0.6 }}
          className={`flex gap-5 ${
            reverse ? "lg:justify-end" : "lg:justify-start"
          }`}
        >
          {project.code && (
            <Link
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link relative"
            >
              <div className="relative text-slate-400 hover:text-cyan-400 transition-colors">
                <svg
                  className="w-7 h-7 transition-transform group-hover/link:scale-110"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <div className="absolute -inset-2 bg-cyan-400/10 rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity blur-sm" />
              </div>
            </Link>
          )}

          {project.live && (
            <Link
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link relative"
            >
              <div className="relative text-slate-400 hover:text-cyan-400 transition-colors">
                <svg
                  className="w-7 h-7 transition-transform group-hover/link:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                <div className="absolute -inset-2 bg-cyan-400/10 rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity blur-sm" />
              </div>
            </Link>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FeaturedProject;
