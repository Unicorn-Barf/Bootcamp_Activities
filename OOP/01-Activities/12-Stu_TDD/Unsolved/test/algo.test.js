const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    // TODO: Write a test for the `reverse` method that should take a string as an argument and return a new reversed version of the string
    it(`should reverse the string "Hello World!" to become "!dlroW olleH" after calling 'new Algo().reverse()'.`, () => {
      const myString = new Algo('Hello World!').reverse();

      expect(myString.str).toEqual('!dlroW olleH');
    });
  });

  describe("isPalindrome", () => {
    // TODO: Write a test for the `isPalindrome` method that should take a string as an argument and return the boolean `true` if the provided string is a palindrome.
    it(`should return true when the string "racecar" is used with 'new Algo().isPalindrome()'.`, () => {
      const myPalindrome = new Algo('racecar').isPalindrome();
      expect(myPalindrome).toEqual(true);
    });
    it(`The 'isPalindrome()' expects the string 'neon' returns 'false' after calling 'new Algo().isPalindrome()'.`, () => {
      const notPalindrome = new Algo('neon').isPalindrome();
      expect(notPalindrome).toEqual(false);
    });
  });

  describe("capitalize", () => {
    // TODO: Write a test for the `capitalize` method that should take a string as an argument and return a new string with the first letter of each word capitalized
    it(`should take string "capitalize every first word of the string." to become "Capitalize Every First Word Of The String." after calling 'new Algo().capitalize()'.`, () => {
      const capitolize = new Algo('capitalize every first word of the string.').capitalize();
      expect(capitolize).toEqual('Capitalize Every First Word Of The String.');
    });
  });
});
