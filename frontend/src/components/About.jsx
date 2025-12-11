import React from "react";
import aboutImg from "../assets/about.jpg";
import "./about.css";

const About = () => {
  return (
    <section className="about-section py-5" id="about">
      <div className="container">
        <h2 className="text-center mb-5">About Us</h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src={aboutImg}
              alt="About Us"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <h3>Welcome to Our Restaurant</h3>
            <p>
              We are dedicated to providing the finest dining experience with
              fresh ingredients and exceptional service. Our chefs craft each
              dish with passion and creativity.
            </p>
            <p>
              Whether you're here for a casual meal or a special occasion, we
              promise an unforgettable experience with delicious food and a warm,
              welcoming atmosphere.
            </p>
            <p>
              Join us to explore our diverse menu and enjoy a perfect blend of
              flavors from around the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

