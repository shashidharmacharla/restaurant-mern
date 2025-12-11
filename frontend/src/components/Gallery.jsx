import React from "react";
import "./gallery.css";

import g1 from "../assets/gallery1.jpg";
import g2 from "../assets/gallery2.jpg";
import g3 from "../assets/gallery3.jpg";
import g4 from "../assets/gallery4.jpg";
import g5 from "../assets/gallery5.jpg";
import g6 from "../assets/gallery6.jpg";

const Gallery = () => {
  return (
    <section className="gallery-section py-5" id="gallery">
      <div className="container">
        <h2 className="text-center mb-5">Our Gallery</h2>
        <div className="row g-3">
          {[g1, g2, g3, g4, g5, g6].map((imgSrc, idx) => (
            <div key={idx} className="col-md-4">
              <img
                src={imgSrc}
                alt={`Gallery ${idx + 1}`}
                className="img-fluid rounded gallery-img"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

