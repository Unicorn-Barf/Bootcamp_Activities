// Modularization with math.js file
// dont have to put the .js, node assumes it is a .js
const myMath = require('./math');

const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);
console.log(myMath.adder(num1, num2));
console.log(myMath.subtractor(num1, num2));


// //  READ FILE
// const fs = require('fs');
// // One parameter path to file to read
// // 2nd what format do you want to see content of file
// // 3rd callback function with error and content as parameters
// fs.readFile('nolan.txt', 'utf8', (err, data) => {
//     // error first callbacks
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data);
// });

// // write a file
// // Get the file system package 'fs'
// const fs = require('fs');

// // 1st parameter name of file we want to create can also be a file path
// // 2nd parameter what do we want to write inside of that file?
// // 3rd parameter a function that always has an error object parameter
// fs.writeFile('nolan.txt', process.argv[2], (err) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log('success');
//     }
// });


// Process.argv is an array
// and by default it has 2 elements
// the 1st element is where node is located inside of our machine
// the 2nd elements is the location of the file that we ran using node inside of our machine

// console.log(process.argv);