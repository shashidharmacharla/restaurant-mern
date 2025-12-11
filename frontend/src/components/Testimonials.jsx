import React from "react";
import "./testimonials.css";

import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";

const testimonialsData = [
  {
    id: 1,
    name: "Alex Johnson",
    text: "Amazing food and top-quality service!",
    image: user1,
  },
  {
    id: 2,
    name: "Sarah Williams",
    text: "The ambiance is lovely and dishes delicious.",
    image: user2,
  },
  {
    id: 3,
    name: "David Miller",
    text: "One of the best dining experiences I've had!",
    image: user3,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section py-5" id="testimonials">
      <div className="container">
        <h2 className="text-center mb-4">What Our Customers Say</h2>
        <div className="row">
          {testimonialsData.map(({ id, name, text, image }) => (
            <div key={id} className="col-md-4 text-center">
              <img
                src={image}
                alt={name}
                className="rounded-circle testimonial-img mb-3"
              />
              <p className="fst-italic">"{text}"</p>
              <h5>{name}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

