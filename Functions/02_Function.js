// function calculatePrice(...num1){//rest operator or spred operator here its a rest operator

//       return num1;

// }
// console.log( calculatePrice(200,2100,300));//output :[ 200, 2100, 300 ]


// function calculatePrice(val1,val2,...num1){//rest operator or spred operator here its a rest operator

//     return num1;

// }
// console.log( calculatePrice(200,2100,300));//output [ 300 ]



const user={
    username:"akshay",
    price:1112
}
function handleObject(anyObject){
   console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
   
}
handleObject(user);

handleObject({
    username:"sam",
    price:230
});
const newarray=[200,401,600,700]

function returnsecondValue(getArray){
    return getArray[1]
}
console.log(returnsecondValue(newarray));
console.log(returnsecondValue([2101,201,203,402])) 