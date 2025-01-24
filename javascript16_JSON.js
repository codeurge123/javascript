// De-structuring of Object : 
// Aap array ke bhe de-structuring kar skta hai or aap object ke bhe de-structuring kar skta hai But in today lecture hum dekhaa ga Object "ko De-Structure" karna 

// Let see de-structuring of Object :
const course = {
    coursename: "js inn hindi",
    price: "999",
    coursInstructor: "hitesh"
}

// Agar aapko course object ke kise bhe value ko access karna hai to aap use karta hai dot operator --> but kie bar kya hota hai ke aapko code clean bana hota hai to aap etna badd nhi likh na chata(course.Instructor) to then we use destructuring of Object.

// const {coursInstructor} = course;
const { coursInstructor: instructor } = course;

// Ab agar aapko lag rah hai ke courseInstructor kuch jayada he bada naam hai to aap esko apna hisab se bhe naam de skta hai
console.log(instructor);


// Let's Understand the concept of API :
// --> Jab bhe aapko apna kaam kese or ke sir par dal dena hai to ussi ko "api" khata hai.



// Ab API kuch nhi hai basically apka pass kuch values ate hai backend saa to unn values ko kaisa aap likh te hai.. phala values XML format mein ate the but ab  values JSON fromat mein ate hai.
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// } --> This is our JSON Code.

// [
//     {},
//     {},
//     {}
// ] --> Sometimes humko API array ke format mein bhe milte hai. 