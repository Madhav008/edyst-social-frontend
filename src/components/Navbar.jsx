import React from "react";
import { BsCodeSlash } from "react-icons/bs";
import { FaUser, FaUserShield } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-left">
        <Link  className="logo" to="/">
          <span className="logo">
            <BsCodeSlash /> The Social Media App
          </span>
        </Link>
      </div>
      <div className="nav-right">
        <Link className="register" to="/register">
          <span className="register">Register</span>
        </Link>
        <Link className="login" to="/login">
          <span className="login">Login</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
