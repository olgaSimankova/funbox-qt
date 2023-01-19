import React, { Dispatch, SetStateAction } from "react";
import { IProductData } from "../../types/types";

interface IUnderCardTextProps {
  product: IProductData;
  selected: boolean;
  setSelected: Dispatch<SetStateAction<boolean>>;
}

export const UnderCardText: React.FC<IUnderCardTextProps> = (props) => {
  const { product, selected, setSelected } = props;
  const renderMessage = () => {
    if (product.disabled) {
      return (
        <p className="card_under-disabled">{`Печалька, ${product.flavour} закончился.`}</p>
      );
    }

    if (selected) {
      return <p className="card_under-selected">{product.description}</p>;
    }

    return (
      <>
        Чего сидишь? Порадуй котэ,
        <button className="card_button" type="button">
          <span
            onClick={() => setSelected(() => !product.selected)}
            className="card_button-dashed"
          >
            купи
          </span>
          .
        </button>
      </>
    );
  };

  const cardText = renderMessage();
  return <div className="card_under">{cardText}</div>;
};
