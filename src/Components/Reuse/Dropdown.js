import React from 'react';
import { Link } from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
    return (
        <div>
            <div className={isOpen ? "grid grid-rows-5 text-center items-center bg-yellow-500" : "hidden"} onClick={toggle}>
                <Link className="p-4" to="/">Home</Link>
                <Link className="p-4" to="/service">Service</Link>
                <Link className="p-4" to="/dashboard">Dashboard</Link>
                <Link className="p-4" to="/contact">Contact</Link>
                <Link className="p-4" to="/about">About Us</Link>
            </div>
        </div>
    );
};

export default Dropdown;