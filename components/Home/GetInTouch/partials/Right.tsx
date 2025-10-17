import React from "react";
import { motion } from "framer-motion";
import { fadeRight } from "@config/motion";
import EarthCanvas from "components/canvas/Earth";

const Right = () => {
  return (
    <div className="">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="flex items-center gap-4 mx-auto p-6 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-xl"
      >
        <div className="relative">
          <div className="w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
          <div className="absolute inset-0 w-4 h-4 bg-emerald-400 rounded-full animate-ping"></div>
        </div>
        <div>
          <p className="text-emerald-400 font-mono font-semibold">
            Ready to work anywhere in the globe 🚀
          </p>
          <p className="text-slate-400 text-sm">Open to new opportunities</p>
        </div>
      </motion.div>
      <motion.div
        variants={fadeRight}
        className="lg:flex-1  lg:h-[650px] md:h-[550px] h-[400px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default Right;
