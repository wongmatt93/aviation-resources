import "./DropdownNavigation.css";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Link } from "react-router-dom";
import { Image } from "semantic-ui-react";
import Logo from "../../assets/Logo.svg";

const DropdownNavigation = () => {
  return (
    <>
      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle id="dropdown-custom-1" className="menu-button">
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
      </Dropdown>{" "}
    </>
  );
};

export default DropdownNavigation;
