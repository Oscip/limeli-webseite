import { useCart } from "../Components/CartContext.jsx";
import DrinkOriginal from '../assets/limeli-pictures/Drinks/PNG/LimeliOriginal.png';
import DrinkMint from '../assets/limeli-pictures/Drinks/PNG/LimeliMint.png';
import DrinkCinnamon from '../assets/limeli-pictures/Drinks/PNG/LimeliCinnamon.png';
import DrinksImage from '../assets/limeli-pictures/Drinks/PNG/LimeliDrinks.png'; // Image of all drinks together
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function Drinks() {
    const { addToCart } = useCart();

    // Product data
    const products = [
        {
            id: 1,
            name: "Original",
            price: 1.5,
            image: DrinkOriginal,
            description: "Crafted with a balanced blend of apple cider, honey, sparkling water, and white grape juice, Limeli Original offers a refreshing and timeless taste. This limited-edition drink is perfect for those who cherish the natural sweetness of honey and the effervescence of sparkling water. Ideal for celebrations or a moment of relaxation."
        },
        {
            id: 2,
            name: "Mint",
            price: 1.3,
            image: DrinkMint,
            description: "A refreshing twist on the classic, Limeli Mint adds a cool burst of mint to the original recipe. It combines apple cider, honey, sparkling water, and white grape juice with the invigorating taste of fresh mint. Whether you're cooling down on a summer day or seeking a palate cleanser, Limeli Mint is a rejuvenating choice."
        },
        {
            id: 3,
            name: "Cinnamon",
            price: 1.2,
            image: DrinkCinnamon,
            description: "Limeli Cinnamon reimagines our original recipe with a warm, spicy kick. The natural sweetness of honey, the fizz of sparkling water, and the depth of cinnamon come together to create a comforting and unique flavor. Perfect for autumn nights or anyone seeking something bold and distinctive."
        },
    ];

    return (
        <Container fluid className="pb-5" style={{ backgroundColor: "var(--light-gray)" }}>
            {/* Introduction Section */}
            <div className="text-center mb-5" style={{ backgroundColor: "var(--light-green)", padding: "3rem 1rem" }}>
                <img src={DrinksImage} alt="All Drinks" className="img-fluid mb-4" style={{ maxWidth: "600px", borderRadius: "8px" }} />
                <h1 className="limeli-h2">Discover the World of Limeli Drinks</h1>
                <p className="limeli-p">
                    Welcome to Limeli, where innovation meets flavor. Each drink in our collection is crafted with care, using natural and locally sourced ingredients.
                    From the original's crisp taste to the boldness of cinnamon and the refreshing zest of mint, we offer something for everyone. Whether you're celebrating life's milestones or simply taking a moment to savor the day, Limeli is here to add that extra spark of joy.
                </p>
                <p className="limeli-p">
                    Explore our carefully curated beverages and enjoy the perfect blend of tradition and creativity. Our dedication to sustainability and quality ensures every sip is as good for the planet as it is for your taste buds.
                </p>
            </div>

            {/* Explore Our Drinks Section */}
            <h2 className="text-center mb-4 limeli-h3">Explore Our Drinks</h2>
            <Row className="justify-content-center">
                {products.map((product) => (
                    <Col md={6} lg={4} key={product.id} className="mb-4">
                        <Card className="card limeli-card h-100">
                            <Card.Img variant="top" src={product.image} alt={product.name} className="img-fluid" style={{ borderRadius: "8px" }} />
                            <Card.Body>
                                <Card.Title className="limeli-h3">{product.name}</Card.Title>
                                <Card.Text className="limeli-p">{product.description}</Card.Text>
                                <p className="text-dark-green fw-bold">${product.price.toFixed(2)}</p>
                                <Button variant="green btn-green" onClick={() => addToCart(product)}>
                                    Add to Cart
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
