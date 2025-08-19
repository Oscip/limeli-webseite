import './App.css';
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home.jsx";
import Drinks from "./pages/Drinks.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Contact from "./pages/Contact.jsx";
import NavbarComponent from "./Components/NavbarComponent.jsx";
import FooterComponent from "./Components/FooterComponent.jsx";
import Legal_Notice from "./pages/Legal_Notice.jsx";
import Terms_and_Condition from "./pages/Terms_and_Conditions.jsx";
import { CartProvider } from "./Components/CartContext.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import TermsOfUse from "./pages/TermsOfUse.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";

function App() {
    return (
        <CartProvider>
            <Router>
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
                        <Route path="/terms-and-conditions" element={<Terms_and_Condition />} />
                        <Route path="/terms-of-use" element={<TermsOfUse />} />
                        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </div>
                <FooterComponent />
            </Router>
        </CartProvider>
    );
}

export default App;
