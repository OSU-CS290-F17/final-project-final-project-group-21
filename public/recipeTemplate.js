(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['recipe'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"recipe\" data-ingredients="
    + alias4(((helper = (helper = helpers.numberOfIngredients || (depth0 != null ? depth0.numberOfIngredients : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"numberOfIngredients","hash":{},"data":data}) : helper)))
    + " data-cuisine=\""
    + alias4(((helper = (helper = helpers.cuisine || (depth0 != null ? depth0.cuisine : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cuisine","hash":{},"data":data}) : helper)))
    + "\" data-cooktime=\""
    + alias4(((helper = (helper = helpers.cooktime || (depth0 != null ? depth0.cooktime : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cooktime","hash":{},"data":data}) : helper)))
    + "\" data-mealtime=\""
    + alias4(((helper = (helper = helpers.mealtime || (depth0 != null ? depth0.mealtime : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mealtime","hash":{},"data":data}) : helper)))
    + "\" data-name=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n  <div class=\"recipe-contents\">\n\n    <div class=\"recipe-image-container\">\n      <img src=\""
    + alias4(((helper = (helper = helpers.imgSource || (depth0 != null ? depth0.imgSource : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imgSource","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\"> \n    </div>\n    <div class=\"recipe-info-container\">\n      <div class=\"recipe-title\"><h4>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h4><h5>Submitted by: "
    + alias4(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"username","hash":{},"data":data}) : helper)))
    + "</h5></div>\n      <div><i class=\"fa fa-clock-o\" aria-hidden=\"\"true></i><span class=\"recipe-cooktime\"> "
    + alias4(((helper = (helper = helpers.cooktime || (depth0 != null ? depth0.cooktime : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cooktime","hash":{},"data":data}) : helper)))
    + "</span></div>\n      </br>\n      <span class=\"Ingr\"> Ingredients</span>\n      <span class=\"recipe-ingred\"></br>"
    + alias4(((helper = (helper = helpers.ingredients || (depth0 != null ? depth0.ingredients : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ingredients","hash":{},"data":data}) : helper)))
    + " </span>\n      </br>\n      <span class=\"steps\"> Steps </span>\n      </br>\n      <div class=\"recipe-instructions\">\n        <span class=\"instructionss\">"
    + alias4(((helper = (helper = helpers.instructions || (depth0 != null ? depth0.instructions : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"instructions","hash":{},"data":data}) : helper)))
    + "</span>\n      </div>\n      </br>\n      <span class=\"recipe-mealtime\"> "
    + alias4(((helper = (helper = helpers.mealtime || (depth0 != null ? depth0.mealtime : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mealtime","hash":{},"data":data}) : helper)))
    + "    </span>\n      <span class=\"recipe-cuisine\"> Cuisine: "
    + alias4(((helper = (helper = helpers.cuisine || (depth0 != null ? depth0.cuisine : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cuisine","hash":{},"data":data}) : helper)))
    + "</span>\n    </div>\n\n  </div>\n</div>";
},"useData":true});
})();