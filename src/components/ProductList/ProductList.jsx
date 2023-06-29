import React from "react";
import ProductCard from "../Product/Product";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./ProductList.css";
const ProductsList = () => {
  const products = [
    {
      id: 1,
      name: "QDX INSTACHECK",
      price: "₹ 1000.00",
    },
    {
      id: 2,
      name: "QDX INSTACHECK 2",
      price: "₹ 1000.00",
    },
    {
      id: 3,
      name: "QDX INSTACHECK 3",
      price: "₹ 1000.00",
    },
    {
      id: 4,
      name: "QDX INSTACHECK 4",
      price: "₹ 1000.00",
    },
    {
      id: 5,
      name: "QDX INSTACHECK 5",
      price: "₹ 1000.00",
    },
    {
      id: 6,
      name: "QDX INSTACHECK 6",
      price: "₹ 1000.00",
    },
  ];

  return (
    <>
      <h1>Product Range</h1>
      <div className="products-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
      <button className="btnn">
        <p>Show More </p>
        <AiOutlineArrowRight />
      </button>
    </>
  );
};

export default ProductsList;
