// const recipeURL = "some url here"

// fetch (recipeURL)
// .then ((response) => response.json())
// .then((recipes) => {
//     recipes.forEach(recipe) => {
//         renderRecipe(recipe)
//     }
// });

// need to include a function about filtering (gotta study up on)

// const renderRecipe = (recipe) => {
//     let div = 
// }

// const handleClick = () => {

// };

// const addSubmitListener = () => {

// }





document.addEventListener("DOMContentLoaded", () => {
    const ingredientSections = document.querySelectorAll(".ingredientSection")
    ingredientSections.forEach((ingredientSection) => {

  //  const ingredientSection = document.querySelectorAll(".ingredientSection") [0]
    console.log(ingredientSection)
    const input = ingredientSection.querySelector(".ingredient-pantry-input")
  
    const button = ingredientSection.querySelector(".submit")
    button.addEventListener("click", (event) => {
      event.preventDefault();
      console.log(input.value)
      
      const list = ingredientSection.querySelector(".ingredientList")
      const listItem = document.createElement("li")
      // const span = document.createElement("span")
      listItem.textContent = input.value
      
      // listItem.append(span)
      list.append(listItem)
      
      console.log(listItem)

      listItem.addEventListener("click", (event) => {
        const pantryItem = listItem.textContent
        console.log(pantryItem)
        const selection = ingredientSection.querySelector(".input");
        selection.value = pantryItem;
        // listItem.style.color = "blue";

        // console.log(event)
        // console.log(selection)


      });



    });
    });

});