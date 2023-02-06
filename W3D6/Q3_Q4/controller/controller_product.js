const Products = require("../model/model_product");

exports.getAllProducts = (req, res, next) => {
  res.render("product_list", { products: Products.getAll() });
};
