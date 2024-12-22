import {Navbar, Nav} from "react-bootstrap";
import logo from "../assets/limeli-pictures/png/logo-no-background.png";
import {Link} from "react-router-dom";

function NavbarComponent() {
    return (
        <Navbar bg="success" variant="dark" expand="lg" sticky="top" className="shadow">
            <Navbar.Brand href="/">
                <img src={logo} alt="Limeli Logo" width="40" height="40" className="d-inline-block align-top me-2"/>Limeli
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/" className="navbar-link">Home</Nav.Link>
                    <Nav.Link as={Link} to="/drinks" className="navbar-link">Drinks</Nav.Link>
                    <Nav.Link as={Link} to="/about-us" className="navbar-link">About Us</Nav.Link>
                    <Nav.Link as={Link} to="/blog" className="navbar-link">Blog</Nav.Link>
                    <Nav.Link as={Link} to="/contact" className="navbar-link">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarComponent;
