import {SwiperSlide} from "swiper/react";
import SodaCanSwiper from "../Components/SodaCanSwiper.jsx";
import Cart from "../Components/Cart.jsx";

export default function Drinks() {
    return (
        <div>
            <h1>Drinks</h1>
            <p>Our drinks are made with the best ingredients and are guaranteed to quench your thirst.</p>
            <SodaCanSwiper></SodaCanSwiper>
            <Cart/>
        </div>
    );
}