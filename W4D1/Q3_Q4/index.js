const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");
app.use("/static", express.static(path.join(__dirname, "/static")));
const sessions = require("express-session");
app.use(
  sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 50 },
    resave: false,
  })
);

const productRoutes = require("./router/router_product");
const shoppingCart = require("./router/router_shopping_cart");
app.use((req, res, next) => {
  if (!req.session.cart) {
    req.session.cart = {};
  }
  next();
});
app.use(productRoutes);
app.use(shoppingCart);
app.listen(3000);
