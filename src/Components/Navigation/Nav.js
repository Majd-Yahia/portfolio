import React from 'react';
import './Nav.css';

function Navigation() {
    return (
        <nav className="navbar">
            <ul>
                <li className="home-link"><a href="#home">About</a></li>
                <li className="work-link"><a href="#work">Work</a></li>
                <li className="contact-link"><a href="#contact">Contact</a></li>
                <li className="something-link"><a href="#something">Something</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;