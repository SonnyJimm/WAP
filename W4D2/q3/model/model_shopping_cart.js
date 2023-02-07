const items = [
  {
    id: 1,
    name: "Bike",
    price: 80,
    description: "Awesome for daily uses.",
    quantity: 1,
  },

  {
    id: 3,
    name: "Shaving cream",
    price: 23,
    description: "To look clean and crisp.",
    quantity: 2,
  },
  {
    id: 4,
    name: "Instant noodle",
    price: 23,
    description: "Want some spicy noodle this is for you.",
    quantity: 10,
  },
  {
    id: 5,
    name: "Keyboard",
    price: 50,
    description:
      "Gaming u can get these and start running havoc in the server.",
    quantity: 1,
  },
  {
    id: 6,
    name: "Mouse",
    price: 30,
    description: "To do those clean crisp flicks tear down ur enemy.",
    quantity: 1,
  },
  {
    id: 7,
    name: "Mug",
    price: 10,
    description: "Cant drink tea without it.",
    quantity: 3,
  },
];

module.exports = class ShoppingCart {
    constructor() {}
    static getAll() {
      return items;
    }
  };
  
