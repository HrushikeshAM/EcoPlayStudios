import React, { useEffect, useState } from "react";
import logo from "./logo.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Logo */}
      <a href="/" className="navbar-logo">
        <img src={logo} alt="Eco Play Studios Logo" className="logo-img" />
        <span className="logo-text">Eco Play Studios</span>
      </a>

      {/* Nav Links */}
      <ul className={`nav-links ${scrolled ? "scrolled" : ""} ${menuOpen ? "open" : ""}`}>
        <li><a href="/EcoPlayStudios">Home</a></li>
        <li><a href="/EcoPlayStudios/currentgames">Current Games</a></li>
        <li><a href="/EcoPlayStudios/upcominggames">Future Games</a></li>
        <li><a href="/EcoPlayStudios/varahan">Varahan</a></li>
        <li><a href="/EcoPlayStudios/about">About</a></li>
        <li><a href="/EcoPlayStudios/investors">Investors</a></li>
        <li><a href="/EcoPlayStudios/contact">Contact</a></li>
      </ul>

      {/* Join Button (hide on mobile if needed) */}
      <button className="join-btn">Join Us</button>

      {/* Hamburger */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
