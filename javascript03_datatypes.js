// Bascially phala ke javascript and aaj ke javascript mein difference hai phala ke javascript arrowfunction and kaafi chija nhi hua karti the but aab ye chija available hai in modern javascript
"use strict"; // --> By written this we meant to say that treat all JS code as newer version or newer js.

// alert("hello");  --> we are using nodejs , not browser
// alert(3+3)  
// --> Basically alert ko use karna ka different syntax hai node-js ke andar hum usko asa use nhi kar skta hai jasa hum na upar kara hai.

// console.log(3
//     +
//     3

// )  -->  es tarika sa code ko likh na is not a good practice,because it reduce readability of the code.

console.log(3+3) 
console.log("Yash")
// Note: Javascript mein humri choice hai ke hum ';' use kara ya nhi


// Datatypes :
let name = "yash" // --> yaha par mein na data semicolon mein likh deya to ye mera ho gaya string datatype
let age = 18 // -> ye mera ho gaya number datatype
let isLoggedIn = true // -> ye mera ho gaya boolean datatype
let state;
let temp = null

// Different type of datatype : 
// number => 2 to power53 --> this is also a datatype
// bigint is also another type of datatype
// string => ""
// boolean=> true/false
// null => standalone value 
// undefined => this is a another type of datatype and it is created when we only declare variable not initialize it.
// symbol => unique -> it is also a datatype
// This all datatype listed above are called as premative datatype

// object --> in furture hum enko padha ga.

console.log(typeof "yash");
// ye typeof humko batya ga ke hamra jo data likha hua hai console mein vo konsa datatype hai.

// console.log(typeof age) --> typeof ne bata deya ke eska datatype "number" hai.

console.log(typeof null) // --> it has datatype -> object

console.log(typeof undefined); // --> it has datatype -> undefined