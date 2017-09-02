var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require ("mongoose");

var Nytimes = require("./models/nytreact");

var app = express();

var PORT = process.env.PORT || 3002;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/Nytimes");
var db = mongoose.connection;

db.on("error", function(err){
  console.log("Mongoose Error: ", err);
});

db.once("open", function(){
  console.log("Mongoose connection successful");
});

//redirect to this at the home page
// Question: Do we need this if we already have routes.js?
app.get("/", function(req,res){
  res.sendFile(__dirname + "/public/index.html");
});

//get all of the saved articles
app.get("/savedshiz", function (req,res){

  Nytimes.find({}), function(err, results){
    console.log("From server saved results: " + results);
    //send back results
    res.send(results);
  };
  });


//post new saved article to the database
app.post("/savedshiz", function (req, res){

  Nytimes.create({
    title: req.body.title,
    url: req.body.url,
    date: Date.now()
  }, function(err){
    if (err){
      console.log(err);

    }
    else{
      res.send("saved Search");
    }

});
});
