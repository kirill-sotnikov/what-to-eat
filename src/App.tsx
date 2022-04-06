import React, { useEffect, useState } from "react";
import "./App.css";
import List from "./Components/List/List";
import Search from "./Components/Search/Search";
import { eatList, EatListContext } from "./Context/context";
function App() {
  const [searchTag, setSearchTag] = useState<string[]>([]);

  function onChangeINput(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTag(e.target.value.split(" "));
  }

  useEffect(() => {
    console.log(searchTag);
  }, [searchTag]);
  return (
    <EatListContext.Provider value={eatList}>
      <div className="App">
        <Search onChangeINput={onChangeINput} />
        <List searchTag={searchTag} />
      </div>
    </EatListContext.Provider>
  );
}

export default App;
