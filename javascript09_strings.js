// string ko hum 'single cot' se bhe denote kar skta hai and "double court" se bhe denote kar skta hai.
// "hello"+"world" --> asa karna par string add ho jaya ge 

const name = "yash";
const repocount = 50

// console.log(name + repocount + " Value"); --> ye syntax thoda outdated hai for adding strings
// humm kuch ess tarika sa apni strings ko add kar skta hai using javascript.

// In mordern time ye karna ke leya humm use karta hai back-ticks this method is called as string interpolation.
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);
// basically es method mein aap banta hai placeholder and un ke andar jo bhe variable hai vo aap directly vaha par inject kr skta hai.
// placeholder kuch es tarika se banta hai --> ${}


// There are some other ways also to declare the string: 
const gameName = new String('yash-ba-ns-al');

// basically we know string mein key-value pairs hai to mujhe 0th key ke corresponding value access karne hai to mein kr skta hu
console.log(gameName[0]);
// So this is how we can access key-value pairs in string.

// We can also the prototype of this string :
console.log(gameName.__proto__);
// Using this aap string ke methods/object dekh skta hai and aisa nhi hai ke aap ko unn methods/object ko access karna ka leya bar bar .__proto__ lagna pada ga , aap cha hai to aap directly bhe un ko access kar skta hai


console.log(gameName.length);
// This method tell about/ give the length of the string.

// For printing all the string character in uppercase we can use the method -> toUpperCase()
console.log(gameName.toUpperCase())
// But remember one thing -> ye karna se meri jo orginal string hai vo change nhi ho rhi hai   b/c yaha pr mera stack memory alloaction ho rh hai.

// Agar mujhe pata lagna hai ke given position/index pe mera konsa character hai vo bhe mein pata kar skta hu using string methods
console.log(gameName.charAt(6));

// And eska reverse bhe possible hai means -> agar mujhe pata lagna hai ke mera ye particular character string mein konsi position/index par hai to vo bhe mein kar skta hu using string method
console.log(gameName.indexOf('b'));



// Some other Strings Methods are : 

const newString = gameName.substring(0,4);
console.log(newString);
// We notices that last mein jo hum ne value dale hai vo include nhi ho rhi hai because hamri newString mein 0 se 3 tak character aya hai. 

// const newString = gameName.substring(start konsa index se karna hai vo likho, konsa index tak ke character chiya vo index likho).

// Note: agar substring mein negative value de ga to vo obey nhi kara ga unko and 0 ko as a starting index consider kar ke string store kara dega.

// slice method : 
const anotherString = gameName.slice(-8,4);
// slice method ke sab se intersting chij hai ke es ka andar humm negative value bhe de skta hai and humm negative value de ga to ye reverse sa start ho ga
console.log(anotherString);

// Now understand about trim method in string : 
const newStringOne = "     yashbasnal      "
// Basically mein ye space save nhi karna chahu ga to enko mein remove kar skta hu using trim method

// kaafi time ho skta hai user jab input de rh hai webpage par to vo by mistake spaces de da rah to mein ye spaces nhi chata lena to mein ye spaces remove kar skta hu using trim method.

console.log(newStringOne);
console.log(newStringOne.trim()); // --> trim basically hamra starting and ending spaces ko string mein se remove kar deta hai.

// hamra pass trimstart and trimend bhe hota hai jismein trimstart kaval or kaval start mein se space ko remove kar deta hai and trimend kaval or kaval end mein se space ko remove kr deta hai.


// Replace method :
const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'));
// This is how we can replace the particular part/section of the string using replace method.


// url.includes('hitesh'); --> ye batya ga ke hmari url string mein hitesh present hai ya nhi agar present hai then it return true else it return false.
console.log(url.includes('hitesh'));

// Ab agar mein chahu to mein based on '-' apni gameName string ko split/separate kar skta hu into array using split method

console.log(gameName.split('-'));
// yaha par split() mein pahal hum ne batya hai ke string ko kis basic par mein split karna chata hu into array
