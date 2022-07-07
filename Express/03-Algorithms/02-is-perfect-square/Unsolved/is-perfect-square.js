// Write code to create a function that accepts a number and returns true if the number is a perfect square, otherwise it returns false.
// You may not use the built-in Math.sqrt method

var isPerfectSquare = function(num) {
    let ind = 0;
    while (ind ** 2 <= num) {
        if (ind ** 2 === num) return true;
        ind++;
    }
    return false;
};

console.log(isPerfectSquare('9'));
