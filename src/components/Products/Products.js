import React from "react";
import "./Products.css";
const Products = (props) => {
  const { addToCart } = props;
  const { img, name, seller, price, ratings } = props.product;
  return (
    <div className="productsContainer">
      <div className="productImg">
        <img src={img} alt="" />
      </div>
      <div className="productInfo">
        <h3 style={{ fontFamily: "Roboto", marginBottom: "10px" }}>{name}</h3>
        <h3
          style={{
            fontFamily: "Roboto",
            margin: "10px 0 40px 0",
            color: "#FF9900",
          }}
        >
          Price: ${price}
        </h3>
        <p style={{ margin: " 5px 0" }}>
          <small>Manufacturer: {seller}</small>
        </p>
        <p style={{ margin: " 5px 0" }}>
          <small>Ratings: {ratings} stars</small>
        </p>
      </div>
      <div className="addToCartBtn">
        <button onClick={addToCart}>
          <p>Add to Cart</p>
        </button>
      </div>
    </div>
  );
};

export default Products;
