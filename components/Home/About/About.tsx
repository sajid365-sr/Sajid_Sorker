"use client";

import SectionHeader from "@components/SectionHeader";
import Left from "./partials/Left";
import Right from "./partials/Right";

const About = () => {
  return (
    <section id="about" className="min-h-screen section  bg-slate-950 ">
      <div className=" mx-auto">
        {/* Header */}

        <SectionHeader
          number="01."
          name="About Me"
          description="Self-taught developer with a passion for creating"
        />

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left Side - Content */}

          <Left />

          {/* Right Side - Image & Stats */}
          <Right />
        </div>
      </div>
    </section>
  );
};

export default About;
