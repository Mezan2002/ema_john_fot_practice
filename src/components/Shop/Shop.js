import React, { useEffect, useState } from "react";
import Products from "../Products/Products";

import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url =
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = () => {
    console.log("Add to Cart Button Clicked");
  };
  return (
    <div className="shopContainer">
      <div className="products">
        {products.map((product) => (
          <Products
            product={product}
            key={product.id}
            addToCart={addToCart}
          ></Products>
        ))}
      </div>
      <div className="orderSummary"></div>
    </div>
  );
};

export default Shop;
