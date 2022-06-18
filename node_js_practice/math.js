// modularization
// We are going to breakup our app into smaller pieces
const adder = (num1, num2) => num1 + num2;
const subtractor = (num1, num2) => num1 - num2;
const multiplier = (num1, num2) => num1 * num2;
const divider = (num1, num2) => num1 / num2;

// When we require our math.js file, we will receive whatever is 
// exported from the math.js file
module.exports = {
    adder,
    subtractor,
    multiplier,
    divider,
};