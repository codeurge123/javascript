// Control Flow in JavaScript : 

// Firstly , let's understand about if statement :

// Syntax of "if" statement:-
// if (condition) {

// }

const isUserLoggedIn = true;
if (isUserLoggedIn) {
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

console.log("Exectue") // --> ye console.log(s) run hoga he hoga ku ke eska koi relation nhi hai "if conditional ke sath".