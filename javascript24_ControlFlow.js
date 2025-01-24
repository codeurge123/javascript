// Control Flow in JavaScript : 

// Firstly , let's understand about if statement :

// Syntax of "if" statement:-
// if (condition) {

// }

const isUserLoggedInn = true;
if (isUserLoggedInn) {
    console.log(`Welcome to Website Hope you are doing great!!`);
}

// Basically 'if' ke pranthesis mein aap condition check karta hai agar condition true hai to code/vo if statement execute kar jaya ge varna nhi

// condition may be of comparing two value by ==,<=,>,<,>=,!=,===

// Note : "=== triple equal" wala operation ka hum use karta hai when humm chata hai ke value ke sath sath datatype ka basis par bhe comparsion hoo.

if (2 === "2") {
    console.log(`executed`);
}

const temperature = 41;
if (temperature < 50) { // --> yaha par hamra conditional check hota hai ke ya to "if statement" run ho ga ya to "else statement" run ho ge.
    console.log("less than 50");
}
else {
    console.log("temperature greater than 50");
}

console.log("Execute") // --> ye console.log() run hoga he hoga ku ke eska koi relation nhi hai "if-else conditional ke sath".


const score = 200;

// This is about scope and block level Element :
if (score > 100) {
    const power = "fly";
    // let ,const has  block level scope whereas var has global level scope.
    console.log(`User power : ${power}`);
}

// console.log(`User power : ${power}`); // --> this show error b/c power is not defined in global scope and power variable ka access sirf or sirf within it scope he possible hai. 


// Let see the shorthand notation of if statement :
const balance = 1000;
if (balance > 500) console.log("test");  // --> in this notation there is no need of curly bracket 

// Ab aisa nhi hai ke using short-hand notation humko single line mein he likh na padaa ga if statement hum cha hai to multiple line bhe likh skta hai asa nhi hai ke humm multiple line nhi likh skta in shorthand notation

// Let see how to write the multiple line in "if statement" using shorthand notation 
// const year = 2025;
// if (year > 2024) console.log(`you are safe from covid`), console.log(`But there is another problem of HMPV virus`); // --> but aisa likhna code ko ek bad practice mana jata hai.

// Now let see About nesting in if-else statement: 

// if-elseif statement : 
if (balance < 500) {
    console.log("less than 500");
}
else if (balance < 750) {
    console.log(`less than 750 and more than 500`);
}
else if (balance < 1000) {
    console.log(`balance is less than 1000 and more than 750`);
}
else {
    console.log("Balance is more than or equal to 1000");
}


const isUserLoggedIn = true;
const debitCard = true;
// We can also checked multiple conditions in single if statement :
if (isUserLoggedIn && debitCard) {
    console.log("Allow to buy courses")
}
else {
    console.log("User Not allowed to buy courses");
}

const loggedInfromEmail = true;
const loggedInfromGoogle = false;

if (loggedInfromEmail || loggedInfromGoogle) {  // --> yaha par es conditional statement ka matlab hai ke agar user en dono mein se keise sa bhe logging hoga to if statement execute kardo varna mat karo
    console.log("Allow to buy courses")
}
else {
    console.log("User Not allowed to buy courses");
}


// Now understand switch case : 

// Syntax for switch case :-
// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }


const month = 3;

switch (month) {
    case 1:
        console.log(`Jan`)
        break;
    case 2:
        console.log(`Feb`)
        break;
    case 3:
        console.log(`March`)
        break;
    case 4:
        console.log(`April`)
        break;
    case 5:
        console.log(`May`)
        break;
    case 6:
        console.log(`June`)
        break;

    default:
        console.log("Invalid Month!!")
        break;
}

// Agar aapke key string format mein hai to phir kaisa compare kara ga in switch case kuch nhi simple hai phir cases ko bhe hum string format mein he likh de ga -->  let see : 

const name = "sam"
switch (name) {
    case "aman":
        console.log(`Your name is ${name}`)
        break;
    case "kasanl":
        console.log(`Your name is ${name}`)
        break;
    case "singh":
        console.log(`Your name is ${name}`)
        break
    case "sam":
        console.log(`Your name is ${name}`)
        break
    case "karan":
        console.log(`Your name is ${name}`)
        break

    default:
        console.log(`You entered wrong name`)
        break;
}


const userEmail = "codeurge@mail.ai"
if (userEmail) { // --> yaha par string ke andar value present hai to hum na mann leya hai ke value true hai if statement will get executed but agar string empty hote to we consider it as an false value and now else statement get executed
    console.log(`You got the email`)
}
else {
    console.log(`Don't have user email`)
}


// Let see truesy value and falsy value :

// 1. falsy values :
// false, 0,-0,BigInt mein 0n also consider as falsy value , "",null, undefined,NaN

// and enn se hatt kar jitne bhe value hai they are consider as truesy value
// Some Special trusy values are :
// "0", 'false' , " " , [] , {} --> this is an empty object which is also a truesy value , function(){} --> this type of function is also comes under truesy value

// To check array is empty or not : 
// const myArr = [];
// if (myArr.length === 0) {
//     console.log(`Array is Empty`);
// }

// To check Object is empty or not : 
const emptyObj = {
    
} 
if (Object.keys(emptyObj).length === 0) {
    console.log(`Object is Empty`);
    
}
// Object.keys(emptyObj) this will return array so empty check karna ka leya eska badd humm na length property laga ee hai.

// Now Let see :
// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10;

val1 = null ?? 10
// remember one thing ke hamra database se always do value ate hai to kabhe kabhe kya hota hai ke hamra ek value null/undefined ate hai  and ek value kuch number ate hai to hum chata hai hamra variable mein null assigned na ho kuch value assigned ho then for that we use (??) operator b/c agar null/undefined value variable ko assign hoti hai to aga ja kar program mein problem ana ka chances rahta hai.

// val1 = undefined ?? 10
// or agr dono he value aa rhi hai database se to jo phale value hai vo meri variable mein assign ho jate hai


console.log(val1);


// terniary operator : basically ye operator if-else ka hamra likhna ka ek doosra or chota tarika hai.
// Syntax of trinary operator :
// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice>=80 ? console.log("more than 80") : console.log("less than 80")