const coding = ["js", "ruby", "java", "python", "cpp"];

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item; // --> forEach loop mein return likh na ke badd bhe ye loop kuch bhe return nhi kar rah hai, ess sa humko samj mein ata hai ke forEach Loop kuch bhe value return nhi karta. But agar hum chata hai ke hamra loop value return kara to vo hum kasa kara skta hai --> vo hum kara skta hai using filter() method
// } )

// console.log(values);

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Ab jasa hamra pass "forEach" tha vasa he hamra pass ek "filter" method/operation bhe hota hai
// let myNumber = myNum.filter( (num) => {
//     if(num > 4) {
//         return num;
//     }
// } )

// Another way of Using arrow function in filter operation : 
// let myNumber = myNum.filter( (num) => (num > 4) );
// consolelog(myNumber);


// Agar yhi same kaam humko karna hai using "forEach" Loop to vo kasa kar skta hai: 
let MyNumbers = [];

myNum.forEach((num) => {
    if (num > 4) {
        MyNumbers.push(num);
    }
})

console.log(`Printing Array Using ForEach Loop : `);

console.log(MyNumbers);

// Conclusion : Hamra conclusion ya hai ke using "filter" operation hum return bhe kar skta hai apne values ko but "forEach" operation ka use karke humm apni values ko return nhi kara skta.

// Now , Understand more about "filter" operation :  

const book = [
    {
        title: "Book one", genre: "Friction", publish: 1981, edition: 2004
    },
    {
        title: "Book two", genre: "Non-Friction", publish: 1992, edition: 2008
    },
    {
        title: "Book three", genre: "Friction", publish: 1999, edition: 2010
    },
    {
        title: "Book four", genre: "History", publish: 2001, edition: 2011
    },
    {
        title: "Book five", genre: "Non-Friction", publish: 2004, edition: 2015
    },
    {
        title: "Book six", genre: "Science", publish: 2003, edition: 2010
    },
    {
        title: "Book seven", genre: "History", publish: 1987, edition: 2010
    },
    {
        title: "Book eight", genre: "Science", publish: 2001, edition: 2018
    },
    {
        title: "Book nine", genre: "Friction", publish: 2011, edition: 2020
    }
];

let userBook = book.filter((bk) => {
    if (bk.genre === "History") {
        return bk
    }
}) // --> Basically es statement se hum bol na cha rah hai ke jin bhe book ka genre History hai unko mujhe return kar do.

// console.log(userBook)


userBook = book.filter((bk) => {
    if (bk.publish >= 2000 && bk.genre === "History") {
        return bk;
    }
}); // --> yaha par hum na userBook ko overwrite kar deya hai

console.log(userBook)

// This is how hum filter operation ka use kar skta hai filter lagna mein



// Now Undertand about "map" operation
const MyNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map operation bhe filter operation ke taraha he hota hai matlab ye bhe value ko return kar skta hai. 
// const newNum = MyNumers.map((num) => {
//     return num + 10;
// })

const newNums = MyNumers.map((num) => {
    return num * 10
}).map((num) => num + 1).filter((num) => (num >= 40)) // --> This is called chainng.

// What is chainng ? 
// Basically using this technique hum doo-teen method directly use kar skta hai in same variable. Basically chaining mein hota kya hai ke jo bhe first operation se result aya ga vo pass on ho jaya ga in second operation and so on chalta rah ga jab tak sara operation execute nhi ho jata.

console.log(newNums);


// Let's understand about reduce Operation : 


const myNumber = [1, 2, 3]

// This is the syntax of "reduce" operation and this is how we uses reduce operation.
// const myTotal = myNumber.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval : ${currval}`)
//     return acc + currval
// }, 0)
// -->  Now Implement the reduce operation using arrow function :
const myTotal = myNumber.reduce((acc, currval) => {
    // console.log(`acc : ${acc} and currval : ${currval}`)
    return acc + currval;
}, 0);

// console.log(myTotal)


// Let's takes an another example of reduce operation/function 
const shoppingCart = [
    {
        coursename: "js course",
        price: 2999
    },
    {
        coursename: "py course",
        price: 999
    },
    {
        coursename: "mobile dev course",
        price: 5999
    },
    {
        coursename: "data science course",
        price: 12999
    },
]

const totalprice = shoppingCart.reduce((acc, obj) => {
    return acc + obj.price;
},0)

console.log(`Total courses price : ${totalprice}`)