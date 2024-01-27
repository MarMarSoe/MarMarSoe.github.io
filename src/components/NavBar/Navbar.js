import About from "../AboutPage/About";
import { Link } from "@mui/material";

const NavBar = () => {
  return (
    <div className="container  flex flex-row justify-between mx-auto">
      <div className="p-2 flex justify-center items-center font-bold">
        MAR <sup className="font-bold text-orange-600">2</sup>SOE
      </div>
      <div className="p-2 flex items-center text-center  font-light">
        <ul className="list-none">
          <li className="float-right">
            <a
              href="contact.asp"
              className="text-center block p-5 hover:text-orange-500"
            >
              Contact
            </a>
          </li>
          <li className="float-right">
            <a
              href="about.asp"
              className="text-center block p-5 hover:text-orange-500"
            >
              About
            </a>
          </li>
          <li className="float-right">
            <a
              href="work.asp"
              className="text-center block p-5 hover:text-orange-500"
            >
              Work
            </a>
          </li>
          <li className="float-right">
            <a href="/" className="text-center block p-5 hover:text-orange-500">
              Home
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
