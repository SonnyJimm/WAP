var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Add Cookie" ,cookies: req.cookies});
});
router.post("/add_cookie", function (req, res) {
  let { key, value } = req.body;
  res.cookie(key, value,{maxAge:1000*60*5});
  res.redirect("/");
});
module.exports = router;
