// src/Dashboard.js
import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import './dashboard.css';
import HeaderDash from "./components/HeaderDash";
import SideNav from "./components/SideNav";

const data = [
    { day: "Mon", attendance: 75 },
    { day: "Tue", attendance: 85 },
    { day: "Wed", attendance: 90 },
    { day: "Thu", attendance: 70 },
    { day: "Fri", attendance: 95 },
];

const Dashboard = () => {
    return (
        <div className="dashboard-wrapper">
            <video autoPlay loop muted className="video-bg">
                <source src="/background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <SideNav />
            <div className="dashboard-page">
                <div className="dashboard">
                    <HeaderDash />
                    <div className="dashboard-container">
                        <div className="graph">
                            <h2>Attendance Graph</h2>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={data}>
                                    <XAxis dataKey="day" />
                                    <YAxis />
                                    <Tooltip />
                                    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                                    <Line type="monotone" dataKey="attendance" stroke="#8884d8" />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="calendar">
                            <h2>Attendance Calendar</h2>
                            <Calendar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
