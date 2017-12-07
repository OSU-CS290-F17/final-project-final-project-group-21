var removedPosts = [];

var search = document.getElementById("filter-search-button");
var resetSearch = document.getElementById("filter-reset-search-button");
if (search && resetSearch){
	search.addEventListener("click", filterMain);
	resetSearch.addEventListener("click", function(){ location.reload() });
}

var submitButton = document.getElementById('submit-button');

/*
function insertNewPost(numberOfIngredients, cuisine, cooktime, mealtime, imgSource, name) {
	var newRecipeTemplateArgs = {
		numberOfIngredients: numberOfIngredients,
		cuisine: cuisine,
		cooktime: cooktime,
		mealtime: mealtime,
		imgSource: imgSource,
		name: name
	};

	var recipeHTML = Handlebars.templates.recipeTemplates(newRecipeTemplateArgs);
	var recipeContainer = document.getElementById('recipes');
	recipeContainer.insertAdjacentHTML('beforeend', recipeHTML);
}
*/

function checkTime() {
	var post = document.getElementsByClassName('recipe');
	var time = document.getElementById('filter-time').value;
	for (var i = 0; i < post.length; i++) {
		if (time != post[i].dataset.cooktime) {
			removedPosts.push(post[i]);
			post[i].remove();
			checkTime();
		}
	}
}

function checkCuisine() {
	var post = document.getElementsByClassName('recipe');
	var cuisine = document.getElementById('filter-cuisine').value;
	for (var i = 0; i < post.length; i++) {
		if (cuisine != post[i].dataset.cuisine) {
			removedPosts.push(post[i]);
			post[i].remove();
			checkCuisine();
		}
	}
}

function checkName() {
	var post = document.getElementsByClassName('recipe');
	var userInput = document.getElementById('filter-name').value;
	console.log('entered value: ', userInput);	
	for (var i = 0; i < post.length; i++) {
		var held = post[i].dataset.name;
		var test = ((held.indexOf(userInput)));
		if (test == -1) {
			removedPosts.push(post[i]);
			post[i].remove();
			checkName();
		}
	}
}


function filterMain() {
	var post = document.getElementsByClassName('recipe');

	/* checks if there are posts that have been removed
	 * if so, the removed posts will be created
	if (removedPosts.length > 0){
		for (var i = 0; i < removedPosts.length; i++) {
			insertNewPost(removedPosts[i].ingredients, removedPosts[i].cuisine, removedPosts[i].cooktime, removedPosts[i].mealtime, removedPosts[i].imgSource, removedPosts[i].name)
		}
	}
	*/

	var userInput = document.getElementById('filter-name').value;
	var time = document.getElementById("filter-time").value;
	var cuisine = document.getElementById('filter-cuisine').value;
	if (time)
		checkTime();
	if (cuisine) 
		checkCuisine();
	if (userInput) 
		checkName();
}


// ----------------- add thing for insert page so that the damn thing will work -----------------------
function onPostRecipeClick() {


	var name = document.getElementById('post-name-input').value.trim();
	var username = document.getElementById('post-username-input').value.trim();
	var cuisine = document.getElementById('post-cuisine-input').value.trim();
	var cooktime = document.getElementById('post-cooktime-input').value.trim();
	var mealtime = document.getElementById('post-mealtime-input').value.trim();
	var ingredients = document.getElementById('post-ingredients-input').value.trim();
	var instructions = document.getElementById('post-instructions-input').value.trim();
	var imgSource = document.getElementById('post-url-input').value.trim();

	if (name && username && cuisine && cooktime && mealtime && ingredients && instructions && imgSource){

		var newRecipe = {
			name: name,
			username: username,
			cuisine: cuisine,
			cooktime: cooktime,
			mealtime: mealtime,
			ingredients: ingredients,
			instructions: instructions,
			imgSource: imgSource
		}

		console.log('name??', newRecipe.name);

		


		if (!newRecipe) {
			alert("You must fill in all of the fields!");
		} else {

		var postRequest = new XMLHttpRequest();
		var postURL = "/insert/addRecipe";
		postRequest.open('POST', postURL);

		// var photoObj = {
		// 	photoURL: photoURL,
		// 	caption: caption
		// };
		var requestBody = JSON.stringify(newRecipe);
		postRequest.setRequestHeader('Content-Type', 'application/json');

		// postRequest.addEventListener('load', function (event) {
		// 	if (event.target.status !== 200) {
		// 		alert("Error storing photo in database:\n\n\n" + event.target.response);
		// 	} else {
		// 		var newRecipeHTML = createRecipeHTML(newRecipe);
		// 		var recipeField = document.getElementById('recipes');

		// 		recipeField.insertAdjacentHTML('beforeend', newRecipeHTML);
		// 	}
		// });

		postRequest.send(requestBody);

		// hideModal();

		}
	} else {
		alert("ERROR: You didn't fill in everything!!");

	}

}

if (submitButton){
	submitButton.addEventListener('click', onPostRecipeClick);
}