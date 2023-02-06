const products = [
  { id: 1, name: "Bike", price: 80, description: "Awesome for daily uses." },
  {
    id: 2,
    name: "Kettle",
    price: 20,
    description: "To brew a nice tea treat urself.",
  },
  {
    id: 3,
    name: "Shaving cream",
    price: 23,
    description: "To look clean and crisp.",
  },
  {
    id: 4,
    name: "Instant noodle",
    price: 23,
    description: "Want some spicy noodle this is for you.",
  },
  {
    id: 5,
    name: "Keyboard",
    price: 50,
    description:
      "Gaming u can get these and start running havoc in the server.",
  },
  {
    id: 6,
    name: "Mouse",
    price: 30,
    description: "To do those clean crisp flicks tear down ur enemy.",
  },
  { id: 7, name: "Mug", price: 10, description: "Cant drink tea without it." },
];
module.exports = class Product {
  constructor() {}
  static getAll() {
    return products;
  }
};
