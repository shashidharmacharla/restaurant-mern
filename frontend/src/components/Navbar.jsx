import React from "react";
import "./navbar.css"; // Import your custom CSS

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top custom-navbar">
      <div className="container">

        {/* Logo */}
        <a className="navbar-brand fw-bold fs-3 logo-text" href="#">
          🍽 RestoCafe
        </a>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto menu-items">

            <li className="nav-item">
              <a className="nav-link active" href="#home">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#menu">
                Menu
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#gallery">
                Gallery
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>

            <li className="nav-item">
              <a className="btn book-btn ms-3 px-3 fw-semibold" href="#book">
                Book Table
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
