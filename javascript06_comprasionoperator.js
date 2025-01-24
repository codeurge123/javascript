// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);
// Basically all the comprasion listed above are very simple type of comparsion and there result is either true or false.

// Some other Comprasion :
// Basically Comprasion mein problem ate hai jab aap different datatype ko compare kar raha hota hai
console.log("2" > 1);
console.log("02" > 1);
console.log("Null & number comprasion : ");
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
// In null and number comprasion we have noticed that at null >0 the result came "false"  at null == 0 also the result came "false" and at null >= 0 the result came "true" . So,what is logic behind this all .
// The main reason is that an equality check == and comprasion > >= < <= work differently in javascript. Comprassion convert null to a number ,treating it as 0 That is why (3) null >= 0 is true and (1) null > 0 is false


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
// when we convert undefined into a number then it become NaN(Not a Number)

// Let learn about '===' operator :

console.log("2" === 2)
// Basically this comprasion operator check the value and datatype both and on the basis of this give result as true/false.