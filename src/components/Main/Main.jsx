// import React from "react";
import "./Main.css";

// const Main = () => {
//   return <div>Main</div>;
// };

// export default Main;
import React, { useState } from "react";
import "./Main.css";

const Main = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const MainData = [
    {
      title: "Deal of the Day",
      subtitle: "Get an extra 30% off",
      description: "Precision, quality, and longevity",
    },
    {
      title: "SecondDeal of the Day",
      subtitle: "Get an extra 30% off",
      description: "Precision, quality, and longevity",
    },
    {
      title: "THird Deal of the Day",
      subtitle: "Get an extra 30% off",
      description: "Precision, quality, and longevity",
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

  return (
    <div className="Main1">
      <div
        className={`Main ${currentPage > 0 ? "Main-transition-left" : ""} ${
          currentPage < MainData.length - 1 ? "Main-transition-right" : ""
        }`}
      >
        <div className="image-container">
          <img src="path/to/image.jpg" alt="Main Image" />
        </div>
        <div className="content-container">
          <h2 className="title">{MainData[currentPage].title}</h2>
          <h3 className="subtitle">{MainData[currentPage].subtitle}</h3>
          <p className="description">{MainData[currentPage].description}</p>
          <button className="shop-now-btn">Shop Now</button>
        </div>
        <div className="navigation">
          <button className="arrow-btn prev-btn" onClick={handlePrev}>
            &#8249;
          </button>
          <button className="arrow-btn next-btn" onClick={handleNext}>
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
