import React from "react";
import logo from "../../Logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <nav>
      <div className="navLogo">
        <img src={logo} alt="" />
      </div>
      <div className="navLinks">
        <a href="/home">Home</a>
        <a href="/shop">Shop</a>
        <a href="/order_review">Order Review</a>
        <a href="/inventory">Inventory</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Header;
