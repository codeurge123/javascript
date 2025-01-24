// *******************Operations********************
// Ab humm ne conversion to sikh leya hai now let see Operations :

let value = 3;
let negativeValue = -value; // --> basically ye likh ne se negativeValue variable ke andar -3 assign ho jaya ga that is the negative of variable value.
console.log(negativeValue)

console.log("Some Operation :")
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3); // -> it means 2 raise to the power 3.
console.log(2/3);
console.log(2%3);


let str1 = "hello"
let str2 = "yash"

let str3 = str1+str2;
// Simple hai ke str1 + str2 karna se meri string 1 and string 2 add hokar string 3 mein store/assign ho jaya ge.
console.log(str3);


// Let's See some other operation : 
// console.log(1 + "2"); // --> In this 2 string mein hai and 1 number mein to javascript esko as a string add kar de ge that means output ayaa ga -> 12 
// console.log("1" + 2); // --> Same here 
// console.log("1" + 2 + 2); // --> In this 122 print hoga because sara conversion string mein ho gaya hai
// console.log(1 + 2 + "2"); // --> In this 32 print hoga b/c phala 1 and 2 addho gaya and then it result get added with other in string format

// Note : To basically asa messy code na likha if aap ko add he karne hai chija then use pranthesis.
// console.log( ( ( 3+4 ) * 5 ) % 3);

console.log(+true); // --> yaha par + karna se basically humm boolen ka converion number mein kar rah hai and we know that in number datatype "true" is "1".

// console.log(true+); --> This give error as it is a wrong syntax.

console.log(+"");
// We know thata "" string means false and we are converting this into number . so at o/p we get 0.


// Assigement Operator : 

// We can also declare and initialize variables like this : 
let num1,num2,num3;

num1 = num2 = num3 = 2+2;
// console.log(num3);

let gameChanger = 100;
// gameChanger++; -->  This is post-incremenet operator
++gameChanger; // --> This is pre-increment operator
console.log(gameChanger);
