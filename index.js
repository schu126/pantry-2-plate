const recipeURL = "some url here"

fetch (recipeURL)
.then ((response) => response.json())
.then((recipes) => {
    recipes.forEach(recipe) => {
        renderRecipe(recipe)
    }
});

// need to include a function about filtering (gotta study up on)


// find me a recipe:
// FIND ME A RECIPE BUTTON: --> functions as a submit button for the above protein, vegetable, carb boxes
// will be a button that takes in the parameters of [protein, veg, carb]
// will net a receipe from dbjson file
// append and assign image, dish name --> potentially creating a new element, or appending to existing div


// (PART1) creating the function of creating pantry list (to-do)
    // goals: submit keywords, and then essentially append <ul> --> <p> for each typed/submitted keyword, for each division
// (PART2) making the pantry clickable and adding it to the boxes underneath pantry list
    // goals: make each word/li a "button"; then when button is clicked, populate underneath box with the clicked word
        // handleClick function 
// (PART3) find me recipe button

document.addEventListener ("DOMContentLoaded", function() {
    const findRecipeButton = document.querySelector("#algorithm2submit button");
    findRecipeButton.addEventListener('click', function(event) {
        event.preventDefault();
        const proteinInput = document.getElementById('protein-pantry-item').value;
        const vegetableInput = document.getElementById('vegetable-pantry-item').value;
        const carbInput = document.getElementById('carb-pantry-item').value;
        const filteredRecipe = searchRecipe(proteinInput, vegetableInput, carbInput);
    })
    });
    
function searchRecipe (protein, vegetable, carb) {

    const filteredRecipes = recipes.filter((recipe) => {
        return (
            // compares the recipe's property of protein, veg, and carb and user's input of protein, veg, and carb in lowercase so that there are no case sensitive errors.
            // checks if the user's input is present in our database using the includes function
            // if all the criteria is met, function will return true, and provide matching recipe. Might have to tinker with the boolean statement however.
            recipe.protein.toLowerCase().includes(protein.toLowerCase()) &&
            recipe.vegetable.toLowerCase().includes(vegetable.toLowerCase())&&
            recipe.carb.toLowerCase().includes(carb.toLowerCase())
        );
    });
    //if the array length is greater than 0, the first found/filtered recipe will be shown.
    if (filteredReceipes.length > 0) {
        const foundRecipe = filteredRecipes[0];
        document.getElementById('recipe').querySelector('h2').textContent = foundRecipe.dishName;
    } else {
        console.log("Recipe to be uploaded!");
    }
    };