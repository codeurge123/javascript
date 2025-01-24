// Immediately Invoked Function Experssions (IIFE)

// Basically kabhe kabhe aap ko aisa chiya hota hai ke jasa he aap ne function likha to usko immediately access karna hota hai --> to function ko immediately access karna ka to bhot sara tarika ho skta hai and huma aisa ku function chiya jo immediately execute ho jaya -> Let understand these all thing :


// To access function immdeatily as we write it use iife that means function ko pranthesis mein wrap kar de jiya and us ka badd ek or pranthesis laga de jiya. basically ye sab karna se aapka function immediately invoke ho jaya ga as we define it.
(function chai() {
    // --> ye jo function hai ye actually mein named "IIFE" hai
    console.log(`DB connected`);
})(); // --> remember one thing ke "iife" ko end karna ke leya always use ";" varna aga ka code execute nhi ho ga.
// chai();

// () --> eska andar humm function defination deta hai and () --> es pranthesis sa hamra function execcution hota hai. and basically ()() is the syntax of using iife 

// Why to use iife?
// 1. to immediately invoked the function expression 
// 2. to prevent your function from global variable/pollution basically iife sa hamra global variable uss function ke leya hatt/remove ho jata hai


// Ab es function ko hum arrow function ke tarah bhe likh skta tha
( (name) =>  {
    console.log(`DB CONNECTED TWO ${name}`);
})("yashbansal")