import React from "react";
import { PRODUCTS_DATA } from "../../assets/data/data";
import { Card } from "../card/Card";

const products = PRODUCTS_DATA;

export const CardsList = () => {
  return (
    <div className="products_container">
      {products.map((productData) => (
        <Card {...productData} />
      ))}
    </div>
  );
};
