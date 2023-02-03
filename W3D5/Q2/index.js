const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
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
