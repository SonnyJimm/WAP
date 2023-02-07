const Products = require("../model/model_product");
exports.getAllProducts = (req, res, next) => {
  res.render("shopping_cart", { carts: req.session.cart });
};
exports.addToCart = (req, res, next) => {
  let { id } = req.body;
  console.log(req.body)
  if (!id) {
    return res.status(400).end();
  }
  let item = req.session.cart[id];
  if (!item) {
    let product = Products.getProduct(id);
    product.quantity = 1;
    req.session.cart[id] = product;
  } else {
    req.session.cart[id].quantity++;
  }
  res.end();
};

exports.removeFromCart = (req, res, next) => {
  let { id } = req.body;
  if (!id) {
    res.redirect("/shopping_cart");
  }
  let item = req.session.cart[id];
  if (!item) {
    res.redirect("/shopping_cart");
  }
  if (item.quantity == 1) {
    delete req.session.cart[id];
  } else {
    req.session.cart[id].quantity--;
  }
  res.redirect("/shopping_cart");
};
