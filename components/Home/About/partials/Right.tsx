import { motion } from "framer-motion";
import React from "react";
import { stats } from "@config/constants";
import Image from "next/image";

const Right = () => {
  return (
    <div className=" col-span-3 lg:col-span-1  space-y-8">
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="relative"
      >
        <div className="relative group w-full max-w-[350px] mx-auto">
          {/* Main Image Container */}
          <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden">
            <Image
              fill={true}
              src="/images/model/sajid-sorker.jpg"
              alt="Sajid Sorker"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/30 to-transparent group-hover:from-cyan-500/10 transition-all duration-300"></div>

            {/* Border Frame */}
            <div className="absolute inset-0 border-2 border-cyan-400/0 group-hover:border-cyan-400/50 rounded-xl transition-all duration-300"></div>
          </div>

          {/* Decorative Background */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 translate-x-4 translate-y-4"></div>

          {/* Corner Accents */}
          <div className="absolute -top-3 -left-3 w-6 h-6 border-l-2 border-t-2 border-cyan-400"></div>
          <div className="absolute -bottom-3 -right-3 w-6 h-6 border-r-2 border-b-2 border-purple-400"></div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="grid grid-cols-2 gap-4"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 + i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-cyan-400/30 transition-all duration-300 cursor-default"
          >
            <div className="text-2xl mb-2">{stat.icon}</div>
            <div className="text-2xl font-bold text-cyan-400 font-mono mb-1">
              {stat.value}
            </div>
            <div className="text-xs text-slate-400 font-mono">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Status Badge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="flex items-center gap-3 p-4 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-lg"
      >
        <div className="relative">
          <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
          <div className="absolute inset-0 w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
        </div>
        <div>
          <p className="text-emerald-400 font-mono text-sm font-semibold">
            Available for hire
          </p>
          <p className="text-slate-400 text-xs font-mono">
            Open to new opportunities
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Right;
