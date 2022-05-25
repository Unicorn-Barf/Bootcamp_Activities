// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
    let vowels = 'aeiuoAEIOU';
    let count = 0;
    for (i=0; i<str.length; i++) {
        let char = str[i];
        if (vowels.indexOf(char) > -1) {
            count++;
        }
    }
    return count;
};
