// Basically datatypes are divided into 2 catorigies :
// 1. Premative datatype 
// 2. Non-Premative datatype

// --> Basically jo apka datatype ko 2 part mein divide keya gaya hai vo keya gaya hai on the basis of ke hamra data memory mein kis tarika se store ho rh hai and hum usko kasa access kar skta hai.

// Primitive datatypes :
// basically jitna bhe ye primitive datatypes hota hai ye call by value hota hai that means jab aap enko khi pr pass karta hai then enko pass nhi kiya jata bulki enki copy bana de jati hai.

// number,boolean,string,null,undefined,bigint,Symbol
// Note : Kese bhe value ko unique bana ne ka leya "symbol" ka use hota hai.


// Is javascript is dynamically type language or statically typed language ?
// --> JavaScript is dynamically typed language.
const score = 100;
const scoreValue = 100.3
// decimal kuch asa khass define nhi hai js mein ye bhe as a number datatype consider hota hai.
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
// userEmail hum me sirf decalre keya hai -> to eski value undefined hoge.

// Let see How to decalre Symbol datatype :
const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId); // --> Basically Symbol ka kaam he yhi hai ke agar aap us mein same value bhe pass karo ga to uska jo result hoga id and anotherid ka unnki value same nhi hoge.

const bigNumber = 23411182332443n; // --> kuch es tarika sa hamra hota hai bigint datatype.
console.log(typeof(bigNumber));

// Referance Datatype (Non-Primitive)

// Arrays,Objects ,Functions

const heros = ["shaktiman","naagraj","doga"]
// This above is array 


let myObj = {
    name: "yash",
    age: 22,
}
// This above is my object
// And remember one thing ke curly bracket ke andar jitne bhe value hai vo object hai.

// Let see the function : 
const myFunction = function(){
    console.log("Hello World");
}
// Function ko bhe aap javascript mein variable ke taraha treat kar skta ho

// Jo null datatype hota hai uska typeof(typeof -> jo datatype bata ta hai) hota hai "object".

// Basically jitna bhe non-primitive datatype hota hai unka typeof se datatype "object" he ata hai
console.log(typeof(myFunction));
console.log(typeof  heros);
console.log(typeof myObj);