import React from "react";
import "./app.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Contact from "./components/Contact/Contact";
import ProductsList from "./components/ProductList/ProductList";
import TwoImageCards from "./components/ImageCard/ImageCard";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <TwoImageCards />
        <ProductsList />
        <Main />
        <Contact />
        <Footer />
      </div>
    </>
  );
};
export default App;
