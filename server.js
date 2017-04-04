var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var nodemailer = require('nodemailer');
var port = process.env.PORT || 8000;
// var p = require('ua-parser');
//EXPRESS
var app = express();
//MIDDLEWARE
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
//REQUIRE ROUTES
require('./routes/get/views-get')(app);
require('./routes/post/send-email-post')(app, nodemailer);
//START
app.listen(port, function(){
  console.log("Web server listening on port " + port);
});