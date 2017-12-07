var path = require("path");
var express = require("express");
var exphbs = require("express-handlebars");
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
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

// var tempRecipeData = require("./tempRecipes")

app.engine('handlebars', exphbs({ defaultLayout: 'mainLayout'}));
app.set('view engine', 'handlebars');

// function textFormatter (string){
//   string.
// }



app.use(bodyParser.json());

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
      // var selectedRecipes = results;
      res.status(200).render(path.join(__dirname, 'views', 'indexView.handlebars'), results);
    }
  });
});


app.get('/insert', function(req, res){
  res.status(200).render(path.join(__dirname, 'views', 'insertView.handlebars'))
});


app.get('/display', function(req,res){

  var recipeCollection = mongoConnection.collection('recipes');
  recipeCollection.find({}).toArray(function (err, results) {
    if (err) {
      res.status(500).send("DB Error: not getting recipes");
    } else {
      console.log("== query results:", results[0]);
      // res.status(200).render('peoplePage', {
      //   people: results
      // });
      // var selectedRecipes = results;

      res.status(200).render(path.join(__dirname, 'views', 'displayView.handlebars'), results);
    }
  });
});

app.use(express.static("public"));



app.post('/insert/addRecipe', function(req, res){
  if (req.body) {

    console.log("\nthis the uploaded body:::", req.body);
    var recipeCollection = mongoConnection.collection('recipes');

    // var newRecipe = {
    //   name: req.body.name,
    //   username: req.body.username,
    //   cuisine: req.body.cuisine,
    //   cooktime: req.body.cooktime,
    //   mealtime: req.body.mealtime,
    //   ingredients: req.body.ingredients,
    //   instructions: req.body.instructions,
    //   imgSource: req.body.imgSource
    // };

    recipeCollection.insertOne(req.body);

  }
  else {
    res.status(400).send("Request Body needs substance");
  }
});



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
