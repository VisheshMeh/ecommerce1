import photo from "../images/Banner.png";
import photo2 from "../images/Screenshot 2023-06-28 104244.png";
import photo3 from "../images/contact.webp";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import React, { useEffect, useState } from "react";
import "./Main.css";

const Main = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const MainData = [
    {
      title: "Deal of the Day",
      subtitle: "Get an extra 40% off",
      description: "Precision, quality, and longevity",
      img: photo,
    },
    {
      title: "SecondDeal of the Day",
      subtitle: "Get an extra 50% off",
      description: "Precision ",
      img: photo2,
    },
    {
      title: "Third Deal of the Day",
      subtitle: "Get an extra 60% off",
      description: "Precision and longevity",
      img: photo3,
    },
  ];

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % MainData.length);
  };

  const handlePrev = () => {
    setCurrentPage(
      (prevPage) => (prevPage - 1 + MainData.length) % MainData.length
    );
  };

  useEffect(() => {
    setTimeout(
      () => document.getElementById("btnNext").click(handleNext),
      10000
    );
  }, []);

  return (
    <div className="Main1">
      <div
        className={`Main ${currentPage > 0 ? "Main-transition-left" : ""} ${
          currentPage < MainData.length - 1 ? "Main-transition-right" : ""
        }`}
      >
        <div className="navigation">
          <button className="arrow-btn prev-btn" onClick={handlePrev}>
            <IoIosArrowDropleftCircle />
          </button>
        </div>
        <div className="content">
          <div className="image-container">
            <img src={MainData[currentPage].img} alt="Main Image" />
          </div>
          <div className="content-container">
            <h2 className="title">{MainData[currentPage].title}</h2>
            <h3 className="subtitle">{MainData[currentPage].subtitle}</h3>
            <p className="description">{MainData[currentPage].description}</p>
            <button className="shop-now-btn">Shop Now</button>
          </div>
        </div>

        <div className="navigation">
          <button
            id="btnNext"
            className="arrow-btn next-btn"
            onClick={handleNext}
          >
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
