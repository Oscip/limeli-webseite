import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NotFound() {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-center">
            <h1 className="display-1 fw-bold text-danger">404</h1>
            <h2 className="mb-4">Oops! Page not found</h2>
            <p className="mb-4 text-muted">
                The page you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/" className="btn btn-primary btn-lg">
                Go Back Home
            </Link>
        </div>
    );
}
