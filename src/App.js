import React from "react";
import "./app.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <Main />
        <Footer />
      </div>
    </>
  );
};
export default App;
