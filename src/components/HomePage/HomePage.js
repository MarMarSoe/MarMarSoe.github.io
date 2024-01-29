import Content from "./Content";
import NavBar from "../NavBar/Navbar";
import Skills from "./Skills";
import Projects from "./Projects";
import ContactInfo from "./ContactInfo";
import Footer from "../Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Content />
      <Skills />
      <Projects />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default HomePage;
