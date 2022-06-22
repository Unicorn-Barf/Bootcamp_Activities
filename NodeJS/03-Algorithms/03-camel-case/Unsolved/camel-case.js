// Write code to create a function that accepts a string and returns the string in camelCase

// var camelCase = function(str) {
//     str = str.toLowerCase();
//     let charArr = str.split('');
//     charArr.forEach((element, index) => {
//         if (element === ' ') {
//             charArr.splice(index+1, 1, charArr[index+1].toUpperCase());
//             console.log('hit');
//         }
//     })
//     let newStr = charArr.filter(element => element !== ' ');
//     return newStr.join('');
// };

var camelCase = function(str) {
    str = str.toLowerCase();
    let wordArray = str.split(" ");
    let finalString = "";
    let firstNonEmptyFound = true;
    for(let i=0; i<wordArray.length; i++) {
        if (wordArray[i].length <= 0) {
            console.log('hit');
            continue;
        }
        if (firstNonEmptyFound) {
            
            firstNonEmptyFound = !firstNonEmptyFound
        }
        else {
            wordArray[i] = wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1)
        }
        finalString += wordArray[i]
    }

    return finalString
}

console.log(camelCase('Hello World'));
console.log(camelCase('    He  llo Wo  rld    '));
console.log(camelCase("              "));
console.log(camelCase("Hellow  World 1 23 4 $ %^ & my name is jefff"));
///console.log(('Hello World').split(''));