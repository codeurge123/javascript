// Now Let Understand about nested scope : 
function one() {
    const username =  "yashbansal";

    function two() {
        const website = "youtube";
        console.log(username);
    }
    // console.log(website); --> yaha par error show ho jaya ga b/c mera website variable define he nhi hai and remember one thing ke hamra program always line by line execute hota hai

    two() // --> yaha par hum na two wala function ko execute kar deya 
}

one() // --> yaha par hum na one wala function ko execute kar deya

if(true) {
    const username = "yash";
    if(username === "yash") {
        const website = " youtube";
        console.log(username + website);
    }
    // console.log(website); // --> this will show error b/c website define he nhi hai in this scope
}

// console.log(username); --> this will also show error b/c we are executing username out of its scope and in current scope username is not defined


// Another way to create function is through variable : 

/* ye bhe function he hai but yaha par kabhe kabhe es ko expression bol deta hai */  const addTwo = function(num) {
    return num + 2;
}

addTwo(5);

// Dono tarika sa function declare karna mein ek difference hai ke first method jis sa function declare keya tha uss mein aap function call ko function defination ke upar bhe likh skta hai and execute kar skta hai but in second way of declaring function there will be an error if you placed function call above the function defination.