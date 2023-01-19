import React from "react";
import { PRODUCTS_DATA } from "../../assets/data/data";
import { ProductCard } from "../card/Product-card";

const products = PRODUCTS_DATA;

export const ProductsContainer = () => {
  return (
    <div className="products_container">
      {products.map((productData) => (
        <ProductCard {...productData} />
      ))}
    </div>
  );
};
