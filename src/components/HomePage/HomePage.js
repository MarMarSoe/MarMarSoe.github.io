import Content from "./Content";
import NavBar from "../NavBar/Navbar";
import Skills from "./Skills";
import Projects from "./Projects";
import ContactInfo from "./ContactInfo";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Content />
      <Skills />
      <Projects />
      <ContactInfo />
    </div>
  );
};

export default HomePage;
