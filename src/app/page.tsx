"use client";

import React from "react";
//
import Hero from "src/sections/Home/Hero";
import About from "src/sections/Home/About";
import Worked from "src/sections/Home/Worked";
import Projects from "src/sections/Home/Projects";
import GetInTouch from "src/sections/Home/GetInTouch";
import Footer from "@widgets/Footer";

const page = () => {
  return (
    <div id="__home">
      <Hero />
      <About />
      <Worked />
      <Projects />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default page;
