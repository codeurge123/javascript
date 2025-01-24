// Object in JavaScript :

// Basically object ko declare karna ke there are 2 ways :
// 1. ek hai literals ke tarah 
// 2. ek hai constructor ke tarah

// Note : jab bhe hum object ko literal ke tarah declare karta hai then signleton nhi banta hai but agar hum object ko constructor ke tarah se declare karta hai then singleton bana ga.

// Object Literals: - ye object ko declare karna ka tarika hai

const JsUser = {
    name: "yashbansal",
    "full name": "code_urge aka yashbansal", // --> basically jab aap kuch asa key deta hai then chance he nhi hai ke aap esko dot se access kar paya es liya we mostly use JsUser["email"] wala method to access Object elements.
    age: 21,
    location: "Jaipur",
    Email: "yashbansal@google.com",
    isLoggedIn: false,
    lastLogindays: ["Monday","Saturday"]
}

// Remember Object mein keys and values ka chakar hota hai.
// And aap Object mein key ke corresponding koi bhe value de skta hai -> aap chahai to array bhe de skta hai, object bhe de skta hai as a value key ke corresponding totaly aap ke choice hai.

// How to access Object values through key's.
console.log(JsUser["age"]); // --> yaha par hum ko key ko string ke form mein dena hoga b/c bheind the sence key hamri string ke form mein he hoti hai. 
console.log(JsUser.Email);

// console.log(JsUser."full name");  --> This will show error becasuse we can't access this key like this, the only way to access the value corresponding to this key is 
console.log(JsUser["full name"]);


// Basically ek question bhot jayada pucha jata hai ke symbol bano and usko as a symbol add kardo object mein
const mySym = Symbol('key1'); // --> This is the syntax to create/declare a Symbol

const JsUser1 = {
    name: "yashbansal",
    [mySym]: "mykey1",
    age: 21,
    location: "Jaipur",
    Email: "yashbansal@google.com",
    isLoggedIn: false,
    lastLogindays: ["Monday","Saturday"]
}

// // console.log(JsUser1.mySym); --> Here we notice a thing that symbol ke value change to hue hai but humm na symbol ko as a object add nhi kara hai ye add hua hai as a symbol datatype.

// // --> To symbol ko add karna as a object datatype we have to follow the particular syntax .
// console.log(JsUser1[mySym]);
// console.log(typeof [mySym]);



// Let's see how to change the value of Object :
JsUser.Email = "yash@chatgpt.com";
// console.log(JsUser["Email"]);

// Aap Object ke values ko lock bhe kar skta hai , So that no one can change it's value

// Object.freeze(JsUser);  // --> This statement means lock the value of object JsUser so that no can overwrite the key values in this Object and agar koi overwrite karna ke koshish bhe kara ga then value don't get changed.

JsUser.Email = "yash@microsoft.com"; // --> As object freeze/lock hai to object value mein kuch bhe changes propagate nhi hoga. vo vasa ke vase raha ge

// console.log(JsUser) // --> We saw the value of email not get changed after locking/freezing the object.


// Aap chahai to JsUser object mein function bhe add kar skta hai and note one thing javascript mein function ko aap variable ke tarah use/treat kar skta hai.

JsUser.greeting = function() {
    console.log("Hello Js User");
}


console.log(JsUser.greeting()); // --> This is how we can add function to an object.

console.log(JsUser.greeting); // --> Aisa likh ne se function ka referance aa jaya ga function execute nhi hua hai uska referance ayaa gaa.

JsUser.greetingtwo = function() {
    console.log(`Hello Js User, ${this.name}`) // --> Ab yaha par kya hai ke jab bhe aapko same object ko referance karna hai then aap yaha par likh skta hai "this"
}

console.log(JsUser.greetingtwo());