const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  let bakeryName = '';
  for (let a = 0; a < bakeryA.length; a++) {
    for (let b = 0; b < bakeryB.length; b++) {
      for (let c = 0; c < recipes.length; c++) {
        if (((recipes[c].ingredients[0] === bakeryA[a]) && (recipes[c].ingredients[1] === bakeryB[b])) || ((recipes[c].ingredients[1] === bakeryA[a]) && (recipes[c].ingredients[0] === bakeryB[b]))) {
          bakeryName = recipes[c].name;
        }
      }
    }
  } return bakeryName;
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
