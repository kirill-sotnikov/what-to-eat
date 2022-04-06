import React from "react";
import "./Search.css";
const Search = ({
  onChangeINput,
}: {
  onChangeINput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="Search__block">
      <input
        placeholder="Введите продукт"
        className="Search__input"
        onChange={(e) => onChangeINput(e)}
      />
    </div>
  );
};

export default Search;
