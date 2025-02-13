import React from 'react';
import './App.css'; // Import the converted CSS

const App = () => {
    return (
        <div className="App">
            {/* Header Section */}
            <header className="header">
                <h1>Syncify</h1>
            </header>

            {/* Main Container */}
            <div className="container">
                {/* Left Side Content */}
                <div className="left-side">
                    <h2>About Syncify</h2>
                    <p>
                        Syncify is an advanced academic management system designed to simplify
                        and streamline the educational process. It provides tools for managing
                        attendance, grades, and student performance predictions.
                    </p>
                    <p>
                        Key features include:
                        <ul>
                            <li>Automated attendance tracking using advanced technology.</li>
                            <li>Real-time performance analysis for students and educators.</li>
                            <li>Seamless integration with existing school systems.</li>
                        </ul>
                    </p>
                    <p>Empower your institution with Syncify today!</p>
                </div>

                {/* Right Side Login Options */}
                <div className="right-side">
                    <div className="login-box">
                        <h2>Login Options</h2>
                        <a href="adminlogin.html"><button>Admin</button></a>
                        <a href="parentlogin.html"><button>Parent</button></a>
                        <a href="teacherlogin.html"><button>Teacher</button></a>
                        <a href="studentlogin.html"><button>Student</button></a>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="footer">
                <p>&copy; 2025 Syncify. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default App;
