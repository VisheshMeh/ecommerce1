import React from "react";
import "./Product.css";
import photoo from "../images/Screenshot 2023-06-28 104244.png";
import { AiOutlineHeart } from "react-icons/ai";
const ProductCard = () => {
  return (
    <div className="product-card">
      <img src={photoo} alt="Product Image" />
      <h2>QDX INSTACHECK</h2>
      <h3>₹ 1000.00</h3>
      <div className="bottom">
        <button className="add-to-cart-btn">ADD TO CART</button>
        <p className="heart-icon">
          <AiOutlineHeart />
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
