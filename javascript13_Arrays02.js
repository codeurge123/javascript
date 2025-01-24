const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);
// Basically agar mein marvel_heros ke andar directly dc_heros push kar deta hu then mera array ke andar array aa jaya ga jo ke humm nhi chata.
// Basically aisa es leya ho rh hai b/c arrays (in javascript) kese bhe tarika ka data store kar leta hai 



// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); // --> to jab hum na dc_heros ko push kara in marvels_heros then marvel_heros mein mera pura ka pura array push ho rh hai rather then pushing of elements to agar mujhe element of dc_heros ko access karna hai to mujhe marvel_heros[3][1] kar ke karna hoga jo ke ek acche practice nhi hai.


// To eska ek alternative tarika hota hai jo use hota hai 2 arrays ko merge karna mein and ye tarika dosra array ko exact merge karna ke bajaya dosra array ke elements ko merge karta hai.
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);
// To humm ko ek chij samaj mein aye ke concat() function return karta hai new Array ko ke combination hota hai array jisme and jisko concat. kar rh hai whereas push() function existing array mein he push karta hai elements ko.

// Another way to merge 2 arrays :
// Spread Operator : 
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];  // --> Ab ess situation ko handle kasa kara.  
const real_another_array = another_array.flat(Infinity);
// Ye flat() function hamra jitna bhe array ke andar arrays hai unn ko single array mein kar ke de dega. --> (infinity) likha es leya hai ke infinity depth tak ke array ko single array mein convert kar do ,humm cha hai to values bhe de skta hai ke etni depth tak ke arrays ko single array mein kar doo.
console.log(real_another_array);


console.log(Array.isArray("YashBansal")) // --> ye batya ga ke given i/p array hai ya nhi and uss basis par output mein true/false de ga

console.log(Array.from("YashBansal"))
// Basically from() function mein jo bhe values/input aap de ga ye usko array mein convert kar dega.

console.log(Array.from({name: "yash"})); // --> ess case mein ye de ga an empty array b/c ye esko array mein convert nhi kar pa rh -->  to yaha par aapko bolna hoga ke keys ka array bano ya eski values ka array bano. 

// Agar mera (from function) array nhi bana pa rh hai to ye mujhe dega an empty array.


let score1 = 100;
let score2 = 200;
let score3 = 300;

// Basically aap ke pass aise bhe situation aya ge jaha par aapka pass mutiple variables hai and aapko unko array mein convert karna hai.-> to vo kaisa kara ga let see: 
console.log(Array.of(score1,score2,score3));
// This is how we convert multiple variables into array 

