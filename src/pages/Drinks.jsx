import React, { useState } from 'react';

const SpotlightCarousel = () => {
    const items = [
        { id: 1, img: 'https://via.placeholder.com/300', name: 'Item 1' },
        { id: 2, img: 'https://via.placeholder.com/300', name: 'Item 2' },
        { id: 3, img: 'https://via.placeholder.com/300', name: 'Item 3' },
        { id: 4, img: 'https://via.placeholder.com/300', name: 'Item 4' },
        { id: 5, img: 'https://via.placeholder.com/300', name: 'Item 5' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    return (
        <div className="carousel-container d-flex justify-content-center align-items-center">
            <button className="btn btn-dark mx-2" onClick={prevSlide}>
                &#8249;
            </button>
            <div className="carousel-items d-flex">
                {items.map((item, index) => {
                    const position =
                        index === currentIndex
                        index === currentIndex
                            ? 'spotlight'
                            : index === (currentIndex - 1 + items.length) % items.length
                                ? 'left'
                                : index === (currentIndex + 1) % items.length
                                    ? 'right'
                                    : 'hidden';

                    return (
                        <div
                            key={item.id}
                            className={`carousel-item ${position} text-center`}
                        >
                            <img src={item.img} alt={item.name} className="img-fluid" />
                            <p className="mt-2">{item.name}</p>
                        </div>
                    );
                })}
            </div>
            <button className="btn btn-dark mx-2" onClick={nextSlide}>
                &#8250;
            </button>
        </div>
    );
};

export default SpotlightCarousel;

