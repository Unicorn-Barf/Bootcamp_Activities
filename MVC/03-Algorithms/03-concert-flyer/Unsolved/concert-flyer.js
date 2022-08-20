// Write a function that takes two strings and returns true if every word found in the second string is present in the first string. You will be checking for both words and their frequency. Assume you'll need to worry about casing, but the strings won't contain any punctuation. Assume neither string will be empty

var concertFlyer = function (magazine, flyer) {
    const magMap = {};
    for (word of magazine.split(' ')) {
        if (magMap[word]) magMap[word]++;
        else magMap[word] = 1;
    }

    const flyMap = {};
    for (word of flyer.split(' ')) {
        if (flyMap[word]) flyMap[word]++;
        else flyMap[word] = 1;
    }

    for (word in flyMap) {
        if (magMap.hasOwnProperty(word)) continue;
        else return false;
    }
    return true;
};
