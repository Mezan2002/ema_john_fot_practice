import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="bannerContainer">
      <div className="bannerContent">
        <p style={{ fontSize: "17px", lineHeight: "20px", color: "#FF9900" }}>
          Sale up to 70% off
        </p>
        <h3 style={{ fontSize: "60px", lineHeight: "5px" }}>
          New Collection For Fall
        </h3>
        <p style={{ fontSize: "24px" }}>
          Discover all the new arrivals of ready-to-wear collection.
        </p>
        <button
          style={{
            backgroundColor: "#FF9900",
            border: "none",
            marginTop: "80px",
            padding: "20px 60px",
            borderRadius: "5px",
            fontSize: "22px",
          }}
        >
          Shop Now
        </button>
      </div>
      <div className="bannerImg">
        <img
          src="https://images.unsplash.com/photo-1552573102-2b44b44d85b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
