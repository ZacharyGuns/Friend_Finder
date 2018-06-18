var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// need help here, we're not appending the survey info,
// we want to get an answer back with the user input
function addinfo() {
  $(".input-field").prompt(friendList);
}

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
  