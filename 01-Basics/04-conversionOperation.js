// Negative sign
let value = 10
let negValue = -value
console.log(value) // 10
console.log(negValue); // -10



// Normal Operations
console.log(2 + 2); // 4
console.log(2 - 2); // 0
console.log(2 * 2); // 4
console.log(2 ** 3); // 8
console.log(2 / 3); // 0.6666666666666666
console.log(7 % 3); // 1



// Concatenation
let str1 = "hello"
let str2 = " world"
let str3 = str1 + str2
console.log(str3); // hello world



// Operation flow
console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32

console.log((3 + 4) * 5 % 3); // 2

console.log(+true); // 1  (true => 1)
console.log(+""); // 0  ("" => 0)



// Assignment Operation (but in different way and its valid)
let num1, num2
num1 = num2 = 10 ** 2
console.log(num1) // 100



// Increament Operator
let gameCounter = 100
++gameCounter;
console.log(gameCounter); // 101
console.log(++gameCounter); // 102
console.log(gameCounter++); // 102
console.log(gameCounter); // 103