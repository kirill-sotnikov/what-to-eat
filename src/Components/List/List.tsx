import React, { useContext, useEffect, useState } from "react";
import { EatListContext, eatListType } from "../../Context/context";
import Element from "../Element/Element";
const List = ({ searchTag }: { searchTag: string[] }) => {
  const EatContext = useContext(EatListContext);
  const [currectEat, setCurrectEat] = useState<eatListType[]>([]);
  useEffect(() => {
    // for (let i of EatContext) {
    //   for (let tag of searchTag) {
    //     // console.log(i.comp, tag);
    //     // console.log(tag in i.comp);
    //     console.log(i.comp.indexOf(tag));

    //     if (i.comp.indexOf(tag) !== -1) {
    //       if (currectEat.indexOf(i) === -1) {
    //         setCurrectEat((state) => [...state, i]);
    //       }
    //     }
    //   }
    // }
    setCurrectEat([]);
    setTimeout(() => {
      for (let eatObj of EatContext) {
        for (let tag of searchTag) {
          for (let item of eatObj.comp) {
            console.log(item, "  ", tag, "  ", item.includes(tag));

            if (item.includes(tag)) {
              setCurrectEat((state) => [...state, eatObj]);
            }
          }
        }
      }
    }, 400);
  }, [searchTag]);
  function inEatContext() {
    for (let eatObj of EatContext) {
      for (let tag of searchTag) {
        for (let item of eatObj.comp) {
          return item.includes(tag);
        }
      }
    }
  }

  //   useEffect(() => {
  //     if (searchTag.length === 0 || searchTag[0] === "") {
  //       setCurrectEat([]);
  //     }
  //   }, [searchTag]);
  //   useEffect(() => {
  //     console.log("currectEat", currectEat);
  //   }, [currectEat]);

  if (searchTag.length === 0 || searchTag[0] === "") {
    return (
      <div className="List__block">
        {EatContext.map((item, index) => (
          <Element key={index} EatItem={item} />
        ))}
      </div>
    );
  }
  return (
    <div>
      {currectEat.map((item, index) => {
        return <Element key={index} EatItem={item} />;
      })}
    </div>
  );
};
export default List;
