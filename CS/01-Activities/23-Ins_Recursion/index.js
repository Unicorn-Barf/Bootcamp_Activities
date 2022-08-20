// Recursion is a function calling itself over and over again
// until it reaches a base case
// "base case" is the condition on when we want the recursion to stop
// if you do not stop recursion you get an error called "stack overflow"

const countdown = (value) => {
  // for all values more than 0, logs the value then calls the function with a smaller argument
  if (value > 0) {
    console.log(value);
    // recursive call creates the loop
    return countdown(value - 1);
  } else {
    // base condition stops the recursive call
    return value;
  }
};

countdown(10);
