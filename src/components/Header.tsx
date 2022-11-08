import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <h1>Aviation Resources</h1>
      <nav>
        <ul>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
          <li>
            <Link to="/lessons">Lessons</Link>
          </li>
          <li>
            <Link to="/tests">Tests</Link>
          </li>
          <li>
            <Link to="/community">Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
