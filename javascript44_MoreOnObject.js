// More on Object : 

// Math-Pi : 

// Basically ye Object.getOwnPropertyDescriptor() aapko object ke kuch hidden chijo ke bara mein bata hai. 
// Let say aapko object ke kese property ke bara mein jaan na hai in depth to vo aap jann skta ho by using "Object.getOwnPropertyDescriptor()" in which in paranthesis we have to gave property name and after that uss property ke kess 'key' ke baraa mein jann na hai.
const descripter = Object.getOwnPropertyDescriptor(Math,"PI");

console.log(descripter)



// console.log(Math.PI)
// Math.PI = 234;
// console.log(Math.PI);
// --> from this we understand that we can not change the value of Math.PI because it's interally encoded with writable as false.



// Many Ways to create Object : 
// const myObject = Object.create(null) // --> basically kuch ess tarika se bhe humm object creation kr skta hai.


const chai = {
    name: "ginger chai",
    price: "250",
    isAvailable: true,

    orderChai: function() {
        console.log('chai nhi bani')
    }

}

console.log(chai)
// Ab saval ata hai ke kya ess object ke bhe kuch descripter properties hai and agar hai to bato ke unnn properies ko mein kaisa set kar skta hu

// First, Lets see ke ess 'chai' object ke bhe kuch descripter proeprties hai ya nhi :
console.log(Object.getOwnPropertyDescriptor(chai , "name"))


// Ab basically object ke andar aap kya kar skta hai ke aap apni propeties ko define bhe kar skta hai
// Let see : 
Object.defineProperty(chai, 'name' , {
    // writable: false,
    enumerable: false
});

console.log(Object.getOwnPropertyDescriptor(chai,'name'))


// This is how we iterate object using (for-of loop) : 
for (const [key,value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`) 
    }
}
// And ess for loop ke result mein "name" print es leya nhi hua hai because hum na "name" property ka leya enumerable: "false" kar rakha hai humm na 
// enumerable means humm usss object ke property ke upar "iterate nhi" kara ga jis-jis object properties ka "enumerable false hai".






