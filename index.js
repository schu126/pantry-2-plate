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