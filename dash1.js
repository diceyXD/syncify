import React from "react";
import "./App.css";
import logo from "./assets/images/logo.png";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Attendance Percentage",
                data: [95, 90, 88, 92, 85, 87, 93, 89, 90, 91, 94, 96],
                borderColor: "#007bff",
                backgroundColor: "rgba(0,123,255,0.2)",
                tension: 0.4,
            },
        ],
    };

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <img src={logo} alt="Logo" className="logo" />
                <nav className="header-menu">
                    <a href="#">Home</a>
                    <a href="#">Settings</a>
                    <a href="#">Logout</a>
                </nav>
            </header>
            <div className="content-wrapper">
                <aside className="dashboard-sidebar">
                    <img src="profile.jpg" alt="Profile" className="profile-pic" />
                    <ul>
                        <li>Overview</li>
                        <li>Attendance</li>
                        <li>Notifications</li>
                        <li>Calendar</li>
                    </ul>
                </aside>
                <main className="dashboard-main">
                    <section className="dashboard-graph">
                        <h2>Attendance Graph</h2>
                        <div className="graph-container">
                            <Line data={data} />
                        </div>
                    </section>
                    <section className="attendance-container">
                        <h2>Attendance Records</h2>
                        <table className="attendance-table">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2024-07-01</td>
                                    <td>Present</td>
                                </tr>
                                <tr>
                                    <td>2024-07-02</td>
                                    <td>Absent</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </main>
            </div>

        </div>
    );
};

export default Dashboard;
