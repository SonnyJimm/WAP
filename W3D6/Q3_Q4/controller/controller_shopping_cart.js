const ShoppingCart = require("../model/model_shopping_cart");

exports.getAllProducts = (req, res, next) => {
  res.render("shopping_cart", { carts: ShoppingCart.getAll() });
};
