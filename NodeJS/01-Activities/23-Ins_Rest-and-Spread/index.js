// without rest
function add(x, y) {
  return x + y;
}
console.log(add(1, 2, 3, 4, 5)); // => 3

// 1. rest
//  rest operator must be lst argument in the function
// Rest operator is only used for destructuring and for letting a function
// take in as many arguments as we want
function add(...nums) {
  let sum = 0;
  for (let num of nums) sum += num;
  return sum;
}

add(1); // => 1
add(3, 3); // => 6
add(1, 1, 4, 5); // => 11

// 2. 
function howManyArgs(...args) {
  return `You passed ${args.length} arguments.`; // point out the template literal
}

console.log(howManyArgs(0, 1)); // You have passed 2 arguments.
console.log(howManyArgs("argument!", null, ["one", 2, "three"], 4)); // You have passed 4 arguments.

// 1. spread
const dragons = ["Drogon", "Viserion", "Rhaegal"];
const weapons = ["dragonglass", ...dragons, "wildfire"]; // notice the spread operator ...dragons

console.log(weapons); // prints ["dragonglass", "Drogon", "Viserion", "Rhaegal", "wildfire"]

// Object format version
const me = { name: 'manny', pwerLevel: 9001, hobbies: ['sleeping', 'eating', 'running', 'gaming']};
const poop = {primary: 'shit', secondary: 'baseball'};
const i = {...me, ...poop};
// Order matter for keys, last will overwrite previous
const newMe = {...me, name:'emmanuel'};
console.log(newMe);

// look at the function being called and see if it was called with the "new" keyword
// inheritance example


// ES5 of creating something called "Constructor Functions"
// When creating constructor functions the best practive is to name the function with a capital letter
// The reason for the capital letter is to let other developers know to call this function with the 'new' keyword
const Tamagochi = function(name, age, type) {
  // this = {} if used with 'new' keyword
  this.name = name;
  this.age = age;
  this.type = type;
  // return this
}
const lulu = new Tamagochi('Lulu', 5, 'Yordle');