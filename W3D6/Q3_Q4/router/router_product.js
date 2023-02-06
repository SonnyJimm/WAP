const express = require("express");

const productController = require("../controller/controller_product");

const options = {
  caseSensitive: false,
  strict: false,
};
const router = express.Router(options);

router.get("/", productController.getAllProducts);

module.exports = router;
