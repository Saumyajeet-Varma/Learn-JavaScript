// Initializing Array
let myArr = [0, 1, 2, 3, 4, 5];
let anotherArr = new Array(1, 2, 3, 4, 5);

console.log(myArr) // [0, 1, 2, 3, 4, 5]
console.log(anotherArr) // [1, 2, 3, 4, 5]

myArr.length; // 6



// Array Methods
myArr.push(6); // [0, 1, 2, 3, 4, 5, 6]
myArr.push(7); // [0, 1, 2, 3, 4, 5, 6, 7]

myArr.pop(); // [0, 1, 2, 3, 4, 5, 6]

myArr.unshift(9); // [9, 0, 1, 2, 3, 4, 5, 6]
myArr.shift(); // [0, 1, 2, 3, 4, 5, 6]

myArr.includes(2); // true

myArr.indexOf(4); // 4



// Join
const newArr = myArr.join()
console.log(newArr); // 0,1,2,3,4,5,6
console.log(typeof newArr) // string



// slice and splice
const s1 = myArr.slice(1, 3); // Range - [1, 3)
console.log(s1); // [1, 2]
console.log(myArr); // no change in myArr

const s2 = myArr.splice(1, 3); // Range - [1, 3]
console.log(s2); // [1, 2, 3]
console.log(myArr); // s2 is not in myArr anymore