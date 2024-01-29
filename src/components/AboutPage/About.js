import Footer from "../Footer/Footer";
import NavBar from "../NavBar/Navbar";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Experiences from "./Experiences";
import Language from "./Language";

const About = () => {
  return (
    <div>
      <NavBar />
      <AboutMe />
      <Experiences />
      <Education />
      <Language />
      <Footer />
    </div>
  );
};

export default About;
