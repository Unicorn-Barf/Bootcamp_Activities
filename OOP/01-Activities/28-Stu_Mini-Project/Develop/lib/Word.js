const Letter = require("./Letter");

class Word {
  constructor(word) {
    const letterArr = word.split('').map(letter => new Letter(letter));
    this.letters = letterArr;
  }

  guessLetter(guess) {
    let check = false;
    for (const letter of this.letters) {
        if (letter.char === guess) {
            letter.guess(guess);
            check = true;
        }
    }
    return check;
  }

  guessedCorrectly() {
    for (const letter of this.letters) {
      if (!letter.visible) return false;
    }
    return true;
  }
}

// class Word {
//   constructor(word) {
//     let letterArr = word.split('').map(letter => new Letter(letter))
//     this.letters = letterArr;
//     this.word = word;
//   }

//   guessLetter(guess) {
//     let check = false;
//     for (const letter of this.letters) {
//         if (letter.char === guess) {
//             letter.guess(guess);
//             check = true;
//         }
//     }
//     return check;
//   }

  // guessedCorrectly() {
  //   if (this.letters.every(letter => letter.visible)) return true;
  //   else return false;
  // }

//   getSolution() {
//     return this.word;
//   }
// }

module.exports = Word;
