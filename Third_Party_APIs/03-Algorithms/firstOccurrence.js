var myString = "what a wonderful day it has been!";

let firstOccurrence = string => {
    for (i=0; i<string.length; i++) {
        const character = string[i];
        if (string.lastIndexOf(character) === string.indexOf(character)) {
            console.log(`"${character}" is the first occurring character that appears once in the string.`)
            break;
        }
    };
};

console.log(firstOccurrence("what a wonderful day it has been!"));
console.log(firstOccurrence("this hat is the greatest!"));
console.log(firstOccurrence("the quick brown fox jumps over the calm kitten quietly"));

// 
// //
// // Write a function that takes in a string and outputs the first occurrence
// // of a character that does not repeat itself in that string.



// // Input: "what a wonderful day it has been!"
// //  Output: "o"



// // Input: "this hat is the greatest!"
// //  Output: "g"
// const firstNonRepeatChar = string => {
// 	for (let i = 0; i < string.length; i++) {
// 		const currentString = string[i];
// 		let count = 0;

// 		for (let j = 0; j < string.length; j++) {
// 			if (string[j] === currentString) {
// 				count++;
// 			}
// 		}
// 		if (count === 1) {
// 			return currentString;
// 		}
// 	}
// };
// // hello world
// /*
// * {
// *   "h": 1,
// *   "e": 1,
// *    "l": 3,
// *   "o": 2,
// *
// * }
// *
// * */
// const firstNonRepeatCharHashMap = string => {
// 	const charCount = {};
// //	LOOP THROUGH STRING
// 	for (let i = 0; i < string.length; i++) {
// 		const currentLetter = string[i];
//         console.log(charCount);
// 		//			check if current letter in string is in charCount
// 		if (charCount[currentLetter]) {
// 			charCount[currentLetter]++;
// 		} else {
// 			charCount[currentLetter] = 1;
// 		}
// //	   if so, increment the value of that letter in charCount
// //	      else set the value of that letter to 1 in charCount
// 	}
// 	for (const i in charCount) {
// 		if (charCount[i] === 1) {
// 			return i;
// 		}
// 	}
// }
// console.log(firstNonRepeatCharHashMap("hello world"));
//
// 	Ex:
// Input: "the quick brown fox jumps over the calm kitten quietly"
//  Output: "b"