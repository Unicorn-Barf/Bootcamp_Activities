// TODO: Add a comment describing what the `position` parameter means for this function.
let count = 0;
const fibonacci = (position) => {
  count++;
  console.log(count);
  // TODO: Add a comment describing the purpose of this conditional statement.
  if (position < 2) {
    return position;
  }

  // TODO: Add a comment describing the purpose of this return statement.
  return fibonacci(position - 1) + fibonacci(position - 2);
};
// f(9)
// f(8) + f(7)
// [f(7) + f(6)] + [f(6) + f(5)]
// [f(6) + 2*f(5) + f(4)] + [f(5) + 2*f(4) + f(3)]
// 
// O(2^n)

// TODO: What will this return?
console.log(fibonacci(9));

// f(2) + f(1)
// 2

// 4
// f(3) + f(2)

