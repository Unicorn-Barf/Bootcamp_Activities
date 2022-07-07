// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

var mostSongsInPlaylist = function (arr) {
  if (arr.length > 0) {
    // sort array smallest to largest
    arr.sort((a, b) => {
      return a - b;
    })
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      count += arr[i];
      if (count >= 60) return i;
    }
    return arr.length;
  }
  else return 0;
};


var startTime = performance.now()

console.log(mostSongsInPlaylist([1,1,2,1,1,1,1,2,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]));
    
var endTime = performance.now()

console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)