import React from "react";
import "./product.css";
import { ProductsData } from "../components/productsData";

const Products = () => {
  console.log(ProductsData);
  return (
    <div className="products">
      <h1>car model display</h1>
      <div className="cardsSection">
        {ProductsData?.map((product, key) => {
          return (
            <div className="productCard" key={key}>
              <img src={product.image} alt="" />
              <div className="text">
                <h3>{product.model}</h3>
                <h4>{product.price} CFA</h4>
              </div>
              {/* <p>{product.details}</p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
