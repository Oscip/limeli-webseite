import { Container, Row, Col, Card } from "react-bootstrap";

function Home() {
    return (
        <Container fluid className="p-0">
            {/* Hero Section */}
            <div className="bg-success text-white text-center py-5">
                <h1>Willkommen bei Limeli</h1>
                <p>Erfrischende Getränke für jede Gelegenheit</p>
            </div>

            {/* Cards Section */}
            <Container className="my-5">
                <Row className="g-4">
                    <Col md={4}>
                        <Card className="h-100 text-center">
                            <Card.Img variant="top" src="https://via.placeholder.com/300" />
                            <Card.Body>
                                <Card.Title>Unsere Getränke</Card.Title>
                                <Card.Text>
                                    Entdecken Sie unser vielfältiges Sortiment an Getränken.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="h-100 text-center">
                            <Card.Img variant="top" src="https://via.placeholder.com/300" />
                            <Card.Body>
                                <Card.Title>Nachhaltigkeit</Card.Title>
                                <Card.Text>
                                    Wir legen Wert auf Nachhaltigkeit und Qualität.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="h-100 text-center">
                            <Card.Img variant="top" src="https://via.placeholder.com/300" />
                            <Card.Body>
                                <Card.Title>Über Uns</Card.Title>
                                <Card.Text>
                                    Erfahren Sie mehr über die Geschichte von Limeli.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* News Section */}
            <Container fluid className="bg-light py-5">
                <h2 className="text-center mb-4">Neuigkeiten</h2>
                <Container>
                    <Row className="g-4">
                        <Col md={6}>
                            <Card className="p-3 shadow">
                                <Row className="align-items-center">
                                    <Col xs={4}>
                                        <Card.Img
                                            src="https://via.placeholder.com/150"
                                            alt="News"
                                        />
                                    </Col>
                                    <Col xs={8}>
                                        <Card.Text>
                                            Neue Geschmacksrichtungen sind da! Probieren Sie unsere
                                            Specials.
                                        </Card.Text>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card className="p-3 shadow">
                                <Row className="align-items-center">
                                    <Col xs={8}>
                                        <Card.Text>
                                            Limeli unterstützt lokale Bauern für beste Zutaten.
                                        </Card.Text>
                                    </Col>
                                    <Col xs={4}>
                                        <Card.Img
                                            src="https://via.placeholder.com/150"
                                            alt="News"
                                        />
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </Container>
    );
}

export default Home;
