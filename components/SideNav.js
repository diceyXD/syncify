import React from "react";
import "./sidenav.css";

const SideNav = () => {
    return (
        <div className="side-nav">
            <ul>
                <li>
                    <a href="#">Marks</a>
                </li>
                <li>
                    <a href="#">Attendance</a>
                </li>
            </ul>
        </div>
    );
};

export default SideNav;
