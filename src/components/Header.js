import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
<div id="headermain">
    <div id="header">
        {/* <h1 id="headerh">NESTORA </h1> */}
        <img id="nest" src={logo} alt="products" />
        <ul>
           <li><Link to="/">Home</Link></li>
           <li><Link to="/product">Products</Link></li>
           <li><Link to="/about">About Us</Link></li>
           <li><Link to="/contact">Contact</Link></li>
        </ul>
    </div>
</div>

  );
};

export default Header;