import About from "components/Home/About";
import GetInTouch from "components/Home/GetInTouch";
import Hero from "components/Home/Hero";
import Projects from "components/Home/Projects";
import TechStack from "components/Home/TechStack";
import Worked from "components/Home/Worked";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <TechStack />
      <Worked />
      <Projects />
      <GetInTouch />
    </div>
  );
};

export default HomePage;
