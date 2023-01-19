import React from "react";
import { ProductsContainer } from "../components/cards-list/cards-list";
import { MAIN_HEADER } from "../types/constants";

const data = JSON.parse;

export const MainPage = () => {
  return (
    <main className="main_wrapper">
      <section className="main_container">
        <h1 className="main_heading">{MAIN_HEADER}</h1>
        <ProductsContainer />
      </section>
    </main>
  );
};
