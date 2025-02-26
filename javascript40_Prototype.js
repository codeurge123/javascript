// Prototypes :
// Note : javacript ka jo default behaviour hai vo hai prototypeal behaviour that means javascript by default -> prototype language hai.


function mutlipleBy5(num) {
    return num * 5;
}

mutlipleBy5.power = 2;


console.log(mutlipleBy5(3))
console.log(mutlipleBy5.power);
console.log(mutlipleBy5.prototype)
// From this above discussion we understood that javascript mein har ek chij object he hoti hai and hamra function js mein function ke tarah bhe behave karta hai and object ke tarah bhe behave karta hai


// Note : khi na khi hmara array,string bhe ek object he hai. but ab sawal ata hai ke kya hamra function bhe ek object hai ya nhi. eska jawab jann ne ke leya see above



function createUser(username,score) {
    this.username = username
    this.score = score   
}


// Aap chahoo to object/function ke andar khud ka bhe mathods inject kar skta ho.
// Let see How : 
createUser.prototype.increment = function() {
    this.score++;
}
createUser.prototype.printMe = function() {
    console.log(`Price is ${this.score}`)
}

// 'this' ka simple sa matlab hai ke jis ne bhe bulya hai uska kaam kardo.

const chai = new createUser("chai",25)
const Tea = new createUser("tea",250)

chai.printMe()



// Let's Understand Prototype : 
// let myName = "yashbansal        "
// let myChannel = "chai          "

// console.log(myName.truelength)




let myHeros = ["thor","spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.Yash = function() {
    console.log(`Yash is present in all object`);
}



// heroPower.Yash(); --> humm na object mein method insert kara hai "Yash" naam se and vo ab heroPoer obejct mein bhe aa gaya hai because meri hara ek chij ka prototype in javascript "Object" he hai.
myHeros.Yash() // --> Ab from this we clearly understand that hum ne object mein method insert kara hai and vo ab har ek datatype mein aa chuka hai b/c har ek datatype kahi na kahi object he hota hai in javascript ya har datatype ka prototype object he hota hai in javascript(js).



// And agar humm array mein koi new method insert karta hai to usss method ka access sirf or sirf array ke pass he hona chiya nake keise object ke pass --> Let see : 
Array.prototype.heyYash = function() {
    console.log(`Yash says hello`);
}

myHeros.heyYash() // --> ess ke pass to heyYash ka access hoga b/c ye ek arrray hai but object ke pass eska access nhi hoga because js neeccha se upar jati hai matlab prototypical inheritance follow karti hai
// heroPower.heyYash() --> this show error b/c it doesn't have access to this method b/c we insert this method in "array".



// Inheritance : 

const User = {
    name: "chai",
    email: "chai@gmail.com"
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assigenment',
    fullTime: true,
    
    // To inherite the properties of other Object what we have to do is : 
    __proto__: teachingSupport
}

// Aisa nhi hai ke aap kese or object ka access in another object andar he le skta ho object literal ke aap chahoo to aap bahar bhe keise or object mein another object ka access le skta ho.

teacher.__proto__ = User // --> By writing this humm kahana chaa raha hai ke User ke sari properties ka access de doo in teacher object. and yhi aapki prototypial inheritance hai.



// Note : ye jo humm ne inheritance ka tarika upar padha hai ye ab purna ho chuka hai So, what is the modern syntax for inheritance in javascript 
// Let see : 


// Modern syntax : 
Object.setPrototypeOf(teachingSupport,teacher); // --> from this statement hum kahana cha rah hai ke Object teachingSupport mein aap sari ke sari properties inherite kar lo teacher Object ke.


// Now, let's do the goal we want to do : 
let anotherUsername = "chaiaurcode        ";
String.prototype.trueLength = function() {
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()


// Note : Now there is an doubt that js mein phala humm ne instance banya tha prototype se added function hai usko use karna ke leya but yaha pr to humm ne instance nhi banya or tab bhe code sahi run kar rah hai aisa kaisa --> aisa es leya b/c vaha par function mein prototype add keya tha or yaha par datatypes mein kar raha hai..

