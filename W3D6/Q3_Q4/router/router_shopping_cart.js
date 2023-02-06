const express = require("express");

const shoppingCart = require("../controller/controller_shopping_cart");

const options = {
  caseSensitive: false,
  strict: false,
};
const router = express.Router(options);

router.get("/shopping_cart", shoppingCart.getAllProducts);

module.exports = router;
