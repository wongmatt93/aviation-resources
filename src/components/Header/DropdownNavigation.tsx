import "./DropdownNavigation.css";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { Image } from "semantic-ui-react";
import Logo from "../../assets/Logo.svg";

const DropdownNavigation = () => {
  return (
    <Dropdown autoClose="outside">
      <Dropdown.Toggle
        variant="success"
        id="dropdown-custom-1"
        className="menu-button"
      >
        <Image src={Logo} alt="logo" />
      </Dropdown.Toggle>

      <Dropdown.Menu className="nav-menu">
        <Dropdown.Header className="nav-label">App Menu</Dropdown.Header>
        <Dropdown.Item as={Link} to="/" className="nav-link">
          Resources
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/lessons" className="nav-link">
          Lessons
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/tests" className="nav-link">
          Tests
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/community" className="nav-link">
          Community
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownNavigation;
