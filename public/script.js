var removedPosts = [];

var search = document.getElementById("filter-search-button");
// search.addEventListener("click", filterMain);
var resetSearch = document.getElementById("filter-reset-search-button");
if (search && resetSearch){
	search.addEventListener("click", filterMain);
	resetSearch.addEventListener("click", function(){ location.reload() });
}

var submitButton = document.getElementById('insert-submit-button');





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
	console.log('entered value:', userInput);
	console.log('post.length:', post.length);

	for (var i = 0; i < post.length; i++) {
		var held = post[i].dataset.name.toString().toLowerCase();
		console.log('held:', held);
		var test = held.indexOf(userInput.toLowerCase());
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

// --------------- An attempt at working around mystery submit button -------------------
function clearPosts(){
	var placeForName = document.getElementById('post-name-input');
	var placeFoUsername = document.getElementById('post-username-input');
	var placeForCuisine = document.getElementById('post-cuisine-input');
	var placeForCooktime = document.getElementById('post-cooktime-input');
	var placeForMealtime = document.getElementById('post-mealtime-input');
	var placeForIngredients = document.getElementById('post-ingredients-input');
	var placeForInstructions = document.getElementById('post-instructions-input');
	var placeForImgSource = document.getElementById('post-url-input');

	placeForName.value = '';
	placeFoUsername.value = '';
	placeForCuisine.value = 'Select';
	placeForCooktime.value = 'Select';
	placeForMealtime.value = 'Select';
	placeForIngredients.value = '';
	placeForInstructions.value = '';
	placeForImgSource.value = '';

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
		// saveInput = false;
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

		// console.log('name??', newRecipe.name);

		if (!newRecipe) {
			alert("Problem in this script code!!");
		} else {

			// make the request
			var postRequest = new XMLHttpRequest();
			var postURL = "/insert/addRecipe";
			postRequest.open('POST', postURL);

			var requestBody = JSON.stringify(newRecipe);
			postRequest.setRequestHeader('Content-Type', 'application/json');

			//clear the input
			clearPosts();

			//show success
			alert("Recipe Sent!");

			// send the request
			postRequest.send(requestBody);


		}
	} else {
		alert("ERROR: You didn't fill in everything!!");
	}
}

if (submitButton){
	submitButton.addEventListener('click', onPostRecipeClick);
}
