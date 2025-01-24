// Object Declaration Using Literals method : 
// const User = {}

// Object Declaration Using Constructor method : 
// const tinderUser = new Object();

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "yash";
tinderUser.isLoggedIn = false;
// Humm cha hai to es tarika se bhe object ka declaration kar skta hai.


// console.log(tinderUser) 

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "yash",
            lastname: "bansal"
        }
    }
}

console.log(regularUser.fullname.userfullname.lastname) // --> To ess tarika se humm element access kar skta hai of Object jab hamra object ke andar object hoo.


// Now let see how to combine Objects : 
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "x" };

// const obj3 = {obj1,obj2}; --> Agar hum es tarika se object ko combined karta hai then vahi same problem aiya ge ke hamra object ke andar object aa jaya ga.
// console.log(obj3)

// So, how to combine Objects : 
const obj3 = Object.assign({}, obj1, obj2, obj4); // --> to using this syntax we can combine multiple objects into a single object
// {} --> ye jo hai yaha par humra act kar rah hai as an target object and baaki source object hai and get combine into target object.
console.log(obj3);





// Mostly jo method hum use kara ga to combine/merge multiple object is 
// Spread Method :
const obj = {...obj1,...obj2};
console.log(obj)


const users = [    
    {
        id: 1,
        email: "soman@google.com"
    },
    {
        id: 1,
        email: "soman@google.com"
    },
    {
        id: 1,
        email: "soman@google.com"
    },
]


// abb apka pass kuch es tarika se data de rakha hai and apko first object ke id access karni hai then kasa kara ga : 
// console.log(users[0].id)

console.log(tinderUser);

// Ab basically hum ko chiya ke humko object ke sari keys de do
console.log(Object.keys(tinderUser)); // --> this will return an array of object keys
console.log(Object.values(tinderUser)); // --> this will return an array of object values
console.log(Object.entries(tinderUser)); // --> this will return the array of array of key-value pairs


// Humm Object mein check bhe kar skta hai ke particular property Object mein exist karte hai ya nhi 
console.log(tinderUser.hasOwnProperty('isLoggedIn')); //--> agar that property exist then it will return  true varna return false.