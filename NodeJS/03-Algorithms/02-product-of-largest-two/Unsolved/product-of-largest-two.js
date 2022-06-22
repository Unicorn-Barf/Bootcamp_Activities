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

var poop = function(arr) {
    //make sure array is sized correctly
    let highestNumber
    let secondHighest
    if (arr[0] > arr[1]) {
        highestNumber = arr[0]
        secondHighest = arr[1]
    }
    else {
        highestNumber = arr[1]
        secondHighest = arr[0]
    }

    for(let i = 2; i < arr.length; i++) {
        if (arr[i] >= highestNumber) {
            secondHighest = highestNumber;
            highestNumber = arr[i]; 
        }
        else if (arr[i] > secondHighest) {
            secondHighest = arr[i]
        }
    }

    return highestNumber * secondHighest
}

let timed = (f) => (...args) => {
    let start = performance.now();
    let ret = f(...args);
    console.log(`function ${f.name} took ${(performance.now() - start).toFixed(3)}ms`);
    return ret;   
}

let fuckyou = timed(productOfLargestTwo)
let fuckyou2 = timed(poop)

 console.log(fuckyou([-10,-5,-2,-15,-1,-33,-88,-100,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-5,-2,-15,-1,-33,-88,-100,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10, 100000]));
 console.log(fuckyou2([-10,-5,-2,-15,-1,-33,-88,-100,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-5,-2,-15,-1,-33,-88,-100,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10, 100000]));

// console.log(betterversion([-10,-5,-2,-15,-1,-33,-88,-100]));
