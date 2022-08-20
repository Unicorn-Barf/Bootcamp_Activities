// Write code to create a function that accepts two strings
// Return true if the second string is a substring of any permutation of the first string
// Else return false

var permutationSubstring = function(str, sub) {
    
    const strMap = {};
    for (letter of str) {
        if (strMap[letter]) strMap[letter]++;
        else strMap[letter] = 1;
    }

    const subMap = {};
    for (letter of sub) {
        if (subMap[letter]) subMap[letter]++;
        else subMap[letter] = 1;
    }

    for (letter in subMap) {
        if (strMap.hasOwnProperty(letter)) continue;
        else return false;
    }
    return true;
};

console.log(permutationSubstring("nnhsuieaero", "summer"));