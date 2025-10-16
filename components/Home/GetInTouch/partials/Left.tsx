"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

const Left = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Replace these with your actual EmailJS credentials from dashboard
  const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID!;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID!;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY!;

  const handleSubmit = async () => {
    console.log(formData);
    // Validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    setStatus("loading");

    try {
      // Send email using EmailJS with exact template variable names
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name, // Sender's name
          from_email: formData.email, // Sender's email (for replying)
          subject: formData.subject, // Email subject
          message: formData.message, // Message content
        },
        PUBLIC_KEY
      );

      if (result.status === 200) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
    >
      <div
        ref={formRef}
        className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 hover:border-cyan-400/30 transition-all duration-300"
      >
        <h3 className="text-xl font-mono text-cyan-400 mb-6 flex items-center gap-2">
          <span className="text-cyan-400">►</span>
          Send Message
        </h3>

        <div className="space-y-6">
          {/* Name Field */}
          <div className="relative">
            <label className="block text-sm font-mono text-slate-400 mb-2">
              <span className="text-purple-400">const</span> name ={" "}
              <span className="text-emerald-400">&quot;</span>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField(null)}
              className="w-full bg-slate-800/50 border-2 border-slate-700 rounded-lg px-4 py-3 text-slate-200 font-mono focus:border-cyan-400 focus:outline-none transition-all duration-300"
              placeholder="Your Name"
            />
            {focusedField === "name" && (
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400"
              />
            )}
          </div>

          {/* Email Field */}
          <div className="relative">
            <label className="block text-sm font-mono text-slate-400 mb-2">
              <span className="text-purple-400">const</span> email ={" "}
              <span className="text-emerald-400">"</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              className="w-full bg-slate-800/50 border-2 border-slate-700 rounded-lg px-4 py-3 text-slate-200 font-mono focus:border-cyan-400 focus:outline-none transition-all duration-300"
              placeholder="your.email@example.com"
            />
            {focusedField === "email" && (
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400"
              />
            )}
          </div>

          {/* Subject Field */}
          <div className="relative">
            <label className="block text-sm font-mono text-slate-400 mb-2">
              <span className="text-purple-400">const</span> subject ={" "}
              <span className="text-emerald-400">"</span>
            </label>
            <input
              type="text"
              value={formData.subject}
              onChange={(e) => handleChange("subject", e.target.value)}
              onFocus={() => setFocusedField("subject")}
              onBlur={() => setFocusedField(null)}
              className="w-full bg-slate-800/50 border-2 border-slate-700 rounded-lg px-4 py-3 text-slate-200 font-mono focus:border-cyan-400 focus:outline-none transition-all duration-300"
              placeholder="Subject"
            />
            {focusedField === "subject" && (
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400"
              />
            )}
          </div>

          {/* Message Field */}
          <div className="relative">
            <label className="block text-sm font-mono text-slate-400 mb-2">
              <span className="text-purple-400">const</span> message ={" "}
              <span className="text-emerald-400">"</span>
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
              rows={6}
              className="w-full bg-slate-800/50 border-2 border-slate-700 rounded-lg px-4 py-3 text-slate-200 font-mono focus:border-cyan-400 focus:outline-none transition-all duration-300 resize-none"
              placeholder="Your message here..."
            />
            {focusedField === "message" && (
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400"
              />
            )}
          </div>

          {/* Submit Button */}
          <motion.button
            onClick={handleSubmit}
            disabled={status === "loading"}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-mono font-semibold rounded-lg overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {status === "loading" ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </>
              ) : status === "success" ? (
                <>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Message Sent!
                </>
              ) : status === "error" ? (
                <>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Failed. Try Again
                </>
              ) : (
                <>
                  Send Message
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </>
              )}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </div>

        {/* Status Messages */}
        <AnimatePresence>
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg"
            >
              <p className="text-emerald-400 font-mono text-sm text-center">
                ✓ Message sent successfully! I'll get back to you soon.
              </p>
            </motion.div>
          )}
          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-lg"
            >
              <p className="text-red-400 font-mono text-sm text-center">
                ✗ Failed to send. Please fill all fields or email directly.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Left;
