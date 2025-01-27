// Let study about some more loops in this lecture:


// Basically es lecture mein jo humm loops padh ne ja rh hai ye sara loop thoda array specific loops hai.
// (for of) Loop :

// Syntax of (for of) Loop :
// for (const element of object) { --> yaha par object sa matlab hmra kaval or kaval "object" se nhi hai bulki yaha object se hmra matlab hai ke kise chij ke upar loop lagna hai. 

// }

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(`Value of num is : ${num}`);
} // --> ye hai hamra "for of" loop.

// Basically aap cha hai to "string" ke upar bhe loop laga skta hai , aap cha hai to "object" ye "array" ka upar bhe loop laga skta hai.

// Another loop : 
const greeting = "Hello World!"
for (const greet of greeting) {
    console.log(`Each character of the string is: ${greet}`)
}
// ess loop mein humko imcrement, initialize and condition likh ne ke koi need nhi padhte hai.

// There is also another datatype in Javascript that is "map"
// Maps : In javascript "map" kya hai ek object hai jo hold karta hai key-value pairs 

const map = new Map() // --> ye mein na map name se ek object bana leya hai that can hold key-value pairs in it.

map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "France")
// console.log(map)


// Note : Map ke andar values unique hote hai and jis order mein store kari hai values usi order mein store rahti hai in maps.

// Let's apply loop on map :
// for (const key of map) {
//     console.log(key)
// } --> Jab hum aisa print karna ke khoshih karta hai map mein then  mera array ke form mein key-value pairs print hota hai to ab individually kasa print kara map mein key-values pairs let's see: 

// This is the syntax to print key-value pair in map individually
for (const [key,value] of map) {
    // console.log(`${key} :- ${value}`);
}

// Let's implement "for of" loop on an Object: 
const myObj = {
    'game1': "NFS",
    'game2': "Spiderman"
}

// for (const [key,value] of myObj) {
//     console.log(`${key} :- ${value}`);
// } --> This type of "for of" loop syntax doesn't work for iterating object .

// Basically object ke bhe iterate karna ka tarika hota hai vo humm aga chal kar dekha ga.

const obj = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: "swift by apple"
}

// Object pa bhe to humko loop lagna hai , ye kha lo ke object ko bhe to iterate kar na hai to vo hum karta hai using "forin" loop.

// for (const key in obj) {
//    console.log(key)
// } --> ess "for-in" loop chalna se to sari ke sari keys aa jaya ge hamri object ke but ab key se thodi na kaam chala ga humko key ke sath sath values bhe chiya 

// So for printing object (key , value) both using "for in" loop do :
console.log(`Printing Object Key-values :`)
for (const key in obj) {
    // console.log(`${key} :- ${obj[key]}`)
}

// iterating array using for-in loop : 
const language = ["cpp","java","python","javascript","HTML"]
for (const key in language) {
    // console.log(key) //--> by doing this array ke sirf or sirf key print hoge for printing key and value both of an array write like this

    // console.log(`${key} :- ${language[key]}`);

    // for only printing array values : 
    // console.log(language[key]);
}


// kya humm map ko "for-in" loop ke through iterate kar skta hai -> the answer of this question is "No" b/c map hamra iteratable nhi hota hai so we can't iterate into map using "for-in" loop : 
// for (const key in map) {
//     console.log(key); --> nothing get print as map is not iterable.
// }