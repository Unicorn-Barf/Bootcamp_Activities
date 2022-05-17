// The default keyword "this" refers to the global object
// In a browser, the global object is the Window 


// JS will always check the rules for "this" in a specific order
// if rule 1 doesn't apply, rule 2 etc..
/*

Rule 2: If rule 1 doesn't apply, look at the function being called and see if it was called with "call", "apply",
or "bind".  if so, the object passed to call, apply, or bind becomes "this" inside of the function.

Rule 3: If rules 1-2 don't apply, look at the function being called check to see if there is a "." to the left of the
function.  If there's a "." the object to the left of the "." becomes what "this" is.

Rule 4: if rules 1-3 doesn't apply, the value of 'this' becomes the global window object in the browswer
* */


// Logs Window
console.log(this);

// When the keyword "this" is used inside of an object like planet, "this" belongs to that object
var planet = {
  name: "Earth",
  age: "4.543 billion years",
  isPopulated: true,
  population: "7.594 billion",
  logFacts: function () {
     //Logs "This planet's name is Earth"
     console.log("This planet's name is " + this.name);
     //Logs "This planet's age is 4.543 billion years"
	 console.log("This planet's age is " + this.age);
  },
  logPopulation: function () {
    if (this.isPopulated) {
      // Logs "This planet's population is 7.594 billion"
	  console.log("This planet's population is " + this.population);
	} else {
	  console.log("The planet is unpopulated");
	}   
  }
};

// Calls object methods
planet.logFacts();
planet.logPopulation();
