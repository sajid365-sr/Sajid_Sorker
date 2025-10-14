import About from "components/Home/About";
import HireMe from "components/Home/HireMe";
import GetInTouch from "components/Home/GetInTouch";
import Hero from "components/Home/Hero";
import Projects from "components/Home/Projects";
import Worked from "components/Home/Worked";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <HireMe />
      <Worked />
      <Projects />
      <GetInTouch />
    </div>
  );
};

export default HomePage;
