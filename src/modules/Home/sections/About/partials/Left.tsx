import React from "react";
import { motion } from "framer-motion";
import { IoMdArrowDropright } from "react-icons/io";
//
import { skills } from "@modules/Home/config/constanst";
import { fadeTop, motionStep } from "@config/motion";

const Left = () => {
  return (
    <motion.div variants={fadeTop} {...motionStep} className="col-span-3">
      <div className="space-y-4 mt-7 text-slate-400">
        <p>
          In a world where technology reigns supreme, a visionary stands tall. I
          am Sajid Sorker, a master of the MERN stack and an artist of HTML,
          CSS, and JavaScript. Armed with the power of React and the elegance of
          Bootstrap and Tailwind, I forge ahead on my journey to unlock the full
          potential of web development.
        </p>

        <p>
          But my quest is not limited to mere web development. No, my sights are
          set on the horizon of tomorrow&apos;s technology, where the rain of
          innovation falls like a storm. Blockchain, Web 3.0, Metaverse, NFTs -
          these are the names that light my fire, driving me to pursue the
          future with fervor.
        </p>

        <p>
          I am but a humble traveler, taking my first steps on a journey that
          may someday lead me to the forefront of technological evolution. But
          for now, I stand tall, my passion for technology burning brighter than
          ever. I invite you to join me on this epic journey and to share in the
          rain of technology that will bless us all.
        </p>

        <div className="__skills md:pr-56">
          <ul className="grid grid-cols-2 space-y-2 mt-20">
            {skills.map((e: string, i: number) => (
              <li
                key={i}
                className="gap-1 flex items-center transition-all duration-300 hover:translate-x-[7px] select-none hover:text-sky-400"
              >
                {" "}
                <IoMdArrowDropright className="text-sky-400 text-xl" /> {e}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Left;
