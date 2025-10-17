import React from "react";
import { motion } from "framer-motion";

const InfoBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mb-10 p-5 w-full lg:w-1/2 bg-gradient-to-r from-blue-500/5 to-purple-500/5 border border-blue-500/20 rounded-lg backdrop-blur-sm"
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl">💼</span>
        <div>
          <h3 className="text-cyan-400 font-mono text-sm mb-2">
            const expertise = &#123;
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed ml-4">
            <span className="text-purple-400">technical:</span>{" "}
            <span className="text-emerald-400">
              &quot;Self-taught MERN Stack Developer&quot;
            </span>
            ,<br />
            <span className="text-purple-400">professional:</span>{" "}
            <span className="text-emerald-400">
              &quot;Banking & Business Management&quot;
            </span>
            ,<br />
            <span className="text-purple-400">advantage:</span>{" "}
            <span className="text-emerald-400">
              &quot;Unique blend of business acumen + technical skills&quot;
            </span>
          </p>
          <h3 className="text-cyan-400 font-mono text-sm mt-2">&#125;;</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default InfoBanner;
