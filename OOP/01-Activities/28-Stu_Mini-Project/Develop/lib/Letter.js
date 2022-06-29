class Letter {
  constructor(letter) {
    this.char = letter;
    if (/[A-z0-9]/g.test(letter)) this.visible = false;
    else this.visible = true;
  }

  guess(letter) {
    if (this.char === letter) {
      this.visible = true;
      return true;
    }
    else return false;
  }

  toString() {
    if (this.visible) return this.char;
    return '_';
  }

  getSolution() {
    return this.char;
  }
}


// class Letter {
//   constructor(letter) {
//     this.char = letter
//     if (/[A-z0-9]/g.test(letter)) {
//         this.visible = false;
//     }
//     else{
//         this.visible = true;
//     }
//   }

//   guess(letter) {
//     if (this.char === letter) {
//         this.visible = true;
//         return true;
//     }
//     else {
//         return false;
//     }
//   }

//   toString() {
//     if (this.visible) return this.char;
//     if (/[A-z0-9]/g.test(this.char)) {
//         return '_';
//     }
//   }

//   getSolution() {
//     return this.char;
//   }
// }

module.exports = Letter;
