<<<<<<< HEAD
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import icon from "./logo.svg";

export default function Header() {
    return (
        <Navbar expand="lg" className="w-100 nav-background-color border-black border-bottom">
            <Navbar.Brand as={Link} to="/">
                <img id="image-icon" src={icon} alt="Swiss Icon" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
                <Nav className="me-auto justify-content-evenly w-100">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/drinks">Drinks</Nav.Link>
                    <Nav.Link as={Link} to="/about-us">About us</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Cgontact us...</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
=======
import React from "react";
import { Link, NavLink } from "react-router-dom";

const activeStyle = {
  color: "purple",
};

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img alt="Just skate." src="/images/logo.png" />
            </Link>
          </li>
          <li>
            <NavLink activeStyle={activeStyle} to="/boards">
              Boards
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={activeStyle} to="/cart">
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
>>>>>>> 466bc864bbfe5958f3147d269057074374183f87
}
