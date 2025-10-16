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
          {/* Left Side - Contact Info & Social */}
          {/* <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 hover:border-cyan-400/30 transition-all duration-300">
              <h3 className="text-xl font-mono text-cyan-400 mb-6 flex items-center gap-2">
                <span className="text-cyan-400">►</span>
                Quick Contact
              </h3>

              <div className="space-y-4">
                <motion.a
                  href="mailto:sajid.sorker@sajidsorker.com"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-mono">Email</p>
                    <p className="font-mono text-sm">
                      sajid.sorker@sajidsorker.com
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/sajid365-sr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"
                      />
                      <circle
                        cx="4"
                        cy="4"
                        r="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-mono">LinkedIn</p>
                    <p className="font-mono text-sm">@sajid365-sr</p>
                  </div>
                </motion.a>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 hover:border-purple-400/30 transition-all duration-300">
              <h3 className="text-xl font-mono text-purple-400 mb-6 flex items-center gap-2">
                <span className="text-purple-400">►</span>
                Connect With Me
              </h3>

              <div className="flex flex-wrap gap-4">
                {socialData.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="w-14 h-14 rounded-lg bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300"
                    title={social.name}
                  >
                    {<social.icon />}
                    
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4 p-6 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-xl"
            >
              <div className="relative">
                <div className="w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-4 h-4 bg-emerald-400 rounded-full animate-ping"></div>
              </div>
              <div>
                <p className="text-emerald-400 font-mono font-semibold">
                  Available for hire
                </p>
                <p className="text-slate-400 text-sm">
                  Open to new opportunities
                </p>
              </div>
            </motion.div>
          </motion.div> */}

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
