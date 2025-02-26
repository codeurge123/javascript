// The Only reason we are able to access these things is because of ES6+

// classes : 
// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword() {
//         return `${this.password}abc`
//     }


//     ChangeUsername() {
//         return `${this.username.toUpperCase()}`;
//     }

// }

// const chai = new User("chai", "chai@gmail.com", "123")

// console.log(chai.encryptPassword());
// console.log(chai.ChangeUsername());




// If class is not avaiable in Javasccript then how we do this same thing let see :
function User1(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User1.prototype.encryptPassword = function() {
    return `${this.password}abc`;
}

User1.prototype.ChangeUsername = function() {
    return `${this.username.toUpperCase()}`
}

const tea = new User1("tea","tea@example.com","231")
console.log(tea.encryptPassword())
console.log(tea.ChangeUsername())


// Now let's understand inheritance in js through concept of classes :
class Empolyee {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username is ${this.username}`);
    }

}

// Basically using extends keyword we can inherite all the properties and method of one class into another class.
class Teacher extends Empolyee {
    constructor(username,email,password) {
        super(username); // --> Using this super() method we want to refer that bring username of teacher by using constructor method of empolyee class and in this super method we don't have to stress about "this" keyword.
        this.password = password;
        this.email = email;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }

}

const chaiCode = new Teacher("chaiCode","chaiCode@teacher.com","123");
chaiCode.addCourse();

const masalaChai = new Empolyee("masalaChai");
// masalaChai.addCourse() // --> Ess masalaChai ke pass addCourse ka access nhi hai b/c addCourse is a method that is present in another class.
masalaChai.logMe()


console.log(chaiCode === masalaChai); // kya chaiCode equal hai masalachai ke --> answer is nhi b/c both are instance of different classes. 


console.log(chaiCode === Teacher) // --> yaha par bhe esliya "false" aa rah hai because chaiCode hmara instance hai Teacher ka naa ke exactly Teacher he hai.

// To know whether the praticular object is the instance of particular class we use "instance of" keyword: 
console.log(chaiCode instanceof Teacher)
console.log(chaiCode instanceof Empolyee) // --> ess mein bhe true es liya aa rah hai because hamra Teacher is inherited from Empolyee class.



// Static Properties : 
class User{ 
    constructor(username) {
        this.username = username;
    }

    loggMe() {
        console.log(`Username : ${this.username}`);
    }

    static createId() {
        return `123`;
    }
    // --> Using static keyword hamra object can't use these method who are assigned static    
}

const yash = new User("yashbansal");
// console.log(yash.createId()); --> this will show error b/c hum ne createId wala method ko static bana deya hai to ab object ess method ko access nhi kar skta.

class Teacherr extends User {
    constructor(username,email) {
        super(username);
        this.email = email;
    }
}

const iphone = new Teacherr("iphone","i@phone.com");
iphone.loggMe()
// console.log(iphone.createId()) --> here also this will show error because createId method static hai and we know object can not access method having static keyword.




