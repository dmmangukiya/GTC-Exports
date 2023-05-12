import React from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.action";

import "./cart-item.css";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { img, name, quantity } = cartItem;
  return (
    <div className="container">
      <div className="wrapper">
        <div className="bottom">
          <div className="info">
            <div className="product">

              <div className="product-detail">
                
                <img src={img} alt="Image" />
                <div className="details">
                  <span className="product-name">
                    <b>product :</b> {name}
                  </span>
                  {/* <span className="product-id"><b>Id :</b> 1 </span> */}
                </div>
                <div className="price-detail">
                <div className="product-container">
                  <div className="add" onClick={() => addItem(cartItem)}>
                    &#10011;
                  </div>
                  <div className="quantity">{quantity}</div>
                  <div className="remove" onClick={() => removeItem(cartItem)}>
                    &#8211;
                  </div>
                  <div className="delete">
                    <span onClick={() => clearItem(cartItem)}>&#10005;</span>
                  </div>
                </div>

                {/* <div className="product-price">$1.00</div> */}
                </div>

              </div>
              
            </div>
            <hr className="hr" />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
