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
}
