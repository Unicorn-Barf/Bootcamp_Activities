// Exercise 1
const songs = ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];

// TODO: Which operator is being used here?
// spread
const newSongs = [...songs];

// TODO: What do you expect to be logged in the console?
console.log(newSongs);

// Exercise 2
const addition = (x, y, z) => {
  const array = [x, y, z];
  // TODO: What does the reduce() method do?
  // 0 = starting value
  // 
  return array.reduce((a, b) => a + b, 0);
};

const reduce = function(array, cb, startingValue) {
  let start = startingValue !== undefined; //Boolean
  // This is what we are going to return
  let accumulatedValue;
  // if starting value is true set start to whatever starting value is
  if (start) {
    accumulatedValue = startingValue;
    for (let i=1; i<array.length; i++) {
      accumulatedValue = cb(accumulatedValue, array[i])
    }
  }
  else {
    accumulatedValue = array[0];
    for (let i=1; i<array.length; i++) {
      accumulatedValue = cb(accumulatedValue, array[i])
    }
  }
  return accumulatedValue;
}

reduce([1,2,3], (accumulatedValue, currentNum) => accumulatedValue +currentNum);


// TODO: What do you expect to be logged in the console?
console.log(addition(1, 2, 3));

// TODO: What is this syntax that is being used as the parameter?
// rest: turns it into an array
const additionSpread = (...array) => {
  return array.reduce((a, b) => a + b, 0);
};

// TODO: What do you expect to be logged in the console?
console.log(additionSpread(1, 2, 3));
// 6
// TODO: What do you expect to be logged in the console?
console.log(additionSpread(1, 2, 3, 4, 100));
// 110
