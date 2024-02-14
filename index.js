
document.addEventListener("DOMContentLoaded", () => {
    const ingredientSections = document.querySelectorAll(".ingredientSection")
    ingredientSections.forEach((ingredientSection) => {

    console.log(ingredientSection)
    const input = ingredientSection.querySelector(".ingredient-pantry-input")
  
    const button = ingredientSection.querySelector(".submit")
    button.addEventListener("click", (event) => {
      event.preventDefault();
      console.log(input.value)
      
      const list = ingredientSection.querySelector(".ingredientList")
      const listItem = document.createElement("li")
      listItem.textContent = input.value
      
      list.append(listItem)
      
      console.log(listItem)

      listItem.addEventListener("click", (event) => {
        const pantryItem = listItem.textContent
        console.log(pantryItem)
        const selection = ingredientSection.querySelector(".input");
        selection.value = pantryItem;

      });

    });
  });
});