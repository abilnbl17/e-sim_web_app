import singapore from "../src/assets/singapore.jpeg";
import indonesia from "../src/assets/indonesia.jpg";

export const Data = [
  {
    id: 1,
    name: "eSIM Singapore",
    price: "Rp. 50.000",
    estimatedData: "1GB",
    validity: "7 days",
    imageUrl: singapore,
    despcription: "This is eSIM LTE 4G for Singapore",
  },
  {
    id: 2,
    name: "eSIM Indonesia",
    price: "Rp. 80.000",
    estimatedData: "2GB",
    validity: "7 days",
    imageUrl: indonesia,
    despcription: "This is eSIM LTE 4G for Indonesia",
  },
];

console.log(Data, "This is from data.js");
