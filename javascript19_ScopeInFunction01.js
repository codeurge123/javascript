// Scopes : 

// block ke bahar wala ko porition hota hai usa hum khata hai global scope and yaha par jo hum variable define karta hai they are called as global variable ad has global scope.


var c = 300 

if(true) {
    // These our's local variable which are having local scope means hum sirf or sirf en variables ko ess block ke andar access/use kar skta hai es block ka bahar they don't exist.
    let a = 10;
    const b = 20;
    // var c = 30;  -->  var type ko hum es leya he use nhi karta hai because it has a global scope matlab hum na esko local scope mein define kara hai fir bhe hum esko bhar access kar pa rha hai.
    var c = 30; // --> value of gloabal c get changed and this will not happen with let and const type.

}

// {} --> essi ko bolta hai scope

// console.log(a);
// console.log(b);
console.log(c);
