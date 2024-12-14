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



// === (checks datatype too)
console.log("2" === 2); // false