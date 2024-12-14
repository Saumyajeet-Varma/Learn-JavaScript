// Number
const balance = new Number(100)
console.log(balance); // [Number: 100]
console.log(balance.toString().length); // 3
console.log(balance.toFixed(1)); // 100.0



// Floating Number
const otherNumber = 123.8966
console.log(otherNumber.toPrecision(5)); // 123.90

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000



// Math
console.log(Math); // Object [Math] {}
console.log(Math.abs(-4)); // 4
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.min(4, 3, 6, 8)); // 3
console.log(Math.max(4, 3, 6, 8)); // 8



// Random
console.log(Math.random()); // Any real number between 0 to 1
console.log((Math.random() * 10) + 1); // Any real number betwen 1 to 10
console.log(Math.floor(Math.random() * 10) + 1); // Any Integer between 1 to 10

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // Any Integer between min to max