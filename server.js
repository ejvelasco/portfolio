let express = require("express"),
path = require("path"),
bodyParser = require("body-parser"),
nodemailer = require("nodemailer"),
port = process.env.PORT || 5000,
app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use("/bower_components",  express.static(__dirname + "/bower_components"));

require("./routes/get/views-get")(app);
require("./routes/post/send-email-post")(app, nodemailer);

app.listen(port, () => {
  console.log("Web server listening on port " + port);
});