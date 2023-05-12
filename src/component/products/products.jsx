import React, { useState } from "react";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";

import { ProductsData } from "../../data/products";
// import Search from "../../data/search";
import "./products.css";

const Products = ({ item, addItem }) => {
  //   const dispatch = useDispatch();

  //   const data = useSelector((state) => state.productData);
  //   console.log("reset data in main component from saga", data);

  //   useEffect(()=>{
  //     dispatch()
  //   },[]);

  const [MenuProducts, setMenuProducts] = useState(ProductsData);
  const [searchTerm, setSearchTerm] = useState('');

  const filter = (type) => {
    setMenuProducts(ProductsData.filter((product) => product.type === type));
  };
  return (
    <section className="products" id="products">
      <h1 className="heading">
        our <span>products</span>
      </h1>
      {/* <Search/> */}

      <input className="search" type='text' placeholder='search' onChange={(event) => {setSearchTerm(event.target.value)}} content="width:device-width, height:device-height,  initial-scale=1.5;" />
      <div className="swiper product-slider">
      {
        MenuProducts.filter((product)=>{
                    if (searchTerm == ""){
                        return product
                    }else if (product.name.toLowerCase().includes(searchTerm.toLowerCase())){
                        return product
                    }
                }).map((product, i) => (
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



{/* 
        {MenuProducts.map((product, i) => (
          <div className="wrapper">
            <div className="swiper-slide box" id="item1">
              <img src={product.img} alt="product-image" />
              <h3>{product.name}</h3>
              <div className="price">{product.price}</div>

              <button onClick={() => addItem(product)} className="btn">
                add 
              </button>
            </div>
          </div>
        ))} */}
      </div>
    </section>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (product) => dispatch(addItem(product)),
});

export default connect(null, mapDispatchToProps)(Products);
