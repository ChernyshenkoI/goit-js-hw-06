const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let ingrid = document.getElementById("ingredients");
ingrid.classList.add("item");

function createItemsList (ingredients){

  for (let ingredient of ingredients){
  const itemEl = document.createElement("li");
  itemEl.textContent= ingredient;
 ingrid.append(itemEl);
}  

}
createItemsList(ingredients);
 
