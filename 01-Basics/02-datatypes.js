// String
let username = "Samm"
console.log(typeof username); // string

// Number
let age = 21
console.log(typeof age); // number

// Boolean
let isLoggedIn = false
console.log(typeof isLoggedIn); // boolean

// null (object)
let activity = null;
console.log(typeof activity); // object

// undefined
let state;
console.log(typeof state); // undefined

// Symbol
let sym = Symbol("foo");
console.log(sym) // Symbol(foo)



// typeof null and undefined
console.log(typeof null); // object
console.log(typeof undefined); // undefined



// Array, Object, Functions
const arr = [1, 2, 3, 4, 5];

const obj = {
    email: "samm@gmail.com",
    password: "123456"
};

const fn = function () {
    console.log("Hello World");
}

const num = function () {
    return 10;
}

console.log(typeof arr); // object
console.log(typeof obj); // object
console.log(typeof fn); // function
console.log(typeof num); // function