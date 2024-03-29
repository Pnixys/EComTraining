import Product from "../../Models/Product";
import ProductGraph from "../../Models/ProductGraph";
import i1 from "./img/1.png";
import i2 from "./img/2.png";
import i3 from "./img/3.png";
import i4 from "./img/4.jpg";

export const productArray: Product[] = [
  {
    id: 1,
    name: "first item",
    description: "First item description",
    price: 10,
    image: i1,
  },
  {
    id: 2,
    name: "second item",
    description: "Second item description",
    price: 20,
    image: i2,
  },
  {
    id: 3,
    name: "third item",
    description: "third item description",
    price: 30,
    image: i3,
  },
  {
    id: 4,
    name: "fourth item",
    description:
      "this is a big item description this is a big item description this is a big item description this is a big item description this is a big item description",
    price: 1000,
    image: i4,
  },
];

export const graphProductArray: ProductGraph[] = [
  {
    id: 1,
    priceHistory: [
      {
        date: new Date(2000, 0, 5),
        price: 10,
      },
      {
        date: new Date(2002, 5, 7),
        price: 20,
      },
      {
        date: new Date(2016, 3, 15),
        price: 456,
      },
      {
        date: new Date(2021, 3, 15),
        price: 86,
      },
    ],
  },
  {
    id: 2,
    priceHistory: [
      {
        date: new Date(1998, 4, 5),
        price: 10,
      },
      {
        date: new Date(2002, 5, 7),
        price: 20,
      },
      {
        date: new Date(2017, 5, 17),
        price: 575,
      },
      {
        date: new Date(2021, 3, 15),
        price: 86,
      },
    ],
  },
  {
    id: 3,
    priceHistory: [
      {
        date: new Date(2000, 7, 12),
        price: 120,
      },
      {
        date: new Date(2012, 5, 7),
        price: 230,
      },
      {
        date: new Date(2014, 8, 13),
        price: 58,
      },
      {
        date: new Date(2021, 6, 25),
        price: 46,
      },
    ],
  },
  {
    id: 3,
    priceHistory: [
      {
        date: new Date(2000, 0, 5),
        price: 10,
      },
      {
        date: new Date(2002, 5, 7),
        price: 20,
      },
      {
        date: new Date(2016, 3, 15),
        price: 456,
      },
      {
        date: new Date(2021, 3, 15),
        price: 86,
      },
    ],
  },
];
