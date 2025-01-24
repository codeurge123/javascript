// In Today class we are going to talk about functions in Javascript. 

// Function ka matlab kuch nhi bass aap esko ek packages ke tarah samj le that conatin some line of code and jaha jaha ye package aap lagya ga vaha vaha hamra code execute ho jaya ga.


// Syntax of Function : 
// function functionname() {
// code
// }


function myName() {
    console.log("y");
    console.log("a");
    console.log("s");
    console.log("h");
} // --> This is my basic defination of function.

// myName // --> ye hai mera function ka referance 
// myName() // --> ye hai mera function execution --> matlab humm jab kuch es tarika se likha ga tabhe hamra function call ho ga


// Let's write down the function that will add up two numbers :
// function addTwoNumber(number1, number2) {
//     console.log(number1 + number2)
// }

function addTwoNumber(number1,number2) {
    let result = number1 + number2;
    return result; // --> Now this function return some value and we can store it into another variable.
    // console.log("yash"); --> function ke anadar return ka badd ka koi bhe statement execute nhi hoga.
}


// addTwoNumber(3,4); --> if we write like this will call function in javascript that add these two number and print them
// Ess mein addTwoNumber(3,4) jo number likha hua hai unhai bolta hai humm arguement.


addTwoNumber(3,"4"); // --> This will give 34 b/c javascript considering both the arugement as string so in string format [3 + 4 => 34]

// Basically javascript mein function ke result ko variable ke andar bhe store kar skta hu
const result = addTwoNumber(3,5);

// console.log("Result: ", result); 
// --> ye harma javascript ke andar syntax hota hai string and varible ko eksath print karna ka


function loginUserMessage(username) {
    if(!username) {
        console.log("Please Logged In");
        return
    }
    else {
    return `${username} just logged in`
    }
}
// This is about function and if-else condition in javascript 
// And remember one thing ke "return statement" ka badd ke koi statement execute nhi hoti hai.

let username = loginUserMessage("yashbansal")
console.log(username);

// Note : Aap cha hai to aap function ke andar default parameter/arrguement bhe dee skta hai.


// yaha par mein na default parameter de deya hai which means agar mein koi bhe value pass nhi karu ga as an arrguement then function take it default value as paramter/arrugement.
function loginUserMessage1(username = "samm") {
    if(!username) {
        console.log("Please Logged In");
        return
    }
    else {
    return `${username} just logged in`
    }
}

let anothername = loginUserMessage1();
console.log(anothername);