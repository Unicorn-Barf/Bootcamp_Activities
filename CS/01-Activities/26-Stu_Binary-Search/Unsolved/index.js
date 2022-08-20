const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO: Why is the 'binarySearch' function not running properly??
function binarySearch(array, element) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (array[mid] === element) {
      return true;
    } else if (array[mid] < element) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return false;
}

console.log(binarySearch(arr, 7));

module.exports = binarySearch;


// // Binary Search through dictionary example

// /*
// 1st: cut the dictionary in half
// A-M  N-Z

// 2nd: cut the first half in half
// A-G H-M

// 3rd: cut the A-G in half
// A-D   D-G

// 4th: cut the A-D
// A-B C-D


// */

// class BST {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }

//   insert(value) {
//     if (value < this.value) {
//       if (this.left) {
//         this.left.insert(value);
//       } else {
//         this.left = new BST(value);
//       }
//     } else {
//       if (this.right) {
//         this.right.insert(value);
//       } else {
//         this.right = new BST(value);
//       }
//     }
//   }

//   search(value) {
//     // return true if value is already there
//     if (this.value === value) {
//       return true;
//     }
//     if (value < this.value) {
//       if (this.left) {
//         return this.left.search(value);
//       }
//     } else {
//       if (this.right) {
//         return this.right.search(value);
//       }
//     }
//     return false;
//   }

// }