import React, { useState, useEffect } from 'react';
import Image1 from '../assets/limeli-high-resolution-logo.png';
import Image2 from '../assets/limeli-pictures/Test/Picture2.png';
import Image3 from '../assets/limeli-high-resolution-logo.png';

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