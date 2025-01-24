// Ek comman situation arise hote hai jab hum aga ja kar website bana rah ho ga that is while desgin shopping cart humko pata nhi hota hai ke ketna argumenet function mein pass ho ga and humko unko add karta jana hai to ye kasa kara ga --> to es situation ko kase resolve kar skta hai : BY USING REST OPERATOR

function CalculateCartPrice(...num1) {
    return num1
}

// basically by the help of rest operator(...) humm function ke andar ketni bhe value pass kar skta hai as an argument and ye operator mujhe un sabhe value ko ek array mein kar ke de dega and in future to hum loop lagna sikh he jaya ga to array par loop laga kar calucluate kar le ga total price.
console.log(CalculateCartPrice(200,300,6000,1200,349));


// Now let see ke object ko function mein kasa pass keya jata hai and use keya jata hai.

const user = {
    username: "yashbansal",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)

}

// handleObject(user); --> Zarroi nhi hai ke aapko object aise he pass karna hai function , aap kuch es tarika se bhe object ko pass kar skta hai function mein 
handleObject({
    username: "hiteshsir",
    price: 999
})

// --> Ab aap chahai to array bhe pass kar skta hai function mein
const myArr = [200,400,500,600,300];

function returnsecondValue(arr) {
    return arr[1];
} 


const ans = returnsecondValue(myArr);
console.log(`Second Element of the array is ${ans}`);
console.log(returnsecondValue([200,300,400,2,3,4])) // --> Aap aisa bhe array pass kar skta hai function mein.



// Note : Javascript mein hum function mein parameter ka datatype nhi likh te hai.