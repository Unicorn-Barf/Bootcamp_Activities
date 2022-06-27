// Write code to create a function that accepts an array of numbers and a target number
// if the target number is present in the array, return its index
// else return -1
// You may not use the `indexOf`, `lastIndexOf` or `includes` methods

var linearSear = function(arr, target) {
    if (arr.length === 0) {
        return -1;
    }
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === target) {
            return i;
        };
        if (i === arr.length -1) {
            return -1;
        };
    };
};

var linearSearch = function(arr, target) {
    let ans = -1;
    arr.forEach((el, index) => {
        if (el === target) {
            ans = index;
        }
    });
    return ans;
};
