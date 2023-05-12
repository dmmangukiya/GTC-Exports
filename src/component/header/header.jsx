import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const Header = ({ itemCount }) => (
  <header className="header">
    <Link to="/" className="logo">
      <i className="fas fa-truck"></i> GTC Exports
    </Link>

    <nav className="navbar">
      <Link to="/" href="#home">Home</Link>
      <a href="#features">Features</a>
      <a href="#products">Products</a>
      {/* <a href="#categories">Categories</a> */}
      <a href="#footer">Contact</a>
    </nav>

    <div className="icons">
      <div className="fas fa-bars" id="menu-btn"></div>
      {/* <div className="fas fa-search" id="search-btn"></div> */}

      <Link to="/cart">
        <div className="fas fa-shopping-cart" id="cart-btn"></div>
        {/* <span className="item-count">{itemCount}</span> */}
      </Link>
    </div>

    {/* <form action="" className="search-form">
      <input type="text" id="search-box" placeholder="search" />
      <label for="search-box" className="fas fa-search"></label>
    </form> */}

    <div className="shopping-cart">
      <div className="cart" id="cart">
        <div className="title">CART</div>
        <div id="title"></div>
      </div>

      <button href="#" className="btn inquiry">
        Inquiry
      </button>
    </div>
  </header>
);

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps)(Header);
