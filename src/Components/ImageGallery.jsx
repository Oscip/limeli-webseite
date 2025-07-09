import { useState } from 'react';
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

const ImageGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openImage = (image) => {
        setSelectedImage(image);
    };

    const closeImage = () => {
        setSelectedImage(null);
    };

    return (
        <div className="image-gallery">
            <div className="gallery-grid">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Gallery Image ${index + 1}`}
                        height="200"
                        width="200"
                        className="gallery-image"
                        onClick={() => openImage(image)}
                    />
                ))}
            </div>

            {selectedImage && (
                <div className="lightbox" onClick={closeImage}>
                    <img src={selectedImage} alt="Enlarged view" className="lightbox-image" />
                    <button className="close-btn" onClick={closeImage}>X</button>
                </div>
            )}
        </div>
    );
};

export default ImageGallery;