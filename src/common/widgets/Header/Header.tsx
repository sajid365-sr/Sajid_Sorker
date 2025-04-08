"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
//
import { navData } from "@config/constants";
import AnimatedTextCharacter from "@components/motion/AnimatedTextCherecter";
import Button from "@components/Button";

const Header = () => {
  // motion
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <header className="top-0 w-full z-50 relative py-[30px] max-w-[94%] mx-auto md:block hidden right-0 left-0">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex">
          <AnimatedTextCharacter
            text="S"
            className="font-logo font-light text-5xl mt-2 text-sky-400"
          />
          <AnimatedTextCharacter
            text="D"
            className="text-6xl text-gray-200 -ml-5 -z-10 font-extralight"
          />
        </Link>

        <motion.ul
          variants={container}
          initial="hidden"
          animate="visible"
          className="__navright"
        >
          {navData.map((e: string, i: number) => (
            <motion.a
              key={i}
              variants={child}
              href={`#${e.toLocaleLowerCase()}`}
            >
              <li>
                {" "}
                <span>0{i + 1}.</span> {e}{" "}
              </li>
            </motion.a>
          ))}{" "}
          <a href="sajid-sorker-resume.pdf" download>
            <Button>Resume</Button>
          </a>{" "}
        </motion.ul>
      </div>
    </header>
  );
};

export default Header;
