import React, { useState } from "react";
import "./reservation.css";

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 1,
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Reservation successful! We look forward to serving you.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          guests: 1,
          message: "",
        });
      } else {
        const errorData = await response.json();
        setStatus(`Error: ${errorData.message || "Something went wrong"}`);
      }
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    }
  };

  return (
    <section className="reservation-section py-5" id="reservation">
      <div className="container">
        <h2 className="text-center mb-5">Book a Reservation</h2>

        <form className="reservation-form mx-auto" style={{ maxWidth: "600px" }} onSubmit={handleSubmit}>
          {status && (
            <div
              className={`alert ${
                status.startsWith("Error") ? "alert-danger" : "alert-success"
              }`}
              role="alert"
            >
              {status}
            </div>
          )}

          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              required
              placeholder="Your full name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email<span className="text-danger">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              required
              placeholder="Your email address"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-control"
              placeholder="Your phone number"
            />
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="date" className="form-label">
                Date<span className="text-danger">*</span>
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="form-control"
                required
                min={new Date().toISOString().split("T")[0]} // no past dates
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="time" className="form-label">
                Time<span className="text-danger">*</span>
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="guests" className="form-label">
              Number of Guests<span className="text-danger">*</span>
            </label>
            <input
              type="number"
              id="guests"
              name="guests"
              min="1"
              max="20"
              value={formData.guests}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Special Requests
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-control"
              rows="3"
              placeholder="Any special requirements?"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Book Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Reservation;

