// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function(str) {
    str = str.toLowerCase();
    let charArr = str.split('');
    charArr.forEach((element, index) => {
        if (element === ' ') {
            charArr.splice(index+1, 1, charArr[index+1].toUpperCase());
            console.log('hit');
        }
    })
    let newStr = charArr.filter(element => element !== ' ');
    return newStr.join('');
};

console.log(camelCase('Hello World'));
console.log(('Hello World').split(''));