
const marvel=["thor","IronMan","Spiderman"]
const dc= ["Batman","Superman","Wonder Woman"]
const Bolly=["shaktiman",'krish']

//marvel.push(dc);//its give you same array
//console.log(marvel);

const combin=marvel.concat(dc,Bolly);//marge arrays and give new array .
console.log(combin)


const allnew = [...marvel,...dc,...Bolly];//spreed operator  give new array it can add multiple arrys 
console.log(allnew);

const anotherarr= [1,2,3,4,[3,4,6,7],9,[1,2,3,4]];
console.log(anotherarr);
console.log(anotherarr.flat())


// -----checking th given Element is array or not-----
console.log(Array.isArray("Akshay"));

//------to conver the string into array-----
console.log(Array.from("Akshay"))


//interview perspective(it can not convert the give field in String the method so it give us the empty array)
console.log(Array.from({
    name:"akshay"
}))

// -----of()----------combines the arrays and give new array-----
let score1 =100;
let score2 =200;
let score3=300;

console.log(Array.of(score1,score2,score3))