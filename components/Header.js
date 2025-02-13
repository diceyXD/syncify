import React from "react";
import "./Header.css";
import logo from "../assets/images/logo.png"; // Path to your logo

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="header-logo" />
                </div>
                <nav className="nav">
                    <ul className="nav-links">
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#developers">Developers</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
