import React from "react";
import "./services.css";
import { FaUtensils, FaTruck, FaConciergeBell } from "react-icons/fa";

const Services = () => {
  return (
    <section className="services-section py-5" id="services">
      <div className="container">

        {/* Title */}
        <div className="text-center mb-5">
          <h2 className="services-title">
            Our <span>Services</span>
          </h2>
          <p className="services-subtitle">
            We offer top-quality services to make your experience delightful.
          </p>
        </div>

        {/* Service Cards */}
        <div className="row g-4">

          {/* Service 1 */}
          <div className="col-md-6 col-lg-4">
            <div className="service-card p-4 text-center shadow">
              <FaUtensils className="service-icon" />
              <h5 className="service-title mt-3">Dine-In</h5>
              <p className="service-text">
                Enjoy our cozy environment with freshly prepared dishes and
                best-in-class hospitality.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="col-md-6 col-lg-4">
            <div className="service-card p-4 text-center shadow">
              <FaTruck className="service-icon" />
              <h5 className="service-title mt-3">Home Delivery</h5>
              <p className="service-text">
                Get your favorite meals delivered hot and fresh right at home.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="col-md-6 col-lg-4">
            <div className="service-card p-4 text-center shadow">
              <FaConciergeBell className="service-icon" />
              <h5 className="service-title mt-3">Catering</h5>
              <p className="service-text">
                Premium catering services for birthdays, weddings, and all
                special events.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
