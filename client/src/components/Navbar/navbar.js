import React from 'react';
import "./style.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="outer-container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" id="name">Pet Parent</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Portfolio">Learn More</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Contact">Login/Signup</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    );
}

export default Navbar;
