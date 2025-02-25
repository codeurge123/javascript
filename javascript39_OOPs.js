// Javascript and classes :
// Ab important baat ye hai ke kya javascript mein classes hoti hai??


// Object :
// - collection of properties and methods.
// - toLowerCase

// Why use OOPs


// Parts of OOPs
// Object literal {

// }

// - Constructor function
// - Prototypes
// - Classes
// - Instances (new,this)


// 4 pillars of OOPs : 
// Abstraction
// Encapsulation
// Inheritance
// Polymorphism


// Now , Let's start OOPs: 

// Object literal : 
const user = {
    username: "yash",
    loginCount: 8,
    signedIn: true,
    // These all listed above are properties

    // Let's see function in object :
    getUserDetails: function() {
        // console.log("Got user details from database");

        // Note : 'this' keyword hamra current context ko refer karta hai.
        // console.log(`Username: ${this.username} `)

        console.log(this) // agar mein aisa 'this' keyword ka use karu ga to mera current context jo ke yaha par matlab user ke context se hai vo print ho jaya ga. 

    }
}


console.log(user.username)
// console.log(user.getUserDetails()) // Basically getUserDetails jo hai vo ek function hai to reference dena se kuch nhi hoga , aapko run karna hoga uskoo

console.log(`Value of this keyword in global context :`)
console.log(this)


// Let's talk about constructor function : 
// Basically jo hamra 'new' keyword hota hai ye hamra constructor function hai , Ab ye constructor function karta kya hai , ye aapko allow karta hai ke aap ek he object literal se multiple instances bana sako usi kaa.
// const date = new Date() --> here we uses constructor function for making another instance of date object.

function User(username,loginCount,isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    
    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
    }


    return this; // --> Agar hum retrun this nhi bhe kara ga to bhe values mila ge that means hamra by default return hota he hota hai.
}

const userOne = new User("hitseh",12,true)
const userTwo = new User("yash",13,false)
console.log(userOne.constructor) // Ab ye jo constructor property hai ye reference hoti hai khudi ke baraa mein
// console.log(userTwo)

// At last we knows that constructor function har barr ek naya instance humko deta hai
