import { Link } from "react-router-dom";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <div className="NavigationBar">
      {" "}
      <nav className="desktop-nav grid-container">
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
    </div>
  );
};

export default NavigationBar;
