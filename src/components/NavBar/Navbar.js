import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
      <div  className={styles}>
        <ul>
          <li>
            <a href="contact.asp">Contact</a>
          </li>
          <li>
            <a href="about.asp">About</a>
          </li>
          <li>
            <a href="work.asp">Work</a>
          </li>
          <li>
            <a href="default.asp">Home</a>
          </li>
        </ul>
      </div>
  );
};

export default NavBar;
