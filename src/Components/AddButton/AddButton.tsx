import React from "react";
import "./AddButton.css";

export default function AddButton({
  setshowAddBlock,
}: {
  setshowAddBlock: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={() => setshowAddBlock(true)} className="AddButton_btn">
        Добавить
      </button>
    </div>
  );
}
