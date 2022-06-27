// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

var isAnagra = function(strA, strB) {
    if (strA.length !== strB.length) return false;
    const mapA = {};
    const mapB = {};
    let countA, countB;
    for (i=0; i<strA.length; i++) {
        chA = strA.charAt(i);
        countA = mapA[chA];
        mapA[chA] = countA ? countA + 1 : 1;
        chB = strB.charAt(i);
        countB = mapB[chB];
        mapB[chB] = countB ? countB + 1 : 1;
    }
    console.log(mapA, mapB);
    for (key in mapA) {
        if (mapA[key] === mapB[key]) {
            continue;
        }
        else {
            return false;
        }
    };
    return true;
};

var isAnagram = function(strA, strB) {
    if (strA.length !== strB.length) return false;
    const mapA = {};
    const mapB = {};
    for (const char of strA) {
        mapA[char] = mapA[char] + 1 || 1;
    };
    for (const char of strB) {
        mapB[char] = mapB[char] + 1 || 1;
    };
    for (const key in mapA) {
        if (mapA[key] === mapB[key]) {
            continue;
        }
        else {
            return false;
        }
    };
    return true;
};