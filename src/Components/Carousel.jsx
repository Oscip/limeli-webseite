import { useState, useEffect } from 'react';
import DrinkOriginal from '../assets/limeli-pictures/Test/LimeliOriginalLogo.png';
import DrinkMint from '../assets/limeli-pictures/Test/LimeliMintLogo.png';
import DrinkCinnamon from '../assets/limeli-pictures/Test/LimeliCinnamonLogo.png';
import Drinks from '../assets/limeli-pictures/Test/LimeliDrinksLogo.png';
import DrinkMintWithBG from '../assets/limeli-pictures/Test/LimeliMintWithBGLogo.png';
import Sustainability from '../assets/limeli-pictures/Test/Sustainability.webp';
import Us from '../assets/limeli-pictures/Test/AboutUs.webp';
import RegionalIngredients from '../assets/limeli-pictures/Test/RegionalIngredients.webp';



const images = [
    DrinkOriginal,
    DrinkMint,
    DrinkCinnamon,
    Drinks,
    DrinkMintWithBG,
    Sustainability,
    Us,
    RegionalIngredients
];

const Carousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel">
            <img src={images[currentImageIndex]} alt="Drink Image" className="carousel-image" />
        </div>
    );
};

export default Carousel;