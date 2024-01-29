import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import About from "./components/AboutPage/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Contact from "./components/ContactPage/Contact";

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
  );
}

export default App;
