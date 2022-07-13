const multiplyInto20 = function(arr) {
  // TODO: Write Your Code Here
  return !arr.every((num, index) => {
    for (let i = index + 1; i < arr.length; i++) {
      if (num * arr[i] === 20) return false;
    }
    return true;
  })
};

console.log([].every(() => {}));


