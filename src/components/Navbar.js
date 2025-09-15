import React from "react";
import logo from "./logo.png"; // ✅ Change to your JPG logo path

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo + Brand Name */}
      <a href="/" className="navbar-logo">
        <img src={logo} alt="Eco Play Studios Logo" className="logo-img" />
        <span className="logo-text">Eco Play Studios</span>
      </a>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/currentgames">Current Games</a></li>
        <li><a href="/upcominggames">Future Games</a></li>
        <li><a href="/varahan">Varahan</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/investors">Investors</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      {/* Join Us Button */}
      <button className="join-btn">Join Us</button>
    </nav>
  );
}

export default Navbar;
