import React from "react";
import "./Home.css";
import BannerImg from "../../components/images/Banner.png";
const Home = () => {
  return (
    <div className="home">
      <div className="text-content">
        <h2>QDx Instacheck</h2>
        <h1>NEW Arrival,new possibilities!</h1>
        <h2>Enjoy upto 10% off</h2>
        <button className="btn">Know more</button>
      </div>
      <div className="banner-img">
        <img className="banner" src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
