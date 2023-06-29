import React from "react";
import "./Navbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <div>
      <section className="navBarSection">
        <header className="header flex">
          <div className="logoDiv">
            <a href="#" className="logo flex">
              <img src={logo} alt="" className="img" />
            </a>
          </div>
          <div className="navBar">
            <ul className="navLists flex">
              <li className="navItems">
                <a href="#" className="navLink">
                  Home
                </a>
              </li>
              <li className="navItems">
                <a href="#" className="navLink">
                  Collection
                </a>
              </li>
              <li className="navItems">
                <a href="#" className="navLink">
                  Others
                </a>
              </li>
              <li className="navItems">
                <a href="#" className="navLink">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="navBar1">
            <ul className="navLists flex">
              <li className="navItems1">
                <AiOutlineSearch className="icon" />
              </li>
              <li className="navItems1">
                <BsPerson className="icon" />
              </li>
              <li className="navItems1">
                <AiOutlineHeart className="icon" />
              </li>
              <li className="navItems1">
                <BsCart2 className="icon" />
              </li>
            </ul>
          </div>
        </header>
      </section>
    </div>
  );
};

export default Navbar;
