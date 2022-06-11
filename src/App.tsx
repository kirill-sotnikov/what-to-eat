import React, { useEffect, useState } from "react";
import "./App.css";
import AddBlock from "./Components/AddBlock/AddBlock";
import AddButton from "./Components/AddButton/AddButton";
import List from "./Components/List/List";
import Search from "./Components/Search/Search";
import { eatList, EatListContext, eatListType } from "./Context/context";

function App() {
  const [searchTag, setSearchTag] = useState<string[]>([]);
  const [showAddBlock, setshowAddBlock] = useState<boolean>(false);
  const [eats, setEats] = useState(eatList);

  function onChangeINput(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTag(e.target.value.split(" "));
  }

  function mapEatList() {
    for (let i = 0; i < localStorage.length; i++) {
      const a = localStorage.key(i);
      if (a) {
        const b = localStorage.getItem(a);
        const compAndRecept = b?.split("$");
        if (b && compAndRecept) {
          const obj: eatListType = {
            name: a,
            comp: [...compAndRecept[0].split(", ")],
            isLocalStorage: true,
            imgUrl:
              "https://st2.depositphotos.com/1001599/7127/v/450/depositphotos_71271339-stock-illustration-hot-meal-in-bowl-thin.jpg",
            recept: compAndRecept[1],
          };
          if (!eats.find((item) => item.name === obj.name)) {
            setEats((state) => [...state, obj]);
          }
        }
      }

      // setEats(state=>[...state,i])
    }
  }

  useEffect(() => {
    mapEatList();
  });

  useEffect(() => {
    console.log(searchTag);
  }, [searchTag]);
  return (
    <EatListContext.Provider value={eats}>
      <div className="App">
        <Search onChangeINput={onChangeINput} />
        {showAddBlock ? null : <AddButton setshowAddBlock={setshowAddBlock} />}
        {showAddBlock ? <AddBlock setshowAddBlock={setshowAddBlock} /> : null}
        <List searchTag={searchTag} />
      </div>
    </EatListContext.Provider>
  );
}

export default App;
