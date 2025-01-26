// Let's Undearstand about Loops :
// Sab se phala and basic loop hota hai "for loop" :

// Syntax of for loop :-
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

// Basic Loop :
// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     console.log(element);   
// }

// jasa he aap ne for keyword lagya to sab se phala apka index initization hota hai then uska badd condition check hoti hai and it condition satisfy then loop content execute hota hai and after that updation hota hai in "index" value then vapas se condition check hote hai and this process repeats till condition satisfied.

// remember one thing ke index ke jaha humm kuch or bhe naam rakh skta hai.

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        console.log(`5 is best number`);
    }
    console.log(element);
}


// Nesting of Loop : 
// Now printing the table using Nested Loop :-
for (let i = 1; i <= 10; i++) {
    console.log(`Outer Loop : ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`); // --> "i" ko yaha par esliya access kar pa rh hai b/c "i" eska scope mein he lie kar rh hai
    }
} // --> This is how Nested Loop works.


// Now apply loop on Array : 
let myArr = ["flash", "superman", "batman"];
console.log(`Array length : ${myArr.length}`);
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);

}

// Break Keyword :
// for (let index = 1 ; index <= 20 ; index++) {
//     const element = index;
//     if (element == 5) {
//         console.log("Detected 5")
//         break // --> this break keyword is used to exit the loop as element value become equal to 5.
//     }

//     console.log(`Value of index is : ${index}`);
    
// }


// Continue Keyword :
for (let index = 1 ; index <= 20 ; index++) {
    const element = index;
    if (element == 5) {
        console.log("Detected 5")
        continue // --> this continue keyword is used to skip the loop as element value become equal to 5.
    }

    console.log(`Value of index is : ${index}`);
    
}