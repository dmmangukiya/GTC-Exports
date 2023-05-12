import React from "react";

import "./footer.css";

const Footer = () => (
  <section id="footer" className="footer">
    <div className="box-container">
      <div className="box">
        <h3>
          GTC Exports <i className="fas fa-truck"></i>
        </h3>
        <p>
          Product handling with our skilled transportation partners <i className="fas fa-handshake"></i>
        </p>
        <div className="share">
          <a href="" className="fab fa-facebook-f"></a>
          <a href="" className="fab fa-twitter"></a>
          <a href="" className="fab fa-instagram"></a>
          <a href="" className="fab fa-linkedin"></a>
        </div>
      </div>

      <div className="box">
        <h3>contact info</h3>
        <a href="tel:+917623917911" className="links">
          <i className="fas fa-phone"></i>+91 76239-17911
        </a>
        {/* <a href="#" className="links">
          <i className="fas fa-phone"></i>+91 94281-40899
        </a> */}
        <a href="mailto:info@gautamindustries.info" className="links">
          <i className="fas fa-envelope"></i>info@gautamindustries.info
        </a>
        <a href="https://goo.gl/maps/s7kVyfcxfQ9ouj5UA" className="links">
          <i className="fas fa-map-marker-alt"></i>Gautam Arcade, shankar nagar Society, Kapodra, Surat, Gujarat 395006
        </a>
      </div>

      <div className="box">
        <h3>quick links</h3>
        <a href="#home" className="links">
          <i className="fas fa-arrow-right"></i>home
        </a>
        <a href="#features" className="links">
          <i className="fas fa-arrow-right"></i>features
        </a>
        <a href="#products" className="links">
          <i className="fas fa-arrow-right"></i>products
        </a>
      </div>
    </div>

    <div className="credit">
      created by <span>GTC</span> | all rights reserved
    </div>
  </section>
);

export default Footer;
