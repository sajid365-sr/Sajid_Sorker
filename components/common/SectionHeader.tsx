import React from "react";
import { motion } from "framer-motion";

interface Props {
  number: string;
  name: string;
  description: string;
}

const SectionHeader: React.FC<Props> = ({ number, name, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <h1 className="flex items-center gap-3 text-3xl md:text-4xl font-semibold text-slate-200 mb-4">
        <span className="text-cyan-400 font-mono text-3xl">{number}</span>
        <span className="font-mono">
          <span className="text-purple-400">&lt;</span>
          {name}
          <span className="text-purple-400"> /&gt;</span>
        </span>
        <span className="h-[1px] flex-1 bg-gradient-to-r from-slate-700 to-transparent ml-4"></span>
      </h1>
      <p className="text-slate-400 ml-14 font-mono text-sm">
        <span className="text-slate-600">{"//"} </span>
        {description}
      </p>
    </motion.div>
  );
};

export default SectionHeader;
