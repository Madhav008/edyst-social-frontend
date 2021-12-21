import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="main-page">
      <Navbar />
      <div className="container">
        <div className="heading">
          <h1>The Social Media App</h1>
          <span>
            A fun place for developers to share ideas on technology.Plenty of
            cool discussions!
          </span>
          <div className="main-btn">
            <Link to="/register">
              <button className="rgt-btn">Register</button>
            </Link>
            <div className="gap"></div>
            <Link to="/login">
              <button className="lgn-btn">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
