function setUsername(username) {
    // complex DB calls
    this.username = username
    console.log('called')
}

function CreateUser(username,email,password) {

    setUsername.call(this, username)
    // --> .call method ek explicit method hai setUsername ko call karna k leya and ess method se ho kya rah hai ke aap this.username = username jo aap na pass keya hai vo assign kar pa raha ho  but ab ek or problem hai ke this to setUsername ke username mein username jo humm na deya hai usko assign kar rah hai but humm chata hai ke hamra createusername ka username mein input username assign ho . so for doing this pass '(this , username)'.   

    // Basically '.call method' ka use hota hai kese bhe function call ke reference ko hold karna ke leya.

    this.email = email;
    this.password = password;
}

const chai = new CreateUser("yashbansal","yash@example.com",1312)
console.log(chai)