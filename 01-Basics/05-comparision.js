// Number-Number comparision
console.log(2 > 1); // true
console.log(2 >= 1); // true
console.log(2 < 1); // false
console.log(2 == 1); // false
console.log(2 != 1); // true



// Number-String comparision
console.log("2" > 1); // true
console.log("02" > 1); // true



// comparision with null
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true



// comparision with undefined
console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false



// comparision of Symbols
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); // false
console.log(id == anotherId); // false



// comparision of Objects (never equal)
const obj1 = { name: "samm" }
const obj2 = { name: "samm" }
console.log(obj1 === obj2); // false
console.log(obj1 == obj2); // false

const obj = { name: "samm" }
console.log(obj === obj) // true



// === (checks datatype too)
console.log("2" === 2); // false