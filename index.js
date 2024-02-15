document.addEventListener("DOMContentLoaded", () => {
  const ingredientSections = document.querySelectorAll(".ingredientSection");
  ingredientSections.forEach((ingredientSection) => {
    // console.log(ingredientSection)
    const input = ingredientSection.querySelector(".ingredient-pantry-input");

    const button = ingredientSection.querySelector(".submit");
    button.addEventListener("click", (event) => {
      event.preventDefault();
      //   console.log(input.value)

      const list = ingredientSection.querySelector(".ingredientList");
      const listItem = document.createElement("li");
      listItem.textContent = input.value;

      list.append(listItem);

      //   console.log(listItem)

      listItem.addEventListener("click", (event) => {
        const pantryItem = listItem.textContent;
        // console.log(pantryItem)
        const selection = ingredientSection.querySelector(".input");
        selection.value = pantryItem;
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const findRecipeButton = document.querySelector("#algorithm2submit button");

  findRecipeButton.addEventListener("click", function (event) {
    event.preventDefault();
    const recipeURL = "http://localhost:3000/recipes";
    const userProteinInput = document.getElementById("protein-pantry-item").value;
    const userVegetableInput = document.getElementById("vegetable-pantry-item").value;
    const userCarbInput = document.getElementById("carb-pantry-item").value;
    
    fetch(recipeURL)
      .then((response) => response.json())
      .then(function(recipesData) {
        searchRecipe(userProteinInput, userVegetableInput, userCarbInput, recipesData)
      });
  });
});

function searchRecipe(protein, vegetable, carb, recipesData) {
    const filteredRecipes = recipesData.filter((recipe) => {
        let proteinFilter = recipe.protein.toLowerCase().includes(protein.toLowerCase());
        let carbFilter = recipe.carb.toLowerCase().includes(carb.toLowerCase());
        // vegetableFilter is presented as an array within db.json file; need to iterate for each loop to lower case each vegetable, and insepct.
        let vegetableFilter = false;

        // forEach value in the array, i want to .toLowerCase(), and I want to see if value = vegetableInput
        // if true, return true. if false, 
        let vegetableArray = recipe.vegetable;
        for (let vegetableElement of vegetableArray) {
            if (vegetableElement.toLowerCase() === vegetable.toLowerCase()) {
                vegetableFilter === true;
            }
            // NOTE FOR ELSE STATEMENT: 
            // the above function will iterate through every element -> need to be careful about what we are actually returning.
            // even if userVegetableInput === vegetableElement, function will continue to iterate over each vegetableElement value that comes after and possibly return "false" when in fact true.
        }
        // if (proteinFilter && vegetableFilter && carbFilter) {
            console.log(vegetableArray);
        // };

        return (proteinFilter && vegetableFilter && carbFilter);
    });

  //if the array length is greater than 0, the first found/filtered recipe will be shown.
  if (filteredRecipes.length > 0) {
    const foundRecipe = filteredRecipes[0];
    document.getElementById("recipe").querySelector("h2").textContent = foundRecipe.dishName;
    document.getElementById("recipe").querySelector("img").src = foundRecipe.dishImage;
  } else {
    document.getElementById("recipe").querySelector("h2").textContent = "Recipe to be uploaded!";
  }
}

// filteredRecipes.forEach(recipe => {
//     renderRecipe(recipe);
// create render other recipes, not just the first one in the array??? potentially???

// created sam branch
