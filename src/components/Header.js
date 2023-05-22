import React from "react";
import "./header.css";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-section">
        <p>AJAY.</p>
      </div>
      <div className="navbar-section">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
