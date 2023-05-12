import { useState } from "react";
import { useEffect } from "react";

import "./Cart.css";

import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
import CheckoutItem from "../../component/cart-item/cart-item";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";

import {
  selectcartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
//  
import { useLocation } from "react-router-dom";

const Cart = ({ cartItems, total }) => {
  console.log(cartItems);
  const names = cartItems.map(function (cartItem) {
    return cartItem["name"];
  });
  const q = cartItems.map(function (cartItem) {
    return cartItem["quantity"];
  });

  console.log(names);
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [description, setDiscription] = useState("");
  const [summury, setSummury] = useState("");

  const location = useLocation();

  useEffect(() => { 
      window.scrollTo(0,0)
  }, [location])

  const handleSubmit = (event) => {
    event.preventDefault();

    const mailtoLink = `mailto:info@gautamindustries.info?subject=Contact Form Submission&body=
    Full Name: ${fullName}
    Address: ${address}
    Email: ${email}
    Description: ${names + ", quantity = " + q} 
    Phone Number: ${phoneNumber}
    Summury:${summury}`;
    

    window.open(encodeURI(mailtoLink));
  };

  return (
    <div className="container">
      <Header />
      <div className="wrapper">
        <h1 className="title">Shopping Cart</h1>
        <div className="top">
          <Link to="/">
            <button className="topbutton">conTinue shopping</button>
          </Link>
        </div>
      </div>

      {cartItems.map((cartItem) => (
        <CheckoutItem cartItem={cartItem} />
      ))}

      <div className="summary">
        <h1 className="summary-title">ORDER SUMMARY</h1>
        <div className="summary-item">
          <span className="summary-text">Product Name : </span>
          <span className="summary-product-name">
            {cartItems.map((cartItem) => {
              return (
                <div>
                  {cartItem.name + " = " + cartItem.quantity}
                  <br />
                </div>
              );
            })}{" "}
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            className="inform"
            type="text"
            id="fullName"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            className="inform"
            id="address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
          className="inform"
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            className="inform"
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Your order:</label>
          <textarea
            className="inform"
            type="text"
            id="description"
            value={names + ", Quantity = " + q}
            onChange={(event) => setDiscription(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="summury">Add description:</label>
          <textarea
            className="inform"
            value={summury}
            type="text"
            id="summury"
            onChange={(event) => setSummury(event.target.value)}
           
          />
        </div>
        <button className="inq-btn" type="submit">
         Send Inquiry
        </button>
      </form>

      <Footer />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectcartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Cart);
