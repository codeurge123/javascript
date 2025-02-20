// Let's Understand about arrow function and this keyword:

// What is THIS keyword?
// Basically arrow function samj ne ke leya "this keyword" ko samj na padha gaa humko accha see and "this keyword" samj ne ke leya humko vapas object par jana hoga.


// --> Basically "this keyword" kya karta hai current context ke bara mein bata hai

const user = {
    username: "yashbansal",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`)
        // Basically jab hum current context ko access kar rah hota hai then we use "this" keyword.
        // "This" keyword current context ko refer karta hai.

        console.log(this); // --> This is done to check ke "this keyword" karta kya hai, matlab kya deta hai humko.
    }
}

// console.log(user.username)

// user.welcomeMessage() // --> ye mera ek method hai that's why aisa karka likha hai.
// user.username = "sam"; // --> yaha par hum ne context change kar deya context ka simple matlab hai values.

// user.welcomeMessage();  // --> yaha par ab "sam" print hoga b/c hum ne bola hai ke jo bhe current context hai uska andar jo username ke value hai usko access karo.

// console.log(this) // --> Now in this case  current context is empty.
// Note : but agar yhi same chij aap browser mein karta hai then window as a current context print ho jaya ga b/c browser mein js ek engine par work karti hai and browser mein global context hota hai harma window varible that why console.log(this) karna par in browser vo print ho jata hai.



// Note :  Basically "THIS KEYWORD" current context ke baat karta hai ke currently mera context kya hai and uss current context mein mera username ke value kya hai --> ye deta hai "this" keyword.



// Now let's start studying arrow function : 

// function chai() {
//     let username = "yash";
//     console.log(this.username) --> function ke andar mein this keyword ko use nhi kar pa rh hu --> it return undefined.
//     console.log(this); // --> Jab aap this ko kise fucntion ke andar print karta hai then hamra pass bhot sari values ati hai.
// }

// We noticed one thing that mein sirf aisa "this" ko object ke andar he use kar pa rh hu function ke andar usko use nhi kar pa rah

// chai();

const chai = function() {
    let username = "yash";
    console.log(this.username) // --> ya pa bhe mein this keyword ko use nhi kar pa rh hu current context ke leya
}

chai();

// Arrow Function : 

// Syntax of arrow function : 
const code = () => {
    let username = "yash";
    console.log(this.username); // --> yaha par bhe mera "this keyword" ko mein use nhi kar pa rh hu current context ke leya

    console.log(this) // --> arrow function mein there is no current context so print --> {}
}

code();


// Basic syntax of arrow function :
// () => {

// }
// Aap arrow function ko ek variable ke andar bhe define/hold kar skta hai
const addTwo = (num1,num2) => {
    return num1+num2;
} // --> agar arrow function ko curle bracket mein wrp kara to return keyword likh padha ga
// And it is called as explicit return

// Ek dosra tarika bhe hota hai arrow function ko likh ne ka.
const addNumber = (number1,number2) => number1+number2
const addNumber1 = (number1,number2) => (number1+number2) // --> or agar arrow fucntion ko en parnthesis mein wrap kara to return keyword nhi likh na padha ga
// And it is called asa implicit return

console.log(`The sum of two number is :  ${addTwo(3,4)}`);
console.log(`The sum of two number is :  ${addNumber(4,4)}`);
console.log(`The sum of two number is :  ${addNumber1(23,4)}`);


const addTwoNumber = (num1,num2) => ({username: "yashbansal"}) // --> yaha par hamra object {} nhi return ho ga --> object ko return karna ke leya usko pranthesis ({}) mein wrap karna he ho ga.

console.log(addTwoNumber(3,4));