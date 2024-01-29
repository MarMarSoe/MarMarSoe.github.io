import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="container  flex flex-row justify-between mx-auto">
      <div className="p-2 flex justify-center items-center font-bold">
        MAR <sup className="font-bold text-orange-600">2</sup>SOE
      </div>
      <div className="p-2 flex items-center text-center  font-light">
        <ul className="list-none">
          <li className="float-right">
            <Link
              to="/contact"
              className="text-center block p-5 hover:text-orange-500"
            >
              Contact
            </Link>
          </li>
          <li className="float-right">
            <Link
              to="/about"
              className="text-center block p-5 hover:text-orange-500"
            >
              About
            </Link>
          </li>
          <li className="float-right">
            <Link
              to="/"
              className="text-center block p-5 hover:text-orange-500"
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
