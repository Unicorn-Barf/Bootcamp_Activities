function Algo() {
}

Algo.prototype.reverse = function(str) {
  // TODO: Your code here
  return str.split('').reverse().join('');
};

Algo.prototype.isPalindrome = function(str) {
  // TODO: Your code here
  return str === new Algo().reverse(str);
};

Algo.prototype.capitalize = function(str) {
  // TODO: Your code here 
  // const wordArr = str.split(" ");
  // for (let i=0; i<wordArr.length; i++) {
  //   wordArr[i] = wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
  // }
  // const string = wordArr.join(' ');
  return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
};

module.exports = Algo;
