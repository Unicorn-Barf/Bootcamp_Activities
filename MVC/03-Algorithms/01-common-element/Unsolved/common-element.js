// Write code to create a function that accepts two arrays of numbers
// There will be one number common to both arrays
// Return the common number
// You may not use the `indexOf` or `includes` method

var commonElement = function(arrA, arrB) {
    for (numA of arrA) {
        for (numB of arrB) {
            const check = (numA === numB ? true : false);
            if (check) return numA;
        }
    }
};
