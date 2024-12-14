// String to Number
let score = "Samm"
console.log(typeof score); // string

let valueInNumber = Number(score)
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // NaN

// "10" => 10
// "10sv" => NaN
//  true => 1; false => 0



// String to Boolean
let isLoggedIn = "Samm"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // true

// 1 => true; 0 => false
// "" => false
// "hitesh" => true



// Number to String
let someNumber = 10
let stringNumber = String(someNumber)
console.log(typeof stringNumber); // string
console.log(stringNumber); // "10"

// 10 => "10"