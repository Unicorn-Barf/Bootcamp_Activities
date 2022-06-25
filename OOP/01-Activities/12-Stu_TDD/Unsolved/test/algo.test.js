const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    // TODO: Write a test for the `reverse` method that should take a string as an argument and return a new reversed version of the string
    it(`It's done when the 'reverse()' test expects the string "Hello World!" to become "!dlroW olleH" after calling 'new Algo().reverse()'.`, () => {
      const myString = new Algo('Hello World!');

      expect("str" in myString).toEqual('!dlroW olleH');
    });
  });

  describe("isPalindrome", () => {
    // TODO: Write a test for the `isPalindrome` method that should take a string as an argument and return the boolean `true` if the provided string is a palindrome.
    it(`The 'isPalindrome()' expects the string "racecar" to return 'true' after calling 'new Algo().isPalindrome()'.`, () => {
      const myPalindrome = new Algo();
      myPalindrome = 'racecar';
      const myBoolean = myPalindrome.isPalindrome();
      expect(myBoolean).toEqual(true);
    });
    it(`The 'isPalindrome()' expects the string 'neon' returns 'false' after calling 'new Algo().isPalindrome()'.`, () => {
      const notPalindrome = new Algo();
      notPalindrome = 'neon';
      const myBoolean = notPalindrome.isPalindrome();
      expect(myBoolean).toEqual(false);
    });
  });

  describe("capitalize", () => {
    // TODO: Write a test for the `capitalize` method that should take a string as an argument and return a new string with the first letter of each word capitalized
    it(`The string "capitalize every first word of the string." to become "Capitalize Every First Word Of The String." after calling 'new Algo().capitalize()'.`, () => {
      const capitolize = new Algo();
      capitolize = 'capitalize every first word of the string.';
      expect(capitolize.capitalize()).toEqual('Capitalize Every First Word Of The String.');
    });
  });
});
