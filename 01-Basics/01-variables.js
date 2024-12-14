// SCOPE: BLOCK
// value can't be updated
const id = 53;

// SCOPE: BLOCK
// value can be updated
let email = "samm@google.com";

// SCOPE: GLOBAL
// value can be updated
var password = "123456";

console.log(id, email, password); // 53 samm@google.com 123456
console.table([id, email, password]);

// id = 10; // Not Allowed
email = "samm@github.com";
password = "ABCDEF";

// tabular form data representation in console 
console.table([id, email, password]);