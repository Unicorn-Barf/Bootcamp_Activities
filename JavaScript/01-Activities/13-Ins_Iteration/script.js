// for loops takes 3 arguements
// 1st is optional
// 1) what var do we want to initalize before thsi for loops starts
// 2) on is the conditions for when the loop starts
// 3) do you want to icrement any cariables when the block of code finishes executing
// for (var index = 0; index < 9; index++){
    // console.log(index);
// }


// We use a for-loop to execute code more than once
for (var i = 0; i < 5; i++) {
    // This is the block of code that will run each time
    console.log("This is the current value of i: " + i + ".");
}

// For-loops are often used to iterate over arrays
var zooAnimals = ["Bears", "Giraffes", "Penguins", "Meerkats"];

//To determine how many times the loop should execute, we use the array's length
for (var i = 0; i < zooAnimals.length; i++) { 
    console.log("I am going to zoo to see " + zooAnimals[i] + ".");
}
