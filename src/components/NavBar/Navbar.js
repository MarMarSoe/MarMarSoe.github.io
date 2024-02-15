import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="container  flex flex-row justify-between mx-auto">
      <div className="p-2 flex justify-center items-center font-semibold text-2xl">
        MAR <sup className="font-bold text-orange-600">2</sup>SOE
      </div>
      <div className="p-2 flex items-center text-center  font-light">
        <ul className="list-none">
          <li className="float-right">
            <Link
              to="/contact"
              className="text-center block p-5 hover:text-orange-500 text-xl"
            >
              Contact
            </Link>
          </li>
          <li className="float-right">
            <Link
              to="/about"
              className="text-center block p-5 hover:text-orange-500 text-xl"
            >
              About
            </Link>
          </li>
          <li className="float-right">
            <Link
              to="/"
              className="text-center block p-5 hover:text-orange-500 text-xl"
            >
              Home
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
