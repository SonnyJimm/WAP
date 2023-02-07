const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use("/static/js", express.static(path.join(__dirname, "public", "js")));

const answers = [
  "It is Certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

app.get("/8ball", (req, res) => {
  let question = req.query.question;
  if (!question) {
    res.status(400).json({ error: "question not present" });
  }
  let result = Math.floor(Math.random() * answers.length);
  res.json({ question: question, answer: answers[result] });
});
app.get("/", (req, res) => {
  res.render("index");
});
app.listen(3000);
