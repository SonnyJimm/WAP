const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");
app.use("/static", express.static(path.join(__dirname, "/static")));

app.get("/", (req, res) => {
  res.render("index");
});
// when i bookmarketed it and return its sending get request to get 
app.post("/result", (req, res) => {
  let { name,age } = req.body;
  if (!name) {
    name = "person";
  }
  if (!age) {
    age = "undefined";
  }

  res.send(`Name ${name}\n Age ${age}`);
});

app.listen(3000);
