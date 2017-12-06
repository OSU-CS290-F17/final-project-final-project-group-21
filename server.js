var path = require("path");
var express = require("express");
var exphbs = require("express-handlebars");
var MongoClient = require('mongodb').MongoClient;
var app = express();
var port = process.env.PORT || 3000;

var mongoHost = process.env.MONGO_HOST;
var mongoPort = process.env.MONGO_PORT || 27017;
var mongoUser = process.env.MONGO_USER;
var mongoPassword = process.env.MONGO_PASSWORD;
var mongoDBName = process.env.MONGO_DB;

var mongoURL = 'mongodb://' + mongoUser + ':' + mongoPassword +
  '@' + mongoHost + ':' + mongoPort + '/' + mongoDBName;

var mongoConnection = null;

var tempRecipeData = require("./tempRecipes")

app.engine('handlebars', exphbs({ defaultLayout: 'mainLayout'}));
app.set('view engine', 'handlebars');

// function textFormatter (string){
//   string.
// }


//trying out just root stuff for rendering
app.get('/', function (req, res){

  var selectedRecipes = tempRecipeData;
  res.status(200).render(path.join(__dirname, 'views', 'indexView.handlebars'), selectedRecipes);
});

app.use(express.static("public"));

app.use("*", express.static("public/404.html"));

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
