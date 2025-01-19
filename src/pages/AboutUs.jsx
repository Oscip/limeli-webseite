import React from 'react';
import Carousel from '../Components/Carousel.jsx';
import ImageGallery from '../Components/ImageGallery.jsx';

const AboutUs = () => {
    return (
        <div className="blog-page">
            <section className="video-section">
                <Carousel />
            </section>

            <section className="news-section">
                <h2>Latest News</h2>
                <div className="news-content">
                    <div className="news-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel.</p>
                        <p>Suspendisse potenti. Proin in neque at dolor cursus vehicula sit amet a sapien.</p>
                    </div>
                    <div className="news-carousel">
                        <Carousel />
                    </div>
                </div>
            </section>

            <section className="gallery-section">
                <h2>Bilder Galerie</h2>
                <ImageGallery />
            </section>
        </div>
    );
};

export default AboutUs;
