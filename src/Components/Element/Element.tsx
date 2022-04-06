import React from "react";
import { eatListType } from "../../Context/context";
import "./Element.css";
const Element = ({ EatItem }: { EatItem: eatListType }) => {
  return (
    <div className="Elemnt__block">
      <div className="Block__imgblock">
        <img
          className="Block__img"
          src="https://cdn.vkuso.ru/uploads/cache/thumb/3e/12afc8a084b1d3e_250x187.jpg"
          alt="eat"
        />
      </div>
      <div className="Block__text">
        <h1 className="Block__h1">{EatItem.name}</h1>
        <p className="Block__p" style={{ marginTop: 11, marginBottom: 0 }}>
          Состав:
        </p>
        <p className="Block__p" style={{ margin: 0, marginTop: 10 }}>
          {EatItem.comp.map((item, index) => {
            if (EatItem.comp.length - 1 != index) {
              return `${item}, `;
            } else {
              return `${item}.`;
            }
          })}
        </p>
      </div>
    </div>
  );
};

export default Element;
