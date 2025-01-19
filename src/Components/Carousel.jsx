import { useState, useEffect } from 'react';
import Image1 from '../assets/limeli-pictures/Drinks/PNG/LimeliOriginal.png';
import Image2 from '../assets/limeli-pictures/Drinks/PNG/LimeliCinnamon.png';
import Image3 from '../assets/limeli-pictures/Drinks/PNG/LimeliMint.png';

const images = [
    Image1,
    Image2,
    Image3
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