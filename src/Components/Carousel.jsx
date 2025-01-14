import React, { useState, useEffect } from 'react';
import './Carousel.css';

const images = [
    '/images/drink1.jpg',
    '/images/drink2.jpg',
    '/images/drink3.jpg'
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