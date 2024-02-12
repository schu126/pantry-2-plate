const recipeURL = "some url here"

fetch (recipeURL)
.then ((response) => response.json())
.then((recipes) => {
    recipes.forEach(recipe) => {
        renderRecipe(recipe)
    }
});

// need to include a function about filtering (gotta study up on)

const renderRecipe = (recipe) => {
    let div = 
}

const handleClick = () => {

};

const addSubmitListener = () => {

}

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