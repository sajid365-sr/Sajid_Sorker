"use client";

import SectionHeader from "@components/SectionHeader";
import { motion } from "framer-motion";

import Left from "./partials/Left";
import Right from "./partials/Right";

const GetInTouch = () => {
  return (
    <section id="contact" className="min-h-screen section">
      <div className="mx-auto">
        {/* Header */}
        <SectionHeader
          number="04."
          name="Get In Touch"
          description="Let's work together"
        />

        <div className="lg:flex-row flex-col-reverse flex gap-10 overflow-hidden">
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
