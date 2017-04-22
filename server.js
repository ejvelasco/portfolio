//declare packages
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer');
const port = process.env.PORT || 5000;
///express
const app = express();
//middleware
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
//require routes
require('./routes/get/views-get')(app);
require('./routes/post/send-email-post')(app, nodemailer);
//start server
app.listen(port, function(){
  console.log("Web server listening on port " + port);
});