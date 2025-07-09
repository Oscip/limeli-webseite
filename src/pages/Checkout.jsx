import { useState } from 'react';

const CheckoutPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        cardNumber: '',
        expiration: '',
        cvv: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your purchase!'); // Placeholder for further checkout functionality
    };

    return (
        <div className="checkout-container">
            <h1 className="checkout-title">Checkout</h1>
            <form className="checkout-form" onSubmit={handleSubmit}>
                <h2 className="section-title">Billing Details</h2>
                <div className="checkout-field">
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="checkout-field">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="checkout-field">
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="checkout-row">
                    <div className="checkout-field">
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="checkout-field">
                        <label htmlFor="state">State</label>
                        <input
                            type="text"
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="checkout-field">
                        <label htmlFor="zip">Zip Code</label>
                        <input
                            type="text"
                            id="zip"
                            name="zip"
                            value={formData.zip}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>
                <h2 className="section-title">Payment Details</h2>
                <div className="checkout-field">
                    <label htmlFor="cardNumber">Card Number</label>
                    <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="checkout-row">
                    <div className="checkout-field">
                        <label htmlFor="expiration">Expiration</label>
                        <input
                            type="text"
                            id="expiration"
                            name="expiration"
                            placeholder="MM/YY"
                            value={formData.expiration}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="checkout-field">
                        <label htmlFor="cvv">CVV</label>
                        <input
                            type="text"
                            id="cvv"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>
                <button type="submit" className="checkout-submit">
                    Complete Purchase
                </button>
            </form>
        </div>
    );
};

export default CheckoutPage;
