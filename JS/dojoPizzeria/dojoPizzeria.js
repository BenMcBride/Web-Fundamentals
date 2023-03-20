var crustTypes = ["hand tossed", "deep dish", "thin crust", "gluten-free"];
var sauceTypes = ["marinara", "pesto", "olive oil", "alfredo"];
var cheeses = [
  "shredded mozzarella",
  "fresh mozzarella",
  "parmesan",
  "provolone",
  "pecarino",
  "feta",
];
var toppings = [
  "Mama Lil's Peppers",
  "sausage",
  "mushrooms",
  "scallions",
  "pepperoni",
  "prosciutto",
  "jalepeños",
  "chicken",
];

function pizzaMaker(crustType, sauceType, cheese, topping) {
  var pizza = {};
  pizza.crustType = crustType;
  pizza.sauceType = sauceType;
  pizza.cheese = cheese;
  pizza.topping = topping;
  return pizza;
}
// randomPizza function creates a pizza object using pizzaMaker from earlier but adds random ingredients
// which are defined on lines 1-4. It accepts 2 parameters being the number of toppings and cheeses that
// you would like on your pizza (because who wants a boring 1 topping 1 cheese pizza?!)
function randomPizza(numToppings, numCheeses) {
  var topping = [];
  var cheese = [];
  var crustType = crustTypes[Math.floor(Math.random() * crustTypes.length)];
  var sauceType = sauceTypes[Math.floor(Math.random() * sauceTypes.length)];
  while (numCheeses > 0) {
    numCheeses--;
    let x = Math.floor(Math.random() * cheeses.length);
    cheese.push(cheeses[x]);
    cheeses.splice(x, 1);
  }
  while (numToppings > 0) {
    numToppings--;
    let x = Math.floor(Math.random() * toppings.length);
    topping.push(toppings[x]);
    toppings.splice(x, 1);
  }
  return pizzaMaker(crustType, sauceType, cheese, topping);
}
// replace parameters of randomPizza with number of toppings requested (up to 8),
// and number of cheeses requested (up to 6)
console.log(randomPizza(8, 6));

// var pza = pizzaMaker(

// "hand tossed",
// "pesto",
// ["fresh mozzarella", "parmesan"],
// ["Mama Lil's Peppers", "sausage", "mushrooms", "scallions"]

// "gluten-free",
// "red sauce",
// ["mozzarella", "provolone", "parmesan"],
// ["prosciutto", "sausage", "pepperoni", "jalepeños"]

// "hand tossed",
// "marinara",
// ["mozzarella", "feta"],
// ["mushrooms", "olives", "onions"]

// "deep dish",
// "traditional",
// ["mozzarella", "feta"],
// ["mushrooms", "olives", "onions"]
// );
// console.log(pza);
