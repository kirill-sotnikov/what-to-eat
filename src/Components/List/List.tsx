import { useContext, useEffect, useState } from "react";
import { EatListContext, eatListType } from "../../Context/context";
import Element from "../Element/Element";
const List = ({ searchTag }: { searchTag: string[] }) => {
  const EatContext = useContext(EatListContext);
  const [currectEat, setCurrectEat] = useState<eatListType[]>([]);
  useEffect(() => {
    setCurrectEat([]);
    for (let item of EatContext) {
      for (let com of item.comp) {
        for (let tag of searchTag) {
          if (com.includes(tag.toLowerCase())) {
            setCurrectEat((state) => [...state, item]);
          }
        }
      }
    }
  }, [searchTag]);

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
