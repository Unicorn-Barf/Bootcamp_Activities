// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {
    let newStr = str.split('');
    console.log(newStr);
    newStr[0] = newStr[0].toUpperCase();
    for (i=0; i<newStr.length; i++) {
        if (newStr[i] === ' ') {
            newStr[i+1] = newStr[i+1].toUpperCase();
        }
    }
    newStr = newStr.join('');
    return newStr;
};
