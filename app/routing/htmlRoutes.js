var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

module.exports = function (app) {

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });


    app.post("/api/survey", function (req, res) {
        var newUser = req.body;

        newUser.routeName = newUser.name.replace(/\s+/g, "").toLowerCase();

        console.log(newUser);

        input - field.push(newUser);

        res.json(newUser);
    });
}