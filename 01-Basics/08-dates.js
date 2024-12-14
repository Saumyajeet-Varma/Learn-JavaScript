// JavaScript Date Object
let myDate = new Date() // Now
console.log(myDate) // 2024-12-14T15:39:47.227Z
console.log(myDate.toString()); // Sat Dec 14 2024 21:09:47 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Sat Dec 14 2024
console.log(myDate.toISOString()); // 2024-12-14T15:39:47.227Z
console.log(myDate.toJSON()); // 2024-12-14T15:39:47.227Z
console.log(myDate.toLocaleString()); // 14/12/2024, 9:09:47 pm
console.log(typeof myDate); // object



// Date Creation with specific date
let myCreatedDate1 = new Date(2023, 0, 23)
console.log(myCreatedDate1.toLocaleString()); // 23/1/2023, 12:00:00 am

let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate2.toLocaleString()); // 23/1/2023, 5:03:00 am

let myCreatedDate3 = new Date("2023-01-14")
console.log(myCreatedDate3.toLocaleString()); // 14/1/2023, 5:30:00 am

let myCreatedDate4 = new Date("01-14-2023")
console.log(myCreatedDate4.toLocaleString()); // 14/1/2023, 12:00:00 am



// 1st Jan 1970
let myTimeStamp = Date.now()
console.log(myTimeStamp); // 1734188631856 (depends on time) (millisecond values from 1st Jan 1970)

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.getTime()); // 1674412200000 (millisecond values from 1st Jan 1970)



// Access to specific data from date
let newDate = new Date()
console.log(newDate.getMonth() + 1); // 12
console.log(newDate.getDay()); // 6