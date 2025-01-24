// Arrays : 

const myArr = [0, 1, 2, 3, 4, 5];
// Arrays humm square brackets ka use karke banta hai and enka andr jo hum data dal ta hai unha bolta hai elements

// Note : Javascript ke jo array hota hai vo resizable hota hai that means agar ek bar ap ne declare kar deya array to aap us mein or bhe elements add kar skta h.

// "Array jo hai vo hamra mixture ho skta hai datatype ka in javascript" means in single array hamra number bhe ho skta hai,boolean value bhe ho skti hai, and string bhe ho skti hai.

// Note : In javascript array ke indexing start hoti hai zero(0) se to agar aapko array ke elements ko access karna hai to vo aap indexing ke help se kar skta hai.
// console.log(myArr[3]);


// Array in javascript always shallow copies banta hai that means array always by referance pass ho ga means ess mein acutal array and copy of array shares the same referance point.

// Let's see different ways to declare an array :
const myHeros = ["shaktiman", "naagraj"];

// Another way to declare an array : 
const myArr2 = new Array(1,2,4,2,4,5);
// console.log(myArr2[0])



// Arrays Method : 

// myArr.push(8); // --> This is the method to push the element into the array.
// myArr.push(10);
// console.log(myArr); // --> This is how we can print an whole array.
// // Hum array mein se last element ko pop/delete bhe kar skta hai using ".pop()" method
// myArr.pop(); // --> es mein koi argument nhi deta hai
// console.log(myArr);

myArr.unshift(9); // --> Using unshift we are able to add given element at the start of the array.
myArr.shift() // --> Using shift method we pop the front element of the array and es ka andar hum koi bhe argument pass nhi karta hai.

// console.log(myArr);

// console.log(myArr.includes(9)); // --> This method give true/false on the basis ke given value is present in array or not.

// console.log(myArr.indexOf(3)) // --> If we want to find out the index of the given element then we use the method myArr.indexOf(4); if element is present in array then this method return the index of that element, and if element is not present in array then this method return '-1'.


const newArr = myArr.join();
// console.log(myArr);
// console.log(newArr);

// join() --> This method converts the array into string.


// slice , splice 
console.log("A ",  myArr);

const myn1 = myArr.slice(1,3); // --> This operation said that array ka index 1 se lekar less than 3 tak ka part myn1 mein dal doo 
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3); // --> This operation gives the array value from index 1 to 3 and to myn2 variable/array 
console.log("C " , myArr);
console.log(myn2);

// The main difference between slice and splice
// slice() --> do not manipulate the orginal array.
// splice() --> This method manipulate the orginal array.
