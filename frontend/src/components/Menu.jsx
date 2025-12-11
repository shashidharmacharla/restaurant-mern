import React from "react";
import "./menu.css";

// Import menu images
import menu1 from "../assets/menu1.jpg";
import menu2 from "../assets/menu2.jpg";
import menu3 from "../assets/menu3.jpg";

const Menu = () => {
  return (
    <section className="menu-section py-5" id="menu">
      <div className="container">
        <h2 className="text-center mb-5">Our Menu</h2>
        <div className="row g-4">
          {/* Menu Item 1 */}
          <div className="col-md-4">
            <div className="card h-100">
              <img src={menu1} className="card-img-top" alt="Menu Item 1" />
              <div className="card-body">
                <h5 className="card-title">Grilled Salmon</h5>
                <p className="card-text">Freshly grilled salmon with herbs and lemon.</p>
                <p className="card-text fw-bold">$18.99</p>
              </div>
            </div>
          </div>

          {/* Menu Item 2 */}
          <div className="col-md-4">
            <div className="card h-100">
              <img src={menu2} className="card-img-top" alt="Menu Item 2" />
              <div className="card-body">
                <h5 className="card-title">Spaghetti Carbonara</h5>
                <p className="card-text">Classic Italian pasta with creamy sauce and bacon.</p>
                <p className="card-text fw-bold">$14.99</p>
              </div>
            </div>
          </div>

          {/* Menu Item 3 */}
          <div className="col-md-4">
            <div className="card h-100">
              <img src={menu3} className="card-img-top" alt="Menu Item 3" />
              <div className="card-body">
                <h5 className="card-title">Caesar Salad</h5>
                <p className="card-text">Crisp romaine lettuce with parmesan and croutons.</p>
                <p className="card-text fw-bold">$9.99</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;

