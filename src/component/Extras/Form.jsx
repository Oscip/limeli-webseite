import React, { useState } from 'react';
import './ContactForm.css'; // You can customize this file with your own styles

const ContactForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add your form submission logic here (e.g., sending the form data to an API)
        setIsSubmitted(true);
    };

    return (
        <div className="contact-form-container">
            <h1>Contact Us</h1>
            {isSubmitted ? (
                <div className="thank-you-message">
                    <h2>Thank you for contacting us, {firstName}!</h2>
                    <p>We'll get back to you soon.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="form-field">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            )}
        </div>
    );
};

export default ContactForm;
