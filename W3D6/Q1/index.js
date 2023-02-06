const express = require("express");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");
app.use("/static", express.static(path.join(__dirname, "/static")));
app.get("/", (req, res) => {
  const date = new Date();
  const hour = date.getHours();
  let css="";
  if(hour>=6 && hour<=18){
    css = "day.css"
  }else{
    css = "night.css"
  }
  console.log(hour)
  res.render("index.ejs", { css: css, time: date });
});

app.listen(3000);
