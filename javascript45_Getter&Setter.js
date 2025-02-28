class User {
    constructor(email, passsword) {
        this.email = email;
        this.passsword = passsword;
    }


    // Note : Remember one thing ke getter and setter mein same property ka he naam likh te hai as a method.

    get email() {
        return this._email.toUpperCase();
    }

    set email(value) {
        this._email = value
    }


    // How to apply getter and setter : 
    // Note : Agar getter aya ga to setter bhe aya ga he matlab getter and setter mein se kuch bhe use karna hai to dosra bhe use karna padaga.
    get passsword() {
        // return this._passsword.toUpperCase()
        // kuch aisa bhe manipulate kar skta hai password ko humm:
        return `${this._passsword}coolcollege`
    }

    // Agar koi value set karna chata ho class ke andar to "setter" use hota hai. 
    set passsword(value) {
        this._passsword = value;
        // Remember one thing ke "setter" ko kabhe bhe return nhi karta hai.
    }


}

const u1 = new User("yash@example.com", "yash@jiit")
console.log(u1.passsword);
console.log(u1.email)


// Basically hum getter and setter use karta hai jab humm kese bhe object ke chijo(property/method) ka access nhi dena chata kese ko bhe.


// Agar class ke bahar se koi value get karna chata ho to es liya "getter" use hota hai



// Note : 'Maximum call stack size exceeded' ye error ataa hai when hum constructor and setter dono ke andar object ke property ke value set kar raha hota hai. 
// Now , How to solve this error : 
// by using new property name in setter and getter to set and get the password property so that no one can access this particular property or if any one can access this then the format/text of that property must changed.


// Now, Let's see yahi same kaam phala ke time mein kaisa keya jata tha : 
function Empolyee(email, passsword) {
    this._email = email;
    this._passsword = passsword

    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase();
        },
        set: function (value) {
            this._email = value;
        }
    })
    Object.defineProperty(this, "passsword", {
        get: function () {
            return `${this._passsword}bsaweew`;
        },
        set: function (value) {
            this._passsword = value
        }

    })
}

const chai = new Empolyee("chai@mail.com", "2323nam")
console.log(chai.email)
console.log(chai.passsword)



// Getter and Setter Using Object : 
const Userr = {
    _email: 'h@hc.com',
    _password: "abc",


    get email() {
        return this._email.toUpperCase()
    },
    set email(value) {
        this._email = value
    }

}

const Userr1 = Object.create(Userr); // object created
console.log(Userr1.email)




