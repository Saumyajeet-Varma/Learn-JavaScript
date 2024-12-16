// Initializing Array
let myArr = [0, 1, 2, 3, 4, 5];
let anotherArr = new Array(1, 2, 3, 4, 5);

console.log(myArr) // [0, 1, 2, 3, 4, 5]
console.log(anotherArr) // [1, 2, 3, 4, 5]



// Array Methods
myArr.push(6); // [0, 1, 2, 3, 4, 5, 6]
myArr.push(7); // [0, 1, 2, 3, 4, 5, 6, 7]

myArr.pop(); // [0, 1, 2, 3, 4, 5, 6]

myArr.includes(2); // true

myArr.indexOf(4); // 4

myArr.unshift(9); // 8
myArr.shift(); // 9



// Join
const newArr = myArr.join()
console.log(newArr); // 0,1,2,3,4,5,6



// slice and splice
const s1 = myArr.slice(1, 3); // [1, 2]
const s2 = myArr.splice(1, 3); // [1, 2, 3]

console.log(s1);
console.log(s2);