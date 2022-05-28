// Write code to create a function that returns the factorial of `num`

var factorial = function(num) {
    let fact = 1;
    for (i=1; i<=num; i++) {
        fact = fact * i;
    }
    return fact;
};
