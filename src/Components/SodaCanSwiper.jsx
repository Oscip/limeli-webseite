import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules"; // Import Swiper modules
import "swiper/css"; // Import Swiper styles
import DrinkOriginal from '../assets/limeli-pictures/Drinks/PNG/LimeliOriginal.png';
import DrinkMint from '../assets/limeli-pictures/Drinks/PNG/LimeliMint.png';
import DrinkCinnamon from '../assets/limeli-pictures/Drinks/PNG/LimeliCinnamon.png';

const SodaCanSwiper = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
            <Swiper
                modules={[Navigation, Pagination, EffectCoverflow]} // Add desired Swiper modules
                effect="coverflow" // Use the Coverflow effect
                grabCursor={true} // Enables the "grab" cursor
                centeredSlides={true} // Center slides in the viewport
                slidesPerView={3} // Ensure 3 slides are visible: active + 2 (previous and next)
                loop={true} // Infinite looping
                spaceBetween={-30} // Slight overlap between slides
                coverflowEffect={{
                    rotate: 30, // Angle of rotation for slides
                    stretch: 0, // Stretch spacing between slides
                    depth: 100, // Depth offset for 3D effect
                    modifier: 1, // Multiplier for the effect
                    slideShadows: true, // Add shadows to slides
                }}
                navigation // Enables navigation buttons
                pagination={{ clickable: true }} // Enables pagination dots
                style={{ width: "80%", maxWidth: "600px", height: "400px" }}
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#fff",
                            borderRadius: "10px",
                            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                            height: "100%",
                        }}
                    >
                        <img
                            src={DrinkOriginal}
                            alt="Soda Can 1"
                            style={{ width: "150px", objectFit: "contain" }}
                        />
                    </div>
                </SwiperSlide>
                {/* Slide 2 */}
                <SwiperSlide>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#fff",
                            borderRadius: "10px",
                            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                            height: "100%",
                        }}
                    >
                        <img
                            src={DrinkMint}
                            alt="Soda Can 2"
                            style={{ width: "150px", objectFit: "contain" }}
                        />
                    </div>
                </SwiperSlide>
                {/* Slide 3 */}
                <SwiperSlide>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#fff",
                            borderRadius: "10px",
                            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                            height: "100%",
                        }}
                    >
                        <img
                            src={DrinkCinnamon}
                            alt="Soda Can 3"
                            style={{ width: "150px", objectFit: "contain" }}
                        />
                    </div>
                </SwiperSlide>
                {/* Slide 4 */}
                <SwiperSlide>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#fff",
                            borderRadius: "10px",
                            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                            height: "100%",
                        }}
                    >
                        <img
                            src={DrinkOriginal}
                            alt="Soda Can 1"
                            style={{ width: "150px", objectFit: "contain" }}
                        />
                    </div>
                </SwiperSlide>
                {/* Slide 5 */}
                <SwiperSlide>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#fff",
                            borderRadius: "10px",
                            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                            height: "100%",
                        }}
                    >
                        <img
                            src={DrinkMint}
                            alt="Soda Can 2"
                            style={{ width: "150px", objectFit: "contain" }}
                        />
                    </div>
                </SwiperSlide>
                {/* Slide 6 */}
                <SwiperSlide>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#fff",
                            borderRadius: "10px",
                            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                            height: "100%",
                        }}
                    >
                        <img
                            src={DrinkCinnamon}
                            alt="Soda Can 3"
                            style={{ width: "150px", objectFit: "contain" }}
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SodaCanSwiper;
;