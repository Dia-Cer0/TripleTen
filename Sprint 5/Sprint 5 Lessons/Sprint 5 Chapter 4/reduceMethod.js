const page = document.querySelector(".page");


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sum = 0; // declare a variable for storing this sum

// going through array elements
// add every element to the accumulator variable sum

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log("For Loop: " + sum); 

sum = arr.reduce(function (previousValue, item) {
    console.log(`previousValue: ${previousValue}, item: ${item}`)
    return previousValue + item;
});

console.log("Reduce Function: " + sum); 

const order = ["apple", "banana", "orange", "banana", "apple", "banana"];

let object1 = {};

const result = order.reduce(function (prevVal, item) {
    console.log(object1);
    console.log(item);
    console.log(prevVal);
    console.log(!prevVal[item]);
    console.log(prevVal[item]);
    if (!prevVal[item]) {
        // if an object doesn't have a key yet, it means it wasn't repeated before
        prevVal[item] = 1;
    } else {
        // increase the number of repetitions by 1
        prevVal[item] += 1;
    }
    
    
    // and return the changed object
    return prevVal;
}, object1); // The initial value is an empty object.

console.log(result); // { apple: 2, banana: 3, orange: 1 } 