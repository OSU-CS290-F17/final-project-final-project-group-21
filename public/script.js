var removedPosts = [];

var search = document.getElementById("filter-search-button");
search.addEventListener("click", filterMain);

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
		var held = post[i].dataset._name;
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
