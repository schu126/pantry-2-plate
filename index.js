document.addEventListener("DOMContentLoaded", () => {
  const ingredientSections = document.querySelectorAll(".ingredientSection");
  ingredientSections.forEach((ingredientSection) => {
    const input = ingredientSection.querySelector(".ingredient-pantry-input");

    const button = ingredientSection.querySelector(".submit");
    button.addEventListener("click", (event) => {
      event.preventDefault();

      const list = ingredientSection.querySelector(".ingredientList");
      const listItem = document.createElement("li");
      listItem.textContent = input.value;

      list.append(listItem);


      listItem.addEventListener("click", (event) => {
        const pantryItem = listItem.textContent;
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
    const userProteinInput = document.getElementById(
      "protein-pantry-item"
    ).value;
    const userVegetableInput = document.getElementById(
      "vegetable-pantry-item"
    ).value;
    const userCarbInput = document.getElementById("carb-pantry-item").value;
    
    clearResults();

    fetch(recipeURL)
      .then((response) => response.json())
      .then(function (recipesData) {
        searchRecipe(
          userProteinInput,
          userVegetableInput,
          userCarbInput,
          recipesData
        );
      });
  });
});

function clearResults() {
  ingredientListDiv = document.getElementsByClassName('ingredient-list');
  while(ingredientListDiv.length > 0) {
    ingredientListDiv[0].parentNode.removeChild(ingredientListDiv[0]);
  }
  cookTimeDiv = document.getElementsByClassName('total-cook-time-elements');
  while(cookTimeDiv.length > 0) {
    cookTimeDiv[0].parentNode.removeChild(cookTimeDiv[0]);
  }
  recipeInstructionsDiv = document.getElementsByClassName('recipe-instruction-elements');
  while(recipeInstructionsDiv.length > 0) {
    recipeInstructionsDiv[0].parentNode.removeChild(recipeInstructionsDiv[0]);
  }
}

function searchRecipe(protein, vegetable, carb, recipesData) {
  const filteredRecipes = recipesData.filter((recipe) => {
    let proteinFilter = recipe.protein.toLowerCase().includes(protein.toLowerCase());
    let carbFilter = recipe.carb.toLowerCase().includes(carb.toLowerCase());
    // vegetableFilter is presented as an array within db.json file; need to iterate for each loop to lower case each vegetable, and insepct.
    let vegetableFilter = false;
    let vegetableArray = recipe.vegetable;
    for (let vegetableElement of vegetableArray) {
      if (vegetableElement.toLowerCase() === vegetable.toLowerCase()) {
        vegetableFilter = true;
      }
      // NOTE FOR ELSE STATEMENT:
      // the above function will iterate through every element -> need to be careful about what we are actually returning.
      // even if userVegetableInput === vegetableElement, function will continue to iterate over each vegetableElement value that comes after and possibly return "false" when in fact true.
    }
    return proteinFilter && vegetableFilter && carbFilter;
  });

  //if the array length is greater than 0, the first found/filtered recipe will be shown.
  if (filteredRecipes.length > 0) {
    const foundRecipe = filteredRecipes[0];
    let div = document.getElementById("recipe");
    div.querySelector("h2").textContent = foundRecipe.dishName;
    div.querySelector("img").src = foundRecipe.dishImage;

    let ingredientListUl = document.createElement("ul");
    ingredientListUl.classList.add('ingredient-list');
    for (let ingredientLine of foundRecipe.ingredientLines) {
      renderList(ingredientLine, ingredientListUl);
    }
    div.append(ingredientListUl);

    let totalCookTime = document.createElement("ul");
    totalCookTime.classList.add('total-cook-time-elements');
    for (let cookTimeElement of foundRecipe.totalCookTime) {
      renderList(cookTimeElement, totalCookTime);
    }
    div.append(totalCookTime);

    let recipeInstructions = document.createElement("ol");
    recipeInstructions.classList.add('recipe-instruction-elements');
    for (let recipeInstructionLine of foundRecipe.instructions) {
      renderList(recipeInstructionLine, recipeInstructions);
    }
    div.append(recipeInstructions);
  } else {
    document.getElementById('recipe').querySelector('img').src = "./assets/image-placeholder.jpg"; 
    document.getElementById("recipe").querySelector("h2").textContent = "Recipe to be uploaded!";

  }
}

function renderList(element, htmlList) {
  let li = document.createElement("li");
  htmlList.appendChild(li);
  li.innerHTML = li.innerHTML + element;
}

// filteredRecipes.forEach(recipe => {
//     renderRecipe(recipe);
// create render other recipes, not just the first one in the array??? potentially???

// created sam branch
