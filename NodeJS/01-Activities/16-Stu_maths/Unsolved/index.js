// TODO: Import `maths.js`
const myMath = require('./maths');
// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
let oper = process.argv[2];
let num1 = parseInt(process.argv[3]);
let num2 = parseInt(process.argv[4]);
// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`
switch (oper) {
    case 'sum': {
        console.log(myMath.sum(num1, num2));
        break;
    }
    case 'difference': {
        console.log(myMath.difference(num1, num2));
        break;
    }
    case 'product': {
        console.log(myMath.product(num1, num2));
        break;
    }
    case 'quotient': {
        console.log(myMath.quotient(num1, num2));
        break;
    }
    default: {
        console.log('Operation not found');
    }
}
