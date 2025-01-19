import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home.jsx";
import Drinks from "./pages/Drinks.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Contact from "./pages/Contact.jsx";
import NavbarComponent from "./Components/NavbarComponent.jsx";
import NotFound from "./pages/NotFound.jsx";
import FooterComponent from "./Components/FooterComponent.jsx";
import Legal_Notice from "./pages/Legal_Notice.jsx";
import Terms_Condition from "./pages/Terms_Condition.jsx";
import { CartProvider } from "./Components/CartContext.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";

function App() {
    return (
        <CartProvider>
                <NavbarComponent />
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/drinks" element={<Drinks />} />
                        <Route path="/about-us" element={<AboutUs />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/legal-notice" element={<Legal_Notice />} />
                        <Route path="/terms-&-condition" element={<Terms_Condition />} />
                        <Route path="/*" element={<NotFound />} />
                    </Routes>
                </div>
                <FooterComponent />
        </CartProvider>
    );
}

export default App;
