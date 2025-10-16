"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/legacy/image";
//

import { ProjectTypes } from "@config/types/types";

const ProjectCard = ({
  project,
  index,
}: {
  project: ProjectTypes;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-400/30 transition-all duration-300 flex flex-col h-full"
    >
      <Link href={project.live} target="_blank" rel="noopener noreferrer">
        <div className="relative aspect-video overflow-hidden bg-slate-800">
          <Image
            layout="fill"
            src={`/images/projects/${project.thumbnail}`}
            alt={project.title}
            
            className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-70 group-hover:opacity-40 transition-all duration-300" />
          <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-all duration-300" />
        </div>
      </Link>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-4">
          <motion.div
            animate={{ rotate: isHovered ? 15 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg
              className="w-10 h-10 text-cyan-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
              />
            </svg>
          </motion.div>

          <div className="flex gap-3">
            {project.code && (
              <Link
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </Link>
            )}

            {project.live && (
              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
              >
                <svg
                  className="w-5 h-5"
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
              </Link>
            )}
          </div>
        </div>

        <Link href={project.live} target="_blank" rel="noopener noreferrer">
          <h3 className="text-xl font-semibold text-slate-200 mb-3 group-hover:text-cyan-400 transition-colors cursor-pointer">
            {project.title}
          </h3>
        </Link>

        <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.slice(0, 3).map((tech, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + i * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-3 py-1 bg-slate-800/80 text-slate-400 text-xs font-mono rounded hover:bg-cyan-400/10 hover:text-cyan-400 transition-all duration-300 cursor-default"
            >
              {tech}
            </motion.span>
          ))}
          {project.tech.length > 3 && (
            <span className="px-3 py-1 text-slate-500 text-xs font-mono flex items-center">
              +{project.tech.length - 3} more
            </span>
          )}
        </div>

        <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300" />
        <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300" />
      </div>

      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-500 -z-10" />
    </motion.div>
  );
};

export default ProjectCard;
