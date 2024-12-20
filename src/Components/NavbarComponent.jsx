import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function NavbarComponent() {
    return (
        <Navbar bg="success" variant="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="../assets/react.svg">Limeli</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/drinks">
                            <Nav.Link>Getränke</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about-us">
                            <Nav.Link>Über Uns</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <Nav.Link>Kontakt</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;
