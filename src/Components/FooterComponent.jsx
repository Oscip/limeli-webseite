import { Container, Row, Col, Nav } from "react-bootstrap";
import { FaTiktok, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

function FooterComponent() {
    return (
        <footer className="bg-dark text-white py-5">
            <Container>
                {/* Navigation Links */}
                <Row className="justify-content-center mb-4">
                    <Col xs="auto">
                        <Nav className="justify-content-center">
                            <Nav.Link href="/" className="text-white mx-3 footer-link">
                                Home
                            </Nav.Link>
                            <Nav.Link href="/drinks" className="text-white mx-3 footer-link">
                                Drinks
                            </Nav.Link>
                            <Nav.Link href="/about-us" className="text-white mx-3 footer-link">
                                About Us
                            </Nav.Link>
                            <Nav.Link href="/contact" className="text-white mx-3 footer-link">
                                Contact
                            </Nav.Link>
                            <Nav.Link href="/cart" className="text-white mx-3 footer-link">
                                Cart
                            </Nav.Link>
                        </Nav>
                    </Col>
                </Row>

                {/* Legal Links */}
                <Row className="justify-content-center mb-4">
                    <Col xs="auto">
                        <Nav className="justify-content-center">
                            <Nav.Link href="/legal-notice" className="text-white mx-3 footer-link">
                                Legal Notice
                            </Nav.Link>
                            <Nav.Link href="/terms-and-conditions" className="text-white mx-3 footer-link">
                                Terms and Conditions
                            </Nav.Link>
                            <Nav.Link href="/terms-of-use" className="text-white mx-3 footer-link">
                                Terms of Use
                            </Nav.Link>
                            <Nav.Link href="/privacy-policy" className="text-white mx-3 footer-link">
                                Privacy Policy
                            </Nav.Link>
                        </Nav>
                    </Col>
                </Row>

                {/* Social Media Links */}
                <Row className="justify-content-center mb-4">
                    <Col xs="auto">
                        <Nav className="justify-content-center">
                            <Nav.Link href="https://www.instagram.com/" className="text-white mx-3 footer-social-icon" aria-label="instagram link">
                                <FaInstagram size={20} />
                            </Nav.Link>
                            <Nav.Link href="https://www.tiktok.com/" className="text-white mx-3 footer-social-icon" aria-label="tiktok link">
                                <FaTiktok size={20} />
                            </Nav.Link>
                            <Nav.Link href="https://www.linkedin.com/" className="text-white mx-3 footer-social-icon" aria-label="linkedin link">
                                <FaLinkedin size={20} />
                            </Nav.Link>
                            <Nav.Link href="https://www.x.com/" className="text-white mx-3 footer-social-icon" aria-label="x link">
                                <FaTwitter size={20} />
                            </Nav.Link>
                        </Nav>
                    </Col>
                </Row>

                {/* Copyright */}
                <Row className="justify-content-center">
                    <Col xs="auto" className="text-center">
                        <p className="mb-0 small">
                            &copy; {new Date().getFullYear()} Limeli. All rights reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default FooterComponent;
