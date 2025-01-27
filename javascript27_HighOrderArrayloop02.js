// Let's Understand about for-each loop :
const coding = ["js", "ruby", "java", "python", "cpp"]

// kuch loops arrays ke andar directly properties mein add kar deya jata hai -> for example "forEach" loop.

coding.forEach(function (item) {
    // console.log(item); // --> this is the syntax of writing a forEach loop
})

// In forEach Loop hum pranthesis ke andar deta hai function and as we know hum function call back mein function name nhi likh ta hai to eska andar bhe nhi likha ga and then jo kaam karna hai vo likh do in this function.

// And remember one thing ke forEach loop etna smart hota hai ke vo array ke elements ko khud se iterate karke la kar de deta hai.



// Let's Implement forEach loop using arrow function: 
coding.forEach( (val) => {
    // console.log(val)
} )

function printMe(item) {
    // console.log(item)
}

// coding.forEach(printMe); // --> yaha par hum function ko execute nhi karta hai bulki uska reference deta hai.



// forEach loop hamsha item lekar ata hai aisa nhi hai eska pass or bhe parameter hota hai -> Let see: 
// coding.forEach( (item,index,arr)=> {
//     console.log(item,index,arr)
// })   // --> Naam kuch bhe rakh skta hai parameters ka bass ye yaad rakhna ke at 1st par jo likho ga vo value de ga array ke , at second par jo likho ga vo index dega array and at 3rd par jo likho ga vo pura ka pura array dega.


const myCoding = [
    {
        languagename: "javascript",
        languagefile : "js"
    },
    {
        languagename: "java",
        languagefile : "java"
    },
    {
        languagename: "python",
        languagefile : "py"
    }
]  // --> ess tarika kaa array ke upar iteration sikh na bhot important hai b/c database se jo bhe value ate hai vo array mein ate hai and har ek value ek object hoti hai.

myCoding.forEach((item) => {
    console.log(item.languagename)
})
