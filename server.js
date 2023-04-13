const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.get("/list100", function (req, res) {
  res.sendFile(__dirname + "/list100.html");
});
app.get("/blog", function (req, res) {
  res.sendFile(__dirname + "/blog.html");
});
app.get("/books", function (req, res) {
  res.sendFile(__dirname + "/book.html");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
