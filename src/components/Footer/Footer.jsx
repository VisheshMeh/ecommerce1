import React from "react";
import "./Footer.css";
import { BsLinkedin } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { LiaCopyrightSolid } from "react-icons/lia";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">GENERAL</div>
          <span className="text">homeee</span>
          <span className="text">homeee</span>
          <span className="text">homeee</span>
          <span className="text">homeee</span>
          <span className="text">homeee</span>
        </div>
        <div className="col">
          <div className="title">YOUR ACCOUNT</div>
          <span className="text">homeee</span>
          <span className="text">homeee</span>
          <span className="text">homeee</span>
          <span className="text">homeee</span>
        </div>
        <div className="col">
          <div className="title">COLLECTIONS</div>
          <span className="text">homeee</span>
          <span className="text">homeee</span>
          <span className="text">homeee</span>
          <span className="text">homeee</span>
          <span className="text">homeee</span>
          <span className="text">homeee</span>
          <span className="text">homeee</span>
          <span className="text">homeee</span>
          <span className="text">homeee</span>
          <span className="text">homeee</span>
          <span className="text">homeee</span>
          <span className="text">homeee</span>
          <span className="text">homeee</span>
          <span className="text">homeee</span>
          <span className="text">homeee</span>
          <span className="text">homeee</span>
          <span className="text">homeee</span>
          <span className="text">homeee</span>
          <span className="text">homeee</span>
          <span className="text">homeee</span>
          <span className="text">homeee</span>
          <span className="text">homeee</span>
          <span className="text">homeee</span>
          <span className="text">homeee</span>
          <span className="text">homeee</span>
          <span className="text">homeee</span>
          <span className="text">homeee</span>
          <span className="text">homeee</span>
          <span className="text">homeee</span>
          <span className="text">homeee</span>
          <span className="text">homeee</span>
          <span className="text">homeee</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">Product From</div>
          <div>
            <BsLinkedin className="icon" />

            <AiFillTwitterCircle className="icon" />

            <BsFacebook className="icon" />
          </div>
          <div>
            <LiaCopyrightSolid className="icon" />
            <spam>2002</spam>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
