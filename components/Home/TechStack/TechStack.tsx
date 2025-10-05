"use client";

import { techStack } from "@config/constants";
import { fadeLeft, motionStep } from "@config/motion";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPrisma,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiFramer,
  SiFirebase,
  SiFigma,
  SiVisualstudiocode,
} from "react-icons/si";

// const techStack = {
//   Frontend: [
//     { name: "React", icon: <SiReact className="text-sky-500" /> },
//     { name: "Next.js", icon: <SiNextdotjs className="text-gray-700" /> },
//     { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
//     { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
//     { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
//   ],
//   Backend: [
//     { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
//     { name: "Express.js", icon: <SiExpress className="text-gray-700" /> },
//     { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
//     { name: "Prisma", icon: <SiPrisma className="text-indigo-600" /> },
//   ],
//   Tools: [
//     { name: "Git", icon: <SiGit className="text-orange-500" /> },
//     { name: "GitHub", icon: <SiGithub className="text-gray-700" /> },
//     { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
//     { name: "VS Code", icon: <SiVisualstudiocode className="text-blue-500" /> },
//     { name: "Vercel", icon: <SiVercel className="text-gray-700" /> },
//   ],
//   Others: [
//     { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> },
//     { name: "Firebase", icon: <SiFirebase className="text-amber-500" /> },
//     { name: "Figma", icon: <SiFigma className="text-fuchsia-500" /> },
//   ],
// };

const TechStack = () => {
  return (
    <section id="tech" className="relative w-full py-24 ">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h1
          variants={fadeLeft}
          {...motionStep}
          className="flex items-center gap-2 text-3xl font-semibold text-slate-200 mb-16"
        >
          <span className="text-sky-400 font-mono">02.</span>
          Tech Stack
          <span className="h-[1px] w-32 bg-slate-700 ml-3 hidden md:inline-block"></span>
        </motion.h1>

        {/* Tech Groups */}
        <div className="space-y-16">
          {Object.entries(techStack).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              viewport={{ once: true }}
              className="text-left"
            >
              <h3 className="text-xl font-semibold text-sky-500 mb-8 capitalize text-center">
                {category}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {items.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <motion.div
                      key={tech.name}
                      whileHover={{ scale: 1.05, y: -4 }}
                      className="group cursor-pointer flex flex-col items-center justify-center p-6 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-100 hover:border-sky-400"
                    >
                      <div
                        className={`text-4xl mb-3 group-hover:scale-105 transition-transform duration-100 ${tech.color}`}
                      >
                        <Icon />
                      </div>
                      <span className="text-sm font-medium text-gray-400 group-hover:text-sky-400 transition-colors">
                        {tech.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
