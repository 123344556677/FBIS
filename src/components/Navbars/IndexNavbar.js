import React, { useState } from "react";
import logo from "../../assets/img/logo-grey.png";
import logoOne from "../../assets/img/logo-white.png";
import "./Navbar.css";
// reactstrap components
import {
  Navbar,
  Container,
  Collapse,
  Nav,
  NavItem,
  NavbarToggler,
} from "reactstrap";
import { NavLink, useLocation } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";

export default function IndexNavbar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [checkLogo, setCheckLogo] = useState(true);
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <Navbar
      color-on-scroll="100"
      expand="lg"
      onWheel={() => setCheckLogo(false)}
      style={{ background: props.scrollCheck ? "white" : "transparent" }}
    >
      <Container>
        <div className="toggle-icon">
          <CiMenuFries className={props.scrollCheck ? "nav-icon-one" : "nav-icon"}onClick={toggle} />
        </div>
        <div className="navbar-translate" onWheel={() => setCheckLogo(false)}>
          <img
            src={props.scrollCheck ? logo : logoOne}
            alt="logo"
            className={props.scrollCheck ? "logoOne" : "logoTwo"}
          />
        </div>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink
                exact
                to="/"
                className={`nav-link ${activeLink === "/" ? "active" : ""}`}
                onClick={() => handleSetActiveLink("/")}
                style={{ color: props.scrollCheck && "black" }}
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/about"
                className={`nav-link ${
                  activeLink === "/about" ? "active" : ""
                }`}
                onClick={() => handleSetActiveLink("/about")}
                style={{ color: props.scrollCheck && "black" }}
              >
                About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/projects"
                className={`nav-link ${
                  activeLink === "/projects" ? "active" : ""
                }`}
                onClick={() => handleSetActiveLink("/projects")}
                style={{ color: props.scrollCheck && "black" }}
              >
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/services"
                className={`nav-link ${
                  activeLink === "/services" ? "active" : ""
                }`}
                onClick={() => handleSetActiveLink("/services")}
                style={{ color: props.scrollCheck && "black" }}
              >
                Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/testimonials"
                className={`nav-link ${
                  activeLink === "/testimonials" ? "active" : ""
                }`}
                onClick={() => handleSetActiveLink("/testimonials")}
                style={{ color: props.scrollCheck && "black" }}
              >
                Testimonials
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/contact"
                className={`nav-link ${
                  activeLink === "/contact" ? "active" : ""
                }`}
                onClick={() => handleSetActiveLink("/contact")}
                style={{ color: props.scrollCheck && "black" }}
              >
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
