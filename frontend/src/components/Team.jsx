import React from "react";
import "./team.css";

import chef1 from "../assets/chef1.jpg";
import chef2 from "../assets/chef2.jpg";
import chef3 from "../assets/chef3.jpg";

const Team = () => {
  return (
    <section className="team-section py-5" id="team">
      <div className="container">
        <h2 className="text-center mb-4">Our Team</h2>

        <div className="row text-center">
          <div className="col-md-4">
            <img src={chef1} alt="Chef 1" className="img-fluid rounded-circle team-img" />
            <h4 className="mt-3">Chef Andrew</h4>
            <p>Head Chef</p>
          </div>

          <div className="col-md-4">
            <img src={chef2} alt="Chef 2" className="img-fluid rounded-circle team-img" />
            <h4 className="mt-3">Chef Maria</h4>
            <p>Pastry Chef</p>
          </div>

          <div className="col-md-4">
            <img src={chef3} alt="Chef 3" className="img-fluid rounded-circle team-img" />
            <h4 className="mt-3">Chef David</h4>
            <p>Sous Chef</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

