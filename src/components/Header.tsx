import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <h1>Aviation Resources</h1>
      <nav>
        <ul>
          <li className="nav-button">
            <Link to="/resources">Resources</Link>
          </li>
          <li className="nav-button">
            <Link to="/lessons">Lessons</Link>
          </li>
          <li className="nav-button">
            <Link to="/tests">Tests</Link>
          </li>
          <li className="nav-button">
            <Link to="/community">Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
