const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.post("/result", (req, res) => {
  let { name,age } = req.body;
  if (!name) {
    name = "person";
  }
  if (!age) {
    age = "undefined";
  }

  res.redirect(`/output?name=${name}&age=${age}`);
});
app.get("/output", (req, res) => {
  let name = req.query.name;
  let age = req.query.age;
  if (!name) {
    name = "person";
  }
  if (!age) {
    age = "undefined";
  }

  res.send(`Name ${name}\n Age ${age}`);
});

app.listen(3000);
