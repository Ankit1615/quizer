import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css'

export default function ErrorPage() {
    return (
        <div>
            <div className="container">
            <h2>oops! page not found</h2>
        <h1>404</h1>
        <p>We can't find the page you're looking for.</p>
        <Link to='/'>go back home</Link>
            </div>
        </div>
    )
}
