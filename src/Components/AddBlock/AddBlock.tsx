import React, { useState } from "react";
import "./AddBlock.css";
export default function AddBlock({
  setshowAddBlock,
}: {
  setshowAddBlock: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [title, setTitle] = useState<string>("");
  const [comp, setComp] = useState<string>("");
  const [recept, setRecept] = useState<string>("");

  function OnInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  }

  function createEat() {
    localStorage.setItem(title, `${comp} $ ${recept}`);
  }

  return (
    <div className="AddBlock__block">
      <input
        className="title"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Название блюда"
      />
      <textarea
        onChange={(e) => {
          OnInput(e);
          setComp(e.target.value);
        }}
        className="comp"
        placeholder="Мед, сахар, варенье"
      />
      <textarea
        onChange={(e) => {
          OnInput(e);
          setRecept(e.target.value);
        }}
        className="comp"
        placeholder="Налить воды, взбить яица..."
      />
      <button
        onClick={() => {
          if (title && comp) {
            createEat();
          }
          setshowAddBlock(false);
        }}
        className="btn"
      >
        Добавить
      </button>
    </div>
  );
}
