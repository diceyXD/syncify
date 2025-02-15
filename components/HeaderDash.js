// src/HeaderDash.js
import React from "react";
import logo from "../assets/images/logo.png";
import './HeaderDash.css';

const HeaderDash = () => {
    return (
        <header className="header">
            <img src={logo} alt="Logo" className="logo" />
        </header>
    );
};

export default HeaderDash;
