// Write code to create a function that accepts a string containing only 0s and 1s
// Return true if there are an equal number of 0s and 1s
// Else return false

var zeroesAndOnes = function (str) {
    let count = {
        zero: 0,
        one: 0
    };
    if (str.length > 0) {
        [...str].forEach(char => {
            if (parseInt(char) === 0) count.zero++;
            if (parseInt(char) === 1) count.one++;
        });
    }
    console.log(count);
    return count.zero === count.one;
};
