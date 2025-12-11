import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero d-flex align-items-center" id="home">
      <div className="container text-center text-white">
        <h1 className="hero-title">
          Welcome to <span>RestoCafe</span>
        </h1>

        <p className="hero-subtitle">
          Experience delicious food crafted with love & premium ingredients.
        </p>

        <div className="mt-4">
          <a href="#menu" className="btn hero-btn me-3">
            Explore Menu
          </a>

          <a href="#book" className="btn hero-btn-outline">
            Book Table
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
