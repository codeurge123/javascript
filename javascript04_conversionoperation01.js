let score = "33";

// Ab ye hum ne ek variable define kar leya jiska mujhe type pata karna hai b/c hum to backend par work kar rh hai and aapko jisne frontend se value send kari hai ho skta hai ke ye value string ke andar ho to vo hum pata kar leta hai using "typeof".

console.log(typeof score);
// another way of printing datatype of a variable is : 
console.log(typeof(score));

// ab suppose karo ke aapke pass string mein value aye hai and aapko pata hai ke aapko 100% jo operation perform karna hai vo number pr karna hai to vo karna ka leya convert string to number and this is called as datatype conversion and remember one thing while conversion jis mein convert karna hai vo datatype likho in such a way that it first letter is captil.

let valuetoNumber = Number(score); // --> to ye likhne sa ye gurantee hai ke hamra jo score(string) hai vo number mein convert ho gaya hai.

console.log(typeof valuetoNumber)
console.log(valuetoNumber) // --> yaha pr we printing our valuetoNumber and remember one thing ke agar meri string mein jo number hai proper number nhi hai then hmara usko number mein convert karna shi nhi raha ga and even if we converted it into number then valuetoNumber print karna par "NaN" aa jaya ga that means not a number.


// let say hamra score mein null hota then number mein convert karna par javascript null ko zero kar deta and also converted the null datatype into number datatype.
let mark = undefined

let valuemarktoNumber = Number(mark);
console.log(typeof(valuemarktoNumber));
console.log(valuemarktoNumber);

// if we give value undefined to the score variable then javascript mein jab hum es score ko number mein convert kara ga then it get converted into number datatype but it give value -> NaN.

// Now converting number into boolen :
// let isLoggedIn = 0;
// let valuetoBoolean = Boolean(isLoggedIn);
// console.log(typeof(valuetoBoolean));
// console.log(valuetoBoolean);


// Now converting string into boolen :
let isLoggedIn = "yash";
let valuetoBoolean = Boolean(isLoggedIn);
console.log(typeof(valuetoBoolean));
console.log(valuetoBoolean);

// Note :We observe that agar mera string empty hai then convert hona ka badd boolean mein uski value ho ge false but agr mera string empty nhi hai then convert hona ke badd uski value boolean mein hoge true.