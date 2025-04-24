///API
///DeStructore in object


const course={

    coursename:"js",
    price:233,
    couseInstructor:"Akshay"

}

//course.couseInstructor

// to make the code more easly usebale
// const{couseInstructor}=course or ..
const{couseInstructor: instructor}=course////here we de-structure the big name into usable formate 
console.log(instructor)



 /////////////////////react methode
const navbar=({company})=> {///destructuring

}
navbar(company ="akshaycompany");


////////////////////////JSON(javascript object notation)
// in json key and value is in String

// {
//     "name":"akshay",
//     "email":"askw874@gmail.com",
//      "gender":"male"
// }



