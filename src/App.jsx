<<<<<<< HEAD
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Spinner from "./component/Extras/Spinner";
import useFetch from "./services/useFetch";
import "bootstrap/dist/css/bootstrap.min.css";
import Drinks from "./component/Pages/Drinks";
import Contact from "./component/Pages/Contact";
import AboutUs from "./component/Pages/AboutUs";
import NotFound from "./NotFound";
import Home from "./component/Pages/Home";
import TermsOfService from "./component/Pages/TermsOfService";
import PrivacyPolicy from "./component/Pages/PrivacyPolicy";

export default function App() {
    const [size, setSize] = useState("");
    const { data: products, loading, error } = useFetch("products?category=boards");

    function renderProduct(product) {
        return (
            <div key={product.id} className="product">
                <Link to={`/product/${product.id}`}>
                    <img src={`/images/${product.image}`} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                </Link>
            </div>
        );
    }

    const filteredProducts = size
        ? products?.filter((p) => p.skus.some((sku) => sku.size === parseInt(size)))
        : products;

    if (error) throw error;
    if (loading) return <Spinner />;

    return (
        <Router>
            <Header />
            <div className="content">
                <Routes>
                    {/* Home Route */}
                    <Route
                        path="/"
                        element={<Home products={filteredProducts} renderProduct={renderProduct} />}
                    />

                    {/* Product Page */}
                    <Route
                        path="/home"
                        element={
                            <div>
                                <main>
                                    <h1>Product Page</h1>
                                    <section id="filters">
                                        <label htmlFor="size">Filter by Size:</label>{" "}
                                        <select
                                            id="size"
                                            value={size}
                                            onChange={(e) => setSize(e.target.value)}
                                        >
                                            <option value="">All sizes</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                        </select>
                                        {size && <h2>Found {filteredProducts?.length} items</h2>}
                                    </section>
                                    <section id="products">{filteredProducts?.map(renderProduct)}</section>
                                </main>
                            </div>
                        }
                    />

                    {/* Other Pages */}
                    <Route path="/drinks" element={<Drinks />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/terms-of-service" element={<TermsOfService />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
=======
import React from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";
import { Routes, Route } from "react-router-dom";
import Detail from "./Detail";
import Cart from "./Cart";

export default function App() {
  return (
    <>
      <div className="content">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<h1>Just skate.</h1>} />
              <Route path="/g" element={<h1>Just guguseli.</h1>} />
            <Route path="/:category" element={<Products />} />
            <Route path="/:category/:id" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
>>>>>>> 466bc864bbfe5958f3147d269057074374183f87
}
