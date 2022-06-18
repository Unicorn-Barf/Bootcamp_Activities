let oneVar = process.argv[2];
let twoVar = process.argv[3];

if (oneVar === twoVar) {
    console.log("True");
}

else {
    console.log("False");
}

// Ternary operator statement
// if left of ? is true, do true else do false
console.log(process.argv[2] === process.argv[3] ? true : false);