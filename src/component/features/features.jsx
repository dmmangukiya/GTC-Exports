import React from "react";
import "./features.css";

const Features = () => (
    <section id="features" className="features">
      <h1 className="heading">our <span>features</span></h1>

      <div className="box-container">
        <div className="box">
          <img src="quality-removebg-preview.png" alt="Image" />
          <h3>Quality</h3>
          <p>
            We guarantee that our Products are best quality as we believe in making high quality network with our customers.
          </p>
          {/* <a href="#footer" className="btn">Read more</a> */}
        </div>

        <div className="box">
          <img src="delivery.png" alt="Image" />
          <h3>price</h3>
          <p>
          Our company takes great care to offer fair and competitive prices for our products, ensuring that our customers receive high-quality items at a reasonable cost.
          </p>
          {/* <a href="#footer" className="btn">Read more</a> */}
        </div>

        <div className="box">
          <img src="payment.png" alt="Image" />
          <h3>easy payment</h3>
          <p>
          "We understand that convenience and security are top priorities for our customers, which is why we offer a variety of payment methods, including credit/debit cards, PayPal, and bank transfers, to make the purchasing process as smooth and hassle-free as possible."
          </p>
          {/* <a href="#footer" className="btn">Read more</a> */}
        </div>
      </div>
    </section>
)

export default Features;