function weekDay(num) {
    num = parseInt(num);
    let days = {
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
        7: 'Sunday'
    };
    if (num > 0 && num < 8) {
        return days[num];
    }
    else {
        return 'undefined';
    }
};

// Try using a switch instead

console.log(weekDay(1));
console.log(weekDay(2));
console.log(weekDay(9));