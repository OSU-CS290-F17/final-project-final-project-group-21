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

// var mongoURL = 'mongodb://cs290_hartmank:group21@classmongo.engr.oregonstate.edu:27017/cs290_hartmank';

var mongoConnection = null;

var tempRecipeData = require("./tempRecipes")

app.engine('handlebars', exphbs({ defaultLayout: 'mainLayout'}));
app.set('view engine', 'handlebars');

// function textFormatter (string){
//   string.
// }





//trying out just root stuff for rendering
app.get('/', function (req, res){

  // var selectedRecipes = tempRecipeData;
  var recipeCollection = mongoConnection.collection('recipes');
  recipeCollection.aggregate([ {$sample: {size: 3}} ]).toArray(function (err, results) {
    if (err) {
      res.status(500).send("DB Error: not getting recipes");
    } else {
      console.log("== query results:", results[0]);
      // res.status(200).render('peoplePage', {
      //   people: results
      // });
      var selectedRecipes = results;
      res.status(200).render(path.join(__dirname, 'views', 'indexView.handlebars'), results);
    }
  });
});

app.use(express.static("public"));

app.use("*", express.static("public/404.html"));


MongoClient.connect(mongoURL, function(err, connection){
  if (err){
    throw err;
  }
  mongoConnection = connection;
  // console.log('this should work:', mongoConnection.collection('recipes'))
  app.listen(port, function () {
    console.log("== Server is listening on port", port);
  });
});
