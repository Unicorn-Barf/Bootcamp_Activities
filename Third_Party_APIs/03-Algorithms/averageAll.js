const averageAll = arr => {
    let sum = 0;
    for (i in arr) {
        sum += arr[i];
    }
    return sum / arr.length;
}

// check out array prototypes reduce
const reduceGetAverage = numArray => numArray.reduce((accumulatedSum, currentNum) => accumulatedSum + currentNum) / numArray.length;

console.log(averageAll([1, 4, 7]));
console.log(averageAll([10, 5]));
console.log(reduceGetAverage([1.5, 3, 2.5, 1]));