// Write code to create a function that accepts two arrays of numbers
// Return a new array containing the intersecting elements of the arrays

var arrayIntersection = function (arr1, arr2) {
    let map1 = {};
    let map2 = {};
    arr1.forEach(num => map1[num] ? map1[num]++ : map1[num] = 1);
    arr2.forEach(num => map2[num] ? map2[num]++ : map2[num] = 1);
    console.log(map1, map2);

    let answer = [];
    for (const num in map1) {
        if (map2.hasOwnProperty(num)) {
            if (map1[num] > map2[num]) {
                for (let i=0; i<map2[num]; i++) {
                    answer.push(parseInt(num));
                }
            }
            else {
                for (let i=0; i<map1[num]; i++) {
                    answer.push(parseInt(num));
                }
            };
        };
    };
    console.log(answer);
    return answer;
};

// Not really accurate...
var arrayIntersect = function (arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
};