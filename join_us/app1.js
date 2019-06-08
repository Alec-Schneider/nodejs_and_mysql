var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var mysql = require('mysql');

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'aschneid3',
    database : 'join_us'
});


app.get("/", function(req, res){
  //Find count of users from 
  var q = "SELECT COUNT(*) AS count FROM users";
  connection.query(q, function(error, results){
    if(error) throw error;
    var count = results[0].count;
    //res.send("We have "+ count +" users in our database!");
    res.render("home",{data: count});
    
  });
});

app.post("/register", function(req, res){
  var person = {
    email: req.body.email
  };

  connection.query('INSERT INTO users SET ?', person, function(err, result) {
    if (err) throw err;
    res.redirect("/");
  });
});

app.get("/joke", function(req, res){
    var joke = "What do you call a dog that does magic tricks? A labracadabrador.";
    res.send(joke);
});


app.get("/random_num", function(req, res){
    var num = Math.floor((Math.random() * 10) + 1);
    res.send("Your lucky number is " + num);
});


app.listen(8080, function () {
  console.log('App listening on port 8080!');
});


