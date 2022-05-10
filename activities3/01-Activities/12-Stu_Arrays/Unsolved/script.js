// WRITE YOUR CODE HERE
var people = ["Angie", "Nolan", "George"];

// displays length of array
console.log(people.length);

// Logs welcome to every student
console.log("Welcome to the class " + people[0] + ".");
console.log("Welcome to the class " + people[1] + ".");
console.log("Welcome to the class " + people[2] + ".");

// Replace the first name
people[0] = "Bob";

if (people[0] !== "Angie") {
    console.log(people[0] + " is in class.")
}

// display last element using array length
console.log(people[people.length-1]);


// Quicker syntax,  remember alt + shift + down for copying lines
console.log(`Welcome to the class ${students[0]} no difficult syntax now`);