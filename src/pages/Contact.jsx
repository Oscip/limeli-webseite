import { useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Form() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        message: "",
        email: "",
        phoneNumber: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const getDynamicStyle = (value) => ({
        backgroundColor: value ? "rgba(210, 244, 252, 0.25)" : "",
    });

    const handleSubmit = () => {
        alert("Your message has been successfully sent!");
    };

    return (
        <div className="container mt-5 mb-5">
            <form className="p-4 bg-light rounded shadow-sm">
                <h1 className="text-center mb-4">Contact</h1>
                <fieldset>
                    <legend className="mb-3">General Information</legend>

                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="firstName" className="form-label">First Name:</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="form-control"
                                style={getDynamicStyle(formData.firstName)}
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="lastName" className="form-label">Last Name:</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="form-control"
                                style={getDynamicStyle(formData.lastName)}
                                required
                            />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-control"
                                style={getDynamicStyle(formData.email)}
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="form-control"
                                style={getDynamicStyle(formData.phoneNumber)}
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">What is the reason for contacting us?</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="form-control"
                            style={getDynamicStyle(formData.message)}
                            required
                            rows="6"
                        />
                    </div>
                </fieldset>

                <div className="text-center">
                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form;
