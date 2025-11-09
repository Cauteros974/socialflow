import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

export const Navbar = () => {
    return(
        <div className="navbar">
            <div className="navbar-inner">
                <Link to="/" className="text-xl font-bold text-blue-600">SocialFlow</Link>
                <nav className="flex gap-6">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/create" className="nav-link">New Post</Link>
                    <Link to="/profile" className="nav-link">Profile</Link>
                </nav>
            </div>
        </div>
    );
};