//WRITE YOUR CODE BELOW
// create customeOrder object
var customerOrder = {
    name: "latte",
    sugar: 8,
    isReady: false,
}
// log drink name and number of sugars
console.log(customerOrder.name);
console.log(customerOrder.sugar);
// "ready for pick-up" logs if order is ready
// "stiff in order queue" if the order is not ready
if (customerOrder.isReady){
    console.log('Ready for pick-up!');
}

else {
    console.log('Still in order queue..');
}

for (const prop in customerOrder) {
    console.log(`customerOrder.${prop} = ${customerOrder[prop]}`);
}