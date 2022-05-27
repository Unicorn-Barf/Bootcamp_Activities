function duplicate (arr) {
    let set = [];
    for (i in arr) {
        if (set.includes(arr[i])) {
            return arr[i];
        }
        set[i] = arr[i];
    }
}

// most efficient way learn maps!!!!
// create a hashmap that lets me know whetehr a number has already appeared or not
const findDup = arrayOfNums => {
    const numMap = {};
    for (let i = 0; i < arrayOfNums.length; i++) {
        const currentNum = arrayOfNums[i];
        if (numMap[currentNum]) {
            return currentNum;
        }
        else {
            numMap[currentNum] = true;
        }
    }
}
// loop through array
// for each number check if the number is already in the hashMap
    // if so, reutn that number
    // otherwise, set that number as a key on the hasmap and set its val to true

console.log(duplicate([2, 5, 6, 3, 5]));
console.log(duplicate([1, 3, 4, 1, 3, 4]));
console.log(duplicate([2, 4, 5]));

console.log(findDup([2, 5, 6, 3, 5]));
console.log(findDup([1, 3, 4, 1, 3, 4]));
console.log(findDup([2, 4, 5]));