import React, { useState } from "react";
import { useEffect } from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";

import { ProductsData } from "../../data/products";

import "./products.css";

const Products = ({ item, addItem }) => {
  //   const dispatch = useDispatch();

  //   const data = useSelector((state) => state.productData);
  //   console.log("reset data in main component from saga", data);

  //   useEffect(()=>{
  //     dispatch()
  //   },[]);

  const [MenuProducts, setMenuProducts] = useState(ProductsData);

  const filter = (type) => {
    setMenuProducts(ProductsData.filter((product) => product.type === type));
  };
  return (
    <section className="products" id="products">
      <h1 className="heading">
        our <span>products</span>
      </h1>

      <div className="swiper product-slider">
        {MenuProducts.map((product, i) => (
          <div className="wrapper">
            <div className="swiper-slide box" id="item1">
              <img src={product.img} alt="product-image" />
              <h3>{product.name}</h3>
              {/* <div className="price">{product.price}</div> */}

              <button onClick={() => addItem(product)} className="btn">
                add 
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (product) => dispatch(addItem(product)),
});

export default connect(null, mapDispatchToProps)(Products);
