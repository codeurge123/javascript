const score = 400;
// yaha par javascript automatically detect karle ga esko as a number datatype.

// but aap cha hai to aap explicitly bhe define kar skta hai ke mujhe to number he datatype chiya
console.log(score);

const balance = new Number(100);
console.log(balance);
// bass aap ne upar wala and ye wala number type mein ye difference paya ke upar wala mein console.log() karna par sird number print hua but es wala ko console.log() karna par special mention hua hai ke ye mera ek Number hai and them number print hua hai.

// Let se Some method related to Number datatype: 
console.log(balance.toString()); // -> number ye 100 he hai but eska typeof change ho gaya hai and ab jab ye string bann he gaya hai then humm ab string ke sara method yaha par laga skta hai.
console.log(balance.toString().length)


// toFixed method : 
console.log(balance.toFixed(2));
// yaha par ye 2 ka matlab hai ke mujhe number mein sirf 2 decimal places chiya
// ye hum mostly use karta hai when hum ko user ko website mein payment dikha ne hoti b/c payement *,+ hokar uski precision value kuch jayada he badd jati hai to hum usko fixed decimal place tak kar skta hai

// toPrecision method : 
const otherNumber = 23.9385
console.log(otherNumber.toPrecision(3));
// ya method se hota kya hai ke hum precise jo value de hai us par focus karta hai and round-off karta hai badd ke value ko if possible.


const hunderds = 1000000;
console.log(hunderds.toLocaleString('en-IN'));
// Basically kaafi bar hum ko aisa badd number padh na mein problem ate hai webpage par to ye problem ko humm shi kar skta hai by using "toLocaleString() method" that separate the number by commas eventually which makes number readable.

// Javascript mein hum min and max value bhe access kar skta hai.
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)


// ++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++
// Maths jo library hai vo javascript ke sath ate hai by default.
console.log(Math); // --> Maths jo hai vo ek tarika sa object hai and it has many methods


console.log(Math.abs(-24));
console.log(Math.round(4.3));
console.log(Math.round(4.6));

// agar 4 se ketna bhe jayda ho mein top value he choose karu ga. 
console.log(Math.ceil(4.2));

console.log(Math.floor(4.8))  // --> agar 4 ke line mein hai to decimal ke badd kuch bhe likh do 4 he o/p mein mila ga.

console.log(Math.pow(2,4));

// ek hota hai Math.min() -> agar hum ko find out karna hai ke array mein min. value konse hai then we use Math.min()
console.log(Math.min(4,3,6,8,1));
console.log(Math.max(4,3,6,8,1));


// Ab ek bhot important method hota hai Math library ka that is "Math.random()"
console.log(Math.random());

// Let say mujhe dice ke leya value chiya from 1 to 6 but ye random method to 0 se 1 ka becch ke value deta hai -> so to solve this problem so that math.random() se value 1 se mila we do (Math.random()*10)+1
console.log((Math.random()*10) + 1);

// use math.floor to remove decimal places.
console.log(Math.floor((Math.random()*10) + 1));

const min = 1;
const max = 6;

console.log(Math.floor(Math.random() * (max - min +1)) + min);
// basically yaha pr hum ne method create kar deya hai jo ke mujhe random value dega between 1 to 6 and --> 1 to 6 se leya hum ne khud ke range define ke hai by making varible const min and const max