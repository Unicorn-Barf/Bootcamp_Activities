// TODO: Complete the 'counter' function below.
function counter() {
    let counter = 0;
    return {
        increment: function () {
            return ++counter;
        },
    };
}

module.exports = counter;
