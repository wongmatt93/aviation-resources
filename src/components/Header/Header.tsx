import "./Header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Image } from "semantic-ui-react";
import Logo from "../../assets/Logo.svg";
import profilePicture from "../../assets/profile-img.png";
import { useContext, useEffect } from "react";
import AuthContext from "../../Context/AuthContext";
import DropdownNavigation from "./DropdownNavigation";
import NavigationBar from "./NavigationBar";
import ModalNavigation from "./ModalNavigation";
import { FaUserCircle } from "react-icons/fa";

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
      <NavigationBar />
      <ModalNavigation />
      <div className="nav-and-page-info">
        <h2>{location.pathname.toUpperCase().slice(1).replace(/-/g, " ")}</h2>
      </div>

      {/* change what button shows up depending on whether user is signed in */}
      {
        <FaUserCircle
          className="user-icon"
          onClick={
            signedIn ? () => navigate("/user-profile") : () => navigate("/")
          }
        />
      }
    </header>
  );
};

export default Header;
