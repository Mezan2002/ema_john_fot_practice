import React, { useEffect, useState } from "react";
import { addToDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
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

  const [cart, setCart] = useState([]);

  const addToCart = (selectedProduct) => {
    const newCart = [...cart, selectedProduct];
    setCart(newCart);
    addToDb(selectedProduct.id);
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
      <div className="orderSummary">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
