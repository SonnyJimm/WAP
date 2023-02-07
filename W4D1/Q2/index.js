const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");

app.use(
  session({
    secret: "salt",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 },
  })
);

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.post("/result", (req, res) => {
  let { name, age } = req.body;
  if (!name) {
    res.redirect("/");
  }
  if (!age) {
    res.redirect("/");
  }
  req.session.user = {
    name: name,
    age: age,
  };
  res.redirect("/output");
});


app.use("/output",(req, res,next)=>{
  if(!req.session.user){
    res.redirect("/");
  }
  next();
})

app.get("/output", (req, res) => {
  let {name} = req.session.user;
  let {age} = req.session.user;
  if (!name) {
    name = "person";
  }
  if (!age) {
    age = "undefined";
  }

  res.send(`Name ${name}\n Age ${age}`);
});

app.listen(3000);
