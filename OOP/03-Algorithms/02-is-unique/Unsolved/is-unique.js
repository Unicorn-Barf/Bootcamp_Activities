// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUniqu = function(arr) {
    for (const el of arr) {
        let count = 0;
        for (let i=0; i<arr.length; i++) {
            if (el === arr[i]) count++;
            if (count === 2) return false;
        };
    };
    return true;
};

var isUniqu = function(arr) {
    if (arr.length === new Set(arr).size) return true;
    return false;
};

var isUnique = function(arr) {
    return arr.every(num => arr.indexOf(num) === arr.lastIndexOf(num));
}
