import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="not-found-page d-flex align-items-center justify-content-center vh-100 bg-light">
            <Container>
                <Row className="text-center">
                    <Col md={{ span: 8, offset: 2 }}>
                        {/* Header Text */}
                        <h1 className="display-1 text-success fw-bold">404</h1>
                        <h2 className="text-dark mb-4">Oops! Seite nicht gefunden</h2>
                        <p className="mb-4 text-secondary">
                            Sie scheinen eine Erfrischung zu suchen, die hier nicht zu finden ist. Vielleicht möchten Sie
                            <span className="text-success fw-semibold"> Limeli Getränke </span> entdecken, um Ihren Durst zu stillen?
                        </p>
                        {/* Call to Action Button */}
                        <Link to="/">
                            <Button variant="success" size="lg" className="px-4">
                                Zur Startseite
                            </Button>
                        </Link>
                        {/* Decorative Image */}
                        <div className="mt-5">
                            <img
                                src="https://via.placeholder.com/300x200?text=Refreshing+Drink+Here"
                                alt="Drink Illustration"
                                className="img-fluid rounded shadow"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default NotFound;
