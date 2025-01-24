// Let's see the memory allocation in Javascript.
// Memory basically hamra pass 2 type ke hoti hai : 
// 1) stack memory
// 2) heap memory

// Note : Stack memory use hoti in case of primitive datatype. whereas Heap memory use hoti for non-primitive datatype.

// Stack(primitive), heap(non-primitive).

let myYoutubename = "yashbansal";

let anothername = myYoutubename;
anothername = "codeurge"


console.log(anothername);
console.log(myYoutubename);
// to basically ho kya rh hai ke anothername ko referance na ja kar myYoutubename ka usko copy ja rh hai to jab hum anothername mein change kar raha hai to hamra actual myYoutubename mein change nhi hoga vo copy mein change ho ga. and this is called "stack memory".

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;

// console.log(userTwo); --> this will print the data of user Two

// Object ke jitne bhe properties hoti hai vo aap .(dot)-value se access kar skta ho.
userTwo.email = "yash@google.com"

console.log(userOne.email);
console.log(userTwo.email);