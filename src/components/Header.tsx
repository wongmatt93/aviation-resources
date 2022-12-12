import "./Header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Image } from "semantic-ui-react";
import Logo from "../assets/Logo.svg";
import profilePicture from "../assets/profile-img.png";
import { useContext, useEffect } from "react";
import AuthContext from "../Context/AuthContext";
import DropdownNavigation from "./User/DropdownNavigation";

const Header = () => {
  const { signedIn } = useContext(AuthContext);
  const navigate = useNavigate();
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
      <Image src={Logo} alt="logo" className="logo" />
      <h1 className="title-text">Aviation Resources</h1>
      <nav className="desktop-nav">
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
      <div className="nav-and-page-info">
        <DropdownNavigation />
        <h2>{location.pathname.toUpperCase().slice(1)}</h2>
      </div>

      {/* change what button shows up depending on whether user is signed in */}
      {
        <Image
          className="user-picture"
          alt="user profile"
          src={profilePicture}
          onClick={
            signedIn ? () => navigate("/user-profile") : () => navigate("/")
          }
        />
      }
    </header>
  );
};

export default Header;
