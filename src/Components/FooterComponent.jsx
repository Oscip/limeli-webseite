import { Container, Row, Col, Nav } from "react-bootstrap";

function FooterComponent() {
    return (
        <footer className="bg-dark text-white py-4">
            <Container>
                <Row className="justify-content-center mb-3">
                    {/* Centered Links */}
                    <Col xs="auto">
                        <Nav className="justify-content-center">
                            <Nav.Link href="/legal-notice" className="text-white mx-2">
                                legal notice
                            </Nav.Link>
                            <Nav.Link href="/terms-&-condition" className="text-white mx-2">
                                terms and conditions
                            </Nav.Link>
                        </Nav>
                    </Col>
                </Row>
                {/* Copyright */}
                <Row className="justify-content-center">
                    <Col xs="auto" className="text-center">
                        <p className="mb-0">&copy; {new Date().getFullYear()} Limeli</p>
                    </Col>
                </Row>
                {/* Navigation Links */}
                <Row className="justify-content-center mt-3">
                    <Col xs="auto">
                        <Nav className="justify-content-center">
                            <Nav.Link href="/" className="text-white mx-2">
                                Home
                            </Nav.Link>
                            <Nav.Link href="/drinks" className="text-white mx-2">
                                Drinks
                            </Nav.Link>
                            <Nav.Link href="/about-us" className="text-white mx-2">
                                About Us
                            </Nav.Link>
                            <Nav.Link href="/contact" className="text-white mx-2">
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default FooterComponent;
