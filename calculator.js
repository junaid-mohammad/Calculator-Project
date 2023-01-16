const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;

// get and post methods for the Calculator

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;

  res.send("The result of the calculation is " + result);
});

// get and post methods for the bmi calculator

app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res) {

  var height = parseFloat(req.body.height);
  var weight = parseFloat(req.body.weight);
  var n = Math.round(weight/(height*height));

  res.send("Your BMI is " + n);
});

// Port Listener

app.listen(port, function() {
  console.log("server started on port " + port + ".");
});
