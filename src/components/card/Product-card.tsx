import React, { useState } from "react";
import { DEFAULT_CARD_SUBTITLE } from "../../types/constants";
import { IProductData } from "../../types/types";
import catImg from "../../assets/img/cat.png";

export const ProductCard: React.FC<IProductData> = (product) => {
  // const [selected, setSelected] = useState(selected);
  const [subTitle, setSubTitle] = useState(DEFAULT_CARD_SUBTITLE);

  return (
    <div className="card_background">
      <div className="card_container">
        <h3 className="card_subTitle">{subTitle}</h3>
        <h2 className="card_title">{product.name}</h2>
        <h5 className="card_title card_title-small">{product.flavour}</h5>
        <div className="card_info">
          <p className="card_info_text">
            <b>{product.portion}</b> порций
          </p>
          <p className="card_info_text">{product.gift}</p>
          {product.comment && (
            <p className="card_info_text">{product.comment}</p>
          )}
        </div>
        <img className="card_image" src={catImg} alt="тут кот" />
        <div className="card_weight">
          {product.weight}
          <span className="card_weight-small">кг</span>
        </div>
      </div>
    </div>
  );
};
