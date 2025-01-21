import { Container, Row, Col, Card } from "react-bootstrap";
import DrinkOriginal from '../assets/limeli-pictures/Test/LimeliOriginalLogo.webp';
import DrinkMint from '../assets/limeli-pictures/Test/LimeliMintWithBGLogo.webp';
import DrinkCinnamon from '../assets/limeli-pictures/Test/LimeliCinnamonLogo.webp';
import DrinkMintWithBG from '../assets/limeli-pictures/Test/LimeliMintWithBGLogo.webp';
import DrinkMintWithBGLogo from '../assets/limeli-pictures/Test/LimeliMintWithBGLogo.webp';
import Drinks from '../assets/limeli-pictures/Test/LimeliDrinksLogo.webp';
import Sustainability from '../assets/limeli-pictures/Test/Sustainability.webp';
import AboutUs from '../assets/limeli-pictures/Test/AboutUs.webp';
import RegionalIngredients from '../assets/limeli-pictures/Test/RegionalIngredients.webp';

function Home() {
    return (
        <Container fluid className="p-0">
            {/* Hero Section */}
            <div className="bg-success text-white text-center py-5">
                <h1>Welcome to Limeli</h1>
                <p>Refreshing beverages crafted for every occasion.</p>
            </div>

            {/* Cards Section */}
            <Container className="my-5">
                <h2 className="text-center">Our Highlights</h2>
                <p className="text-center mb-4">
                    Limeli stands for excellence and innovation in the beverage industry. From sourcing regional ingredients to adopting eco-friendly practices, we are setting benchmarks.
                </p>
                <Row className="g-4">
                    <Col md={4}>
                        <Card className="h-100 text-center">
                            <Card.Img variant="top" src={Drinks} alt="Drinks" />
                            <Card.Body>
                                <Card.Title>Our Drinks</Card.Title>
                                <Card.Text>
                                    Dive into our unique selection of beverages. From the spicy warmth of Limeli Cinnamon to the cool zest of Limeli Mint, we offer something for everyone.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="h-100 text-center">
                            <Card.Img variant="top" src={Sustainability} alt="Sustainability" />
                            <Card.Body>
                                <Card.Title>Sustainability</Card.Title>
                                <Card.Text>
                                    Our commitment to sustainability is unwavering. We recently partnered with EcoFuture Ltd., a leading firm in renewable packaging, to ensure that every Limeli bottle is 100% recyclable.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="h-100 text-center">
                            <Card.Img variant="top" src={AboutUs} alt="About Us" />
                            <Card.Body>
                                <Card.Title>About Us</Card.Title>
                                <Card.Text>
                                    Limeli is not just a beverage brand; it’s a story of passion. Established five years ago, we have grown into a trusted name with partnerships across Europe.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* News Section */}
            <Container fluid className="bg-light py-5">
                <h2 className="text-center mb-4">Latest News</h2>
                <Container>
                    <Row className="g-4">
                        <Col md={6}>
                            <Card className="p-3 shadow">
                                <Row className="align-items-center">
                                    <Col xs={4}>
                                        <Card.Img
                                            src={DrinkCinnamon}
                                            alt="Cinnamon Drink Launch"
                                        />
                                    </Col>
                                    <Col xs={8}>
                                        <Card.Text>
                                            We’re thrilled to announce our newest drink flavor: Limeli Cinnamon Spiced. A perfect blend of bold cinnamon and natural sweetness.
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
                                            Limeli is proud to secure a 5-year collaboration with Swiss AgriCo, ensuring the highest quality ingredients straight from Swiss farms.
                                        </Card.Text>
                                    </Col>
                                    <Col xs={4}>
                                        <Card.Img
                                            src={RegionalIngredients}
                                            alt="Swiss Ingredients"
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
