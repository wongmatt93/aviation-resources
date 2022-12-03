import "./Header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Image } from "semantic-ui-react";
import Logo from "../assets/Logo.svg";
import { useContext, useEffect } from "react";
import AuthContext from "../Context/AuthContext";
import LoginModal from "./User/LoginModal";

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

      {/* change what button shows up depending on whether user is signed in */}
      {signedIn ? (
        <button onClick={() => navigate("/user-profile")}>Profile</button>
      ) : (
        <LoginModal />
      )}
    </header>
  );
};

export default Header;
