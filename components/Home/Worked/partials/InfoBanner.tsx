import React from "react";
import { motion } from "framer-motion";

const InfoBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100, rotate: 5 }}
      whileInView={{
        opacity: 1,
        x: 0,
        rotate: 0,
        transition: {
          type: "spring",
          stiffness: 80,
          damping: 15,
          delay: 0.2,
        },
      }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 20px 60px rgba(59, 130, 246, 0.15)",
        transition: { duration: 0.3 },
      }}
      className="mb-10  p-5 w-full lg:w-1/2 bg-gradient-to-r from-blue-500/5 to-purple-500/5 border border-blue-500/20 rounded-lg backdrop-blur-sm"
    >
      <div className="flex items-start gap-3">
        {/* Animated emoji */}
        <motion.span
          className="text-2xl"
          animate={{
            rotate: [0, -10, 10, -10, 0],
            scale: [1, 1.1, 1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          💼
        </motion.span>

        <div className="flex-1">
          {/* Opening bracket with slide in */}
          <motion.h3
            className="text-cyan-400 font-mono text-sm mb-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            const expertise = &#123;
          </motion.h3>

          {/* Content lines with stagger */}
          <div className="ml-4 space-y-1">
            <motion.p
              className="text-slate-300 text-sm leading-relaxed"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <span className="text-purple-400">technical:</span>{" "}
              <motion.span
                className="text-emerald-400"
                whileHover={{ scale: 1.05, color: "#34d399" }}
              >
                &quot;Self-taught MERN Stack Developer&quot;
              </motion.span>
              ,
            </motion.p>

            <motion.p
              className="text-slate-300 text-sm leading-relaxed"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-purple-400">professional:</span>{" "}
              <motion.span
                className="text-emerald-400"
                whileHover={{ scale: 1.05, color: "#34d399" }}
              >
                &quot;Banking & Business Management&quot;
              </motion.span>
              ,
            </motion.p>

            <motion.p
              className="text-slate-300 text-sm leading-relaxed"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <span className="text-purple-400">advantage:</span>{" "}
              <motion.span
                className="text-emerald-400"
                whileHover={{ scale: 1.05, color: "#34d399" }}
              >
                &quot;Unique blend of business acumen + technical skills&quot;
              </motion.span>
            </motion.p>
          </div>

          {/* Closing bracket with slide in */}
          <motion.h3
            className="text-cyan-400 font-mono text-sm mt-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            &#125;;
          </motion.h3>
        </div>
      </div>
    </motion.div>
  );
};

export default InfoBanner;
