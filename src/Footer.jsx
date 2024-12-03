<<<<<<< HEAD
import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';

export default function Footer() {
    return (
        <footer className="bg-dark text-white py-4 mt-auto">
            <Container>
                <Row className="justify-content-center">
                    <Col xs="auto">
                        <Link to="/home" className="text-white text-decoration-none px-3">
                            Home
                        </Link>
                    </Col>
                    <Col xs="auto">
                        <Link to="/drinks" className="text-white text-decoration-none px-3">
                            Drinks
                        </Link>
                    </Col>
                    <Col xs="auto">
                        <Link to="/about-us" className="text-white text-decoration-none px-3">
                            About Us
                        </Link>
                    </Col>
                    <Col xs="auto">
                        <Link to="/contact" className="text-white text-decoration-none px-3">
                            Contact
                        </Link>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-3">
                    <Col xs="auto">
                        <Link to="/privacy-policy" className="text-white text-decoration-none px-3">
                            Privacy Policy
                        </Link>
                    </Col>
                    <Col xs="auto">
                        <Link to="/terms-of-service" className="text-white text-decoration-none px-3">
                            Terms of Service
                        </Link>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col>
                        <hr className="border-light my-3"/>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={12} sm={10} md={8} lg={6}>
                        <p className="text-center mb-0">© 2024 BBW, Alle Rechte vorbehalten</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
=======
import React from "react";

export default function Footer() {
  return (
    <footer>
      <p>
        This site is created for demonstrative purposes only and does not offer
        any real products or services.
      </p>
      <p>&copy; BBW 2020</p>
    </footer>
  );
>>>>>>> 466bc864bbfe5958f3147d269057074374183f87
}
