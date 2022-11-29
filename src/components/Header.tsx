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
          <Link to="/resources">
            <li className="nav-button" id="resources">
              Resources
            </li>
          </Link>
          <Link to="/lessons">
            <li className="nav-button" id="lessons">
              Lessons
            </li>
          </Link>
          <Link to="/tests">
            <li className="nav-button" id="tests">
              Tests
            </li>
          </Link>
          <Link to="/community">
            <li className="nav-button" id="community">
              Community
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
