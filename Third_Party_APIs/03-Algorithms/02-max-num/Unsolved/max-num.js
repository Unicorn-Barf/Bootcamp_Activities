// Write code to return the largest number in the given array


var maxNum = function(arr) {
    for (i=0; i < arr.length; i++) {
        let check = arr[i];
        for (j=0; j<arr.length; j++) {

            if (check < arr[j]) {
                break;
            };

            if (check > arr[j] && j === arr.length - 1) {
                console.log(check);
                return check;
            };
        };
    };
};

maxNum([3, 1, 17, 5, 6, 150, 30]);