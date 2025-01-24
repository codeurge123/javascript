// Let's understand about Dates in javascript :

let myDate = new Date() // --> ye mein na date ka ek obejct bana leya hai.
// console.log(myDate);  --> This myDate object give me date and time which is not readable.

console.log(myDate.toString())
// Humm ne dekh ke jab hum na myDate object ko string mein convert kar deya then harma -> date and time shi aa rh hai but abhe bhe ye ek optimium way nhi hai date ko print karna ka .

// We have different methods to showcase the date and time in javascript and different method shows date and time in different format&way.

// Some Other methods to showcase date : 
console.log(myDate.toDateString()); // --> This method shows only date with day

console.log(myDate.toLocaleDateString()); // --> this method also shows only date but in format that we written in  notebook --> 20/1/2025

console.log(myDate.toLocaleString()); // --> this show date and time in format that we generally used.

// console.log(myDate.toLocaleTimeString()) //--> this method shows only time not date.

// console.log(myDate.toISOString()); 

// console.log(myDate.toJSON());

// Now let see the typeof -> date :
console.log(typeof myDate); // --> The typeof of myDate is object.
// "typeof" means ke give variable ka datatype kya hai.


// Humm chaa hai to apni marji se bhe koi particular date and time print kara skta hai
// Note : Apni marji se date print karna ke leya Date() function mein modification kar do in which Date(year,month,date) jo year,month,date dalo ga vo print ho jaya ga.
let myCreatedDate = new Date(2023,0,23);
console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toString());

// Note : javasript mein month "0" se start hota hai that means 0 means Jan , 1 means Feb and so on...

// Aap date ko or bhe tarika se declare/(ya bol lo input me le skta hai) kr skta hai : 
// let anotherDate = new Date(2023,0,23,5,3);
let anotherDate = new Date("01-14-2023");
// Remember one thing ke jab humm date ess tarika se declare karta hai to hmra month "1" sa start hota hai.
console.log(anotherDate.toLocaleString());



// Let's understand about TimeStamp in  javascript : 

let myTimeStamp = Date.now() // --> for getting timestamp the syntax is this , ye jo timestamp hai ye "1973" se abhe tak ka time aa rah haii in miliseconds.
console.log(myTimeStamp);

// Now see how to convert date's in timeStamp: 
console.log(anotherDate.getTime());




// Ab aap chahai to aap TimeStamp ko seconds mein bhe convert kar skta hai by dividing milisecond timeStamp with 1000 and math.floor es leya use kiya hai b/c hum ko decimal value nhi chiya. 
console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate);
// Some other methods related to Date object are : 
console.log(newDate.getMonth()) // --> Give current month --> 0 es liya aya hai b/c in javascript month 0 se start hota hai and "jan" is the 0th month according to javascript.
console.log(newDate.getDay()); // --> Today, monday hai es liya 1 print huya hai


// Humm kuch es tarika se bhe date and time ko likh skata hai.
let nd = newDate.toLocaleString('default', {
    weekday: "long",
})

console.log(nd);