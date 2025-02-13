import React, { useState } from "react";
import "./App.css";

const AdminLogin = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = (e) => {
    e.preventDefault();
    const username = e.target.username.value.trim();
    const password = e.target.password.value.trim();

    if (username === "" || password === "") {
      setErrorMessage("Please fill out all fields.");
      return false;
    }

    setErrorMessage("");
    // Proceed with form submission (e.g., API call)
    console.log("Form submitted");
    return true;
  };

  return (
    <div className="login-container">
      <div className="left-side">
        <h1>SYNCIFY</h1>
        <h2>Admin Login</h2>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
      <div className="right-side">
        <form onSubmit={validateForm}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;