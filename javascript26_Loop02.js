// In this we are going to study about while & do-while loop : 

// While Loop : 
let index = 0;
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index++;
}
// This is the syntax and basic's of while loop. and flow same he hai loop ke phala initialize karo then uska badd condition check karo and after that increment karo value of index varna infinite loop chal jya ga.

// Implement another While loop : 
let myArr = ["flash", "superman", "batman", "spiderman", "Thor", "iornman"];
let i = 0;
while (i < myArr.length) {
    console.log(`My Hero at index ${i + 1} is ${myArr[i]}`);
    i++;
}

// Do-While loop : 

let score = 11;

do {
    console.log(`Score is ${score}`)
    score++;
} while (score <= 10);
// Rememebr one thing ke do-while loop mein kaam phala hota hai and condition badd mein check hoti hai.
// That means do-while loop at least 1 baar to execute hoga he hoga.
