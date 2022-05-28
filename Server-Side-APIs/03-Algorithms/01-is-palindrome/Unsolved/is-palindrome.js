// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function(str) {
    
    for (i in str) {
        let char = str[i];

        if (str.indexOf(char) + str.lastIndexOf(char) === str.length-1) {
            continue;
        }
        else {
            return false;
        }
    }
    return true;
};