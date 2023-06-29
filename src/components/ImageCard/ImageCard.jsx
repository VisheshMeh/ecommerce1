import React from "react";
import "./ImageCard.css";
import { AiOutlineArrowRight } from "react-icons/ai";
const ImageCard = () => {
  return (
    <>
      <div className="images-card">
        <div className="image-card">
          <h1>Haematology</h1>
          <h3>Large groups of products from haematology</h3>
          <div className="bottom">
            <button className="discover-btn">Discover</button>
            <span>
              <AiOutlineArrowRight />
            </span>
          </div>
        </div>
        <div className="image-card">
          <h1>Clinical Chemistry</h1>
          <h3>Large groups of products from haematology</h3>
          <div className="bottom">
            <button className="discover-btn">Discover</button>
            <span>
              <AiOutlineArrowRight />
            </span>
          </div>
        </div>
      </div>
      <button className="btnn">
        <p>Show More </p>
        <AiOutlineArrowRight />
      </button>
    </>
  );
};

export default ImageCard;
