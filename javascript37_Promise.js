// What is Promise ?
// Promise ka simple sa matlab hai ke jo bhe aap ne usko task deya hai vo abhe ke abhe queue mein lag ke complete nhi hoga matlab queue mein vo task lag to gaya hai but abhe vo imdetially complete nhi hoga.

// Note : Promises ka 3(three) states hota hai
// Note : Remember one thing ke 'promises' future mein jakar complete hota hai


// Note : promise ko consume karna se phala aapko sikh na hoga ke promises ko banya kaisa jata hai 


// Basically agar aapko 'javascript' mein object ka ek or instance chiya to vo aap "new" keyword ke through generate kar skta ho like this :



// Note : Promise mein hum function call back detaa hai


// Let's create the Promises: 
const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls , cryptography , network
    setTimeout(() => {
        console.log("Async task is complete")
        // basically aap ne resolve and then ko connect he nhi kara that's why promise pura nhi hua.
        // Now , let see how to connect resolve and then :
        resolve();
    }, 1000);
})


// Ab promise create to ho gaya hai but esko consume bhe to karna hoga. 
promiseOne.then(function () {
    console.log("Promise Consumed")
})
// Note: '.then()' ka sidha connection hai aapka 'resolve' ke sath.




// Another Promise : 
new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Async task 2")
        resolve();
    }, 1000);
}).then(function () {
    console.log("Async two resolved");
})


// Another Promise :
const PromiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({ username: "Chai", email: "chai@example.com" }) // basically resolve mein aap ko jayda tarr as a parameter object he pass hota hua dekha ga   
    }, 1000);
})

PromiseThree.then(function (user) {
    console.log(user)
})

// Remember one thing ke .then() method ka jo function hai usii ke andar sari values return hoti hai



// 



// Fourth Promise :
const Promisefour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "yash", password: "123" })
        }
        else {
            reject('Error: Something went wrong')
        }
    }, 1000)
})

Promisefour.then((user) => {
    console.log(user);
    return user.username
}).then((myusername) => {
    console.log(myusername)
}).catch(function (error) {
    console.log(error)
}).finally(()=> {
    console.log("The Promise is either resolved or rejected")    
})


// finally() method always execute hoga he hoga and ya mostly humm use karta hai pata lagna ke leya ke jo kaam hona tha vo hogya bai naa.



// Note : Ek chij yaad rakh lo ke kabhe bhe value jo "then method" se return ho ge vo variable mein nhi store hoge. what i want to say understand below by an example:
// const yash = Promisefour.then((user) => {
//     console.log(user);
//     return user.username
// })


// Fifth Promise : 
const PromiseFive = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true;
        if(!error) {
            resolve({username:"javascript", password: "132"})
        }
        else {
            reject("Error : JS went wrong")
        }
    }, 1000);
});

// Let's see another syntax of accepting Promise : 
// async function consumePromiseFive() {
//     const response = await PromiseFive
//     console.log(response)
// }  --> yaha par hum ye bol raha hai ke promise jab bhe resolve hoga uss se kuch na kuch value ayaa ge he ayaa ge --> that why in case of error humra error aa ja rah tha . So, Now how to handle it let see :
async function consumePromiseFive() {
    try{
        const response = await PromiseFive
        console.log(response)
    }
    catch(error) {
        console.log(error)
    }
}

consumePromiseFive()



// Let's see Humm aga jakar kaisa fetch kara ga url ko and us se kaisa data extract kara ga : 
// async function getAllUsers() {
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json(); // yaha par await keyword es leya use keya hai because hamra string se json format mein convert karna mein bhe time lagta hai.
//         console.log(data);
//     }
//     catch(error) {
//         console.log('E : ', error)
//     }
// }

// getAllUsers();


// Ab yhi same upar wala kaam hum kaisa kara ga using .then and .catch method ke through let see : 
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))




