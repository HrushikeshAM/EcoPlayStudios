import React, { useEffect, useState } from "react";
import logo from "./logo.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // if scrolled more than 50px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <a href="/" className="navbar-logo">
        <img src={logo} alt="Eco Play Studios Logo" className="logo-img" />
        <span className="logo-text">Eco Play Studios</span>
      </a>

      {/* 🔥 apply scrolled class dynamically to nav-links */}
      <ul className={`nav-links ${scrolled ? "scrolled" : ""}`}>
        <li><a href="/EcoPlayStudios">Home</a></li>
        <li><a href="/EcoPlayStudios/currentgames">Current Games</a></li>
        <li><a href="/EcoPlayStudios/upcominggames">Future Games</a></li>
        <li><a href="/EcoPlayStudios/varahan">Varahan</a></li>
        <li><a href="/EcoPlayStudios/about">About</a></li>
        <li><a href="/EcoPlayStudios/investors">Investors</a></li>
        <li><a href="/EcoPlayStudios/contact">Contact</a></li>
      </ul>

      <button className="join-btn">Join Us</button>
    </nav>
  );
}

export default Navbar;
