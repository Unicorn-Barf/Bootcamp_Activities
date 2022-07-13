// Write code to merge two sorted arrays into a new sorted array

var mergeSoed = function (arr1, arr2) {
    // use longest array
    let shortArr;
    let longArr;
    arr1.length > arr2.length ? (longArr = arr1, shortArr = arr2) : (longArr = arr2, shortArr = arr1);
    // Compare short array elements one by one to long arr
    shortArr.forEach((num, i) => {
        console.log('forEach loop!');
        // Compare each short array element to long array and insert at correct index
        for (let me = 0; me < longArr.length; me++) {
            console.log('For loop!');
            if (num < longArr[me]) {
                longArr.splice(me, 0, num);
                break;
            }
            else if (me === longArr.length - 1) {
                longArr.splice(me+1, 0, num);
                break;
            }
        }
    });
    return longArr;

};

var mergeSorted = function (arr1, arr2) {
    let i = 0;
    let j = 0;
    let mergedArr = [];
    while (i<arr1.length && j<arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArr.push(arr1[i]);
            i++;
        }
        else {
            mergedArr.push(arr2[j]);
            j++
        }
    }

    while (i<arr1.length) {
        mergedArr.push(arr1[i]);
        i++;
    }
    
    while (j<arr2.length) {
        mergedArr.push(arr2[j]);
        j++;
    }
    return mergedArr;
}

console.log(mergeSorted([12, 13, 20, 51], [8, 14, 40, 41, 43, 50]));