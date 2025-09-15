import React from "react";
import { FaFacebookF, FaInstagram, FaDiscord, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Eco Play Studios</h3>
          <p>Making gaming meaningful through environmental impact & fun.</p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaDiscord /></a>
            <a href="#"><FaXTwitter /></a>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <h4>Games</h4>
            <p>Trash-to-Treasure</p>
            <p>Ocean Cleanup</p>
            <p>Carbon Quest</p>
          </div>
          <div>
            <h4>Company</h4>
            <p>About</p>
            <p>Careers</p>
            <p>Press</p>
          </div>
          <div>
            <h4>Support</h4>
            <p>Help Center</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </div>
      <p className="footer-bottom">© 2025 Eco Play Studios. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
