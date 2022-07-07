// Write code to create a function that accepts a two-dimensional array
// Each 2D element contains either the string "X" or "O" (both capitalized)
// Return the number of times "X" appears in the 2D array

var arraySearch2 = function(arr) {
    let total = 0;
    for (let i=0; i<arr.length; i++) {
        const testStr = arr[i].join();
        const count = (testStr.match(/X/g) || []).length;
        total += count;
    }
    return total;
};

var arraySearch2D = function(arr) {
    let total = 0;
    for (array of arr) {
        const testStr = array.join();
        const count = (testStr.match(/X/g) || []).length;
        total += count;
    }
    return total;
};

var arr = [
    ["O", "O", "O"],
    ["X", "O", "O"],
    ["O", "O", "X"],
    ["O", "O", "X"]
  ];

  console.log(arraySearch2D(arr));