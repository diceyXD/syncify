/* Background and body styling */

@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@300;400;600&display=swap');


html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: 'Montserrat Alternates', sans-serif;

}

/* Background image setup */
body {
  background: url('./assets/images/bg-image.jpg') no-repeat center center fixed;
  background-size: 250%;
  backdrop-filter: blur(8px);
  /* Blur the background */
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  height: 100vh;
  overflow: hidden;

}

/* Login container */

.login-container {
  background-color: rgba(255, 255, 255);
  /* White with transparency */
  backdrop-filter: blur(10px);
  /* Blur the background */
  border-radius: 18px;
  padding: 40px;
  filter: drop-shadow(12px 12px 31px rgba(0, 0, 0, 0.5));
  width: 100%;
  max-width: 350px;
  text-align: center;
  color: #222222;
}


/* Header styles */
h1 {
  font-size: 40px;
  color: #0066cc;
  /* Accent color */
  text-align: left;
  margin: 0;
}

h2 {
  font-size: 36px;
  margin-bottom: 0px;
  text-align: left;
  margin-top: 0px;
}

h3 {
  font-size: 15px;
  margin: 0px;
  margin-left: 2px;
  text-align: left;
  margin-bottom: 30px;
  font-weight: 400;
}

* {
  font-family: 'Montserrat Alternates', sans-serif;
}

button,
input,
select,
textarea {
  font-family: 'Montserrat Alternates', sans-serif;
}


/* Form styling */
.form-group {
  margin-bottom: 0px;
  margin-right: 25px;
  text-align: left;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
  color: #ffffff;
}

.form-group input {
  width: 100%;
  padding: 12px;
  border: 2px solid rgba(34, 34, 34, 1.0);
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.7);
  color: #222222;
  font-size: 16px;
}

.form-group input:focus {
  outline: none;
  border-color: #000000;
}

/* Login button */
.login-button {
  width: 100%;
  padding: 12px;
  background-color: #000000;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin: 0;
  margin-top: 30px;
}

.login-button:hover {
  background-color: rgba(12, 2, 2, 0.9);
  ;
}

/* Error message */
.error-message {
  color: #ff4444;
  margin-bottom: 20px;
}

/* Responsive design */
@media (max-width: 480px) {
  .login-container {
    padding: 20px;
  }

  h1 {
    font-size: 28px;
  }

  h2 {
    font-size: 20px;
  }
}

/* Logo styling */
.logo {
  max-width: 200px;
  margin: 0 auto 20px;
  display: block;
}

#root {
  height: 100%;
  width: 100vw;
}

.log {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

.password-container {
  position: relative;
  width: 100%;
}

.password-container input {
  width: 100%;
  padding-right: 12px;
  /* Ensure space for the eye button */
  border-radius: 5px;
}

.toggle-password {
  position: absolute;
  right: -15px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: #000000;
}

.toggle-password:hover {
  color: #222;
}

@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@200;400;600&display=swap');