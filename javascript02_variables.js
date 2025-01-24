const accounId = 142335
let accounEmail = "yashbansal@google.com"
// yaha par hum ne likha let jis sa ek variable create ho gaya matlab memory mein ek space reserve ho gyi hai and esko change bhe kiya ja skta hai.
var accountPassword = "12345"
// var ko bhe hum change kar skta hai but the only difference b/w let & var is of scope.
// let has local scope whereas var has gloabal scope and mostlywe use "let" as "variable keyword"

accountCity = "jaipur" // javascript etni safe language hai ke aap bina variable ke aaga kuch bhe likha hua -> bhe varible ke memory reserve kar skta ho.

let accountState;
// Agar aap javascript mein variable declare kar ke chodd deta hai and uski koi bhe value assign nhi karta to javascript usko undefined manti hai ya uski value ko undefined mark kr deti hai


// basically jab bhe "const,let,var" mila to usko memory ke andar assign kardo
// const ka matlab hota hai ke jo value hum ne usko assign kar de hai ekbar to usko change nhi kiya ja skta abb vo lock ho chuki hai.

// accountId = 23 --> We notice that after changing the accountId phir bhe purni vali id print hue hai that means accountId don't get change b/c accountId hamra ek "const" keyword hai and the value of const keyword remain same that is constant

console.log(accounId); 
// console.log() ka hum use karta hai printing ke leya on screen 



accounEmail = "yash@c.com"
accountPassword = "221212312"
accountCity = "Bengaluru"

// Humm cha hai to ek he bar mein sara varaibles ke value ko print kara skta hai by using console.table([])
// Let see the syntax : 
console.log([accounId,accounEmail,accountPassword,accountCity,accountState]);


// Note : Prefer not to use var because of issue in block scope {} and fucntional scope