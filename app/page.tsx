import About from "components/Home/About";
import HireMe from "components/Home/HireMe";
import GetInTouch from "components/Home/GetInTouch";
import Hero from "components/Home/Hero";
import Projects from "components/Home/Projects";
import Worked from "components/Home/Worked";
import StarsCanvas from "components/canvas/Stars";
import HeroSection from "components/Home/Hero/HeroSection";

const HomePage = () => {
  return (
    <div>
      {/* <Hero /> */}
      <HeroSection />
      <About />
      <HireMe />
      <Worked />
      <Projects />
      <div className="relative z-0">
        <GetInTouch />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default HomePage;
