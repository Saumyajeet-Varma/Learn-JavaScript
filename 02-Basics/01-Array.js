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



// Spread operator
let arr1 = [1, 2, 3, 4]
let arr2 = [1, 2, 3, 4]
let arr3 = [1, 2, 3, 4]
let addArr = [5, 6, 7, 8]

arr1.push(addArr); // This will change arr1
const concatRes = arr2.concat(addArr); // This will not change arr2
const spreadRes = [...arr3, ...addArr];

console.log(arr1); // [1, 2, 3, 4, [5, 6, 7, 8]]
console.log(arr2); // [1, 2, 3, 4]
console.log(arr3); // [1, 2, 3, 4]
console.log(concatRes); // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(spreadRes); // [1, 2, 3, 4, 5, 6, 7, 8]



// Flat function
let nDArr = [1, 2, 3, 4, [5, 6, [7]], [8], [9], 0]
const depth = 2
const flatRes = nDArr.flat(depth); // In this case depth is 2, we can also use Infinity, and if we didn't put any arguement then default is 1
console.log(flatRes) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]



// Array.
const isArrayBool1 = Array.isArray([1, 2, 3]);
const isArrayBool2 = Array.isArray("Saumyajeet");
const strArr = Array.from("Saumyajeet");
const objArr = Array.from({ name: "Saumyajeet" });
const arrOf = Array.of(100, 200, 300);

console.log(isArrayBool1) // true
console.log(isArrayBool2) // false
console.log(strArr) // ['S', 'a', 'u', 'm', 'y', 'a', 'j', 'e', 'e', 't']
console.log(objArr) // [], Empty Array because we have to mention clearly either we want keys array or values array
console.log(arrOf) // [100, 200, 300]