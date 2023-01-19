import React from "react";
import { CardsList } from "../components/cards-list/cards-list";
import { MAIN_HEADER } from "../types/constants";

export const MainPage = () => {
  return (
    <main className="main">
      <div className="main_overlay"></div>
      <h1 className="main_heading">{MAIN_HEADER}</h1>
      <CardsList />
    </main>
  );
};
