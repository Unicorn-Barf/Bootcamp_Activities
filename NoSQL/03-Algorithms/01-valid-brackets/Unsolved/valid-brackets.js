// Write a function to take a string and return true if it contains valid sets of matching brackets, else return false

const validBrackets = function(str) {
    
    let openArr = [];
    let closeArr = [];
    let testOpen, testClose;
    const openRegex = /[\(\[\{]/g;
    const closeRegex = /[\)\]\}]/g;

    while ((testOpen = openRegex.exec(str)) !== null && (testClose = closeRegex.exec(str)) !== null) {
        console.log(testOpen, testClose);
        openArr.push(testOpen[0]);
        closeArr.push(testClose[0]);
    };
    console.log(openArr, closeArr);
    if (openArr.length !== closeArr.length) return false;
    for (let i=0; i < openArr.length; i++) {
        console.log('Looped', (closeArr[(closeArr.length-1)-i].charCodeAt() - openArr[i].charCodeAt()));
        if (openArr[i] === '(') {
            console.log('smooth', openArr[i], i);
            if ((closeArr[(closeArr.length-1)-i].charCodeAt() - openArr[i].charCodeAt()) === 1) continue;
            else return false;
        }
        else {
            console.log('rough');
            if ((closeArr[(closeArr.length-1)-i].charCodeAt() - openArr[i].charCodeAt()) === 2) continue;
            else return false;
        };
    };

    return true;
};

console.log(validBrackets('(({{[[]]}}))'));
