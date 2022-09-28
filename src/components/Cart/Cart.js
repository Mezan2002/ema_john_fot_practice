import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;

  return (
    <div className="cartContainer">
      <h2>Order Summray</h2>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: </p>
      <p>Shipping Charge: </p>
      <p>Tax: </p>
      <h3>Grand Total: </h3>
      <button className="clearCartBtn">Clear Cart</button>
      <br />
      <button className="orderReviewBtn">Order Review</button>
    </div>
  );
};

export default Cart;
