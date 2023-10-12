var express = require("express");
const open = require('open');
var bodyParser = require("body-parser");
var path = require("path");
var mongo = require("mongodb");
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var nodemailer = require('nodemailer');
var nodeoutlook = require('nodejs-nodemailer-outlook')

var app = express();
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/Pages/img"));

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/Login.html");
});


app.post('/login', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var email;
  console.log(username);
  console.log(password);
  //check if username and password are present in the database
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var query = {username: username, password: password};
    dbo.collection("users").find(query).toArray(function (err, result) {
      if (err) throw err;
      //check is result is empty
      console.log(result);
      if (result.length > 0) {
          email = result[0].email;
          nodeoutlook.sendEmail({
                  auth: {
                      user: "email@outlook.com",
                      pass: "password"
                  },
                  host: "smtp.office365.com",
                  port: 587,
                  secure: false,
                  from: 'email@outlook.com',
                  to: email,
                  subject: 'Login Successful',
                  text: 'You have successfully logged in to Spotify PESU WT Project',
                  replyTo: "email@outlook.com",
                  onError: (e) => console.log(e),
                  onSuccess: (i) => console.log(i)
              }


          );
        res.redirect('http://localhost:3000/');
      }
      else {

        res.redirect('http://localhost:9000/');
      }
    });
  });
});


app.post('/register', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var email = req.body.email;
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var query = {username: username, password: password, email: email};
    dbo.collection("users").insertOne(query, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });
  nodeoutlook.sendEmail({
        auth: {
          user: "email@outlook.com",
          pass: "password"
        },
        host: "smtp.office365.com",
        port: 587,
        secure: false,
        from: 'email@outlook.com',
        to: email,
        subject: 'Registration Successful',

        text: 'Welcome to spotify family '+username+'!',
        replyTo: "email@outlook.com",
        onError: (e) => console.log(e),
        onSuccess: (i) => console.log(i)
      }


  );
  res.redirect('http://localhost:3000/');
});

open('http://localhost:9000/');

app.listen(9000);
