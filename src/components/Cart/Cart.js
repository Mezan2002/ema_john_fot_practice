import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  let shipping = 0;
  for (const product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;
  return (
    <div className="cartContainer">
      <h2>Order Summray</h2>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: ${total}</p>
      <p>Shipping Charge: ${shipping}</p>
      <p>Tax: ${tax}</p>
      <h3>Grand Total: ${grandTotal}</h3>
      <button className="clearCartBtn">Clear Cart</button>
      <br />
      <button className="orderReviewBtn">Order Review</button>
    </div>
  );
};

export default Cart;
