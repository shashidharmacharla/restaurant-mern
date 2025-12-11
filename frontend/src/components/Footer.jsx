import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-section pt-5 pb-3">
      <div className="container">
        <div className="row g-4">

          {/* About */}
          <div className="col-md-4">
            <h4 className="footer-title">About Us</h4>
            <p className="footer-text">
              We bring authentic flavors, fresh ingredients, and a cozy dining 
              atmosphere — making every meal special.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#menu">Menu</a></li>
              <li><a href="#reservation">Reservation</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#gallery">Gallery</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4">
            <h4 className="footer-title">Contact</h4>
            <p className="footer-text">📍 123 Food Street, Hyderabad</p>
            <p className="footer-text">📞 +91 98765 43210</p>
            <p className="footer-text">✉️ info@restaurant.com</p>
          </div>

        </div>

        {/* Bottom line */}
        <hr className="footer-divider" />

        <div className="text-center pt-2">
          <p className="footer-bottom">
            © {new Date().getFullYear()} Restaurant. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
