import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { Image } from "semantic-ui-react";
import Logo from "../assets/Logo.svg";
import { useEffect } from "react";

const Header = () => {
  const location = useLocation();
  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-button");
    navLinks.forEach((link) =>
      location.pathname.includes(link.id)
        ? link.classList.add("active")
        : link.classList.remove("active")
    );
  });
  return (
    <header className="Header">
      <Image src={Logo} alt="logo" />
      <h1>Aviation Resources</h1>
      <nav>
        <ul>
          <li className="nav-button" id="resources">
            <Link to="/resources">Resources</Link>
          </li>
          <li className="nav-button" id="lessons">
            <Link to="/lessons">Lessons</Link>
          </li>
          <li className="nav-button" id="tests">
            <Link to="/tests">Tests</Link>
          </li>
          <li className="nav-button" id="community">
            <Link to="/community">Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
