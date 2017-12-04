var path = require("path");
var express = require("express");
var exphbs = require("express-handlebars");
var app = express();
var port = process.env.PORT || 3000;

var tempRecipeData = require("./tempRecipes")

app.engine('handlebars', exphbs({ defaultLayout: 'mainLayout'}));
app.set('view engine', 'handlebars');

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
