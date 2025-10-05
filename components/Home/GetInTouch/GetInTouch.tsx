"use client";
import Button from "@components/Button";
import { socialData } from "@config/constants";
import { SocialTypes } from "@config/types";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { fadeLeft, motionStep, fadeTop } from "@config/motion";
//

const GetInTouch = () => {
  return (
    <section id="contact" className="text-center my-4">
      <motion.h1
        variants={fadeTop}
        {...motionStep}
        className="flex items-center justify-center gap-2 text-3xl font-semibold text-slate-200 mb-10"
      >
        <span className="text-sky-400 font-mono">05.</span>
        What next?
      </motion.h1>

      <h1 className="font-medium text-slate-300 text-2xl text-center mt-5">
        {" "}
        Get In Touch{" "}
      </h1>

      <p className="text-slate-400 max-w-[600px] mx-auto my-3 mb-10 text-xl">
        Actively seeking new opportunities! I’m always open to exciting roles
        and collaborations. If you have an opportunity, a question, or just want
        to connect, feel free to reach out—I’d be happy to chat!
      </p>

      <Button
        sizeClass="px-5 py-2"
        href="mailto:sajid.sorker@sajidsorker.com"
        outlined
      >
        {" "}
        Say Hello{" "}
      </Button>
      {/* Social Media */}
      <ul className="space-x-5 flex flex-row mt-10 justify-center md:hidden">
        {socialData.map((e: SocialTypes, i: number) => (
          <li className="" key={i}>
            <Link
              href={e.url}
              target="_blank"
              className="text-[22px] text-slate-400 hover:text-sky-400 cursor-pointer transition-all duration-300 hover:translate-y-[-10px]"
            >
              {<e.icon />}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default GetInTouch;
