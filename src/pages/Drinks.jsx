import { useCart } from "../Components/CartContext.jsx";
import DrinkOriginal from '../assets/limeli-pictures/Drinks/PNG/LimeliOriginal.png';
import DrinkMint from '../assets/limeli-pictures/Drinks/PNG/LimeliMint.png';
import DrinkCinnamon from '../assets/limeli-pictures/Drinks/PNG/LimeliCinnamon.png';
import { Card, Button } from "react-bootstrap";

export default function Drinks() {
    const { addToCart } = useCart();

    // Product data
    const products = [
        { id: 1, name: "Original", price: 1.5, image: DrinkOriginal, description: "Refreshing and classic taste." },
        { id: 2, name: "Mint", price: 1.3, image: DrinkMint, description: "Cool and invigorating." },
        { id: 3, name: "Cinnamon", price: 1.2, image: DrinkCinnamon, description: "Spicy and unique flavor." },
    ];

    return (
        <div className="container">
            <h1>Drinks</h1>
            <p>Our drinks are made with the best ingredients and are guaranteed to quench your thirst.</p>
            <div className="row">
                {products.map((product) => (
                    <div className="col-md-4 mb-4" key={product.id}>
                        <Card>
                            <Card.Img variant="top" src={product.image} alt={product.name} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                                <Card.Text>${product.price.toFixed(2)}</Card.Text>
                                <Button variant="success" onClick={() => addToCart(product)}>
                                    Add to Cart
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}
