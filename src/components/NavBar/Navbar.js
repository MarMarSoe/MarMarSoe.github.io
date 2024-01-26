import styles from "./NavBar.module.css";
import About from "../AboutPage/About";
import { Link } from "@mui/material";

const NavBar = () => {
  return (
    <div className={`${styles} flex flex-row justify-between`}>
      <div className="p-5 text-center w-[200px] font-bold">MAR MAR SOE</div>
      <div className="p-5 flex items-center text-center w-[400px] font-light">
        <ul>
          <li>
            <a href="contact.asp" className="self-center hover:text-orange-500">
              Contact
            </a>
          </li>
          <li>
            <a href="about.asp" className="self-center hover:text-orange-500">
              About
            </a>
          </li>
          <li>
            <a href="work.asp" className=" hover:text-orange-500">
              Work
            </a>
          </li>
          <li>
            <a href="/" className=" hover:text-orange-500">
              Home
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
