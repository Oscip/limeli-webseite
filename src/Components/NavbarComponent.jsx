import {Navbar, Nav} from "react-bootstrap";
import logo from "../assets/limeli-pictures/png/logo-no-background.png";
import cartIcon from "../assets/Icons/icon_cart.png";
import {Link} from "react-router-dom";

function NavbarComponent() {
    return (
        <Navbar bg="success" variant="dark" expand="lg" sticky="top" className="shadow">
            <Navbar.Brand as={Link} to="/" id="navbar-brand-design">
                <img className="image-icon me-0 ms-5" src={logo} alt="Drinks Icon" height="40" width="150" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto justify-content-evenly w-100 ps-3 me-0">
                    <Nav.Link as={Link} to="/" className="navbar-link">Home</Nav.Link>
                    <Nav.Link as={Link} to="/drinks" className="navbar-link">Drinks</Nav.Link>
                    <Nav.Link as={Link} to="/about-us" className="navbar-link">About Us</Nav.Link>
                    <Nav.Link as={Link} to="/contact" className="navbar-link">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Brand as={Link} to={"/cart"} id="navbar-brand-design" >
                <img src={cartIcon} alt="cart Icon" height="50" width="50"/>
            </Navbar.Brand>
        </Navbar>
    );
}

export default NavbarComponent;
