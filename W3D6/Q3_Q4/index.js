const express = require("express");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");
app.use("/static", express.static(path.join(__dirname, "/static")));

const productRoutes = require("./router/router_product");
const shoppingCart = require("./router/router_shopping_cart");
app.use(productRoutes);
app.use(shoppingCart);
app.listen(3000);
