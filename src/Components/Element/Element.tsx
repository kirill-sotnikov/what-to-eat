import { useState } from "react";
import { eatListType } from "../../Context/context";
import DeleteButton from "../DeleteButton/DeleteButton";
import "./Element.css";
const Element = ({ EatItem }: { EatItem: eatListType }) => {
  const [isShowRecept, setIsShowRecept] = useState(false);
  const [deletedElement, setDeletedElement] = useState(false);

  if (deletedElement) {
    return <></>;
  }

  return (
    <div className="Elemnt__block">
      <div
        style={{ display: "flex" }}
        onClick={() => {
          setIsShowRecept((value) => !value);
        }}
      >
        <div className="Block__imgblock">
          <img className="Block__img" src={EatItem.imgUrl} alt="eat" />
        </div>
        {EatItem.isLocalStorage && (
          <DeleteButton
            removedItem={EatItem.name}
            onClick={() => setDeletedElement(true)}
          />
        )}
        <div className="Block__text">
          <h1 className="Block__h1">{EatItem.name}</h1>
          <p className="Block__p" style={{ marginTop: 11, marginBottom: 0 }}>
            Состав:
          </p>
          <p className="Block__p" style={{ margin: 0, marginTop: 10 }}>
            {EatItem.comp.map((item, index) => {
              if (EatItem.comp.length - 1 !== index) {
                return `${item}, `;
              } else {
                return `${item}.`;
              }
            })}
          </p>
        </div>
      </div>
      {isShowRecept && (
        <div style={{ marginLeft: 10 }}>
          <p className="Block__p" style={{ marginTop: 11, marginBottom: 0 }}>
            Рецепт:
          </p>
          <p className="Block__p__recept">{EatItem.recept}</p>
        </div>
      )}
    </div>
  );
};

export default Element;
