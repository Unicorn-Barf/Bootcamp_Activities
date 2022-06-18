// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function(arr) {
    let prodArr = [arr[0]];
    arr.forEach(element => {
        if (element > prodArr[0]) {
            prodArr.unshift(element);
        }
    });
    return prodArr[0] * prodArr[1];
};

console.log(productOfLargestTwo([-10,-5,-2,-15,-1,-33,-88,-100]));