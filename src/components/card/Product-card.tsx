import React, { useEffect, useState } from "react";
import {
  DEFAULT_CARD_SUBTITLE,
  HOVER_CARD_SUBTITLE,
} from "../../types/constants";
import { IProductData } from "../../types/types";
import catImg from "../../assets/img/cat.png";
import { UnderCardText } from "../under-card-text/Under-card-text";

export const ProductCard: React.FC<IProductData> = (product) => {
  const [selected, setSelected] = useState(product.selected);
  const [subTitle, setSubTitle] = useState(DEFAULT_CARD_SUBTITLE);

  useEffect(() => {
    if (!selected) {
      setSubTitle(DEFAULT_CARD_SUBTITLE);
    }
  }, [selected]);

  const selectedClass = selected
    ? "card_background card_background-selected"
    : "card_background";

  const disabledClass = product.disabled
    ? "card_background  card_background-disabled"
    : "card_background";

  const hoverClass =
    subTitle === HOVER_CARD_SUBTITLE
      ? "card_subTitle card_subTitle-hover"
      : "card_subTitle";

  const handleMouseIn = () => {
    if (selected) {
      setSubTitle(HOVER_CARD_SUBTITLE);
    }
  };

  const handleMouseOut = () => {
    if (selected) {
      setSubTitle(DEFAULT_CARD_SUBTITLE);
    }
  };

  return (
    <div
      className="card"
      onMouseEnter={() => handleMouseIn()}
      onMouseLeave={() => handleMouseOut()}
      onClick={() => setSelected(() => !selected)}
    >
      <div className={product.disabled ? disabledClass : selectedClass}>
        <div className="card_container">
          <h3 className={hoverClass}>{subTitle}</h3>
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
      <UnderCardText
        product={product}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
};
