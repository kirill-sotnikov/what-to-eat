import { createContext } from "react";

export type eatListType = {
  name: string;
  comp: string[];
  imgUrl?: string;
};

export const eatList: eatListType[] = [
  {
    name: "Омлет с картофелем",
    comp: ["картофель", "яйцо", "масло растительное", "соль", "зелёный лук"],
    imgUrl:
      "https://static.1000.menu/img/content/32617/frittata-s-kartofelem_1550572495_2_max.jpg",
  },
  {
    name: "Гренки с яйцом",
    comp: ["хлеб", "яйцо", "чёрный перец", "соль", "масло сливочное"],
    imgUrl:
      "https://2recepta.com/recept/grenki-iz-batona-s-yajcom-i-molokom/grenki-iz-batona-s-yajcom-i-molokom.jpg",
  },
  {
    name: "Жаркое из курицы с овощным миксом",
    comp: [
      "курица",
      "картофель",
      "вода",
      "морковь",
      "лук репчатый",
      "чеснок",
      "зелень",
      "лавровый лист",
      "масло растительное",
      "специи",
    ],
    imgUrl:
      "https://vkuhkne.ru/wp-content/uploads/2020/07/%D0%96%D0%B0%D1%80%D0%BA%D0%BE%D0%B5-%D1%81-%D0%BA%D1%83%D1%80%D0%B8%D1%86%D0%B5%D0%B9.jpg",
  },
  {
    name: "Куриные котлеты в панировке на сковороде",
    comp: [
      "курица",
      "сухари панировочные",
      "яйцо",
      "лук репчатый",
      "мука",
      "масло растительное",
      "перец черный молотый",
      "соль",
    ],
    imgUrl:
      "https://img.iamcook.ru/old/upl/recipes/byusers/misc/9661/dfc91d36725e4ead13554f795587fa60-2017.jpg",
  },
  {
    name: "Запеченный картофель с чесноком и травами в фольге",
    comp: [
      "картофель",
      "чеснок",
      "соль",
      "масло оливковое",
      "листья тмина",
      "розмарин свежий",
    ],
    imgUrl: "https://lafoy.ru/photo_s/foto-1726-0.jpg",
  },
  {
    name: "Смузи с черникой, бананом и молоком",
    comp: ["черника", "бананы", "грецкие орехи", "семена чиа", "молоко"],
    imgUrl: "https://the-challenger.ru/wp-content/uploads/2015/06/8-mango.jpg",
  },
];

export const EatListContext = createContext(eatList);
