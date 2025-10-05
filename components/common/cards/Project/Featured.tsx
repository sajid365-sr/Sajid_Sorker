"use client";

import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import { ProjectTypes } from "shared/config/types";

interface FeaturedProps extends ProjectTypes {
  secondary?: boolean;
}

const Featured = ({
  secondary,
  live,
  thumbnail,
  code,
  title,
  description,
  tech,
}: FeaturedProps) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-6 mb-12 ${
        secondary ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <Link
        href={live || "#"}
        target="_blank"
        className="w-full md:w-1/2 relative h-64 md:h-80 rounded-xl overflow-hidden group"
      >
        <Image
          src={`/images/projects/${thumbnail}`}
          blurDataURL={`/images/projects/${thumbnail}`}
          layout="fill"
          objectFit="cover"
          alt={title}
          className="transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:-rotate-2"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:opacity-0 transition-opacity rounded-xl" />
      </Link>

      {/* Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-between p-4 md:p-6">
        <div>
          <p className="text-sky-400 mb-2">Featured</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-200 mb-4">
            {title}
          </h2>
          <p className="text-slate-300 mb-4">{description}</p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((t, i) => (
              <span
                key={i}
                className="text-slate-400 text-sm bg-slate-800 px-2 py-1 rounded"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-4">
          {live && (
            <Link
              href={live}
              target="_blank"
              className="text-2xl text-sky-400 hover:scale-110 transition-transform"
            >
              <HiOutlineExternalLink />
            </Link>
          )}
          {code && (
            <Link
              href={code}
              target="_blank"
              className="text-2xl text-sky-400 hover:text-sky-400 hover:scale-110 transition-transform"
            >
              <FiGithub />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Featured;
