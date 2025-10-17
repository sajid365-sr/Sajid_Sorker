"use client";

import { motion } from "framer-motion";

import Left from "./partials/Left";
import Right from "./partials/Right";

const GetInTouch = () => {
  return (
    <section
      id="contact"
      className="min-h-screen  bg-slate-950 py-20 px-6 z-[1]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="text-cyan-400 font-mono text-3xl">04.</span>
          </motion.div>

          <h2 className="text-slate-400 font-mono text-lg mb-4">
            <span className="text-slate-600">{"//"} </span>What&apos;s Next?
          </h2>

          <h1 className="font-mono text-5xl md:text-6xl font-bold mb-6">
            <span className="text-purple-400">&lt;</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Get In Touch
            </span>
            <span className="text-purple-400"> /&gt;</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Actively seeking new opportunities! I&apos;m always open to exciting
            roles and collaborations. If you have an opportunity, a question, or
            just want to connect, feel free to reach out—I&apos;d be happy to
            chat!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Form */}
          <Left />

          {/* Right Side - Earth */}

          <Right />
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
